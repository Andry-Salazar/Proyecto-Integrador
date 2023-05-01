const { body } = require('express-validator');

const validationsProducts = [
  body('product_price').notEmpty().withMessage('El campo "precio" no puede ser vacio'),
  body('product_name').notEmpty().isLength({ min: 4 }).withMessage('El campo "nombre de producto" debe tener al menos 4 caracteres'),
  body('product_description').notEmpty().isLength({ min: 20 }).withMessage('El campo "descripción" debe tener al menos 20 caracteres'),
  // body('product_image').custom((value, req)=>{
  //   let file = req.files;
  //   let acceptedExtensions = [`.jpg, .png, .gif, .jpeg, .webp`];
  //   if(file){
  //     console.log(files)
  //     let fileExtensions = path.extname(file.originalName);
  //     if(!acceptedExtensions.includes(fileExtensions)){
  //       throw new Error (`Las extensiones de archivos permitidas son ${acceptedExtensions.join(', ')}`);
  //     }
  //   }
  // })
]

module.exports = validationsProducts;