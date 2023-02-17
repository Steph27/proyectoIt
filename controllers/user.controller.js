const userCtrl = {};
const passport = require('passport');
const User = require('../models/userModels');

userCtrl.signup = async (req, res) => {
    const errors = [];
    const { nombre_apellido, email, telefono, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({text: 'La contraseña no coincide.'});
    }

    if (password.length < 4) {
        errors.push({text: "La contraseña debe tener al menos 4 caracteres" });
        console.log(errors[0]);
    };

    if (errors.length > 0) {
            res.render('formulario',{
            errors,
            nombre_apellido,
            email,
            telefono,
        });
    }
    else   { 
            const userFound = await User.findOne({ email: email });
            const userNum = await User.findOne({telefono: telefono});
            if (userFound) {
                req.flash('error_msg', 'Este mail ya se encuentra registrado');
                res.redirect('/formulario')
            }
            if (userNum) { 
                req.flash('error_msg', 'Este numero de telefono ya se encuentra registrado'); 
                res.redirect('/formulario')
            }  else {

            const newUser = new User({ nombre_apellido, email, telefono, password, confirm_password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Ahora estas registrado');
            res.redirect('/login');
            }
    };
};

userCtrl.signin = passport.authenticate('local', {
    successRedirect: '/checkout',
    failureRedirect: '/login',
    failureFlash: true,
});

userCtrl.logout = async (req, res) => {
    await req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success_msg", "Has salido de la sesion");
        res.redirect('index');
    });
};

userCtrl.checkout = async (req,res) => {
    console.log(req.user);
    const user = await User.findById(req.user._id);
    console.log(`el usuario es ${user}`);

    res.render('checkout',  { user });
};
userCtrl.update = async (req,res) => {
    const { nombre_apellido, email, telefono } = req.body;
    await User.findByIdAndUpdate(req.params.id , {nombre_apellido , email, telefono});
    req.flash('success_msg', 'Datos actualizados correctamente');
    res.redirect('/checkout');
};

userCtrl.renderEdit = async (req,res) => {
    const user = await User.findById(req.user._id);
    console.log(`Estoy dentro de la funcion renderEdit y el usuario es:${user}`);
    res.render('edit-form' , { user })
    
};

userCtrl.borrar = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Cuenta eliminada satisfactoriamente');
    res.redirect('/index');
};

userCtrl.renderSignUpForm = (req, res) => res.render('formulario');

userCtrl.renderSigninForm = (req, res) => res.render('login');


module.exports = userCtrl;