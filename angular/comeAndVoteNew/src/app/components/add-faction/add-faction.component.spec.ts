/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFactionComponent } from './add-faction.component';

describe('AddFactionComponent', () => {
  let component: AddFactionComponent;
  let fixture: ComponentFixture<AddFactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
