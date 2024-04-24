import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
     private router:Router
  ) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.loginCheck = true;
    }
    else {
      this.loginCheck = false
    }
  }
  loginCheck = true;
  login = false;
  logout() {
    this.login = false;
    localStorage.setItem('isLoggedIn', this.login.toString()); // Update login status
    this.router.navigate(["auth"])
  }

  loginSubmit() {
    this.login = true;
    localStorage.setItem('isLoggedIn', this.login.toString()); // Store login status as a string
    this.router.navigate(["/"])
  }
}
