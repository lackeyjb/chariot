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
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('rides', {
        url: '/rides',
        templateUrl: 'views/rides.html',
        controller: 'RidesCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
      
   
  });
