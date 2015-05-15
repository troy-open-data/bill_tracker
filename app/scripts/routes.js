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
      .when('/people', {
        templateUrl: 'views/people/index.html',
        controller: 'PersonIndexCtrl'
      })
      .when('/people/:id', {
        templateUrl: 'views/people/show.html',
        controller: 'PersonShowCtrl'
      })
      .when('/committees', {
        templateUrl: 'views/committees/index.html',
        controller: 'CommitteeIndexCtrl'
      })
      .when('/committees/:id', {
        templateUrl: 'views/committees/show.html',
        controller: 'CommitteeShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
