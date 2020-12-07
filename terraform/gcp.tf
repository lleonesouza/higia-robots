provider "google" {
    credentials = file("terraform-sa-key.json")
    project     = "craton-274216"
    region      = "us-central1"
    zone        = "us-central-c"
    version     = "~> 3.38"
}

#   IP  ADDRESS
resource "google_compute_address" "ip_address" {
  name = "craton-274216-ip-${terraform.workspace}"
}

#   NETWORK
data "google_compute_network" "default" {
    name = "default"
}

#   FIREWALL RULE
resource "google_compute_firewall" "allow_http" {
    name = "allow-http-${terraform.workspace}"
    network = data.google_compute_network.default.name


    allow {
        protocol = "tcp"
        ports = ["80"]
    }

    source_ranges = [ "0.0.0.0/0" ]

    source_tags = [ "allow-http-${terraform.workspace}" ]
}

#   OS IMAGE
data "google_compute_image" "cos_image" {
    family = "cos-81-lts"
    project = "cos-cloud"
}

# COMPUTE ENGINE INSTANCE
resource "google_compute_instance" "instance" {
  name         = "${var.app_name}-vm-${terraform.workspace}"
  machine_type = var.gcp_machine_type
  zone         = "us-central1-a"

  tags = google_compute_firewall.allow_http.target_tags

  boot_disk {
    initialize_params {
      image = data.google_compute_image.cos_image.self_link
    }
  }

  network_interface {
    network = data.google_compute_network.default.name

    access_config {
      nat_ip = google_compute_address.ip_address.address
    }
  }

  service_account {
    scopes = ["storage-ro"]
  }
}



