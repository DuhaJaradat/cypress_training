/// <reference types="cypress" />
     
before(()=>{
    const email = "CypressUser@gmail.com"; 
    const password = "test@123";
    // custom command 
    cy.loginToMagento(email,password);
    cy.screenshot({capture:"viewport"})
    cy.screenshot({capture:"runner"})
})
describe('test case', () => {
    it('addtowishlist', () => {
 
        cy.get("#search").type("shirt"+"{enter}");
        cy.screenshot({capture:"fullPage"})
       // cy.contains("a","Circe Hooded Ice Fleece").click();
      cy.get("a").contains("Circe Hooded Ice Fleece").click();
      cy.get("#option-label-size-143-item-167").click()
     // cy.get("#option-label-color-93-item-53").click()
      //cy.get("#product-addtocart-button").click()
      cy.contains("Add to Wish List").click()


      
 

    
        
    });
    
});