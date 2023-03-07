function authMiddleware(req, res, next) {

    if (!req.session.userProfile) {
        return res.redirect('/auth/login');
    }
    next();
}

module.exports = authMiddleware;