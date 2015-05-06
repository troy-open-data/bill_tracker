// Verify Testing Setup Specs
describe('Jasmine', function() {
   var rootScope, createController;

   // Set up the module
   beforeEach(module('bill'));

   // Allow controllers to be set up
   beforeEach(inject(function($injector) {
     // Get hold of a scope (i.e. the root scope)
     $rootScope = $injector.get('$rootScope');
     // The $controller service is used to create instances of controllers
     var $controller = $injector.get('$controller');

     createController = function(controller) {
       return $controller(controller, {'$scope' : $rootScope });
     };
   }));

   // Check that Jasmine can find controllers
   it('should find BillController', function() {
     var bill = createController('BillController');
     expect(bill).toBeDefined();
   });
   it('should find TabController', function() {
     var tab = createController('TabController');
     expect(tab).toBeDefined();
   });

   // Controller tests
   describe('BillController', function() {
     var billCtrl;
     beforeEach(inject(function($injector) {
       billCtrl = createController('BillController');
     }));

     it('should have bill', function() {
       expect(billCtrl.bill).toBeDefined();
     });
   });

   describe('TabController', function() {
     var tabCtrl;
     beforeEach(inject(function($injector) {
       tabCtrl = createController('TabController');
     }));

     it('should initialize tab to 0', function() {
       expect(tabCtrl.tab).toEqual(0);
     });

     describe('setTab(n)', function() {
       it('should set tab to n', function() {
         tabCtrl.setTab(100);
         expect(tabCtrl.tab).toEqual(100);
       });
     })
     describe('isSet(n)', function() {
       beforeEach(function() {
         tabCtrl.setTab(5);
       });
       it('should return true if tab === n', function() {
         expect(tabCtrl.isSet(5)).toBe(true);
       });
       it('should return false if tab !== n', function() {
         expect(tabCtrl.isSet(10)).toBe(false);
       });
     })
   });
});
