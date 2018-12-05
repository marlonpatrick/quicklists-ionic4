import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Checklist } from '../../shared/domain/checklist';
import { AddChecklistItemUseCase } from '../domain/add-checklist-item.use-case';
import { RemoveChecklistItemUseCase } from '../domain/remove-checklist-item.use-case';
import { RenameChecklistItemUseCase } from '../domain/rename-checklist-item.use-case';
import { ChecklistDataService } from '../../shared/domain/checklist-data.service';
import { ChecklistItem } from '../../shared/domain/checklist-item';
import { ToggleChecklistItemUseCase } from '../domain/toggle-checklist-item.use-case';

@Component({
  selector: 'app-manage-checklist',
  templateUrl: './manage-checklist.page.html',
  styleUrls: ['./manage-checklist.page.scss'],
  providers: [AddChecklistItemUseCase, RemoveChecklistItemUseCase, RenameChecklistItemUseCase, ToggleChecklistItemUseCase]
})
export class ManageChecklistPage implements OnInit {

  private slug: string;

  public checklist: Checklist;

  constructor(private alertCtrl: AlertController, private route: ActivatedRoute,
    private addChecklistItemUseCase: AddChecklistItemUseCase,
    private renameChecklistItemUseCase: RenameChecklistItemUseCase,
    private removeChecklistItemUseCase: RemoveChecklistItemUseCase,
    private toggleChecklistItemUseCase: ToggleChecklistItemUseCase,
    private dataService: ChecklistDataService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('id');
    this.loadChecklist();
  }

  loadChecklist() {
    this.dataService.load().then(() => {
      this.checklist = this.dataService.findChecklistById(this.slug);
    });
  }

  addItem(): void {

    this.alertCtrl.create({
      header: 'Add Item',
      message: 'Enter the name of the task for this checklist below:',
      inputs: [
        {
          type: 'text',
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.addChecklistItemUseCase.execute(this.checklist.id, data);
          }
        }
      ]
    }).then(prompt => prompt.present());

  }

  renameItem(item: ChecklistItem): void {

    this.alertCtrl.create({
      header: 'Rename Item',
      message: 'Enter the new name of the task for this checklist below:',
      inputs: [
        {
          type: 'text',
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.renameChecklistItemUseCase.execute(item, data);
          }
        }
      ]
    }).then(prompt => prompt.present());
  }

  removeItem(item: ChecklistItem): void {
    this.removeChecklistItemUseCase.execute(this.checklist.id, item);
  }

  toggleItem(item): void {
    this.toggleChecklistItemUseCase.execute(item);
  }
}
