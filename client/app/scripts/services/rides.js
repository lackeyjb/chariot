'use strict';
<<<<<<< HEAD
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
=======

angular.module('chariotApp')
.service('RidesService', function($http) {
  this.postCoords = function(fullPosition) {
    console.log('postCords called with fullPosition = ' + JSON.stringify(fullPosition));

    var position = { 
      latitude:  fullPosition.coords.latitude,
      longitude: fullPosition.coords.longitude
    };

    console.log('sending to server a position = ' + JSON.stringify(position));
    return $http.post('/api/rides', {"ride" : position});
>>>>>>> d2c4d9e5bfe35e142b93df81b360716417fbf7d1
  };
});