'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:RidesCtrl
 * @description
 * # RidesCtrl
 * Controller of the chariotApp
 */
angular.module('chariotApp')
  .controller('RidesCtrl', function ($scope, RidesService) {
    
    function getRides() {
       RidesService.getRides()
       .success(function(data) {
         $scope.rides = data;
       })
       .error(function(){
         alert('GET: error');
       });
    }

    getRides();

    var getGeolocation = function() {
      if(navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        getGeolocation.innerHTML = 'Update yo browser Y\'all!';
      }
    };

    var showPosition = function(position) {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    };

    // $scope.rides = ['Ride One', 'Ride Two'];

    $scope.postCoords = function() {
      RidesService.postCoords(showPosition())
      .success(function() {
        console.log('success');
        

      });
    };
  });