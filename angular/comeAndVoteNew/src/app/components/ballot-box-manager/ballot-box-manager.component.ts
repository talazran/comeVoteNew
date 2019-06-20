import { Component, OnInit } from '@angular/core';
import { National } from 'src/app/classes/national';
import { ManagersService } from 'src/app/services/managers.service';
import { NationalService } from 'src/app/services/national.service';
import { disableDebugTools } from '@angular/platform-browser';
import { disableBindings } from '@angular/core/src/render3';
import { Route, Router } from '@angular/router';
import { identity } from 'rxjs';

@Component({
  selector: 'app-ballot-box-manager',
  templateUrl: './ballot-box-manager.component.html',
  styleUrls: ['./ballot-box-manager.component.scss']
})
export class BallotBoxManagerComponent implements OnInit {

  //מערך מסוג מחלקת אזרחים
  arrNational: National[];
  //עיר קלפי
  cityOfBallotBox: string;
  //מספר קלפי
  numOfBalloBox: number;
  //תעודת זהות של אזרח
  tz: string;
  //שליפת אזרח בודד
  singleVote: National;

  //משתנה פרטי מסוג הסרביס אזרחים ומנהלים
  constructor(private manager: ManagersService, private national: NationalService, private route: Router) { }

  ngOnInit() {
    //איתחול המשתנים-מספר קלפי ועיר קלפי
    this.cityOfBallotBox = this.manager.returnCityBallotBox();
    this.numOfBalloBox = this.manager.returnNumBallotBox();

    //איתחול המערך של האזרחים
    this.national.listOfNationalInBallotBox(this.numOfBalloBox, this.cityOfBallotBox).subscribe(data => this.arrNational = data);
  }
  //חיפוש אזרח לפי תעודת זהות
  searchNationalByTz() {
    this.national.searchNational(this.tz, this.cityOfBallotBox, this.numOfBalloBox).subscribe((data) => {
      if (data)//אם חזרה תשובה טובה
      {
        this.singleVote = data;
        this.national.setSingleVoter(this.singleVote);
        this.route.navigate(['openSingleVoter']);//פתיחת הדף שמציג אזרח בודד
      }
      else //אם חזרה תשובה לא טובה
        alert("תעודת זהות זו לא קיימת בקלפי זה");
    });
  }
  //פתיחת המסך של האזרח
  //בעת כניסה יתווסף קול לעיר וכן שינוי השדה לבחר
  //בעת לחיצה על אישור בחירה יתווסף קול למפלגה
  openFactionBlock(national: National) {
    debugger;
    //שינוי שדה הבוחר ל-בחר
    this.national.changeFieldIsChoose(national.Identity).subscribe((res) => {
      if (res)//אם האזרח עדיין לא בחר
      {
        //הוספת קול לעיר של הבוחר
        this.national.addVoteToCity(national.cityId).subscribe(res => { });
        //שמירת תעודת הזהות של האזרח בטבלה ב-webApi
        this.national.addTzNational(national).subscribe(res=>{});
      }
      else
        alert("משתמש זה כבר בחר");
     });
  }
}