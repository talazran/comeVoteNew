import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBallotBoxManagerComponent } from './edit-ballot-box-manager.component';

describe('EditBallotBoxManagerComponent', () => {
  let component: EditBallotBoxManagerComponent;
  let fixture: ComponentFixture<EditBallotBoxManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBallotBoxManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBallotBoxManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
