Prerequisites:
docker
terraform
kubectl

Deployment steps:

1. Create docker images:

   > docker build -t <image name> ./client
   > docker build -t <image name> ./server

   For Google Cloud Platform the image name should be in this format:
   <region>/<container registry name>/<image name>:<image tag>

2. Push them to the container registry

   > docker push <image name>
   > For both client and server

3. (optional) Alternatively, for local deployment use docker-compose:

   > docker-compose up --build

4. If there is no infrastructure set up yet in GCP run the following:

   > gcloud init
   > This will initialize the connection to GCP

   > terraform init
   > This wil initialize terraform

   Create a service account in GCP, download the JSON and save it to the ./terraform folder under account.json.

   Then assign editor rights to the service account:

   > gcloud projects add-iam-policy-binding <your project name> --member <service account> --role roles/editor

   Modify the config files in the ./terraform directory to reflect your project name etc. Then run this command.
   This will create GCP infrastructure based on the \*.tf config files.

   > terraform apply

   To be able to use kubectl run this:

   > gcloud container clusters get-credentials <cluster name created by terraform> --region=<region>

   This will get the configuration to be able to access the Kubernetes cluster via console.

5. In the ./kube directory run this for all config files:

   > kubectl create -f <config file>

   This will deploy the images to Kubernetes.

6. After this, the website should be up and running. To see the external IP address run
   > kubectl get service client
