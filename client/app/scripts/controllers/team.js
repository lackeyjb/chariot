'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
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
