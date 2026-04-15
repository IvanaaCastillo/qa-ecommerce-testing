describe('Cart Test', () => {

    it('Agregar producto al carrito', () => {
        cy.login()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('.shopping_cart_badge').should('be.visible')
    })

})