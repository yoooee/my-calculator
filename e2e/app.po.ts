import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getCalculator() {
    return element(by.id('calculator'));
  }

  getCalculatorScreen() {
    return element(by.id('calculator-screen'));
  }

  getCalculatorNumberPad() {
    return element(by.id('calculator-number-pad'));
  }

  getCalculatorNumberPadButtons() {
    return element.all(by.css('.btn-number'));
  }

  getNumberOne() {
    return element.all(by.css('.btn-number')).first();
  }
}
