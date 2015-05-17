'use strict'

describe 'Navbar items', ->
  scope = null
  element = null

  beforeEach module('btDirectives')
  beforeEach inject (_$rootScope_, _$compile_) ->
    element = angular.element('<div><bt-page-nav></bt-page-nav></div>')
    scope = _$rootScope_
    _$compile_(element)(scope)
    scope.$digest()

  it 'should have a single root', ->
    expect(element.find('ul.navbar-nav').length).toEqual(1)

  it 'should create a navbar list', ->
    navItems = element.find('ul.navbar-nav li')
    expect(navItems.length).toBeGreaterThan(0)

#   TODO: testing change of class: e2e test?
#
#   it('should set the active class on click', function() {
#     var navItems = element.find('ul.navbar-nav li');
#
#     expect(navItems.eq(0)).toHaveClass('active');
#     expect(navItems.eq(1)).not.toHaveClass('active');
#
#     navItems.eq(1).find('a').click();
#
#     expect(navItems.eq(0)).not.toHaveClass('active');
#     expect(navItems.eq(1)).toHaveClass('active');
#   });

  describe '#isPage', ->
    location = null
    beforeEach inject (_$location_) ->
      location = _$location_
      location.path('/bills')

    it 'should return true if passed the current page name (bills)', ->
      expect(scope.isPage('bills')).toBe(true)

    it 'should return true if the passed name is the root of the current path (bills for /bills/1)', ->
      location.path('/bills/201')
      expect(scope.isPage('bills')).toBe(true)

    it 'should return false if passed the wrong name (notbills)', ->
      expect(scope.isPage('notbills')).toBe(false)

    it 'should return false if passed "root"', ->
      expect(scope.isPage('root')).toBe(false)

    describe 'on the root path /', ->
      beforeEach -> location.path('/')

      it 'should return true if passed "root"', ->
        expect(scope.isPage('root')).toBe(true)
      it 'should return false if passed anything else', ->
        expect(scope.isPage('bills')).toBe(false)
