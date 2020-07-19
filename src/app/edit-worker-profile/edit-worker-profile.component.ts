import { Component, OnInit } from '@angular/core';
import { ShareWorkerInfoService } from '../shared/getWorkerInfoFromWorkerCompnent.service';
import { AgentInfo } from '../shared/agentInfo.model';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { EditWorkerModel,EditedAgentInfo } from '../shared/editProfile.model';
import { SkillsApi } from '../shared/skills.service';
import { EditWorkerProfileService } from '../shared/editWorkerProfile.service';

@Component({
  selector: 'app-edit-worker-profile',
  templateUrl: './edit-worker-profile.component.html',
  styleUrls: ['./edit-worker-profile.component.css']
})
export class EditWorkerProfileComponent implements OnInit {

  constructor(private getWorkerInfo: ShareWorkerInfoService
            , private router: Router
            , private getSkillsApi: SkillsApi
            , private editWorkerApi: EditWorkerProfileService) { }

  agentModel: AgentInfo = new AgentInfo();

  editedWorker: EditWorkerModel = new EditWorkerModel();

  workerInfo: EditedAgentInfo = new EditedAgentInfo();

  dropdownSettings = {};

  selectedSkills = [];

  selectedFile: File = null;

  allSkills: string[];

  getSkills(){
    this.getSkillsApi.getSkills().subscribe(res => this.allSkills = res as string[]);
  }

  onFileSelected(file: FileList){
    this.selectedFile = file.item(0);

    // show the image
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.agentModel.imagePath = event.target.result;
    };
    console.log(this.agentModel.imagePath);
    reader.readAsDataURL(this.selectedFile);
  }


  submit(){
    this.workerInfo = {
        Email: this.agentModel.email,
        Experience: this.agentModel.experience,
        ImagePath: this.agentModel.imagePath,
        Location: this.agentModel.location,
        PhoneNumber: this.agentModel.phoneNumber,
        Rate: this.agentModel.rate
    };
    this.editedWorker = {
      EditAgentInfo: this.workerInfo ,
      EditSkills: this.agentModel.skills
    };
    this.editWorkerApi.editWorkerProfile(localStorage.getItem('username'), this.editedWorker)
    .subscribe(data => {
      this.router.navigateByUrl('/worker');
    })
  }

  ngOnInit(): void {
    this.getSkills();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'name',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };

    this.getWorkerInfo.currentWorker
    .subscribe(data => {
      this.agentModel = data;
      console.log(this.agentModel);
    });
    if(this.agentModel === null){
      console.log('null');
      this.router.navigateByUrl('/worker');
    }
    this.selectedSkills.push(this.agentModel.skills);
  }

}
