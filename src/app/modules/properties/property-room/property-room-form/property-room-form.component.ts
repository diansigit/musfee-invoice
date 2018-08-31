import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-property-room-form',
  templateUrl: './property-room-form.component.html',
  styleUrls: ['./property-room-form.component.scss']
})
export class PropertyRoomFormComponent implements OnInit {

  formRoom: FormGroup;
  dataRoom: any;
  modalTitle: string;

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    if (this.dataRoom) {
      this.modalTitle = 'Ubah ruang';
      this.formRoom = this.formBuilder.group({
        uuid: [this.dataRoom.uuid],
        name: [this.dataRoom.name, Validators.required],
        note: [this.dataRoom.note]
      });
    } else {
      this.modalTitle = 'Tambah ruang';
      this.formRoom = this.formBuilder.group({
        name: ['', Validators.required],
        note: ['']
      });
    }
  }

  onFormRoomSubmit(student) {
    console.log(student);
    this.modalRef.hide();
  }

}
