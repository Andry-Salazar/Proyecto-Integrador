const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products-data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");

const controller = {
  index: async function (req, res) {
    try {
      const productos = await db.product.findAll().then(itemlist => itemlist.map(x=>x.dataValues))
      const images = await db.product_images.findAll().then(itemlist => itemlist.map(x=>x.dataValues))
      let productoImages = productos.map(x => { return { ...x, images: images.filter(y => y.id_product === x.id).map(z=>z.image_route) } })

      let destacado = productoImages.filter(x => x.category_id === 1);
      let deporte = productoImages.filter(x => x.category_id === 2);
      let hombre = productoImages.filter(x => x.category_id === 3);
      let mujer = productoImages.filter(x => x.category_id === 4);
      let nino = productoImages.filter(x => x.category_id === 5);
      Promise.all([productoImages, destacado, deporte, hombre, mujer, nino])
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
