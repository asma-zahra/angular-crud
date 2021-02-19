import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component'
import { DummyTableComponent } from './dummy-table/dummy-table.component'

const routes: Routes = [
  { path: '', component: AddUserComponent },
  { path: 'table', component: DummyTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
