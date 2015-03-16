'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:RidesCtrl
 * @description
 * # RidesCtrl
 * Controller of the chariotApp
 */
 
angular.module('chariotApp')
.controller('RidesCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'RidesService', 'AuthService', 
  function($scope, $rootScope, $state, $stateParams, RidesService, AuthService) {
    $scope.loadRide = true;
    // gets current user info
    AuthService.getSession().success(function(user) {
      $scope.userId = user.id;
    }); 
    // sets google places to only show US locations
    $scope.options = {
      country: 'us'
    };

    $scope.getRides = function() {
      RidesService.getRides().success(function (data) {
        $scope.loadRide = true;
        console.log(data);
        $scope.rides = data;
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
            // $scope.loadRide = false;
            var destCoords = $scope.details.geometry.location;            
          
            RidesService.postCoords(position, destCoords, $scope.userId)
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
