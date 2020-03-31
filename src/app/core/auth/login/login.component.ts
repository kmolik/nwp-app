import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public flag: boolean;

  constructor(private router: Router) {
    this.flag = false;
   }

  ngOnInit(): void {
  }

  public logIn() {

    this.router.navigate(['/buildings/buildingsTable']);
    this.flag = true;
  }
}
