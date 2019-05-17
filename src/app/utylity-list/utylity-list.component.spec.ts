import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtylityListComponent } from './utylity-list.component';

describe('UtylityListComponent', () => {
  let component: UtylityListComponent;
  let fixture: ComponentFixture<UtylityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtylityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtylityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
