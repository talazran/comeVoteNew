import { Component, OnInit } from '@angular/core';
import { Factions } from 'src/app/classes/factions';
import { Managers } from 'src/app/classes/managers';
import { ManagersService } from 'src/app/services/managers.service';
import { NationalService } from 'src/app/services/national.service';

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
 
  constructor(private manager:ManagersService,private national: NationalService) {
     //שמירת מערך המפלגות
     this.manager.getAllFaction().subscribe(data => this.arrFaction = data);
   }

  ngOnInit() {


  }
  clickOnFactionPic(idFaction: number) {
    //איתחול השדה קוד מפלגה
    this.idFaction = idFaction;
  }
  agreeOrNotFaction(idFaction:number)
  {
    // putFieldIsAgree/{idFaction}
    this.manager.isAgreeFactins(idFaction).subscribe(res => {});
  }
}