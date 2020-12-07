provider "mongodbatlas" {
  public_key = var.mongodbatlas_public_key
  private_key  = var.mongodbatlas_private_key
  version = "~> 0.6"
}

#   Cluster
resource "mongodbatlas_cluster" "mongo_cluster" {
  project_id   = var.atlas_project_id
  name         = "${var.app_name}-${terraform.workspace}"
  num_shards   = 1

  replication_factor           = 3
  provider_backup_enabled      = true
  auto_scaling_disk_gb_enabled = true
  mongo_db_major_version       = "4.2"

  provider_name               = "GCP"
  disk_size_gb                = 2
  provider_instance_size_name = "M2"
  provider_region_name        = "CENTRAL_US"
}

#   DB USER
resource "mongodbatlas_database_user" "mongo_user" {
  username           = "terraform-user-${terraform.workspace}"
  password           = var.atlas_password
  project_id         = var.atlas_project_id
  auth_database_name = "admin"

  roles {
    role_name     = "readWrite"
    database_name = "craton"
  }

  roles {
    role_name     = "readAnyDatabase"
    database_name = "admin"
  }
}

# ip whitelist
resource "mongodbatlas_project_ip_whitelist" "google_vpn_ip_access" {
  project_id = var.atlas_project_id
  ip_address = google_compute_address.ip_address.address
}