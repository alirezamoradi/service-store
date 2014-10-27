angular.module('app').factory('mvInput', function($q, mvService){
    return{
        createService: function(newServiceData){
            var newService = new mvService(newServiceData);
            var dfd = $q.defer();
            newService.$save().then(function(){
                dfd.resolve();
            }, function(response){
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        }
    }
});