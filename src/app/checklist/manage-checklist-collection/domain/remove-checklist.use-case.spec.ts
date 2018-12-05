import { TestBed } from '@angular/core/testing';

import { RemoveChecklistUseCase } from './remove-checklist.use-case';

describe('RemoveChecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveChecklistUseCase = TestBed.get(RemoveChecklistUseCase);
    expect(service).toBeTruthy();
  });
});
