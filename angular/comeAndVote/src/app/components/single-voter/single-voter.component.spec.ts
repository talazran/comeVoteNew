import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVoterComponent } from './single-voter.component';

describe('SingleVoterComponent', () => {
  let component: SingleVoterComponent;
  let fixture: ComponentFixture<SingleVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleVoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
