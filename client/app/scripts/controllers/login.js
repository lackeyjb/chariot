'use strict';

angular.module('chariotApp')
.controller('LoginCtrl', function($scope, $state, Auth) {
  $scope.errors =  [];

  $scope.login = function() {
    if($scope.loginForm.$valid) {
      $scope.errors = [];
      Auth.login($scope.user).success(function() {
        $state.go('user.rides');
      }).error(function(err) {
        $scope.errors.push(err);
      });
    }
  };
});