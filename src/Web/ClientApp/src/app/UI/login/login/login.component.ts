import {Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
      private router: Router
  ) {
   
  }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.loginCheck = true;
    } else {
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
    this.router.navigate([""])
  }
}
