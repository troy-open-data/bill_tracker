(function(){
  // Module
  var app = angular.module('bill', []);

  // Controllers
  app.controller('BillController', ['$http', function($http){
    var billCtrl = this;
    billCtrl.bill = {};

    $http.get('http://troycitytracker.com/api/bills/15').success(function(data){
      billCtrl.bill = data;
    })
  }]);

  app.controller('TabController', function(){
    this.tab = 0;
    this.setTab = function(newTab) {
      this.tab = newTab;
    };
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  addAnchors();
})();
