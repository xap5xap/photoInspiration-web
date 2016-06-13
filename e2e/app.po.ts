export class PhotoInspirationWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('photo-inspiration-web-app h1')).getText();
  }
}
