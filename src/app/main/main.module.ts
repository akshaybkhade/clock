import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SelectTimezoneComponent } from './select-timezone/select-timezone.component';
import { AnalogClockSoftUiComponent } from './analog-clock-soft-ui/analog-clock-soft-ui.component';
import { DigitalClockSoftUiComponent } from './digital-clock-soft-ui/digital-clock-soft-ui.component';
import { BinaryClockSoftUiComponent } from './binary-clock-soft-ui/binary-clock-soft-ui.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';


@NgModule({
  declarations: [
    SelectTimezoneComponent,
    AnalogClockSoftUiComponent,
    DigitalClockSoftUiComponent,
    BinaryClockSoftUiComponent,
    SidebarComponent,
    MainWrapperComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
