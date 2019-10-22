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
    // this.router.navigate(['home']);
    this.finishVote();
    setInterval(func => {
      this.finishVote();
    }, 1000 * 60 * 10);

  }

  finishVote() {

    this.workPogramService.getTimeVote().subscribe((res) => {
      if (res) {
        working.open = true;
        //location.reload();
       // this.router.navigate(['']);
      }
      else {
        working.open = false;
        this.router.navigate(['finishVote']);
      }
    })
  }
}
