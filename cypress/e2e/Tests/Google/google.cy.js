import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

//Cucumber parameter types like {int}, {float} or {string} will also work, but we recommend using {arg}.
Given("I open google page", ()=>{
   cy.visit("https://www.google.com/")
})

When("I see {string} in the title", (arg1)=>{
    cy.title().should('include', arg1)
})


Then("I see {string} in the url", (param1)=>{
   cy.url().should('include', param1)
})

And("I verify the text {string}",(text)=>{
    cy.get('div[class="gb_H gb_I"] >a').eq(0).should('have.text',text)
    //cy.log(Cypress._.random(0, 10))         //random number from 0 to 10 including 10
    cy.log(Cypress._.random(0, 1e6))
})

// https://stackoverflow.com/questions/54113654/creating-a-random-string-in-cypress-and-passing-this-to-a-cy-command

