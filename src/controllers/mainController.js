const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products-data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");

const controller = {
  index: async function (req, res) {
    try{
      let destacado = await db.product.findAll({
        where: {category_id: 1}
      })
      let deporte = await db.product.findAll({
        where: { category_id: 2 }
      })
      let hombre = await db.product.findAll({
        where: { category_id: 3 }
      })
      let mujer = await db.product.findAll({
        where: { category_id: 4 }
      })
      let niño = await db.product.findAll({
        where: { category_id: 5 }
      })

    Promise.all([ destacado, deporte, hombre, mujer, niño])
    return res.render("index", {destacado, deporte, hombre, mujer, niño})  
    }catch (error) {
      console.log(error);
    }
  },
  search: (req, res) => {
    res.render('product-detail', { product: products });
  },
};

module.exports = controller;
