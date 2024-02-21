
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("Visit Practice Automation Testing Site", () => {
    cy.visit("https://practice.automationtesting.in/my-account/")
})