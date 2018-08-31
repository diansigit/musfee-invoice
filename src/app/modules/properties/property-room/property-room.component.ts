import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PropertiesService, PropertyType } from '../../../services';
import { Page } from '../../../shared/components/data-table/data-table.component';
import { PropertyRoomFormComponent } from './property-room-form/property-room-form.component';

@Component({
  selector: 'app-property-room',
  templateUrl: './property-room.component.html',
  styleUrls: ['./property-room.component.scss']
})
export class PropertyRoomComponent implements OnInit {

  public columns: Array<any> = [];
  public modalRef: BsModalRef;
  public page: Page;
  public rows = new Array<any>();

  constructor(
    private modalSvc: BsModalService,
    private propertiesSvc: PropertiesService
  ) { }

  initGetRows() {
    this.propertiesSvc.read(PropertyType.ROOM).subscribe(response => {
      const rooms = response;
      rooms.forEach(room => {
        room.action = {
          edit: true,
          delete: true
        };
      });
      this.rows = rooms;
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
    this.modalRef = this.modalSvc.show(PropertyRoomFormComponent);
  }

  onBtnUpdateClick($event) {

  }

  onBtnViewClick($event) {

  }

  onBtnDeleteClick($event) {

  }

}
