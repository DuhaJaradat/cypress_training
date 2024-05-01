/// <reference types ="cypress" />


 describe("selectors " ,()=> {

it.only("ex",()=>{

    cy.visit("https://codenboxautomationlab.com/practice/");
    cy.get("#menu-item-62 a").contains("Home");
    // cy.contains("Automation Practice") // two ways to write a contains 
    cy.get(".page-title").contains("Automation Practice");
    cy.get("[type=search]").last();







});

 });