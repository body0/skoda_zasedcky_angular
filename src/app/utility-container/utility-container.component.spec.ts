import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityContainerComponent } from './utility-container.component';

describe('UtilityContainerComponent', () => {
  let component: UtilityContainerComponent;
  let fixture: ComponentFixture<UtilityContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
