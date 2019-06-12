import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadManagerComponent } from './head-manager.component';

describe('HeadManagerComponent', () => {
  let component: HeadManagerComponent;
  let fixture: ComponentFixture<HeadManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
