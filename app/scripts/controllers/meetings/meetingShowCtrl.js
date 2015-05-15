'use strict';

/**
 * @ngdoc controller
 * @name meetingTrackerApp.controller:MeetingShowCtrl
 * @description
 * # MeetingShowCtrl
 * Controls the /meetings/:id show page
 * Controller of the meetingTrackerApp
 */
angular.module('btControllers')
  .controller('MeetingShowCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){
    var scope = $scope;
    scope.meeting = {};

    // TODO: move to service
    $http({
      method: 'GET',
      url: 'https://api.troycitytracker.com/meetings/' + $routeParams.id,
      cache: true
    }).success(function(data){
      scope.meeting = data;
    })
  }]);
