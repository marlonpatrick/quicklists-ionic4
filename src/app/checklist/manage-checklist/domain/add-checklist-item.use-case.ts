import { Injectable } from '@angular/core';
import { ChecklistDataService } from 'src/app/checklist/shared/domain/checklist-data.service';

@Injectable()
export class AddChecklistItemUseCase {

  constructor(private checklistDataService: ChecklistDataService) { }

  execute(checklistId: string, data) {
    const checklist = this.checklistDataService.findChecklistById(checklistId);

    if (checklist) {
      checklist.addItem({title: data.name, checked: false});
      this.checklistDataService.save();
    }
  }
}
