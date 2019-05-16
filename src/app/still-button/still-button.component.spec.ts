import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StillButtonComponent } from './still-button.component';

describe('StillButtonComponent', () => {
  let component: StillButtonComponent;
  let fixture: ComponentFixture<StillButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StillButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StillButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
