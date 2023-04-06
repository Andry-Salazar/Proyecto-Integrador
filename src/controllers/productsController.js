const { Console } = require('console');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products-data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");

const controller = {
  detail: (req, res) => {

    let resultado = db.product.findOne({
        where:{
            product_id: req.params.id
        }
    })
  .then((resultado)=>{
    return res.render("products/product-detail",{ resultado })
    })

  },

  // Create - Form to create
  create: (req, res) => {
    res.render('products/create');
  },

// Create - Save
store: async function (req, res) {
  
  try{
    const newProduct = {
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_price: req.body.product_price,
      product_image: "image-default.png",
      category_id: req.body.category_id
    }
  //preguntar si el usuario subo una imagen
  if(req.file){

    newProduct.product_image= req.file.filename
  }
  await db.product.create(newProduct)
    .then(function(){
      res.redirect('/');
    })
    
    }catch (error){
      console.log(error);
    }
  },

  //edit - Views
  edit: (req, res) => {

    let toEdit = db.product.findOne({
      where:{
          product_id: req.params.id
      }
      })
        .then((toEdit)=>{
          return res.render('products/edit',{ toEdit })
         })
  },

  //edid - Update
  update: async function (req, res) {

    try {
    const productUpdate ={
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_price: req.body.product_price,
      product_image: "image-default.png",
      category_id: req.body.category_id
    }
    if(req.file){
    productUpdate.product_image = req.file.filename
    }

    //proceso de reemplazo o de edicion de producto
    await db.product.update(productUpdate,{
      where: {
        product_id : req.params.id
      }
    })
    .then(function(){
      res.redirect('/');
    })

   }catch(error){
    console.log(error);
  }
  },
  
  destroy: (req, res) => {
    
    db.product.destroy({
      where:{
        product_id: req.params.id
      }
    })
    res.redirect('/');
  }
};

module.exports = controller;
