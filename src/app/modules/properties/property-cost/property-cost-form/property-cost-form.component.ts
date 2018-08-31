import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { COURSE_CHARGE_TYPE, COURSE_CHARGE_TYPE_OPTS } from '../../../../app.constant';

@Component({
  selector: 'app-property-cost-form',
  templateUrl: './property-cost-form.component.html',
  styleUrls: ['./property-cost-form.component.scss']
})
export class PropertyCostFormComponent implements OnInit {

  formCost: FormGroup;
  dataCost: any;
  modalTitle: string;
  periodOpts = COURSE_CHARGE_TYPE_OPTS;
  periodOptsSelected = COURSE_CHARGE_TYPE.MONTH;

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    if (this.dataCost) {
      this.modalTitle = 'Ubah biaya';
      this.formCost = this.formBuilder.group({
        uuid: [this.dataCost.uuid],
        name: [this.dataCost.name, Validators.required],
        bill: [this.dataCost.bill, Validators.required],
        period: [this.dataCost.period, Validators.required],
        note: [this.dataCost.note]
      });
    } else {
      this.modalTitle = 'Tambah biaya';
      this.formCost = this.formBuilder.group({
        name: ['', Validators.required],
        bill: [0, Validators.required],
        period: ['', Validators.required],
        note: ['']
      });
    }
  }

  onFormCostSubmit(student) {
    console.log(student);
    this.modalRef.hide();
  }

  onOptionsPeriodSelected($event) {
    console.log($event);
    this.formCost.controls['period'].setValue($event);
  }
}
