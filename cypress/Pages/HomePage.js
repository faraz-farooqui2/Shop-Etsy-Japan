class HomePage
{

getSignInBtn()
{
    return cy.xpath('//button[@class="wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin"]')
}

getRegisterBtn()
{
    return cy.xpath('//button[@class="wt-btn wt-btn--secondary wt-btn--small inline-overlay-trigger register-header-action select-register"]')
}

getEmailAddressField()
{
    return cy.xpath('//input[@id="join_neu_email_field"]')
}

getFirstNameField ()
{
    return cy.xpath('//input[@id="join_neu_first_name_field"]')
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



export default HomePage;
