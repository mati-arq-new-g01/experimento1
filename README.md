#Configuración experimento1:


1. Clonar repositorio
   git clone https://github.com/mati-arq-new-g01/experimento1.git

2. Ir a la raiz del directorio donde se descargaron los fuentes y ejecutar y ejecutar el comando
   vagrant up

3. Subir instancia del microservicio

	docker run -p 3000:3000 --name microservices -v /vagrant/repositorio:/usr/local/ -h microservices -itd oiestradag/nodejs-seneca

	docker exec -it microservices bash

	mongod &

	cd /usr/local/microservices/backup
	
  	sudo mongoimport --db test --collection pet --file pets.json
  	
  	cd /usr/local/microservices/
  
  	node server.js &
  	
  	exit

4. Subir instancia del api-gateway

	docker run -p 80:3000 --name apigateway -h apigateway -itd oiestradag/nodejs-apigateway

  	docker exec -it apigateway bash
  	
	cd /usr/local/api-gateway
		
  	node . &
  
  	exit

#Ingresar a:
http://localhost:3000/act?api=dogs&cmd=risk&uname=tarzan

http://localhost/explorer/#!/pet/pet_findRiskZone



