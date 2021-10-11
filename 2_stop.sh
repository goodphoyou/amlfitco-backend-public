#!/bin/bash
IMAGE_TAG='amlfitco/node-drivenmensfitnessapi'
CONTAINER_ID=$(sudo docker ps -a -q --filter ancestor=$IMAGE_TAG --format="{{.ID}}")

#STOPS CONTAINER
sudo docker stop $CONTAINER_ID
#REMOVES STOPPED CONTAINER
sudo docker rm $CONTAINER_ID
#LIST RUNNING AND STOPPED CONTAINERS
sudo docker ps -a