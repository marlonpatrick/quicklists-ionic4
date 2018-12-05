import { TestBed } from '@angular/core/testing';

import { AddChecklistItemUseCase } from './add-checklist-item.use-case';

describe('AddChecklistItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddChecklistItemUseCase = TestBed.get(AddChecklistItemUseCase);
    expect(service).toBeTruthy();
  });
});
