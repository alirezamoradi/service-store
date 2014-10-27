var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    region: String,
    departement: String,
    cpostal: String,
    categorie: String,
    sousCategorie: String,
    titre: {type:String, required:'{PATH} is required!'},
    description: String,
    prix: Number,
    email : String,
    phone : String,
    featured: Boolean,
    published: Date
});

var Service = mongoose.model('Service', serviceSchema);

function createDefaultServices() {
    Service.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Service.create({titre: 'Cours Informatique', featured: 'true', published: new Date('October 13, 2014 11:13:0')});
            Service.create({titre: 'Aide au Demenagement', featured: 'true', published: new Date('October 14, 2014 12:13:0')});
            Service.create({titre: 'Garde enfant', featured: 'false', published: new Date('October 15, 2014 13:13:0')});
            Service.create({titre: 'Developpement Web', featured: 'true', published: new Date('October 16, 2014 14:13:0')});
            Service.create({titre: 'Dessin Graphique', featured: 'false', published: new Date('October 17, 2014 15:13:0')});
            Service.create({titre: 'Aide a la présentation', featured: 'true', published: new Date('October 18, 2014 16:13:0')});
            Service.create({titre: 'Soutien Mathematique', featured: 'false', published: new Date('October 19, 2014 17:13:0')});
            Service.create({titre: 'Cours de Yoga', featured: 'true', published: new Date('October 20, 2014 18:13:0')});
            Service.create({titre: 'Aide à personne agée', featured: 'true', published: new Date('October 21, 2014 19:13:0')});
        }
    })
}

exports.createDefaultServices = createDefaultServices;