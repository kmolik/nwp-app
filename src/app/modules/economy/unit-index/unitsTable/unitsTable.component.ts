import { Component, OnInit } from '@angular/core';
import { UnitIndexService } from 'src/app/core/http/unit_index.service';


@Component({
  selector: 'app-table',
  templateUrl: './unitsTable.component.html',
  styleUrls: ['./unitsTable.component.sass']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'unit_name', 'unitAdres'];
  dataSource = [];

  constructor(private unitIndexService: UnitIndexService) { }

  ngOnInit() {
    this.unitIndexService.getUnits()
      .subscribe(data => this.dataSource = data);
  }

}
