import { Observable, forkJoin } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { DAYS, DAY_OPTS } from '../../app.constant';
import { ClassroomService } from '../../services';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit, AfterViewInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  dayOpts = DAY_OPTS;
  rooms = [];
  sessions = [];

  constructor(
    private classroomSvc: ClassroomService
  ) { }

  ngOnInit() {
    this.initGetHeaderColumn();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.staticTabs.tabs[0].active = true;
    }, 200);
  }

  initGetHeaderColumn() {
    forkJoin([
      this.classroomSvc.getSessions(),
      this.classroomSvc.getRooms(),
      this.classroomSvc.read()
    ]).subscribe((response: Array<any>) => {
      console.log(response);
      if (response.length > 1) {
        this.sessions = response[0];
        this.rooms = response[1];
      }
    });
  }

  onBtnCreateClick() {

  }

  onBtnViewClick() {

  }

  onTabSelect($event, day) {
    console.log($event);
    console.log(day);
  }

  onTableGridClick(day, session, room) {
    console.log(day);
    console.log(session);
    console.log(room);
  }

  showTableGridContent(day, session, room) {
    return '<h5>Matematika</h5>';
  }

}
