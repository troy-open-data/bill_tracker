'use strict'

describe 'Person Controller: Show (PersonShowCtrl)', ->
  scope = null

  beforeEach module('btControllers')
  beforeEach inject (_$controller_, _$rootScope_) ->
    scope = _$rootScope_
    PersonShowCtrl = _$controller_('PersonShowCtrl', {
      $scope: scope,
      $routeParams: id: 1
    })

  describe 'GET people#show', ->
    mockPerson = null

    beforeEach inject (_$httpBackend_) ->
      httpBackend = _$httpBackend_
      hostUrl = 'https://api.troycitytracker.com'
      # TODO: move responses to fixtures
      mockPerson = '{"id":1,"first":"Rodney","last":"Wiltshire, Jr.","bio":"City Council President, At large city council member, Chair of the Finance Committee.","created_at":"2015-05-01T10:44:04.914-04:00","updated_at":"2015-05-01T11:16:16.565-04:00","memberships":[{"id":2,"name":"City Council"},{"id":3,"name":"Finance Committee"}],"sponsorships":[],"people_url":"http://api.troycitytracker.com/v1/people"}'
      # TODO: move base url to variable
      httpBackend.expectGET(hostUrl + '/people/1')
        .respond(200, mockPerson);
      httpBackend.flush()

    it 'returns a list of people', ->
      expect(scope.person).toEqual(JSON.parse(mockPerson))
