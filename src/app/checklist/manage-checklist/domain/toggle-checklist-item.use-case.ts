import { Injectable } from '@angular/core';
import { ChecklistDataService } from 'src/app/checklist/shared/domain/checklist-data.service';
import { ChecklistItem } from '../../shared/domain/checklist-item';

@Injectable()
export class ToggleChecklistItemUseCase {

  constructor(private checklistDataService: ChecklistDataService) { }

  execute(checklistItem: ChecklistItem) {
    checklistItem.checked = !checklistItem.checked;
    this.checklistDataService.save();
  }
}
