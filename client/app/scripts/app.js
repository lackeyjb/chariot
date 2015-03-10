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
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth',
    'geolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sign_in', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      })
      .when('/sign_up', {
        templateUrl: 'views/user_registrations/new.html',
        controller: 'UserRegistrationsCtrl'
      })
      .when('/rides', {
        templateUrl: 'views/rides.html',
        controller: 'RidesCtrl',
        resolve: {
          auth: ['$auth', function($auth) {
            return $auth.validateUser();
          }]
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function() {
      $location.path('/');
    });
  }]);
