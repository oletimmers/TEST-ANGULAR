describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/second')
  });

  it('finds the content "Join hier een game o.b.v. token."', () => {

    cy.contains('Join hier een game o.b.v. token.');
  })
  it('gets value "Ole" from db', () => {
    cy.get('#submit-knopje').click();
    cy.get('#contentReturned').contains('Ole');
  })

});
