import HomePage from '../Pages/HomePage'
import DataSet from '../fixtures/CreateAnAccount.json'



describe('Create An Account', () => {
  it('Register an account', () => {
    cy.visit('https://www.etsy.com')
    
    cy.fixture('CreateAnAccount').then(function(data)
  {
      this.data=data
  })
  
  cy.navigateToRegistration()
  cy.get('#join-neu-overlay-title').contains("Create your account")
  const homePageObj = new HomePage();
  homePageObj.getEmailAddressField().should('be.visible').click()
  cy.wait(3000)
    let random = Math.floor(Math.random() * 500);
    let plus = '+'
    let domain = '@gmail.com'
    homePageObj.getEmailAddressField().type(DataSet.emailAddress+plus+random+domain)
    homePageObj.getFirstNameField().should('be.visible').click()
    homePageObj.getFirstNameField().type(DataSet.firstName)
    homePageObj.getPasswordField().should('be.visible').click()
    homePageObj.getPasswordField().type(DataSet.password)
    homePageObj.getResgistered().click()
  })
})