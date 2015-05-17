'use strict'

describe 'Bill Controller: Index (BillIndexCtrl)', ->
  scope = null

  beforeEach module('btControllers')
  beforeEach inject( (_$controller_, _$rootScope_) ->
    scope = _$rootScope_
    BillIndexCtrl = _$controller_('BillIndexCtrl', {
      $scope: scope
    })
  )

  describe 'GET bills#all', ->
    mockBills = null
    beforeEach inject (_$httpBackend_) ->
      httpBackend = _$httpBackend_
      hostUrl = 'https://api.troycitytracker.com'
      # TODO: move responses to fixtures
      mockBills = '[{"id":9,"legislation_type":"Resolution","title":"Bond Resolution of the City ofTroy, New York Authorizing the Issuance of$3,537,411 in Serial Bonds to Finance a Capital Project Described in the Combined Sewer Overflow Long Term Control Plan. (Council President Wiltshire) (At the Request ofthe Administration)","short_title":"Issue bonds to fund Sewer Overflow Plan","url":"http://api.troycitytracker.com/v1/bills/9","pdf":"http://api.troycitytracker.com/bills/9.pdf"}]'
      # TODO: move base url to variable
      httpBackend.expectGET(hostUrl + '/bills').respond(200, mockBills)
      httpBackend.flush()

    it 'returns a list of bills', ->
      expect(scope.bills).toEqual(JSON.parse(mockBills))
