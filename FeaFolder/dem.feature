Feature: Customer registration

  Background: 
    Given open the browser
    And customer opened the application

  @Smoke
  Scenario: customer signup
    #Gherkin language
    #to set the context  or prerequiste
    #to start an event
    When customer provides the registration details
    #outcome of the event
    Then customer registration is successful

  @Regression
  Scenario Outline: customer  login
    When customer provides  the credentials as "<user>" and "<pass>"
    Then login is successful

    Examples: 
      | user  | pass   |
      | demo  | demo   |
      | mary  | jane   |
      | peter | parker |

  @Regression1
  Scenario Outline: customer  login
    When customer provides  the credentials as "<user>" and "<pass>"
    Then login is successful

    Examples: 
      | user  | pass   |
      | demo  | demo   |
      | mary  | jane   |
      | peter | parker |
