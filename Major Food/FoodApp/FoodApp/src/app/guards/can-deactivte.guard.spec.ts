import { TestBed } from '@angular/core/testing';

import { CanDeactivteGuard } from './can-deactivte.guard';

describe('CanDeactivteGuard', () => {
  let guard: CanDeactivteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
