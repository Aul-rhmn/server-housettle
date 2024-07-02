const isLogin = (req, res, next) => {
    if(req.session.user == null || req.session.user == undefined) {
        req.flash("alertMessage", "Session expired. Please log in again.");
        req.flash("alertStatus", "danger");
        
    }else {
        next()
        return res.redirect('/admin/signin');
    }
}


module.exports = isLogin;