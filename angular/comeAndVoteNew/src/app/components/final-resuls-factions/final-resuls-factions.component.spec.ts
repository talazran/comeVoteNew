import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalResulsFactionsComponent } from './final-resuls-factions.component';

describe('FinalResulsFactionsComponent', () => {
  let component: FinalResulsFactionsComponent;
  let fixture: ComponentFixture<FinalResulsFactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalResulsFactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalResulsFactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
