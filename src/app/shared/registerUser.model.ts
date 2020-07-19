import { MyUserAspNet } from './registertionAgent.model';

export class RegisterUserModel{
    UserInfo: User;
    UserSecurity: MyUserAspNet;
    Address: UserAddress;
}

export class User{
    Mail: string;
    PhoneNumber: number;
    ImagePath: string;
    AspNetUsersId: string;
}

export class UserAddress{
    Address: string;
}