import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInToSiteComponent } from './components/log-in-to-site/log-in-to-site.component';
import { HeadManagerComponent } from './components/head-manager/head-manager.component';
import { CityManagerComponent } from './components/city-manager/city-manager.component';
import { BallotBoxManagerComponent } from './components/ballot-box-manager/ballot-box-manager.component';
import { FactionBlockForVoteComponent } from './components/faction-block-for-vote/faction-block-for-vote.component';
import { SingleVoterComponent } from './components/single-voter/single-voter.component';
import { AgreeFactinsComponent } from './components/agree-factins/agree-factins.component';
import { CityManagerListComponent } from './components/city-manager-list/city-manager-list.component';
const routes: Routes = [
  {
    path: 'headManager',
    component: LogInToSiteComponent,
  },
  {
    path: 'cityManager',
    component: LogInToSiteComponent,
  },
  {
    path: 'ballotBoxManager',
    component: LogInToSiteComponent,
  },
  {
    path: 'openHeadManager',//פתיחת הפונקציונאליות של המנהל הראשי
    component: HeadManagerComponent,
  },
  {
    path: 'cityManagerList',//פתיחת הפונקציונאליות של המנהל הראשי
    component: CityManagerListComponent,
  },
  {
    path: 'openCityManager',//פתיחת הפונקציונאליות של המנהל עיר
    component: CityManagerComponent,
  },
  {
    path: 'openBallotBoxManager',//פתיחת הפונקציונאליות של המנהל קלפי
    component: BallotBoxManagerComponent,
  },
  {
    path: 'openFactionBlockForVote',//פתיחת המסך של בחירת האזרח
    component: FactionBlockForVoteComponent,
  },
  {
    path: 'openSingleVoter',//קומפוננט המציג אזרח בודד
    component: SingleVoterComponent,
  },
  // returnToAllNationals
  {
    path: 'returnToAllNationals',//חזרה לדף האזרחים
    component: BallotBoxManagerComponent,
  },
  // returnAllNational
   {
    path: 'returnToAllNationals',//חזרה לדף האזרחים
    component: BallotBoxManagerComponent,
  },
  {
    path: 'addManager/:numStatus',//הוספת מנהל עיר
    component: BallotBoxManagerComponent,
  },
  {
    path: 'openAgreeFaction',//פתיחת הקומפוננטה של פתיחת מפלגות
    component: AgreeFactinsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
