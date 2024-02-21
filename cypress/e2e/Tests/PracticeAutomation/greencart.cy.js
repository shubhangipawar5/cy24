
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("visit the greencart website",()=>{
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
})

And("verify {string} on the dashboard page",(kart)=>{
    cy.wait(5000);
    cy.get('.redLogo').eq(0).should('have.text',kart)
})