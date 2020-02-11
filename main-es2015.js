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
/* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\n  <nb-layout-column>\n    <router-outlet >\n    </router-outlet>\n  </nb-layout-column>\n  <nb-sidebar tag=\"left\" left state=\"collapsed\" >\n    <app-sidebar-left></app-sidebar-left>\n  </nb-sidebar>\n  <nb-sidebar tag=\"right\" right state=\"collapsed\" >\n    <app-sidebar-right></app-sidebar-right>\n  </nb-sidebar>\n\n</nb-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <nb-menu [items]=\"menuItems\">\n  </nb-menu>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <app-contravention></app-contravention>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/contravention/contravention.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/contravention/contravention.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <nb-list>\n    <nb-list-item *ngFor=\"let contravention of contraventions\">\n      <span class=\"type-label\">{{contravention.type}}</span>\n      <span class=\"type-label\" >{{contravention.date}}</span>\n      <span class=\"type-label\">{{contravention.decription}}</span>\n    </nb-list-item>\n  </nb-list>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/monitor/monitor.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/monitor/monitor.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<nb-card  class=\"farseer-card\" >\n  <nb-card-body class=\"farseer-card-body\">\n      <img [src]=\"safeSrc\" class=\"img-monitor\" />\n  </nb-card-body>\n</nb-card>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/monitoring/monitoring.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/monitoring/monitoring.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <nb-card>\n    <nb-card-body>\n      <nb-tabset fullWidth (changeTab)=\"handleTabSelection($event)\">\n        <nb-tab tabIcon=\"keypad-outline\">\n          <div class=\"row\">\n            <div class=\" col-md-6 col-lg-4  \" *ngFor=\"let camera of cameras \">\n              <nb-card size=\"small\" class=\"farseer-card \">\n                <nb-card-body class=\"farseer-card-body\">\n                  <a class=\"monitor-link\" [routerLink]=\"['/monitor', camera.id]\">\n                    <nb-icon class=\"monitor-icon\" icon=\"external-link\"></nb-icon>\n                  </a>\n                  <img [src]=\"camera.src\" class=\"img-box\"/>\n                </nb-card-body>\n              </nb-card>\n            </div>\n          </div>\n        </nb-tab>\n        <nb-tab tabTitle=\"ЦЕХ1\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-xl-3\" *ngFor=\"let camera of cameras.slice(1,3) \">\n              <nb-card size=\"small\" class=\"farseer-card \">\n                <nb-card-body class=\"farseer-card-body\">\n                  <a class=\"monitor-link\" [routerLink]=\"['/monitor', camera.id]\">\n                    <nb-icon class=\"monitor-icon\" icon=\"external-link\"></nb-icon>\n                  </a>\n                  <img [src]=\"camera.src\" class=\"img-box\"/>\n                </nb-card-body>\n              </nb-card>\n            </div>\n          </div>\n        </nb-tab>\n        <nb-tab tabTitle=\"ГРУПА1\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-xl-3\" *ngFor=\"let camera of cameras.slice(5,10) \">\n              <nb-card size=\"small\" class=\"farseer-card \">\n                <nb-card-body class=\"farseer-card-body\">\n                  <a class=\"monitor-link\" [routerLink]=\"['/monitor', camera.id]\">\n                    <nb-icon class=\"monitor-icon\" icon=\"external-link\"></nb-icon>\n                  </a>\n                  <img [src]=\"camera.src\" class=\"img-box\"/>\n                </nb-card-body>\n              </nb-card>\n            </div>\n          </div>\n        </nb-tab>\n        <nb-tab tabTitle=\"ГРУПА2\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-xl-3\" *ngFor=\"let camera of cameras.slice(9,11) \">\n              <nb-card size=\"small\" class=\"farseer-card \">\n                <nb-card-body class=\"farseer-card-body\">\n                  <a class=\"monitor-link\" [routerLink]=\"['/monitor', camera.id]\">\n                    <nb-icon class=\"monitor-icon\" icon=\"external-link\"></nb-icon>\n                  </a>\n                  <img [src]=\"camera.src\" class=\"img-box\"/>\n                </nb-card-body>\n              </nb-card>\n            </div>\n          </div>\n        </nb-tab>\n        <nb-tab tabTitle=\"КПП\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-xl-3\" *ngFor=\"let camera of cameras \">\n              <nb-card size=\"small\" class=\"farseer-card \">\n                <nb-card-body class=\"farseer-card-body\">\n                  <a class=\"monitor-link\" [routerLink]=\"['/monitor', camera.id]\">\n                    <nb-icon class=\"monitor-icon\" icon=\"external-link\"></nb-icon>\n                  </a>\n                  <img [src]=\"camera.src\" class=\"img-box\"/>\n                </nb-card-body>\n              </nb-card>\n            </div>\n          </div>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card-body>\n  </nb-card>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/page/page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/page/page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/reports/reports.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/reports/reports.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n  <nb-card-body>\n\n    <table [nbTreeGrid]=\"source\">\n      <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\n      <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n      <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n        <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>{{customColumn}}</th>\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n\n          <nb-tree-grid-row-toggle\n            [expanded]=\"row.expanded\"\n            *ngIf=\"row.data.kind === 'dir'\">\n          </nb-tree-grid-row-toggle>\n\n          {{row.data[customColumn]}}\n\n        </td>\n      </ng-container>\n\n      <ng-container *ngFor=\"let column of defaultColumns\" [nbTreeGridColumnDef]=\"column\">\n        <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>{{column}}</th>\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data[column] || '-'}}</td>\n      </ng-container>\n    </table>\n\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/statistics/statistics.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/statistics/statistics.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n  <nb-card-body>\n\n    <table [nbTreeGrid]=\"dataSource\" [nbSort]=\"dataSource\" equalColumnsWidth>\n\n      <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\n      <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n      <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n\n        <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef nbSortHeader>\n          {{customColumn}}\n          <span *nbSortHeaderIcon=\"let asc = isAscending; let desc = isDescending\">\n                <span *ngIf=\"asc\" class=\"nb-chevron-down\" aria-label=\"sorted ascending\"></span>\n                <span *ngIf=\"desc\" class=\"nb-chevron-up\" aria-label=\"sorted descending\"></span>\n              </span>\n        </th>\n\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n          <button nbTreeGridRowToggle\n                  *ngIf=\"row.hasChildren()\"\n                  [attr.aria-label]=\"row.expanded ? 'collapse' : 'expand'\">\n                <span [ngClass]=\"{'nb-chevron-down': row.expanded, 'nb-chevron-right': !row.expanded}\"\n                      aria-hidden=\"true\">\n                </span>\n          </button>\n          {{row.data.name}}\n        </td>\n\n      </ng-container>\n\n      <ng-container *ngFor=\"let column of defaultColumns\" [nbTreeGridColumnDef]=\"column\">\n        <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>{{column}}</th>\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data[column]}}</td>\n      </ng-container>\n\n    </table>\n\n  </nb-card-body>\n</nb-card>\n");

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
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");




const routes = [
    {
        path: '',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./farseer-modules/pages/pages.module */ "./src/app/farseer-modules/pages/pages.module.ts")).then(m => m.FarseerPagesModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | farseer-modules-auth-auth-module */ "farseer-modules-auth-auth-module").then(__webpack_require__.bind(null, /*! ./farseer-modules/auth/auth.module */ "./src/app/farseer-modules/auth/auth.module.ts")).then(m => m.NgxAuthModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'reload'
            })],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
    }
};
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/camera.service */ "./src/app/services/camera.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _farseer_modules_pages_pages_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./farseer-modules/pages/pages.module */ "./src/app/farseer-modules/pages/pages.module.ts");
/* harmony import */ var _farseer_modules_menu_sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./farseer-modules/menu/sidebar-left/sidebar-left.component */ "./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.ts");
/* harmony import */ var _farseer_modules_menu_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./farseer-modules/menu/sidebar-right/sidebar-right.component */ "./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _farseer_modules_menu_sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_17__["SidebarLeftComponent"],
            _farseer_modules_menu_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_18__["SidebarRightComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbThemeModule"].forRoot({ name: 'cosmic' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_12__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbSidebarModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbActionsModule"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_14__["NbAuthModule"].forRoot({
                strategies: [
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_14__["NbPasswordAuthStrategy"].setup({
                        name: 'email',
                        token: {
                            class: _nebular_auth__WEBPACK_IMPORTED_MODULE_14__["NbAuthJWTToken"],
                            key: 'token',
                        },
                        baseEndpoint: '',
                        login: {
                            method: 'post',
                            redirect: {
                                success: 'monitoring',
                                failure: null,
                            },
                            defaultErrors: ["Перевірте вірність вказаної пошти та паролю"],
                            endpoint: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].loginEndpoint,
                        },
                        logout: {
                            endpoint: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].logoutEndpoint,
                        }
                    }),
                ],
                forms: {
                    login: {
                        redirectDelay: 0,
                        showMessages: {
                            success: false,
                        },
                    }
                },
            }),
            _farseer_modules_pages_pages_module__WEBPACK_IMPORTED_MODULE_16__["FarseerPagesModule"]
        ],
        providers: [
            _services_camera_service__WEBPACK_IMPORTED_MODULE_8__["CameraService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["ApiPathInterceptor"],
                multi: true
            },
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9tZW51L3NpZGViYXItbGVmdC9zaWRlYmFyLWxlZnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SidebarLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftComponent", function() { return SidebarLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SidebarLeftComponent = class SidebarLeftComponent {
    constructor(nbTokenService, breakpointObserver, sidebarService, router, menuService, authService) {
        this.nbTokenService = nbTokenService;
        this.breakpointObserver = breakpointObserver;
        this.sidebarService = sidebarService;
        this.router = router;
        this.menuService = menuService;
        this.authService = authService;
        this.menuItems = [
            {
                icon: 'menu',
            },
            {
                title: 'Спостереження',
                icon: { icon: 'eye-outline', pack: 'eva' },
                link: ["monitoring"],
            },
            {
                title: 'Статистика',
                icon: { icon: 'bar-chart-outline', pack: 'eva' },
                link: ['statistics'],
            },
            {
                title: 'Звіт',
                icon: { icon: 'file-text-outline', pack: 'eva' },
                link: ["reports"],
            },
            {
                title: 'Вихід',
                icon: 'log-out-outline',
            },
        ];
    }
    ngOnInit() {
        this.authHandling();
        this.handleMenu();
    }
    handleMenu() {
        this.menuService.onItemClick().subscribe((event) => {
            if (event.item.icon == "menu") {
                this.sidebarService.toggle(true, 'left');
            }
            if (event.item.title == "Вихід") {
                this.nbTokenService.clear();
                this.router.navigate(['auth/login']);
            }
        });
    }
    authHandling() {
        this.authService.onTokenChange()
            .subscribe((token) => {
            if (token.isValid()) {
                this.sidebarService.compact('left');
            }
        });
        this.authService.onAuthenticationChange()
            .subscribe((value) => {
            if (!value) {
                this.sidebarService.collapse('left');
            }
            else {
                this.sidebarService.compact('left');
            }
        });
    }
};
SidebarLeftComponent.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbTokenService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuService"] },
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }
];
SidebarLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-left',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar-left.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar-left.component.scss */ "./src/app/farseer-modules/menu/sidebar-left/sidebar-left.component.scss")).default]
    })
], SidebarLeftComponent);



