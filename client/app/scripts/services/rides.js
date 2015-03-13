'use strict';

angular.module('chariotApp')
.service('RidesService', [ '$http', function ($http) {
  this.postCoords = function(fullPosition, googlePosition, user) {
    console.log('postCords called with user_id & fullPosition = ' + JSON.stringify(fullPosition));

    // fix user_id
    var position = { 
      user_id: user,
      start_location: [ fullPosition.coords.latitude,
                        fullPosition.coords.longitude ],
      end_location: [ googlePosition.k,
                      googlePosition.D]
    };

    console.log('sending to server a position = ' + JSON.stringify(position));
    return $http.post('/api/rides', { ride: position } );
  };
}]);