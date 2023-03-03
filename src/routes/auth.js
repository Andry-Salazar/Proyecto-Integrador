const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/user')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

router.get("/login", authController.login);
router.post("/login", authController.postLogin);

router.get("/register", authController.register);
router.post("/create", upload.single('userImage'), authController.create);

router.get("/profile", authController.profile);
router.get('/logout', authController.logout)

module.exports = router;
