import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactionBlockForVoteComponent } from './components/faction-block-for-vote/faction-block-for-vote.component';

const routes: Routes = [
  {
    path:'openFactionBlockForVote',
    component:FactionBlockForVoteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
