describe('Darkmodetest', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  function dragAndDrop() {
    cy.get('#droplist-one > .example-box').then(el => {
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
    });

  }

  it('drag and drop "Martijn" should be dragged to second list, post should be successful', () => {
    dragAndDrop();
    cy.get('#droplist-two').contains('Martijn');
    cy.get('body').contains('Object opgeslagen');
  });

  it('drag and drop all items should be dragged to second list, posts should be successful', () => {
    for (let i = 0; i < 4; i++) {

        dragAndDrop();
        cy.get('body').contains('Object opgeslagen');

    }
  });

  it('drag and drop all items piece by piece, should be dragged to second list, posts should be successful', () => {
    dragAndDrop();
    cy.get('#droplist-two').contains('Martijn');
    cy.get('body').contains('Object opgeslagen');
    dragAndDrop();
    cy.get('#droplist-two').contains('Ryan');
    cy.get('body').contains('Object opgeslagen');
    dragAndDrop();
    cy.get('#droplist-two').contains('Jan Willem');
    cy.get('body').contains('Object opgeslagen');
    dragAndDrop();
    cy.get('#droplist-two').contains('Ole');
    cy.get('body').contains('Object opgeslagen');
  });
});
