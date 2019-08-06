import { zip } from 'rxjs';

export class National {
    Identity:string;
    fullName:string;
    street:string;
    zipCode:string;
    numHouse:string;
    cityId:number;
    numBallot:string;
    IsChoose:boolean;

    constructor(Identity?:string,fullName?:string,street?:string,zipCode?:string,numHouse?:string,cityId?:number,numBallot?:string,IsChoose?:boolean)
    {
        this.Identity=Identity;
        this.fullName=fullName;
        this.street=street;
        this.zipCode=zipCode;
        this.numHouse=numHouse;
        this.cityId=cityId;
        this.numBallot=numBallot;
        this.IsChoose=IsChoose;
    }
}