'use strict';

angular.module('chariotApp')
.controller('RegisterCtrl', [ '$scope', '$state', 'Auth', function ($scope, $state, Auth) {
  $scope.errors = [];
  $scope.autocomplete = 'initial value';
  $scope.register = function() {
    if($scope.registerForm.$valid && !$scope.user) {
      $scope.errors = [];
      Auth.register($scope.user).success(function() {
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