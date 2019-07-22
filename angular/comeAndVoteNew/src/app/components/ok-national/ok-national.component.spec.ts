import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkNationalComponent } from './ok-national.component';

describe('OkNationalComponent', () => {
  let component: OkNationalComponent;
  let fixture: ComponentFixture<OkNationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkNationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
