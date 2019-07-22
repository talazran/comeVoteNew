import { Component, OnInit } from '@angular/core';
import { Factions } from 'src/app/classes/factions';
import { Managers } from 'src/app/classes/managers';
import { ManagersService } from 'src/app/services/managers.service';
import { NationalService } from 'src/app/services/national.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agree-factins',
  templateUrl: './agree-factins.component.html',
  styleUrls: ['./agree-factins.component.scss']
})
export class AgreeFactinsComponent implements OnInit {
  //ניתוב שמור של התמונות
  static srcPic: string = "C:\Users\Tal\Desktop\vote\comeVote\project\webAPI\comeAndVote\src\assets\factionPic";
  //קוד מפלגה
  idFaction: number;
  //מערך המפלגות 
  arrFaction: Factions[];

  constructor(private route:Router,private manager: ManagersService, private national: NationalService) {
    //שמירת מערך המפלגות
    this.manager.getAllFaction().subscribe(data => this.arrFaction = data);
  }

  ngOnInit() {


  }
  clickOnFactionPic(idFaction: number) {
    //איתחול השדה קוד מפלגה
    this.idFaction = idFaction;
  }

  agreeFaction(idFaction: number) {
    // putFieldIsAgree/{idFaction}
    this.manager.agreeFaction(idFaction).subscribe(res => {
      if (res)
        alert("המפלגה סומנה כמאושר");
      else
        alert("המפלגה כבר מאושרת");
    });
  }

  notAgreeFaction(idFaction: number) {
    // putFieldIsAgree/{idFaction}
    this.manager.notAgreeFaction(idFaction).subscribe(res => {
      if (res)
        alert("המפלגה סומנה כ-לא מאושר ");
      else
        alert("המפלגה כבר לא מאושרת");
    });
  }

  returnHeadManage()
  {
    this.route.navigate(['openHeadManager']);
  }
}