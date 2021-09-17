import { TestBed } from '@angular/core/testing';

import { MealplannerService } from './mealplanner.service';

describe('MealplannerService', () => {
  let service: MealplannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealplannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
