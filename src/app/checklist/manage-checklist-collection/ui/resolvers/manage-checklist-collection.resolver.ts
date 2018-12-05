import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ChecklistDataService } from 'src/app/checklist/shared/domain/checklist-data.service';

@Injectable()
export class ManageChecklistCollectionResolver {

  constructor(private checklistDataService: ChecklistDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    console.log('resolver...');
    return this.checklistDataService.load();
  }
}
