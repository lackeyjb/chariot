'use strict';

angular.module('chariotApp')
.controller('NavCtrl', [ '$scope', 'Auth', 'CurrentUser', function($scope, Auth, CurrentUser) {
  $scope.isCollapsed = true;
  $scope.auth = Auth;
  $scope.user = CurrentUser.user;

  $scope.logout = function() {
    Auth.logout();
  };
}]);