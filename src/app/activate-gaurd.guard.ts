import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({ providedIn: 'root' })
export class ActivateGaurdGuard implements CanActivate {
  constructor(
    private router: Router,
    private authserv: UserService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authserv.getCurrentUser();
    if (!currentUser?.password) {
       this.router.navigate(['/']);
      return true;
    }
    // not logged in so redirect to login page with the return url
  else {
      this.router.navigate(['/view-user']);
     return true;
   }  }
}
