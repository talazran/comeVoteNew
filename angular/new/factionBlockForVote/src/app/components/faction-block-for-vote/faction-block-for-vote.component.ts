import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/services/managers.service';
import { Factions } from 'src/app/classes/factions';
import { NationalService } from 'src/app/services/national.service';
import { National } from 'src/app/classes/national';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { disableBindings } from '@angular/core/src/render3';

@Component({
  selector: 'app-faction-block-for-vote',
  templateUrl: './faction-block-for-vote.component.html',
  styleUrls: ['./faction-block-for-vote.component.scss']
})
export class FactionBlockForVoteComponent implements OnInit {

  //משתנה סטטי המכיל את הניתוב הקבוע של התמונות 
  static srcPic: string = "C:\Users\Tal\Desktop\vote\comeVote\project\webAPI\comeAndVote\src\assets\factionPic";
  //מערך של המפלגות
  arrFaction: Factions[];
  //קבלת הבוחר
  nationalVoter = new National();
  //קוד מפלגה
  idFaction: number;
  // האם לחצו על אישור בחירה
  isClick: boolean = true;

  constructor(private manager: ManagersService, private national: NationalService, private route: ActivatedRoute, private routeNavigate: Router) 
  {
    //שמירת מערך המפלגות
    this.manager.getAllFaction().subscribe(data => this.arrFaction = data);
    //חילוץ הפרמטר שנשלח- קוד הבוחר
    //נתונים שנשלחים ב-url
    // this.route.params.subscribe(params => this.nationalVoter.Identity = params.idVoter);
  }

  ngOnInit() { }

  //בעת לחיצה על פתק של מפלגה
  clickOnFactionPic(idFaction: number) {
    //איתחול השדה קוד מפלגה
    this.idFaction = idFaction;
  }

  okFaction() {
    this.isClick=false;
    //הוספת קול למפלגה שנלחצה
    this.national.addVoteToFaction(this.idFaction).subscribe(res => { });
    //הסרת האזרח מהטבלה של המאושרים
    this.national.deleteNationalByTz(this.national.getNational()).subscribe(res => {
      //if (res)
        this.routeNavigate.navigate(['returnHomePage']);
    });
  }

  // בדיקה האם נלחץ על אישור בחירה
  getIsClick()
  {
    return this.isClick;
  }
}