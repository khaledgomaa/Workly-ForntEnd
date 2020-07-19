import { Component, OnInit } from '@angular/core';
import { LoginApi } from '../shared/login.service';
import { LoginModel } from '../shared/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginApi , private router: Router , private authService: AuthService) { }

  loginModel: LoginModel = new LoginModel();

  resetForm(){
    this.loginModel = {
      UserName: null,
      Password: null
    }
  }

  submit(){
    this.loginService.loginMethod(this.loginModel);
  }

  ngOnInit(): void {
    this.resetForm();
  }

}
