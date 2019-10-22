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
import { FinishVoteComponent } from './components/finishVote/finishVote.component';
import { AllFactionsComponent } from './components/all-factions/all-factions.component';
/// import { FinalResulsFactionsComponent } from './components/final-resuls-factions/final-resuls-factions.component';
 import { StaticDayVotersCityComponent } from './components/static-day-voters-city/static-day-voters-city.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
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
    ]
  },
  {
    path: 'home',
    component: LogInToSiteComponent,
  },

  {
    path: 'openHeadManager',//פתיחת הפונקציונאליות של המנהל הראשי
    component: HeadManagerComponent,
    children: [
      {
        path: 'cityManagerList',//פתיחת הפונקציונאליות של המנהל עיר
        component: CityManagerListComponent,
      },
      {
        path: 'openAgreeFaction',//פתיחת הקומפוננטה של פתיחת מפלגות
        component: AgreeFactinsComponent,
      },
      {
        path: 'allFactions',
        component: AllFactionsComponent,
      },
      {
        path: 'openTimeVoting',//פתיחת הקומפוננטה של הכנסת שמני פתיחת וסגירת קלפיות 
        component: TimeVotingComponent,
      },
    ]
  },
  {
    path: 'openCityManager',//פתיחת הפונקציונאליות של המנהל עיר
    component: CityManagerComponent,
    children: [
      {
        path: 'ballotBoxManagerList',
        component: BallotBoxManagerListComponent,
      },
    ]
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
    path: 'finishVote',
    component: FinishVoteComponent,
  },

  // {
  //   path: 'finalResultFaction',
  //   component: FinalResulsFactionsComponent,
  // },
  {
    path: 'StaticDayVotersCity',
    component: StaticDayVotersCityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };