(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-economy-economy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-side-menu></app-side-menu>\r\n");

/***/ }),

/***/ "./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWNvbm9teS9jb21wb25lbnRzL2Vjb25vbXktZGFzaGJvYXJkL2Vjb25vbXktZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EconomyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomyDashboardComponent", function() { return EconomyDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EconomyDashboardComponent = class EconomyDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
EconomyDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-economy-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./economy-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./economy-dashboard.component.scss */ "./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.scss")).default]
    })
], EconomyDashboardComponent);



/***/ }),

/***/ "./src/app/modules/economy/economy-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/economy/economy-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EconomyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomyRoutingModule", function() { return EconomyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_economy_dashboard_economy_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/economy-dashboard/economy-dashboard.component */ "./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.ts");




const routes = [
    {
        path: '',
        component: _components_economy_dashboard_economy_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["EconomyDashboardComponent"],
        children: [
            {
                path: 'parcel',
                loadChildren: () => Promise.all(/*! import() | features-parcel-parcel-module */[__webpack_require__.e("default~features-buildings-buildings-module~features-legal-status-legal-status-module~features-parce~e84e3771"), __webpack_require__.e("features-parcel-parcel-module")]).then(__webpack_require__.bind(null, /*! ../features/parcel/parcel.module */ "./src/app/modules/features/parcel/parcel.module.ts")).then(m => m.ParcelModule)
            },
            {
                path: 'buildings',
                loadChildren: () => Promise.all(/*! import() | features-buildings-buildings-module */[__webpack_require__.e("default~features-buildings-buildings-module~features-legal-status-legal-status-module~features-parce~e84e3771"), __webpack_require__.e("features-buildings-buildings-module")]).then(__webpack_require__.bind(null, /*! ../features/buildings/buildings.module */ "./src/app/modules/features/buildings/buildings.module.ts")).then(m => m.BuildingsModule)
            },
            {
                path: 'status',
                loadChildren: () => Promise.all(/*! import() | features-legal-status-legal-status-module */[__webpack_require__.e("default~features-buildings-buildings-module~features-legal-status-legal-status-module~features-parce~e84e3771"), __webpack_require__.e("features-legal-status-legal-status-module")]).then(__webpack_require__.bind(null, /*! ../features/legal-status/legal-status.module */ "./src/app/modules/features/legal-status/legal-status.module.ts")).then(m => m.LegalStatusModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | features-dashboard-dashboard-module */ "features-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../features/dashboard/dashboard.module */ "./src/app/modules/features/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            }
        ]
    }
];
let EconomyRoutingModule = class EconomyRoutingModule {
};
EconomyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EconomyRoutingModule);



/***/ }),

/***/ "./src/app/modules/economy/economy.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/economy/economy.module.ts ***!
  \***************************************************/
/*! exports provided: EconomyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomyModule", function() { return EconomyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _economy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./economy-routing.module */ "./src/app/modules/economy/economy-routing.module.ts");
/* harmony import */ var _components_economy_dashboard_economy_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/economy-dashboard/economy-dashboard.component */ "./src/app/modules/economy/components/economy-dashboard/economy-dashboard.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");






let EconomyModule = class EconomyModule {
};
EconomyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_economy_dashboard_economy_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["EconomyDashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _economy_routing_module__WEBPACK_IMPORTED_MODULE_3__["EconomyRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
        ]
    })
], EconomyModule);



/***/ })

}]);
//# sourceMappingURL=modules-economy-economy-module-es2015.js.map