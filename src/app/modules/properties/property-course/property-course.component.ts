import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PropertiesService, PropertyType } from '../../../services';
import { Page } from '../../../shared/components/data-table/data-table.component';
import { PropertyCourseFormComponent } from './property-course-form/property-course-form.component';

@Component({
  selector: 'app-property-course',
  templateUrl: './property-course.component.html',
  styleUrls: ['./property-course.component.scss']
})
export class PropertyCourseComponent implements OnInit {

  public columns: Array<any> = [];
  public modalRef: BsModalRef;
  public page: Page;
  public rows = new Array<any>();

  constructor(
    private modalSvc: BsModalService,
    private propertiesSvc: PropertiesService
  ) { }

  initGetRows() {
    this.propertiesSvc.read(PropertyType.COURSE).subscribe(response => {
      const courses = response;
      courses.forEach(course => {
        course.action = {
          edit: true,
          delete: true
        };
      });
      this.rows = courses;
    });
  }

  initSetColumns() {
    this.columns = [
      {
        name: 'No.',
        type: 'number'
      },
      {
        name: 'Nama',
        prop: 'name'
      },
      {
        name: 'Keterangan',
        prop: 'note'
      }
    ];
 }


  ngOnInit() {
    this.initGetRows();
    this.initSetColumns();
  }

  onBtnCreateClick() {
    this.modalRef = this.modalSvc.show(PropertyCourseFormComponent);
  }

  onBtnUpdateClick($event) {

  }

  onBtnViewClick($event) {

  }

  onBtnDeleteClick($event) {

  }

}
