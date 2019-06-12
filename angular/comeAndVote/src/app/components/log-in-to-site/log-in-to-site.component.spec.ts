import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInToSiteComponent } from './log-in-to-site.component';

describe('LogInToSiteComponent', () => {
  let component: LogInToSiteComponent;
  let fixture: ComponentFixture<LogInToSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInToSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInToSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
