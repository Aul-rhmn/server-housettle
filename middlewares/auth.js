const isLogin = (req, res, next) => {
    if(!req.session.user) {
        req.flash("alertMessage", "Session expired. Please log in again.");
        req.flash("alertStatus", "danger");
        res.redirect('/admin/signin');
    }else {
        next()
    }
}


module.exports = isLogin;