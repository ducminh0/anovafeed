import { FirstPointWFPage } from './app.po';

describe('first-point-wf App', function() {
  let page: FirstPointWFPage;

  beforeEach(() => {
    page = new FirstPointWFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
