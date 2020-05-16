import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockSoftUiComponent } from './digital-clock-soft-ui.component';

describe('DigitalClockSoftUiComponent', () => {
  let component: DigitalClockSoftUiComponent;
  let fixture: ComponentFixture<DigitalClockSoftUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalClockSoftUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockSoftUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
