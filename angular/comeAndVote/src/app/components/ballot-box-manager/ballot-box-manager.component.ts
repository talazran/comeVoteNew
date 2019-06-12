import { Component, OnInit } from '@angular/core';
import { National } from 'src/app/classes/national';
import { ManagersService } from 'src/app/services/managers.service';
import { NationalService } from 'src/app/services/national.service';
import { disableDebugTools } from '@angular/platform-browser';
import { disableBindings } from '@angular/core/src/render3';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ballot-box-manager',
  templateUrl: './ballot-box-manager.component.html',
  styleUrls: ['./ballot-box-manager.component.scss']
})
export class BallotBoxManagerComponent implements OnInit {

  //מערך מסוג מחלקת אזרחים
  arrNational:National[];
  //עיר קלפי
  cityOfBallotBox:string;
  //מספר קלפי
  numOfBalloBox:string;
  //תעודת זהות של אזרח
  tz:string;
  //שליפת אזרח בודד
  singleVote:National;

  //משתנה פרטי מסוג הסרביס אזרחים ומנהלים
  constructor(private manager:ManagersService,private national:NationalService,private route:Router) 
  {
    
  }

  ngOnInit() 
  {
     //איתחול המשתנים-מספר קלפי ועיר קלפי
     this.cityOfBallotBox=this.manager.returnCityBallotBox();
     this.numOfBalloBox=this.manager.returnNumBallotBox();
     
     //איתחול המערך של האזרחים
     this.national.listOfNationalInBallotBox(this.numOfBalloBox,this.cityOfBallotBox).subscribe(data=>this.arrNational=data);
  }
  //חיפוש אזרח לפי תעודת זהות
  searchNationalByTz()
  {
    this.national.searchNational(this.tz,this.cityOfBallotBox,this.numOfBalloBox).subscribe((data)=>{
      if(data)//אם חזרה תשובה טובה
      {
        this.singleVote=data;
        this.national.setSingleVoter(this.singleVote);
        this.route.navigate(['openSingleVoter']);//פתיחת הדף שמציג אזרח בודד
      }
      else //אם חזרה תשובה לא טובה
          alert("תעודת זהות זו לא קיימת בקלפי זה");
    });
  }
  //פתיחת המסך של האזרח
  openFactionBlock()
  {
    debugger;
    this.route.navigate(['openFactionBlockForVote']);
  }
}