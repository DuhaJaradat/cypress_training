/// <reference types ="cypress" />


describe ("lesson3",()=>{
it('contains commands ',()=>{

    cy.visit("/");

    cy.get("ul.footer").find("li").contains("Advanced Search");
   // cy.contains("");
   // cy.contains("","");
   // cy.get("").contains();
   cy.contains("Hot Sellers");
   cy.contains("As low as");// return the first one in site 
   cy.get(".price-label");
   cy.get("span").contains("Shop New Yoga") // cy.conatins("span","Shop New Yoga")
    // cy.contains(Shop New Yoga) return  a links strong than span


});
it("position in list",()=>{
    cy.visit("/");

    //cy.get(".home-eco"); // withour .last()
    //cy.get(".block-promo-wrapper").find("a").last(); // with .last()
  // cy.get(".block-promo-wrapper").find("a"); // without .last()
  // cy.get(".block-promo-wrapper a")// without .last() as bfore one
   // cy.get(".block-promo-wrapper").find("a").first(); // with .first()
  // cy.get(".block-promo-wrapper a").eq("2") // with eq 
   // cy.get(".block-promo-wrapper ").find("a").first().next(); // using next
    // cy.get(".block-promo-wrapper a").last().prev();
    cy.get("span").contains("Shop New Yoga").prev(); // with prev()
    cy.get("span").contains("Shop New Yoga").prev().prev(); // with prev()
    cy.get("span").contains("Shop New Yoga").prev().next(); 

});

it("filter",()=>{
cy.visit("/");
cy.get("li");
// cy.get("li").filter(".authorization-link");
// cy.get("li").not(".authorization-link");
//cy.get("li").filter(".level0");
cy.get("li").not(".level0");

});

it("find",()=>{
    cy.visit("/");
    cy.get(".nav-6").find("a"); //cypress command 
    cy.get(".nav-6 a"); // css selector 
    cy.get(".nav-6").parent(); // parents diff from parent
    


})

});