import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

 Cypress.Commands.add('navigateToRegistration', () => {
    const homePageObj = new HomePage();
    homePageObj.getSignInBtn().should('be.visible').click()
    homePageObj.getRegisterBtn().should('be.visible').click()

  })

  Cypress.Commands.add('login', (emailAddress , password) => {
    const loginPageObj = new LoginPage();
    loginPageObj.getLoginEmailAddressField().should('be.visible').click().clear().type(emailAddress)
    loginPageObj.getLoginPasswordField().should('be.visible').click().clear().type(password)

  })



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath');
