import { Component, OnInit, ViewChild } from '@angular/core';
import { BuildingsService } from 'src/app/core/http/buildings.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-buildings-table',
  templateUrl: './buildings-table.component.html',
  styleUrls: ['./buildings-table.component.sass']
})
export class BuildingsTableComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['id', 'buildingID', 'buildingType', 'buildYear', 'parcelNumber', 'province', 'countie', 'commune', 'action'];
  dataSource = [];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private buildingsService: BuildingsService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.buildingsService.getBuildings()
      .subscribe(data => this.dataSource = data);
  }



}
