import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChecklistCollectionPage } from './ui/checklist-collection.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistCollectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChecklistCollectionPage]
})
export class ChecklistCollectionPageModule {}
