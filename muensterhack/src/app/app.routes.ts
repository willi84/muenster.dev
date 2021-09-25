import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OverviewComponent} from './overview/overview.component';
import {SubmitComponent} from './submit/submit.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}