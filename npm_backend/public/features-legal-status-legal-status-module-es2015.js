(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-legal-status-legal-status-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>legal-status-form works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"legal-status-table\">\r\n  <h2> Stan prawny lokali mieszkalnych i użytkowych </h2>\r\n\r\n  <button mat-raised-button class=\"mat-raised-button__functional\" (click)=\"openForm()\"> Nowy rekord </button>\r\n  <button mat-raised-button class=\"mat-raised-button__functional\" > Eksport do excell </button>\r\n\r\n  <mat-card>Brak rekordów w bazie danych</mat-card>\r\n</div> -->\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <h2> Stan prawny lokali mieszkalnych i użytkowych </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <button mat-raised-button class=\"mat-raised-button__functional\" (click)=\"openForm()\"> Nowy rekord </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvbGVnYWwtc3RhdHVzL2xlZ2FsLXN0YXR1cy1mb3JtL2xlZ2FsLXN0YXR1cy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LegalStatusFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalStatusFormComponent", function() { return LegalStatusFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LegalStatusFormComponent = class LegalStatusFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
LegalStatusFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legal-status-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./legal-status-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./legal-status-form.component.scss */ "./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.scss")).default]
    })
], LegalStatusFormComponent);



/***/ }),

/***/ "./src/app/modules/features/legal-status/legal-status-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/features/legal-status/legal-status-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: LegalStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalStatusRoutingModule", function() { return LegalStatusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _legal_status_table_legal_status_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legal-status-table/legal-status-table.component */ "./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.ts");




const routes = [
    { path: 'legalStatusTable', component: _legal_status_table_legal_status_table_component__WEBPACK_IMPORTED_MODULE_3__["LegalStatusTableComponent"] }
];
let LegalStatusRoutingModule = class LegalStatusRoutingModule {
};
LegalStatusRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LegalStatusRoutingModule);



/***/ }),

/***/ "./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".legal-status-table {\n  width: 100vw;\n}\n\n.div {\n  width: 700px;\n}\n\n.mat-header-cell {\n  width: 700px;\n  text-align: left;\n  padding: 15px;\n}\n\n.mat-cell {\n  padding: 15px;\n}\n\n.parcel-table {\n  margin: 30px;\n}\n\n.mat-raised-button__functional {\n  margin: 10px;\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9sZWdhbC1zdGF0dXMvbGVnYWwtc3RhdHVzLXRhYmxlL0M6XFxVc2Vyc1xca29ucmFcXERlc2t0b3BcXEdpdGh1YlxcbndwLWFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcZmVhdHVyZXNcXGxlZ2FsLXN0YXR1c1xcbGVnYWwtc3RhdHVzLXRhYmxlXFxsZWdhbC1zdGF0dXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvbGVnYWwtc3RhdHVzL2xlZ2FsLXN0YXR1cy10YWJsZS9sZWdhbC1zdGF0dXMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9sZWdhbC1zdGF0dXMvbGVnYWwtc3RhdHVzLXRhYmxlL2xlZ2FsLXN0YXR1cy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWdhbC1zdGF0dXMtdGFibGV7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4uZGl2e1xyXG4gIHdpZHRoOiA3MDBweFxyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxse1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXQtY2VsbHtcclxuICBwYWRkaW5nOiAxNXB4XHJcbn1cclxuXHJcbi5wYXJjZWwtdGFibGV7XHJcbiAgbWFyZ2luOiAzMHB4XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbl9fZnVuY3Rpb25hbHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuIiwiLmxlZ2FsLXN0YXR1cy10YWJsZSB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmRpdiB7XG4gIHdpZHRoOiA3MDBweDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHdpZHRoOiA3MDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnBhcmNlbC10YWJsZSB7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uX19mdW5jdGlvbmFsIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: LegalStatusTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalStatusTableComponent", function() { return LegalStatusTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _legal_status_form_legal_status_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../legal-status-form/legal-status-form.component */ "./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.ts");




let LegalStatusTableComponent = class LegalStatusTableComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    ngAfterViewInit() { }
    openForm() {
        const dialogRef = this.dialog.open(_legal_status_form_legal_status_form_component__WEBPACK_IMPORTED_MODULE_3__["LegalStatusFormComponent"], {
            width: '640px', disableClose: true
        });
    }
    closeDialog() {
        this.dialog.closeAll();
    }
};
LegalStatusTableComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
LegalStatusTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legal-status-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./legal-status-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./legal-status-table.component.scss */ "./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.scss")).default]
    })
], LegalStatusTableComponent);



/***/ }),

/***/ "./src/app/modules/features/legal-status/legal-status.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/features/legal-status/legal-status.module.ts ***!
  \**********************************************************************/
/*! exports provided: LegalStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalStatusModule", function() { return LegalStatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _legal_status_table_legal_status_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legal-status-table/legal-status-table.component */ "./src/app/modules/features/legal-status/legal-status-table/legal-status-table.component.ts");
/* harmony import */ var _legal_status_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legal-status-routing.module */ "./src/app/modules/features/legal-status/legal-status-routing.module.ts");
/* harmony import */ var src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _legal_status_form_legal_status_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legal-status-form/legal-status-form.component */ "./src/app/modules/features/legal-status/legal-status-form/legal-status-form.component.ts");







let LegalStatusModule = class LegalStatusModule {
};
LegalStatusModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _legal_status_table_legal_status_table_component__WEBPACK_IMPORTED_MODULE_3__["LegalStatusTableComponent"],
            _legal_status_form_legal_status_form_component__WEBPACK_IMPORTED_MODULE_6__["LegalStatusFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _legal_status_routing_module__WEBPACK_IMPORTED_MODULE_4__["LegalStatusRoutingModule"],
            src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
        ]
    })
], LegalStatusModule);



/***/ })

}]);
//# sourceMappingURL=features-legal-status-legal-status-module-es2015.js.map