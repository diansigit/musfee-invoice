import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PropertiesService, PropertyType } from '../../../services';
import { Page } from '../../../shared/components/data-table/data-table.component';
import { PropertyCostFormComponent } from './property-cost-form/property-cost-form.component';

@Component({
  selector: 'app-property-cost',
  templateUrl: './property-cost.component.html',
  styleUrls: ['./property-cost.component.scss']
})
export class PropertyCostComponent implements OnInit {

  public columns: Array<any> = [];
  public modalRef: BsModalRef;
  public page: Page;
  public rows = new Array<any>();

  constructor(
    private modalSvc: BsModalService,
    private propertiesSvc: PropertiesService
  ) { }

  initGetRows() {
    this.propertiesSvc.read(PropertyType.COST).subscribe(response => {
      const costs = response;
      costs.forEach(cost => {
        cost.action = {
          edit: true,
          delete: true
        };
      });
      this.rows = costs;
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
        name: 'Tagihan',
        prop: 'bill'
      },
      {
        name: 'Periode tagihan',
        prop: 'period',
        type: 'period_type'
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
    this.modalRef = this.modalSvc.show(PropertyCostFormComponent);
  }

  onBtnUpdateClick($event) {

  }

  onBtnViewClick($event) {

  }

  onBtnDeleteClick($event) {

  }

}
