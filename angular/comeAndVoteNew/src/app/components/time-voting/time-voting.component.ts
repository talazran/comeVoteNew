import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';
import { Time } from '@angular/common';
import { Voting } from 'src/app/classes/voting';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-time-voting',
  templateUrl: './time-voting.component.html',
  styleUrls: ['./time-voting.component.scss']
})
export class TimeVotingComponent implements OnInit {

  formVoting:Voting=new Voting();

  constructor(private route:Router,private manager:ManagersService) { }

  ngOnInit() {}

  // שמירת פרטי הבחירות
  saveTimeVoting()
  {
    debugger;
    this.manager.timeVoting(this.formVoting).subscribe(res=>{
      if(res)
      Swal.fire(
        'הצליח!',
        'הנתונים נשמרו בהצלחה',
        'success'
      )
    });
  }
  returnHeadManage()
  {
    this.route.navigate(['openHeadManager']);
  }
}