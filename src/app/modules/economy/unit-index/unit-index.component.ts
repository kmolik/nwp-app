import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-unit-index',
  templateUrl: './unit-index.component.html',
  styleUrls: ['./unit-index.component.sass']
})
export class UnitIndexComponent implements OnInit {

  displayedColumns: string[] = ['id', 'data_aktualizacji', 'nazwa_jednostki', 'adres_jednostki', 'uwagi'];

  public units = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUnits()
      .subscribe(data => this.units = data);
  }

}
