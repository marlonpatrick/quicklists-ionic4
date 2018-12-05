import { TestBed } from '@angular/core/testing';

import { RemoveChecklistItemUseCase } from './remove-checklist-item.use-case';

describe('RemoveChecklistItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveChecklistItemUseCase = TestBed.get(RemoveChecklistItemUseCase);
    expect(service).toBeTruthy();
  });
});
