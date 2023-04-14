const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, "../data/users-data.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcrypt = require('bcryptjs');
const session = require("express-session");
const db = require("../database/models");
const { validationResult} = require("express-validator")
const Op = db.Sequelize.Op
const UserModel = require("../models/UserModel.js");

const controller = {

  register: (req, res) =>
    res.render("users/register"),
    
  create: async function(req, res) {
    let db = require("../database/models")
    let errors = validationResult(req)
  
  try{
    const userRegister = {
      first_name: req.body.name,
      last_name: req.body.lastName,
      user_email: req.body.email,
      user_password: bcrypt.hashSync(req.body.password, 10),
      passwordRepeat: req.body.passwordRepeat, 
      user_image: "img_user_default.png"
    }
    
    const emailValid = db.user.findOne({
      where :{
         user_email : userRegister.user_email
      }
    })
//AYUDA PARA LAS VALIDACIONES :D
    if(!emailValid){
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

    await db.user.create(userRegister)
    .then(function(){
      res.redirect('/auth/login');
    })
      
    }catch(error){
      console.log(error);
    }
  },

  login: (req, res) => res.render("users/login"),
  
  postLogin: async function (req, res)  {

  let db = require("../database/models")
  let errors = validationResult(req)

  try{
  if(errors.isEmpty()){

    let loggedUser = await db.user.findOne({
      where:{
          user_email : req.body.email
      }
    })

    if(loggedUser){
      let passwordUser = bcrypt.compareSync(req.body.password, loggedUser.user_password)

    if(passwordUser){
      delete loggedUser.password;
      req.session.userLogged = loggedUser;

      if(req.body.remember){
        res.cookie('recordarEmail', req.body.email, {maxAge: 90000})
      }

      return res.redirect('profile/'+loggedUser.user_id);

    }else{
      res.render('login', {
        errors: {
          user_email:{
            msg:"Este email no esta registrado"
          }
        }
      })
    }
    }else{
      res.render('login', {
        errors: errors.mapped(),
        old: req,body
      })
    }
  }
  }catch(error){
    console.log(error);   
  }
  },

  profile: (req, res) => {
    return res.render('users/profile',{
      user: req.session.userLogged
    })
    },

  logout: (req, res) => {
    res.clearCookie('remember')
    req.session.destroy();
    return res.redirect('/');
  }
};

module.exports = controller;
