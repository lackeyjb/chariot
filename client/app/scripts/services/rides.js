'use strict';

angular.module('chariotApp')
.service('RidesService', [ '$http', 'CurrentUser', function ($http, CurrentUser) {
  this.postCoords = function(fullPosition, googlePosition) {
    console.log('postCords called with user_id & fullPosition = ' + JSON.stringify(fullPosition));

    var position = { 
      user_id:    CurrentUser.user().id,
      start_lat:  fullPosition.coords.latitude,
      start_long: fullPosition.coords.longitude,
      end_lat:    googlePosition.k,
      end_long:   googlePosition.D
    };

    console.log('sending to server a position = ' + JSON.stringify(position));
    return $http.post('/api/rides.json', { ride: position } );
  };
}]);