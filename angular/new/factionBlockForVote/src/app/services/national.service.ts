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
  tz: string;

  constructor(private http: HttpClient) { }
  //הוספת קול למפלגה שנלחצה
  addVoteToFaction(idFaction: number) {
    return this.http.get(`http://localhost:60289/api/National/PutVotersInFaction/${idFaction}`);
  }

  //בדיקה האם הוא קיים ברשימת המאושרים
  checkIsExistNational(tzNational: string) {
    debugger;
    return this.http.get(`http://localhost:60289/api/National/checkIsExistNational/${tzNational}`);
  }

  //הסרת אזרח מהאוסף
  deleteNationalByTz(tzNational: string) {
    debugger;
    return this.http.delete(`http://localhost:60289/api/National/deleteTzNationalToList/${tzNational}`);
  }
  //שמירת תעודת זהות של אזרח
  savaNational(tzNational: string) {
    this.tz = tzNational;
  }
  //החזרת התעודת זהות של האזרח
  getNational() {
    return this.tz;
  }
}