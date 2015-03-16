'use strict';

angular.module('chariotApp')
.service('RidesService', [ '$http', function ($http) {
  this.postCoords = function(fullPosition, googlePosition, user) {
    console.log('postCords called with user_id & fullPosition = ' + JSON.stringify(fullPosition));

    // fix user_id
    var position = { 
      user_id: user,
      latitude:  fullPosition.coords.latitude,
      longitude: fullPosition.coords.longitude,
      end_latitude:    googlePosition.k,
      end_longitude:   googlePosition.D
    };

    console.log('sending to server a position = ' + JSON.stringify(position));
    return $http.post('/api/rides', { ride: position } );
  };
   
  this.getRides = function() {
    return $http.get('/api/rides/');
  };

}]);