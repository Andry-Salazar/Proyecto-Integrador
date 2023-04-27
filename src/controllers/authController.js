const bcrypt = require('bcryptjs');
const db = require('../database/models');

const controller = {
  register: (req, res) =>
    res.render(
      'users/register'
    ),

  createRegister: async function (req, res) {
    let db = require("../database/models")

    try {
      const userRegister = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file ? req.file.filename : "img_user_default.png",
        role: "User"
      }

      const validPassword =
        req.body.password === req.body.passwordRepeat;

      const existingUser = await db.user.findOne({
        where: {
          email: userRegister.email,
        },
      });

      if (validPassword && !existingUser) {
        await db.user.create(userRegister).then(function () {
          res.redirect('login');
        });
      } else {
        res.redirect('register');
      }
    } catch (error) {
      console.log(error);
    }
  },

  login: (req, res) => res.render('users/login'),

  postLogin: async (req, res) => {
    const { email, password } = req.body;

    let loggedUser = await db.user.findOne({
      where: {
        email: email
      }
    })
    const passwordUser = bcrypt.compareSync(password, loggedUser.password);
    if (!loggedUser) {
      return res.redirect('login');
    } else if (!passwordUser) {
      return res.redirect('login');
    }

    delete loggedUser.password;
    req.session.userProfile = loggedUser;
    res.locals.userLogged = loggedUser;
    if (req.body.remember) {
      res.cookie('userEmail', req.body.email, { maxAge: 90000 });
    }

    return res.redirect('profile/' + loggedUser.id);
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
  }
};

module.exports = controller;