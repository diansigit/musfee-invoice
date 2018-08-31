import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-property-session-form',
  templateUrl: './property-session-form.component.html',
  styleUrls: ['./property-session-form.component.scss']
})
export class PropertySessionFormComponent implements OnInit {


  formSession: FormGroup;
  dataSession: any;
  modalTitle: string;
  myTime = new Date();

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    if (this.dataSession) {
      this.modalTitle = 'Ubah sesi';
      this.formSession = this.formBuilder.group({
        uuid: [this.dataSession.uuid],
        name: [this.dataSession.name, Validators.required],
        time_start: [new Date(this.dataSession.time_start), Validators.required],
        time_end: [new Date(this.dataSession.time_end), Validators.required],
        note: [this.dataSession.note]
      });
    } else {
      this.modalTitle = 'Tambah sesi';
      this.formSession = this.formBuilder.group({
        name: ['', Validators.required],
        time_start: [new Date(), Validators.required],
        time_end: [new Date(), Validators.required],
        note: ['']
      });
    }
  }

  onFormSessionSubmit(student) {
    console.log(student);
    this.modalRef.hide();
  }
}
