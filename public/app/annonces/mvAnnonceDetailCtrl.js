angular.module('app').controller('mvAnnonceDetailCtrl', function($scope, mvAnnonce, $routeParams){
    $scope.annonce = mvAnnonce.get({_id:$routeParams.id});
    /*mvCachedAnnonce.query().$promise.then(function(collection){
        collection.forEach(function(annonce){
            if(annonce._id === $routeParams.id) {
                $scope.annonce = annonce;
            }
        })
    })*/
});