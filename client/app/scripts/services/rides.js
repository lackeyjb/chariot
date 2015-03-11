'use strict';


angular.module('chariotApp')
.service('RidesService', [ '$http', 'CurrentUser', function ($http, CurrentUser) {
  this.postCoords = function(fullPosition) {
    console.log('postCords called with fullPosition = ' + JSON.stringify(fullPosition));

    var position = { 
      user_id:   CurrentUser.user().id,
      start_location: [ fullPosition.coords.latitude,
                        fullPosition.coords.longitude ]
    };

    console.log('sending to server a position = ' + JSON.stringify(position));
    return $http.post('/api/rides', {'ride': position } );
  };
}]);