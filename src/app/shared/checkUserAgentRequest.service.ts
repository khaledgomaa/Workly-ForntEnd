import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from './order.model';

@Injectable({providedIn: 'root'})
export class UserAgentOrderService {
    constructor(private http: HttpClient) { }

    checkAgentUserOrder(userName: string , agentName: string){
        return this.http.get('http://localhost:56908/api/Order/' + userName + '/' + agentName);
    }

    postRequest(orderModel: OrderModel){
        return this.http.post('http://localhost:56908/api/Order/',orderModel);
    }

    deleteOrder(userName: string , agentName: string){
        return this.http.delete('http://localhost:56908/api/Order/' + userName + '/' + agentName);
    }
}