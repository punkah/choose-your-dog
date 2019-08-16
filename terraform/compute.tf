resource "google_container_cluster" "dog-cluster" {
  name               = "dog-cluster"
  location           = "europe-west1-b"
  initial_node_count = 1
  node_config {
    oauth_scopes = [
      "https://www.googleapis.com/auth/compute",
      "https://www.googleapis.com/auth/devstorage.read_only",
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}
