'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chariotApp
 */
angular.module('chariotApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
