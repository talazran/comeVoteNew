import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndVotingComponent } from './end-voting.component';

describe('EndVotingComponent', () => {
  let component: EndVotingComponent;
  let fixture: ComponentFixture<EndVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
