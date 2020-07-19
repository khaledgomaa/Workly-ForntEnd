import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AgentInfoService {
    constructor(private http: HttpClient) { }

    agentInfo(agentName: string){
        return this.http.get('http://localhost:56908/api/UserAgentProfile/AgentInfo/' + agentName);
    }
}