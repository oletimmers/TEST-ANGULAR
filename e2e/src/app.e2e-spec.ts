
import {browser, by, element, logging} from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //SHOULD FAIL
  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   browser.pause();
  //   expect(page.getTitleText()).toEqual('TEST-ANGULAR app is running!');
  // });

  it('should route to DB connectie page', () => {
    page.navigateTo();
    page.getDBConnectiePageButton().click();
    expect(page.getDBConnectiePageButton().getText()).toEqual('Interactieve connectie met de db') ;
  });

  it('should show feedback from de db', () => {
    page.navigateTo();
    page.getDBConnectiePageButton().click();
    page.getDBConnectieFeedbackButton().click();
    expect(page.getDBConnectieText()).toEqual('Joe');
  });

  // it('should display a persons name', () => {
  //   page.navigateTo();
  //   page.getDBConnectiePage().click();
  //   browser.pause();
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
