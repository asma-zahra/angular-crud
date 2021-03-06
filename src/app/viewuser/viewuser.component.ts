import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  //define our column inside displayed column variable

  displayedColumns: string[]=['name', 'lastname', 'designation','email','employeeid'];
  
  //initializing data source
  dataSource= new MatTableDataSource();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let data = this.userService.list();
    this.dataSource.data = data;
    console.log(this.dataSource.data);
  }

}
