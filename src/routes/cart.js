const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, cartController.index);
router.get('/:user_id', authMiddleware, cartController.consultar);
router.post('/add/:id/:user_id', authMiddleware, cartController.updateQuantity);
router.post('/substract/:id/:user_id', authMiddleware, cartController.substractQuantity);
router.post('/create/:product_id/:user_id', authMiddleware, cartController.create);
router.post('/remove/:id/:user_id', authMiddleware, cartController.destroy);

module.exports = router;
