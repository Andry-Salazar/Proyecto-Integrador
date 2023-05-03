const db = require("../database/models");
const { validationResult } = require('express-validator');

const controller = {
  detail: async (req, res) => {
    const producto = await db.product.findOne({
      where: {
        id: req.params.id
      }
    }).then(itemlist => itemlist?.dataValues)
    const images = await db.product_images.findAll().then(itemlist => itemlist.map(x => x.dataValues))
    if (producto) {
      producto.images = images.filter(i => i.id_product == req.params.id).map(z => z.image_route);
      return res.render("products/product-detail", { resultado: producto })
    }
  },

  // Create - Form to create
  create: (req, res) => {
    res.render('products/create',
      {
        category_id: '',
        product_name: '',
        product_description: '',
        product_price: '',
        product_image: '',
        errorsObj: {}
      });
  },

  // Create - Save
  store: async function (req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorsObj = {}
      errors.errors.forEach(err => {
        errorsObj[err.param] = err.msg
      });

      return res.render('products/create', { ...req.body, errorsObj });
    }

    try {
      const newProduct = {
        category: req.body.category_id,
        name: req.body.product_name,
        description: req.body.product_description,
        price: req.body.product_price,
      }

      const productId = await db.product.create(newProduct)
        .then(function (file) {
          return file.id
        })

      if (req.files) {
        req.files.forEach(async element => {
          const newImage = {
            image_route: element.filename,
            id_product: productId
          }

          await db.product_images.create(newImage)
        });
      }

      res.redirect('/');

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
        category: req.body.category_id
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
          res.redirect('/products/edit/' + req.params.id);
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
