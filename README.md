
# Pre-requisitos
* java > 1.8
* mvn > 3.6.1
* mysql
* nodejs > 10.15.0
* npm > 6.4.1
* gulp CLI > 2.2.0
* bower > 1.8.8

## Postman
Ruta de collection en postman
https://www.getpostman.com/collections/63d3119c51d7bf9d1ab3

# Instalación de BD
1. Tener instalado mysql server
2. Tener un squema con el nombre 'user-administrator'
3. editar user-administrator\user-administrator-core\src\main\resources\aplication.yml para añadir user y pass del usuario de BD
4. Importar structure-data.sql al mysql 

# user-administrator-core
Para levantar el servidor
$ mvn spring-boot:run


# user-administrator-web
$ npm install // Va a realizar una pregunta sobre la version de angular. usar 1.5.8
$ npm run start:dev




