// Configuracion general de mi aplicacion
//Creamos constantes y requerimos las librerias
const flash = require('connect-flash');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const { getConnection } = require('./conexion');
require('dotenv').config();
const morgan = require('morgan');
const methodOverride = require ('method-override');
const hbs = require('hbs');



//llamar a la conexion

getConnection()
    .then((message) => {
        console.log(message);
    })
    .catch(console.log)

// Ejecutamos express y guardamos el puerto

const app = express();
require('./config/passport');

//config de la session
app.use(session ({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


app.set('port', process.env.PORT || 8080);
app.set('view engine' , 'hbs');
app.set('views' , path.join(__dirname , 'views'));
hbs.registerPartials(path.join(__dirname , 'views/partials'));

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

//rutas
app.use(require('./routes/userRoutes'));
app.use(require('./routes/indexRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`App corriendo en el puerto ${process.env.PORT}`)
});

module.exports = app;