/***/ }),

/***/ "./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9tZW51L3NpZGViYXItcmlnaHQvc2lkZWJhci1yaWdodC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SidebarRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRightComponent", function() { return SidebarRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");




let SidebarRightComponent = class SidebarRightComponent {
    constructor(sidebarService, authService) {
        this.sidebarService = sidebarService;
        this.authService = authService;
    }
    ngOnInit() {
        this.authHandling();
    }
    authHandling() {
        this.authService.onTokenChange()
            .subscribe((token) => {
            if (token.isValid()) {
                this.sidebarService.expand('right');
            }
        });
        this.authService.onAuthenticationChange()
            .subscribe((value) => {
            if (!value) {
                this.sidebarService.collapse('right');
            }
            else {
                this.sidebarService.expand('right');
            }
        });
    }
};
SidebarRightComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"] },
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }
];
SidebarRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-right',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar-right.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar-right.component.scss */ "./src/app/farseer-modules/menu/sidebar-right/sidebar-right.component.scss")).default]
    })
], SidebarRightComponent);



/***/ }),

/***/ "./src/app/farseer-modules/pages/camera.cart.scss":
/*!********************************************************!*\
  !*** ./src/app/farseer-modules/pages/camera.cart.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-box {\n  width: 100%;\n  height: 300px;\n}\n\n.monitor-link {\n  position: absolute;\n  height: 40px;\n  top: 8px;\n  right: 8px;\n}\n\n.farseer-card {\n  height: auto !important;\n  margin-bottom: 8px;\n}\n\n.farseer-card-body {\n  position: relative;\n  padding: 8px 8px 2px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9jYW1lcmEuY2FydC5zY3NzIiwic3JjL2FwcC9mYXJzZWVyLW1vZHVsZXMvcGFnZXMvY2FtZXJhLmNhcnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFFQSx3QkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvZmFyc2Vlci1tb2R1bGVzL3BhZ2VzL2NhbWVyYS5jYXJ0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWctYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5tb25pdG9yLWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDBweDtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gLy8gbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDhweCA4cHggMnB4IDhweDtcbn1cblxuIiwiLmltZy1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLm1vbml0b3ItbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDhweDtcbn1cblxuLmZhcnNlZXItY2FyZCB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4IDhweCAycHggOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/farseer-modules/pages/contravention/contravention.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/farseer-modules/pages/contravention/contravention.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".type-label {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9jb250cmF2ZW50aW9uL2NvbnRyYXZlbnRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9jb250cmF2ZW50aW9uL2NvbnRyYXZlbnRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxZQUFBO0FDRWIiLCJmaWxlIjoic3JjL2FwcC9mYXJzZWVyLW1vZHVsZXMvcGFnZXMvY29udHJhdmVudGlvbi9jb250cmF2ZW50aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGUtbGFiZWx7IHBhZGRpbmc6IDhweDt9XG4iLCIudHlwZS1sYWJlbCB7XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/farseer-modules/pages/contravention/contravention.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/farseer-modules/pages/contravention/contravention.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContraventionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContraventionComponent", function() { return ContraventionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContraventionComponent = class ContraventionComponent {
    constructor() {
        this.contraventions = [
            { type: 'без шолому', date: 'Пн', decription: "ЦЕХ1" },
            { type: 'без окулярів', date: 'Пт', decription: "ЦЕХ1" },
            { type: 'без шолому', date: 'Пн', decription: "ЦЕХ1" },
            { type: 'без окулярів', date: 'Пт', decription: "ЦЕХ1" },
            { type: 'без окулярів', date: 'Чт', decription: "ЦЕХ1" },
            { type: 'без окулярів', date: 'Чт', decription: "ЦЕХ1" },
            { type: 'без шолому', date: 'Вт', decription: "ЦЕХ1" },
            { type: 'без окулярів', date: 'СР', decription: "ЦЕХ1" },
        ];
    }
    ngOnInit() {
    }
};
ContraventionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contravention',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contravention.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/contravention/contravention.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contravention.component.scss */ "./src/app/farseer-modules/pages/contravention/contravention.component.scss")).default]
    })
], ContraventionComponent);



