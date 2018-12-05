import { TestBed } from '@angular/core/testing';

import { ToggleChecklistItemUseCase } from './toggle-checklist-item.use-case';

describe('ToggleChecklistItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToggleChecklistItemUseCase = TestBed.get(ToggleChecklistItemUseCase);
    expect(service).toBeTruthy();
  });
});
