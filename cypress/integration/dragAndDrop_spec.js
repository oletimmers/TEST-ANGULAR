describe('Darkmodetest', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('drag and drop "Martijn" should be dragged to second list, post should be successful', () => {
    cy.get('#droplist-one > :nth-child(1)').then(el => {
      const draggable = el[0]; // Pick up this
      cy.get('#droplist-two').then(el => {
        const droppable = el[0]; // Drop over this

        const coords = droppable.getBoundingClientRect()
        draggable.dispatchEvent(new MouseEvent('mousemove'));
        draggable.dispatchEvent(new MouseEvent('mousedown'));
        draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: 10, clientY: 0}));
        draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: coords.x + 10, clientY: coords.y + 10}));
        draggable.dispatchEvent(new MouseEvent('mouseup'));

      });

      cy.get('#droplist-two').contains('Martijn');
      cy.get('body').contains('Object opgeslagen');
    });
  });
});
