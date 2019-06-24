import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactionBlockForVoteComponent } from './components/faction-block-for-vote/faction-block-for-vote.component';
import { HomeVoterComponent } from './components/home-voter/home-voter.component';
  
const routes: Routes = [
  {
    path:'openFactionBlockForVote',
    component:FactionBlockForVoteComponent,
  },
  {
    path:'returnHomePage',
    component:HomeVoterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
