var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');


module.exports = {
    development: {
        db: 'mongodb://localhost/servicestore',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://amtechbox:2426Imt2880@ds033390.mongolab.com:33390/servicestore-db',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}