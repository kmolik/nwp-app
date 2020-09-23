import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcel } from '../models/parcel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  private url = `${environment.apiUrl}/parcels`;

  constructor(private http: HttpClient) {}

  getParcels(): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(this.url);
  }
}
