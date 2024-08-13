import { Routes } from '@angular/router';
import { PositionIncrementComponent } from '../components/position-increment/position-increment.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'position-increment', component: PositionIncrementComponent },
];
