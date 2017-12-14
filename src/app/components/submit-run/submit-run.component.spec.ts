import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRunComponent } from './submit-run.component';

describe('SubmitRunComponent', () => {
  let component: SubmitRunComponent;
  let fixture: ComponentFixture<SubmitRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
