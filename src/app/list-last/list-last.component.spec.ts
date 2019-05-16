import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLastComponent } from './list-last.component';

describe('ListLastComponent', () => {
  let component: ListLastComponent;
  let fixture: ComponentFixture<ListLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
