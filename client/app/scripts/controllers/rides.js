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

    $scope.getRides = function() {
      RidesService.getRides() 
      .success(function(data){
        $scope.rides = data;
      })
      .error(function(){
        alert('GET:error');
      });
    };

    // $scope.getRides();

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
              var jsquid = $scope.getRides();
              console.log('scoping rides');
              console.log(JSON.stringify(jsquid));
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
