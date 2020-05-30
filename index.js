//Importamos los paquetes
const express = require('express');
const hbs = require('hbs');

//creamos la aplicación
const app = express();

//Definimos motor de plantillas
//Vamos a a emplear modelo vista controlador
app.set('view engine', 'hbs');

app.use(express.static(__dirname +'/public'));

//Arrancamos servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});