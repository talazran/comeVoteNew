import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/services/managers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private manager:ManagersService,public router:Router) { 

  }
  //שליחת הסוג של המנהל לסרביס
  //1-מנהל ראשי
  //2-מנהל ערים
  //3-מנהל קלפי
  kindOfManager(id:number):void
  {
    this.manager.kindOfManagerService(id);
    // if(id==1)
    //   this.router.navigate(['/headManager'])
    // if(id==2)
    //   this.router.navigate(['/cityManager'])
    // if(id==3)
    //   this.router.navigate(['/ballotBoxManager'])

   
  }
  
  ngOnInit() {
  }
}