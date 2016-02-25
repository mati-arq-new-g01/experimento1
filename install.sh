#!/usr/bin/env bash

# ----------------------------------------------------------------------
# Este Script instala todos los paquetes necesarios para trabajar
# ----------------------------------------------------------------------

# Actualiza Aptitude
apt-get update

# Instala Docker
curl -sSL https://get.docker.com/ | sh
##
