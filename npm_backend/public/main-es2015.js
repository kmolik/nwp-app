(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/admin/admin.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/admin/admin.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logSrceen\">\r\n  <img mat-card-image class=\"logo\" src=\"assets/logo.gif\">\r\n  <h1>Województwo Zachodniopomorskie</h1>\r\n  <h3>Mienie Skarbu Państwa</h3>\r\n\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <div class=\"login-container\">\r\n      <h2>Logowanie</h2>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12 form-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"login\" formControlName=\"username\">\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12 form-group\">\r\n              <input type=\"password\" placeholder=\"hasło\" class=\"form-control\" formControlName=\"password\">\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12 form-group\">\r\n              <input type=\"submit\" class=\"btn btn-block btn-login\" placeholder=\"Zaloguj\">\r\n          </div>\r\n      </div>\r\n  </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <span>\r\n      <p>Aplikacja stworzona dla Zachodniopomorskiego Urzedu Wojewódzkiego w Szczecinie</p>\r\n    </span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-2\" style=\"background-color: #707070;\">\r\n      <img mat-card-image class=\"logo\" src=\"assets/logo.gif\">\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\" style=\"background-color: #707070;\">\r\n      <h1 class=\"tittle\">\r\n        Województwo Zachodniopomorskie - mienie Skarbu Państwa\r\n      </h1>\r\n    </div>\r\n\r\n    <div class=\"col-sm-2\" style=\"background-color: #707070;\">\r\n      <button class=\"logoutBtn\" mat-raised-button (click)=\"logout()\">Wyloguj</button>\r\n    </div>\r\n  </div>\r\n </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/side-menu/side-menu.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/side-menu/side-menu.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <button mat-raised-button routerLink=\"/economy/dashboard/tableDashboard\" routerLinkActive=\"active\"> Wróć do strony głównej </button>\r\n\r\n      <mat-drawer-container class=\"example-container\" autosize style=\"position: absolute\">\r\n        <mat-drawer mode=\"side\" opened>\r\n          <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n            <!-- This is the tree node template for leaf nodes -->\r\n            <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding matTreeNodePaddingIndent=\"5\">\r\n              <!-- use a disabled button to provide padding for tree leaf -->\r\n              <button mat-icon-button disabled></button>\r\n              <button mat-button (click)=\"goTo(node.path)\">{{node.name}}</button>\r\n            </mat-tree-node>\r\n              <!-- This is the tree node template for expandable nodes -->\r\n            <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodePaddingIndent=\"15\">\r\n              <button mat-icon-button matTreeNodeToggle\r\n                      [attr.aria-label]=\"'toggle ' + node.name\" >\r\n                <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                  {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n                </mat-icon>\r\n              </button>\r\n              {{node.name}}\r\n            </mat-tree-node>\r\n          </mat-tree>\r\n        </mat-drawer>\r\n\r\n        <mat-drawer-content>\r\n          <router-outlet></router-outlet>\r\n        </mat-drawer-content>\r\n\r\n      </mat-drawer-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth/login/login.component */ "./src/app/core/auth/login/login.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _core_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guards/un-auth.guard */ "./src/app/core/guards/un-auth.guard.ts");






const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                canActivate: [_core_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_5__["UnAuthGuard"]],
                component: _core_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
            {
                path: 'economy',
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-economy-economy-module */ "modules-economy-economy-module").then(__webpack_require__.bind(null, /*! ./modules/economy/economy.module */ "./src/app/modules/economy/economy.module.ts")).then(m => m.EconomyModule)
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/http */ "./src/app/core/http/index.ts");




