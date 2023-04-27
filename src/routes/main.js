const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/',authMiddleware, mainController.index);

module.exports = router;
