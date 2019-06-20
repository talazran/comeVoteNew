export class Managers {
    MIdentity:string;
    MFullName:string;
    MUserName:string;
    MPassword:string;
    NumStatus:string;
    MCity:number;
    MNumBallotBox:number;
    MailM:string;

    constructor( MIdentity?:string,MFullName?:string,MUserName?:string,MPassword?:string,NumStatus?:string, MCity?:number,MNumBallotBox?:number,MailM?:string)
    {
        this.MIdentity=MIdentity;
        this.MFullName=MFullName;
        this.MUserName=MUserName;
        this.MPassword=MPassword;
        this.NumStatus=NumStatus;
        this.MCity=MCity;
        this.MNumBallotBox=MNumBallotBox;
        this.MailM=MailM;
    }
}