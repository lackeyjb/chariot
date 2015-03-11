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
    'ngAutocomplete'
  ])

  .config([ '$stateProvider', '$urlRouterProvider', 'AccessLevels', function ($stateProvider, $urlRouterProvider, AccessLevels) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('anon',{
        abstract: true,
        template: '<ui-view/>',
        data: {
          access: AccessLevels.anon
        }
      })
      .state('anon.home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('anon.about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('anon.login', {
        url: '/login',
        templateUrl: 'views/auth/login.html',
        controller: 'LoginCtrl'
      })
      .state('anon.register', {
        url: '/register',
        templateUrl: 'views/auth/register.html',
        controller: 'RegisterCtrl'
      })
      .state('user', {
        abstract: true,
        template: '<ui-view/>',
        data: {
          access: AccessLevels.user
        }
      })
      .state('user.rides', {
        url: '/rides',
        templateUrl: 'views/user/rides.html',
        controller: 'RidesCtrl'
      });
    }])
  .run([ '$rootScope', '$state', 'Auth', function($rootScope, $state, Auth) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (!Auth.authorize(toState.data.access)) {
        event.preventDefault();

        $state.go('anon.login');
      }
    });
  }]);
        
   
  
