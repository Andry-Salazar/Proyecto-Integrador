const express = require('express');
const router = express.Router();
const productsController = require('./productsController');

router.get('/products', productsController.getAll);

router.get('/products/:id', productsController.get);

module.exports = router;
