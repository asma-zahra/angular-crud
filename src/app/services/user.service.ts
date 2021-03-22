import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  user:any;
  token;
  myarray:any[]=[];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    // get current user
    if (sessionStorage.getItem('mmmee')) {
      this.user = JSON.parse(atob(sessionStorage.getItem('mmmee')));
      
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setCurrentUser(data: any) {
    sessionStorage.setItem('mmmmee', btoa(JSON.stringify(data)));
   // this.myobjarray.push(this.user.value);

  }
  getCurrentUser() {
    return this.user;
  
  }

  addUser(data){
   this.myarray.push(data);
  
   this.router.navigate(['/viewuser']);
     
  }

list(){
  return this.myarray;
 
  
}
univertsitydata(){
  return this.http.get(`http://universities.hipolabs.com/search?country=United+Kingdom`)
}
  // Login
  //userLogin(user): Observable<any> {
  //  return this.http.post(`${this.APIURL}user/login`, user);
 // }
 
  // Logout
  userLogout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/']);

  }

}


