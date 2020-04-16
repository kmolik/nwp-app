import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
    this.storageService.deleteLocalStorageItem('token');
    console.log('Loged Out');
  }
}
