angular.module('app').factory('mvAnnonce', function($resource){
    var AnnonceResource = $resource('/api/annonces/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return AnnonceResource;
});