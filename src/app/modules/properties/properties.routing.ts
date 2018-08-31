import { Routes, RouterModule } from '@angular/router';
import { ROLE } from '../../app.constant';
import { PropertiesComponent } from './properties.component';

const routes: Routes = [{
  path: 'setting',
  component: PropertiesComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  },
  children: [{
    path: ':tab',
    component: PropertiesComponent,
    data: {
      roles: [
        ROLE.ADMIN,
        ROLE.OWNER
      ]
    }
  }]
}];

export const PropertiesRoutes = RouterModule.forChild(routes);
