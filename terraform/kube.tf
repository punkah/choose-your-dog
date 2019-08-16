provider "kubernetes" {}

resource "kubernetes_pod" "client" {
  metadata {
    name = "clientt"
    labels = {
      App = "client"
    }
  }

  spec {
    container {
      image = "eu.gcr.io/choose-your-own-dog/dog_client:latest"
      name  = "client"

      port {
        container_port = 3000
      }
    }
  }
}
resource "kubernetes_pod" "server" {
  metadata {
    name = "serverr"
    labels = {
      App = "server"
    }
  }

  spec {
    container {
      image = "eu.gcr.io/choose-your-own-dog/dog_server:latest"
      name  = "server"

      port {
        container_port = 5000
      }
    }
  }
}

resource "kubernetes_service" "client-service" {
  metadata {
    name = "client-service"
  }
  spec {
    selector = {
      App = kubernetes_pod.client.metadata[0].labels.App
    }
    port {
      port        = 3000
      target_port = 3000
    }

    type = "LoadBalancer"
  }
}
resource "kubernetes_service" "server-service" {
  metadata {
    name = "server-service"
  }
  spec {
    selector = {
      App = kubernetes_pod.server.metadata[0].labels.App
    }
    port {
      port        = 5000
      target_port = 5000
    }

  }
}

output "lb_ip" {
  value = kubernetes_service.client-service.load_balancer_ingress[0].ip
}