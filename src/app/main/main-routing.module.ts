import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalogClockSoftUiComponent } from "./analog-clock-soft-ui/analog-clock-soft-ui.component";
import { BinaryClockSoftUiComponent } from "./binary-clock-soft-ui/binary-clock-soft-ui.component";
import { DigitalClockSoftUiComponent } from "./digital-clock-soft-ui/digital-clock-soft-ui.component";
import { MainWrapperComponent } from "./main-wrapper/main-wrapper.component";

const routes: Routes = [
  {
    path: '',
    component: MainWrapperComponent,
    children: [
      {
        path: 'analog',
        component: AnalogClockSoftUiComponent
      },
      {
        path: 'digital',
        component: DigitalClockSoftUiComponent
      },
      {
        path: 'binary',
        component: BinaryClockSoftUiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
