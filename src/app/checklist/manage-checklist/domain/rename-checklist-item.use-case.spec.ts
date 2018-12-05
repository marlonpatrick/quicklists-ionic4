import { TestBed } from '@angular/core/testing';

import { RenameChecklistItemUseCase } from './rename-checklist-item.use-case';

describe('RenameChecklistItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenameChecklistItemUseCase = TestBed.get(RenameChecklistItemUseCase);
    expect(service).toBeTruthy();
  });
});
