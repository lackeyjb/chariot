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
          $scope.positionMessage = 'Geolocation is not supported';
        });
      } else {

        $scope.positionMessage = 'Finding you...';

        navigator.geolocation.getCurrentPosition(function(position) {
          $rootScope.$apply(function() {              
           
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
