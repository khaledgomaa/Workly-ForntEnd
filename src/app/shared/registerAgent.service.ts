import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterationModel } from './registertionAgent.model';

@Injectable({providedIn: 'root'})
export class RegisterAgent {
    constructor(private http: HttpClient) { }

    registerAgent(registerationModel: RegisterationModel){
        let reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth': 'true'});
        return this.http.post('http://localhost:56908/api/Authentication/RegisterAgent',registerationModel, {headers:reqHeader});
    }

}