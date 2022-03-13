(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/analog-clock-soft-ui/analog-clock-soft-ui.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/analog-clock-soft-ui/analog-clock-soft-ui.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AnalogClockSoftUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalogClockSoftUiComponent", function() { return AnalogClockSoftUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "transform": a0 }; };
class AnalogClockSoftUiComponent {
    constructor() { }
    ngOnInit() {
        const deg = 6;
        setInterval(() => {
            const date = new Date();
            this.min = date.getMinutes() * deg;
            this.hr = ((date.getHours() > 12) ? ((date.getHours() - 12) * 30) : (date.getHours() * 30)) + ((date.getMinutes() / 10) * 6);
            this.sec = date.getSeconds() * deg;
        }, 1);
    }
}
AnalogClockSoftUiComponent.ɵfac = function AnalogClockSoftUiComponent_Factory(t) { return new (t || AnalogClockSoftUiComponent)(); };
AnalogClockSoftUiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalogClockSoftUiComponent, selectors: [["app-analog-clock-soft-ui"]], decls: 8, vars: 9, consts: [[1, "analog-clock-wrapper"], [1, "clock"], [1, "hour"], [1, "hr", 3, "ngStyle"], [1, "min"], [1, "mn", 3, "ngStyle"], [1, "sec"], [1, "sc", 3, "ngStyle"]], template: function AnalogClockSoftUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "rotate(" + ctx.hr + "deg)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "rotate(" + ctx.min + "deg)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "rotate(" + ctx.sec + "deg)"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".analog-clock-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #091921;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url('clock.png');\n  background-size: cover;\n  border: 4px solid #091921;\n  border-radius: 50%;\n  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);\n}\n@media screen and (min-width: 320px) and (max-width: 992px) {\n  .analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  background: #fff;\n  border-radius: 50%;\n  z-index: 999;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%], .analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%], .analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .sec[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  border-radius: 50%;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 8px;\n  height: 80px;\n  background: #ef5c6a;\n  z-index: 10;\n  border-radius: 6px 6px 0 0;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 190px;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%]   .mn[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 190px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  border-radius: 50%;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%]   .mn[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 90px;\n  background: #fff;\n  z-index: 11;\n  border-radius: 6px 6px 0 0;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .sec[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 230px;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .sec[_ngcontent-%COMP%]   .sc[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 230px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  border-radius: 50%;\n}\n.analog-clock-wrapper[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .sec[_ngcontent-%COMP%]   .sc[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 150px;\n  background: #ff105e;\n  z-index: 12;\n  border-radius: 6px 6px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9CYWNrdXAvUHJvamVjdHMvUHJvamVjdHMvQW5ndWxhci9QcmFjdGljZS9jbG9jay9zcmMvYXBwL21haW4vYW5hbG9nLWNsb2NrLXNvZnQtdWkvYW5hbG9nLWNsb2NrLXNvZnQtdWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYW5hbG9nLWNsb2NrLXNvZnQtdWkvYW5hbG9nLWNsb2NrLXNvZnQtdWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBRUEsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0tBQUE7QUNDSjtBRElJO0VBaEJGO0lBaUJJLFlBQUE7SUFDQSxhQUFBO0VDREo7QUFDRjtBREdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtBQ0ZOO0FES0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0hOO0FESU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRElRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0ZWO0FETUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0pOO0FES007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNKUjtBREtRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0hWO0FET0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0xOO0FETU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMUjtBRE1RO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0pWIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hbmFsb2ctY2xvY2stc29mdC11aS9hbmFsb2ctY2xvY2stc29mdC11aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmFsb2ctY2xvY2std3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDkxOTIxO1xuICAuY2xvY2sge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Nsb2NrLnBuZ1wiKTtcbiAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIGxpZ2h0ZW4oIzA5MTkyMSwgMC41KSwgZGFya2VuKCMwOTE5MjEsIDAuNSkpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyOiA0cHggc29saWQgIzA5MTkyMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAtMTVweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSksXG4gICAgaW5zZXQgMCAtMTVweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSksXG4gICAgMCAxNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuICAgIGluc2V0IDAgMTVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuXG4gICAgLmhvdXIsIC5taW4sIC5zZWMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5ob3VyIHtcbiAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAuaHIge1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZjVjNmE7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLm1pbiB7XG4gICAgICB3aWR0aDogMTkwcHg7XG4gICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgLm1uIHtcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWMge1xuICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgIC5zYyB7XG4gICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjEwNWU7XG4gICAgICAgICAgei1pbmRleDogMTI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5hbmFsb2ctY2xvY2std3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDkxOTIxO1xufVxuLmFuYWxvZy1jbG9jay13cmFwcGVyIC5jbG9jayB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xvY2sucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IDRweCBzb2xpZCAjMDkxOTIxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgLTE1cHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpLCBpbnNldCAwIC0xNXB4IDE1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSwgMCAxNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpLCBpbnNldCAwIDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG59XG4uYW5hbG9nLWNsb2NrLXdyYXBwZXIgLmNsb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5OTk7XG59XG4uYW5hbG9nLWNsb2NrLXdyYXBwZXIgLmNsb2NrIC5ob3VyLCAuYW5hbG9nLWNsb2NrLXdyYXBwZXIgLmNsb2NrIC5taW4sIC5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sgLnNlYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sgLmhvdXIge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG59XG4uYW5hbG9nLWNsb2NrLXdyYXBwZXIgLmNsb2NrIC5ob3VyIC5ociB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmFuYWxvZy1jbG9jay13cmFwcGVyIC5jbG9jayAuaG91ciAuaHI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNlZjVjNmE7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcbn1cbi5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sgLm1pbiB7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiAxOTBweDtcbn1cbi5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sgLm1pbiAubW4ge1xuICB3aWR0aDogMTkwcHg7XG4gIGhlaWdodDogMTkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sgLm1pbiAubW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDExO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcbn1cbi5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sgLnNlYyB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAyMzBweDtcbn1cbi5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sgLnNlYyAuc2Mge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hbmFsb2ctY2xvY2std3JhcHBlciAuY2xvY2sgLnNlYyAuc2M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmYxMDVlO1xuICB6LWluZGV4OiAxMjtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalogClockSoftUiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analog-clock-soft-ui',
                templateUrl: './analog-clock-soft-ui.component.html',
                styleUrls: ['./analog-clock-soft-ui.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/binary-clock-soft-ui/binary-clock-soft-ui.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/binary-clock-soft-ui/binary-clock-soft-ui.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BinaryClockSoftUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryClockSoftUiComponent", function() { return BinaryClockSoftUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BinaryClockSoftUiComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const binaryRepresentIndex_r5 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const a_r1 = ctx_r6.$implicit;
    const binaryIndex_r2 = ctx_r6.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", a_r1.charAt(binaryRepresentIndex_r5) === "1" ? ctx_r3.getActiveClass(binaryIndex_r2) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getPowerOf(binaryRepresentIndex_r5), " ");
} }
function BinaryClockSoftUiComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BinaryClockSoftUiComponent_div_1_div_3_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    const binaryIndex_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.reverseString(a_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.binaryRepresentLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sectionTitle[binaryIndex_r2]);
} }
class BinaryClockSoftUiComponent {
    constructor() {
        this.binaryValues = [];
        this.binaryRepresentLength = ['', '', '', ''];
        this.sectionTitle = ['H', 'h', 'M', 'm', 'S', 's'];
    }
    ngOnInit() {
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
BinaryClockSoftUiComponent.ɵfac = function BinaryClockSoftUiComponent_Factory(t) { return new (t || BinaryClockSoftUiComponent)(); };
BinaryClockSoftUiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BinaryClockSoftUiComponent, selectors: [["app-binary-clock-soft-ui"]], decls: 2, vars: 1, consts: [[1, "binary-clock-wrapper"], ["class", "unit-wrapper", 4, "ngFor", "ngForOf"], [1, "unit-wrapper"], [1, "unit-value"], ["class", "binary-unit-representation", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "unit-title"], [1, "binary-unit-representation", 3, "ngClass"]], template: function BinaryClockSoftUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BinaryClockSoftUiComponent_div_1_Template, 6, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.binaryValues);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".binary-clock-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  background: #091921;\n}\n.binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 70px;\n  margin: 50px 0px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column-reverse;\n  text-align: center;\n  color: white;\n}\n@media screen and (min-width: 320px) and (max-width: 992px) {\n  .binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n.binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .unit-title[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  font-weight: 900;\n  color: #dedede;\n}\n.binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .unit-value[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .binary-unit-representation[_ngcontent-%COMP%] {\n  background: #929292;\n  margin: 20px 0px;\n  height: 80px;\n  border-radius: 10px;\n  color: #959595;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 15px 15px 30px #08151c, -15px -15px 30px #0a1d26;\n  background: linear-gradient(145deg, #0a1b23, #08171e);\n}\n@media screen and (min-width: 320px) and (max-width: 992px) {\n  .binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .binary-unit-representation[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n.binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .hr-active[_ngcontent-%COMP%] {\n  background: #64f6fe;\n  box-shadow: 15px 15px 30px #08151c, -15px -15px 30px #0a1d26, inset 25px 25px 25px #55d1d8, inset -25px -25px 25px #73ffff;\n  color: black;\n}\n.binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .min-active[_ngcontent-%COMP%] {\n  background: #76df12;\n  box-shadow: 15px 15px 30px #08151c, -15px -15px 30px #0a1d26, inset 25px 25px 25px #64be0f, inset -25px -25px 25px #88ff15;\n  color: black;\n}\n.binary-clock-wrapper[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .sec-active[_ngcontent-%COMP%] {\n  background: #ed75c2;\n  box-shadow: 15px 15px 30px #08151c, -15px -15px 30px #0a1d26, inset 25px 25px 25px #c963a5, inset -25px -25px 25px #ff87df;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9CYWNrdXAvUHJvamVjdHMvUHJvamVjdHMvQW5ndWxhci9QcmFjdGljZS9jbG9jay9zcmMvYXBwL21haW4vYmluYXJ5LWNsb2NrLXNvZnQtdWkvYmluYXJ5LWNsb2NrLXNvZnQtdWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmluYXJ5LWNsb2NrLXNvZnQtdWkvYmluYXJ5LWNsb2NrLXNvZnQtdWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBVkY7SUFXSSxXQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFTjtBREFJO0VBQ0UsZ0JBQUE7QUNFTjtBRENJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EscURBQUE7QUNDTjtBRENNO0VBWkY7SUFhSSxZQUFBO0VDRU47QUFDRjtBRENJO0VBQ0UsbUJBQUE7RUFDQSwwSEFBQTtFQUNBLFlBQUE7QUNDTjtBRENJO0VBQ0UsbUJBQUE7RUFDQSwwSEFBQTtFQUNBLFlBQUE7QUNDTjtBRENJO0VBQ0UsbUJBQUE7RUFDQSwwSEFBQTtFQUNBLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmluYXJ5LWNsb2NrLXNvZnQtdWkvYmluYXJ5LWNsb2NrLXNvZnQtdWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmluYXJ5LWNsb2NrLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZDogIzA5MTkyMTtcblxuICAudW5pdC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBtYXJnaW46IDUwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG5cbiAgICAudW5pdC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGNvbG9yOiAjZGVkZWRlO1xuICAgIH1cbiAgICAudW5pdC12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cblxuICAgIC5iaW5hcnktdW5pdC1yZXByZXNlbnRhdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjOTI5MjkyO1xuICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBjb2xvcjogIzk1OTU5NTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggMzBweCAjMDgxNTFjLCAtMTVweCAtMTVweCAzMHB4ICMwYTFkMjY7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMGExYjIzLCAjMDgxNzFlKTtcblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhyLWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNjRmNmZlO1xuICAgICAgYm94LXNoYWRvdzogMTVweCAxNXB4IDMwcHggIzA4MTUxYywgLTE1cHggLTE1cHggMzBweCAjMGExZDI2LCBpbnNldCAyNXB4IDI1cHggMjVweCAjNTVkMWQ4LCBpbnNldCAtMjVweCAtMjVweCAyNXB4ICM3M2ZmZmY7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIC5taW4tYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICM3NmRmMTI7XG4gICAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggMzBweCAjMDgxNTFjLCAtMTVweCAtMTVweCAzMHB4ICMwYTFkMjYsIGluc2V0IDI1cHggMjVweCAyNXB4ICM2NGJlMGYsIGluc2V0IC0yNXB4IC0yNXB4IDI1cHggIzg4ZmYxNTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLnNlYy1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogI2VkNzVjMjtcbiAgICAgIGJveC1zaGFkb3c6IDE1cHggMTVweCAzMHB4ICMwODE1MWMsIC0xNXB4IC0xNXB4IDMwcHggIzBhMWQyNiwgaW5zZXQgMjVweCAyNXB4IDI1cHggI2M5NjNhNSwgaW5zZXQgLTI1cHggLTI1cHggMjVweCAjZmY4N2RmO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxufVxuIiwiLmJpbmFyeS1jbG9jay13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQ6ICMwOTE5MjE7XG59XG4uYmluYXJ5LWNsb2NrLXdyYXBwZXIgLnVuaXQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luOiA1MHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5iaW5hcnktY2xvY2std3JhcHBlciAudW5pdC13cmFwcGVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxufVxuLmJpbmFyeS1jbG9jay13cmFwcGVyIC51bml0LXdyYXBwZXIgLnVuaXQtdGl0bGUge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2RlZGVkZTtcbn1cbi5iaW5hcnktY2xvY2std3JhcHBlciAudW5pdC13cmFwcGVyIC51bml0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5iaW5hcnktY2xvY2std3JhcHBlciAudW5pdC13cmFwcGVyIC5iaW5hcnktdW5pdC1yZXByZXNlbnRhdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM5MjkyOTI7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICM5NTk1OTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAxNXB4IDE1cHggMzBweCAjMDgxNTFjLCAtMTVweCAtMTVweCAzMHB4ICMwYTFkMjY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMwYTFiMjMsICMwODE3MWUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYmluYXJ5LWNsb2NrLXdyYXBwZXIgLnVuaXQtd3JhcHBlciAuYmluYXJ5LXVuaXQtcmVwcmVzZW50YXRpb24ge1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuLmJpbmFyeS1jbG9jay13cmFwcGVyIC51bml0LXdyYXBwZXIgLmhyLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM2NGY2ZmU7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAzMHB4ICMwODE1MWMsIC0xNXB4IC0xNXB4IDMwcHggIzBhMWQyNiwgaW5zZXQgMjVweCAyNXB4IDI1cHggIzU1ZDFkOCwgaW5zZXQgLTI1cHggLTI1cHggMjVweCAjNzNmZmZmO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYmluYXJ5LWNsb2NrLXdyYXBwZXIgLnVuaXQtd3JhcHBlciAubWluLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM3NmRmMTI7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAzMHB4ICMwODE1MWMsIC0xNXB4IC0xNXB4IDMwcHggIzBhMWQyNiwgaW5zZXQgMjVweCAyNXB4IDI1cHggIzY0YmUwZiwgaW5zZXQgLTI1cHggLTI1cHggMjVweCAjODhmZjE1O1xuICBjb2xvcjogYmxhY2s7XG59XG4uYmluYXJ5LWNsb2NrLXdyYXBwZXIgLnVuaXQtd3JhcHBlciAuc2VjLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZDc1YzI7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAzMHB4ICMwODE1MWMsIC0xNXB4IC0xNXB4IDMwcHggIzBhMWQyNiwgaW5zZXQgMjVweCAyNXB4IDI1cHggI2M5NjNhNSwgaW5zZXQgLTI1cHggLTI1cHggMjVweCAjZmY4N2RmO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BinaryClockSoftUiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-binary-clock-soft-ui',
                templateUrl: './binary-clock-soft-ui.component.html',
                styleUrls: ['./binary-clock-soft-ui.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/digital-clock-soft-ui/digital-clock-soft-ui.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/digital-clock-soft-ui/digital-clock-soft-ui.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DigitalClockSoftUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalClockSoftUiComponent", function() { return DigitalClockSoftUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DigitalClockSoftUiComponent {
    // batterInfo;
    constructor() { }
    ngOnInit() {
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
DigitalClockSoftUiComponent.ɵfac = function DigitalClockSoftUiComponent_Factory(t) { return new (t || DigitalClockSoftUiComponent)(); };
DigitalClockSoftUiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DigitalClockSoftUiComponent, selectors: [["app-digital-clock-soft-ui"]], decls: 19, vars: 3, consts: [[1, "digital-clock-wrapper"], [1, "time"], [1, "unit-section", "hour-section"], [1, "hour"], [1, "unit-section", "minute-section"], [1, "minute"], [1, "unit-section", "second-section"], [1, "second"]], template: function DigitalClockSoftUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The Time is now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sec);
    } }, styles: [".digital-clock-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #0b0c0c;\n}\n.digital-clock-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  margin: 20px 0px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.4em;\n  font-size: 1em;\n  margin-top: -50px;\n}\n.digital-clock-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  display: flex;\n}\n.digital-clock-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .unit-section[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0px 10px;\n  -webkit-box-reflect: below 10px linear-gradient(transparent, #0004);\n}\n.digital-clock-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .unit-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 120px;\n  color: black;\n  font-weight: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3em;\n  z-index: 10;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);\n}\n@media screen and (min-width: 320px) and (max-width: 992px) {\n  .digital-clock-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .unit-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 80px;\n  }\n}\n.digital-clock-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .unit-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  height: 30px;\n  font-size: 0.7em;\n  letter-spacing: 0.2em;\n  font-weight: 500;\n  z-index: 9;\n  box-shadow: none;\n  color: black;\n  text-transform: uppercase;\n}\n.digital-clock-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .hour-section[_ngcontent-%COMP%] {\n  background: #ed75c2;\n}\n.digital-clock-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .minute-section[_ngcontent-%COMP%] {\n  background: #64f6fe;\n}\n.digital-clock-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%] {\n  background: #c3e40d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9CYWNrdXAvUHJvamVjdHMvUHJvamVjdHMvQW5ndWxhci9QcmFjdGljZS9jbG9jay9zcmMvYXBwL21haW4vZGlnaXRhbC1jbG9jay1zb2Z0LXVpL2RpZ2l0YWwtY2xvY2stc29mdC11aS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9kaWdpdGFsLWNsb2NrLXNvZnQtdWkvZGlnaXRhbC1jbG9jay1zb2Z0LXVpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7QUNBSjtBREVJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFHQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7QUNGUjtBREtRO0VBaEJGO0lBaUJJLFdBQUE7SUFDQSxZQUFBO0VDRlI7QUFDRjtBREdRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtBQ0ZWO0FET0k7RUFDRSxtQkFBQTtBQ0xOO0FET0k7RUFDRSxtQkFBQTtBQ0xOO0FET0k7RUFDRSxtQkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kaWdpdGFsLWNsb2NrLXNvZnQtdWkvZGlnaXRhbC1jbG9jay1zb2Z0LXVpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpZ2l0YWwtY2xvY2std3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMGIwYzBjO1xuXG4gIGgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNGVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICB9XG5cbiAgLnRpbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAudW5pdC1zZWN0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAxMHB4IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzAwMDQpO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMDAwMCwgI2MzZTQwZCk7XG4gICAgICAgIC8vYmFja2dyb3VuZDogI2MzZTQwZDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAvL2JhY2tncm91bmQ6ICNjM2U0MGQ7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaG91ci1zZWN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlZDc1YzI7XG4gICAgfVxuICAgIC5taW51dGUtc2VjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNjRmNmZlO1xuICAgIH1cbiAgICAuc2Vjb25kLXNlY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZDogI2MzZTQwZDtcbiAgICB9XG4gIH1cbn1cbiIsIi5kaWdpdGFsLWNsb2NrLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzBiMGMwYztcbn1cbi5kaWdpdGFsLWNsb2NrLXdyYXBwZXIgaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuLmRpZ2l0YWwtY2xvY2std3JhcHBlciAudGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGlnaXRhbC1jbG9jay13cmFwcGVyIC50aW1lIC51bml0LXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDEwcHggbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwNCk7XG59XG4uZGlnaXRhbC1jbG9jay13cmFwcGVyIC50aW1lIC51bml0LXNlY3Rpb24gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDNlbTtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5kaWdpdGFsLWNsb2NrLXdyYXBwZXIgLnRpbWUgLnVuaXQtc2VjdGlvbiBzcGFuIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbn1cbi5kaWdpdGFsLWNsb2NrLXdyYXBwZXIgLnRpbWUgLnVuaXQtc2VjdGlvbiBzcGFuOmxhc3QtY2hpbGQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgei1pbmRleDogOTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRpZ2l0YWwtY2xvY2std3JhcHBlciAudGltZSAuaG91ci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2VkNzVjMjtcbn1cbi5kaWdpdGFsLWNsb2NrLXdyYXBwZXIgLnRpbWUgLm1pbnV0ZS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzY0ZjZmZTtcbn1cbi5kaWdpdGFsLWNsb2NrLXdyYXBwZXIgLnRpbWUgLnNlY29uZC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2MzZTQwZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitalClockSoftUiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-digital-clock-soft-ui',
                templateUrl: './digital-clock-soft-ui.component.html',
                styleUrls: ['./digital-clock-soft-ui.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _analog_clock_soft_ui_analog_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analog-clock-soft-ui/analog-clock-soft-ui.component */ "./src/app/main/analog-clock-soft-ui/analog-clock-soft-ui.component.ts");
/* harmony import */ var _binary_clock_soft_ui_binary_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binary-clock-soft-ui/binary-clock-soft-ui.component */ "./src/app/main/binary-clock-soft-ui/binary-clock-soft-ui.component.ts");
/* harmony import */ var _digital_clock_soft_ui_digital_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./digital-clock-soft-ui/digital-clock-soft-ui.component */ "./src/app/main/digital-clock-soft-ui/digital-clock-soft-ui.component.ts");
/* harmony import */ var _main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-wrapper/main-wrapper.component */ "./src/app/main/main-wrapper/main-wrapper.component.ts");








