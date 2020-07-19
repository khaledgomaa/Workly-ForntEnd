import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUserModel } from './registerUser.model';

@Injectable({providedIn: 'root'})
export class UserApi {
    constructor(private http: HttpClient) { }

    registerUser(userModel: RegisterUserModel){
        let reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth': 'true'});
        return this.http.post('http://localhost:56908/api/Authentication/RegisterUser', userModel,{headers:reqHeader});
    }

}