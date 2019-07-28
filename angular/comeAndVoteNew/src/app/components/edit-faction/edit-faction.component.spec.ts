/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditFactionComponent } from './edit-faction.component';

describe('EditFactionComponent', () => {
  let component: EditFactionComponent;
  let fixture: ComponentFixture<EditFactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