const routes = [
    {
        path: '',
        component: _main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["MainWrapperComponent"],
        children: [
            {
                path: 'analog',
                component: _analog_clock_soft_ui_analog_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_2__["AnalogClockSoftUiComponent"]
            },
            {
                path: 'digital',
                component: _digital_clock_soft_ui_digital_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_4__["DigitalClockSoftUiComponent"]
            },
            {
                path: 'binary',
                component: _binary_clock_soft_ui_binary_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_3__["BinaryClockSoftUiComponent"]
            },
            {
                path: '',
                redirectTo: 'analog',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/main-wrapper/main-wrapper.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/main-wrapper/main-wrapper.component.ts ***!
  \*************************************************************/
/*! exports provided: MainWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapperComponent", function() { return MainWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/main/sidebar/sidebar.component.ts");




class MainWrapperComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url === '/clock') {
            this.router.navigateByUrl('/clock/analog');
        }
    }
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
}
MainWrapperComponent.ɵfac = function MainWrapperComponent_Factory(t) { return new (t || MainWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MainWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainWrapperComponent, selectors: [["app-main-wrapper"]], decls: 8, vars: 0, consts: [[1, "main-wrapper"], [1, "burger-menu", 3, "click"], ["src", "../../../assets/images/bars.svg", "alt", ""], [1, "sidebar-hover-wrapper", 3, "mouseenter"], ["id", "main", 1, "main-content-wrapper"], [1, "clock-wrapper"]], template: function MainWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainWrapperComponent_Template_div_click_2_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MainWrapperComponent_Template_div_mouseenter_4_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n}\n.main-wrapper[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  margin: 10px;\n  display: none;\n}\n@media screen and (min-width: 320px) and (max-width: 992px) {\n  .main-wrapper[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.main-wrapper[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.main-wrapper[_ngcontent-%COMP%]   .sidebar-hover-wrapper[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  position: fixed;\n}\n.main-wrapper[_ngcontent-%COMP%]   .main-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-wrapper[_ngcontent-%COMP%]   .main-content-wrapper[_ngcontent-%COMP%]   .timezone-section[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  margin-right: 40px;\n  margin-top: 15px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .main-content-wrapper[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9CYWNrdXAvUHJvamVjdHMvUHJvamVjdHMvQW5ndWxhci9QcmFjdGljZS9jbG9jay9zcmMvYXBwL21haW4vbWFpbi13cmFwcGVyL21haW4td3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLXdyYXBwZXIvbWFpbi13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQVRGO0lBVUksY0FBQTtFQ0VKO0FBQ0Y7QURBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRU47QURFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0FDREo7QURHSTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESUk7RUFDRSxhQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4td3JhcHBlci9tYWluLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLmJ1cmdlci1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5zaWRlYmFyLWhvdmVyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG4gIC5tYWluLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAudGltZXpvbmUtc2VjdGlvbiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuXG4gICAgLmNsb2NrLXdyYXBwZXIge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB9XG4gIH1cblxufVxuIiwiLm1haW4td3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4td3JhcHBlciAuYnVyZ2VyLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi13cmFwcGVyIC5idXJnZXItbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5tYWluLXdyYXBwZXIgLmJ1cmdlci1tZW51IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbi13cmFwcGVyIC5zaWRlYmFyLWhvdmVyLXdyYXBwZXIge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRlbnQtd3JhcHBlciAudGltZXpvbmUtc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGVudC13cmFwcGVyIC5jbG9jay13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-wrapper',
                templateUrl: './main-wrapper.component.html',
                styleUrls: ['./main-wrapper.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/main/sidebar/sidebar.component.ts");
/* harmony import */ var _select_timezone_select_timezone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-timezone/select-timezone.component */ "./src/app/main/select-timezone/select-timezone.component.ts");
/* harmony import */ var _analog_clock_soft_ui_analog_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analog-clock-soft-ui/analog-clock-soft-ui.component */ "./src/app/main/analog-clock-soft-ui/analog-clock-soft-ui.component.ts");
/* harmony import */ var _digital_clock_soft_ui_digital_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./digital-clock-soft-ui/digital-clock-soft-ui.component */ "./src/app/main/digital-clock-soft-ui/digital-clock-soft-ui.component.ts");
/* harmony import */ var _binary_clock_soft_ui_binary_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./binary-clock-soft-ui/binary-clock-soft-ui.component */ "./src/app/main/binary-clock-soft-ui/binary-clock-soft-ui.component.ts");
/* harmony import */ var _main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-wrapper/main-wrapper.component */ "./src/app/main/main-wrapper/main-wrapper.component.ts");










