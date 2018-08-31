import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AccountRoutes } from './account.routing';
import { CheckinComponent } from './checkin/checkin.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    AccountRoutes,
    SharedModule
  ],
  declarations: [
    CheckinComponent,
    LoginComponent,
    ProfileComponent
  ]
})
export class AccountModule { }
