'use strict';

angular.module('chariotApp')
.controller('RegisterCtrl', function($scope, $state, Auth) {
  $scope.register = function() {
    Auth.register($scope.user).then(function() {
      $state.go('user.rides');
    });
  };
});