/***/ }),

/***/ "./src/app/farseer-modules/pages/monitor/monitor.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/farseer-modules/pages/monitor/monitor.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-monitor {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9tb25pdG9yL21vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9tb25pdG9yL21vbml0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZmFyc2Vlci1tb2R1bGVzL3BhZ2VzL21vbml0b3IvbW9uaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctbW9uaXRvciB7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi5pbWctbW9uaXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/farseer-modules/pages/monitor/monitor.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/farseer-modules/pages/monitor/monitor.component.ts ***!
  \********************************************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm2015/webSocket/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");








let MonitorComponent = class MonitorComponent {
    constructor(sanitizer, nbTokenService, breakpointObserver, route) {
        this.sanitizer = sanitizer;
        this.nbTokenService = nbTokenService;
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.safeSrc = "assets/Group 28.png";
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        //this.name = this.route.snapshot.params.id;
        this.startSocket(this.id);
    }
    startSocket(id) {
        this.WebSocketSubject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__["webSocket"])({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cameraURLWS(id, 900, 600),
            deserializer: (msg) => {
                return msg.data;
            },
            openObserver: {
                next: () => {
                    console.log('connetion ok');
                }
            },
        });
        this.WebSocketSubject.subscribe(msg => {
            // console.log('success')
            this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(msg));
        }, // Called whenever there is a message from the server.
        // Called whenever there is a message from the server.
        err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
        () => console.log('complete') // Called when connection is closed (for whatever reason).
        );
        // this.WebSocketSubject.next({message: this.nbTokenService.get()});
    }
    ngOnDestroy() {
        this.WebSocketSubject.c;
    }
};
MonitorComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbTokenService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
MonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-monitor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./monitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/monitor/monitor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./monitor.component.scss */ "./src/app/farseer-modules/pages/monitor/monitor.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../camera.cart.scss */ "./src/app/farseer-modules/pages/camera.cart.scss")).default]
    })
], MonitorComponent);



