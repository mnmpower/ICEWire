import { TestBed } from '@angular/core/testing';

import { pre } from './project.service';

describe('ProjectService', () => {
  let service: pre;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pre);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
