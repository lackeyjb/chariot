'use strict';

angular.module('chariotApp')

.controller('NavCtrl', function ($scope, $rootScope, $state, $browser, AuthService) {

  console.log('NavCtrl is alive!');

  $scope.tabs = [
    { state: 'home',   label: 'Home',              active: true,  isPublic: true  },
    { state: 'rides',  label: 'Rides',             active: false, isPublic: false },
    { state: 'team',   label: 'Team',              active: false, isPublic: true  },
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
    console.log('NavCtrl.logout');
    AuthService.logout().success(function() {
      $rootScope.$emit('auth:logout');
    });
  };

  $rootScope.$on('auth:new-registration', function(event, user) {
    // console.log('caught event auth:new-registration with user = ' + JSON.stringify(user));
    $scope.user = user;
    $state.go('rides');
  });

  $rootScope.$on('auth:login', function(event, user) {
    // console.log('caught event auth:login with user = ' + JSON.stringify(user));
    console.log('cookies: ' + JSON.stringify($browser.cookies()));
    $scope.user = user;
    $state.go('rides');
  });

  $rootScope.$on('auth:logout', function(/* event, user */) {
    $scope.user = null;
    $state.go('home');
  });
});