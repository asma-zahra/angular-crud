import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginform= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  onlogin()
  {
    console.log(this.loginform.value);
    this.loginform.reset;
    sessionStorage.setItem('loginInfo',JSON.stringify(this.loginform.value))
  }

  
}

