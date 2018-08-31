/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TentorFormComponent } from './tentor-form.component';

describe('TentorFormComponent', () => {
  let component: TentorFormComponent;
  let fixture: ComponentFixture<TentorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
