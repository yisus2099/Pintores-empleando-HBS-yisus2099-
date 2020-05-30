//Importamos los paquetes
const express = require('express');
const hbs = require('hbs');

//creamos la aplicación
const app = express();

//Definimos motor de plantillas
//Vamos a a emplear modelo vista controlador
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


//Generamos los partials
hbs.registerPartials(__dirname + '/views/partials');

//configurar rutas
app.get('/', (req, res)=>{
    res.render('index');

});

app.get('/', (req, res)=>{
    res.render('goya');

});

app.get('/', (req, res)=>{
    res.render('resendi');

});

app.get('/', (req, res)=>{
    res.render('velazquez');

});

app.get('/', (req, res)=>{
    res.render('vermeer');

});






//Arrancamos servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});