//Importamos los paquetes
const express = require('express');
const hbs = require('hbs');

//creamos la aplicación
const app = express();

//Definimos motor de plantillas
//Vamos a a emplear modelo vista controlador
app.set('view engine', 'hbs');

aapp.use(express.static(__dirname + '/public'));

//configurar rutas
app.get('/', (req, res)=>{
    res.render('index');

});



//Arrancamos servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});