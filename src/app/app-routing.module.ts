import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EdituserComponent } from './edituser/edituser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import{ViewuserComponent } from './viewuser/viewuser.component';
import { ActivateGaurdGuard } from './activate-gaurd.guard';
import{TableComponent} from './table/table.component';
import { LoginGuard } from './login.guard';
import { ApiIntegrationTableComponent } from './api-integration-table/api-integration-table.component';
const routes: Routes = [

  {path:'', component:LoginComponent },
  { path: 'add-user', component: AddUserComponent, },
  { path: 'user-table', component: TableComponent ,},
  {path:'zahra',component:EdituserComponent,canActivate:[ActivateGaurdGuard]},
  {path:'viewuser', component:ViewuserComponent,},
  {path:'api-interated-table', component:ApiIntegrationTableComponent,},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ActivateGaurdGuard, LoginGuard],
})
export class AppRoutingModule { }
