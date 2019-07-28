import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInToSiteComponent } from './components/log-in-to-site/log-in-to-site.component';
import { HeadManagerComponent } from './components/head-manager/head-manager.component';
import { CityManagerComponent } from './components/city-manager/city-manager.component';
import { BallotBoxManagerComponent } from './components/ballot-box-manager/ballot-box-manager.component';
import { SingleVoterComponent } from './components/single-voter/single-voter.component';
import { AgreeFactinsComponent } from './components/agree-factins/agree-factins.component';
import { HomeComponent } from './components/home/home.component';
import { TimeVotingComponent } from './components/time-voting/time-voting.component';
import { CityManagerListComponent } from './components/city-manager-list/city-manager-list.component';
import { BallotBoxManagerListComponent } from './components/ballot-box-manager-list/ballot-box-manager-list.component';
import { FinalResulsFactionsComponent } from './components/final-resuls-factions/final-resuls-factions.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
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
    path: 'openCityManager',//פתיחת הפונקציונאליות של המנהל עיר
    component: CityManagerComponent,
  },
  {
    path: 'cityManagerList',//פתיחת הפונקציונאליות של המנהל עיר
    component: CityManagerListComponent,
  },
  {
    path: 'openBallotBoxManager',//פתיחת הפונקציונאליות של המנהל קלפי
    component: BallotBoxManagerComponent,
  },
  {
    path: 'openSingleVoter',//קומפוננט המציג אזרח בודד
    component: SingleVoterComponent,
  },
  {
    path: 'returnToAllNationals',//חזרה לדף האזרחים
    component: BallotBoxManagerComponent,
  },
  {
    path: 'returnToAllNationals',//חזרה לדף האזרחים
    component: BallotBoxManagerComponent,
  },
  {
    path: 'addManager',//הוספת מנהל עיר
    component: BallotBoxManagerComponent,
  },
  {
    path: 'openAgreeFaction',//פתיחת הקומפוננטה של פתיחת מפלגות
    component: AgreeFactinsComponent,
  },
  {
    path: 'openTimeVoting',//פתיחת הקומפוננטה של הכנסת שמני פתיחת וסגירת קלפיות 
    component: TimeVotingComponent,
  },
  {
    path: 'ballotBoxManagerList',
    component: BallotBoxManagerListComponent,
  },
  {
    path: 'finalResultFaction',
    component: FinalResulsFactionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
