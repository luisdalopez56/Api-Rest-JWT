# Api-REST con MongoDB, Express, Mongoose y JWT

## Descripción

Este proyecto se basa en un servicio **REST** sobre una base de datos **MongoDB**. 
Se utiliza **mongoose**, **express** para compartir los datos entre la base de datos
y la APP. Utiliza autorización mediante tokens (**JWT**). Aplicacion con arquitectura **MVC**.

## Comenzando 🚀

Necesitaremos tener instalados **Node.js**, **NPM** y **MongoDB**, podemos obtenerlos 
desde la página web si estamos usando Windows, y si estámos usando Ubuntu 
tenemos diferentes comandos para instalarlos. Todo el funcionamiento se ha comprobado mediante el programa **POSTMAN** que podemos obtener desde su página:
[https://www.getpostman.com/downloads/](https://www.getpostman.com/downloads/) 

### Windows
```
## Desde esta página instalamos NodeJS y npm conjutamente
https://www.npmjs.com/get-npm 

## Desde esta página podemos instalar MongoDB
https://www.mongodb.com/download-center/community
```

Despues de instalarlos deberemos ejecutar el comando "mongod" en una terminal CMD para poner al servicio el servidor mongo. En una nueva terminal abierta en la carpeta del proyecto ejecutaremos "npm start", con esto ya tendremos nuestro servidor listo para peticiones.

### Ubuntu

```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ sudo apt install -y mongodb
```
Despues de instalarlos deberemos ejecutar el comando "mongod" en una terminal Ubuntu para poner al servicio el servidor mongo. En una nueva terminal abierta en la carpeta del proyecto ejecutaremos "npm start", con esto ya tendremos nuestro servidor listo para peticiones.

## Rutas del servidor

Podemos refactorizar nuestra API para adaptarla a nuestro programa según nuestras necesidades. Esta aplicación es muy básica y vamos a tener las siguientes rutas que ya están preparadas para realizar cosas sencillas. Es muy sencillo reescalar la API.

Todo ejecutado desde la ruta base localhost: 'http://localhost:3001/api/....'

```
GET    '/product'            --> Obtenemos JSON de productos insertados en la base de datos.
GET    '/product/:productId' --> Obtenemos un JSON del producto con la ID introducida.
POST   '/product'            --> Hacemos un POST de un producto a crear, con los datos en la cabecera.
PUT    '/product/:productId' --> Hacemos un POST con el ID del producto a modificar con los nuevos datos que vamos a modificar en la cabecera.
DELETE '/product/:productId' --> Hacemos un DELETE del producto con la ID que se introduce.
POST   '/signup'             --> Hacemos un POST para añadir un nuevo usuario para autenticar en la base de datos de Mongo, esto devuelve un token.
POST   '/signin'             --> Hacemos un POST para logearnos, con los datos en la cabecera.
GET    '/private'            --> Hacemos un GET, se debe envíar el token del usuario creado, para de esta forma si está registrado obtener el resultado correcto.
```

## Schemas de los objetos

Esquema de los objetos para usarlos como guía a la hora de realizar los POST para crearlos.

```
## Product

name: String
picture: String
price: {type: Number, default: 0}
category: {type: String, enum:['Computers','Phones','Accesories']},
description: String,

## User

email: {type: String, unique: true, lowercase: true},
displayName: String,
password: {type: String},
```
## Arbol de directorios

Aquí podemos observar de una forma mas gráfica como se presenta la API
```
API-Rest
│   app.js
│   config.js
│   index.js
│   package-lock.json
│   package.json
│   README.md
├───controller
│       product.js
│       user.js
├───middlewares
│       auth.js
├───models
│       product.js
│       user.js
├───routes
│       index.js
└───services
        index.js
```
## Autor

Luis David López Uceda [luisdalopez56@gmail.com]() https://github.com/luisdalopez56 

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
