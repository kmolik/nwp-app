import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitIndex } from '../models/unit_index';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:3000/jednostki';

  constructor(private http: HttpClient) {}

  getUnits(): Observable<UnitIndex[]> {
    return this.http.get<UnitIndex[]>(this.url);
  }
}
