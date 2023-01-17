const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products-data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let login = true;

const controller = {
  detail: (req, res) => {
    let id = req.params.id;
    // console.log('detail id', req.params);
    let product = products.find(product => product.id == id);
    res.render('products/product-detail', { product });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render('products/create', { login });
  },
  // Create -  Method to store
  store: (req, res) => {
    productToCreate = {
      id: products[products.length - 1].id + 1,
      ...req,
      body,
    };
    products.push(productToCreate);

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));
  },

  destroy: (req, res) => {
    let id = req.params.id;

    let productToDelete = products.filter(product => product.id != id);

    fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete));

    res.redirect('/');
  },
};

module.exports = controller;
