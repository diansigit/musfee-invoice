import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentService } from '../../services';
import { Page } from '../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public columns: Array<any> = [];
  public modalRef: BsModalRef;
  public page: Page;
  public rows = new Array<any>();

  constructor(
    private activateRoute: ActivatedRoute,
    private modalSvc: BsModalService,
    private studentSvc: StudentService
  ) { }

  initGetRows() {
    this.studentSvc.read().subscribe(response => {
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
        name: 'No. HP',
        prop: 'phone'
      },
      {
        name: 'No. HP orang tua',
        prop: 'parent_phone'
      }
    ];
 }


  ngOnInit() {
    this.initGetRows();
    this.initSetColumns();

    this.activateRoute.params.subscribe(params => {
      console.log(params.action);
      if (params.action === 'add') {
        this.modalRef = this.modalSvc.show(StudentFormComponent, { class: 'modal-lg' });
      }
    });
  }

  onBtnCreateClick() {
    this.modalRef = this.modalSvc.show(StudentFormComponent, { class: 'modal-lg' });
  }

  onBtnUpdateClick($event) {

  }

  onBtnViewClick($event) {

  }

  onBtnDeleteClick($event) {

  }

}
