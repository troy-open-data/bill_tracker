'use strict';

/**
 * @ngdoc overview
 * @name billTrackerApp
 * @description
 * # billTrackerApp
 *
 * Main module of the application.
 */
angular
  .module('billTrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btControllers',
    'btDirectives'
  ]);

angular.module('btControllers', []);
angular.module('btDirectives', []);
