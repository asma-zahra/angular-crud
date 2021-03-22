
import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-api-integration-table',
  templateUrl: './api-integration-table.component.html',
  styleUrls: ['./api-integration-table.component.css']
})
export class ApiIntegrationTableComponent implements OnInit {

  //define our column inside displayed column variable

  displayedColumns: string[]=['name', 'country','domains'];
  
  //initializing data source
  dataSource= new MatTableDataSource();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.univertsitydata().subscribe((data:any)=>{
      console.log(data);
      this.dataSource.data = data;
    })
  
  }

}

