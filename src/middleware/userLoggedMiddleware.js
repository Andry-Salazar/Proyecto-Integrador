const UserModel = require("../models/UserModel.js");

// const usersFilePath = path.join(__dirname, '../data/usersData.json');


function userLoggedMiddleware(req, res, next) {
    //mostrar elementos al usuario logeado

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.recordarEmail;
    let userFromCookie = UserModel.findByField('email', emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware