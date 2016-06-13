import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PhotoInspirationWebAppComponent } from '../app/photo-inspiration-web.component';

beforeEachProviders(() => [PhotoInspirationWebAppComponent]);

describe('App: PhotoInspirationWeb', () => {
  it('should create the app',
      inject([PhotoInspirationWebAppComponent], (app: PhotoInspirationWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'photo-inspiration-web works!\'',
      inject([PhotoInspirationWebAppComponent], (app: PhotoInspirationWebAppComponent) => {
    expect(app.title).toEqual('photo-inspiration-web works!');
  }));
});
