import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogClockSoftUiComponent } from './analog-clock-soft-ui.component';

describe('AnalogClockSoftUiComponent', () => {
  let component: AnalogClockSoftUiComponent;
  let fixture: ComponentFixture<AnalogClockSoftUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogClockSoftUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogClockSoftUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
