import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EdituserComponent } from './edituser/edituser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DummyTableComponent } from './dummy-table/dummy-table.component';
import { LoginComponent } from './login/login.component';
import{ViewuserComponent } from './viewuser/viewuser.component';
import { ActivateGaurdGuard } from './activate-gaurd.guard';
import{TableComponent} from './table/table.component';
import { LoginGuard } from './login.guard';
const routes: Routes = [

  {path:'', component:LoginComponent },
  { path: 'add-user', component: AddUserComponent, },
  { path: 'table', component: DummyTableComponent,canActivate:[ActivateGaurdGuard] },
  { path: 'user-table', component: TableComponent ,},
  {path:'zahra',component:EdituserComponent,canActivate:[ActivateGaurdGuard]},
  {path:'viewuser', component:ViewuserComponent,},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ActivateGaurdGuard, LoginGuard],
})
export class AppRoutingModule { }
