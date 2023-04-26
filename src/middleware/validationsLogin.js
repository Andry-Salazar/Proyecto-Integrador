const { body } = require('express-validator');

const validationsLogin = [
  body('email').isEmail().isEmpty().withMessage('El correo no es válido'),
  body('password').isLength({ min: 8 }).withMessage('La contraseña es incorrecta'),
]

module.exports = validationsLogin;