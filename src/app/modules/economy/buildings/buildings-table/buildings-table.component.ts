import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BuildingsService } from 'src/app/core/http/buildings.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Buildings } from 'src/app/core/models/buildings';

@Component({
  selector: 'app-buildings-table',
  templateUrl: './buildings-table.component.html',
  styleUrls: ['./buildings-table.component.sass']
})
export class BuildingsTableComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['id', 'buildingID', 'buildingType', 'buildYear', 'parcelNumber', 'province', 'countie', 'commune', 'action'];
  dataSource = new MatTableDataSource<Buildings>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private buildingsService: BuildingsService) { }

  ngOnInit() {

    this.buildingsService.getBuildings()
      .subscribe((data: Buildings[]) => this.dataSource.data = data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;
  }
}


