/// <reference types="cypress" />


import { Given , When ,Then } from "cypress-cucumber-preprocessor/steps";

Given('the user navigate to magento website',()=>{
cy.visit("/customer/account/login");

});

When('the user type email in email input filed',()=>{
    
    cy.get("#email").type("CypressUser@gmail.com");

});

When("the user type password in password filed",()=>{
    cy.get("#pass").type("test@123");

});

When("the user click on sign in button",()=>{
    cy.get("#send2").click();

});

Then("the user will redirect to my account page",()=>{
    cy.contains("span","Welcome, cypress user!");

});

