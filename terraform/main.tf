terraform {
    backend "gcs" {
        bucket = "craton-274216-terraform"
        prefix = "/state/userrouter"
    }
}