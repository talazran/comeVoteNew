import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBallotboxManagerComponent } from './add-ballotbox-manager.component';

describe('AddBallotboxManagerComponent', () => {
  let component: AddBallotboxManagerComponent;
  let fixture: ComponentFixture<AddBallotboxManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBallotboxManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBallotboxManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
