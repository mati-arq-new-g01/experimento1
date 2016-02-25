#!/bin/bash

# ----------------------------------------------------------------------
# Este Script agrega la llave RSA publica y privada al deposito de llaves
# de la maquina, de esa manera se puede contactar de manera segura con un
# repositorio remoto sin quemar credenciales
# ----------------------------------------------------------------------

echo 'Comienza a agegar llaves privadas'

DIR='/home/vagrant'

cp $DIR/id_rsa ~/.ssh/id_rsa
cp $DIR/id_rsa.pub ~/.ssh/id_rsa.pub

echo 'Guarda las llaves'

chmod 700 ~/.ssh/id_rsa
chmod 700 ~/.ssh/id_rsa.pub

echo 'Se agregaron los permisos'
