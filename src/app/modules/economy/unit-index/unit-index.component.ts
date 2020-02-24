import { Component, OnInit } from '@angular/core';
import { UnitIndexService } from 'src/app/core/http/unit_index.service';

@Component({
  selector: 'app-unit-index',
  templateUrl: './unit-index.component.html',
  styleUrls: ['./unit-index.component.sass']
})
export class UnitIndexComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nazwa_jednostki', 'adres_jednostki'];

  public units = [];

  constructor(private unitIndexService: UnitIndexService) { }

  ngOnInit() {
    this.unitIndexService.getUnits()
      .subscribe(data => this.units = data);
  }

}