/***/ }),

/***/ "./src/app/farseer-modules/pages/monitoring/monitoring.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/farseer-modules/pages/monitoring/monitoring.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding: 1rem !important;\n}\n\n.img-box {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.monitor-link {\n  float: right;\n}\n\n.fixed-header {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9tb25pdG9yaW5nL21vbml0b3JpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9tb25pdG9yaW5nL21vbml0b3JpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9mYXJzZWVyLW1vZHVsZXMvcGFnZXMvbW9uaXRvcmluZy9tb25pdG9yaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwYWRkaW5nIDogMXJlbSAhaW1wb3J0YW50O1xufVxuLmltZy1ib3gge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5tb25pdG9yLWxpbmsge1xuICBmbG9hdDogcmlnaHRcbn1cbi5maXhlZC1oZWFkZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbiIsIjpob3N0IHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWJveCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLm1vbml0b3ItbGluayB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZpeGVkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/farseer-modules/pages/monitoring/monitoring.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/farseer-modules/pages/monitoring/monitoring.component.ts ***!
  \**************************************************************************/
/*! exports provided: MonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function() { return MonitoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MonitoringComponent = class MonitoringComponent {
    constructor() {
        this.disabledIconConfig = { icon: 'grid', pack: 'eva' };
        this.monitors = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.camerasSource = [
            {
                description: 'Цех 1',
                id: "1",
                src: "assets/test.jpeg",
                selected: false
            },
            {
                description: 'Цех 2',
                id: "2",
                src: "assets/test2.jpeg",
                selected: false
            },
            {
                description: 'Цех 3',
                id: "3",
                src: "assets/test3.jpeg",
            },
            {
                description: 'Цех 4',
                id: "1",
                src: "assets/test5.jpeg",
                selected: false
            },
            {
                description: 'Цех 5',
                id: "0",
                src: "assets/test4.jpeg",
                selected: false
            },
            {
                description: 'Цех 6',
                id: "0",
                src: "assets/test6.jpeg",
                selected: false
            },
            {
                description: 'Цех 6',
                id: "0",
                src: "assets/test5.jpeg",
                selected: false
            },
            {
                description: 'Цех 7',
                id: "0",
                src: "assets/test4.jpeg",
                selected: false
            },
            {
                description: 'Цех 8',
                id: "0",
                src: "assets/test7.jpeg",
                selected: false
            },
            {
                description: 'Цех 9',
                id: "0",
                src: "assets/test.jpeg",
                selected: false
            },
            {
                description: 'Цех 10',
                id: "0",
                src: "assets/test2.jpeg",
                selected: false
            },
            {
                description: 'Цех 11',
                id: "0",
                src: "assets/test3.jpeg",
                selected: false
            },
            {
                description: 'Цех 12',
                id: "0",
                src: "assets/test.jpeg",
                selected: false
            },
            {
                description: 'Цех 13',
                id: "0",
                src: "assets/test4.jpeg",
                selected: false
            },
            {
                description: 'Цех 14',
                id: "0",
                src: "assets/test.jpeg",
                selected: false
            },
            {
                description: 'Цех 15',
                id: "0",
                src: "assets/test6.jpeg",
            },
            {
                description: 'Цех 16',
                id: "0",
                src: "assets/test7.jpeg",
                selected: false
            },
            {
                description: 'Цех 17',
                id: "0",
                src: "assets/test.jpeg",
                selected: false
            },
            {
                description: 'Цех 18',
                id: "0",
                src: "assets/test1.jpeg",
                selected: false
            }, {
                description: 'Цех 19',
                id: "0",
                src: "assets/test.jpeg",
                selected: false
            }, {
                description: 'Цех 20',
                id: "0",
                src: "assets/test2.jpeg",
            }, {
                description: 'Цех 21',
                id: "0",
                src: "assets/test.jpeg",
                selected: false
            }, {
                description: 'Цех 22',
                id: "0",
                src: "assets/test3.jpeg",
                selected: false
            }, {
                description: 'Цех 23',
                id: "0",
                src: "assets/test4.jpeg",
                selected: false
            }, {
                description: 'Цех 24',
                id: "0",
                src: "assets/test5.jpeg",
            }, {
                description: 'Цех 25',
                id: "0",
                src: "assets/test6.jpeg",
                selected: false
            },
        ];
    }
    ngOnInit() {
        this.cameras = this.camerasSource;
    }
    handleTabSelection($event) {
    }
};
MonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-monitoring',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./monitoring.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/monitoring/monitoring.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./monitoring.component.scss */ "./src/app/farseer-modules/pages/monitoring/monitoring.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../camera.cart.scss */ "./src/app/farseer-modules/pages/camera.cart.scss")).default]
    })
], MonitoringComponent);



