import { Time } from '@angular/common';

export class Voting {
    kodVote:number;
    dateVote:Date;
    ballotsOpen:Time;
    ballotsClose:Time;
    
    constructor(kodVote?:number,dateVote?:Date,ballotsOpen?:Time,ballotsClose?:Time)
    {
        this.kodVote=kodVote;
        this.dateVote=dateVote;
        this.ballotsOpen=ballotsOpen;
        this.ballotsClose=ballotsClose;
    }
}