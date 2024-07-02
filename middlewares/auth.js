const isLogin = (req, res, next) => {
    if(req.session.user == null || req.session.user == undefined) {
        req.flash("alertMessage", "Session expired. Please log in again.");
        req.flash("alertStatus", "danger");
        return res.redirect('/admin/signin');
    }else {
        next()
    }
}


module.exports = isLogin;