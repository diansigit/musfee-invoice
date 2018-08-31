import { Routes, RouterModule } from '@angular/router';
import { ROLE } from '../../app.constant';
import { TentorComponent } from './tentor.component';

const routes: Routes = [{
  path: 'tentor',
  component: TentorComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  }
}];

export const TentorRoutes = RouterModule.forChild(routes);
