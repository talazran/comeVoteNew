import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-time-voting',
  templateUrl: './time-voting.component.html',
  styleUrls: ['./time-voting.component.scss']
})
export class TimeVotingComponent implements OnInit {
  kodVote:number;
  dateVote:Date;
  ballotsOpen:Time;
  ballotsClose:Time;

  constructor(private route:Router,private manager:ManagersService) { }

  ngOnInit() {
  }

  // שמירת פרטי הבחירות
  saveTimeVoting()
  {
    // this.manager.savaTimeVoting().subscribe(res=>{});
  }
}
