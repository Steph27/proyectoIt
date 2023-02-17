const helpers = {};

helpers.isAuthenticated = (req,res,next) => {
    if(req.isAuthenticated()) {
        return next();
    }

    req.flash('error_msg','No estas autorizado para ver esta informacion, inicia sesión e intenta nuevamente.');
    res.redirect('/login');
}
module.exports = helpers;