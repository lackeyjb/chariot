'use strict';


angular.module('chariotApp')
.service('RidesService', function($http) {
  this.postCoords = function(fullPosition) {
    console.log('postCords called with fullPosition = ' + JSON.stringify(fullPosition));

    var position = [ 
      fullPosition.coords.latitude,
      fullPosition.coords.longitude
    ];

    console.log('sending to server a position = ' + JSON.stringify(position));
    return $http.post('/api/rides', {'position' : position});
  };
});