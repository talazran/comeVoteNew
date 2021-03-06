import { Component, OnInit } from '@angular/core';
import { NationalService } from 'src/app/services/national.service';
import { National } from 'src/app/classes/national';
import { disableBindings } from '@angular/core/src/render3';
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-voter',
  templateUrl: './single-voter.component.html',
  styleUrls: ['./single-voter.component.scss']
})
export class SingleVoterComponent implements OnInit {
  
  //האזרח הבוחר
  singleVoter: National;

  constructor(private national: NationalService, private route: Router) {}

  ngOnInit() {
    this.singleVoter = this.national.getSingleVoter();
  }

  //פתיחת המסך של האזרח
  openFactionBlock() {
  //העברת קוד הבוחר
    this.route.navigate(['openFactionBlockForVote',this.singleVoter.Identity]);
  }
}