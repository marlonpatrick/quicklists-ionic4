import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/manage-checklist-collection', pathMatch: 'full' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'manage-checklist-collection',
    loadChildren: './checklist/manage-checklist-collection/manage-checklist-collection.module#ManageChecklistCollectionPageModule' },
  { path: 'manage-checklist/:id', loadChildren: './checklist/manage-checklist/manage-checklist.module#ManageChecklistPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
