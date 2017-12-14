import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];


// const routes: Routes = [{
//   path: 'schedules',
//   children: [
//     { path: '', component: TabbedScheduleListComponent, children: [
//       { path: '', redirectTo: 'scheduled-list', pathMatch: 'full' },
//       { path: 'requested-schedule-list', component: RequestedScheduleListComponent },
//       { path: 'scheduled-list', component: ScheduledListComponent }
//     ]}
//   ]
// }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
