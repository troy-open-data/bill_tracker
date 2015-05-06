(function(){
  // Module
  var app = angular.module('bill', []);

  // Controllers
  app.controller('BillController', ['$http', function($http){
    var bill = this;
    bill.aBill = {};

    $http.get('http://troycitytracker.com/api/bills/15').success(function(data){
      bill.aBill = data;
    })
  }]);

  addAnchors();
})();
