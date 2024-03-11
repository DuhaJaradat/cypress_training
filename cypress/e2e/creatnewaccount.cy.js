/// <reference types ="cypress" />
describe("creatnewaccount",()=>{

    it.only("visit magento site ", ()=>{

        //cy.get(".authorization-links a") example to write without contains 
        //cy.get(".authorization-links a").first() how also could solve without contains
        //cy.get(".authorization-links a").last()
        // cy.contains("sign in")
    
        cy.visit("/customer/account/create/");
       cy.get("a").contains("Create an Account").click()
        cy.wait(7000)
        cy.get(".page-title").should("be.visible")
        cy.contains("Create New Customer Account").should("be.visible")
        cy.get("span").contains("Personal Information").should("be.visible")
        cy.get("span").contains("First Name").should("be.visible")
        cy.get("#firstname").should("be.visible")
        cy.get("span").contains("Last Name").should("be.visible")
        cy.get("#lastname").should("be.visible")
        cy.get("span").contains("Sign-in Information").should("be.visible")
        cy.get("span").contains("Email").should("be.visible")
        cy.get("#email_address").should("be.visible")
        cy.get("span").contains("Password").should("be.visible")
        cy.get("#password").should("be.visible")
        cy.get("span").contains("Confirm Password").should("be.visible")
        cy.get("#password-confirmation").should("be.visible")
        cy.get("span").contains("Create an Account").click()

    });
    
    
    });
    
  