import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EnrollmentService } from '../../services';
import { Page } from '../../shared/components/data-table/data-table.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  public columns: Array<any> = [];
  public modalRef: BsModalRef;
  public page: Page;
  public rows = new Array<any>();

  constructor(
    private modalSvc: BsModalService,
    private enrollmentSvc: EnrollmentService
  ) { }

  initGetRows() {
    this.enrollmentSvc.read().subscribe(response => {
      const students = response;
      students.forEach(student => {
        student.action = {
          edit: true,
          detail: true,
          delete: true
        };
      });
      this.rows = students;
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
        name: 'Kelas',
        prop: 'class'
      },
      {
        name: 'Sekolah',
        prop: 'school'
      },
      {
        name: 'Program',
        prop: 'program',
        type: 'course_type'
      }
    ];
 }


  ngOnInit() {
    this.initGetRows();
    this.initSetColumns();
  }

  onBtnCreateClick() {
    this.modalRef = this.modalSvc.show(EnrollmentFormComponent, { class: 'modal-lg' });
  }

  onBtnUpdateClick($event) {

  }

  onBtnViewClick($event) {

  }

  onBtnDeleteClick($event) {

  }

}
