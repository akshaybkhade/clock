import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryClockSoftUiComponent } from './binary-clock-soft-ui.component';

describe('BinaryClockSoftUiComponent', () => {
  let component: BinaryClockSoftUiComponent;
  let fixture: ComponentFixture<BinaryClockSoftUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryClockSoftUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryClockSoftUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
