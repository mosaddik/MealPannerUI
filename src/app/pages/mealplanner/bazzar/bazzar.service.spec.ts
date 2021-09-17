import { TestBed } from '@angular/core/testing';

import { BazzarService } from './bazzar.service';

describe('BazzarService', () => {
  let service: BazzarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BazzarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
