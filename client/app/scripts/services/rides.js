'use strict';
angular.module('chariotApp')
.service('RidesService', function($http) {
  
  this.getRides = function() {
    return $http.get('/api/rides');
  };

  this.postCoords = function(latitude, longitude) {
    return $http.post('/api/rides', {
      latitude: latitude,
      longitude: longitude
    });
  };
});