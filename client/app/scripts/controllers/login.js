'use strict';

angular.module('chariotApp')
.controller('LoginCtrl', function ($scope, $state, Auth) {

  $scope.errors =  [];

  $scope.login = function() {
    if($scope.loginForm.$valid) {

      $scope.errors = [];
      Auth.login($scope.user).success(function() {
        $state.go('anon.home');
      }).error(function(err) {
        $scope.errors.push(err);
      });
    }
    else {
      return $scope.errors;
    }
  };
});