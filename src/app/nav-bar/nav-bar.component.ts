import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginApi } from '../shared/login.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router , private loginService: LoginApi) { }

  loginStatus$ = this.loginService.isLoggedIn;

  userName$ = this.loginService.currentUserName;

  logout(){
    this.loginStatus$ = new BehaviorSubject<boolean>(false);
    this.loginService.logout();
  }

  checkSession(){
    if(localStorage.getItem('usertoken') !== null){
      this.loginStatus$ = new BehaviorSubject<boolean>(true);
      this.userName$ =  new BehaviorSubject<string>(localStorage.getItem('username'));
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    // this.checkSession();
  }

}
