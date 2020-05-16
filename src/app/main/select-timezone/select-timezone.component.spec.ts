import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTimezoneComponent } from './select-timezone.component';

describe('SelectTimezoneComponent', () => {
  let component: SelectTimezoneComponent;
  let fixture: ComponentFixture<SelectTimezoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTimezoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTimezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
