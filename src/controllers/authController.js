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
    
  create: (req, res) => {
    const { name, lastName, email, password, passwordRepeat } = req.body;

    /* Si todos los campos estan completos*/
    const completedFields =
      name && lastName && email && password && passwordRepeat;

    /* Si la contraseña es igual a la validacion de contraseña*/
    const validPassword = password === passwordRepeat;

    /* Si el email no esta registrado */
    const emailValid = users.findIndex((user) => user.email === email) === -1;

    if (completedFields && validPassword && emailValid) {
      const newUser = {
        id: users.length + 1,
        firstName: name,
        lastName,
        email,
        password: bcrypt.hashSync(password, 10),
        category: "Customer",
        image: req.file ? `/images/user/${req.file.filename}` : '/images/user/img_user_default.png',
      };
      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ""));
      res.render("users/login");
    } else {
      const errorMessage = !completedFields
        ? "Formulario incompleto"
        : !validPassword
          ? "Las contraseñas no coinciden"
          : "El usuario ya se encuentra registrado";

      res.render("users/register", {
        errorMessage,
        name,
        lastName,
        email,
        password,
        passwordRepeat,
      });
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
    db.user.findByPk(req.params.user_id)
      .then(function(user){
        res.render("auth/profile", {user:user})
      });
  },

  logout: (req, res) => {
    res.clearCookie('remember')
    req.session.destroy();
    return res.redirect('/');
  }
};

module.exports = controller;
