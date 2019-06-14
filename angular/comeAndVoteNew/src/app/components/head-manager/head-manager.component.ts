import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-manager',
  templateUrl: './head-manager.component.html',
  styleUrls: ['./head-manager.component.scss']
})
export class HeadManagerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  //הוספת מנהל עיר
  addCityManager()
  {
    this.route.navigate(['addManager/'+"2"]);
  }

  //פתיחת הקומפוננטה של מפלגות מאושרות
  chooseAgreeFaction()
  {
    this.route.navigate(['openAgreeFaction']);
  }
  //מתי לאפשר את הכפתור
  closeBallotBox()
  {
    
  }
}
