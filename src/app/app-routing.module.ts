import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EdituserComponent } from './edituser/edituser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DummyTableComponent } from './dummy-table/dummy-table.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {path:'', component:LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'table', component: DummyTableComponent },
  {path:'zahra',component:EdituserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
