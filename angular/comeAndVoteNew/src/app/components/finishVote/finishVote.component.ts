import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finishVote',
  templateUrl: './finishVote.component.html',
  styleUrls: ['./finishVote.component.css']
})
export class FinishVoteComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  onClick() {
this.router.navigate(['/StaticDayVotersCity'])
  }

}
