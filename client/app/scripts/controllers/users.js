'use strict';

angular.module('chariotApp')
.controller('UsersCtrl', function($scope, UsersService) {
  
  UsersService.getUsers()
  .success(function(data /*, status, headers, config */) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.users = data;
  })
  .error(function(/* data, status, headers, config */) {
    alert('GET USERS ERROR');
  });
});
