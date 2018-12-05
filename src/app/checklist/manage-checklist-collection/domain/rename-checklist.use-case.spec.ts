import { TestBed } from '@angular/core/testing';

import { RenameChecklistUseCase } from './rename-checklist.use-case';

describe('RenameChecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenameChecklistUseCase = TestBed.get(RenameChecklistUseCase);
    expect(service).toBeTruthy();
  });
});
