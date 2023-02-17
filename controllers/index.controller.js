const indexCtrl = {};

indexCtrl.index = (req, res) => {
    res.render('/');
};

indexCtrl.index = (req,res) => {
    res.render('index');
};

indexCtrl.cargadores = (req,res) => {
    res.render('cargadores');
};

indexCtrl.auriculares = (req,res) => {
    res.render('auriculares');
};

module.exports = indexCtrl;

//Acomodar la ruta de auriculares y cargadores cuando se cambie a HDB