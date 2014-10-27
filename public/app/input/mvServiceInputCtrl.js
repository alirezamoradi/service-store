angular.module('app').controller('mvServiceInputCtrl', function($scope, mvService, mvNotifier, $location, mvInput) {

    $scope.newService = function(){
        var newSeviceData = {
            region : $scope.region,
            departement : $scope.departement,
            cpostal : $scope.cpostal,
            categorie : $scope.categorie,
            sousCategorie : $scope.sousCategorie,
            titre : $scope.titre,
            description : $scope.description,
            prix : $scope.prix,
            email : $scope.email,
            phone : $scope.phone
        };

        mvInput.createService(newSeviceData).then(function() {
            mvNotifier.notifySuccess('New Service created!');
            $location.path('/');
        },function(reason) {
            mvNotifier.notifyFailure(reason);
        })
    };

        /*$scope.regions = [
            {nom:'Alsace'},
            {nom:'Aquitaine'},
            {nom:'Auvergne'},
            {nom:'Basse-Normandie'},
            {nom:'Bourgogne'},
            {nom:'Bretagne'},
            {nom:'Centre'},
            {nom:'Champagne-Ardenne'},
            {nom:'Corse'},
            {nom:'Franche-Comté'},
            {nom:'Haute-Normandie'},
            {nom:'Ile-de-France'},
            {nom:'Languedoc-Roussillon'},
            {nom:'Limousin'},
            {nom:'Lorraine'},
            {nom:'Midi-Pyrénées'},
            {nom:'Nord-Pas-de-Calais'},
            {nom:'Pays de la Loire'},
            {nom:'Picardie'},
            {nom:'Poitou-Charentes'},
            {nom:'Provence-Alpes-Côte d\'Azur'},
            {nom:'Rhône-Alpes'},
            {nom:'Guadeloupe'},
            {nom:'Martinique'},
            {nom:'Guyane'},
            {nom:'Réunion'}
        ];*/


    });