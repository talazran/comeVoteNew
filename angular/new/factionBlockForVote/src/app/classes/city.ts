export class City {
    id:number;
    areaKod:string;
    cityName:string;
    nowCountValid:number;
    allCountValid:string;

    constructor(id:number,areaKod:string,cityName:string,nowCountValid:number,allCountValid:string) 
    {
        this.id=id;
        this.areaKod=areaKod;
        this.cityName=cityName;
        this.nowCountValid=nowCountValid;
        this.allCountValid=allCountValid;
    }
}