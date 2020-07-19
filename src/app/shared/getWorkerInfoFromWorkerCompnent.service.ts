import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AgentInfo } from './agentInfo.model';

@Injectable({providedIn: 'root'})
export class ShareWorkerInfoService {
    constructor() { }

    private workerInfo = new BehaviorSubject<AgentInfo>(null);
    currentWorker = this.workerInfo.asObservable();

    changeWorker(workerInfo: AgentInfo){
        this.workerInfo.next(workerInfo);
    }
}