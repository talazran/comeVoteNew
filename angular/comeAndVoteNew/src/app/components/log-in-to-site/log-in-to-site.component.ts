import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Route, Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';
import { disableBindings } from '@angular/core/src/render3';
import { City } from 'src/app/classes/city';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-log-in-to-site',
  templateUrl: './log-in-to-site.component.html',
  styleUrls: ['./log-in-to-site.component.scss']
})
export class LogInToSiteComponent implements OnInit {

  //שם משתמש
  identity:string;
  //סיסמא
  password:string;
  //עיר המנהל
  cityOfManager:string;
  //מספר קלפי
  numOfBalloBox:number;
  //עיר הקלפי
  cityOfBallotBox:string;
  //מערך הערים
  optionCity:City[];

  //משתנה מסוג הסרביס:מנהלים
  constructor(private manager:ManagersService,private route:Router) 
  {
    this.manager.getOptionCity().subscribe(data=>this.optionCity=data);
    this.cityOfManager="העיר בה הנך מנהל:";
    this.cityOfBallotBox="עיר הקלפי:";
  }
  ngOnInit() {}

  //החזרת הסוג של המנהל שנשלף מהסרביס 
  checkManager()
  {
    return this.manager.returnIdOfManager();
  }

  //כניסת מנהל ראשי
  enterHeadManager()
  {
    this.manager.checkIsHeadManager(this.identity,this.password).subscribe((data)=>{
      if(data)
        this.route.navigate(['openHeadManager']);
      else
      Swal.fire({
        type: 'error',
        title: 'נכשל',
        text: 'שם משתמש או סיסמא שגויים'
      })
    });
  }

  //כניסת מנהל עיר
  enterCityManager()
  {
    this.manager.checkIsCityManager(this.identity,this.password,this.cityOfManager).subscribe((data)=>{
      if(data)
        this.route.navigate(['openCityManager']);
      else
      Swal.fire({
        type: 'error',
        title: 'נכשל',
        text: 'שם משתמש או סיסמא שגויים'
      })
    });
  }

  //כניסת מנהל קלפי
  enterBallotBoxManager()
  {
    //שמירת המשתנים מספר קלפי ועיר קלפי בסרביס
    //כדי שאוכל לשלוף את ערכם מקומפוננט אחר
    this.manager.saveNumAndCityBallotBox(this.numOfBalloBox,this.cityOfBallotBox);
    this.manager.checkIsBallotBoxManager(this.identity,this.password,this.numOfBalloBox,this.cityOfBallotBox).subscribe((data)=>{
      if(data)
        //פתיחת הדף של המנהל קלפי
        this.route.navigate(['openBallotBoxManager']);
      else
      Swal.fire({
        type: 'error',
        title: 'נכשל',
        text: 'שם משתמש או סיסמא שגויים'
      })
    });
  }
}