import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UnitIndexService } from 'src/app/core/http/unit_index.service';
import { MatTableDataSource } from '@angular/material/table';
import { UnitIndex } from 'src/app/core/models/unit_index';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-table',
  templateUrl: './unitsTable.component.html',
  styleUrls: ['./unitsTable.component.sass']
})
export class UnitsTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'unit_name', 'unitAdres', 'action'];
  dataSource = new MatTableDataSource<UnitIndex>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private unitIndexService: UnitIndexService) { }

  ngOnInit() {

    this.unitIndexService.getUnits()
      .subscribe((data: UnitIndex[]) => this.dataSource.data = data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
