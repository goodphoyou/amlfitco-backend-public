#!/bin/bash
IMAGE_TAG='amlfitco/node-drivenmensfitnessapi'

# Command to start image
# -p HOST:CONTAINER
sudo docker run -p 4000:4000 -d $IMAGE_TAG

export CONTAINER_ID=$(sudo docker ps -a -q --filter ancestor=$IMAGE_TAG --format="{{.ID}}")

# COPY
sudo docker logs -f $CONTAINER_ID

# to log into container
# sudo docker exec -it $CONTAINER_ID /bin/bash