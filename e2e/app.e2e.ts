import { PhotoInspirationWebPage } from './app.po';

describe('photo-inspiration-web App', function() {
  let page: PhotoInspirationWebPage;

  beforeEach(() => {
    page = new PhotoInspirationWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('photo-inspiration-web works!');
  });
});
