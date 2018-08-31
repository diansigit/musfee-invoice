import {
  Routes,
  RouterModule
} from '@angular/router';
import { ROLE } from '../../app.constant';
import { ClassroomComponent } from './classroom.component';

const routes: Routes = [{
  path: 'classroom',
  component: ClassroomComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  }
}];

export const ClassroomRoutes = RouterModule.forChild(routes);
