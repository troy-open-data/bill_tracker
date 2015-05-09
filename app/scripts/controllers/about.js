'use strict';

/**
 * @ngdoc function
 * @name billTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the billTrackerApp
 */
angular.module('billTrackerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
