import { Component, OnInit } from '@angular/core';
import { AgentInfoService } from '../shared/agentInfo.service';
import { AgentInfo } from '../shared/agentInfo.model';
import { SharingService } from '../shared/data.service';
import { Router } from '@angular/router';
import { UserAgentOrderService } from '../shared/checkUserAgentRequest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderModel } from '../shared/order.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-worker',
  templateUrl: './request-worker.component.html',
  styleUrls: ['./request-worker.component.css']
})
export class RequestWorkerComponent implements OnInit {

  constructor(private agentInfo: AgentInfoService 
            , private sharingDate: SharingService
            , private router: Router
            , private checkUserAgenRequest: UserAgentOrderService
            , private toastr: ToastrService) { }

  agentModel: AgentInfo = new AgentInfo();

  agentName: any;

  userName = localStorage.getItem('username');

  state: boolean;

  orderModel: OrderModel = new OrderModel();

  requestOrder(){
    this.orderModel.UserName = this.userName;
    this.orderModel.AgentName = this.agentName;

    this.checkUserAgenRequest.postRequest(this.orderModel).subscribe(data => {
      this.state = true;
      this.toastr.success('Order has been received successfully');
    },
    (err: HttpErrorResponse) => {
      if(err.status === 500){
        this.toastr.warning('try later');
      }
    });
  }

  deleteRequest(){
    this.checkUserAgenRequest.deleteOrder(this.userName, this.agentName)
    .subscribe(data => {
      this.state = false;
      this.toastr.success('Order has been cancelled');
    },
    (err: HttpErrorResponse) => {
      if(err.status === 500){
        this.toastr.warning('try later');
        }
      });
  }

  ngOnInit(): void {
    this.sharingDate.currentWorker.subscribe(
      (data: string) => {
        this.agentName = data;
      });
    if(this.agentName === ''){
      this.router.navigateByUrl('/user');
    }
    this.agentInfo.agentInfo(this.agentName)
    .subscribe(data => { this.agentModel = data as AgentInfo; });

    this.checkUserAgenRequest.checkAgentUserOrder(this.userName, this.agentName)
    .subscribe(data => {
      this.state = true;
    },
    (err: HttpErrorResponse)=>{
      if(err.status === 404){
        this.state = false;
      }
    });
  }

}
