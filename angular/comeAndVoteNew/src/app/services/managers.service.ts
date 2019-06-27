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
  checkIsHeadManager(userName:string,password:string):Observable<Managers>{
    return this.http.get<Managers>(`http://localhost:60289/api/Managers/findHeadManager/${userName}/${password}`);
  }
  //בדיקה האם אכן נכנס מנהל ערים
  checkIsCityManager(userName:string,password:string,cityOfManager:string):Observable<Managers>{
    return this.http.get<Managers>(`http://localhost:60289/api/Managers/findCityManager/${userName}/${password}/${cityOfManager}`);
  }
  //בדיקה האם אכן נכנס מנהל קלפי
  checkIsBallotBoxManager(userName:string,password:string,numOfBalloBox:number,cityOfBallotBox:string):Observable<Managers>{
    return this.http.get<Managers>(`http://localhost:60289/api/Managers/findBallotBoxManager/${userName}/${password}/${numOfBalloBox}/${cityOfBallotBox}`);
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
  isAgreeFactins(idFaction:number):Observable<Factions>
  {
    return this.http.get<Factions>(`http://localhost:60289/api/Managers/putFieldIsAgree/${idFaction}`)
  }

  //שמירת פרטי בחירות
  // savaTimeVoting():Observable<IsAgreeToVote>
  // {
  //   return this.http.post<National>(`http://localhost:60289/api/National/addTzNationalToList/`,addTznational);
  // }
}