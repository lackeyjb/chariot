'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:RidesCtrl
 * @description
 * # RidesCtrl
 * Controller of the chariotApp
 */
 
angular.module('chariotApp')
.controller('RidesCtrl', ['$scope', '$rootScope', '$browser', 'RidesService', 'AuthService',
  function($scope, $rootScope, $browser, RidesService, AuthService) {

    $scope.geolocation = function() {
      
      if (!navigator) {
        $rootScope.$apply(function() {
          $scope.positionMessage = 'Geolocation is not supported';
        });

      } else {
          $scope.positionMessage = 'Finding you...';
          navigator.geolocation.getCurrentPosition(function(position) {
            $rootScope.$apply(function() {
              $scope.positionMessage = 
                'Latitude: '  + position.coords.latitude + ' ' +
                'Longitude: ' + position.coords.longitude;

            var googlePosition  = $scope.details.geometry.location;
                            
            RidesService.postCoords(position, googlePosition, $scope.user.id)
            .success(function() {
              console.log('postCoords returned success');
            })
            .error(function() {
              console.log('postCoords ERROR');
            });
          });
        });
      }
    
    };

  AuthService.getSession().success(function(user) {
    $scope.user = user;
  });   

}]);
