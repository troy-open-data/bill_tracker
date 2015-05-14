'use strict';

/**
 * @ngdoc controller
 * @name personTrackerApp.controller:PersonIndexCtrl
 * @description
 * # PersonIndexCtrl
 * Controls the /people index page
 * Controller of the billTrackerApp
 */
angular.module('btControllers')
  .controller('PersonIndexCtrl', ['$http', '$scope', function($http, $scope){
    var scope = $scope;
    scope.people = {};

    // TODO: move to service
    $http({
      method: 'GET',
      url: 'https://api.troycitytracker.com/people',
      cache: true
    }).success(function(data){
      scope.people = data;
    })
  }]);
