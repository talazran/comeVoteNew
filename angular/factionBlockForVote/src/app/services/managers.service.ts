import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Managers } from '../classes/managers';
import { National } from '../classes/national';
import { City } from '../classes/city';
import { disableBindings } from '@angular/core/src/render3';
import { Factions } from '../classes/factions';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {
 
  constructor(private http:HttpClient) {}

  //צריך
  //החזרת מערך המפלגות
  getAllFaction():Observable<Factions[]>
  {
    return this.http.get<Factions[]>(`http://localhost:60289/api/Managers/allFactions`);
  }
}