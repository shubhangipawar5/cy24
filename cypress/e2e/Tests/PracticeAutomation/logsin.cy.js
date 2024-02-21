
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("Visit Practice Automation Testing Site", () => {                     
    cy.visit("https://practice.automationtesting.in/my-account/")
})


When("User log-in with Username and Password", (dataTable) => {
    cy.log(dataTable)
    dataTable.hashes().forEach(element => {
        cy.get('#username').type(element.Username) 
        cy.get('#password').type(element.Password)
    })
})


And("click on singin button", () => {
    cy.get('[name="login"]').click()

})

Then("Dashboard should be visible", () => {
    cy.get('.is-active > a').should('have.text', 'Dashboard')
})
/*  if we write feature in this way -> "<parameter>"   --When User log-in with "<Username>" and "<Password>"
When("User log-in with {string} and {string}", (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
})
*/

// other way When User log-in with <Username> and <Password> --then use - {string}
When("User log-in with {word} and {word}", (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
})

Then("{word} should be visible for {word}", (text,creds) => {
    if(creds == "valid"){
        cy.get('p strong').eq(0).should('have.text', text)
    }
    if (creds == "invalid"){
        cy.get('li strong').eq(0).should('have.text',text)
    }
    

    
})
