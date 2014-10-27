angular.module('app').controller('mvMainCtrl', function($scope, mvService) {
    $scope.services = mvService.query();
});