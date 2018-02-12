import { AppPage } from './app.po';

describe('my-calculator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  describe('Calculator', () => {
    it('should be visible on the page',() => {
      page.navigateTo();
      expect(page.getCalculator().isDisplayed()).toBe(true);
    })
  });

  it('should contain a display', () => {
    page.navigateTo();
    expect(page.getCalculatorScreen().isDisplayed()).toBe(true);
  });

  it('should contain a number pad', () => {
    page.navigateTo();
    expect(page.getCalculatorNumberPad().isDisplayed()).toBe(true);
  });

  describe('Number Pad', () => {
    it('should contain 10 buttons', () => {

      //Setup
      let expected = 10;

      //Execute
      page.navigateTo();
      let actual = page.getCalculatorNumberPadButtons().count();

      //Verify
      expect(actual).toBe(expected);

    });

    it('should contain buttons labeled 0-9', () => {
      //Setup
      let expected = '0';

      //Execute
      page.navigateTo();
      let actual = page.getCalculatorNumberPadButtons().first().getText();

      //Verify
      expect(actual).toBe(expected);
    })
  })
});
