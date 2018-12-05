import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ManageChecklistCollectionPage } from '../ui/manage-checklist-collection.page';
import { ChecklistDataService } from 'src/app/checklist/shared/domain/checklist-data.service';
import { Checklist } from '../../shared/domain/checklist';

@Injectable()
export class RenameChecklistUseCase {

  constructor(private checklistDataService: ChecklistDataService) { }

  execute(checklist: Checklist, data): void {

    const savedChecklist = this.checklistDataService.findChecklistById(checklist.id);

    if (!savedChecklist) {
      return;
    }

    savedChecklist.title = data.name;

    this.checklistDataService.save();
  }
}
