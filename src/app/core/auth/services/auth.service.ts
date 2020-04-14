import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth$ = new BehaviorSubject<boolean>(false);

  get auth$(): Observable<boolean> {
    return this.isAuth$.asObservable();
  }

  constructor() { }

  private setAuth(authenticated: boolean) {
    this.isAuth$.next(authenticated);
  }

  authenticatedUser() {
    this.setAuth(true);
  }

  unAuthenticatedUser() {
    this.setAuth(false);
  }
}
