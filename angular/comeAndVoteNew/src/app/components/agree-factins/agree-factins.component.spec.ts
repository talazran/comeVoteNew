import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreeFactinsComponent } from './agree-factins.component';

describe('AgreeFactinsComponent', () => {
  let component: AgreeFactinsComponent;
  let fixture: ComponentFixture<AgreeFactinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreeFactinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreeFactinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
