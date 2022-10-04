import ProductPage from '../Pages/ProductPage'

describe('Products', () => {
    const pPObj = new ProductPage();
    it('Add A Product', () => {
        cy.visit('https://www.etsy.com/search?q=gift+for+men&ref=hp_gbs&anchor_listing_id=696025628')

        pPObj.getShopThisItem().should('be.visible').click();
        cy.get('select').eq(0).select(1).should('have.value', '1117832253')
        pPObj.getAddItemToBasket().should('be.visible').click()
        cy.wait(3000)
        cy.contains('item added to basket').should('be.visible')
        pPObj.getViewBasketAndCheckoutBtn().should('be.visible').click()



    })

    it('Edit A Product', () => {

        cy.get('#gift-checkbox-SylviaArtGallery-input').check({ force: true })

    })

    it('Delete A Product', () => {
        pPObj.getRemoveProductBtn().should('be.visible').click()
        cy.contains('Your basket is empty.').should('be.visible')


    })
})