const express = require('express');
const router = express.Router();

const productsApi = require('./products');
const usersApi = require('./users');

router.use('/', productsApi, usersApi);

module.exports = router;
