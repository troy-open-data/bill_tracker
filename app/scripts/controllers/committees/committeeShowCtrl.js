'use strict';

/**
 * @ngdoc controller
 * @name committeeTrackerApp.controller:CommitteeShowCtrl
 * @description
 * # CommitteeShowCtrl
 * Controls the /committees/:id show page
 * Controller of the committeeTrackerApp
 */
angular.module('btControllers')
  .controller('CommitteeShowCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){
    var scope = $scope;
    scope.committee = {};

    // TODO: move to service
    $http({
      method: 'GET',
      url: 'https://api.troycitytracker.com/organizations/' + $routeParams.id,
      cache: true
    }).success(function(data){
      scope.committee = data;
    })
  }]);
