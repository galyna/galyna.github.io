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
/* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\n  <nb-layout-column class=\"farseer-padding16\">\n    <router-outlet>\n    </router-outlet>\n  </nb-layout-column>\n  <nb-sidebar tag=\"left\" state=\"compacted\">\n    <nb-menu [items]=\"items\">\n    </nb-menu>\n  </nb-sidebar>\n</nb-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/camera/camera.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/camera/camera.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"cam-span\">{{name}}</span>\n<img class=\"img-box\" *ngIf=\"messages$\" [src]=\"messages$\">\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-container\">\n<!--  <app-side-navigation></app-side-navigation>-->\n  <div class=\"grid-container \">\n    <h1 class=\"mat-h1 mat-typography\">СПОСТЕРЕЖЕННЯ</h1>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n    </div>\n    <ul *ngFor=\"let camera of cameras | async \">\n      <li >\n        <app-camera [id]=\"camera.id\" [name]=\"camera.name\"></app-camera>\n      </li>\n    </ul>\n\n  </div>\n<!--  <div class=\"right-container \">-->\n<!--    <h1 class=\"mat-h3 type-title\">Типи порушень</h1>-->\n<!--    <ul #shoes>-->\n<!--      <li class=\"type-option\" *ngFor=\"let shoe of typesOfShoes\">-->\n<!--        {{shoe}}-->\n<!--      </li>-->\n<!--    </ul>-->\n\n<!--  </div>-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-row\">\n  <div class=\"card-col\">\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 1</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc1\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 3</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <div class=\"video\">\n            <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc3\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                    frameborder=\"0\"\n                    webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen></iframe>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"card-col\">\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 2</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc2\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 4</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <div class=\"video\">\n            <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc4\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                    frameborder=\"0\"\n                    webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen></iframe>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container\" fxFlexFill fxLayout=\"row\" fxLayoutGap=\"8px\"  >\n  <div fxLayout=\"column\" fxFlex=\"25\" fxLayoutAlign=\"center center\">\n    <h3>Ввійти</h3>\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <p>\n        <input type=\"text\" placeholder=\"Логін\" formControlName=\"username\">\n      </p>\n      <p>\n        <input type=\"password\" placeholder=\"Пароль\" formControlName=\"password\">\n      </p>\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n      <div class=\"button\">\n        <button type=\"submit\">ДАВАЙТЕ ПОЧНЕМО!</button>\n      </div>\n    </form>\n  </div>\n\n  <div fxLayout=\"column\" fxFlex=\"75\" fxLayoutGap=\"20px\"   fxLayoutAlign=\"center center\">\n    <div  class=\"h1-work\">Працюйте в безпеці!</div>\n    <div  class=\"h5-work\">\n      Нульові травми, пов'язані з роботою, і хвороби - давня мета Фарсіру.\n      Ми вважаємо, що досконалі показники безпеки досягаються завдяки продемонстрованому видимому лідерству, взаємодії\n      з працівниками та підрядниками, а також пристрасних зусиль та участі всіх.\n      Одним із наших керівних принципів є те, що ми цінуємо життя людини понад усе та відповідно керуємо ризиками в\n      нашій діяльності.\n\n    </div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/side-navigation/side-navigation.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/side-navigation/side-navigation.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n  <nb-menu [items]=\"items\">\n  </nb-menu>\n</nb-card>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _compenents_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compenents/home/home.component */ "./src/app/compenents/home/home.component.ts");
/* harmony import */ var _compenents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compenents/dashboard/dashboard.component */ "./src/app/compenents/dashboard/dashboard.component.ts");





