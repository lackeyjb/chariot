'use strict';

angular.module('chariotApp')
.service('RidesService', [ '$http', function ($http) {
 
  this.getRides = function() {
    return $http.get('/api/rides/');
  };

  this.getUserInfo = function(id) {
    return $http.get('/api/users/' + id);
  };

  this.postCoords = function (fullPosition, googlePosition, user, driver) {
    console.log('postCords called with user_id & fullPosition = ' + JSON.stringify(fullPosition));

    // fix user_id
    var position = { 
      user_id: user,
      start_location: [ fullPosition.coords.latitude,
                        fullPosition.coords.longitude ],
      end_location:   [ googlePosition.k,
                        googlePosition.D ],
      driver: driver
    };

    console.log('sending to server a position = ' + JSON.stringify(position));
    return $http.post('/api/rides', { ride: position } );
  };

}]);