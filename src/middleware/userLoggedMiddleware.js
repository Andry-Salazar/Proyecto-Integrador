const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users-data.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

let  userLoggedMiddleware = (req, res, next) => {
        res.locals.isLogged = false;

        const {email} = req.body

        const emailInCookie = req.cookies.userEmail;
        const userCookie = users.find(users => users.email == email, emailInCookie)

        console.log(userCookie);

        if (userCookie) {
            req.session.userProfile = userCookie;
        }

        if(req.session.userProfile){
            res.locals.isLogged = true;
            res.locals.userProfile = req.session.userProfile
        }

        next();
}

module.exports = userLoggedMiddleware