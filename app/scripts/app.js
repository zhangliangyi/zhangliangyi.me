'use strict';

/**
 * @ngdoc overview
 * @name zhangliangyimeApp
 * @description
 * # zhangliangyimeApp
 *
 * Main module of the application.
 */
angular
  .module('zhangliangyimeApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
