import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getDBConnectiePageButton() {
    return element(by.css('[routerLink="/second"]'));
  }

  getDBConnectieFeedbackButton() {
    return element(by.css('app-second-component form button'));
  }

  getDBConnectieText() {
    // return element(by.css('app-second-component ')).getText() as Promise<string>;
    return element(by.id('contentReturned')).getText();
  }
}
