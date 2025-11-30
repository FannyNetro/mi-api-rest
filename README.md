# Taller de APIs REST con Node.js y Express

Este proyecto es un **taller práctico** para aprender cómo construir una API REST usando **Node.js**, **Express** y **Nodemon**. Incluye rutas básicas con métodos HTTP como GET, POST, PUT, PATCH y DELETE.

## Descripción del Proyecto

El taller guía paso a paso la creación de un servidor Express, configuración de rutas, manejo de JSON y uso de herramientas para probar APIs.  
Es ideal para estudiantes o principiantes que desean comprender cómo funcionan las APIs REST.

## Dependencias Utilizadas

Las dependencias principales del proyecto son:

| Paquete      | Descripción |
|--------------|-------------|
| **Node.js**  | Entorno para ejecutar JavaScript en el servidor. |
| **Express**  | Framework minimalista para crear APIs REST. |
| **nodemon**  | Reinicia automáticamente el servidor en modo desarrollo cuando detecta cambios. |

## Instalación y Configuración

## Instalación de dependencias

npm install

## Ejecucuón del proyecto
Ejecutar en modo desarrollo

El servidor inicará en 
http://localhost:3000/

## Rutas disponibles
| Método | Ruta      | Descripción                               |
| ------ | --------- | ----------------------------------------- |
| GET    | `/`       | Respuesta básica del servidor.            |
| GET    | `/saludo` | Devuelve un JSON con un saludo.           |
| POST   | `/user`   | Recibe datos de usuario vía JSON.         |
| PUT    | `/user`   | Actualiza información enviada.            |
| PATCH  | `/user`   | Actualiza parcialmente la información.    |
| DELETE | `/user`   | Elimina un usuario mediante query params. |


## Herramientas recomendadas para probar la API

Estas herramientas permiten enviar solicitudes POST, PUT, PATCH y DELETE:
Postman
Thunder Client (VS Code)
Insomnia
Yaak
ApiDog