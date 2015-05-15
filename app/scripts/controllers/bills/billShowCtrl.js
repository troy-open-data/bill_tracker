'use strict';

/**
 * @ngdoc controller
 * @name billTrackerApp.controller:BillShowCtrl
 * @description
 * # BillShowCtrl
 * Controls the /bills/:id show page
 * Controller of the billTrackerApp
 */
angular.module('btControllers')
  .controller('BillShowCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){
    var scope = $scope;
    scope.bill = {};

    // TODO: move to service
    $http({
      method: 'GET',
      url: 'https://api.troycitytracker.com/bills/' + $routeParams.id,
      cache: true
    }).success(function(data){
      scope.bill = data;
    })
  }]);
