import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutes
  ],
  declarations: [
    UserComponent,
    UserFormComponent
  ],
  entryComponents: [
    UserFormComponent
  ]
})
export class UserModule { }
