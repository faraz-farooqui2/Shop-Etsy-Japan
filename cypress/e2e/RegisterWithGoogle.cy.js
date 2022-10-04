import GoogleRegistrationPage from '../Pages/GoogleRegistrationPage'
import DataSet from '../fixtures/CreateAnAccount.json'

describe('Register with Google', () => {

  it('Gmail Account Registration', () => {
    cy.visit('https://www.etsy.com')
    cy.fixture('CreateAnAccount').then(function (data) {
      this.data = data
    })
    cy.navigateToRegistration()
    const grpObj = new GoogleRegistrationPage();
    grpObj.getRegisterBtn().should('be.visible').click();
    // cy.window().then((win) => {
    //   cy.stub(win,'open').as('windowopen')
    // })
    grpObj.getGoogleEmailAddress().should('be.visible').type(DataSet[1].emailAddress)
    grpObj.getGoogleNextBtn().should('be.visible').click()


  })
})