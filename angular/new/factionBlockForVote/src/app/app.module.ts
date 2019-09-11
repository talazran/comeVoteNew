import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes,RouterModule}from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FactionBlockForVoteComponent } from './components/faction-block-for-vote/faction-block-for-vote.component';
import { HomeVoterComponent } from './components/home-voter/home-voter.component';
import { EndVotingComponent } from './components/end-voting/end-voting.component';

@NgModule({
  declarations:[
    AppComponent,
    FactionBlockForVoteComponent,
    HomeVoterComponent,
    EndVotingComponent,
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