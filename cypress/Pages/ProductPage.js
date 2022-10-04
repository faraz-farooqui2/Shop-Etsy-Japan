class ProductPage
{

getCart()
{
    return cy.xpath('//*[name()="path" and contains(@d,"M21 10a1 1")]')
}

getAddItemToBasket()
{
    return cy.wait(3000).get('div[class="wt-width-full"] button[type="submit"]')
}

getGiftsForHim()
{
    return cy.get('body > main:nth-child(13) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)')
}

getShopThisItem ()
{
    return cy.get('.wt-btn.wt-btn--outline.wt-pl-xs-7.wt-pr-xs-7.wt-mt-xs-4')
}
getItemAddedSuccess()
{
    return cy.get('.wt-text-title-02.wt-ml-xs-2')
}

getViewBasketAndCheckoutBtn()
{
    return cy.wait(3000).get('.wt-btn.wt-width-full.wt-btn--primary')
}

getRemoveProductBtn()
{
    return cy.wait(3000).get('span[class="wt-btn wt-btn--transparent wt-btn--small "]')
}

}



export default ProductPage;
