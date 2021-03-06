import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-manager',
  templateUrl: './head-manager.component.html',
  styleUrls: ['./head-manager.component.scss']
})
export class HeadManagerComponent implements OnInit {
closeBallot:boolean=false;
  constructor(private route:Router) {
    setInterval(() => { this.closeBallot=true }, 10000);
   }

  ngOnInit() {
  }
  //הוספת מנהל עיר
  addCityManager()
  {
    this.route.navigate(['addManager/'+"2"]);
  }
  allFac()
  {
    this.route.navigate(['allFactions'])
  }

  //פתיחת הקומפוננטה של מפלגות מאושרות
  chooseAgreeFaction()
  {
    this.route.navigate(['openAgreeFaction']);
  }
  //פתיחת הדף של הכנסת זמני פתיחת וסגירת קלפיות
  addtimeVoting()
  {
    this.route.navigate(['openTimeVoting']);
  }
  closeBallotBox()
  {
    return this.closeBallot;
  }
  managerList()
  {
    this.route.navigate(["/openHeadManager/cityManagerList"])
  }
}