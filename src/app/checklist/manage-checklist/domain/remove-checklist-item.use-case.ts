import { Injectable } from '@angular/core';
import { ChecklistDataService } from 'src/app/checklist/shared/domain/checklist-data.service';
import { ChecklistItem } from '../../shared/domain/checklist-item';

@Injectable()
export class RemoveChecklistItemUseCase {

  constructor(private checklistDataService: ChecklistDataService) { }

  execute(checklistId: string, checklistItem: ChecklistItem) {
    const checklist = this.checklistDataService.findChecklistById(checklistId);

    if (checklist) {
      checklist.removeItem(checklistItem);
      this.checklistDataService.save();
    }
  }
}
