import { Routes, RouterModule } from '@angular/router';
import { ROLE } from '../../app.constant';
import { StudentComponent } from './student.component';

const routes: Routes = [{
  path: 'student',
  component: StudentComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  },
  children: [
    {
      path: ':action',
      component: StudentComponent,
      data: {
        roles: [
          ROLE.ADMIN,
          ROLE.OWNER
        ]
      },
    }
  ]
}];

export const StudentRoutes = RouterModule.forChild(routes);
