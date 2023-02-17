const { Router } = require('express');
const router = Router();

const {
    signup,
    signin,
    logout,
    checkout,
    update,
    renderEdit,
    borrar,
    renderSignUpForm,
    renderSigninForm
} = require ('../controllers/user.controller')

const {isAuthenticated} = require('../helpers/auth');


 //routes

router.get('/formulario', renderSignUpForm);

router.post('/formulario', signup);

router.get('/login', renderSigninForm);

router.get('/checkout', isAuthenticated , checkout);

router.get('/edit', isAuthenticated , renderEdit);

router.put('/edit/:id', isAuthenticated , update);

router.post('/login', signin);

router.get('/logout', logout);

router.delete('/borrar/delete/:id', isAuthenticated , borrar);


module.exports = router;
