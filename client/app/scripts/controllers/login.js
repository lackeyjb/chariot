'use strict';

angular.module('chariotApp')
.controller('LoginCtrl', function ($scope, $state, Auth) {

  console.log('LoginCtrl is alive!');

  $scope.errors =  [];

  $scope.login = function() {
    console.log('login');
    if($scope.loginForm.$valid) {
      console.log('valid');
      $scope.errors = [];
      Auth.login($scope.user).success(function() {
        console.log('success');
        $state.go('user.rides');
      }).error(function(err) {
        console.log('error');
        $scope.errors.push(err);
      });
    }
    else {
      console.log('invalid');
    }
  };
});