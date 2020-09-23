(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <h2>Witaj na użytkowniku kmolik</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <img src=\"assets/budynek.jpg\" alt=\"\">\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/modules/features/dashboard/dashboard-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/features/dashboard/dashboard-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _table_dashboard_table_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-dashboard/table-dashboard.component */ "./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.ts");




const routes = [
    { path: 'tableDashboard', component: _table_dashboard_table_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TableDashboardComponent"] }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/modules/features/dashboard/dashboard.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/features/dashboard/dashboard.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _table_dashboard_table_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-dashboard/table-dashboard.component */ "./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/features/dashboard/dashboard-routing.module.ts");





let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_table_dashboard_table_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TableDashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvZGFzaGJvYXJkL3RhYmxlLWRhc2hib2FyZC90YWJsZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TableDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDashboardComponent", function() { return TableDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TableDashboardComponent = class TableDashboardComponent {
    constructor() { }
    ngOnInit() { }
};
TableDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-economy-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./table-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./table-dashboard.component.scss */ "./src/app/modules/features/dashboard/table-dashboard/table-dashboard.component.scss")).default]
    })
], TableDashboardComponent);



/***/ })

}]);
//# sourceMappingURL=features-dashboard-dashboard-module-es2015.js.map