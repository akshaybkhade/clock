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
  // batterInfo;

  constructor() { }

  ngOnInit(): void {
    this.setTimeDetails();
    setInterval(() => {
      this.setTimeDetails();
    }, 1000);
    // navigator.getBattery().then((data) => {
    //   this.batterInfo = data;
    // });
  }

  setTimeDetails() {
    const date = new Date();
    this.min = String(date.getMinutes()).padStart(2, '0');
    this.hr = String(date.getHours()).padStart(2, '0');
    this.sec = String(date.getSeconds()).padStart(2, '0');
  }

}
