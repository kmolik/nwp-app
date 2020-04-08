import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public flag: boolean;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private fb: FormBuilder
    ) {
    this.flag = false;
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  test() {
    this.storageService.setLocalStorageItem('token', 'ddfkjldns');
  }

  test2() {
    const value = 'token';
    console.log(this.storageService.getLocalStorageItem(value));
  }


  public logIn() {

    this.router.navigate(['/buildings/buildingsTable']);
    this.flag = true;
  }
}
