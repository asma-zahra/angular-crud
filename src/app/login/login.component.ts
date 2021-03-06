import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform: FormGroup;
username:string = "enter user name";

myobjarray:any[]=[];
  constructor(private _service:UserService, private router:Router) { }

  ngOnInit() {
    this.loginform= new FormGroup({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  onlogin(){
    console.log(this.loginform.value);
    
  //  this.myobjarray.push(this.loginform.value);
    console.log('obj===>',this.myobjarray);
    this.loginform.reset;
this._service.setCurrentUser(this.loginform.value);
this.router.navigate(['/viewuser']);

  }

  
}

