describe('Test home page', () => {
  
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Search for "Wii" and check for right output', () => {
    
    //search for titles containing Wii
    cy.get('[id="search-game"]')
      .type('Wii')
    cy.get('[class = "button-component search-button"]').click()
    cy.get('[class = "gamecard-container"]')
      .children()
      .should('have.length', 8)
      .first()
      .should('have.id', '7115')
      .next()
      .should('have.id', '321')
      .next()
      .should('have.id', '12050')
      .next()
      .should('have.id', '16256')
      .next()
      .should('have.id', '10450')
      .next()
      .should('have.id', '15086')
      .next()
      .should('have.id', '15639')
      .next()
      .should('have.id', '9211')

      cy.get('[id="search-game"]').click().clear()
      cy.get('[class = "button-component search-button"]').click()
  });

  it('Test filtering', () => {

    //Filter by publisher
    cy.get('[id="choose-publisher"]')
      .type('Nintendo')
    cy.get('[class = "button-component filter-button"]').click()
    cy.get('[class = "gamecard-container"]')
    .children()
    .should('have.length', 8)
    .first()
    .should('have.id', '3008')
    .next()
    .should('have.id', '14635')
    .next()
    .should('have.id', '839')

    //filter by platform
    cy.get('[id="choose-platform"]')
      .type('NES')
    cy.get('[class = "button-component filter-button"]').click()
    cy.get('[class = "gamecard-container"]')
    .children()
    .should('have.length', 8)
    .first()
    .should('have.id', '2061')
    .next()
    .should('have.id', '1326')
    .next()
    .should('have.id', '12387')

    //filter by genre
    cy.get('[id="choose-genre"]')
      .type('Shooter')
    cy.get('[class = "button-component filter-button"]').click()
    cy.get('[class = "gamecard-container"]')
    .children()
    .should('have.length', 8)
    .first()
    .should('have.id', '421')
    .next()
    .should('have.id', '2061')
    .next()
    .should('have.id', '4578')

    //sort by DESC
    cy.get('[id="choose-sort"]')
      .type('DESC')
    cy.get('[class = "button-component filter-button"]').click()
    cy.get('[class = "gamecard-container"]')
    .children()
    .should('have.length', 8)
    .first()
    .should('have.id', '9137')
    .next()
    .should('have.id', '471')
    .next()
    .should('have.id', '15526')
  })
})
