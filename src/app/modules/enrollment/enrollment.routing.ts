import { Routes, RouterModule } from '@angular/router';
import { ROLE } from '../../app.constant';
import { EnrollmentComponent } from './enrollment.component';

const routes: Routes = [{
  path: 'enrollment',
  component: EnrollmentComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  }
}, ];

export const EnrollmentRoutes = RouterModule.forChild(routes);
