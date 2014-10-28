angular.module('app').factory('mvInput', function($q, mvAnnonce){
    return{
        createAnnonce: function(newAnnonceData){
            var newAnnonce = new mvAnnonce(newAnnonceData);
            var dfd = $q.defer();
            newAnnonce.$save().then(function(){
                dfd.resolve();
            }, function(response){
                dfd.reject(response.data.reason);
            })
            return dfd.promise;
        }
    }
});