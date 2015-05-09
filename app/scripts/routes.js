'use strict';

/**
 * @ngdoc routes
 * @name billTrackerApp Routes
 * @description
 * # billTrackerApp Routes
 *
 * Routing configuration for the application.
 */
angular
  .module('billTrackerApp')
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
      .when('/bills', {
        templateUrl: 'views/bills/index.html',
        controller: 'BillIndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });