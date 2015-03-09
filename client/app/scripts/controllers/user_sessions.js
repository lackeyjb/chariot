'use strict';

/**
 * @ngdoc function
 * @name chariotApp.controller:UserSessionsCtrl
 * @description
 * # UserSessionsCtrl
 * Controller of the chariotApp
 */
angular.module('chariotApp')
  .controller('UserSessionsCtrl', ['$scope', function ($scope) {
    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });
  }]);