import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharingService {

    private workerName = new BehaviorSubject<string>('');
    currentWorker = this.workerName.asObservable();

    changeWorker(workerName: string){
        this.workerName.next(workerName);
    }

    constructor() { }
}