import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ClassroomComponent } from './classroom.component';
import { ClassroomRoutes } from './classroom.routing';
import { ClassroomFormComponent } from './classroom-form/classroom-form.component';
import { ClassroomViewComponent } from './classroom-view/classroom-view.component';

@NgModule({
  imports: [
    ClassroomRoutes,
    SharedModule
  ],
  declarations: [
    ClassroomComponent,
    ClassroomFormComponent,
    ClassroomViewComponent
  ],
  entryComponents: [
    ClassroomViewComponent
  ]
})
export class ClassroomModule { }
