function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-pages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/camera/camera.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/camera/camera.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPagesCameraCameraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<nb-card size=\"small\" class=\"farseer-card \">\n  <nb-card-header class=\"farseer-card-header\">{{name}}</nb-card-header>\n  <nb-card-body class=\"farseer-card-body\">\n    <div class=\"video\">\n      <img [src]=\"safeSrc\" class=\"img-box\" [ngStyle]=\"{'max-width.px': widthVideo,'max-height.px': heightVideo}\"/>\n    </div>\n  </nb-card-body>\n</nb-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/dashboard/dashboard.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/dashboard/dashboard.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" >\n<div class=\"row\" >\n  <div class=\"col-lg-6\" *ngFor=\"let camera of cameras | async \">\n    <app-camera  [id]=\"camera.id\" [name]=\"camera.description\"></app-camera>\n  </div>\n\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!isMobile && !isMobileTablet\" class=\"card-row\">\n  <div class=\"card-col\">\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 1</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc1\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 3</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <div class=\"video\">\n            <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc3\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                    frameborder=\"0\"\n                    webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen></iframe>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"card-col\">\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 2</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc2\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 4</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <div class=\"video\">\n            <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc4\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                    frameborder=\"0\"\n                    webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen></iframe>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div  *ngIf=\"isMobileTablet\">\n\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 1</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc1\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 3</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <div class=\"video\">\n            <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc3\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                    frameborder=\"0\"\n                    webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen></iframe>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 2</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc2\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card size=\"small\" class=\"farseer-card\">\n      <nb-card-header class=\"farseer-card-header\">Камерa 4</nb-card-header>\n      <nb-card-body class=\"farseer-card-body\">\n        <div class=\"video\">\n          <div class=\"video\">\n            <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc4\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                    frameborder=\"0\"\n                    webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen></iframe>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n</div>\n\n<div  *ngIf=\"isMobile && !isMobileTablet\">\n\n  <nb-card size=\"tiny\" class=\"farseer-card\">\n    <nb-card-header class=\"farseer-card-header\">Камерa 1</nb-card-header>\n    <nb-card-body class=\"farseer-card-body\">\n      <div class=\"video\">\n        <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc1\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                frameborder=\"0\"\n                webkitallowfullscreen mozallowfullscreen\n                allowfullscreen></iframe>\n      </div>\n    </nb-card-body>\n  </nb-card>\n  <nb-card size=\"tiny\" class=\"farseer-card\">\n    <nb-card-header class=\"farseer-card-header\">Камерa 3</nb-card-header>\n    <nb-card-body class=\"farseer-card-body\">\n      <div class=\"video\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc3\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </div>\n    </nb-card-body>\n  </nb-card>\n  <nb-card size=\"tiny\" class=\"farseer-card\">\n    <nb-card-header class=\"farseer-card-header\">Камерa 2</nb-card-header>\n    <nb-card-body class=\"farseer-card-body\">\n      <div class=\"video\">\n        <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc2\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                frameborder=\"0\"\n                webkitallowfullscreen mozallowfullscreen\n                allowfullscreen></iframe>\n      </div>\n    </nb-card-body>\n  </nb-card>\n  <nb-card size=\"tiny\" class=\"farseer-card\">\n    <nb-card-header class=\"farseer-card-header\">Камерa 4</nb-card-header>\n    <nb-card-body class=\"farseer-card-body\">\n      <div class=\"video\">\n        <div class=\"video\">\n          <iframe [class.thumbnail]=\"thumbnail\" [src]=\"safeSrc4\" [width]=\"widthVideo\" [height]=\"heightVideo\"\n                  frameborder=\"0\"\n                  webkitallowfullscreen mozallowfullscreen\n                  allowfullscreen></iframe>\n        </div>\n      </div>\n    </nb-card-body>\n  </nb-card>\n\n</div>\n\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js ***!
    \********************************************************************************/

  /*! exports provided: WebSocketSubject */

  /***/
  function node_modulesRxjs_esm2015InternalObservableDomWebSocketSubjectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function () {
      return WebSocketSubject;
    });
    /* harmony import */


    var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../Subject */
    "./node_modules/rxjs/_esm2015/internal/Subject.js");
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../Subscriber */
    "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Observable */
    "./node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Subscription */
    "./node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../ReplaySubject */
    "./node_modules/rxjs/_esm2015/internal/ReplaySubject.js");

    var DEFAULT_WEBSOCKET_CONFIG = {
      url: '',
      deserializer: function deserializer(e) {
        return JSON.parse(e.data);
      },
      serializer: function serializer(value) {
        return JSON.stringify(value);
      }
    };
    var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';

    var WebSocketSubject =
    /*#__PURE__*/
    function (_Subject__WEBPACK_IMP) {
      _inherits(WebSocketSubject, _Subject__WEBPACK_IMP);

      function WebSocketSubject(urlConfigOrSource, destination) {
        var _this;

        _classCallCheck(this, WebSocketSubject);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WebSocketSubject).call(this));

        if (urlConfigOrSource instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
          _this.destination = destination;
          _this.source = urlConfigOrSource;
        } else {
          var config = _this._config = Object.assign({}, DEFAULT_WEBSOCKET_CONFIG);
          _this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

          if (typeof urlConfigOrSource === 'string') {
            config.url = urlConfigOrSource;
          } else {
            for (var key in urlConfigOrSource) {
              if (urlConfigOrSource.hasOwnProperty(key)) {
                config[key] = urlConfigOrSource[key];
              }
            }
          }

          if (!config.WebSocketCtor && WebSocket) {
            config.WebSocketCtor = WebSocket;
          } else if (!config.WebSocketCtor) {
            throw new Error('no WebSocket constructor can be found');
          }

          _this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        }

        return _this;
      }

      _createClass(WebSocketSubject, [{
        key: "lift",
        value: function lift(operator) {
          var sock = new WebSocketSubject(this._config, this.destination);
          sock.operator = operator;
          sock.source = this;
          return sock;
        }
      }, {
        key: "_resetState",
        value: function _resetState() {
          this._socket = null;

          if (!this.source) {
            this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
          }

          this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }
      }, {
        key: "multiplex",
        value: function multiplex(subMsg, unsubMsg, messageFilter) {
          var self = this;
          return new _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            try {
              self.next(subMsg());
            } catch (err) {
              observer.error(err);
            }

            var subscription = self.subscribe(function (x) {
              try {
                if (messageFilter(x)) {
                  observer.next(x);
                }
              } catch (err) {
                observer.error(err);
              }
            }, function (err) {
              return observer.error(err);
            }, function () {
              return observer.complete();
            });
            return function () {
              try {
                self.next(unsubMsg());
              } catch (err) {
                observer.error(err);
              }

              subscription.unsubscribe();
            };
          });
        }
      }, {
        key: "_connectSocket",
        value: function _connectSocket() {
          var _this2 = this;

          var _this$_config = this._config,
              WebSocketCtor = _this$_config.WebSocketCtor,
              protocol = _this$_config.protocol,
              url = _this$_config.url,
              binaryType = _this$_config.binaryType;
          var observer = this._output;
          var socket = null;

          try {
            socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
            this._socket = socket;

            if (binaryType) {
              this._socket.binaryType = binaryType;
            }
          } catch (e) {
            observer.error(e);
            return;
          }

          var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](function () {
            _this2._socket = null;

            if (socket && socket.readyState === 1) {
              socket.close();
            }
          });

          socket.onopen = function (e) {
            var _socket = _this2._socket;

            if (!_socket) {
              socket.close();

              _this2._resetState();

              return;
            }

            var openObserver = _this2._config.openObserver;

            if (openObserver) {
              openObserver.next(e);
            }

            var queue = _this2.destination;
            _this2.destination = _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"].create(function (x) {
              if (socket.readyState === 1) {
                try {
                  var serializer = _this2._config.serializer;
                  socket.send(serializer(x));
                } catch (e) {
                  _this2.destination.error(e);
                }
              }
            }, function (e) {
              var closingObserver = _this2._config.closingObserver;

              if (closingObserver) {
                closingObserver.next(undefined);
              }

              if (e && e.code) {
                socket.close(e.code, e.reason);
              } else {
                observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
              }

              _this2._resetState();
            }, function () {
              var closingObserver = _this2._config.closingObserver;

              if (closingObserver) {
                closingObserver.next(undefined);
              }

              socket.close();

              _this2._resetState();
            });

            if (queue && queue instanceof _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]) {
              subscription.add(queue.subscribe(_this2.destination));
            }
          };

          socket.onerror = function (e) {
            _this2._resetState();

            observer.error(e);
          };

          socket.onclose = function (e) {
            _this2._resetState();

            var closeObserver = _this2._config.closeObserver;

            if (closeObserver) {
              closeObserver.next(e);
            }

            if (e.wasClean) {
              observer.complete();
            } else {
              observer.error(e);
            }
          };

          socket.onmessage = function (e) {
            try {
              var deserializer = _this2._config.deserializer;
              observer.next(deserializer(e));
            } catch (err) {
              observer.error(err);
            }
          };
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var _this3 = this;

          var source = this.source;

          if (source) {
            return source.subscribe(subscriber);
          }

          if (!this._socket) {
            this._connectSocket();
          }

          this._output.subscribe(subscriber);

          subscriber.add(function () {
            var _socket = _this3._socket;

            if (_this3._output.observers.length === 0) {
              if (_socket && _socket.readyState === 1) {
                _socket.close();
              }

              _this3._resetState();
            }
          });
          return subscriber;
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          var _socket = this._socket;

          if (_socket && _socket.readyState === 1) {
            _socket.close();
          }

          this._resetState();

          _get(_getPrototypeOf(WebSocketSubject.prototype), "unsubscribe", this).call(this);
        }
      }]);

      return WebSocketSubject;
    }(_Subject__WEBPACK_IMPORTED_MODULE_0__["AnonymousSubject"]); //# sourceMappingURL=WebSocketSubject.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/_esm2015/internal/observable/dom/webSocket.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/webSocket.js ***!
    \*************************************************************************/

  /*! exports provided: webSocket */

  /***/
  function node_modulesRxjs_esm2015InternalObservableDomWebSocketJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "webSocket", function () {
      return webSocket;
    });
    /* harmony import */


    var _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./WebSocketSubject */
    "./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js");

    function webSocket(urlConfigOrSource) {
      return new _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__["WebSocketSubject"](urlConfigOrSource);
    } //# sourceMappingURL=webSocket.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/_esm2015/webSocket/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/_esm2015/webSocket/index.js ***!
    \*******************************************************/

  /*! exports provided: webSocket, WebSocketSubject */

  /***/
  function node_modulesRxjs_esm2015WebSocketIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../internal/observable/dom/webSocket */
    "./node_modules/rxjs/_esm2015/internal/observable/dom/webSocket.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "webSocket", function () {
      return _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_0__["webSocket"];
    });
    /* harmony import */


    var _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../internal/observable/dom/WebSocketSubject */
    "./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function () {
      return _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_1__["WebSocketSubject"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./src/app/components/pages/camera/camera.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/pages/camera/camera.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPagesCameraCameraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-box {\n  min-height: 200px;\n  min-width: 300px;\n}\n\n.farseer-card {\n  margin-bottom: 8px;\n}\n\n.farseer-card-header {\n  height: 40px;\n  padding: 8px 16px;\n}\n\n.farseer-card-body {\n  margin: 0 auto;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltZy1ib3gge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuXG4uZmFyc2Vlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQtYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbiIsIi5pbWctYm94IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5mYXJzZWVyLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLmZhcnNlZXItY2FyZC1ib2R5IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/pages/camera/camera.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/pages/camera/camera.component.ts ***!
    \*************************************************************/

  /*! exports provided: CameraComponent */

  /***/
  function srcAppComponentsPagesCameraCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../../../../environments/environment */
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
        this.safeSrc = "assets/Group 28.png";
      }

      _createClass(CameraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.handleBreakpoints(); // this.startSocket(this.id);
        }
      }, {
        key: "handleBreakpoints",
        value: function handleBreakpoints() {
          var _this4 = this;

          this.breakpointObserver.observe(['(min-width: 320px)']).subscribe(function (state) {
            if (state.matches) {
              _this4.widthVideo = "170";
              _this4.heightVideo = "170";
            }
          });
          this.breakpointObserver.observe(['(min-width: 577px)']).subscribe(function (state) {
            if (state.matches) {
              _this4.widthVideo = "300";
              _this4.heightVideo = "260";
            }
          });
          this.breakpointObserver.observe(['(min-width: 600px)']).subscribe(function (state) {
            if (state.matches) {
              _this4.widthVideo = "440";
              _this4.heightVideo = "260";
            }
          });
          this.breakpointObserver.observe(['(min-width: 765px)']).subscribe(function (state) {
            if (state.matches) {
              //600 -960
              _this4.widthVideo = "570";
              _this4.heightVideo = "270";
            } else {}
          });
          this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Medium]).subscribe(function (state) {
            if (state.matches) {
              //960 -992
              _this4.widthVideo = "660";
              _this4.heightVideo = "270";
            }
          });
          this.breakpointObserver.observe(['(min-width: 990px)']).subscribe(function (state) {
            if (state.matches) {
              _this4.widthVideo = "400";
              _this4.heightVideo = "266";
            }
          });
          this.breakpointObserver.observe(['(min-width: 1200px)']).subscribe(function (state) {
            if (state.matches) {
              _this4.widthVideo = "500";
              _this4.heightVideo = "276";
            }
          });
          this.breakpointObserver.observe(['(min-width: 1400px)']).subscribe(function (state) {
            if (state.matches) {
              _this4.widthVideo = "600";
              _this4.heightVideo = "276";
            }
          });
        }
      }, {
        key: "startSocket",
        value: function startSocket(id) {
          var _this5 = this;

          this.WebSocketSubject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__["webSocket"])({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cameraURLWS(id),
            deserializer: function deserializer(msg) {
              return msg.data;
            }
          });
          this.WebSocketSubject.subscribe(function (msg) {
            // console.log('success')
            _this5.safeSrc = _this5.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(msg));
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
        value: function ngOnDestroy() {//this.WebSocketSubject.unsubscribe();
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/camera/camera.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./camera.component.scss */
      "./src/app/components/pages/camera/camera.component.scss")).default]
    })], CameraComponent);
    /***/
  },

  /***/
  "./src/app/components/pages/dashboard/dashboard.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/pages/dashboard/dashboard.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-h1 {\n  margin: 20px;\n  color: #cccccc;\n}\n\n.mat-h3 {\n  margin: 20px;\n  color: #05C985;\n}\n\n.right-container {\n  margin-top: 50px;\n  height: 100%;\n  min-width: 150px;\n  float: right;\n}\n\n.type-name {\n  min-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxjQVhxQjtBQ092Qjs7QURTQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiAjMDVDOTg1O1xuXG4kbGlnaHQtcHJpbWFyeS10ZXh0OiAjQ0NDQ0NDO1xuXG4ubWF0LWgxe1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4ubWF0LWgze1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAkbGlnaHQtc2Vjb25kYXJ5LXRleHRcbn1cblxuXG5cbi5yaWdodC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuXG4udHlwZS1uYW1lIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuIiwiLm1hdC1oMSB7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbi5tYXQtaDMge1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjMDVDOTg1O1xufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50eXBlLW5hbWUge1xuICBtaW4td2lkdGg6IDE1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/pages/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/pages/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../../../services/camera.service */
    "./src/app/services/camera.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(cameraService) {
        _classCallCheck(this, DashboardComponent);

        this.cameraService = cameraService;
        this.listItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/components/pages/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/pages/home/home.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/pages/home/home.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.card-row {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 -0.5rem;\n}\n\n.card-col {\n  -webkit-box-flex: 1;\n          flex: 1 0 calc(50% - 1rem);\n  margin: 0 0.5rem;\n}\n\n.farseer-card {\n  margin-bottom: 8px;\n}\n\n.farseer-card-header {\n  height: 40px;\n  padding: 8px 16px;\n}\n\n.farseer-card-body {\n  margin: 0 auto;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhbHluYS9wcm9qZWN0cy9saW1waWQvZmFyc2Vlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gLy8gbWF4LWhlaWdodDogODByZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNhcmQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0wLjVyZW07XG59XG5cbi5jYXJkLWNvbCB7XG4gIGZsZXg6IDEgMCBjYWxjKDUwJSAtIDFyZW0pO1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuXG4uZmFyc2Vlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5mYXJzZWVyLWNhcmQtYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jYXJkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAtMC41cmVtO1xufVxuXG4uY2FyZC1jb2wge1xuICBmbGV4OiAxIDAgY2FsYyg1MCUgLSAxcmVtKTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbn1cblxuLmZhcnNlZXItY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmZhcnNlZXItY2FyZC1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4uZmFyc2Vlci1jYXJkLWJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/pages/home/home.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/pages/home/home.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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
          var _this6 = this;

          this.breakpointObserver.observe(['(min-width: 600px)']).subscribe(function (state) {
            if (state.matches) {
              _this6.isMobile = false;
            } else {
              _this6.isMobile = true;
            }
          });
          this.breakpointObserver.observe(['(min-width: 960px)']).subscribe(function (state) {
            if (state.matches) {
              _this6.isMobileTablet = false;
            } else {
              _this6.isMobileTablet = true;
            }
          });
          this.breakpointObserver.observe(['(min-width: 1280px)']).subscribe(function (state) {
            if (state.matches) {
              _this6.isMobileTablet = false;
            } else {}
          });
          this.handleBreakpoints();
          this.safeSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/eKFTSSKCzWA");
          this.safeSrc2 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/74b3Zb18UDM");
          this.safeSrc3 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5lCRsLjMeso");
          this.safeSrc4 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lM02vNMRRB0");
        }
      }, {
        key: "handleBreakpoints",
        value: function handleBreakpoints() {
          var _this7 = this;

          this.breakpointObserver.observe(['(min-width: 320px)']).subscribe(function (state) {
            if (state.matches) {
              _this7.widthVideo = "170px";
              _this7.heightVideo = "170px";
            }
          });
          this.breakpointObserver.observe(['(min-width: 577px)']).subscribe(function (state) {
            if (state.matches) {
              _this7.widthVideo = "300px";
              _this7.heightVideo = "260px";
            }
          });
          this.breakpointObserver.observe(['(min-width: 600px)']).subscribe(function (state) {
            if (state.matches) {
              _this7.widthVideo = "440px";
              _this7.heightVideo = "260px";
            }
          });
          this.breakpointObserver.observe(['(min-width: 765px)']).subscribe(function (state) {
            if (state.matches) {
              //600 -960
              _this7.widthVideo = "570px";
              _this7.heightVideo = "270px";
            } else {}
          });
          this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium]).subscribe(function (state) {
            if (state.matches) {
              //960 -992
              _this7.widthVideo = "660px";
              _this7.heightVideo = "270px";
            }
          });
          this.breakpointObserver.observe(['(min-width: 990px)']).subscribe(function (state) {
            if (state.matches) {
              _this7.widthVideo = "400px";
              _this7.heightVideo = "266px";
            }
          });
          this.breakpointObserver.observe(['(min-width: 1200px)']).subscribe(function (state) {
            if (state.matches) {
              _this7.widthVideo = "500px";
              _this7.heightVideo = "276px";
            }
          });
          this.breakpointObserver.observe(['(min-width: 1400px)']).subscribe(function (state) {
            if (state.matches) {
              _this7.widthVideo = "600px";
              _this7.heightVideo = "276px";
            }
          });
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/pages/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/pages/pages-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/pages/pages-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: routes, NgxPagesRoutingModule */

  /***/
  function srcAppComponentsPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPagesRoutingModule", function () {
      return NgxPagesRoutingModule;
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/components/pages/home/home.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/components/pages/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      children: [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
      }]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var NgxPagesRoutingModule = function NgxPagesRoutingModule() {
      _classCallCheck(this, NgxPagesRoutingModule);
    };

    NgxPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NgxPagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/pages/pages.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/pages/pages.module.ts ***!
    \**************************************************/

  /*! exports provided: NgxPagesModule */

  /***/
  function srcAppComponentsPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPagesModule", function () {
      return NgxPagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/components/pages/pages-routing.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/components/pages/home/home.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/components/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _camera_camera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./camera/camera.component */
    "./src/app/components/pages/camera/camera.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");

    var NgxPagesModule = function NgxPagesModule() {
      _classCallCheck(this, NgxPagesModule);
    };

    NgxPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["NgxPagesRoutingModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_10__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbActionsModule"]],
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _camera_camera_component__WEBPACK_IMPORTED_MODULE_8__["CameraComponent"]]
    })], NgxPagesModule);
    /***/
  }
}]);
//# sourceMappingURL=components-pages-pages-module-es5.js.map