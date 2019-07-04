import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeVotingComponent } from './time-voting.component';

describe('TimeVotingComponent', () => {
  let component: TimeVotingComponent;
  let fixture: ComponentFixture<TimeVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
