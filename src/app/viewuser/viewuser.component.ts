import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueboxComponent } from './dialoguebox/dialoguebox.component'
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  //define our column inside displayed column variable

  displayedColumns: string[]=['name', 'lastname', 'designation','email','employeeid','action'];
  
  //initializing data source
  dataSource= new MatTableDataSource();

  constructor(private userService:UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
    let add = this.userService.list();
    this.dataSource.data = add;
    console.log(this.dataSource.data);
  }

  delete(index: number){
    const data= this.dataSource.data;
    
    if(index!=-1){
    data.splice(index,1);
    }
    this.dataSource.data=data;
    

  }


  view(element) {
    this.dialog.open(DialogueboxComponent, {
      data:element
    });
  }
}
