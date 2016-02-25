#!/usr/bin/env bash

# ----------------------------------------------------------------------
# Este Script instala todos los paquetes necesarios para trabajar
# ----------------------------------------------------------------------

# Actualiza Aptitude
apt-get update

# Instala Docker
curl -sSL https://get.docker.com/ | sh
##
docker run -p 3000:3000 --name microservices -v /vagrant/repositorio:/usr/local/ -h microservices -itd oiestradag/nodejs-seneca

docker run -p 80:3000 --name apigateway -h apigateway -itd oiestradag/nodejs-apigateway