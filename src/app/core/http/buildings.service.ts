import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings';


@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  private url = 'http://localhost:3000/budildings';


  constructor(private http: HttpClient) {}


  getBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(this.url);
  }
}