let AppComponent = class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'nwp-app';
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_http__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptors/token.interceptor */ "./src/app/core/interceptors/token.interceptor.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _core_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/guards/un-auth.guard */ "./src/app/core/guards/un-auth.guard.ts");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
                multi: true
            },
            _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
            _core_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_11__["UnAuthGuard"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/auth/admin/admin.component.sass":
/*!******************************************************!*\
  !*** ./src/app/core/auth/admin/admin.component.sass ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/core/auth/admin/admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/admin/admin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/admin/admin.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.component.sass */ "./src/app/core/auth/admin/admin.component.sass")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/core/auth/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/core/auth/login/login.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logSrceen {\n  text-align: center;\n  background-color: #707070;\n  color: white;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.logo {\n  margin-top: 100px;\n  width: 190px;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n.login-container {\n  width: 300px;\n  max-width: 100%;\n  margin: 50px auto;\n}\n\n.login-container h2 {\n  text-align: center;\n  font-size: 20px;\n}\n\n.login-container .btn-login {\n  background-color: #FF5964;\n  color: #fff;\n}\n\na {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9hdXRoL2xvZ2luL0M6XFxVc2Vyc1xca29ucmFcXERlc2t0b3BcXEdpdGh1YlxcbndwLWFwcC9zcmNcXGFwcFxcY29yZVxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBREtBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dTcmNlZW4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB3aWR0aDogMTkwcHg7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1jb250YWluZXJ7XHJcbiAgd2lkdGg6MzAwcHg7XHJcbiAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luOjUwcHggYXV0bztcclxufVxyXG4ubG9naW4tY29udGFpbmVyIGgye1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5idG4tbG9naW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojRkY1OTY0O1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuYXtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcblxyXG4iLCIubG9nU3JjZWVuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB3aWR0aDogMTkwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLmxvZ2luLWNvbnRhaW5lciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9naW4tY29udGFpbmVyIC5idG4tbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1OTY0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/auth/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/index */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _http___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/ */ "./src/app/core/http/index.ts");






let LoginComponent = class LoginComponent {
    constructor(router, authService, fb, storageService) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.storageService = storageService;
        this.flag = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onSubmit() {
        this.authService.login(this.loginForm.value).subscribe((res) => {
            this.storageService.setLocalStorageItem('token', (res.accessToken));
            this.authService.authenticatedUser();
            this.router.navigate(['/economy/dashboard/tableDashboard']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http___WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/core/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/core/auth/login/login.component.ts");




const routes = [
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let CoreRoutingModule = class CoreRoutingModule {
};
CoreRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CoreRoutingModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _http_parcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/parcel.service */ "./src/app/core/http/parcel.service.ts");
/* harmony import */ var _http_buildings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/buildings.service */ "./src/app/core/http/buildings.service.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/core/side-menu/side-menu.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/core/auth/login/login.component.ts");
/* harmony import */ var _auth_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/admin/admin.component */ "./src/app/core/auth/admin/admin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













let CoreModule = class CoreModule {
};
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _auth_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
        ],
        providers: [
            _http_parcel_service__WEBPACK_IMPORTED_MODULE_7__["ParcelService"],
            _http_buildings_service__WEBPACK_IMPORTED_MODULE_8__["BuildingsService"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".span {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxrb25yYVxcRGVza3RvcFxcR2l0aHViXFxud3AtYXBwL3NyY1xcYXBwXFxjb3JlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYW57XHJcbiAgcG9zaXRpb246IGZpeGVkXHJcbn1cclxuIiwiLnNwYW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http */ "./src/app/core/http/index.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        let isAuth = false;
        this.authService.auth$.subscribe(res => {
            isAuth = res;
            if (!isAuth) {
                this.router.navigate(['/login']);
            }
        });
        return isAuth;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _http__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/core/guards/un-auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/core/guards/un-auth.guard.ts ***!
  \**********************************************/
/*! exports provided: UnAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnAuthGuard", function() { return UnAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http */ "./src/app/core/http/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





let UnAuthGuard = class UnAuthGuard {
    constructor(authService, router, location) {
        this.authService = authService;
        this.router = router;
        this.location = location;
    }
    canActivate(route, state) {
        let isAuth = true;
        if (!!this.authService.getToken()) {
            isAuth = false;
            this.authService.authenticatedUser();
            this.router.navigate(['/economy/buildings/buildingsTable']);
        }
        return isAuth;
    }
};
UnAuthGuard.ctorParameters = () => [
    { type: _http__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
UnAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UnAuthGuard);



/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  justify-content: center;\n  position: static;\n  margin-left: 25px;\n  margin-top: 20px;\n  margin-right: 25px;\n  margin-bottom: 20px;\n  width: 150px;\n}\n\n.tittle {\n  margin-top: 20px;\n}\n\n.logoutBtn {\n  justify-content: right;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFVzZXJzXFxrb25yYVxcRGVza3RvcFxcR2l0aHViXFxud3AtYXBwL3NyY1xcYXBwXFxjb3JlXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nbyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLnRpdHRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxvZ291dEJ0biB7XHJcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiIsIi5sb2dvIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnRpdHRsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sb2dvdXRCdG4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http */ "./src/app/core/http/index.ts");





let HeaderComponent = class HeaderComponent {
    constructor(router, storageService, authService) {
        this.router = router;
        this.storageService = storageService;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logout() {
        this.router.navigate(['/login']);
        this.storageService.deleteLocalStorageItem('token');
        this.authService.unAuthenticatedUser();
        console.log('Loged Out');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _http__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/http/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");






let AuthService = class AuthService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.isAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.tokenKey = 'token';
    }
    get auth$() {
        return this.isAuth$.asObservable();
    }
    login(credentials) {
        const url = `${this.domain}/auth/signin`;
        return this.http.post(url, credentials);
    }
    getToken() {
        return this.storageService.getLocalStorageItem(this.tokenKey);
    }
    setAuth(authenticated) {
        this.isAuth$.next(authenticated);
    }
    authenticatedUser() {
        this.setAuth(true);
    }
    unAuthenticatedUser() {
        this.setAuth(false);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/core/http/buildings.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/http/buildings.service.ts ***!
  \************************************************/
/*! exports provided: BuildingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsService", function() { return BuildingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





let BuildingsService = class BuildingsService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/buildings`;
    }
    getBuildings() {
        return this.http.get(this.url);
    }
};
BuildingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
BuildingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BuildingsService);



/***/ }),

/***/ "./src/app/core/http/index.ts":
/*!************************************!*\
  !*** ./src/app/core/http/index.ts ***!
  \************************************/
/*! exports provided: BuildingsService, ParcelService, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _buildings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildings.service */ "./src/app/core/http/buildings.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildingsService", function() { return _buildings_service__WEBPACK_IMPORTED_MODULE_1__["BuildingsService"]; });

/* harmony import */ var _parcel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parcel.service */ "./src/app/core/http/parcel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParcelService", function() { return _parcel_service__WEBPACK_IMPORTED_MODULE_2__["ParcelService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/http/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]; });







/***/ }),

/***/ "./src/app/core/http/parcel.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/http/parcel.service.ts ***!
  \*********************************************/
/*! exports provided: ParcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParcelService", function() { return ParcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let ParcelService = class ParcelService {
    constructor(http) {
        this.http = http;
        this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/parcels`;
    }
    getParcels() {
        return this.http.get(this.url);
    }
};
ParcelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ParcelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ParcelService);



/***/ }),

/***/ "./src/app/core/interceptors/token.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/token.interceptor.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http */ "./src/app/core/http/index.ts");



let TokenInterceptor = class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const cloned = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this.authService.getToken()}`)
        });
        return next.handle(cloned);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _http__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/chips.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tree.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");

















const material = [
    _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [material],
        exports: [material]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/core/models/tableTree.ts":
/*!******************************************!*\
  !*** ./src/app/core/models/tableTree.ts ***!
  \******************************************/
/*! exports provided: tableTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableTree", function() { return tableTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const tableTree = [
    {
        name: 'Miasta',
        children: [
            {
                name: 'Szczecin',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Świnoujście',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Koszalin',
                children: [
                    { name: 'Działki ewidencyjne', path: 'economy/parcel/parcelTable' },
                    { name: 'Budynki i budowle', path: 'economy/buildings/buildingsTable' },
                    { name: 'Stan prawny lokali', path: 'economy/status/legalStatusTable' }
                ]
            },
        ]
    },
    {
        name: 'Powiaty',
        children: [
            {
                name: 'Białogardzki',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Choszczeński',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Drawski',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Goleniowski',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Gryficki',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Gryfiński',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Kamieński',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Kołobrzeski',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Koszaliński',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Łobeski',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Myśliborski',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Policki',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Pyrzycki',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Sławeński',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Stargardzki',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Szczecinecki',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Świdwiński',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            },
            {
                name: 'Wałecki',
                children: [
                    { name: 'Działki ewidencyjne' },
                    { name: 'Budynki i budowle' },
                    { name: 'Stan prawny lokali' }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/core/services/storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]; });





/***/ }),

/***/ "./src/app/core/services/storage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StorageService = class StorageService {
    constructor() { }
    setLocalStorageItem(key, value) {
        localStorage.setItem(key, value);
    }
    deleteLocalStorageItem(key) {
        localStorage.removeItem(key);
    }
    getLocalStorageItem(key) {
        return localStorage.getItem(key);
    }
    clearLocalStorage() {
        localStorage.clear();
    }
};
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "./src/app/core/side-menu/side-menu.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/side-menu/side-menu.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-drawer {\n  min-width: 10%;\n  width: 304px;\n  min-width: 304px;\n  margin: 0;\n  padding: 0;\n}\n\n.router-outlet {\n  position: absolute;\n}\n\n.mat-tree-node {\n  display: flex;\n}\n\n.mat-raised-button {\n  margin-top: 15px;\n  margin-bottom: 15;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlLW1lbnUvQzpcXFVzZXJzXFxrb25yYVxcRGVza3RvcFxcR2l0aHViXFxud3AtYXBwL3NyY1xcYXBwXFxjb3JlXFxzaWRlLW1lbnVcXHNpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kcmF3ZXJ7XHJcbiAgbWluLXdpZHRoOiAxMCU7XHJcbiAgd2lkdGg6IDMwNHB4O1xyXG4gIG1pbi13aWR0aDogMzA0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5yb3V0ZXItb3V0bGV0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG59XHJcblxyXG4ubWF0LXRyZWUtbm9kZXtcclxuICBkaXNwbGF5OiBmbGV4XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNTtcclxufVxyXG4iLCIubWF0LWRyYXdlciB7XG4gIG1pbi13aWR0aDogMTAlO1xuICB3aWR0aDogMzA0cHg7XG4gIG1pbi13aWR0aDogMzA0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnJvdXRlci1vdXRsZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYXQtdHJlZS1ub2RlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTU7XG59Il19 */");

/***/ }),

/***/ "./src/app/core/side-menu/side-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/side-menu/side-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tree.js");
/* harmony import */ var _models_tableTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/tableTree */ "./src/app/core/models/tableTree.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const NEW_TREE = _models_tableTree__WEBPACK_IMPORTED_MODULE_4__["tableTree"];
let SideMenuComponent = class SideMenuComponent {
    constructor(router) {
        this.router = router;
        // tslint:disable-next-line: variable-name
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                // tslint:disable-next-line: object-literal-shorthand
                level: level,
                // tslint:disable-next-line: object-literal-shorthand
                path: node.path
            };
        };
        // tslint:disable-next-line: member-ordering
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](node => node.level, node => node.expandable);
        // tslint:disable-next-line: member-ordering
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        // tslint:disable-next-line: member-ordering
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = NEW_TREE;
    }
    ngOnInit() {
    }
    goTo(path) {
        this.router.navigate([path]);
    }
};
SideMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SideMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-side-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/side-menu/side-menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./side-menu.component.scss */ "./src/app/core/side-menu/side-menu.component.scss")).default]
    })
], SideMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://nwp-app.unicloud.pl'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\konra\Desktop\Github\nwp-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map