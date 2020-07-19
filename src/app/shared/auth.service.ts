import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login.model';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) { }

    token: any;

    login(loginModel: LoginModel){
        let reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth': 'true'});
        return this.http.post('http://localhost:56908/api/Auth' , loginModel , {headers: reqHeader , responseType: 'text'})
        .subscribe(data => {
            console.log(data);
        },
        (err) => {
          console.log(JSON.stringify(err));
        }); }
    }
