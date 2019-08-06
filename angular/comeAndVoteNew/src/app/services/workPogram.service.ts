import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voting } from '../classes/voting';

@Injectable({
  providedIn: 'root'
})
export class WorkPogramService {
  voting: Voting;

  constructor(public httpClient: HttpClient) {}

  // getTimeVote() {
  //  return this.httpClient.get('http://localhost:60289/api/getTimeVote');
  // }
}