// 1. Importar express
const express = require('express');

// 2. Creamos instancia de la aplicacion (nuestro servidor)
const app = express(); 
const PORT = 3000; // Puerto donde escuchara el servidor

// Definimos una ruta para el endpoint raiz
app.get('/', (req, res) => { // req: request, res: response
    res.send("Hola Mundo desde Express!. Este es mi primer servidor web.")
});
 

// 3. Iniciamos el servidor
app.listen(PORT, () => {
    console.log('Servidor corriendo exitosamente en http://localhost:' + PORT);    
});
