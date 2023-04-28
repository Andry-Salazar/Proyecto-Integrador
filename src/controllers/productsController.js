const { Console } = require('console');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products-data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");

const controller = {
  detail: async (req, res) => {
    const producto = await db.product.findOne({
      where: {
        id: req.params.id
      }
    }).then(itemlist => itemlist.dataValues)
    const images = await db.product_images.findAll().then(itemlist => itemlist.map(x => x.dataValues))
    producto.images = images.filter(i => i.id_product == req.params.id).map(z => z.image_route);
    return res.render("products/product-detail", { resultado: producto })
  },

  // Create - Form to create
  create: (req, res) => {
    res.render('products/create');
  },

  // Create - Save
  store: async function (req, res) {

    try {
      const newProduct = {
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_price: req.body.product_price,
        product_image: "image-default.png",
        category_id: req.body.category_id
      }
      //preguntar si el usuario subo una imagen
      if (req.file) {
        newProduct.product_image = req.file.filename
      }
      await db.product.create(newProduct)
        .then(function () {
          res.redirect('/');
        })

    } catch (error) {
      console.log(error);
    }
  },

  //edit - Views
  edit: async (req, res) => {
    const producto = await db.product.findOne({
      where: {
        id: req.params.id
      }
    }).then(itemlist => itemlist.dataValues)

    const images = await db.product_images.findAll().then(itemlist => itemlist.map(x => x.dataValues))

    producto.images = images.filter(i => i.id_product == req.params.id);
    return res.render('products/edit', { toEdit: producto })
  },

  //edid - Update
  update: async function (req, res) {

    try {
      const productUpdate = {
        name: req.body.product_name,
        description: req.body.product_description,
        price: req.body.product_price,
        category_id: req.body.category_id
      }

      if (req.file) {
        productUpdate.product_image = req.file.filename
      }

      //proceso de reemplazo o de edicion de producto
      await db.product.update(productUpdate, {
        where: {
          id: req.params.id
        }
      })
        .then(function () {
          res.redirect('/');
        })

    } catch (error) {
      console.log(error);
    }
  },

  destroy: (req, res) => {
    db.product_images.destroy({
      where: {
        id_product: req.params.id
      }
    })
    db.product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/');
  },

  removeImage: (req, res) => {
    db.product_images.destroy({
      where: {
        id: req.params.id
      }
    })

    res.redirect('/products/edit/' + req.params.productId);
  },

  addImage: async (req, res) => {
    if (req.file) {
      const newProduct = {
        image_route: req.file.filename,
        id_product: req.params.id,
      }

      await db.product_images.create(newProduct);
    }
    res.redirect('/products/edit/' + req.params.id);
  }

};

module.exports = controller;
