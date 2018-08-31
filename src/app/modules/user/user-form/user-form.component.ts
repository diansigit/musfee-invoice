import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ROLE_OPTS } from 'src/app/app.constant';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public formUser: FormGroup;
  public dataUser: any;
  public roleOpts = ROLE_OPTS;

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef
  ) { }

  initFormUser() {
    if (this.dataUser) {
      this.formUser = this.formBuilder.group({
        usertype: [''],
        name: [this.dataUser.name, Validators.required],
        phone: [this.dataUser.phone, Validators.required],
        qrcode: [this.dataUser.qrcode, Validators.required],
        role: [this.dataUser.role, Validators.required],
        username: [{ value: this.dataUser.username, disabled: true }],
        password: ['', Validators.required]
      });
    } else {
      this.formUser = this.formBuilder.group({
        usertype: [''],
        name: ['', Validators.required],
        phone: ['', Validators.required],
        qrcode: ['', Validators.required],
        username: ['', Validators.required],
        role: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  }

  ngOnInit() {
    this.initFormUser();
  }

  onFormUserSubmit(user) {
    console.log(user);
    this.modalRef.hide();
  }

}
