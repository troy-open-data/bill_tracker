'use strict';

/**
 * @ngdoc controller
 * @name meetingTrackerApp.controller:MeetingIndexCtrl
 * @description
 * # MeetingIndexCtrl
 * Controls the /meetings index page
 * Controller of the meetingTrackerApp
 */
angular.module('btControllers')
  .controller('MeetingIndexCtrl', ['$http', '$scope', function($http, $scope){
    var scope = $scope;
    scope.meetings = {};

    // TODO: move to service
    $http({
      method: 'GET',
      url: 'https://api.troycitytracker.com/meetings',
      cache: true
    }).success(function(data){
      scope.meetings = data;
    })
  }]);
