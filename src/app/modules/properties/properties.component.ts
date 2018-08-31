import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor(
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if (params && params.tab) {
        try {
          this.staticTabs.tabs[Number(params.tab)].active = true;
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

}
