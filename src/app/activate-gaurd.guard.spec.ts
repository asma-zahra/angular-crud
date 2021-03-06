import { TestBed } from '@angular/core/testing';

import { ActivateGaurdGuard } from './activate-gaurd.guard';

describe('ActivateGaurdGuard', () => {
  let guard: ActivateGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
