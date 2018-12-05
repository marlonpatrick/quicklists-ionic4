import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageChecklistCollectionPage } from './ui/manage-checklist-collection.page';
import { ManageChecklistCollectionResolver } from './ui/resolvers/manage-checklist-collection.resolver';

const routes: Routes = [
  {
    path: '',
    component: ManageChecklistCollectionPage,
    resolve: {loaded: ManageChecklistCollectionResolver}
  }
];

@NgModule({
  providers: [ManageChecklistCollectionResolver],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageChecklistCollectionPage]
})
export class ManageChecklistCollectionPageModule {}
