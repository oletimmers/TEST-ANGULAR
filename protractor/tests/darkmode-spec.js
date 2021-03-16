import {browser} from "protractor";

describe('Darkmodetest', () => {

  afterEach((done) => {
    setTimeout(() => {
      browser.executeScript('window.localStorage.clear();');
      browser.executeScript('window.sessionStorage.clear();');
      browser.driver.manage().deleteAllCookies();
      done();
    }, 250);
  });

  beforeEach(() => {
    browser.get('http://localhost:4200/')
  })

  it('clicking on toggle', () => {
    element(by.css('app-root .darkmode-toggle')).click();
    var background = element(by.css('app-root main'));

    expect(background.getCssValue('background-color')).toBe('rgba(43, 43, 43, 1)');
  })

  // it('clicking on toggle, background should be dark', () => {
  //   element(by.css('app-root .darkmode-toggle')).click();
  //
  //   cy.get('#darkmode-toggle').contains('Darkmode').click();
  //   cy.get('main').should('have.css', 'background-color', 'rgb(43, 43, 43)')
  // });


});
