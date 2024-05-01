/// <reference types="cypress" />
describe('check create new account in magento website ', () => {
    
    it('Create New Customer Account', () => {
        cy.visit("/customer/account/create/");
        cy.get("span").contains("Create New Customer Account").should("be.visible")
        cy.get("span").contains("Personal Information").should("be.visible")
        cy.get("span").contains("First Name").should("be.visible")
        cy.get("#firstname").should("be.visible");
        cy.get("span").contains("Last Name").should("be.visible");
        cy.get("#lastname").should("be.visible")
        cy.get("span").contains("Sign-in Information")
        cy.get("span").contains("Email")
        cy.get("#email_address").should("be.visible")
       cy.get("span").contains("Password").should("be.visible");
       //cy.get("[for=password]").should("be.visible")
       cy.get("#password-strength-meter").should("be.visible").contains("Password Strength")
       cy.get(".fieldset.create.account").should("have att","data-hasrequired","* Required Fields")
       cy.get("span").contains("Confirm Password").should("be.visible");
        cy.get("#password-confirmation").should("be.visible")
        cy.get("span").contains("Create an Account").should("be.visible")
        cy.get("span").contains("Create an Account").click();
      //  cy.get("#password-strength-meter-label").contains("Password Strength").shold("be.visible")
      // cy,get("button").contains("Create an Account").should("be.visible")
       //cy.get(".password-strength-meter").should("be.visible").and ("contains","Password Strength")
    
       



            
        });
        it.only('check functionality ', () => {
            cy.visit("/customer/account/create/");
            cy.get("#firstname").type("dqj");
            cy.get("#lastname").type("jaradat");
            cy.get("#email_address").type("duhajaradat616@gmail.com");
            cy.get("#password").type("*123456asdASD");
            cy.get("#password-confirmation").type("*123456asdASD");
            cy.get("span").contains("Create an Account").click();
        
    });
});
