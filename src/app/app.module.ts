import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

// Modules
import {
  AccountModule,
  ClassroomModule,
  DashboardModule,
  EnrollmentModule,
  PropertiesModule,
  ReportModule,
  StudentModule,
  TentorModule,
  UserModule
} from './modules';

// Service
import {
  AccountService,
  ClassroomService,
  DashboardService,
  PropertiesService,
  ReportService,
  StudentService,
  TentorService,
  UserService
} from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutes,
    AccountModule,
    BrowserModule,
    ClassroomModule,
    DashboardModule,
    EnrollmentModule,
    PropertiesModule,
    ReportModule,
    RouterModule,
    StudentModule,
    TentorModule,
    UserModule,
    SharedModule.forRoot()
  ],
  providers: [
    AccountService,
    ClassroomService,
    DashboardService,
    PropertiesService,
    ReportService,
    StudentService,
    TentorService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
