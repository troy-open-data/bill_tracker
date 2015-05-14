'use strict';

/**
 * @ngdoc controller
 * @name billTrackerApp.controller:BillIndexCtrl
 * @description
 * # BillIndexCtrl
 * Controls the /bills index page
 * Controller of the billTrackerApp
 */
angular.module('btControllers')
  .controller('BillIndexCtrl', ['$http', '$scope', function($http, $scope){
    var scope = $scope;
    scope.bills = {};

    // TODO: move to service
    $http({
      method: 'GET',
      url: 'https://api.troycitytracker.com/bills',
      cache: true
    }).success(function(data){
      scope.bills = data;
    })
  }]);
