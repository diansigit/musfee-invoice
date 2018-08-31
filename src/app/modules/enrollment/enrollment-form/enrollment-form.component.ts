import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PropertiesService, PropertyType } from '../../../services';
import { CLASS_GRADE_OPTS, COURSE_TYPE_OPTS } from '../../../app.constant';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.scss']
})
export class EnrollmentFormComponent implements OnInit {

  public courseOpts: Array<any>;
  public formEnrollment: FormGroup;
  public classGradeOpts = CLASS_GRADE_OPTS;
  public classGradeOptsSelected = 1;
  public dataEnrollment: any;
  public modalTitle: string;
  public programOpts = COURSE_TYPE_OPTS;
  public programOptsSelected = 'pack';
  public searchOpts = [
    { label: 'Nama', value: 'name' },
    { label: 'No. HP', value: 'phone'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private propertiesSvc: PropertiesService,
    private router: Router,
    public modalRef: BsModalRef
  ) { }

  initFormStudent() {

    if (this.dataEnrollment) {
      this.modalTitle = 'Ubah pendaftar';
      this.programOptsSelected = this.dataEnrollment.program;

      this.formEnrollment = this.formBuilder.group({
        name: [this.dataEnrollment.name, Validators.required],
        school: [this.dataEnrollment.school, Validators.required],
        class: [this.dataEnrollment.class, Validators.required],
        program: [this.programOptsSelected, Validators.required],
        courses: this.formBuilder.array([])
      });
    } else {
      this.modalTitle = 'Tambah pendaftar';
      this.formEnrollment = this.formBuilder.group({
        name: ['', Validators.required],
        school: ['', Validators.required],
        class: ['', Validators.required],
        program: [this.programOptsSelected, Validators.required],
        courses: this.formBuilder.array([])
      });
    }
  }

  initGetCourses() {
    this.courseOpts = [];
    this.propertiesSvc
      .read(PropertyType.COURSE)
      .subscribe(response => {
        response.forEach(value => {
          this.courseOpts.push({
            label: value.name,
            value: value.uuid
          });
        });
      });
  }

  ngOnInit() {
    this.initGetCourses();
    this.initFormStudent();
  }

  onBtnCreateClick() {
    this.router.navigate(['/student', {action: 'add'}]);
  }

  onFormStudentSubmit(student) {
    console.log(student);
    this.modalRef.hide();
  }

  onOptionsTypeSelected($event) {
    console.log($event);
    this.formEnrollment.controls['program'].setValue($event);
  }

}
