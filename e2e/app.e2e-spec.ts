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
  })
});
