import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CreateChecklistUseCase } from '../domain/create-checklist.use-case';
import { RemoveChecklistUseCase } from '../domain/remove-checklist.use-case';
import { RenameChecklistUseCase } from '../domain/rename-checklist.use-case';
import { ChecklistDataService } from '../../shared/domain/checklist-data.service';
import { Checklist } from '../../shared/domain/checklist';

@Component({
  selector: 'app-manage-checklist-collection',
  templateUrl: './manage-checklist-collection.page.html',
  styleUrls: ['./manage-checklist-collection.page.scss'],
  providers: [CreateChecklistUseCase, RemoveChecklistUseCase, RenameChecklistUseCase]
})
export class ManageChecklistCollectionPage implements OnInit {

  constructor(
    public dataService: ChecklistDataService,
    private createChecklistUseCase: CreateChecklistUseCase,
    private renameChecklistUseCase: RenameChecklistUseCase,
    private removeChecklistUseCase: RemoveChecklistUseCase,
    private alertCtrl: AlertController) { }

  ngOnInit() {

  }

  stringify(checklist) {
    return JSON.stringify(checklist);
  }

  addChecklist() {

    this.alertCtrl.create({
      header: 'New Checklist',
      message: 'Enter the name of your new checklist below:',
      inputs: [{
        type: 'text',
        name: 'name'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.createChecklistUseCase.execute(data);
          }
        }
      ]
    }).then(prompt => prompt.present());
  }

  renameChecklist(checklist: Checklist): void {

    this.alertCtrl.create({
      header: 'Rename Checklist',
      message: 'Enter the new name of this checklist below:',
      inputs: [{
        type: 'text',
        name: 'name'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.renameChecklistUseCase.execute(checklist, data);
          }
        }
      ]
    }).then(prompt => prompt.present());
  }

  removeChecklist(checklist: Checklist): void {
    this.removeChecklistUseCase.execute(checklist);
  }
}