const routes = [
    { path: '', component: _compenents_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'dashboard', component: _compenents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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
/* harmony default export */ __webpack_exports__["default"] = ("nb-layout-column.farseer-padding16 {\n  padding: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQW9DLHdCQUFBO0FDRXJDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIG5iLWxheW91dC1jb2x1bW4uZmFyc2Vlci1wYWRkaW5nMTZ7IHBhZGRpbmc6IDE2cHghaW1wb3J0YW50O31cbiIsIm5iLWxheW91dC1jb2x1bW4uZmFyc2Vlci1wYWRkaW5nMTYge1xuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");



let AppComponent = class AppComponent {
    constructor(sidebarService, menuService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.title = 'farseer';
        this.items = [
            {
                icon: 'menu',
            },
            {
                title: 'Спостереження',
                icon: { icon: 'eye-outline', pack: 'eva' },
                link: [],
            },
            {
                title: 'Статистика',
                icon: { icon: 'bar-chart-outline', pack: 'eva' },
                link: [],
            },
            {
                title: 'Звіт',
                icon: { icon: 'file-text-outline', pack: 'eva' },
                link: [],
            },
            {
                title: 'Вихід',
                icon: 'log-out-outline',
                link: [],
            },
        ];
        this.menuService.onItemClick().subscribe((event) => {
            if (event.item.icon == "menu") {
                this.sidebarService.toggle(true, 'left');
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _compenents_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compenents/home/home.component */ "./src/app/compenents/home/home.component.ts");
/* harmony import */ var _compenents_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compenents/side-navigation/side-navigation.component */ "./src/app/compenents/side-navigation/side-navigation.component.ts");
/* harmony import */ var _compenents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./compenents/dashboard/dashboard.component */ "./src/app/compenents/dashboard/dashboard.component.ts");
/* harmony import */ var _compenents_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compenents/login/login.component */ "./src/app/compenents/login/login.component.ts");
/* harmony import */ var _compenents_camera_camera_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./compenents/camera/camera.component */ "./src/app/compenents/camera/camera.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/camera.service */ "./src/app/services/camera.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");



















// @ts-ignore
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _compenents_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_8__["SideNavigationComponent"],
            _compenents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _compenents_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _compenents_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _compenents_camera_camera_component__WEBPACK_IMPORTED_MODULE_11__["CameraComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbThemeModule"].forRoot({ name: 'cosmic' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_17__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbSidebarModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbActionsModule"]
        ],
        providers: [
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _services_camera_service__WEBPACK_IMPORTED_MODULE_13__["CameraService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _helpers__WEBPACK_IMPORTED_MODULE_14__["ApiPathInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _helpers__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/compenents/camera/camera.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/compenents/camera/camera.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-box {\n  margin: 10px;\n  max-height: 300px;\n  max-width: 200px;\n}\n\n.img-box {\n  max-height: 300px;\n  max-width: 400px;\n}\n\n.cam-span {\n  margin: 8px;\n  width: 50px;\n  color: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGVuZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcGVuZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1ib3h7XG4gIG1hcmdpbjogMTBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG4uaW1nLWJveHtcblxuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5jYW0tc3BhbntcbiAgbWFyZ2luOiA4cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBjb2xvcjogI2NjY2NjYztcbn1cbiIsIi5pbWctYm94IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLmltZy1ib3gge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmNhbS1zcGFuIHtcbiAgbWFyZ2luOiA4cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBjb2xvcjogI2NjY2NjYztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/compenents/camera/camera.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/compenents/camera/camera.component.ts ***!
  \*******************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm2015/webSocket/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





let CameraComponent = class CameraComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.messages$ = "assets/Group 28.png";
        if (this.id) {
            this.startSocket(this.id);
            this.name = "Камера " + this.id;
        }
    }
    startSocket(id) {
        this.WebSocketSubject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__["webSocket"])({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cameraURLWS(id),
            deserializer: (msg) => {
                return msg.data;
            }
        });
        this.WebSocketSubject.subscribe(msg => {
            this.messages$ = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(msg));
        }, // Called whenever there is a message from the server.
        // Called whenever there is a message from the server.
        err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
        () => console.log('complete') // Called when connection is closed (for whatever reason).
        );
    }
    ngOnDestroy() {
        this.WebSocketSubject.unsubscribe();
    }
};
CameraComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CameraComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CameraComponent.prototype, "name", void 0);
CameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-camera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./camera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/camera/camera.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./camera.component.scss */ "./src/app/compenents/camera/camera.component.scss")).default]
    })
], CameraComponent);



