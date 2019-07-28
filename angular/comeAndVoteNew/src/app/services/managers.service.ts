import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Managers } from '../classes/managers';
import { National } from '../classes/national';
import { City } from '../classes/city';
import { disableBindings } from '@angular/core/src/render3';
import { Factions } from '../classes/factions';
import { Time } from '@angular/common';
import { IsAgreeToVote } from '../classes/is-agree-to-vote';
import { Voting } from '../classes/voting';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {
  //סוג המנהל
  kindOfManager: number;
  //מספר קלפי
  numOfBalloBox:number;
  //עיר הקלפי
  cityOfBallotBox:string;
  //המחשב המקומי
  localHost:string;

  constructor(private http:HttpClient) { 
    this.localHost="60289";
  }

  //שמירת מספר המזהה את המנהל במשתנה
  kindOfManagerService(kindOfManager: number) {
    this.kindOfManager = kindOfManager;
  }
  //החזרת המשתנה שאותחל בזיהוי המנהל
  returnIdOfManager(): number {
    return this.kindOfManager;
  }
 // בדיקה האם אכן נכנס מנהל ראשי
 checkIsHeadManager(identity:string,password:string):Observable<Managers>{
  return this.http.get<Managers>(`http://localhost:60289/api/Managers/findHeadManager/${identity}/${password}`);
}

 //בדיקה האם אכן נכנס מנהל ערים
 checkIsCityManager(identity:string,password:string,cityOfManager:string):Observable<Managers>{
  return this.http.get<Managers>(`http://localhost:60289/api/Managers/findCityManager/${identity}/${password}/${cityOfManager}`);
}

 //בדיקה האם אכן נכנס מנהל קלפי
 checkIsBallotBoxManager(identity:string,password:string,numOfBalloBox:number,cityOfBallotBox:string):Observable<Managers>{
  return this.http.get<Managers>(`http://localhost:60289/api/Managers/findBallotBoxManager/${identity}/${password}/${numOfBalloBox}/${cityOfBallotBox}`);
}



  //שמירת הערכים שהמנהל קלפי הכניס 
  //מספר קלפי ועיר קלפי
  saveNumAndCityBallotBox(numOfBalloBox:number,cityOfBallotBox:string)
  {
    this.numOfBalloBox=numOfBalloBox;
    this.cityOfBallotBox=cityOfBallotBox;
  }

  //החזרת מספר הקלפי
  returnNumBallotBox()
  {
    return this.numOfBalloBox;
  }

  //החזרת עיר הקלפי
  returnCityBallotBox()
  {
    return this.cityOfBallotBox;
  }

  //החזרת מערך הערים
  getOptionCity():Observable<City[]>
  {
  
    return this.http.get<City[]>(`http://localhost:60289/api/City/getAllCities`);
  }

  //החזרת מערך המפלגות
  getAllFaction():Observable<Factions[]>
  {
    return this.http.get<Factions[]>(`http://localhost:60289/api/Managers/allFactions`);
  }

  //סימון מפלגה כמאושרת
  agreeFaction(idFaction:number):Observable<Factions>
  {
    debugger;
    return this.http.get<Factions>(`http://localhost:60289/api/Managers/putFieldAgreeFaction/${idFaction}`)
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