angular.module('app').controller('mvAnnonceListCtrl', function($scope, mvAnnonce){
    $scope.annonces = mvAnnonce.query();

    $scope.sortOptions = [{value:"titre", text:"Trier par Titre"}, {value:"published", text:"Trier par Date"}];
    $scope.sortOrder = $scope.sortOptions[1].value;

});