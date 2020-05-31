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
hbs.registerPartials(__dirname + '/views/partials/');

//configurar rutas
app.get('/', (req, res)=>{
    res.render('index', {
        utor : 'Jesús Alejandro Torres Ramírez',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });

});

app.get('/goya', (req, res)=>{
    res.render('goya', {
        autor : 'Jesús Alejandro Torres Ramírez',
        year : new Date().getFullYear(),
        title : 'Goya'
    });

});

app.get('/ressendi', (req, res)=>{
    res.render('ressendi', {
        autor : 'Jesús Alejandro Torres Ramírez',
        year : new Date().getFullYear(),
        title : 'Ressendi'
    });

});

app.get('/velazquez', (req, res)=>{
    res.render('velazquez', {
        autor : 'Jesús Alejandro Torres Ramírez',
        year : new Date().getFullYear(),
        title: 'Velazquez'
    });

});
app.get('/vermeer', (req, res)=>{
    res.render('vermeer', {
        autor : 'Jesús Alejandro Torres Ramírez',
        year : new Date().getFullYear(),
        title:'Veermer'
    });

});





//Arrancamos servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});