/***/ }),

/***/ "./src/app/farseer-modules/pages/page/page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/farseer-modules/pages/page/page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9wYWdlL3BhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/farseer-modules/pages/page/page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/farseer-modules/pages/page/page.component.ts ***!
  \**************************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageComponent = class PageComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/page/page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page.component.scss */ "./src/app/farseer-modules/pages/page/page.component.scss")).default]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/farseer-modules/pages/pages-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/farseer-modules/pages/pages-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, NgxPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPagesRoutingModule", function() { return NgxPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitoring/monitoring.component */ "./src/app/farseer-modules/pages/monitoring/monitoring.component.ts");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monitor/monitor.component */ "./src/app/farseer-modules/pages/monitor/monitor.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/farseer-modules/pages/statistics/statistics.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/farseer-modules/pages/reports/reports.component.ts");







const routes = [
    {
        path: '',
        component: _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringComponent"],
    },
    {
        path: 'monitoring',
        component: _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringComponent"],
    },
    {
        path: 'monitor/:id',
        component: _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_4__["MonitorComponent"],
    },
    {
        path: 'statistics',
        component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__["StatisticsComponent"],
    },
    {
        path: 'reports',
        component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"],
    }
];
let NgxPagesRoutingModule = class NgxPagesRoutingModule {
};
NgxPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NgxPagesRoutingModule);



