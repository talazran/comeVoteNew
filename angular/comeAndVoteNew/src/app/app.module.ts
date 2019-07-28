import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import { HeadManagerComponent } from './components/head-manager/head-manager.component';
import { CityManagerComponent } from './components/city-manager/city-manager.component';
import { BallotBoxManagerComponent } from './components/ballot-box-manager/ballot-box-manager.component';
import { LogInToSiteComponent } from './components/log-in-to-site/log-in-to-site.component';
import {Routes,RouterModule}from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleVoterComponent } from './components/single-voter/single-voter.component';
import { AgreeFactinsComponent } from './components/agree-factins/agree-factins.component';
import { TimeVotingComponent } from './components/time-voting/time-voting.component';
import { ManagersService } from './services/managers.service';
import { AgGridModule } from 'ag-grid-angular';
import { CityManagerListComponent } from './components/city-manager-list/city-manager-list.component';
import { ActionComponent } from './components/action/action.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCityManagerComponent } from './components/add-city-manager/add-city-manager.component';
import { EditCityManagerComponent } from './components/edit-city-manager/edit-city-manager.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BallotBoxManagerListComponent } from './components/ballot-box-manager-list/ballot-box-manager-list.component';
import { EditBallotBoxManagerComponent } from './components/edit-ballot-box-manager/edit-ballot-box-manager.component';
import { OkNationalComponent } from './components/ok-national/ok-national.component';
import { FinishVoteComponent } from './components/finishVote/finishVote.component';
import { AllFactionsComponent } from './components/all-factions/all-factions.component';
import { EditFactionComponent } from './components/edit-faction/edit-faction.component';
import { AddFactionComponent } from './components/add-faction/add-faction.component';
import { FactionBlockForVoteComponent } from './components/faction-block-for-vote/faction-block-for-vote.component';

        


@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    HeadManagerComponent,
    CityManagerComponent,
    BallotBoxManagerComponent,
    LogInToSiteComponent,
    CityManagerListComponent,
    SingleVoterComponent,
    AgreeFactinsComponent,
    TimeVotingComponent,
    ActionComponent,
    AddCityManagerComponent,
    EditCityManagerComponent,
    BallotBoxManagerListComponent,
    EditBallotBoxManagerComponent,
    OkNationalComponent,
    FinishVoteComponent,
    AllFactionsComponent,
    EditFactionComponent,
    AddFactionComponent,
    FactionBlockForVoteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AgGridModule.withComponents([ActionComponent]),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AngularFontAwesomeModule

  ],
  entryComponents:[AddCityManagerComponent,EditCityManagerComponent,EditFactionComponent],
  providers: [ManagersService],
  bootstrap: [AppComponent]
})
export class AppModule { }