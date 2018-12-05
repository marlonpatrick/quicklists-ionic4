import { TestBed } from '@angular/core/testing';

import { ManageChecklistCollectionResolver } from './manage-checklist-collection.resolver';

describe('ManageChecklistCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageChecklistCollectionResolver = TestBed.get(ManageChecklistCollectionResolver);
    expect(service).toBeTruthy();
  });
});
