import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionHistoryComponent } from './submission-history.component';

describe('SubmissionHistoryComponent', () => {
  let component: SubmissionHistoryComponent;
  let fixture: ComponentFixture<SubmissionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
