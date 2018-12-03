import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistPageModule } from './checklist/checklist/checklist.module';

const routes: Routes = [
  { path: '', redirectTo: '/checklists', pathMatch: 'full' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'checklists',
    loadChildren: './checklist/checklist-collection/checklist-collection.module#ChecklistCollectionPageModule' },
  { path: 'checklist/:id', loadChildren: './checklist/checklist/checklist.module#ChecklistPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
