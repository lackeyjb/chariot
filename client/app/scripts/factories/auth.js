'use strict';

angular.module('chariotApp')
.factory('Auth', [ '$http', 'LocalService', 'AccessLevels', function ($http, LocalService, AccessLevels) {
  function checkTokenStatus(token) {
    $http.get('/auth/token_status?token=' + token);
  }

  var token = LocalService.get('auth_token');

  if(token) {
    token = angular.fromJson(LocalService.get('auth_token')).token;
    checkTokenStatus(token);
  }

  return {
    authorize: function(access) {
      if(access === AccessLevels.user) {
        return this.isAuthenticated();
      } else {
        return true;
      }
    },
    login: function(credentials) {
      var login = $http.post('/auth/authenticate', credentials);
      login.success(function (result) {
        LocalService.set('auth_token', JSON.stringify(result));
      });
      return login;
    },
    isAuthenticated: function() {
      return LocalService.get('auth_token');
    },
    logout: function() {
      LocalService.unset('auth_token');
    },
    register: function(formData) {
      LocalService.unset('auth_token');
      var register = $http.post('/auth/register', formData);
      register.success(function(result) {
        LocalService.set('auth_token', JSON.stringify(result));
      });
      return register;
    }
  };  
}])
.factory('AuthInterceptor',[ '$q', '$injector', function($q, $injector) {
  var LocalService = $injector.get('LocalService');

  return {
    request: function(config) {
      var token;
      if(LocalService.get('auth_token')){
        token = angular.fromJson(LocalService.get('auth_token')).token;
      }
      if(token){
        config.headers.Authorization = 'Bearer' + token;
      }
      return config;
    },
    responseError: function(response) {
      if(response.status === 401 || response.status === 403) {
        LocalService.unset('auth_token');
        $injector.get('$state').go('anon.login');
      }
      return $q.reject(response);
    }
  };
}])
.config([ '$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}]);