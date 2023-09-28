import { TestBed } from '@angular/core/testing';

import { TwikService } from './twik.service';

describe('TwikService', () => {
  let service: TwikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
