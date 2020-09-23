import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings';
import { StorageService } from '../services';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  private url = `${environment.apiUrl}/buildings`;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
    ) {}

  getBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(this.url);
  }
}
