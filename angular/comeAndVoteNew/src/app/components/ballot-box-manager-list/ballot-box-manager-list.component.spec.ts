import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotBoxManagerListComponent } from './ballot-box-manager-list.component';

describe('BallotBoxManagerListComponent', () => {
  let component: BallotBoxManagerListComponent;
  let fixture: ComponentFixture<BallotBoxManagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotBoxManagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotBoxManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
