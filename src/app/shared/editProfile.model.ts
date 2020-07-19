export class EditWorkerModel{
    EditAgentInfo: EditedAgentInfo;
    EditSkills: Array<string>;
}

export class EditedAgentInfo{
    Email: string;
    PhoneNumber: number;
    ImagePath: string;
    Location: string;
    Rate: number;
    Experience: string;
}