'use strict'

describe 'Person Controller: Index (PersonIndexCtrl)', ->
  scope = null

  beforeEach module('btControllers')
  beforeEach inject (_$controller_, _$rootScope_) ->
    scope = _$rootScope_
    PersonIndexCtrl = _$controller_('PersonIndexCtrl', {
      $scope: scope
    })

  describe 'GET people#all', ->
    mockPeople = null
    beforeEach inject (_$httpBackend_) ->
      httpBackend = _$httpBackend_
      hostUrl = 'https://api.troycitytracker.com'
      # TODO: move responses to fixtures
      mockPeople = '[{"id":3,"first":"Rodney","last":"Wiltshire, Jr.","url":"http://api.troycitytracker.com/v1/people/3"},{"id":5,"first":"Lynn M. ","last":"Kopka","url":"http://api.troycitytracker.com/v1/people/5"},{"id":4,"first":"Erin ","last":"Sullivan-Teta","url":"http://api.troycitytracker.com/v1/people/4"},{"id":6,"first":"James","last":"Gordon","url":"http://api.troycitytracker.com/v1/people/6"},{"id":7,"first":"Anastasia","last":"Robertson","url":"http://api.troycitytracker.com/v1/people/7"},{"id":8,"first":"Dean","last":"Bodnar","url":"http://api.troycitytracker.com/v1/people/8"},{"id":9,"first":"Robert J.","last":"Doherty","url":"http://api.troycitytracker.com/v1/people/9"},{"id":10,"first":"Ken","last":"Zalewski","url":"http://api.troycitytracker.com/v1/people/10"},{"id":11,"first":"Gary","last":"Galuski","url":"http://api.troycitytracker.com/v1/people/11"}]'
      # TODO: move base url to variable
      httpBackend.expectGET(hostUrl + '/people').respond(200, mockPeople)
      httpBackend.flush()

    it 'returns a list of bills', ->
      expect(scope.people).toEqual(JSON.parse(mockPeople))
