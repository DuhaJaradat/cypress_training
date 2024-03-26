/// <reference types ="cypress" />

describe("task1automation" ,()=> {

    it("signup page visiblity ",()=>{
    cy.visit("//#/register");
    cy.get(".text-xs-center").contains("Sign up").should("be.visible");
    cy.get("a").contains("conduit").should("be.visible");
    // also could use only cy.get("a").contains("conduit")
    cy.get("a").contains("Have an account?").should("be.visible");
    cy.get("[type='text']").should("be.visible");
    //cy.wait(7000)
    cy.get("[type='email']").should("be.visible");
    cy.get("[type='password']").should("be.visible");
  // cy.get("span a").contains("Thinkster").should("be.visible");
     cy.get("[class='attribution ng-binding']").should("be.visible");
    // cy.get("a").contains("conduit").should("be.visible");
     cy.get("[class='logo-font ng-binding']").contains("conduit").should("be.visible")

    cy.get("[type='submit']").contains("Sign up").should("be.visible");
   // cy.get("[class='nav-link active']").contains("Sign up").should("be.visible");
    cy.get("a").contains("Sign up").should("be.visible");
    cy.get("a").contains("Home").should("be.visible");

    
    });

    });

    