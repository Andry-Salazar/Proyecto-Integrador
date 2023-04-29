const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require('express-validator');

const controller = {
  register: (req, res) =>
    res.render(
      'users/register',
      {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        image: '',
        errorsObj: {}
      }
    ),

  createRegister: async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorsObj = {}
      errors.errors.forEach(err => {
        errorsObj[err.param] = err.msg
      });
      return res.render('users/register', { ...req.body, errorsObj });
    }

    let db = require("../database/models")

    try {
      const userRegister = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file ? req.file.filename : "img_user_default.png",
        role: "Usuario"
      }

      if (req.body.password !== req.body.passwordRepeat) {
        return res.render('users/register', { ...req.body, errorsObj: {}, errorMessage: "Los passwords no son iguales" });
      }

      const existingUser = await db.user.findOne({
        where: {
          email: userRegister.email,
        },
      });

      if (existingUser) {
        return res.render('users/register', { ...req.body, errorsObj: {}, errorMessage: "El email ingresado ya se encuentra registrado" });
      }

      await db.user.create(userRegister).then(function () {
        res.redirect('login');
      });
    } catch (error) {
      console.log(error);
    }
  },

  login: (req, res) => res.render('users/login', {
    email: null,
    password: null,
    errorsObj: {}
  }),

  postLogin: async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorsObj = {}
      errors.errors.forEach(err => {
        errorsObj[err.param] = err.msg
      });
      return res.render('users/login', { ...req.body, errorsObj });
    }

    const { email, password } = req.body;
    let loggedUser = await db.user.findOne({
      where: {
        email: email
      }
    })
    const passwordUser = bcrypt.compareSync(password, loggedUser.password);
    if (!loggedUser) {
      return res.render('users/login', { ...req.body, errorsObj: { email: "El email no existe" } });
    } else if (!passwordUser) {
      return res.render('users/login', { ...req.body, errorsObj: { password: "La contraseña no es valida" } });
    }

    delete loggedUser.password;
    req.session.userProfile = loggedUser;
    res.locals.userLogged = loggedUser;
    if (req.body.remember) {
      res.cookie('userEmail', req.body.email, { maxAge: 90000 });
    }

    return res.redirect('/');
  },

  profile: async function (req, res) {
    db.user
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((perfil) => {
        return res.render('users/profile', { user: perfil });
      });
  },

  logout: (req, res) => {
    res.clearCookie('remember');
    req.session.destroy();
    return res.redirect('/');
  },

  updateUser: async function (req, res) {
    try {
      const userUpdate = {
        first_name: req.body.name,
        last_name: req.body.lastName,
        email: req.body.email,
      }

      await db.user.update(userUpdate, {
        where: {
          id: req.params.id
        }
      }).then(function () {
        res.redirect('/');
      })

    } catch (error) {
      console.log(error);
    }
  },

  getUsers: async function (req, res) {
    await db.user.findAll().then((users) => {
      return res.render('users/users', { users });
    });
  },

  promoteAdmin: async function (req, res) {

    const userUpdate = {
      role: "Administrador",
    }

    await db.user.update(userUpdate, {
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.redirect('/auth/users');
    })
  },

  promoteUser: async function (req, res) {

    const userUpdate = {
      role: "Usuario",
    }

    await db.user.update(userUpdate, {
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.redirect('/auth/users');
    })

  }
};

module.exports = controller;