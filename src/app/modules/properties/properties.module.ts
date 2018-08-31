import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PropertiesComponent } from './properties.component';
import { PropertiesRoutes } from './properties.routing';
import { PropertyCostComponent } from './property-cost/property-cost.component';
import { PropertyCourseComponent } from './property-course/property-course.component';
import { PropertyDayComponent } from './property-day/property-day.component';
import { PropertyQrcodeComponent } from './property-qrcode/property-qrcode.component';
import { PropertyRoomComponent } from './property-room/property-room.component';
import { PropertySessionComponent } from './property-session/property-session.component';
import { PropertyCostFormComponent } from './property-cost/property-cost-form/property-cost-form.component';
import { PropertyCourseFormComponent } from './property-course/property-course-form/property-course-form.component';
import { PropertyQrcodeFormComponent } from './property-qrcode/property-qrcode-form/property-qrcode-form.component';
import { PropertyRoomFormComponent } from './property-room/property-room-form/property-room-form.component';
import { PropertySessionFormComponent } from './property-session/property-session-form/property-session-form.component';

@NgModule({
  imports: [
    PropertiesRoutes,
    SharedModule
  ],
  declarations: [
    PropertiesComponent,
    PropertyCostComponent,
    PropertyCostFormComponent,
    PropertyCourseComponent,
    PropertyCourseFormComponent,
    PropertyDayComponent,
    PropertyQrcodeComponent,
    PropertyQrcodeFormComponent,
    PropertyRoomComponent,
    PropertyRoomFormComponent,
    PropertySessionComponent,
    PropertySessionFormComponent
  ],
  entryComponents: [
    PropertyCostFormComponent,
    PropertyCourseFormComponent,
    PropertyQrcodeFormComponent,
    PropertyRoomFormComponent,
    PropertySessionFormComponent
  ]
})
export class PropertiesModule { }
