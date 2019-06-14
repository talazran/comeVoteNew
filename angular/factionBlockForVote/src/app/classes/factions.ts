export class Factions {
    Id:number;
    factionName:string;
    voters:number;
    leadersMail:string;
    factionPic:string;
    IsAgree:boolean;

    constructor(Id:number,factionName:string,voters:number,leadersMail:string,factionPic:string,IsAgree:boolean)
    {
        this.Id=Id;
        this.factionName=factionName;
        this.voters=voters;
        this.leadersMail=leadersMail;
        this.factionName=factionName;
        this.IsAgree=IsAgree;
    }
}
