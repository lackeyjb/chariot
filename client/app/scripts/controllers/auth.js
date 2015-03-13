'use strict';

angular.module('chariotApp')
.controller('AuthCtrl', function ($scope, $rootScope, AuthService) {

  $scope.register = function() {
    console.log('AuthCtrl.register');
    AuthService.register($scope.user)
    .success(function(user) {
      console.log('register returned with user: ' + JSON.stringify(user));
      $rootScope.$emit('auth:new-registration', user);
    })
    .error(function(error) {
      alert('Registration Failed: ' + JSON.stringify(error));
    });
  };

  $scope.login = function() {
    console.log('AuthCtrl.login');
    AuthService.login($scope.session)
    .success(function(user) {
      console.log('login returned with user: ' + JSON.stringify(user));
      $rootScope.$emit('auth:login', user);
    })
    .error(function(error) {
      alert('Login Failed: ' + JSON.stringify(error));
      $scope.session = {};
    });
  };

});