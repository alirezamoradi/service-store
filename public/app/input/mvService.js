angular.module('app').factory('mvService', function($resource) {
    var ServiceResource = $resource('/api/services/:id', {_id: "@id"});
    return ServiceResource;
});