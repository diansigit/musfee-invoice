import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TentorService } from '../../services';
import { Page } from '../../shared/components/data-table/data-table.component';
import { TentorFormComponent } from './tentor-form/tentor-form.component';

@Component({
  selector: 'app-tentor',
  templateUrl: './tentor.component.html',
  styleUrls: ['./tentor.component.scss']
})
export class TentorComponent implements OnInit {

  public columns: Array<any> = [];
  public modalRef: BsModalRef;
  public page: Page;
  public rows = new Array<any>();

  constructor(
    private modalSvc: BsModalService,
    private tentorSvc: TentorService
  ) { }

  initGetRows() {
    this.tentorSvc.read().subscribe(response => {
      const tentors = response;
      tentors.forEach(tentor => {
        tentor.action = {
          edit: true,
          detail: true,
          delete: true
        };
      });
      this.rows = tentors;
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
      }
    ];
 }


  ngOnInit() {
    this.initGetRows();
    this.initSetColumns();
  }

  onBtnCreateClick() {
    this.modalRef = this.modalSvc.show(TentorFormComponent, { class: 'modal-lg' });
  }

  onBtnUpdateClick($event) {

  }

  onBtnViewClick($event) {

  }

  onBtnDeleteClick($event) {

  }

}