/***/ }),

/***/ "./src/app/compenents/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/compenents/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-h1 {\n  margin: 20px;\n  color: #cccccc;\n}\n\n.mat-h3 {\n  margin: 20px;\n  color: #05C985;\n}\n\n.right-container {\n  margin-top: 50px;\n  height: 100%;\n  min-width: 150px;\n  float: right;\n}\n\n.type-name {\n  min-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGVuZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxjQVhxQjtBQ092Qjs7QURTQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBlbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiAjMDVDOTg1O1xuXG4kbGlnaHQtcHJpbWFyeS10ZXh0OiAjQ0NDQ0NDO1xuXG4ubWF0LWgxe1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4ubWF0LWgze1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAkbGlnaHQtc2Vjb25kYXJ5LXRleHRcbn1cblxuXG5cbi5yaWdodC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuXG4udHlwZS1uYW1lIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuIiwiLm1hdC1oMSB7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbi5tYXQtaDMge1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjMDVDOTg1O1xufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50eXBlLW5hbWUge1xuICBtaW4td2lkdGg6IDE1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/compenents/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/compenents/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/camera.service */ "./src/app/services/camera.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(cameraService) {
        this.cameraService = cameraService;
        this.typesOfShoes = ['Людина', 'Шолом', 'Окуляри', 'Зони'];
    }
    ngOnInit() {
        document.getElementById('lamp-anim').hidden = true;
        this.cameras = this.cameraService.todos; // subscribe to entire collection
        this.cameraService.loadAll();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/compenents/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/compenents/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/compenents/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.card-row {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 -0.5rem;\n}\n\n.card-col {\n  -webkit-box-flex: 1;\n          flex: 1 0 calc(50% - 1rem);\n  margin: 0 0.5rem;\n}\n\n.farseer-card {\n  margin-bottom: 8px;\n}\n\n.farseer-card-header {\n  height: 40px;\n  padding: 8px 16px;\n}\n\n.farseer-card-body {\n  margin: 0 auto;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wZW5lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcGVuZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gLy8gbWF4LWhlaWdodDogODByZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNhcmQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0wLjVyZW07XG59XG5cbi5jYXJkLWNvbCB7XG4gIGZsZXg6IDEgMCBjYWxjKDUwJSAtIDFyZW0pO1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuXG4uZmFyc2Vlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQtYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jYXJkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAtMC41cmVtO1xufVxuXG4uY2FyZC1jb2wge1xuICBmbGV4OiAxIDAgY2FsYyg1MCUgLSAxcmVtKTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbn1cblxuLmZhcnNlZXItY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmZhcnNlZXItY2FyZC1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/compenents/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/compenents/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");




let HomeComponent = class HomeComponent {
    constructor(sanitizer, breakpointObserver) {
        this.sanitizer = sanitizer;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 1280px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.widthVideo = "580px";
                this.heightVideo = "266px";
            }
            else {
                this.widthVideo = "400px";
                this.heightVideo = "266px";
            }
        });
        this.safeSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/eKFTSSKCzWA");
        this.safeSrc2 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/74b3Zb18UDM");
        this.safeSrc3 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5lCRsLjMeso");
        this.safeSrc4 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lM02vNMRRB0");
    }
    toggleVideo1() {
        this.videoplayer1.nativeElement.play();
    }
    toggleVideo2() {
        this.videoplayer2.nativeElement.play();
    }
    toggleVideo3() {
        this.videoplayer4.nativeElement.play();
    }
    toggleVideo4() {
        this.videoplayer4.nativeElement.play();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer1", { static: false })
], HomeComponent.prototype, "videoplayer1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer2", { static: false })
], HomeComponent.prototype, "videoplayer2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer3", { static: false })
], HomeComponent.prototype, "videoplayer3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer4", { static: false })
], HomeComponent.prototype, "videoplayer4", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/home/home.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/compenents/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/compenents/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/compenents/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\n  font-family: Rubik, serif;\n  color: #CCCCCC;\n}\n\n.hello-text-container {\n  color: #CCCCCC;\n  font-family: Rubik, serif;\n}\n\n.h1-work {\n  text-transform: uppercase;\n  width: 450px;\n  font-family: Rubik, serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 38px;\n}\n\n.h5-work {\n  color: #CCCCCC;\n  height: 300px;\n  width: 450px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 30px;\n}\n\n.button {\n  border-radius: 0px;\n  border: #cccccc 2px solid;\n  color: #CCCCCC;\n  width: 196px;\n  background: #05C985;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\ninput {\n  height: 20px;\n  padding: 8px;\n}\n\n.error {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBlbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFRSx5QkFBQTtFQUNBLGNBTG1CO0FDRXJCOztBRE1BO0VBQ0UsY0FUbUI7RUFVbkIseUJBQUE7QUNIRjs7QURLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsY0F2Qm1CO0VBd0JuQixhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQXRDbUI7RUF1Q25CLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9jb21wZW5lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiAjMDVDOTg1O1xuJGxpZ2h0LXByaW1hcnktdGV4dDogI0NDQ0NDQztcblxuLmxvZ2luLWNvbnRhaW5lciB7XG5cbiAgZm9udC1mYW1pbHk6IFJ1YmlrLCBzZXJpZjtcbiAgY29sb3I6ICRsaWdodC1wcmltYXJ5LXRleHQ7XG59XG5cbi5oZWxsby10ZXh0LWNvbnRhaW5lcntcbiAgY29sb3I6ICRsaWdodC1wcmltYXJ5LXRleHQ7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaywgc2VyaWY7XG59XG4uaDEtd29yayB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiA0NTBweDtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLCBzZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLmg1LXdvcmsge1xuICBjb2xvcjogJGxpZ2h0LXByaW1hcnktdGV4dDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQ1MHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cblxuXG5cbi5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogI2NjY2NjYyAycHggc29saWQ7XG4gIGNvbG9yOiAkbGlnaHQtcHJpbWFyeS10ZXh0O1xuICB3aWR0aDogMTk2cHg7XG4gIGJhY2tncm91bmQ6ICMwNUM5ODU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5lcnJvciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iLCIubG9naW4tY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLCBzZXJpZjtcbiAgY29sb3I6ICNDQ0NDQ0M7XG59XG5cbi5oZWxsby10ZXh0LWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICBmb250LWZhbWlseTogUnViaWssIHNlcmlmO1xufVxuXG4uaDEtd29yayB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiA0NTBweDtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLCBzZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLmg1LXdvcmsge1xuICBjb2xvcjogI0NDQ0NDQztcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQ1MHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogI2NjY2NjYyAycHggc29saWQ7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICB3aWR0aDogMTk2cHg7XG4gIGJhY2tncm91bmQ6ICMwNUM5ODU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5lcnJvciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/compenents/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/compenents/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.model = {};
        this.isLoading = false;
    }
    submit() {
        this.router.navigate(['/dashboard']);
        if (this.form.valid) {
        }
    }
    ngOnInit() {
        if (document.getElementById('lamp-anim')) {
            document.getElementById('lamp-anim').hidden = false;
            //window.lavaAnimation.run();
        }
    }
    login() {
        //TODO remove if server runs
        this.router.navigate(['/dashboard']);
        this.isLoading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(data => {
            this.router.navigate(['/dashboard']);
            document.getElementById('lamp-anim').hidden = true;
        }, error => {
            this.isLoading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginComponent.prototype, "error", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/compenents/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/compenents/side-navigation/side-navigation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/compenents/side-navigation/side-navigation.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("aside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 221px;\n  z-index: 1;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.1)));\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%);\n  border-radius: 0px 16px 0px 0px;\n}\n\nsection {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  overflow: hidden;\n}\n\nlabel {\n  display: inline-block;\n  padding: 7px 10px;\n  background-color: transparent;\n  cursor: pointer;\n  margin: 10px;\n  z-index: 3;\n  position: fixed;\n}\n\n.bar {\n  display: block;\n  background-color: #CCCCCC;\n  width: 24px;\n  height: 3px;\n  border-radius: 5px;\n  margin: 5px auto;\n  -webkit-transition: background-color 0.5s ease-in, width 0.5s ease-in, -webkit-transform 0.5s ease-in;\n  transition: background-color 0.5s ease-in, width 0.5s ease-in, -webkit-transform 0.5s ease-in;\n  transition: background-color 0.5s ease-in, transform 0.5s ease-in, width 0.5s ease-in;\n  transition: background-color 0.5s ease-in, transform 0.5s ease-in, width 0.5s ease-in, -webkit-transform 0.5s ease-in;\n}\n\n.content {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  right: 0;\n  left: 0;\n  background: linear-gradient(73.3deg, #000428 11.48%, #02213B 49.48%, #000428 88.93%);\n  z-index: 2;\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\n  transition: -webkit-transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\n}\n\n.asideList {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 150px;\n  text-align: left;\n}\n\n.asideAnchor {\n  display: block;\n  color: #CCCCCC;\n  text-decoration: none;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  position: relative;\n  padding: 8px 0px 8px 0px;\n}\n\n.asideAnchor-icon {\n  display: inline-block;\n  margin: 0px 24px -6px 24px;\n}\n\n.asideAnchor-label {\n  display: inline-block;\n  height: 32px;\n}\n\n.asideAnchor::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: #CCCCCC;\n  width: 0;\n  z-index: -1;\n}\n\n.asideAnchor:hover {\n  color: #05C985;\n  background: -webkit-gradient(linear, right top, left top, from(rgba(13, 12, 51, 0.84)), to(#050c33));\n  background: linear-gradient(270deg, rgba(13, 12, 51, 0.84) 0%, #050c33 100%);\n}\n\n.asideAnchor:hover::after {\n  width: 100%;\n}\n\ninput[type=checkbox] {\n  display: none;\n}\n\ninput[type=checkbox] ~ .content {\n  -webkit-transform: translateX(64px);\n          transform: translateX(64px);\n}\n\ninput[type=checkbox]:checked ~ .content {\n  -webkit-transform: translateX(221px);\n          transform: translateX(221px);\n}\n\ninput[type=checkbox]:checked ~ label .bar {\n  background-color: #CCCCCC;\n}\n\ninput[type=checkbox]:checked ~ label .top {\n  -webkit-transform: translateY(0px) rotateZ(45deg);\n  transform: translateY(0px) rotateZ(45deg);\n}\n\ninput[type=checkbox]:checked ~ label .bottom {\n  -webkit-transform: translateY(-15px) rotateZ(-45deg);\n  transform: translateY(-15px) rotateZ(-45deg);\n}\n\ninput[type=checkbox]:checked ~ label .middle {\n  width: 0;\n}\n\n.middle {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvc2lkZS1uYXZpZ2F0aW9uL3NpZGUtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGVuZW50cy9zaWRlLW5hdmlnYXRpb24vc2lkZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBVGdCO0VBVWhCLFVBQUE7RUFDQSxxSEFBQTtFQUFBLDRGQUFBO0VBQ0EsK0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0VBQ0EseUJBcENtQjtFQXFDbkIsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUdBQUE7RUFBQSw2RkFBQTtFQUFBLHFGQUFBO0VBQUEscUhBQUE7QUNMRjs7QURRQTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG9GQS9DZ0I7RUFnRGhCLFVBQUE7RUFDQSxzREFBQTtFQUFBLDhDQUFBO0VBQUEsc0NBQUE7RUFBQSwwRUFBQTtBQ0xGOztBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQTtFQUNFLGNBQUE7RUFDQSxjQWxFbUI7RUFtRW5CLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNORjs7QURTQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7QUNORjs7QURTQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBNUZtQjtFQTZGbkIsUUFBQTtFQUVBLFdBQUE7QUNQRjs7QURVQTtFQUNFLGNBcEdxQjtFQXFHckIsb0dBQUE7RUFBQSw0RUFBQTtBQ1BGOztBRFlBO0VBQ0UsV0FBQTtBQ1RGOztBRFlBO0VBQ0UsYUFBQTtBQ1RGOztBRFlBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQ1RGOztBRFlBO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtBQ1RGOztBRGFBO0VBQ0UseUJBM0htQjtBQ2lIckI7O0FEYUE7RUFDRSxpREFBQTtFQUlBLHlDQUFBO0FDVkY7O0FEYUE7RUFDRSxvREFBQTtFQUlBLDRDQUFBO0FDVkY7O0FEYUE7RUFDRSxRQUFBO0FDVkY7O0FEYUE7RUFDRSxjQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9jb21wZW5lbnRzL3NpZGUtbmF2aWdhdGlvbi9zaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGlnaHQtc2Vjb25kYXJ5LXRleHQ6ICMwNUM5ODU7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiAjQ0NDQ0NDO1xuJG1lbnUtb3Blbi13aWR0aDogMjIxcHg7XG4kbWVudS13aWR0aDogNjRweDtcbiRzaXRlLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3My4zZGVnLCAjMDAwNDI4IDExLjQ4JSwgIzAyMjEzQiA0OS40OCUsICMwMDA0MjggODguOTMlKTtcblxuYXNpZGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogJG1lbnUtb3Blbi13aWR0aDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNnB4IDBweCAwcHg7XG59XG5cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1wcmltYXJ5LXRleHQ7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBlYXNlLWluLCB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4sIHdpZHRoIC41cyBlYXNlLWluO1xufVxuXG4uY29udGVudCB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAkc2l0ZS1iYWNrZ3JvdW5kO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5cbi5hc2lkZUxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYXNpZGVBbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICRsaWdodC1wcmltYXJ5LXRleHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcbn1cblxuLmFzaWRlQW5jaG9yLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IDI0cHggLTZweCAyNHB4O1xufVxuXG4uYXNpZGVBbmNob3ItbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLmFzaWRlQW5jaG9yOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1wcmltYXJ5LXRleHQ7XG4gIHdpZHRoOiAwO1xuICAvL3RyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLWluO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmFzaWRlQW5jaG9yOmhvdmVyIHtcbiAgY29sb3I6ICRsaWdodC1zZWNvbmRhcnktdGV4dDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgxMywgMTIsIDUxLCAwLjg0KSAwJSwgIzA1MGMzMyAxMDAlKTs7XG4gIC8vYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAkbGlnaHQtc2Vjb25kYXJ5LXRleHQ7XG5cbn1cblxuLmFzaWRlQW5jaG9yOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gfiAuY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkbWVudS13aWR0aCk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJG1lbnUtb3Blbi13aWR0aCk7XG59XG5cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBsYWJlbCAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXByaW1hcnktdGV4dDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBsYWJlbCAudG9wIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGVaKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGVaKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZVooNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGVaKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlWig0NWRlZyk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gbGFiZWwgLmJvdHRvbSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KSByb3RhdGVaKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KSByb3RhdGVaKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpIHJvdGF0ZVooLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KSByb3RhdGVaKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCkgcm90YXRlWigtNDVkZWcpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGxhYmVsIC5taWRkbGUge1xuICB3aWR0aDogMDtcbn1cblxuLm1pZGRsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIiwiYXNpZGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjIxcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMTZweCAwcHggMHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmJhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4sIHdpZHRoIDAuNXMgZWFzZS1pbjtcbn1cblxuLmNvbnRlbnQge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDczLjNkZWcsICMwMDA0MjggMTEuNDglLCAjMDIyMTNCIDQ5LjQ4JSwgIzAwMDQyOCA4OC45MyUpO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmFzaWRlTGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hc2lkZUFuY2hvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI0NDQ0NDQztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xufVxuXG4uYXNpZGVBbmNob3ItaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggMjRweCAtNnB4IDI0cHg7XG59XG5cbi5hc2lkZUFuY2hvci1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uYXNpZGVBbmNob3I6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcbiAgd2lkdGg6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYXNpZGVBbmNob3I6aG92ZXIge1xuICBjb2xvcjogIzA1Qzk4NTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgxMywgMTIsIDUxLCAwLjg0KSAwJSwgIzA1MGMzMyAxMDAlKTtcbn1cblxuLmFzaWRlQW5jaG9yOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIH4gLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjRweCk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAuY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMjFweCk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiBsYWJlbCAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB+IGxhYmVsIC50b3Age1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZVooNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZVooNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlWig0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZVooNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGVaKDQ1ZGVnKTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB+IGxhYmVsIC5ib3R0b20ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCkgcm90YXRlWigtNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCkgcm90YXRlWigtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KSByb3RhdGVaKC00NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCkgcm90YXRlWigtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpIHJvdGF0ZVooLTQ1ZGVnKTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB+IGxhYmVsIC5taWRkbGUge1xuICB3aWR0aDogMDtcbn1cblxuLm1pZGRsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/compenents/side-navigation/side-navigation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/compenents/side-navigation/side-navigation.component.ts ***!
  \*************************************************************************/
/*! exports provided: SideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function() { return SideNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideNavigationComponent = class SideNavigationComponent {
    constructor() {
        this.items = [
            {
                title: 'Спостереження',
                icon: 'person-outline',
                link: [],
            },
            {
                title: 'Статистика',
                icon: 'lock-outline',
                link: [],
            },
            {
                title: 'Звіт',
                icon: { icon: 'checkmark-outline', pack: 'eva' },
                link: [],
            },
            {
                title: 'Вихід',
                icon: 'unlock-outline',
                link: [],
            },
        ];
    }
};
SideNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-navigation',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/side-navigation/side-navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-navigation.component.scss */ "./src/app/compenents/side-navigation/side-navigation.component.scss")).default]
    })
], SideNavigationComponent);



