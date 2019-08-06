export class FinalResults {
    idFaction:number;
    idVote:number;
    numberOfVote:number;

    constructor(idFaction:number,idVote:number,numberOfVote:number)
    {
        this.idFaction=idFaction;
        this.idVote=idVote;
        this.numberOfVote=numberOfVote;
    }
}
