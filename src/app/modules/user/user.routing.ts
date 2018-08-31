import { Routes, RouterModule } from '@angular/router';
import { ROLE } from '../../app.constant';
import { UserComponent } from './user.component';

const routes: Routes = [{
  path: 'user',
  component: UserComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  }
}];

export const UserRoutes = RouterModule.forChild(routes);
