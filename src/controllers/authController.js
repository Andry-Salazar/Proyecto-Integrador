const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users-data.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcrypt = require('bcryptjs');

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
        image: "",
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
    
    const loggedUser = users.find(user => user.email === email && bcrypt.compareSync(password, user.password));
    console.log(loggedUser, email, password);

    if (!loggedUser) {
      return res.redirect('/auth/login'); 
    }
    console.log('usuario logueado') 
    return res.redirect('/');
  },
};

module.exports = controller;
