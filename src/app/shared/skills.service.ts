import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SkillsApi {
    constructor(private http: HttpClient) { }

    getSkills(){
        let reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth': 'true'});
        return this.http.get('http://localhost:56908/api/Skills/' , {headers:reqHeader});
    }

}