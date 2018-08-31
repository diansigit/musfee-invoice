import { Routes, RouterModule } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ROLE } from '../../app.constant';

const routes: Routes = [
  {
    path: 'account/checkin',
    component: CheckinComponent,
    data: {
      roles: [
        ROLE.ADMIN,
        ROLE.OWNER,
        ROLE.TENTOR,
        ROLE.STUDENT
      ]
    }
  },
  {
    path: 'account/login',
    component: LoginComponent
  },
  {
    path: 'account/profile',
    component: ProfileComponent,
    data: {
      roles: [
        ROLE.ADMIN,
        ROLE.OWNER,
        ROLE.TENTOR,
        ROLE.STUDENT
      ]
    }
  }
];

export const AccountRoutes = RouterModule.forChild(routes);
