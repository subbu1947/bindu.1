$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeaFolder/dem.feature");
formatter.feature({
  "name": "Customer registration",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "DefStep.open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer opened the application",
  "keyword": "And "
});
formatter.match({
  "location": "DefStep.customer_opened_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "customer signup",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "customer provides the registration details",
  "keyword": "When "
});
formatter.match({
  "location": "DefStep.customer_provides_the_registration_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer registration is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "DefStep.customer_registration_is_successful()"
});
formatter.result({
  "status": "passed"
});
});