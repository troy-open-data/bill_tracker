'use strict';

/**
 * @ngdoc directive
 * @name billTrackerApp.directive:btPageNav
 * @description
 * # btPageNav
 * Directive that controls navbar links and active class toggling
 */
angular.module('btDirectives')
  .directive('btPageNav', ['$location', function($location){
  return {
    controller: function($scope) {
      $scope.isPage = function(name) {
        if(name === 'root') {
          return $location.path() === '/';
        } else {
          return new RegExp('/' + name + '($|/)').test($location.path());
        }
      };
    },
    restrict: 'E',
    template:
      '<ul class="bt-page-nav nav navbar-nav">' +
        '<li ng-class="{ \'active\':isPage(\'root\') }"><a href="#/">Home</a></li>' +
        '<li ng-class="{ \'active\':isPage(\'bills\') }"><a href="#/bills">Bills</a></li>' +
        '<li ng-class="{ \'active\':isPage(\'people\') }"><a href="#/people">People</a></li>' +
        '<li ng-class="{ \'active\':isPage(\'committees\') }"><a href="#/committees">Committees</a></li>' +
      '</ul>',
    // templateUrl: 'views/directives/btPageNav.html', // TODO: set up testing for rendered templates
    replace: true
  };
}]);
