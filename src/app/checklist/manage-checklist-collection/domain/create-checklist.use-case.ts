import { Injectable } from '@angular/core';
import { ChecklistDataService } from 'src/app/checklist/shared/domain/checklist-data.service';
import { SlugGenerator } from 'src/app/utils/slug-generator';
import { Checklist } from '../../shared/domain/checklist';

@Injectable()
export class CreateChecklistUseCase {


  constructor(private checklistDataService: ChecklistDataService) { }

  execute(data): void {

    const slug = SlugGenerator.generate(this.checklistDataService, data.name);

    const checklist: Checklist = new Checklist(slug, data.name);

    this.checklistDataService.addChecklist(checklist);
  }
}
