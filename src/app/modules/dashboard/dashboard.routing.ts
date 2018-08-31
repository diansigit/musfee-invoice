import { Routes, RouterModule } from '@angular/router';
import { ROLE } from '../../app.constant';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  }
}];

export const DashboardRoutes = RouterModule.forChild(routes);
