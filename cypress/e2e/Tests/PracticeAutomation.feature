Feature: Ecommerce Site - Practice Automation Testing


    # Background:  works for beforEach Test case

    @smoke
    Scenario: Login with Valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with Username and Password
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
        And click on singin button
        Then Dashboard should be visible

    # Scenario Outline: Login with multiple users with <creds> Credentials
    #     Given Visit Practice Automation Testing Site
    #     When User log-in with <Username> and <Password>
    #     And click on singin button
    #     Then <text> should be visible for <creds>

    #     Examples:
    #         | Username        | Password    | creds   | text   |
    #         | sarika@test.com | @Minskole12 | Valid   | sarika |
    #         | gauri@test.com  | 12Minskole@ | valid   | gauri  |
    #         | Arjun@test.com  | Arjun@1     | invalid | Error: |

    @sanity
    Scenario: verify Greencart shoping website
        Given  visit the greencart website
        And verify "KART" on the dashboard page
