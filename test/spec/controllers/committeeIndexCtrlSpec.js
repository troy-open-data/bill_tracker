// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  describe('Committee Controller: Index (CommitteeIndexCtrl)', function() {
    var scope;
    scope = null;
    beforeEach(module('btControllers'));
    beforeEach(inject(function(_$controller_, _$rootScope_) {
      var CommitteeIndexCtrl;
      scope = _$rootScope_;
      return CommitteeIndexCtrl = _$controller_('CommitteeIndexCtrl', {
        $scope: scope
      });
    }));
    return describe('GET committees#all', function() {
      var mockCommittees;
      mockCommittees = null;
      beforeEach(inject(function(_$httpBackend_) {
        var hostUrl, httpBackend;
        httpBackend = _$httpBackend_;
        hostUrl = 'https://api.troycitytracker.com';
        mockCommittees = '[{"id":1,"level":0,"name":"Mayor","url":"http://api.troycitytracker.com/v1/organizations/1"},{"id":2,"level":1,"name":"City Council","url":"http://api.troycitytracker.com/v1/organizations/2"},{"id":3,"level":2,"name":"Finance Committee","url":"http://api.troycitytracker.com/v1/organizations/3"},{"id":4,"level":2,"name":"Human Resources Committee","url":"http://api.troycitytracker.com/v1/organizations/4"},{"id":6,"level":2,"name":"Law Committee","url":"http://api.troycitytracker.com/v1/organizations/6"},{"id":7,"level":2,"name":"Planning and Community Development Committee","url":"http://api.troycitytracker.com/v1/organizations/7"},{"id":8,"level":2,"name":"Public Safety Committee","url":"http://api.troycitytracker.com/v1/organizations/8"},{"id":9,"level":2,"name":"Public Works Committee","url":"http://api.troycitytracker.com/v1/organizations/9"},{"id":10,"level":2,"name":"Public Utilities Committee","url":"http://api.troycitytracker.com/v1/organizations/10"},{"id":11,"level":2,"name":"Recreation Committee","url":"http://api.troycitytracker.com/v1/organizations/11"},{"id":12,"level":2,"name":"Technology Committee","url":"http://api.troycitytracker.com/v1/organizations/12"}]';
        httpBackend.expectGET(hostUrl + '/organizations').respond(200, mockCommittees);
        return httpBackend.flush();
      }));
      return it('returns a list of committees', function() {
        return expect(scope.committees).toEqual(JSON.parse(mockCommittees));
      });
    });
  });

}).call(this);

/*
//@ sourceMappingURL=committeeIndexCtrlSpec.map
*/
