import { Component, OnInit } from '@angular/core';
import { NationalService } from 'src/app/services/national.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-voter',
  templateUrl: './home-voter.component.html',
  styleUrls: ['./home-voter.component.scss']
})
export class HomeVoterComponent implements OnInit {
  // תעודת זהות של האזרח הנכנס
  tzNational: string;

  constructor(private national: NationalService, private route: Router) { }

  ngOnInit() {
  }

  enterFactionBlockForVote() {
    this.national.checkIsExistNational(this.tzNational).subscribe(data => {
      debugger;
      if (data)
        this.route.navigate(['openFactionBlockForVote']);
      else
        alert("אינך קיים במערכת");
    });
  }
}