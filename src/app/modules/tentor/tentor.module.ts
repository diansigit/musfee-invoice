import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TentorComponent } from './tentor.component';
import { TentorRoutes } from './tentor.routing';
import { TentorFormComponent } from './tentor-form/tentor-form.component';
import { TentorViewComponent } from './tentor-view/tentor-view.component';

@NgModule({
  imports: [
    SharedModule,
    TentorRoutes
  ],
  declarations: [
    TentorComponent,
    TentorFormComponent,
    TentorViewComponent
  ],
  entryComponents: [
    TentorFormComponent,
    TentorViewComponent
  ]
})
export class TentorModule { }
