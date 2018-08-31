import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-property-course-form',
  templateUrl: './property-course-form.component.html',
  styleUrls: ['./property-course-form.component.scss']
})
export class PropertyCourseFormComponent implements OnInit {

  formCourse: FormGroup;
  dataCourse: any;
  modalTitle: string;

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    if (this.dataCourse) {
      this.modalTitle = 'Ubah mata pelajaran';
      this.formCourse = this.formBuilder.group({
        uuid: [this.dataCourse.uuid],
        name: [this.dataCourse.name, Validators.required],
        note: [this.dataCourse.note]
      });
    } else {
      this.modalTitle = 'Tambah mata pelajaran';
      this.formCourse = this.formBuilder.group({
        name: ['', Validators.required],
        note: ['']
      });
    }
  }

  onFormCourseSubmit(student) {
    console.log(student);
    this.modalRef.hide();
  }


}
