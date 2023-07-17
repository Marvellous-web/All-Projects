import { TestBed } from '@angular/core/testing';

import { SoulmateServiceService } from './soulmate-service.service';

describe('SoulmateServiceService', () => {
  let service: SoulmateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoulmateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
