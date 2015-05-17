'use strict'

describe 'Meeting Controller: Show (MeetingShowCtrl)', ->
  scope = null

  beforeEach module('btControllers')
  beforeEach inject (_$controller_, _$rootScope_) ->
    scope = _$rootScope_
    MeetingShowCtrl = _$controller_('MeetingShowCtrl', {
      $scope: scope,
      $routeParams: {id: 1}
    })

  describe 'GET meetings#show', ->
    mockMeeting = null
    beforeEach inject (_$httpBackend_) ->
      httpBackend = _$httpBackend_
      hostUrl = 'https://api.troycitytracker.com'
      # TODO: move responses to fixtures
      mockMeeting = '{"id":3,"name":"Technology Committee Meeting on May 21st, 2015 15:00","date":"2015-05-21T15:00:00.000-04:00","location":"Suite 5, 433 River Street, Troy, NY 12180","created_at":"2015-05-07T12:09:05.063-04:00","updated_at":"2015-05-07T12:09:05.063-04:00","organization":{"id":12,"name":"Technology Committee","url":"http://api.troycitytracker.com/v1/organizations/12"},"agenda":{"approved":false,"pdf":"http://api.troycitytracker.com/meetings/3/agenda.pdf"},"minutes":{"approved":false,"pdf":"http://api.troycitytracker.com/meetings/3/minutes.pdf"},"attendees":[],"orders_of_business":[{"title":"Roll Call","text":""},{"title":"Good News Agenda","text":""}],"bills":[{"id":10,"title":"Resolution Authorizing the Mayor to Execute an Agreement with Rensselaer County Sewer District No. #1 for Utilizing the City\'s Computerized Water and Sewer Billing and Collection System. (Council President Wiltshire) (At the Request ofthe Administration)","short_title":"Execute Agreement with Rensselaer County Sewer District #1","sponsors":[],"roll_calls":[],"notes":null,"url":"http://api.troycitytracker.com/v1/bills/10"},{"id":5,"title":"Resolution Amending the Rules ofOrder and Setting the Dates ofthe Regular Monthly Meetings ofthe Troy City Council. (Council President Wiltshire) (At the Request of the Administration)","short_title":"Amend Dates of Monthly Meetings","sponsors":[],"roll_calls":[],"notes":null,"url":"http://api.troycitytracker.com/v1/bills/5"},{"id":4,"title":"Ordinance Amending the 2015 City Budget to Transfer Funds Within the General and Water Fund Budget Lines. (Council President Wiltshire) (At the Request ofthe Administration)","short_title":"Transfer Funds within Water Fund Budget","sponsors":[],"roll_calls":[],"notes":null,"url":"http://api.troycitytracker.com/v1/bills/4"}],"meetings_url":"http://api.troycitytracker.com/v1/meetings"}'
      # TODO: move base url to variable
      httpBackend.expectGET(hostUrl + '/meetings/1').respond(200, mockMeeting)
      httpBackend.flush()

    it 'returns a list of meetings', ->
      expect(scope.meeting).toEqual(JSON.parse(mockMeeting))
