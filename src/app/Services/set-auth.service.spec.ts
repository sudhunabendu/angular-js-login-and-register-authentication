import { TestBed } from '@angular/core/testing';

import { SetAuthService } from './set-auth.service';

describe('SetAuthService', () => {
  let service: SetAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
