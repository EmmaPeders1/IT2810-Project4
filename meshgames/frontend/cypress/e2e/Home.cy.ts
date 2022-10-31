describe('Test search bar', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[id="search-game"]').click()
      .type('Wii')
    cy.get('[class = "button-component search-button"]').click()
    cy.get('[class = "gamecard-container"]')
      .children()
      .should('have.length', 8)
  })
})
