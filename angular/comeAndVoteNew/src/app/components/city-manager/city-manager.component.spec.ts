import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityManagerComponent } from './city-manager.component';

describe('CityManagerComponent', () => {
  let component: CityManagerComponent;
  let fixture: ComponentFixture<CityManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
