class GoogleRegistrationPage
{

getRegisterBtn()
{
    return cy.xpath('//*[@id="join-neu-form"]/div[3]/div[1]/div/button')
}

getGoogleEmailAddress()
{
    return cy.xpath('//input[@id="identifierId"]')
}

getGoogleNextBtn ()
{
    return cy.xpath('//span[text()="Next"]/parent::button')
}

getPasswordField()
{
    return cy.xpath('//input[@id="join_neu_password_field"]')
}

getResgistered()
{
    return cy.get('button[name="submit_attempt"]')
}

}



export default GoogleRegistrationPage;
