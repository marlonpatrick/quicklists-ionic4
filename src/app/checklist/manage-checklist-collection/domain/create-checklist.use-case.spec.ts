import { TestBed } from '@angular/core/testing';
import { CreateChecklistUseCase } from './create-checklist.use-case';

describe('CreateChecklistUseCase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateChecklistUseCase = TestBed.get(CreateChecklistUseCase);
    expect(service).toBeTruthy();
  });
});
