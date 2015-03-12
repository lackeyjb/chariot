'use strict';

angular.module('chariotApp')
.controller('LoginCtrl', ['$scope', '$state', 'Auth', function ($scope, $state, Auth) {

  $scope.errors =  [];

  $scope.login = function() {
    if($scope.loginForm.$valid) {
      console.log('blah');

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
}]);