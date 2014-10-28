angular.module('app').controller('mvMainCtrl', function($scope, mvAnnonce) {
    $scope.annonces = mvAnnonce.query();
});