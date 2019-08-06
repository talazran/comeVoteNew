import { Component, OnInit } from '@angular/core';
import { CityVoters } from './data';
import { City } from 'src/app/classes/city';
import { Route } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';


@Component({
  selector: 'app-static-day-voters-city',
  templateUrl: './static-day-voters-city.component.html',
  styleUrls: ['./static-day-voters-city.component.scss']
})
export class StaticDayVotersCityComponent {
 
  CityVoters: any[];//מערך הערים המוכן לסטטיסטיקה

  view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#57afd5', '#fbf355', '#9f9c9c','#f74f4f','#f76cf8','#cf43a1','#0094ff']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor(private manage: ManagersService) {
    
  }
  ngOnInit() {
    
    this.manage.getOptionCity().subscribe((data) => {
      debugger;
      this.inityArrOfCity(data);
    }); //return all the cities from the service

   
   
  }
  inityArrOfCity(data){
   if (data != null) {//במידה והערים לא יחזרו עדיין מהשרת שלא ירוץ על ריק
      for (let index = 0; index < data.length; index++) {//עובר על כול רשימת הערים
        const city = data[index];//שומר במשתנה את העיר הנוכחית
        let value = (city.nowCountValid / city.allCountValid) * 100 //חישוב מנדטים
        CityVoters.push({ "name": city.cityName, "value": value }) //דחיפה לדף של הjson
      }
    }
    Object.assign(this, { CityVoters })
}
  onSelect(event) {//שיניתי לs קטנה
    console.log(event);
  }

  // https://swimlane.gitbook-
}

