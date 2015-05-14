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
      .when('/bills', {
        templateUrl: 'views/bills/index.html',
        controller: 'BillIndexCtrl'
      })
      .when('/bills/:id', {
        templateUrl: 'views/bills/show.html',
        controller: 'BillShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
