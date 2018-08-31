import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '../shared/services';
import { BASE_API_URL } from '../app.constant';

export const endpoint = {
  checkin: BASE_API_URL + '',
  login: BASE_API_URL + '',
  logout: BASE_API_URL + ''
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public isAuthenticated: boolean;
  public storeKey: string;
  public token: any;
  public userinfo: any;

  constructor(
    private httpSvc: HttpService
  ) {
    this.storeKey = window.location.origin;

    const currentUser = JSON.parse(localStorage.getItem(this.storeKey + '_' + 'XT_currentUser'));
    this.userinfo = currentUser;
    this.token = currentUser && currentUser.token;
    this.isAuthenticated = currentUser && currentUser.token ? true : false;
  }

  checkin(user: any) {
    return this.httpSvc.put(endpoint.checkin, user);
  }

  login(user: any) {
    return this.httpSvc.post(endpoint.login, user);
  }

  logout() {
    localStorage.removeItem(this.storeKey + '_' + 'XT_currentUser');
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = localStorage.getItem('currentUser');
    const dataRoles = route.data['roles'] as Array<string>;

    if (currentUser) {
      const roles = JSON.parse(currentUser).roles;
      // console.log(dataRoles);

      if (roles && dataRoles) {
        let permission = false;
        roles.forEach(role => {
          // console.log(dataRoles.indexOf(role.code));
          if (dataRoles.indexOf(role.code) !== -1) {
            permission = true;
          }
        });

        if (permission) {
            // user has access
            return true;
        } else {
          // user has not access
          console.log('User has not access');
          this.router.navigate(['/error-403']);
          return false;
        }
      } else {
        // logged in so return true
        return true;
      }
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
