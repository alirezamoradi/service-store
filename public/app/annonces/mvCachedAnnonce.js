angular.module('app').factory('mvCachedAnnonce', function(mvAnnonce){
    var annonceList;

    return {
        query: function(){
            if(!annonceList){
                annonceList = mvAnnonce.query();
            }
            return annonceList;
        }
    }
})