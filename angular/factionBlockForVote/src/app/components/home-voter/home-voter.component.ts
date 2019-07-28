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
  //האם לחצו על הכפתור ואותו אזרח אכן מאושר לבחירה
  isAgree:boolean=true;
  
  ngOnInit() {}

  enterFactionBlockForVote() {
    this.national.checkIsExistNational(this.tzNational).subscribe(data => {
      if (data) {
        this.national.savaNational(this.tzNational);
        this.isAgree=false;
        this.route.navigate(['openFactionBlockForVote']);
      }
      else
        alert("אינך קיים במערכת");
    });
  }

  //האם מאושר לבחירה
  //שלא יוצג הכפתור והתיבת טקסט בעת תצוגת פתקי המפלגות
  isAgreeToVote()
  {
    return this.isAgree;
  }
}