import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInToSiteComponent } from './components/log-in-to-site/log-in-to-site.component';
import { HeadManagerComponent } from './components/head-manager/head-manager.component';
import { CityManagerComponent } from './components/city-manager/city-manager.component';
import { BallotBoxManagerComponent } from './components/ballot-box-manager/ballot-box-manager.component';
import { FactionBlockForVoteComponent } from './components/faction-block-for-vote/faction-block-for-vote.component';
import { SingleVoterComponent } from './components/single-voter/single-voter.component';
import { AgreeFactinsComponent } from './components/agree-factins/agree-factins.component';
import { HomeComponent } from './components/home/home.component';
import { TimeVotingComponent } from './components/time-voting/time-voting.component';
import { CityManagerListComponent } from './components/city-manager-list/city-manager-list.component';
import { FinishVoteComponent } from './components/finishVote/finishVote.component';
import { AllFactionsComponent } from './components/all-factions/all-factions.component';
import { BallotBoxManagerListComponent } from './components/ballot-box-manager-list/ballot-box-manager-list.component';
import { CanActivateAuthGuard } from './CanActivateAuthGuard ';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  {
    path: 'finishVote',//
    component:FinishVoteComponent,
  },
 {path:"",component:HomeComponent,children:[
  {
    path: 'login',
    component: LogInToSiteComponent,
  },
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
    path: 'allFactions',
    component:AllFactionsComponent,
  },
  {
    path: 'ballotBoxManagerList',
    component: BallotBoxManagerListComponent,
  }
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
