import { Component, OnInit } from '@angular/core';
import { RegisterUserModel, User, UserAddress } from 'src/app/shared/registerUser.model';
import { MyUserAspNet } from 'src/app/shared/registertionAgent.model';
import { SharingService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private sharingData: SharingService) { }

  workerName: string;

  requestWorker(){
    this.sharingData.changeWorker(this.workerName);
  }

  ngOnInit(): void {
  }

}
