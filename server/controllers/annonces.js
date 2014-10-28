var Annonce = require('mongoose').model('Annonce');

exports.getAnnonces = function(req, res){
    Annonce.find({}).exec(function(err, collection){
        res.send(collection);
    })
};

exports.createAnnonce = function(req, res, next){
    var annonceData = req.body;
    annonceData.published = new Date();
    annonceData.featured = true;
    Annonce.create(annonceData, function(err){
        if(err){
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Annonce');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
        res.redirect('/');
    })
};