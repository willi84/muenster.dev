import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OverviewComponent} from './overview/overview.component';
import {SubmitComponent} from './submit/submit.component';
import {MatchComponent} from './match/match.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home',  redirectTo: 'WelcomeComponent', pathMatch: 'full'},
  {path: 'submit', component: SubmitComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'match', component: MatchComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}