import { Component, OnInit } from '@angular/core';

export interface User{
  username:string;
  designation: string;
  age: number;
}


const ELEMENT_DATA: User[] = [
  {username:'john', age:23, designation:'software engineer'},
  {username:'joe', age:23, designation:'software engineer'},
  {username:'janny', age:23, designation:'software engineer'},
  {username:'jesus', age:23, designation:'software engineer'},
  {username:'robert', age:23, designation:'software engineer'},
  {username:'jinny', age:23, designation:'software engineer'},
  {username:'peter', age:23, designation:'software engineer'},
  {username:'joe', age:23, designation:'software engineer'},
  {username:'jassi', age:23, designation:'software engineer'},
  {username:'john', age:23, designation:'software engineer'},
  {username:'joe', age:23, designation:'software engineer'},
  {username:'janny', age:23, designation:'software engineer'},
  {username:'jesus', age:23, designation:'software engineer'},
  
  ];


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  //define our column inside displayed column variable

  displayedColumns: string[]=['username', 'age', 'designation'];
  
  //initializing data source
  dataSource= ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
