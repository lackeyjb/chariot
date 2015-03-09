'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:RidesCtrl
 * @description
 * # RidesCtrl
 * Controller of the chariotApp
 */
angular.module('chariotApp')
  .controller('RidesCtrl', ['$scope', function ($scope) {
    $scope.rides = ['Ride One', 'Ride Two'];
  }]);