import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFaultUtilityDialogComponent } from './report-fault-utility-dialog.component';

describe('ReportFaultUtilityDialogComponent', () => {
  let component: ReportFaultUtilityDialogComponent;
  let fixture: ComponentFixture<ReportFaultUtilityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFaultUtilityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFaultUtilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
