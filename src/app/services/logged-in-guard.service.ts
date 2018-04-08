import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class LoggedInGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

 canActivate(next: ActivatedRouteSnapshot,
             state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    if(!isLoggedIn){
      this.router.navigate(['/app-login','Tente efetuar o login! Você não tem permissão!']);
    }
    console.log('canActivate', isLoggedIn);
    return isLoggedIn;
 }
}
