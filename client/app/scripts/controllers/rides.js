'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:RidesCtrl
 * @description
 * # RidesCtrl
 * Controller of the chariotApp
 */
angular.module('chariotApp')

  .controller('RidesCtrl', ['$scope', '$rootScope', 'RidesService',
    function($scope, $rootScope, RidesService) {

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

                RidesService.postCoords(position)
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

      $scope.googleAddress = function() {
        console.log($scope.details.geometry.location);
        var googlePosition  = $scope.details.geometry.location;
        RidesService.postPlace(googlePosition)
        .success(function() {
          console.log('postCoords returned success');
        })
        .error(function() {
          console.log('postCoords ERROR');
        });
      };
}]);

