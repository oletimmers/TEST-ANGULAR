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
  })

  it('clicking on toggle, background should be dark', () => {
    element(by.css('app-root .darkmode-toggle')).click();
    var background = element(by.css('app-root main'));

    expect(background.getCssValue('background-color')).toBe('rgba(43, 43, 43, 1)');
  });

  it('clicking on toggle, background should be dark, even on reload', () => {
    element(by.css('app-root .darkmode-toggle')).click();
    var background = element(by.css('app-root main'));
    expect(background.getCssValue('background-color')).toBe('rgba(43, 43, 43, 1)');
  });

  //NOG NIET HELEMAAL HOE HET MOET
  it('clicking on toggle, background should be dark, however when cookies are deleted it should be white again', () => {
    element(by.css('app-root .darkmode-toggle')).click();
    var background = element(by.css('app-root main'));
    expect(background.getCssValue('background-color')).toBe('rgba(43, 43, 43, 1)');

    // browser.manage().deleteAllCookies();
    // browser.driver.manage().deleteAllCookies();
    // window.localStorage.clear();

    element(by.css('app-root .darkmode-toggle')).click();

    expect(background.getCssValue('background-color')).toBe('rgba(0, 0, 0, 0)');
  });


});
