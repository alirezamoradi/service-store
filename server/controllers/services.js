var mongoose = require('mongoose'),
    Service = mongoose.model('Service');

exports.getServices = function(req, res){
    Service.find({}).exec(function(err, collection){
        res.send(collection);
    })
};


exports.createService = function(req, res, next){
    var serviceData = req.body;
    serviceData.published = new Date();
    Service.create(serviceData, function(err){
        if(err){
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Value');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
    })
}