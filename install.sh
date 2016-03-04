#!/usr/bin/env bash

# ----------------------------------------------------------------------
# Este Script instala todos los paquetes necesarios para trabajar
# ----------------------------------------------------------------------

# Actualiza Aptitude
apt-get update

# Instala Docker
curl -sSL https://get.docker.com/ | sh
##

docker run --name petsdb -v /home/vagrant/petsdb:/home/petsdb -h petsdb -itd matiang01/mongo

docker run -p 3000:3000 -p 80:9000 --name microservices  -v /home/vagrant/microservices:/home/pets -h microservices -itd matiang01/nodejs

docker run -p 8080:3000 --name apigateway -v /home/vagrant/api-gateway:/home/apigateway -h apigateway -itd matiang01/nodejs
