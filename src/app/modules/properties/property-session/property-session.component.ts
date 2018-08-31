import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PropertiesService, PropertyType } from '../../../services';
import { Page } from '../../../shared/components/data-table/data-table.component';
import { PropertySessionFormComponent } from './property-session-form/property-session-form.component';

@Component({
  selector: 'app-property-session',
  templateUrl: './property-session.component.html',
  styleUrls: ['./property-session.component.scss']
})
export class PropertySessionComponent implements OnInit {

  public columns: Array<any> = [];
  public modalRef: BsModalRef;
  public page: Page;
  public rows = new Array<any>();

  constructor(
    private modalSvc: BsModalService,
    private propertiesSvc: PropertiesService
  ) { }

  initGetRows() {
    this.propertiesSvc.read(PropertyType.SESSION).subscribe(response => {
      const sessions = response;
      sessions.forEach(session => {
        session.time = session.time_start + ' - ' + session.time_end;
        session.action = {
          edit: true,
          delete: true
        };
      });
      this.rows = sessions;
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
        name: 'Waktu',
        prop: 'time'
      },
      {
        name: 'Keterangan',
        prop: 'note'
      }
    ];
 }


  ngOnInit() {
    this.initGetRows();
    this.initSetColumns();
  }

  onBtnCreateClick() {
    this.modalRef = this.modalSvc.show(PropertySessionFormComponent);
  }

  onBtnUpdateClick($event) {

  }

  onBtnViewClick($event) {

  }

  onBtnDeleteClick($event) {

  }

}
