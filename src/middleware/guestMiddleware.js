

function guestMiddleware(req, res, next) {

    if (req.session.userProfile) {
        return res.redirect('/auth/profile');
    }
    next();
}

module.exports = guestMiddleware;