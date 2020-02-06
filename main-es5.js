function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\n  <nb-layout-column class=\"farseer-padding16\">\n    <router-outlet>\n    </router-outlet>\n  </nb-layout-column>\n  <nb-sidebar tag=\"left\" state=\"compacted\">\n    <nb-menu [items]=\"items\">\n    </nb-menu>\n  </nb-sidebar>\n</nb-layout>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/camera/camera.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/camera/camera.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompenentsCameraCameraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<nb-card size=\"large\" class=\"farseer-card\">\n  <nb-card-header class=\"farseer-card-header\">{{name}}</nb-card-header>\n  <nb-card-body class=\"farseer-card-body\">\n    <div class=\"video\">\n      <img  [src]=\"safeSrc\" >\n    </div>\n  </nb-card-body>\n</nb-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompenentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" >\n<div class=\"row\" *ngFor=\"let camera of cameras | async \">\n  <app-camera class=\"col-ld-6\" [id]=\"camera.id\" [name]=\"camera.name\"></app-camera>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompenentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-row\">\n  <div class=\"card-col\">\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 1</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc1\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 3</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <div class=\"video\">\n            <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc3\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                    frameborder=\"0\"\n                    webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen></iframe>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"card-col\">\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 2</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc2\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 4</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <div class=\"video\">\n            <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc4\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                    frameborder=\"0\"\n                    webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen></iframe>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompenentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-container\" fxFlexFill fxLayout=\"row\" fxLayoutGap=\"8px\"  >\n  <div fxLayout=\"column\" fxFlex=\"25\" fxLayoutAlign=\"center center\">\n    <h3>Ввійти</h3>\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <p>\n        <input type=\"text\" placeholder=\"Логін\" formControlName=\"username\">\n      </p>\n      <p>\n        <input type=\"password\" placeholder=\"Пароль\" formControlName=\"password\">\n      </p>\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n      <div class=\"button\">\n        <button  type=\"submit\">ДАВАЙТЕ ПОЧНЕМО!</button>\n      </div>\n    </form>\n  </div>\n\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _compenents_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./compenents/home/home.component */
    "./src/app/compenents/home/home.component.ts");
    /* harmony import */


    var _compenents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./compenents/dashboard/dashboard.component */
    "./src/app/compenents/dashboard/dashboard.component.ts");
    /* harmony import */


    var _compenents_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./compenents/login/login.component */
    "./src/app/compenents/login/login.component.ts");

    var routes = [{
      path: '',
      component: _compenents_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _compenents_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _compenents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-layout-column.farseer-padding16 {\n  padding: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQW9DLHdCQUFBO0FDRXJDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIG5iLWxheW91dC1jb2x1bW4uZmFyc2Vlci1wYWRkaW5nMTZ7IHBhZGRpbmc6IDE2cHghaW1wb3J0YW50O31cbiIsIm5iLWxheW91dC1jb2x1bW4uZmFyc2Vlci1wYWRkaW5nMTYge1xuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var AppComponent = function AppComponent(sidebarService, menuService) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.sidebarService = sidebarService;
      this.menuService = menuService;
      this.title = 'farseer';
      this.items = [{
        icon: 'menu'
      }, {
        title: 'Спостереження',
        icon: {
          icon: 'eye-outline',
          pack: 'eva'
        },
        link: ['login']
      }, {
        title: 'Статистика',
        icon: {
          icon: 'bar-chart-outline',
          pack: 'eva'
        },
        link: ['']
      }, {
        title: 'Звіт',
        icon: {
          icon: 'file-text-outline',
          pack: 'eva'
        },
        link: [""]
      }, {
        title: 'Вихід',
        icon: 'log-out-outline',
        link: ['login']
      }];
      this.menuService.onItemClick().subscribe(function (event) {
        if (event.item.icon == "menu") {
          _this.sidebarService.toggle(true, 'left');
        }
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _compenents_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./compenents/home/home.component */
    "./src/app/compenents/home/home.component.ts");
    /* harmony import */


    var _compenents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./compenents/dashboard/dashboard.component */
    "./src/app/compenents/dashboard/dashboard.component.ts");
    /* harmony import */


    var _compenents_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./compenents/login/login.component */
    "./src/app/compenents/login/login.component.ts");
    /* harmony import */


    var _compenents_camera_camera_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./compenents/camera/camera.component */
    "./src/app/compenents/camera/camera.component.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_camera_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/camera.service */
    "./src/app/services/camera.service.ts");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./helpers */
    "./src/app/helpers/index.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js"); // @ts-ignore


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _compenents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _compenents_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _compenents_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _compenents_camera_camera_component__WEBPACK_IMPORTED_MODULE_10__["CameraComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbThemeModule"].forRoot({
        name: 'cosmic'
      }), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_16__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbActionsModule"]],
      providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"], _services_camera_service__WEBPACK_IMPORTED_MODULE_12__["CameraService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_13__["ApiPathInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/compenents/camera/camera.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/compenents/camera/camera.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompenentsCameraCameraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-box {\n  min-height: 200px;\n  min-width: 300px;\n  background: url('Group 28.png');\n}\n\n.farseer-card {\n  margin-bottom: 8px;\n}\n\n.farseer-card-header {\n  height: 40px;\n  padding: 8px 16px;\n}\n\n.farseer-card-body {\n  margin: 0 auto;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGVuZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0EsaUJBQUE7RUFDRSxnQkFBQTtFQUNELCtCQUFBO0FDQUQ7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29tcGVuZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW1nLWJveHtcbm1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvR3JvdXAgMjgucG5nXCIpO1xufVxuXG5cblxuXG4uZmFyc2Vlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQtYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbiIsIi5pbWctYm94IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvR3JvdXAgMjgucG5nXCIpO1xufVxuXG4uZmFyc2Vlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQtYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/compenents/camera/camera.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/compenents/camera/camera.component.ts ***!
    \*******************************************************/

  /*! exports provided: CameraComponent */

  /***/
  function srcAppCompenentsCameraCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraComponent", function () {
      return CameraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/webSocket */
    "./node_modules/rxjs/_esm2015/webSocket/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var CameraComponent =
    /*#__PURE__*/
    function () {
      function CameraComponent(sanitizer, breakpointObserver) {
        _classCallCheck(this, CameraComponent);

        this.sanitizer = sanitizer;
        this.breakpointObserver = breakpointObserver;
      }

      _createClass(CameraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.breakpointObserver.observe(['(min-width: 1280px)']).subscribe(function (state) {
            if (state.matches) {
              _this2.widthVideo = "580px";
              _this2.heightVideo = "266px";
            } else {
              _this2.widthVideo = "400px";
              _this2.heightVideo = "266px";
            }
          });
          this.safeSrc = "assets/Group 28.png";

          if (this.id) {
            this.startSocket(this.id);
            this.name = "Камера " + this.id;
          }
        }
      }, {
        key: "startSocket",
        value: function startSocket(id) {
          var _this3 = this;

          this.WebSocketSubject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__["webSocket"])({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cameraURLWS(id),
            deserializer: function deserializer(msg) {
              return msg.data;
            }
          });
          this.WebSocketSubject.subscribe(function (msg) {
            _this3.safeSrc = _this3.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(msg));
          }, // Called whenever there is a message from the server.
          // Called whenever there is a message from the server.
          function (err) {
            return console.log(err);
          }, // Called if at any point WebSocket API signals some kind of error.
          function () {
            return console.log('complete');
          } // Called when connection is closed (for whatever reason).
          );
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.WebSocketSubject.unsubscribe();
        }
      }]);

      return CameraComponent;
    }();

    CameraComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "name", void 0);
    CameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-camera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./camera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/camera/camera.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./camera.component.scss */
      "./src/app/compenents/camera/camera.component.scss")).default]
    })], CameraComponent);
    /***/
  },

  /***/
  "./src/app/compenents/dashboard/dashboard.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/compenents/dashboard/dashboard.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompenentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-h1 {\n  margin: 20px;\n  color: #cccccc;\n}\n\n.mat-h3 {\n  margin: 20px;\n  color: #05C985;\n}\n\n.right-container {\n  margin-top: 50px;\n  height: 100%;\n  min-width: 150px;\n  float: right;\n}\n\n.type-name {\n  min-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGVuZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxjQVhxQjtBQ092Qjs7QURTQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBlbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiAjMDVDOTg1O1xuXG4kbGlnaHQtcHJpbWFyeS10ZXh0OiAjQ0NDQ0NDO1xuXG4ubWF0LWgxe1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4ubWF0LWgze1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAkbGlnaHQtc2Vjb25kYXJ5LXRleHRcbn1cblxuXG5cbi5yaWdodC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuXG4udHlwZS1uYW1lIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuIiwiLm1hdC1oMSB7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbi5tYXQtaDMge1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjMDVDOTg1O1xufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50eXBlLW5hbWUge1xuICBtaW4td2lkdGg6IDE1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/compenents/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/compenents/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppCompenentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/camera.service */
    "./src/app/services/camera.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(cameraService) {
        _classCallCheck(this, DashboardComponent);

        this.cameraService = cameraService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cameras = this.cameraService.todos; // subscribe to entire collection

          this.cameraService.loadAll();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/compenents/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/compenents/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/compenents/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompenentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.card-row {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 -0.5rem;\n}\n\n.card-col {\n  -webkit-box-flex: 1;\n          flex: 1 0 calc(50% - 1rem);\n  margin: 0 0.5rem;\n}\n\n.farseer-card {\n  margin-bottom: 8px;\n}\n\n.farseer-card-header {\n  height: 40px;\n  padding: 8px 16px;\n}\n\n.farseer-card-body {\n  margin: 0 auto;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wZW5lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcGVuZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gLy8gbWF4LWhlaWdodDogODByZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNhcmQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0wLjVyZW07XG59XG5cbi5jYXJkLWNvbCB7XG4gIGZsZXg6IDEgMCBjYWxjKDUwJSAtIDFyZW0pO1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuXG4uZmFyc2Vlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQtYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jYXJkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAtMC41cmVtO1xufVxuXG4uY2FyZC1jb2wge1xuICBmbGV4OiAxIDAgY2FsYyg1MCUgLSAxcmVtKTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbn1cblxuLmZhcnNlZXItY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmZhcnNlZXItY2FyZC1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/compenents/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/compenents/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppCompenentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(sanitizer, breakpointObserver) {
        _classCallCheck(this, HomeComponent);

        this.sanitizer = sanitizer;
        this.breakpointObserver = breakpointObserver;
        this.widthVideo = "400px";
        this.heightVideo = "266px";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.breakpointObserver.observe(['(min-width: 1280px)']).subscribe(function (state) {
            if (state.matches) {
              _this4.widthVideo = "580px";
              _this4.heightVideo = "266px";
            } else {
              _this4.widthVideo = "400px";
              _this4.heightVideo = "266px";
            }
          });
          this.safeSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/eKFTSSKCzWA");
          this.safeSrc2 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/74b3Zb18UDM");
          this.safeSrc3 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5lCRsLjMeso");
          this.safeSrc4 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lM02vNMRRB0");
        }
      }, {
        key: "toggleVideo1",
        value: function toggleVideo1() {
          this.videoplayer1.nativeElement.play();
        }
      }, {
        key: "toggleVideo2",
        value: function toggleVideo2() {
          this.videoplayer2.nativeElement.play();
        }
      }, {
        key: "toggleVideo3",
        value: function toggleVideo3() {
          this.videoplayer4.nativeElement.play();
        }
      }, {
        key: "toggleVideo4",
        value: function toggleVideo4() {
          this.videoplayer4.nativeElement.play();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer1", {
      static: false
    })], HomeComponent.prototype, "videoplayer1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer2", {
      static: false
    })], HomeComponent.prototype, "videoplayer2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer3", {
      static: false
    })], HomeComponent.prototype, "videoplayer3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer4", {
      static: false
    })], HomeComponent.prototype, "videoplayer4", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/home/home.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/compenents/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/compenents/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/compenents/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompenentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-container {\n  font-family: Rubik, serif;\n  color: #CCCCCC;\n}\n\n.hello-text-container {\n  color: #CCCCCC;\n  font-family: Rubik, serif;\n}\n\n.h1-work {\n  text-transform: uppercase;\n  width: 450px;\n  font-family: Rubik, serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 38px;\n}\n\n.h5-work {\n  color: #CCCCCC;\n  height: 300px;\n  width: 450px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 30px;\n}\n\ninput {\n  height: 20px;\n  padding: 8px;\n}\n\n.error {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBlbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBlbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFRSx5QkFBQTtFQUNBLGNBTG1CO0FDRXJCOztBRE1BO0VBQ0UsY0FUbUI7RUFVbkIseUJBQUE7QUNIRjs7QURLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsY0F2Qm1CO0VBd0JuQixhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvY29tcGVuZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodC1zZWNvbmRhcnktdGV4dDogIzA1Qzk4NTtcbiRsaWdodC1wcmltYXJ5LXRleHQ6ICNDQ0NDQ0M7XG5cbi5sb2dpbi1jb250YWluZXIge1xuXG4gIGZvbnQtZmFtaWx5OiBSdWJpaywgc2VyaWY7XG4gIGNvbG9yOiAkbGlnaHQtcHJpbWFyeS10ZXh0O1xufVxuXG4uaGVsbG8tdGV4dC1jb250YWluZXJ7XG4gIGNvbG9yOiAkbGlnaHQtcHJpbWFyeS10ZXh0O1xuICBmb250LWZhbWlseTogUnViaWssIHNlcmlmO1xufVxuLmgxLXdvcmsge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogNDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaywgc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG5cbi5oNS13b3JrIHtcbiAgY29sb3I6ICRsaWdodC1wcmltYXJ5LXRleHQ7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0NTBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG5cblxuXG5cblxuaW5wdXQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmVycm9yIHtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiIsIi5sb2dpbi1jb250YWluZXIge1xuICBmb250LWZhbWlseTogUnViaWssIHNlcmlmO1xuICBjb2xvcjogI0NDQ0NDQztcbn1cblxuLmhlbGxvLXRleHQtY29udGFpbmVyIHtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaywgc2VyaWY7XG59XG5cbi5oMS13b3JrIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDQ1MHB4O1xuICBmb250LWZhbWlseTogUnViaWssIHNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuXG4uaDUtd29yayB7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDUwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmVycm9yIHtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/compenents/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/compenents/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppCompenentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.model = {};
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "submit",
        value: function submit() {
          this.router.navigate(['/dashboard']);

          if (this.form.valid) {}
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (document.getElementById('lamp-anim')) {
            document.getElementById('lamp-anim').hidden = false; //window.lavaAnimation.run();
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this5 = this;

          //TODO remove if server runs
          this.router.navigate(['/dashboard']);
          this.isLoading = true;
          this.authenticationService.login(this.model.email, this.model.password).subscribe(function (data) {
            _this5.router.navigate(['/dashboard']);
          }, function (error) {
            _this5.isLoading = false;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LoginComponent.prototype, "error", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compenents/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/compenents/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/helpers/apipath.interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/helpers/apipath.interceptor.ts ***!
    \************************************************/

  /*! exports provided: ApiPathInterceptor */

  /***/
  function srcAppHelpersApipathInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function () {
      return ApiPathInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApiPathInterceptor =
    /*#__PURE__*/
    function () {
      function ApiPathInterceptor() {
        _classCallCheck(this, ApiPathInterceptor);
      }

      _createClass(ApiPathInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + request.url;
          request = request.clone({
            url: url
          });
          return next.handle(request);
        }
      }]);

      return ApiPathInterceptor;
    }();

    ApiPathInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ApiPathInterceptor);
    /***/
  },

  /***/
  "./src/app/helpers/index.ts":
  /*!**********************************!*\
    !*** ./src/app/helpers/index.ts ***!
    \**********************************/

  /*! exports provided: JwtInterceptor, ApiPathInterceptor */

  /***/
  function srcAppHelpersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./jwt.interceptor */
    "./src/app/helpers/jwt.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"];
    });
    /* harmony import */


    var _apipath_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./apipath.interceptor */
    "./src/app/helpers/apipath.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function () {
      return _apipath_interceptor__WEBPACK_IMPORTED_MODULE_2__["ApiPathInterceptor"];
    });
    /***/

  },

  /***/
  "./src/app/helpers/jwt.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/helpers/jwt.interceptor.ts ***!
    \********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor() {
        _classCallCheck(this, JwtInterceptor);

        this.authUserInfo = null;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          this.authUserInfo = JSON.parse(localStorage.getItem('currentUser'));

          if (this.authUserInfo) {
            request = request.clone({
              setHeaders: {
                'Authorization': "".concat(this.authUserInfo.token)
              }
            });
            return next.handle(request);
          } else {
            return next.handle(request);
          }
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var STORAGE_KEY_AUTH_USER = 'currentUser';

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(email, password) {
          return this.http.post('users/login', {
            email: "admin@mail.com",
            password: "admin"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            localStorage.removeItem(STORAGE_KEY_AUTH_USER);

            if (user && user.token) {
              localStorage.setItem(STORAGE_KEY_AUTH_USER, JSON.stringify(user));
            }

            return user;
          }));
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/camera.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/camera.service.ts ***!
    \********************************************/

  /*! exports provided: CameraService */

  /***/
  function srcAppServicesCameraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraService", function () {
      return CameraService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CameraService =
    /*#__PURE__*/
    function () {
      function CameraService(http) {
        _classCallCheck(this, CameraService);

        this.http = http;
        this._todos = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.baseUrl = 'cameras';
        this.dataStore = {
          todos: []
        };
        this.todos = this._todos.asObservable();
      }

      _createClass(CameraService, [{
        key: "getCameras",
        value: function getCameras() {
          return this.http.get('cameras');
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this6 = this;

          this.http.get(this.baseUrl).subscribe(function (data) {
            _this6.dataStore.todos = data;

            _this6._todos.next(Object.assign({}, _this6.dataStore).todos);
          }, function (error) {
            return console.log('Could not load todos.');
          });
        }
      }]);

      return CameraService;
    }();

    CameraService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CameraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CameraService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://127.0.0.1:8000/',
      cameraURLWS: function cameraURLWS(id) {
        return "ws://0.0.0.0:8000/emulation/cameras/".concat(id, "/stream");
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/galyna/projects/limpid/farseer-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map