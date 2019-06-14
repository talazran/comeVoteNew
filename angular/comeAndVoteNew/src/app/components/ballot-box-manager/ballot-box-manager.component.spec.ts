import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotBoxManagerComponent } from './ballot-box-manager.component';

describe('BallotBoxManagerComponent', () => {
  let component: BallotBoxManagerComponent;
  let fixture: ComponentFixture<BallotBoxManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotBoxManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotBoxManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
