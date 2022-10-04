import DataSet from '../fixtures/Login.json'
import DataSet from '../fixtures/InvalidLogin.json'
import LoginPage from '../Pages/LoginPage'



describe('Sign in', () => {
    it('Login an account', () => {
        cy.visit('https://www.etsy.com')
        

        cy.fixture('Login').then(function (data) {
            this.data = data
        })
        const loginPageObj = new LoginPage();
        loginPageObj.getSignInBtn().should('be.visible').click()
        cy.get('#join-neu-overlay-title').contains("Sign in")
        for (let i = 0; i < DataSet.length; i++) {
            cy.login(DataSet[i].emailAddress, DataSet[i].password)
            loginPageObj.getLoginSignInBtn().should('be.visible').click()
            cy.contains(DataSet[i].msg).should('be.visible')
            

        }
    })

    it('Invalid account', () => {
        cy.fixture('InvalidLogin').then(function (data) {
            this.data = data
        })
        const loginPageObj = new LoginPage();
        loginPageObj.getSignInBtn().should('be.visible').click()
        cy.get('#join-neu-overlay-title').contains("Sign in")
        for (let i = 0; i < DataSet.length; i++) {
            cy.login(DataSet[i].emailAddress, DataSet[i].password)
            loginPageObj.getLoginSignInBtn().should('be.visible').click()
            cy.contains(DataSet[i].msg).should('be.visible')
            

        }
    })
})