import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentiListComponent } from './studenti-list/studenti-list.component';
import { StudentiAddComponent } from './studenti-add/studenti-add.component';

const routes: Routes = [
  { path: '', component: StudentiListComponent },
  { path: 'add', component: StudentiAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentiRoutingModule {}
