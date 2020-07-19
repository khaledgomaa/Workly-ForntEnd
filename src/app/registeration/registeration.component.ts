import { Component, OnInit } from '@angular/core';
import { RegisterUserModel, UserAddress } from '../shared/registerUser.model';
import { MyUserAspNet } from '../shared/registertionAgent.model';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
