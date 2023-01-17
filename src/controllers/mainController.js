const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products-data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
  index: (req, res) => {
    const destacado = products.filter(p => p.category == 'Destacado');
    const deporte = products.filter(p => p.category == 'Deporte');
    const hombre = products.filter(p => p.category == 'Hombre');
    const mujer = products.filter(p => p.category == 'Mujer');
    const niño = products.filter(p => p.category == 'Niño');
    const category = { destacado, deporte, hombre, mujer, niño };
    res.render('index', category);
  },
  search: (req, res) => {
    res.render('product-detail', { product: products });
  },
};

module.exports = controller;
