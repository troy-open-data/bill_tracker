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

   describe('BillController', function() {
     var bill;
     beforeEach(inject(function($injector) {
       bill = createController('BillController');
     }));

     it('should have bills', function() {
       expect(bill.bills).toBeDefined();
     });
   });
});
