import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog-clock-soft-ui',
  templateUrl: './analog-clock-soft-ui.component.html',
  styleUrls: ['./analog-clock-soft-ui.component.scss']
})
export class AnalogClockSoftUiComponent implements OnInit {
  hr;
  min;
  sec;

  constructor() { }

  ngOnInit(): void {
    const deg = 6;
    setInterval(() => {
      const date = new Date();
      this.min = date.getMinutes() * deg;
      this.hr = ((date.getHours() > 12) ? ((date.getHours() - 12) * 30) : (date.getHours() * 30)) + ((date.getMinutes() / 10) * 6);
      this.sec = date.getSeconds() * deg;
    }, 1);
  }

}
