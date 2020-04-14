import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth/services/auth.service';

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
    private authService: AuthService
    ) {
  }

  ngOnInit() {
    this.router.navigate(['/login']);
    this.authService.auth$.subscribe(auth => {
      this.flag = auth;
      console.log(auth);

    });
  }
}
