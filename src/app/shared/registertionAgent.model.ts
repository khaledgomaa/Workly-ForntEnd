
export class RegisterationModel{
    AgentInfo: AgentModel;
    UserSecurity: MyUserAspNet;
    JobInfo: Job;
    Skills: Array<string>;
}


export class AgentModel{
    Email: string;
    PhoneNumber: number;
    ImagePath: string;
    Location: string;
    Rate: number;
    Experience: string;
    AspNetUsersId: string;
}

export class MyUserAspNet{
    UserName: string;
    Password: string;
}

export class Job{
    Name: string;
}

export class Skills{
    Name: Array<string>;
}

export class Jobs{
    Name: Array<string>;
}




