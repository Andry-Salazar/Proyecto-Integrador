const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products-data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");

const controller = {
  index: async function (req, res) {
    try {
      let productos = await db.product.findAll();
      let destacado = productos.filter(x => x.category_id === 1);
      let deporte = productos.filter(x => x.category_id === 2);
      let hombre = productos.filter(x => x.category_id === 3);
      let mujer = productos.filter(x => x.category_id === 4);
      let nino = productos.filter(x => x.category_id === 5);
      Promise.all([productos, destacado, deporte, hombre, mujer, nino])
      return res.render("index", { destacado, deporte, hombre, mujer, nino })
    } catch (error) {
      console.log(error);
    }
  },
  search: (req, res) => {
    res.render('product-detail', { product: products });
  },
};

module.exports = controller;
