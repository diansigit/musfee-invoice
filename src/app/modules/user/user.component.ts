import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private modalSvc: BsModalService) { }

  ngOnInit() {
  }

  onCreateBtnClick() {
    this.modalRef = this.modalSvc.show(UserFormComponent);
  }

}
