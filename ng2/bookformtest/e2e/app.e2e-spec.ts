import { BookformtestPage } from './app.po';

describe('bookformtest App', () => {
  let page: BookformtestPage;

  beforeEach(() => {
    page = new BookformtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
