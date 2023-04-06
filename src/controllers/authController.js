const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users-data.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcrypt = require('bcryptjs');
const session = require("express-session");
const db = require("../database/models");

const controller = {

  register: (req, res) =>
    res.render("users/register", {
      errorMessage: undefined,
      name: "",
      lastName: "",
      email: "",
      password: "",
      passwordRepeat: "",
    }),
    
  create: async function(req, res) {
    
    const userRegister = {
      first_name: req.body.name,
      last_name: req.body.lastName,
      user_email: req.body.email,
      user_password: req.body.password,
      passwordRepeat: req.body.passwordRepeat, 
      user_image: "img_user_default.png"
    }

    const completedFields =
        userRegister.first_name && userRegister.last_name && userRegister.user_email && userRegister.user_password && userRegister.passwordRepeat
    
    const validPassword = userRegister.user_password === userRegister.passwordRepeat

    const emailValid = db.user.findOne({
      where :{
         user_email : userRegister.user_email
      }
    })

    if(emailValid){
      res.render('users/register', {
        errors:{
          user_email:{
            msg: "Este email ya esta regustrado"
          }
        }
      })
    }

    if(req.file){

      userRegister.user_image= req.file.filename
    }

    if(completedFields && validPassword  && emailValid)  {
      await db.user.create(userRegister)
        .then(function(){
          res.redirect('users/login')
        })
    }else{
      const errorMessage = !completedFields
        ? "Formulario incompleto"
        : !validPassword
        ? "Las contraseñas no coinciden"
        : "El usuario ya se encuentra registrado";

        res.redirect("users/register")
    }
  },

  login: (req, res) => res.render("users/login"),
  
  postLogin: (req, res) => {
    const { email, password } = req.body
    
    const loggedUser = users.find(users => users.email == email);
    const passwordUser = bcrypt.compareSync(password, loggedUser.password);
    console.log("usuario logeado",loggedUser);

    if (!loggedUser) {
      return res.render('/auth/login'); 
      // ver video para los errores ! 
    }else if(!passwordUser){
      return res.render('/auth/login');
      //ver video para los errores
    }

    delete loggedUser.password
    req.session.userProfile = loggedUser
    console.log('usuario logueado')
  
    if(req.body.remember) {
      res.cookie('userEmail', req.body.email, {maxAge: 90000})
    }

    return res.redirect('/auth/profile');
  },

  profile: async function (req, res) {

      let perfil = db.user.findOne({
          where:{
              user_id: req.params.id
          }
      })
    .then((perfil)=>{
      return res.render("/auth/profile",{ perfil })
      })
  
    },

  logout: (req, res) => {
    res.clearCookie('remember')
    req.session.destroy();
    return res.redirect('/');
  }
};

module.exports = controller;
