#!/bin/bash
export IMAGE_TAG='amlfitco/node-drivenmensfitnessapi'


# How to build a docker image using the docker file
# -t is the tag "name"
sudo docker build . -t $IMAGE_TAG

# View images
sudo docker images