import { Component, OnInit } from '@angular/core';
import { RegisterUserModel, UserAddress, User } from 'src/app/shared/registerUser.model';
import { MyUserAspNet } from 'src/app/shared/registertionAgent.model';
import { UserApi } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private userApi: UserApi , private toastr: ToastrService) { }

  confirmedPassword: string = null;

  selectedFile: File = null;

  userModel: RegisterUserModel = new RegisterUserModel();

  resetForm(){
    this.userModel = {
      UserInfo : new User(),
      Address : new UserAddress(),
      UserSecurity : new MyUserAspNet()
    }
  }

  onFileSelected(file: FileList){
    this.selectedFile = file.item(0);

    // show the image
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.userModel.UserInfo.ImagePath = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  submit(){
    this.userModel.UserInfo.PhoneNumber = Number(this.userModel.UserInfo.PhoneNumber);
    this.userModel.UserInfo.AspNetUsersId = 'ahmed';
    this.userApi.registerUser(this.userModel).subscribe(res => {
      this.toastr.success('User Added Succefully');
      this.resetForm();
      this.confirmedPassword = null;
    },
    (err: HttpErrorResponse) =>{
      if (err.status === 500){this.toastr.show('Please try later') ; }
          else if (err.status === 400){this.toastr.info('This user aleady exist') ; }
        }
    );
  }

  ngOnInit(): void {
    this.resetForm();
  }

}
