import { TestBed, async, inject } from '@angular/core/testing';

import { ManageChecklistCollectionGuard } from './manage-checklist-collection.guard';

describe('HomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageChecklistCollectionGuard]
    });
  });

  it('should ...', inject([ManageChecklistCollectionGuard], (guard: ManageChecklistCollectionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
