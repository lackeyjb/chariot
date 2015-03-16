'use strict';

/**
 * @ngdoc overview
 * @name chariotApp
 * @description
 * # chariotApp
 *
 * Main module of the application.
 */
angular
  .module('chariotApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'ngAutocomplete',
    'cgBusy'
  ])
  .value('cgBusyDefaults',{
  message:'Loading Stuff',
  backdrop: false,
  
  delay: 30,
  minDuration: 700,
  wrapperClass: 'my-class my-class2'
  })
  .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

  $httpProvider.defaults.withCredentials = true;

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('rides', {
    url: '/rides',
    templateUrl: 'views/rides.html',
    controller: 'RidesCtrl',
    onEnter: ['$state', 'AuthService', function ($state, AuthService) {
      if (!AuthService.isAuthenticated()) {
        $state.go('home');
      }
    }]
  })
  .state('team', {
    url: '/team',
    templateUrl: 'views/team.html',
    controller: 'TeamCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'AuthCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'views/register.html',
    controller: 'AuthCtrl'
  });

  $urlRouterProvider.otherwise('/');
  });
  
        
   
  
