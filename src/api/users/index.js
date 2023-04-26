const express = require('express');
const router = express.Router();
const productsController = require('./usersController');

router.get('/users', productsController.getAll);

router.get('/users/:id', productsController.get);

module.exports = router;
