'use strict';

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
  };
});