import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DummyTableComponent } from './dummy-table/dummy-table.component';
import{TableComponent} from './table/table.component';
import { LoginComponent  } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import{EdituserComponent } from './edituser/edituser.component';
import{ViewuserComponent } from './viewuser/viewuser.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DummyTableComponent,
    LoginComponent ,
    HeaderComponent,
    EdituserComponent ,
    ViewuserComponent,
    TableComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule,
    HttpClientModule,
    
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
