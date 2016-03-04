##Configuración experimento1:


1. Clonar repositorio
   git clone https://github.com/mati-arq-new-g01/experimento1.git

2. Ir a la raiz del directorio donde se descargaron los fuentes y ejecutar y ejecutar el comando
   vagrant up


3. Subir instancia de Mongo

	docker exec -it petsdb bash

	mongod &
	
	mongoimport --db test --collection pet --file /home/petsdb/petsf.json
	
	exit

   
3. Subir instancia del microservicio
	
	docker exec -it microservices bash
	
  	cd /home/pets/
  
  	node server.js &
  	
  	exit

4. Subir instancia del api-gateway

	docker exec -it apigateway bash
  	
	cd /home/apigateway/
		
  	node . &
  
  	exit

##Validaciones:
###Microservicios
http://localhost:3000/act?api=dogs&cmd=risk&uname=tarzan

###Api-gateway
http://localhost:8080/explorer/#!/pet/pet_findRiskZone

###Front
http://localhost/public/index.htm?uname=toby

http://localhost/public/index.htm?uname=boby

http://localhost/public/index.htm?uname=chester

http://localhost:3000/act?api=dogs&cmd=count
