import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { WorkPogramService } from './services/workPogram.service';
import { environment } from 'src/environments/environment.prod';
import { working } from 'src/environments/environment';
import { Voting } from './classes/voting';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {

  constructor(public workPogramService: WorkPogramService) { }

  canActivate() {
    if(working.open)
    return true;
    else return false;
  }
}