var auth = require('./auth'),
    users = require('../controllers/users'),
    services = require('../controllers/services'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Service = mongoose.model('Service');

module.exports = function(app){

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);

    app.get('/api/services', services.getServices);
    app.post('/api/services', services.createService);

    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/'+ req.params[0]);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req,res){
        req.logout();
        res.end();
    });

    app.get('*', function(req,res){
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
};

