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
    
    // gets current user info
    AuthService.getSession().success(function(user) {
      $scope.user = user;
    }); 
    // sets google places to USA
    $scope.options = {
      country: 'us'
    };

    $scope.geolocation = function() {
      
      if (!navigator) {
        $rootScope.$apply(function() {
          $scope.positionMessage = 'Geolocation is not supported';
        });

        } else {
          $scope.positionMessage = 'Finding you...';
          navigator.geolocation.getCurrentPosition(function(position) {
            $rootScope.$apply(function() {              
             
              $scope.destCoords  = $scope.details.geometry.location;            
            
              RidesService.postCoords(position, $scope.destCoords, $scope.user.id)
              .success(function() {
                console.log('posted coords');
                RidesService.searchRides().success(function (rideMatches) {                   
                  $scope.rideMatches = rideMatches;
                });
              })
              .error(function() { 
                console.log('postCoords ERROR'); 
              }); 
            });
          });
        }   
      };
    
}]);
