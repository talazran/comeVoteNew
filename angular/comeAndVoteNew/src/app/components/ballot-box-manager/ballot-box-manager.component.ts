import { Component, OnInit } from '@angular/core';
import { National } from 'src/app/classes/national';
import { ManagersService } from 'src/app/services/managers.service';
import { NationalService } from 'src/app/services/national.service';
import { disableDebugTools } from '@angular/platform-browser';
import { disableBindings } from '@angular/core/src/render3';
import { Route, Router } from '@angular/router';
import { identity } from 'rxjs';
import Swal from 'sweetalert2';
import { EditBallotBoxManagerComponent } from '../edit-ballot-box-manager/edit-ballot-box-manager.component';
import { ActionComponent } from '../action/action.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OkNationalComponent } from '../ok-national/ok-national.component';

@Component({
  selector: 'app-ballot-box-manager',
  templateUrl: './ballot-box-manager.component.html',
  styleUrls: ['./ballot-box-manager.component.scss'],
})
export class BallotBoxManagerComponent implements OnInit {
  //מערך מסוג מחלקת אזרחים
  arrNational: National[];
  //עיר קלפי
  cityOfBallotBox: string;
  //מספר קלפי
  numOfBalloBox: number;

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private rowData;
  private context;
  private frameworkComponents;

  constructor(public managerService: ManagersService, private modalService: NgbModal, private national: NationalService) {
    this.columnDefs = [
      { headerName: 'תעודת זהות', field: 'Identity', sortable: true, filter: true },
      { headerName: 'שם מלא', field: 'fullName', sortable: true, filter: true },
      { headerName: 'רחוב', field: 'street', sortable: true, filter: true },
      { headerName: 'מיקוד', field: 'zipCode', sortable: true, filter: true },
      { headerName: 'מספר בית', field: 'numHouse', sortable: true, filter: true },
      { headerName: 'עיר', field: 'City.cityName', sortable: true, filter: true },
      { headerName: 'מספר קלפי', field: 'numBallot', sortable: true, filter: true, },
      { headerName: 'האם בחר?', field: 'IsChoose', sortable: true, filter: true, },
      { headerName: 'אישור אזרח', sortable: true, filter: false,
        cellRenderer: "OkNationalComponent",
      },
      // {headerName: 'כפתור',type:"button",sortable: true, filter: false,},
      //אני רוצה שיהיה גם שדה של כפתור שבעת לחיצה יכנס לפונקציה שכתבתי כאן למטה והיא:
      //okNational
    ];
    this.arrNational = [];
    // this.rowData = [];
    this.context = { componentParent: this };
    this.frameworkComponents = {
      OkNationalComponent: OkNationalComponent
    };
  }

  ngOnInit() {
    this.cityOfBallotBox = this.managerService.returnCityBallotBox();
    this.numOfBalloBox = this.managerService.returnNumBallotBox();

    //איתחול המערך של האזרחים
    this.national.listOfNationalInBallotBox(this.numOfBalloBox, this.cityOfBallotBox).subscribe(data => this.arrNational = data);
  }
  // currencyFormatter(params) {
  //   return params.value.cityName;
  // }

  // //מערך מסוג מחלקת אזרחים
  // arrNational: National[];
  // //עיר קלפי
  // cityOfBallotBox: string;
  // //מספר קלפי
  // numOfBalloBox: number;
  // //תעודת זהות של אזרח
  // tz: string;
  // //שליפת אזרח בודד
  // singleVote: National;

  // //משתנה פרטי מסוג הסרביס אזרחים ומנהלים
  // constructor(private manager: ManagersService, private national: NationalService, private route: Router) { }

  // ngOnInit() {
  //   //איתחול המשתנים-מספר קלפי ועיר קלפי
  //   this.cityOfBallotBox = this.manager.returnCityBallotBox();
  //   this.numOfBalloBox = this.manager.returnNumBallotBox();

  //   //איתחול המערך של האזרחים
  //   this.national.listOfNationalInBallotBox(this.numOfBalloBox, this.cityOfBallotBox).subscribe(data => this.arrNational = data);
  // }
  // //חיפוש אזרח לפי תעודת זהות
  // searchNationalByTz() {
  //   this.national.searchNational(this.tz, this.cityOfBallotBox, this.numOfBalloBox).subscribe((data) => {
  //     if (data)//אם חזרה תשובה טובה
  //     {
  //       this.singleVote = data;
  //       this.national.setSingleVoter(this.singleVote);
  //       this.route.navigate(['openSingleVoter']);//פתיחת הדף שמציג אזרח בודד
  //     }
  //     else //אם חזרה תשובה לא טובה
  //       alert("תעודת זהות זו לא קיימת בקלפי זה");
  //   });
  // }


  //פתיחת המסך של האזרח
  //בעת כניסה יתווסף קול לעיר וכן שינוי השדה לבחר
  //בעת לחיצה על אישור בחירה יתווסף קול למפלגה
  okNational(cell) {
    debugger;
    //שינוי שדה הבוחר ל-בחר
    this.national.changeFieldIsChoose(this.arrNational[cell].Identity).subscribe((res) => {
      if (res)//אם האזרח עדיין לא בחר
      {
        alert('מאושר לבחירה');
        this.cityOfBallotBox = this.managerService.returnCityBallotBox();
        this.numOfBalloBox = this.managerService.returnNumBallotBox();
    
        //איתחול המערך של האזרחים
        this.national.listOfNationalInBallotBox(this.numOfBalloBox, this.cityOfBallotBox).subscribe(data => this.arrNational = data);
        //הוספת קול לעיר של הבוחר
        // this.national.addVoteToCity(this.arrNational[cell].cityId).subscribe(res => { });
        // //שמירת תעודת הזהות של האזרח בטבלה ב-webApi
        // this.national.addTzNational(this.arrNational[cell]).subscribe(res=>{});
      }
      else
        alert("משתמש זה כבר בחר");
     },cat=>{
      alert("משתמש זה כבר בחר");
     });
  }
}