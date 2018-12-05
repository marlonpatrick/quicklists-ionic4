import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageChecklistPage } from './ui/manage-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: ManageChecklistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageChecklistPage]
})
export class ManageChecklistPageModule {}
