'use strict';

/**
 * Routing Configuration Test:
 *   The following expectations test that the route configuration (controller,
 *   templateUrl, redirectTo, etc.) are properly set
 */
describe('Route configuration', function() {
  beforeEach(module('billTrackerApp'));

  var route;

  beforeEach(inject(function(_$route_){
    route = _$route_;
  }));

  describe('uncategorized resources', function() {
    describe('GET /', function() {
      it('should use MainCtrl', function(){
        expect(route.routes['/'].controller).toBe('MainCtrl');
      });
      it('should render from views/main.html', function() {
        expect(route.routes['/'].templateUrl).toBe('views/main.html');
      });
    });
  });

  describe('bill resources', function() {
    describe('GET /bills', function() {
      it('should use BillIndexCtrl', function(){
        expect(route.routes['/bills'].controller).toBe('BillIndexCtrl');
      });
      it('should render from views/bills/index.html', function() {
        expect(route.routes['/bills'].templateUrl).toBe('views/bills/index.html');
      });
    });

    describe('GET /bills/:id', function() {
      it('should use BillShowCtrl', function(){
        expect(route.routes['/bills/:id'].controller).toBe('BillShowCtrl');
      });
      it('should render from views/bills/show.html', function() {
        expect(route.routes['/bills/:id'].templateUrl).toBe('views/bills/show.html');
      });
    });
  });

  describe('people resources', function() {
    describe('GET /people', function() {
      it('should use PersonIndexCtrl', function(){
        expect(route.routes['/people'].controller).toBe('PersonIndexCtrl');
      });
      it('should render from views/people/index.html', function() {
        expect(route.routes['/people'].templateUrl).toBe('views/people/index.html');
      });
    });

    describe('GET /people/:id', function() {
      it('should use PersonShowCtrl', function(){
        expect(route.routes['/people/:id'].controller).toBe('PersonShowCtrl');
      });
      it('should render from views/people/show.html', function() {
        expect(route.routes['/people/:id'].templateUrl).toBe('views/people/show.html');
      });
    });
  });
});
