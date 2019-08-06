import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionBlockForVoteComponent } from './faction-block-for-vote.component';

describe('FactionBlockForVoteComponent', () => {
  let component: FactionBlockForVoteComponent;
  let fixture: ComponentFixture<FactionBlockForVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionBlockForVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionBlockForVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
