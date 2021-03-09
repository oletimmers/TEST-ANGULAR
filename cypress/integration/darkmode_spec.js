describe('Darkmodetest', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('clicking on toggle', () => {
    cy.get('#darkmode-toggle').contains('Darkmode').click();
  })

  it('clicking on toggle, background should be dark', () => {
    cy.get('#darkmode-toggle').contains('Darkmode').click();
    cy.get('main').should('have.css', 'background-color', 'rgb(43, 43, 43)')
  })

  it('clicking on toggle, background should be dark, even on reload', () => {
    cy.get('#darkmode-toggle').contains('Darkmode').click();
    cy.reload()
    cy.get('main').should('have.css', 'background-color', 'rgb(43, 43, 43)')
  })

  it('clicking on toggle, background should be dark, however when cookies are deleted it should be white again', () => {
    cy.get('#darkmode-toggle').contains('Darkmode').click();
    cy.get('main').should('have.css', 'background-color', 'rgb(43, 43, 43)')
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
    cy.get('main').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })
});
