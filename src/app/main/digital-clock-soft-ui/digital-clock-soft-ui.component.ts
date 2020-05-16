import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock-soft-ui',
  templateUrl: './digital-clock-soft-ui.component.html',
  styleUrls: ['./digital-clock-soft-ui.component.scss']
})
export class DigitalClockSoftUiComponent implements OnInit {

  min;
  hr;
  sec;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.min = date.getMinutes();
      this.hr = date.getHours();
      this.sec = date.getSeconds();
    }, 1);

  }

}
