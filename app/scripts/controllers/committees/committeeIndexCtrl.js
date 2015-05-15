'use strict';

/**
 * @ngdoc controller
 * @name committeeTrackerApp.controller:CommitteeIndexCtrl
 * @description
 * # CommitteeIndexCtrl
 * Controls the /committees index page
 * Controller of the committeeTrackerApp
 */
angular.module('btControllers')
  .controller('CommitteeIndexCtrl', ['$http', '$scope', function($http, $scope){
    var scope = $scope;
    scope.committees = {};

    // TODO: move to service
    $http({
      method: 'GET',
      url: 'https://api.troycitytracker.com/organizations',
      cache: true
    }).success(function(data){
      scope.committees = data;
    })
  }]);
