import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token, Credentials } from '../models/auth';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private domain = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<Token> {
    const url = `${this.domain}/auth/signin`;
    return this.http.post<Token>(url, credentials);
  }

}
