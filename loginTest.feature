@smokeTest @login @TS-123

Feature:  login functionality
Scenario: Validate that the user can login using vaild email and password 

Given  the user navigate to magento website 
When  the user type email in email input filed
And   the user type password in password filed  
And   the user click on sign in button 
Then  the user will redirect to my account page 


