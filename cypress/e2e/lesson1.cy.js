/// <reference types ="cypress" />
describe("lesson1",()=>{

it("visit magento site ", ()=>{

cy.visit("/");
cy.visit("/customer/account/create/");
cy.visit("/what-is-new.html");
//cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
//cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");
});
/*
steps of test case 
1 open the websites 
2 enter valid email 
3 enter valid password 
4 clik on login button 
5 the user should redirected to the correct page (my account page of magento)
 */
it("validate that the user can login to the magento website" ,()=> {
cy.visit("//customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
cy.get("#email").type("q.jaradat@izhiman.com")
cy.get("#pass").type("123123123asdASD")
cy.get("[name='send']").click()
//cy.get(".page.title").should("contain","My Account")
// id -> #idname // attribute 
//calss -> classname // attribute 

});

});