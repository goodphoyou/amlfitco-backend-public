
#STOP ALL CONTAINERS
sudo docker stop $(sudo docker ps -a --format="{{.ID}}")
#REMOVE ALL CONTAINERS
sudo docker rm $(sudo docker ps -a --format="{{.ID}}")
#REMOVE ALL IMAGES
sudo docker rmi $(sudo docker images --format="{{.ID}}")

echo "Check Environment, results should be blank except for headers"
sudo docker images
sudo docker ps -a