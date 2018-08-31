import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { StudentComponent } from './student.component';
import { StudentRoutes } from './student.routing';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentViewComponent } from './student-view/student-view.component';

@NgModule({
  imports: [
    StudentRoutes,
    SharedModule
  ],
  declarations: [
    StudentComponent,
    StudentFormComponent,
    StudentViewComponent
  ],
  entryComponents: [
    StudentFormComponent,
    StudentViewComponent
  ]
})
export class StudentModule { }
