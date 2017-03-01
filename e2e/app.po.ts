import { browser, element, by } from 'protractor';

export class HiendSystems.TaskPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hst-root h1')).getText();
  }
}
