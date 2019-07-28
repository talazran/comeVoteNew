import { Component } from '@angular/core';
import { WorkPogramService } from './services/workPogram.service';
import { working } from 'src/environments/environment';
import { Voting } from './classes/voting';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comeAndVote';

  constructor(public workPogramService: WorkPogramService, public router: Router) {
    this.finishVote();
    setInterval(func => {
      this.finishVote();
    }, 1000 * 60 * 10);

  }

  finishVote() {
    this.workPogramService.getTimeVote().subscribe((res: Voting) => {
      debugger;
      this.workPogramService.voting = res as Voting;
      var day=new Date();
      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      var nextDay = new Date(day.setDate(day.getDate() + 7));
      var diffDays = Math.round(((new Date(res.dateVote).getTime() - nextDay.getTime())/(oneDay)));
      if (new Date(res['dateVote']) >=new Date()) {
        if(diffDays<0)
        {
          working.open = true;
          //location.reload();
          this.router.navigate(['']);
        }
        else {
          working.open = false;
          this.router.navigate(['finishVote']);
        }
      }
      else {
        working.open = false;
        this.router.navigate(['finishVote']);
      }
    })
  }
}
