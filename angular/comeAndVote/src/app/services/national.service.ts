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
  listOfNationalInBallotBox(numBallotBox: string, cityOfBallotBox: string): Observable<National[]> {
    return this.http.get<National[]>(`http://localhost:60289/api/National/getNationalInBallotBox/${numBallotBox}/${cityOfBallotBox}`);
  }

  //שליפת אזרח בודד לפי תעודת זהות
  searchNational(tz: string, cityOfBallotBox: string, numBallotBox: string): Observable<National> {
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
    return this.http.put(`http://localhost:52818/api/National/PutVotersInFaction/${idFaction}`, { idFaction }, {});
  }

  //שינוי שדה הבוחר-לבחר
  changeFieldIsChoose(idVoter: string) {
    return this.http.put(`http://localhost:52818/api/Managers/PutFieldIsChoose/${idVoter}`, { idVoter }, {});
  }

  //הוספת קול לעיר של הבוחר
  addVoteToCity(cityId:number)
  {
    return this.http.put(`http://localhost:52818/api/City/PutNowCountValidInCity/${cityId}`, { cityId }, {});
  }
}