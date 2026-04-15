describe('Login Test', () => {

  it('Login exitoso', () => {
    cy.login()
    cy.url().should('include', '/inventory')
  })

})