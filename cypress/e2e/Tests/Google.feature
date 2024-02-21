Feature: Google Page

    @regression
    Scenario: Opening search engine page
        Given I open google page
        When I see "Google" in the title
        Then I see "google" in the url
        And I verify the text "Gmail"

# the below common steps it will take from the already exist code No need to write separate step definations for it in the e2e folder
    Scenario: verify text gmail
        Given I open google page
        When I see "Google" in the title
        And I verify the text "Gmail"