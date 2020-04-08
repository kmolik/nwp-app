import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingsService, ParcelService, UnitIndexService } from './core/http/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'nwp-app';
  public flag: boolean;

  constructor(
    private router: Router,
    private buildings: BuildingsService,
    private parcel: ParcelService,
    private unitIndex: UnitIndexService
    ) {
    this.flag = false;
  }

  ngOnInit() {
    this.router.navigate(['/login']);
  }
}
