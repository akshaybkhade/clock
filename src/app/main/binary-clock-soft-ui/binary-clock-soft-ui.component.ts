import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-clock-soft-ui',
  templateUrl: './binary-clock-soft-ui.component.html',
  styleUrls: ['./binary-clock-soft-ui.component.scss']
})
export class BinaryClockSoftUiComponent implements OnInit {

  binaryValues = [];
  binaryRepresentLength = ['', '', '', ''];
  sectionTitle = ['H', 'h', 'M', 'm', 'S', 's'];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const now = (new Date()).toTimeString().split(' ')[0].replace(':', '').replace(':', '');
      this.binaryValues = now.split('').map(str => this.reverseString(((Number(str) >>> 0).toString(2)).padStart(4, '0')));
    }, 100);
  }

  reverseString(str) {
    return str.split("").reverse().join('');
  }

  getPowerOf(index) {
    return Math.pow(2, index);
  }

  getActiveClass(index) {
    if (index < 2) {
      return 'hr-active';
    }
    if (index < 4) {
      return 'min-active';
    }
    if (index < 6) {
      return 'sec-active';
    }
  }

}
