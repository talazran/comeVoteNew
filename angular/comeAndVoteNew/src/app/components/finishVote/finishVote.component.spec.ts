/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinishVoteComponent } from './finishVote.component';

describe('FinishVoteComponent', () => {
  let component: FinishVoteComponent;
  let fixture: ComponentFixture<FinishVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
