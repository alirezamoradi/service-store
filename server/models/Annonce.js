var mongoose = require('mongoose');

var annonceSchema = mongoose.Schema({
    titre: {type: String, required:'{PATH} is required!'},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String],
    description: String,
    region: String,
    departement: String,
    cpostal: String,
    categorie: String,
    sousCategorie: String,
    prix: Number,
    email : String,
    phone : String
});

var Annonce = mongoose.model('Annonce', annonceSchema);

function createDefaultAnnonces() {
    Annonce.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Annonce.create({titre: 'Cours Informatique', featured: 'true', published: new Date('October 13, 2014 11:13:0'), tags: ['C++']});
            Annonce.create({titre: 'Aide au Demenagement', featured: 'true', published: new Date('October 14, 2014 12:13:0'), tags: ['Coup de Main']});
            Annonce.create({titre: 'Garde enfant', featured: 'false', published: new Date('October 15, 2014 13:13:0'), tags: ['Babysitter']});
            Annonce.create({titre: 'Developpement Web', featured: 'true', published: new Date('October 16, 2014 14:13:0'), tags: ['AngularJS']});
            Annonce.create({titre: 'Dessin Graphique', featured: 'false', published: new Date('October 17, 2014 15:13:0'), tags: ['Photoshop']});
            Annonce.create({titre: 'Aide a la présentation', featured: 'true', published: new Date('October 18, 2014 16:13:0'), tags: ['Powerpoint']});
            Annonce.create({titre: 'Soutien Mathematique', featured: 'false', published: new Date('October 19, 2014 17:13:0'), tags: ['Equation Differentielle']});
            Annonce.create({titre: 'Cours de Yoga', featured: 'true', published: new Date('October 20, 2014 18:13:0'), tags: ['Yogi Pro']});
            Annonce.create({titre: 'Aide à personne agée', featured: 'true', published: new Date('October 21, 2014 19:13:0'), tags: ['Certifié']});
        }
    })
}

exports.createDefaultAnnonces = createDefaultAnnonces;