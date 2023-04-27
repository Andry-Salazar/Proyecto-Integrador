function authMiddleware(req, res, next) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userProfile;
    if (!req.session.userProfile) {
        res.locals.isLogged = false;
        return res.redirect('/auth/login');
    }
    next();
}

module.exports = authMiddleware;