/***/ }),

/***/ "./src/app/helpers/apipath.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/helpers/apipath.interceptor.ts ***!
  \************************************************/
/*! exports provided: ApiPathInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function() { return ApiPathInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ApiPathInterceptor = class ApiPathInterceptor {
    intercept(request, next) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + request.url;
        request = request.clone({
            url: url
        });
        return next.handle(request);
    }
};
ApiPathInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ApiPathInterceptor);



/***/ }),

/***/ "./src/app/helpers/index.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: JwtInterceptor, ApiPathInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _apipath_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apipath.interceptor */ "./src/app/helpers/apipath.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function() { return _apipath_interceptor__WEBPACK_IMPORTED_MODULE_2__["ApiPathInterceptor"]; });






/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JwtInterceptor = class JwtInterceptor {
    constructor() {
        this.authUserInfo = null;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        this.authUserInfo = JSON.parse(localStorage.getItem('currentUser'));
        if (this.authUserInfo) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `${this.authUserInfo.token}`,
                }
            });
            return next.handle(request);
        }
        else {
            return next.handle(request);
        }
    }
};
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




const STORAGE_KEY_AUTH_USER = 'currentUser';
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
    }
    login(email, password) {
        return this.http.post('users/login', { email: "admin@mail.com", password: "admin" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            localStorage.removeItem(STORAGE_KEY_AUTH_USER);
            if (user && user.token) {
                localStorage.setItem(STORAGE_KEY_AUTH_USER, JSON.stringify(user));
            }
            return user;
        }));
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/camera.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/camera.service.ts ***!
  \********************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CameraService = class CameraService {
    constructor(http) {
        this.http = http;
        this._todos = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.baseUrl = 'cameras';
        this.dataStore = { todos: [] };
        this.todos = this._todos.asObservable();
    }
    getCameras() {
        return this.http.get('cameras');
    }
    loadAll() {
        this.http.get(this.baseUrl).subscribe(data => {
            this.dataStore.todos = data;
            this._todos.next(Object.assign({}, this.dataStore).todos);
        }, error => console.log('Could not load todos.'));
    }
};
CameraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CameraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CameraService);



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
    apiUrl: 'http://127.0.0.1:8000/',
    cameraURLWS: function (id) {
        return `ws://0.0.0.0:8000/emulation/cameras/${id}/stream`;
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /home/galyna/projects/limpid/farseer-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map