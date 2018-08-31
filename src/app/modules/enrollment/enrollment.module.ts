import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EnrollmentComponent } from './enrollment.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';
import { EnrollmentViewComponent } from './enrollment-view/enrollment-view.component';
import { EnrollmentRoutes } from './enrollment.routing';

@NgModule({
  imports: [
    EnrollmentRoutes,
    SharedModule
  ],
  declarations: [
    EnrollmentComponent,
    EnrollmentFormComponent,
    EnrollmentViewComponent
  ],
  entryComponents: [
    EnrollmentFormComponent,
    EnrollmentViewComponent
  ]
})
export class EnrollmentModule { }
