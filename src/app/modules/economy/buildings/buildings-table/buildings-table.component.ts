import { Component, OnInit } from '@angular/core';
import { BuildingsService } from 'src/app/core/http/buildings.service';

@Component({
  selector: 'app-buildings-table',
  templateUrl: './buildings-table.component.html',
  styleUrls: ['./buildings-table.component.sass']
})
export class BuildingsTableComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = [];

  constructor(private buildingsService: BuildingsService) { }

  ngOnInit() {
    this.buildingsService.getBuildings()
      .subscribe(data => this.dataSource = data);
  }

}
