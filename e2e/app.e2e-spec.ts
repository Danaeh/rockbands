import { RockbandsPage } from './app.po';

describe('rockbands App', () => {
  let page: RockbandsPage;

  beforeEach(() => {
    page = new RockbandsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
