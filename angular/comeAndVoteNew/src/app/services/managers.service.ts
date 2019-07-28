import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Managers } from '../classes/managers';
import { National } from '../classes/national';
import { City } from '../classes/city';
import { disableBindings } from '@angular/core/src/render3';
import { Factions } from '../classes/factions';
import { Time } from '@angular/common';
import { IsAgreeToVote } from '../classes/is-agree-to-vote';
import { FinishVoteComponent } from '../components/finishVote/finishVote.component';
import { WorkPogramService } from './workPogram.service';
import { working } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Voting } from '../classes/voting';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  //סוג המנהל
  kindOfManager: number;
  //מספר קלפי
  numOfBalloBox: number;
  //עיר הקלפי
  cityOfBallotBox: string;
  //המחשב המקומי
  localHost: string;

  constructor(private http: HttpClient, public finishService: WorkPogramService, public router: Router) {
    this.localHost = "60289";
  }

  //שמירת מספר המזהה את המנהל במשתנה
  kindOfManagerService(kindOfManager: number) {
    this.kindOfManager = kindOfManager;
    var day = new Date();
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    if (kindOfManager == 1)
      var nextDay = new Date(day.setDate(day.getDate() + 7));
    else if (kindOfManager == 2)
      var nextDay = new Date(day.setDate(day.getDate() + 2));
    else var nextDay = new Date();
    var diffDays = Math.round(((new Date(this.finishService.voting.dateVote).getTime() - nextDay.getTime()) / (oneDay)));
    if (new Date(this.finishService.voting['dateVote']) >= new Date()) {
      if (diffDays < 0) {
        working.open = true;
        //location.reload();
        if (kindOfManager == 1)
          this.router.navigate(['headManager']);
        if (kindOfManager == 2)
          this.router.navigate(['cityManager']);
        if (kindOfManager == 3)
          this.router.navigate(['ballotBoxManager']);
      }
      else {
        working.open = false;
        this.router.navigate(['finishVote']);
      }
    }
    else {
      working.open = false;
      this.router.navigate(['finishVote']);
    }
  }
  //החזרת המשתנה שאותחל בזיהוי המנהל
  returnIdOfManager(): number {
    return this.kindOfManager;
  }
  addFaction(value, img) {
    const uploadData = new FormData();
    uploadData.append('myFile', img[0], img[0].name);
    uploadData.append('res', JSON.stringify(value));
    return this.http.post('http://localhost:60289/api/Managers/addFaction', uploadData)
  }
  // בדיקה האם אכן נכנס מנהל ראשי
  checkIsHeadManager(userName: string, password: string): Observable<Managers> {
    return this.http.get<Managers>(`http://localhost:60289/api/Managers/findHeadManager/${userName}/${password}`);
  }
  //בדיקה האם אכן נכנס מנהל ערים
  checkIsCityManager(userName: string, password: string, cityOfManager: string): Observable<Managers> {
    return this.http.get<Managers>(`http://localhost:60289/api/Managers/findCityManager/${userName}/${password}/${cityOfManager}`);
  }
  //בדיקה האם אכן נכנס מנהל קלפי
  checkIsBallotBoxManager(userName: string, password: string, numOfBalloBox: number, cityOfBallotBox: string): Observable<Managers> {
    return this.http.get<Managers>(`http://localhost:60289/api/Managers/findBallotBoxManager/${userName}/${password}/${numOfBalloBox}/${cityOfBallotBox}`);
  }

  //שמירת הערכים שהמנהל קלפי הכניס 
  //מספר קלפי ועיר קלפי
  saveNumAndCityBallotBox(numOfBalloBox: number, cityOfBallotBox: string) {
    this.numOfBalloBox = numOfBalloBox;
    this.cityOfBallotBox = cityOfBallotBox;
  }

  //החזרת מספר הקלפי
  returnNumBallotBox() {
    return this.numOfBalloBox;
  }

  //החזרת עיר הקלפי
  returnCityBallotBox() {
    return this.cityOfBallotBox;
  }

  //החזרת מערך הערים
  getOptionCity(): Observable<City[]> {

    return this.http.get<City[]>(`http://localhost:60289/api/City/getAllCities`);
  }

  //החזרת מערך המפלגות
  getAllFaction():Observable<Factions[]>
  {
    return this.http.get<Factions[]>(`http://localhost:60289/api/Managers/allFactions`);
  }

  //סימון מפלגה כמאושרת
  isAgreeFactins(idFaction: number): Observable<Factions> {
    debugger;
    return this.http.get<Factions>(`http://localhost:60289/api/Managers/putFieldIsAgree/${idFaction}`)
  }

  // סימון מפלגה כלא מאושרת
   notAgreeFaction(idFaction:number):Observable<Factions>
   {
     debugger;
     return this.http.get<Factions>(`http://localhost:60289/api/Managers/putFieldNotAgreeFaction/${idFaction}`)
   }
 
  //שמירת פרטי בחירות
  // savaTimeVoting():Observable<IsAgreeToVote>
  // {
  //   return this.http.post<National>(`http://localhost:60289/api/National/addTzNationalToList/`,addTznational);
  // }

  // שליפת מנהלי ערים
  getManagersCity()
  {
    return this.http.get<Managers[]>(`http://localhost:60289/api/Managers/allCityManagers`);
  }
  // שליפת מנהלי קלפיות
  getManagersBallotBox()
  {
    return this.http.get<Managers[]>(`http://localhost:60289/api/Managers/allBallotBoxManagers`);
  }
  // הוספת מנהל עיר
  addManagersCity(manager)
  {
    return this.http.post(`http://localhost:60289/api/Managers/addManagerCity`,manager);
  }
  // מחיקת מנהל עיר
  deleteManagersCity(managerId)
  {
    return this.http.delete(`http://localhost:60289/api/Managers/deleteManagerCityOrBallotBox/${managerId}`);
  }
  //מחיקת מנהל קלפי או עיר
  deleteManagersBallotBox(managerId)
  {
    return this.http.delete(`http://localhost:60289/api/Managers/deleteManagerCityOrBallotBox/${managerId}`);
  }
  // עריכת מנהל עיר
  editManagersCity(manager:Managers)
  {
    debugger;
    return this.http.put(`http://localhost:60289/api/Managers/editManagerCity/${manager.MIdentity}`,manager);
  }
   // עריכת מנהל קלפי
   editManagersBallotBox(manager:Managers)
   {
     return this.http.put(`http://localhost:60289/api/Managers/editManagerBallotBox/${manager.MIdentity}`,manager);
   }
  //  שמירת פרטי הבחירות
  timeVoting(formVoting:Voting)
   {
    return this.http.post(`http://localhost:60289/api/Managers/addTimeVoting`,formVoting);
   }
  //Add new BalotBox manager
  AddNewballotBoxManager(newBalotBoxManageobj:Managers):Observable<Managers>
  {
   return this.http.post<Managers>(`http://localhost:60289/api/Managers/postballotBoxManager/`,newBalotBoxManageobj);
  }
}