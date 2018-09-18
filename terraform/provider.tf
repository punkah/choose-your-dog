provider "google" {
  credentials = "${file("account.json")}"
  project     = "choose-your-own-dog"
  region      = "europe-west1"
}