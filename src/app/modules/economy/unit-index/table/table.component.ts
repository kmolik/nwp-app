import { Component, OnInit } from '@angular/core';
import { UnitIndexService } from 'src/app/core/http/unit_index.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nazwa_jednostki', 'adres_jednostki'];

  public units = [];

  constructor(private unitIndexService: UnitIndexService) { }

  ngOnInit() {
    this.unitIndexService.getUnits()
      .subscribe(data => this.units = data);
  }

}