/***/ }),

/***/ "./src/app/farseer-modules/pages/pages.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/farseer-modules/pages/pages.module.ts ***!
  \*******************************************************/
/*! exports provided: FarseerPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarseerPagesModule", function() { return FarseerPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/farseer-modules/pages/pages-routing.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monitoring/monitoring.component */ "./src/app/farseer-modules/pages/monitoring/monitoring.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/farseer-modules/pages/statistics/statistics.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/farseer-modules/pages/reports/reports.component.ts");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./monitor/monitor.component */ "./src/app/farseer-modules/pages/monitor/monitor.component.ts");
/* harmony import */ var _contravention_contravention_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contravention/contravention.component */ "./src/app/farseer-modules/pages/contravention/contravention.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/page.component */ "./src/app/farseer-modules/pages/page/page.component.ts");














let FarseerPagesModule = class FarseerPagesModule {
};
FarseerPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["NgxPagesRoutingModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTabsetModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbListModule"],
        ],
        exports: [
            _contravention_contravention_component__WEBPACK_IMPORTED_MODULE_12__["ContraventionComponent"]
        ],
        declarations: [
            _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_8__["MonitoringComponent"],
            _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__["StatisticsComponent"],
            _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"],
            _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_11__["MonitorComponent"],
            _contravention_contravention_component__WEBPACK_IMPORTED_MODULE_12__["ContraventionComponent"],
            _page_page_component__WEBPACK_IMPORTED_MODULE_13__["PageComponent"]
        ]
    })
], FarseerPagesModule);



/***/ }),

/***/ "./src/app/farseer-modules/pages/reports/reports.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/farseer-modules/pages/reports/reports.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/farseer-modules/pages/reports/reports.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/farseer-modules/pages/reports/reports.component.ts ***!
  \********************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");



