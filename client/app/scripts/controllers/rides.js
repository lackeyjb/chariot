'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:RidesCtrl
 * @description
 * # RidesCtrl
 * Controller of the chariotApp
 */
 
angular.module('chariotApp')
.controller('RidesCtrl', ['$scope', '$rootScope', 'RidesService', 'AuthService', 
  function($scope, $rootScope, RidesService, AuthService) {
    $scope.loadRide = true;
    // gets current user info
    AuthService.getSession().success(function(user) {
      $scope.userId = user.id;
    }); 
    // sets google places to only show US locations
    $scope.options = {
      country: 'us'
    };

    $scope.rides    = [];
    $scope.checkbox = false;

    $scope.getRides = function() {
      $scope.rides = [];

      RidesService.getRides().success(function (data) {
        $scope.loadRide = true;
        console.log(data);
        if(data === null){
          $scope.noMatches = true;
        } else {
          $scope.rides     = data;
          $scope.noMatches = false;
        }
      }).error(function() {
        console.log('error');
      });
    };

    $scope.getUserInfo = function(ride) {
      RidesService.getUserInfo(ride.user_id).success( function(data) {
        console.log('RidesService.getUserInfo returned: ' + JSON.stringify(data));
        ride.userInfo = data;
      }).error(function() {
        console.log('error');
      });
    }; 
  

   
    $scope.geolocation = function() {
      
      if (!navigator) {
        $rootScope.$apply(function() {
          alert('Geolocation is not supported');
        });
      } else {

        navigator.geolocation.getCurrentPosition(function(position) {
          $rootScope.$apply(function() {              
          
            var destCoords = $scope.details.geometry.location;            
            RidesService.postCoords(position, destCoords, $scope.userId, $scope.checkbox)
            .success(function() {
              
               $scope.getRides();                  
                
              })
            .error(function() { 
              console.log('postCoords ERROR'); 
            }); 
          });
        });
      }   
    };
    
}]);
