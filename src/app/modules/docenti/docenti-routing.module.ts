import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentiListComponent } from './docenti-list/docenti-list.component';
import { DocentiAddComponent } from './docenti-add/docenti-add.component';

const routes: Routes = [
  { path: '', component: DocentiListComponent },
  { path: 'add', component: DocentiAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocentiRoutingModule {}
