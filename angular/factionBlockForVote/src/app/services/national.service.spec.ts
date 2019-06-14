import { TestBed } from '@angular/core/testing';

import { NationalService } from './national.service';

describe('NationalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NationalService = TestBed.get(NationalService);
    expect(service).toBeTruthy();
  });
});
