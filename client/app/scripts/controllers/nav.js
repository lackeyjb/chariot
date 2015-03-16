'use strict';

angular.module('chariotApp')

.controller('NavCtrl', function ($scope, $rootScope, $state, $browser, AuthService) {

  $scope.tabs = [
    { state: 'home',   label: 'home',  active: true,  isPublic: true  },
    { state: 'rides',  label: 'rides', active: false, isPublic: false },
    { state: 'team',   label: 'team',  active: false, isPublic: true  },
  ];

  $scope.getTabClass = function(tab) {
    return tab.active ? 'active' : '';
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.tabs.forEach(function(tab) {
      tab.active = $state.is(tab.state);
    });
  });

  $scope.isAuthenticated = function() {
    return !!$scope.user;
  };

  $scope.showTab = function(tab) {
    return tab.isPublic || $scope.isAuthenticated();
  };

  // See if we already have a session
  AuthService.getSession().success(function(user) {
    $scope.user = user;
  });

  $scope.logout = function() {    
    AuthService.logout().success(function() {
      $rootScope.$emit('auth:logout');
    });
  };

  $rootScope.$on('auth:new-registration', function(event, user) {   
    $scope.user = user;
    $state.go('rides');
  });

  $rootScope.$on('auth:login', function(event, user) {    
    $scope.user = user;
    $state.go('rides');
  });

  $rootScope.$on('auth:logout', function(/* event, user */) {
    $scope.user = null;
    $state.go('home');
  });
});