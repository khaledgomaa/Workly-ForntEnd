import { Component, OnInit } from '@angular/core';
import { AgentInfoService } from 'src/app/shared/agentInfo.service';
import { AgentInfo } from 'src/app/shared/agentInfo.model';
import { ShareWorkerInfoService } from 'src/app/shared/getWorkerInfoFromWorkerCompnent.service';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {

  constructor(private agentService: AgentInfoService
            , private sharingWorkerInfo: ShareWorkerInfoService) { }

  agentModel: AgentInfo = new AgentInfo();

  shareWorker(){
    this.sharingWorkerInfo.changeWorker(this.agentModel);
  }

  ngOnInit(): void {
    this.agentService.agentInfo(localStorage.getItem('username')).subscribe(data => {this.agentModel = data as AgentInfo ;});
  }

}
