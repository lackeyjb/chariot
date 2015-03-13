'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chariotApp
 */
angular.module('chariotApp')
  .controller('TeamCtrl', [ '$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
