'use strict'

# Routing Configuration Test:
#   The following expectations test that the route configuration (controller,
#   templateUrl, redirectTo, etc.) are properly set
#
describe 'Route configuration', ->
  route = null

  beforeEach module('billTrackerApp')
  beforeEach inject((_$route_) ->
    route = _$route_
  )

  describe 'non-namespaced resources', ->
    describe 'GET /', ->
      it 'should use MainCtrl', ->
        expect(route.routes['/'].controller).toBe('MainCtrl')
      it 'should render from views/main.html', ->
        expect(route.routes['/'].templateUrl).toBe('views/main.html')

  describe 'Bill resources', ->
    describe 'GET /bills', ->
      it 'should use BillIndexCtrl', ->
        expect(route.routes['/bills'].controller).toBe('BillIndexCtrl')
      it 'should render from views/bills/index.html', ->
        expect(route.routes['/bills'].templateUrl).toBe('views/bills/index.html')
    describe 'GET /bills/:id', ->
      it 'should use BillShowCtrl', ->
        expect(route.routes['/bills/:id'].controller).toBe('BillShowCtrl')
      it 'should render from views/bills/show.html', ->
        expect(route.routes['/bills/:id'].templateUrl).toBe('views/bills/show.html')

  describe 'People resources', ->
    describe 'GET /people', ->
      it 'should use PersonIndexCtrl', ->
        expect(route.routes['/people'].controller).toBe('PersonIndexCtrl')
      it 'should render from views/people/index.html', ->
        expect(route.routes['/people'].templateUrl).toBe('views/people/index.html')
    describe 'GET /people/:id', ->
      it 'should use PersonShowCtrl', ->
        expect(route.routes['/people/:id'].controller).toBe('PersonShowCtrl')
      it 'should render from views/people/show.html', ->
        expect(route.routes['/people/:id'].templateUrl).toBe('views/people/show.html')

  describe 'Committees resources', ->
    describe 'GET /committees', ->
      it 'should use CommitteeIndexCtrl', ->
        expect(route.routes['/committees'].controller).toBe('CommitteeIndexCtrl')
      it 'should render from views/committees/index.html', ->
        expect(route.routes['/committees'].templateUrl).toBe('views/committees/index.html')
    describe 'GET /committees/:id', ->
      it 'should use CommitteeShowCtrl', ->
        expect(route.routes['/committees/:id'].controller).toBe('CommitteeShowCtrl')
      it 'should render from views/committees/show.html', ->
        expect(route.routes['/committees/:id'].templateUrl).toBe('views/committees/show.html')

  describe 'meetings resources', ->
    describe 'GET /meetings', ->
      it 'should use MeetingIndexCtrl', ->
        expect(route.routes['/meetings'].controller).toBe('MeetingIndexCtrl')
      it 'should render from views/meetings/index.html', ->
        expect(route.routes['/meetings'].templateUrl).toBe('views/meetings/index.html')
    describe 'GET /meetings/:id', ->
      it 'should use MeetingShowCtrl', ->
        expect(route.routes['/meetings/:id'].controller).toBe('MeetingShowCtrl')
      it 'should render from views/meetings/show.html', ->
        expect(route.routes['/meetings/:id'].templateUrl).toBe('views/meetings/show.html')
