'use strict';

angular.module('clientApp')
.service('UsersService', function($http) {
    
    this.getUsers = function() {
      // returns a "promise"
      return $http.get('/api/users');
    };
});