import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private asma: UserService,
    
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.asma.getCurrentUser();
    if (!currentUser?.password) {
      return true;
    }
  
  else {
    this.router.navigate(['/viewuser']);  
     return false;
   }  }
}
