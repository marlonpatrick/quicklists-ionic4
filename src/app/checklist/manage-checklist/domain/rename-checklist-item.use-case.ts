import { Injectable } from '@angular/core';
import { ChecklistDataService } from 'src/app/checklist/shared/domain/checklist-data.service';
import { ChecklistItem } from '../../shared/domain/checklist-item';

@Injectable()
export class RenameChecklistItemUseCase {

  constructor(private checklistDataService: ChecklistDataService) { }

  execute(checklistItem: ChecklistItem, data) {
    checklistItem.title = data.name;
    this.checklistDataService.save();
  }

}
