import { JapanningPage } from './app.po';

describe('japanning App', function() {
  let page: JapanningPage;

  beforeEach(() => {
    page = new JapanningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
