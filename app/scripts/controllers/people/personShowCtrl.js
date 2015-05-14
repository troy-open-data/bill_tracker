'use strict';

/**
 * @ngdoc controller
 * @name personTrackerApp.controller:PersonShowCtrl
 * @description
 * # PersonShowCtrl
 * Controls the /people/:id show page
 * Controller of the billTrackerApp
 */
angular.module('btControllers')
  .controller('PersonShowCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){
    var scope = $scope;
    scope.person = {};

    // TODO: move to service
    $http({
      method: 'GET',
      url: 'https://api.troycitytracker.com/people/' + $routeParams.id,
      cache: true
    }).success(function(data){
      scope.person = data;
    })
  }]);
