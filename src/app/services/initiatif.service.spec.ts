import { TestBed } from '@angular/core/testing';

import { InitiatifService } from './initiatif.service';

describe('InitiatifService', () => {
  let service: InitiatifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitiatifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
