class LoginPage
{

getSignInBtn()
{
    return cy.xpath('//button[@class="wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin"]')
}

getLoginEmailAddressField()
{
    return cy.xpath('//input[@id="join_neu_email_field"]')
}

getLoginPasswordField()
{
    return cy.xpath('//input[@id="join_neu_password_field"]')
}

getLoginSignInBtn()
{
    return cy.get('button[name="submit_attempt"]')
}

}



export default LoginPage;
