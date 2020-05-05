import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../http';

@Injectable()
export class UnAuthGuard implements CanActivate {

constructor(
  private authService: AuthService,
  private router: Router
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let isAuth = true;
    if (!!this.authService.getToken()) {
      this.authService.authenticatedUser();
      this.router.navigate(['/economy/buildings/buildingsTable']);
      } else {
        isAuth = false;
      }
    return isAuth;
  }
}

