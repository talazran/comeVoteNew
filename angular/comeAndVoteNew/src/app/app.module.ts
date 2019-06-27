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
import {FormsModule} from '@angular/forms';
import { FactionBlockForVoteComponent } from './components/faction-block-for-vote/faction-block-for-vote.component';
import { ErrorComponent } from './components/error/error.component';
import { SingleVoterComponent } from './components/single-voter/single-voter.component';
import { AgreeFactinsComponent } from './components/agree-factins/agree-factins.component';
import { TimeVotingComponent } from './components/time-voting/time-voting.component';

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    HeadManagerComponent,
    CityManagerComponent,
    BallotBoxManagerComponent,
    LogInToSiteComponent,
    FactionBlockForVoteComponent,
    ErrorComponent,
    SingleVoterComponent,
    AgreeFactinsComponent,
    TimeVotingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }