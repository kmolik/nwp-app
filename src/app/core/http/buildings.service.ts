import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  private url = 'http://localhost:3000/budildings';

<<<<<<< Updated upstream
  constructor(private http: HttpClient) {}
=======
  constructor(
    private http: HttpClient,
    ) {}
>>>>>>> Stashed changes

  getBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(this.url);
  }
}
