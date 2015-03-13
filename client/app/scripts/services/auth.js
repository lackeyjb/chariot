'use strict';

angular.module('chariotApp')
.service('AuthService', function($http) {

  var that = this;

  that.currentUser = null;

  that.isAuthenticated = function() {
    return !!that.currentUser;
  };

  that.getSession = function() {
    var deferred = $http.get('/api/sessions');
    deferred.success(function(user) {
      console.log('getSession returned user = ' + JSON.stringify(user));
      that.currentUser = user;
    });
    return deferred;
  };

  that.getSession();


  that.mockUser = {
    name: 'Mock User',
    email: 'mock_user@gmail.com',
    password: 'secret'
  };

  that.register = function(user) {
    
    var deferred = $http.post('/api/users', { user: user });
    deferred.success(function(user) {
      that.currentUser = user;
    });
    return deferred;
  };

  that.login = function(session) {
    
    var deferred = $http.post('/api/sessions', { session: session });
    deferred.success(function(user) {
      that.currentUser = user;
    });
    return deferred;
  };

  that.logout = function() {
    
    var deferred = $http.delete('/api/sessions');
    deferred.success(function() {
      that.currentUser = null;
    });
    return deferred;
  };

});