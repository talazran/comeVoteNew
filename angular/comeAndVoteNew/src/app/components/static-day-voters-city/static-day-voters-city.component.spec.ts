import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDayVotersCityComponent } from './static-day-voters-city.component';

describe('StaticDayVotersCityComponent', () => {
  let component: StaticDayVotersCityComponent;
  let fixture: ComponentFixture<StaticDayVotersCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDayVotersCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDayVotersCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
