describe('Test home page', () => {
  
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Search for "Wii" and check for right output', () => {
    
    // Search for titles containing 'Wii', checks that the rendered cards are the expected ones
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

  it('Test loading of more games', () => {
    cy.get('[class = "gamecard-container"]')
      .children()
      .should('have.length', 8)
    cy.get('[class = "button-component load-button"]').click()
    cy.get('[class = "gamecard-container"]')
      .children()
      .should('have.length', 16)
  });

  it('Check game info', () => {
    cy.get('[class = "gamecard-container"]')
      .children()
      .first()
      .within(() => {
        cy.get('[data-icon = "circle-info"]').click({force: true})
      });
      cy.get('[class = "infoBoxInner"]')
        .children()
        .first()
        .children()
        .first()
        .should('have.text', 'Game information:')
      cy.get('[class = "button-component closeInfo-button"]').click()
  });

  it('Test dark mode', () => {
    cy.get('body')
      .should('have.css', 'background-color', 'rgb(245, 245, 245)')
    cy.get('[data-testid = "DarkModeIcon"]').click()
    cy.get('body')
      .should('have.css', 'background-color', 'rgb(31, 31, 31)')
    cy.get('[data-testid = "LightModeIcon"]').click()
    cy.get('body')
      .should('have.css', 'background-color', 'rgb(245, 245, 245)')
  });

  it('Test filtering', () => {

    // Filter by publisher
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

    // Filter by platform
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

    // Filter by genre
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

    // Sort by DESC
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
  });

  // Search for the game 'God of War: Ghost of Sparta' and favorite this game. 
  // Then checks the 'Favorite' page and finds the game.
  // Then unfavorites the game, presses the reload button and checks that the game is no longer displayed in the 'favorite' page
  it('Test favorite functionality', () => {
    cy.get('[id="search-game"]')
      .type('God of War: Ghost of Sparta')
    cy.get('[class = "button-component search-button"]').click()
    cy.get('[data-testid = "FavoriteIcon"]').click()
      .should('have.css', 'color', 'rgb(255, 51, 153)')
    cy.get('[class = "sidebarIconToggle"]').click()
    cy.get('[id = "sidebarMenu"]')
      .find('.sidebarMenuInner li:first')
      .next()
      .find('a').click()
    cy.get('[id = "2045"]')
      .within(() => {
        cy.get('[data-testid = "FavoriteIcon"]').click({force: true})
        .should('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
    });
    cy.get('[class = "button-component reload-button"]').click()
    cy.get('[id = "2045"]').should('not.exist');
  });

})
