const { body } = require('express-validator');
const path = require('path');

const validationRegister = [

  body('name').notEmpty().isLength({min: 3}).withMessage('El campo nombre es obligatorio y debe contener mínimo 3 caracteres'),
  body('lastName').notEmpty().isLength({min: 3}).withMessage('El campo nombre es obligatorio y debe contener mínimo 3 caracteres'),
  body('email').isEmail().withMessage('El email no es válido'),
  body('password').isLength({min: 8}).withMessage('El password debe contener mínimo 8 caracteres'),
  body('image').custom((value, {req})=>{
    let file = req.file;
    let acceptedExtensions = [`.jpg, .png, .gif, .jpeg, .webp`];
    if(file){
      let fileExtensions = path.extname(file.originalName);
      if(!acceptedExtensions.includes(fileExtensions)){
        throw new Error (`Las extensiones de archivos permitidas son ${acceptedExtensions.join(', ')}`);
      }
    }
  })
]

module.exports = validationRegister;