'use strict';

describe('Bill Controller: Show (BillShowCtrl)', function() {
  beforeEach(module('btControllers'));

  var BillShowCtrl, scope;

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    scope = _$rootScope_;
    BillShowCtrl = _$controller_('BillShowCtrl', {
      $scope: scope,
      $routeParams: {id: 1}
    });
  }));

  describe('GET bills#show', function() {
    var httpBackend, mockBill, hostUrl;

    beforeEach(inject(function(_$httpBackend_) {
      httpBackend = _$httpBackend_;
      hostUrl = 'https://api.troycitytracker.com';
      // TODO: move responses to fixtures
      mockBill = '{"id":1,"legislation_type":"Ordinance","title":"Ordinance Amending Ordinance No. 12 Adopted by the Troy City Council on December 4, 1975; as Amended by Ordinance No.1 Adopted December 15, 1979; as Amended by Ordinance No.1 Adopted December 1, 1981; as Amended by Ordinance No.1 Adopted Aprill4, 1983; as Amended by Ordinance No.1 Adopted April2, 1992; as Amended by Ordinance No.2 Adopted January 19, 1996; as Amended by Ordinance No.3 Adopted January 8, 1998; as Amended by Ordinance No. 15 Adopted December 7, 2000; as Amended by Ordinance No. 1 Adopted November 30, 2006; as Amended by Ordinance No. 3 Adopted November 20, 2012; Which Pursuant to Section 10.06 ofthe City Charter and Section 30-17 ofthe Troy Code o f Ordinances Established a Code o f Rules and Regulations for the Department o f Public Utilities and as Amended to fucrease the Sewer Rate From 65% to 85% ofthe Water Bill Rate. (Council President Wiltshire) (At the Request ofthe Administration)","short_title":"Increase Sewer Rate","created_at":"2015-04-30T22:21:43.618-04:00","updated_at":"2015-04-30T22:21:43.618-04:00","preamble":{"recitals":[],"enacting_formula":"Let it be hereby resolved"},"main_content":{"sections":[]},"history":{"meetings":[{"meeting":{"id":1,"date_and_time":"2015-05-07T18:00:00.000-04:00","organization":{"id":3,"name":"Finance Committee","url":"http://api.troycitytracker.com/v1/meetings/3"},"url":"http://api.troycitytracker.com/v1/meetings/1"}}],"sponsors":[]},"pdf":"http://api.troycitytracker.com/bills/1.pdf","bills_url":"http://api.troycitytracker.com/v1/bills"}';

      // TODO: move base url to variable
      httpBackend.expectGET(hostUrl + '/bills/1')
        .respond(200, mockBill);
      httpBackend.flush();
    }));

    it('returns a list of bills', function() {
      expect(scope.bill).toEqual(JSON.parse(mockBill));
    });
  });
});
