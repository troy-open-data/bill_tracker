(function(){
  // Module
  var app = angular.module('bill', []);

  // Controllers
  app.controller('BillController', function(){
    this.bills = bills;
  });

  var bills = [
    {
      id: 1,
      legislation_type: "Ordinance",
      title: "Ordinance Amending Ordinance No. 12 Adopted by the Troy City Council on December 4, 1975; as Amended by Ordinance No.1 Adopted December 15, 1979; as Amended by Ordinance No.1 Adopted December 1, 1981; as Amended by Ordinance No.1 Adopted Aprill4, 1983; as Amended by Ordinance No.1 Adopted April2, 1992; as Amended by Ordinance No.2 Adopted January 19, 1996; as Amended by Ordinance No.3 Adopted January 8, 1998; as Amended by Ordinance No. 15 Adopted December 7, 2000; as Amended by Ordinance No. 1 Adopted November 30, 2006; as Amended by Ordinance No. 3 Adopted November 20, 2012; Which Pursuant to Section 10.06 ofthe City Charter and Section 30-17 ofthe Troy Code o f Ordinances Established a Code o f Rules and Regulations for the Department o f Public Utilities and as Amended to fucrease the Sewer Rate From 65% to 85% ofthe Water Bill Rate. (Council President Wiltshire) (At the Request ofthe Administration)",
      short_title: "Increase Sewer Rate",
      body: "Neque purus pede condimentum pretium sollicitudin. Lacus morbi non vestibulum habitasse ante aliquet ad. Ipsum felis aptent aenean quisque et quam. Etiam felis ipsum auctor metus. Magna porta eleifend adipiscing.",
      url: "https://legislative-twitter.herokuapp.com/api/bills/1",
      pdf: "https://legislative-twitter.herokuapp.com/bills/1.pdf"
    },
    {
      id: 2,
      legislation_type: "Ordinance",
      title: "Ordinance Authorizing the Mayor to Enter into a Purchase and Sale Agreement with the Catholic Charities Housing Office (CCHO) for the Purpose o f Selling Properties Located at 3349 6th A venue and 391 1st Street, Troy, New York. (Council President Wiltshire ) (At the Request ofthe Administration)",
      short_title: "Sell Properties to CCHO",
      body: "Neque purus pede condimentum pretium sollicitudin. Lacus morbi non vestibulum habitasse ante aliquet ad. Ipsum felis aptent aenean quisque et quam. Etiam felis ipsum auctor metus. Magna porta eleifend adipiscing.",
      url: "https://legislative-twitter.herokuapp.com/api/bills/2",
      pdf: "https://legislative-twitter.herokuapp.com/bills/2.pdf"
    }
  ];

  addAnchors();
})();
