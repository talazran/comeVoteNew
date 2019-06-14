import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private manager:ManagersService) { 

  }
  //שליחת הסוג של המנהל לסרביס
  //1-מנהל ראשי
  //2-מנהל ערים
  //3-מנהל קלפי
  kindOfManager(id:number):void
  {
    this.manager.kindOfManagerService(id);
  }
  
  ngOnInit() {
  }
}