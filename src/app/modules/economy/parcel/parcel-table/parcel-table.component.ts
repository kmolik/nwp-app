import { Component, OnInit } from '@angular/core';
import { ParcelService } from 'src/app/core/http/parcel.service';

@Component({
  selector: 'app-parcel-table',
  templateUrl: './parcel-table.component.html',
  styleUrls: ['./parcel-table.component.sass']
})
export class ParcelTableComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = [];

  constructor(private parcelService: ParcelService) { }

  ngOnInit() {
    this.parcelService.getParcels()
      .subscribe(data => this.dataSource = data);
  }

}
