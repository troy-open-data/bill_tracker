'use strict';

describe('Bill Controller: Index (BillIndexCtrl)', function() {
  beforeEach(module('btControllers'));

  var BillIndexCtrl, scope;

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    scope = _$rootScope_;
    BillIndexCtrl = _$controller_('BillIndexCtrl', {
      $scope: scope
    });
  }));

  describe('GET bills#all', function() {
    var httpBackend, mockBills, hostUrl;

    beforeEach(inject(function(_$httpBackend_) {
      httpBackend = _$httpBackend_;
      hostUrl = 'https://api.troycitytracker.com';
      // TODO: move responses to fixtures
      mockBills = '[{"id":1,"name":"Finance Committee Meeting on May 7th, 2015 18:00","date":"2015-05-07T18:00:00.000-04:00","location":"Suite 5, 433 River Street, Troy, NY 12180","bill_count":6,"organization":{"id":3,"name":"Finance Committee","url":"http://api.troycitytracker.com/v1/organizations/3"},"agenda":{"approved":false,"pdf":"http://api.troycitytracker.com/meetings/1/agenda.pdf"},"minutes":{"approved":false,"pdf":"http://api.troycitytracker.com/meetings/1/minutes.pdf"},"url":"http://api.troycitytracker.com/v1/meetings/1"},{"id":3,"name":"Technology Committee Meeting on May 21st, 2015 15:00","date":"2015-05-21T15:00:00.000-04:00","location":"Suite 5, 433 River Street, Troy, NY 12180","bill_count":3,"organization":{"id":12,"name":"Technology Committee","url":"http://api.troycitytracker.com/v1/organizations/12"},"agenda":{"approved":false,"pdf":"http://api.troycitytracker.com/meetings/3/agenda.pdf"},"minutes":{"approved":false,"pdf":"http://api.troycitytracker.com/meetings/3/minutes.pdf"},"url":"http://api.troycitytracker.com/v1/meetings/3"}]';

      // TODO: move base url to variable
      httpBackend.expectGET(hostUrl + '/bills')
        .respond(200, mockBills);
      httpBackend.flush();
    }));

    it('returns a list of bills', function() {
      expect(scope.bills).toEqual(JSON.parse(mockBills));
    });
  });
});
