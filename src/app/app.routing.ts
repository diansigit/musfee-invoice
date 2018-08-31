import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: '/account/login'
  },
  {
    path: 'dashboard',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'enrollment',
    redirectTo: '/enrollment',
    pathMatch: 'full'
  },
  {
    path: 'student',
    redirectTo: '/student',
    pathMatch: 'full'
  },
  {
    path: 'tentor',
    redirectTo: '/tentor',
    pathMatch: 'full'
  },
  {
    path: 'setting',
    redirectTo: '/setting',
    pathMatch: 'full'
  },
  {
    path: 'classroom',
    redirectTo: '/classroom',
    pathMatch: 'full'
  },
  {
    path: 'report',
    redirectTo: '/report',
    pathMatch: 'full'
  },
  {
    path: 'user',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
