const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath) );

app.listen(port, () => console.log("Servidor de PlaySport funcionando"));


app.get('/', (req, res) => { //vistas de index
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/login', (req, res) => { //vistas login 
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/product-car', (req, res) => { // vistas de carrito de ventas
    res.sendFile(path.resolve(__dirname, './views/product-car.html'));
});

app.get('/product-detail', (req, res) => { // vistas detalle de producto
    res.sendFile(path.resolve(__dirname, './views/product-detail.html'));
});

app.get('/register', (req, res) => { // vistas de registro
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});