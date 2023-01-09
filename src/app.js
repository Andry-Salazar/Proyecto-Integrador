const express = require('express');
const app = express();
const port = 3000;

const routesProduct = require('./routes/products');
const routesCart = require('./routes/cart');
const routesAuth = require('./routes/auth');
const routesMain = require('./routes/main');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(port, () => console.log('Servidor de PlaySport funcionando'));

app.use('/', routesMain);
app.use('/products', routesProduct);
app.use('/cart', routesCart);
app.use('/auth', routesAuth);
