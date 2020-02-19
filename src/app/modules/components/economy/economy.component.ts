import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';



@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.sass']
})
export class EconomyComponent implements OnInit {

  public units = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUnits().subscribe(data => console.log(data))

  }
}
