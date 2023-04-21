const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const multer = require('multer');
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/user')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

router.get("/login", guestMiddleware, authController.login);
router.post("/login", authController.postLogin);

router.get("/register", guestMiddleware, authController.register);
router.post("/create", upload.single('userImage'), authController.createRegister);

router.get("/profile/:id", authMiddleware, authController.profile);
router.get('/logout', authMiddleware, authController.logout)

module.exports = router;
