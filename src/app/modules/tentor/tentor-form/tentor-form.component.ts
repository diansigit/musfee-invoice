import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PropertiesService, PropertyType } from '../../../services';

@Component({
  selector: 'app-tentor-form',
  templateUrl: './tentor-form.component.html',
  styleUrls: ['./tentor-form.component.scss']
})
export class TentorFormComponent implements OnInit {

  public courseOpts: Array<any>;
  public formTentor: FormGroup;
  public dataTentor: any;
  public modalTitle: string;

  constructor(
    private formBuilder: FormBuilder,
    private propertiesSvc: PropertiesService,
    public modalRef: BsModalRef
  ) { }

  initFormTentor() {
    if (this.dataTentor) {
      this.modalTitle = 'Ubah tentor';
      this.formTentor = this.formBuilder.group({
        name: [this.dataTentor.name, Validators.required],
        address: [this.dataTentor.address, Validators.required],
        phone: [this.dataTentor.phone, Validators.required],
        courses: this.formBuilder.array([]),
        qrcode: [this.dataTentor.qrcode, Validators.required]
      });
    } else {
      this.modalTitle = 'Tambah tentor';
      this.formTentor = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        courses: this.formBuilder.array([]),
        qrcode: ['', Validators.required]
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
    this.initFormTentor();
  }

  onFormTentorSubmit(student) {
    console.log(student);
    this.modalRef.hide();
  }

  onOptionsCoursesSelected($event) {
    console.log($event);
    this.formTentor.controls['courses'].setValue($event);
  }
}