class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_select_timezone_select_timezone_component__WEBPACK_IMPORTED_MODULE_4__["SelectTimezoneComponent"],
        _analog_clock_soft_ui_analog_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_5__["AnalogClockSoftUiComponent"],
        _digital_clock_soft_ui_digital_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_6__["DigitalClockSoftUiComponent"],
        _binary_clock_soft_ui_binary_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_7__["BinaryClockSoftUiComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["MainWrapperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _select_timezone_select_timezone_component__WEBPACK_IMPORTED_MODULE_4__["SelectTimezoneComponent"],
                    _analog_clock_soft_ui_analog_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_5__["AnalogClockSoftUiComponent"],
                    _digital_clock_soft_ui_digital_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_6__["DigitalClockSoftUiComponent"],
                    _binary_clock_soft_ui_binary_clock_soft_ui_component__WEBPACK_IMPORTED_MODULE_7__["BinaryClockSoftUiComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                    _main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["MainWrapperComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/select-timezone/select-timezone.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/select-timezone/select-timezone.component.ts ***!
  \*******************************************************************/
/*! exports provided: SelectTimezoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTimezoneComponent", function() { return SelectTimezoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SelectTimezoneComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectTimezoneComponent.ɵfac = function SelectTimezoneComponent_Factory(t) { return new (t || SelectTimezoneComponent)(); };
SelectTimezoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectTimezoneComponent, selectors: [["app-select-timezone"]], decls: 2, vars: 0, template: function SelectTimezoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "select-timezone works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2VsZWN0LXRpbWV6b25lL3NlbGVjdC10aW1lem9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectTimezoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-timezone',
                templateUrl: './select-timezone.component.html',
                styleUrls: ['./select-timezone.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["analog"]; };
const _c1 = function () { return ["digital"]; };
const _c2 = function () { return ["binary"]; };
class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 12, vars: 6, consts: [["id", "mySidenav", 1, "sidenav-wrapper", 3, "mouseleave"], [1, "close-sidebar", 3, "click"], [1, "sidenav-list"], [1, "sidebar-title"], [3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function SidebarComponent_Template_div_mouseleave_0_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_1_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clock Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Analog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Binary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".sidenav-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]   .close-sidebar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n  background: transparent;\n  border: none;\n  color: white;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]   .sidenav-list[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]   .sidenav-list[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  font-size: 2em;\n  margin-top: -59px;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]   .sidenav-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  background: transparent;\n  border: 0px;\n  transition: 0.3s;\n  text-align: center;\n  padding: 25px 0px;\n  outline: none;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]   .sidenav-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #f1f1f1;\n}\n#main[_ngcontent-%COMP%] {\n  transition: margin-left 0.5s;\n  padding: 20px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9CYWNrdXAvUHJvamVjdHMvUHJvamVjdHMvQW5ndWxhci9QcmFjdGljZS9jbG9jay9zcmMvYXBwL21haW4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNBSjtBRENJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ047QURDSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NOO0FEQ007RUFDRSxjQUFBO0FDQ1I7QURNQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtBQ0hGO0FETUEsZ0lBQUE7QUFDQTtFQUNFO0lBQVUsaUJBQUE7RUNGVjs7RURHQTtJQUFZLGVBQUE7RUNDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcblxuICAuY2xvc2Utc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5zaWRlbmF2LWxpc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLnNpZGViYXItdGl0bGUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtNTlweDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiAjODE4MTgxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cbiNtYWluIHtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGVuYXYgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxuICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxufVxuIiwiLnNpZGVuYXYtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uc2lkZW5hdi13cmFwcGVyIC5jbG9zZS1zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZW5hdi13cmFwcGVyIC5zaWRlbmF2LWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZGVuYXYtd3JhcHBlciAuc2lkZW5hdi1saXN0IC5zaWRlYmFyLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAtNTlweDtcbn1cbi5zaWRlbmF2LXdyYXBwZXIgLnNpZGVuYXYtbGlzdCBidXR0b24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2lkZW5hdi13cmFwcGVyIC5zaWRlbmF2LWxpc3QgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbiNtYWluIHtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBjaGFuZ2UgdGhlIHN0eWxlIG9mIHRoZSBzaWRlbmF2IChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map