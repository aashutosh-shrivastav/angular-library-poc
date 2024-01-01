import { TestBed } from '@angular/core/testing';

import { FlmLibService } from './flm-lib.service';

describe('FlmLibService', () => {
  let service: FlmLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlmLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
