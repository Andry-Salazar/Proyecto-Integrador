const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products-data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
  detail: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
    const ID = products.find(product => product.id  == req.params.id);
    res.render("products/product-detail", {product: ID});
  },

  // Create - Form to create
  create: (req, res) => {
    res.render('products/create');
  },

// Create - Save
store: (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    descripcion: req.body.descripcion,
    img: "/images/ropa-deportiva/"+"image-default.png",
    price: req.body.price,
    category: req.body.category
  }
  if(req.file){
    newProduct.img = "/images/ropa-deportiva/"+req.file.filename
  }
  products.push(newProduct)

  const data = JSON.stringify(products, null, " ");
  fs.writeFileSync(productsFilePath, data);
  res.redirect("/");
  },
  
  destroy: (req, res) => {
    let id = req.params.id;

    let productToDelete = products.filter(product => product.id != id);

    fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete));

    res.redirect('/');
  },
};

module.exports = controller;
