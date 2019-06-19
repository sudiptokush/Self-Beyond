import { SelfandbeyondPage } from './app.po';

describe('selfandbeyond App', () => {
  let page: SelfandbeyondPage;

  beforeEach(() => {
    page = new SelfandbeyondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
