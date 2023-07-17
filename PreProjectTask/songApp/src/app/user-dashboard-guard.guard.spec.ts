import { TestBed } from '@angular/core/testing';

import { UserDashboardGuardGuard } from './user-dashboard-guard.guard';

describe('UserDashboardGuardGuard', () => {
  let guard: UserDashboardGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserDashboardGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
