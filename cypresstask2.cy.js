/// <reference types="cypress" />



before(()=>{
    const email = "admin@yourstore.com"; 
    const password = "admin";
    cy.nopcommerce(email,password);
    cy.get(".content-header").contains("Dashboard").should("be.visible")

    //cy.get("[value='admin@yourstore.com']").clear()


})
describe("test case 1",()=>{ 
    it('Add Product ', () => {
     //cy.contains("a","Catalog").should("be.visible");
     //cy.get("a").contains("Catalog").click()
  
cy.get('.dropdown-menu')
 cy.get(".os-content")


cy.get('[class="nav nav-treeview"]').find("li").find("a").children("p").first().click({force:true});

cy.get("div.float-right").find("a").contains("Add new").click()
cy.get('[class="input-group input-group-required"]').find('[class="form-control text-box single-line"] ','#Name').type("Laptop123")
cy.get('[class="k-widget k-multiselect k-multiselect-clearable"]').find('[class="k-multiselect-wrap k-floatwrap"]').first().click();
cy.get('[class="k-list-scroller"]').children("ul").find("li").contains("Computers").click();

cy.get('[class="k-numeric-wrap k-state-default"]').children('input.k-formatted-value.k-input').first().should('have.attr','title')
//.should(include.all.keys,title="0")
//.focus().clear().type("3000.000 USD").blur();

//cy.get(`input[name=${Price}]`).focus().clear().type("3000.000 USD").blur()
// cy.get('input').eq(0).type('fast typing')


});


});