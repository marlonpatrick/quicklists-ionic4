import { Injectable } from '@angular/core';
import { ChecklistDataService } from 'src/app/checklist/shared/domain/checklist-data.service';
import { Checklist } from '../../shared/domain/checklist';
import { ManageChecklistCollectionPage } from '../ui/manage-checklist-collection.page';

@Injectable()
export class RemoveChecklistUseCase {

  constructor(private checklistDataService: ChecklistDataService) { }

  execute(checklist: Checklist) {
    this.checklistDataService.removeChecklist(checklist.id);
  }
}
