const { body } = require('express-validator');

const validationRegister = [
  body('first_name').notEmpty().isLength({ min: 3 }).withMessage('El campo nombre es obligatorio y debe contener mínimo 3 caracteres'),
  body('last_name').notEmpty().isLength({ min: 3 }).withMessage('El campo apellidos es obligatorio y debe contener mínimo 3 caracteres'),
  body('email').isEmail().withMessage('El email no es válido'),
  body('password').isLength({ min: 8 }).withMessage('El password debe contener mínimo 8 caracteres'),
]

module.exports = validationRegister;