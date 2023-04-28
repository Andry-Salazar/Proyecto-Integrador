const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'public/images/ropa-deportiva');
   },
   filename: function (req, file, cb) {
      cb(null, `${Date.now()}img${path.extname(file.originalname)}`);
   }
})

const uploadFile = multer({ storage });

router.get('/:id', authMiddleware, productsController.detail);
router.get('/create', authMiddleware, productsController.create);
router.post('/create', uploadFile.single('product_image'), productsController.store);
router.get('/edit/:id', authMiddleware, productsController.edit);
router.post('/edit/:id', uploadFile.single('product_image'), productsController.update);
router.post('/removeImage/:id/:productId', productsController.removeImage);
router.post('/addImage/:id', uploadFile.single('product_image'), productsController.addImage);
router.post('/delete/:id', authMiddleware, productsController.destroy)
module.exports = router;
