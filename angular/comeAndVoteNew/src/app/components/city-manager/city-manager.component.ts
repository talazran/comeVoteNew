import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-manager',
  templateUrl: './city-manager.component.html',
  styleUrls: ['./city-manager.component.scss']
})
export class CityManagerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  // פתיחת הדף של מנהלי קלפיות
  openAllBallotBox()
  {
    this.route.navigate(["ballotBoxManagerList"]);
  }
  // פתיחת הדף של דוח סטטיסטיקת בוחרים
  statisVoting()
  {
    this.route.navigate([""]);
  }
}
