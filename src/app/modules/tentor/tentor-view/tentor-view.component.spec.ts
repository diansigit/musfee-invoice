/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TentorViewComponent } from './tentor-view.component';

describe('TentorViewComponent', () => {
  let component: TentorViewComponent;
  let fixture: ComponentFixture<TentorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
