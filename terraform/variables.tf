### GENERAL
variable "app_name" {
    type = string
}


### Atlas
variable "atlas_project_id" {
    type = string
}

variable "atlas_password" {
    type = string
}

variable "mongodbatlas_public_key" {
    type = string
}

variable "mongodbatlas_private_key" {
    type = string
}


### GCP

variable "gcp_machine_type" {
    type = string
}


### CloudFlare

variable "cloudflare_api_token" {
    type = string
}


variable "domain" {
  type = string
}