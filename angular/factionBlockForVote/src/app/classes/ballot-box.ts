export class BallotBox {
    id:number;
    numBallot:number;
    cityId:number;


    constructor(id:number,numBallot:number,cityId:number) 
    {
        this.id=id;
        this.numBallot=numBallot;
        this.cityId=cityId;
    }
}