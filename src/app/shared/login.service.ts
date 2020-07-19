import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginModel, LoginReturn } from './login.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginApi {
    constructor(private http: HttpClient , private router: Router , private toastr: ToastrService) { }

    private loggedIn = new BehaviorSubject<boolean>(false);
    private userName = new BehaviorSubject<string>(localStorage.getItem('username'));

    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
      }

    get currentUserName(){
      return this.userName.asObservable();
    }

    loginMethod(loginModel: LoginModel){
        let reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth': 'true'});
        return this.http.post('http://localhost:56908/api/Auth', loginModel , {headers: reqHeader })
        .subscribe((data: LoginReturn) => {
            localStorage.setItem('usertoken', data.token );
            localStorage.setItem('userRole', data.role);
            this.loggedIn.next(true);
            localStorage.setItem('username', loginModel.UserName);
            this.userName.next(localStorage.getItem('username'));
            this.router.navigateByUrl('/' + localStorage.getItem('userRole'));
        },
        (err: HttpErrorResponse) => {
          if(err.status === 401){this.toastr.error('Invalid username or password'); }
          else if(err.status === 500){this.toastr.warning('server in maintenace try in 1 hour =D'); }
          console.log('didnt key any key')
        });
    }

    logout() {                            // {4}
        this.loggedIn.next(false);
        localStorage.removeItem('username');
        localStorage.removeItem('usertoken');
        localStorage.removeItem('userRole');
        this.router.navigateByUrl('');
    }
}