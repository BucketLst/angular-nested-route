import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSearchControlComponent } from './report-search-control.component';

describe('ReportSearchControlComponent', () => {
  let component: ReportSearchControlComponent;
  let fixture: ComponentFixture<ReportSearchControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSearchControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