let ReportsComponent = class ReportsComponent {
    constructor(dataSourceBuilder) {
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = [this.customColumn, ...this.defaultColumns];
        this.data = [
            {
                name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir', expanded: true,
                childEntries: [
                    { name: 'project-1.doc', kind: 'doc', size: '240 KB' },
                    { name: 'project-2.doc', kind: 'doc', size: '290 KB' },
                    {
                        name: 'project-3', kind: 'dir', size: '466 KB', items: 3,
                        childEntries: [
                            { name: 'project-3A.doc', kind: 'doc', size: '200 KB' },
                            { name: 'project-3B.doc', kind: 'doc', size: '266 KB' },
                            { name: 'project-3C.doc', kind: 'doc', size: '0' },
                        ],
                    },
                    { name: 'project-4.docx', kind: 'docx', size: '900 KB' },
                ],
            },
            {
                name: 'Reports', kind: 'dir', size: '400 KB', items: 2,
                childEntries: [
                    {
                        name: 'Report 1', kind: 'dir', size: '100 KB', items: 1,
                        childEntries: [
                            { name: 'report-1.doc', kind: 'doc', size: '100 KB' },
                        ],
                    },
                    {
                        name: 'Report 2', kind: 'dir', size: '300 KB', items: 2,
                        childEntries: [
                            { name: 'report-2.doc', kind: 'doc', size: '290 KB' },
                            { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' },
                        ],
                    },
                ],
            },
            {
                name: 'Other', kind: 'dir', size: '109 MB', items: 2,
                childEntries: [
                    { name: 'backup.bkp', kind: 'bkp', size: '107 MB' },
                    { name: 'secret-note.txt', kind: 'txt', size: '2 MB' },
                ],
            },
        ];
        const getters = {
            dataGetter: (node) => node,
            childrenGetter: (node) => node.childEntries || undefined,
            expandedGetter: (node) => !!node.expanded,
        };
        this.source = dataSourceBuilder.create(this.data, getters);
    }
    ngOnInit() {
    }
};
ReportsComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridDataSourceBuilder"] }
];
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/reports/reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/farseer-modules/pages/reports/reports.component.scss")).default]
    })
], ReportsComponent);



/***/ }),

/***/ "./src/app/farseer-modules/pages/statistics/statistics.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/farseer-modules/pages/statistics/statistics.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcnNlZXItbW9kdWxlcy9wYWdlcy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/farseer-modules/pages/statistics/statistics.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/farseer-modules/pages/statistics/statistics.component.ts ***!
  \**************************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");



let StatisticsComponent = class StatisticsComponent {
    constructor(dataSourceBuilder) {
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = [this.customColumn, ...this.defaultColumns];
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
        this.dataSource = dataSourceBuilder.create(this.data);
    }
    ngOnInit() {
    }
};
StatisticsComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridDataSourceBuilder"] }
];
StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/farseer-modules/pages/statistics/statistics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistics.component.scss */ "./src/app/farseer-modules/pages/statistics/statistics.component.scss")).default]
    })
], StatisticsComponent);



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
/*! exports provided: ApiPathInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _apipath_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apipath.interceptor */ "./src/app/helpers/apipath.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function() { return _apipath_interceptor__WEBPACK_IMPORTED_MODULE_1__["ApiPathInterceptor"]; });





/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");






let AuthGuardService = class AuthGuardService {
    constructor(authService, sidebarService, router) {
        this.authService = authService;
        this.sidebarService = sidebarService;
        this.router = router;
    }
    canActivate() {
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(authenticated => {
            if (!authenticated) {
                this.sidebarService.collapse('left');
                this.router.navigate(['auth/login']);
            }
        }));
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let CameraService = class CameraService {
    constructor(http) {
        this.http = http;
        this._cameras = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.dataStore = { cameras: [] };
        this.cameras = this._cameras.asObservable();
    }
    loadAll() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getAllCamerasEndpoint).subscribe(data => {
            this.dataStore.cameras = data;
            this._cameras.next(Object.assign({}, this.dataStore).cameras);
        }, error => console.log('Could not load cameras.'));
    }
};
CameraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
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
    getAllCamerasEndpoint: "cameras",
    loginEndpoint: "users/login",
    logoutEndpoint: "users/logout",
    // apiUrl: 'http://localhost:8000/',
    // cameraURLWS: function (id) {
    //   return `ws://0.0.0.0:8000/emulation/cameras/${id}/stream`
    // }
    apiUrl: 'http://192.168.0.66:8000/',
    cameraURLWS: function (id, width, height) {
        // return `ws://0.0.0.0:8000/emulation/cameras/${id}/stream`
        //return `ws://192.168.0.66:8000/emulation/cameras/${id}/stream`
        return `ws://192.168.0.66:8000/emulation/cameras/${id}/stream?width=${width}&height=${height}`;
    }
};


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