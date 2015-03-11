'use strict';

angular.module('chariotApp')
.factory('CurrentUser', function(LocalService) {
  return {
    user: function() {
      if(LocalService.get('auth_token')) {
        return angular.fromJson(LocalService.get('auth_token')).user;
      } else {
        return {};
      }
    }
  };
});