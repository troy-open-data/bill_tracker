'use strict'

describe 'Committee Controller: Show (CommitteeShowCtrl)', ->
  scope = null

  beforeEach module('btControllers')
  beforeEach inject( (_$controller_, _$rootScope_) ->
    scope = _$rootScope_
    CommitteeShowCtrl = _$controller_('CommitteeShowCtrl', {
      $scope: scope,
      $routeParams: id: 1
    })
  )

  describe 'GET committees#show', ->
    mockCommittee = null
    beforeEach inject (_$httpBackend_) ->
      httpBackend = _$httpBackend_
      hostUrl = 'https://api.troycitytracker.com'
      # TODO: move responses to fixtures
      mockCommittee = '{"id":2,"level":1,"name":"City Council","description":null,"created_at":"2015-04-30T22:21:43.475-04:00","updated_at":"2015-04-30T22:21:43.475-04:00","members":[{"id":3,"first":"Rodney","last":"Wiltshire, Jr.","url":"http://api.troycitytracker.com/v1/people/3"},{"id":5,"first":"Lynn M. ","last":"Kopka","url":"http://api.troycitytracker.com/v1/people/5"},{"id":4,"first":"Erin ","last":"Sullivan-Teta","url":"http://api.troycitytracker.com/v1/people/4"},{"id":6,"first":"James","last":"Gordon","url":"http://api.troycitytracker.com/v1/people/6"},{"id":7,"first":"Anastasia","last":"Robertson","url":"http://api.troycitytracker.com/v1/people/7"},{"id":8,"first":"Dean","last":"Bodnar","url":"http://api.troycitytracker.com/v1/people/8"},{"id":9,"first":"Robert J.","last":"Doherty","url":"http://api.troycitytracker.com/v1/people/9"},{"id":10,"first":"Ken","last":"Zalewski","url":"http://api.troycitytracker.com/v1/people/10"},{"id":11,"first":"Gary","last":"Galuski","url":"http://api.troycitytracker.com/v1/people/11"}],"meetings":[],"organizations_url":"http://api.troycitytracker.com/v1/organizations"}'
      # TODO: move base url to variable
      httpBackend.expectGET(hostUrl + '/organizations/1').respond(200, mockCommittee);
      httpBackend.flush()

    it 'returns a list of committees', ->
      expect(scope.committee).toEqual(JSON.parse(mockCommittee))
