import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ParcelService } from 'src/app/core/http/parcel.service';
import { MatTableDataSource } from '@angular/material/table';
import { Parcel } from 'src/app/core/models/parcel';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-parcel-table',
  templateUrl: './parcel-table.component.html',
  styleUrls: ['./parcel-table.component.sass']
})
export class ParcelTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'parcelId', 'province', 'countie', 'commune', 'surface', 'share', 'action'];
  dataSource = new MatTableDataSource<Parcel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private parcelService: ParcelService) { }

  ngOnInit() {

    this.parcelService.getParcels()
      .subscribe((data: Parcel[]) => this.dataSource.data = data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
