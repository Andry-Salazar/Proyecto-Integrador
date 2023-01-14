const fs = require('fs');
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products-data.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  index: (req, res)=>{
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const Destacado = products.filter((p)=>p.category=="Destacado");
    const Deporte = products.filter((p)=>p.category=="Deporte");
    const Hombre = products.filter((p)=>p.category=="Hombre");
    const Mujer = products.filter((p)=>p.category=="Mujer");
    const Niño = products.filter((p)=>p.category=="Niño");
    
    res.render("index",{
      Destacado: Destacado,
      Deporte: Deporte,
      Hombre: Hombre,
      Mujer: Mujer,
      Niño: Niño
    });
  }
}

module.exports = controller;
