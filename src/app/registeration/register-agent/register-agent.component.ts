import { Component, OnInit } from '@angular/core';
import { RegisterationModel, AgentModel, Job, MyUserAspNet } from 'src/app/shared/registertionAgent.model';
import { ToastrService } from 'ngx-toastr';
import { RegisterAgent } from 'src/app/shared/registerAgent.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SkillsApi } from 'src/app/shared/skills.service';
import { JobsApi } from 'src/app/shared/job.service';

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

  constructor(private toastr: ToastrService , private jobApi: JobsApi ,
              private agentService: RegisterAgent , private getSkillsApi: SkillsApi) { }

  registerationModel: RegisterationModel = new RegisterationModel();

  confirmedPassword: string;

  allSkills: string[];

  allJobs: string[];

  selectedFile: File = null;

  // declared varaibles for multiSelect
  selectedItems: [];
  dropdownSettings = {};

  updateJob(job: string){
    if (job !== 'Select your Job'){this.registerationModel.JobInfo.Name = job; }
  }

  submit(){
    console.log(this.registerationModel);
    this.registerationModel.AgentInfo.AspNetUsersId = 'khaled';
    this.registerationModel.Skills = this.selectedItems;
    this.registerationModel.AgentInfo.Rate = Number(this.registerationModel.AgentInfo.Rate);
    this.registerationModel.AgentInfo.PhoneNumber = Number(this.registerationModel.AgentInfo.PhoneNumber);
    if (this.registerationModel.UserSecurity.Password !== this.confirmedPassword){
      this.toastr.warning('Password not matched');
    }
    else{
      this.agentService.registerAgent(this.registerationModel).subscribe(res =>
        {
          this.toastr.success('Agent Succeffully created');
          this.resetForm();
          this.confirmedPassword = null;
          this.selectedItems = [];
        },
        (err: HttpErrorResponse) => {
          if (err.status === 500){this.toastr.show('Please try later') ; }
          else if (err.status === 400){this.toastr.info('This agent aleady exist') ; }
        }
        );
    }
  }

  getSkills(){
    this.getSkillsApi.getSkills().subscribe(res => this.allSkills = res as string[]);
  }

  getJobs(){
    this.jobApi.getJobs().subscribe(res => this.allJobs = res as string[]);
  }

  onFileSelected(file: FileList){
    this.selectedFile = file.item(0);

    // show the image
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.registerationModel.AgentInfo.ImagePath = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  resetForm(){
    this.registerationModel.AgentInfo = new AgentModel();
    this.registerationModel.JobInfo = new Job();
    this.registerationModel.Skills = [];
    this.registerationModel.UserSecurity = new MyUserAspNet();
  }

  onSelect(item : string){
    console.log(this.selectedItems);
  }

  ngOnInit(): void {
    this.resetForm();
    this.getSkills();
    this.getJobs();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'name',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  }

}
