import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { National } from '../classes/national';
import { Observable, from } from 'rxjs';
import { disableBindings } from '@angular/core/src/render3';
import { Factions } from '../classes/factions';

@Injectable({
  providedIn: 'root'
})
export class NationalService {
  singleVoter: National;

  constructor(private http: HttpClient) { }

  //שליפת אזרחים בקלפי הנתון
  listOfNationalInBallotBox(numBallotBox: number, cityOfBallotBox: string): Observable<National[]> {
    return this.http.get<National[]>(`http://localhost:60289/api/National/getNationalInBallotBox/${numBallotBox}/${cityOfBallotBox}`);
  }

  //שליפת אזרח בודד לפי תעודת זהות
  searchNational(tz: string, cityOfBallotBox: string, numBallotBox: number): Observable<National> {
    return this.http.get<National>(`http://localhost:60289/api/National/getNational/${tz}/${cityOfBallotBox}/${numBallotBox}`);
  }

  //שמירת האזרח שנבחר
  setSingleVoter(object: National) {
    this.singleVoter = object;
  }

  //החזרת האזרח שנבחר
  getSingleVoter() {
    return this.singleVoter;
  }

  //הוספת קול למפלגה שנלחצה
  addVoteToFaction(idFaction: number) {
    return this.http.get(`http://localhost:60289/api/National/PutVotersInFaction/${idFaction}`);
  }

  //שינוי שדה הבוחר-לבחר
  changeFieldIsChoose(idVoter: string) {
    return this.http.get(`http://localhost:60289/api/Managers/PutFieldIsChoose/${idVoter}`);
  }

  //הוספת קול לעיר של הבוחר
  addVoteToCity(cityId: number) {
    return this.http.get(`http://localhost:60289/api/City/PutNowCountValidInCity/${cityId}`);
  }
  //במידה והאזרח מורשה לבחור הוא ישמר בתוך אוסף בסרבר
  addTzNational(addTznational: National): Observable<National> {
    return this.http.post<National>(`http://localhost:60289/api/National/addTzNationalToList/`, addTznational);
  }
  // // סימון אזרח כבחר
  // okNational(national: National) {
  //   debugger;
  //   //שינוי שדה הבוחר ל-בחר
  //   this.changeFieldIsChoose(national.Identity).subscribe((res) => {
  //     if (res)//אם האזרח עדיין לא בחר
  //     {
  //       //הוספת קול לעיר של הבוחר
  //       this.addVoteToCity(national.cityId).subscribe(res => { });
  //       //שמירת תעודת הזהות של האזרח בטבלה ב-webApi
  //       this.addTzNational(national).subscribe(res => { });
  //     }
  //     else
  //       alert("משתמש זה כבר בחר");
  //   });
  // }
}