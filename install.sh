#!/usr/bin/env bash

# ----------------------------------------------------------------------
# Este Script instala todos los paquetes necesarios para trabajar
# ----------------------------------------------------------------------

# Actualiza Aptitude
apt-get update

# Instala Docker
curl -sSL https://get.docker.com/ | sh
##

docker run -p 3000:3000 -p 80:9000 --name microservices -h microservices -itd matiang01/nodejs-seneca

docker run -p 8080:3000 --name apigateway -h apigateway -itd matiang01/nodejs-apigateway
