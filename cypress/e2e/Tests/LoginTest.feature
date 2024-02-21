Feature: User Login for Lmabda Test


    Background: Navigate to the Website
        Given I navigate to the Website

    Scenario: Verify Lambda Test User Login with valid credentials 
        When I entered valid credential
            | username                | password   |
            | shubhangi5693@gmail.com | Lenovo2020 |
        And User click on sign in button
        Then Validate the title after login
