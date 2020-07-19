import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditWorkerModel } from './editProfile.model';

@Injectable({providedIn: 'root'})
export class EditWorkerProfileService {
    constructor(private http: HttpClient) { }
    editWorkerProfile(userName: string, editedWorker: EditWorkerModel){
        return this.http.put('http://localhost:56908/api/UserAgentProfile/EditAgentProfile/' + userName, editedWorker);
    }

}