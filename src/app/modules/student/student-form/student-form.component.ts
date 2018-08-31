import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  public courseOpts: Array<any>;
  public formStudent: FormGroup;
  public dataStudent: any;
  public modalTitle: string;

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef
  ) { }

  initFormStudent() {

    if (this.dataStudent) {
      this.modalTitle = 'Ubah siswa';
      this.formStudent = this.formBuilder.group({
        name: [this.dataStudent.name, Validators.required],
        address: [this.dataStudent.address, Validators.required],
        phone: [this.dataStudent.phone, Validators.required],
        parent_name: [this.dataStudent.parent_name, Validators.required],
        parent_phone: [this.dataStudent.parent_phone, Validators.required],
        qrcode: [this.dataStudent.qrcode, Validators.required]
      });
    } else {
      this.modalTitle = 'Tambah siswa';
      this.formStudent = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        parent_name: ['', Validators.required],
        parent_phone: ['', Validators.required],
        qrcode: ['', Validators.required]
      });
    }
  }

  ngOnInit() {
    this.initFormStudent();
  }

  onFormStudentSubmit(student) {
    console.log(student);
    this.modalRef.hide();
  }

}
