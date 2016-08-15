import { BlessPage } from './app.po';

describe('bless App', function() {
  let page: BlessPage;

  beforeEach(() => {
    page = new BlessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
