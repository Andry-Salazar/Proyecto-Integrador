const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const productsController = require('../controllers/productsController');

// use multer
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
       cb(null, 'public/images/ropa-deportiva'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}img${path.extname(file.originalname)}`);  } 
  })
  
  const uploadFile = multer({ storage });
//end use multer

router.get('/products/:id', productsController.detail);

router.get('/create', productsController.create);//vistas formulario de creacion

router.post('/create', uploadFile.single('imgProduct'), productsController.store);//funcionalidad de creacion de producto

module.exports = router;
