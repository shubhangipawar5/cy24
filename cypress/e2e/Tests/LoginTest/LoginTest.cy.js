/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

import login from "../../../support/Pages/Login.cy"

Given("I navigate to the Website",()=>{
    login.enterURL();
})
Given("I say Hello",()=>{
    cy.log('I say Hello')
})

When("I entered valid credential",(datatable)=>{
    datatable.hashes().forEach(data => {
        login.enterUserNamePassword(data.username,data.password);
    });
})
And("User click on sign in button",()=>{
    login.clickSubmitButton();
})
Then("Validate the title after login",()=>{
    login.verifyPageTitle();
})
