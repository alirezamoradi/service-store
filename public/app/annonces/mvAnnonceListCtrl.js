angular.module('app').controller('mvAnnonceListCtrl', function($scope, mvAnnonce){
    $scope.annonces = mvAnnonce.query();

});