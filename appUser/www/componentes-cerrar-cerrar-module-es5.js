function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-cerrar-cerrar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cerrar/cerrar.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cerrar/cerrar.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesCerrarCerrarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding>\n  <ion-button (click)=\"onLogout()\" >\n    Desconectarse\n  </ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/componentes/cerrar/cerrar-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/componentes/cerrar/cerrar-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CerrarPageRoutingModule */

  /***/
  function srcAppComponentesCerrarCerrarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CerrarPageRoutingModule", function () {
      return CerrarPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cerrar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cerrar.page */
    "./src/app/componentes/cerrar/cerrar.page.ts");

    var routes = [{
      path: '',
      component: _cerrar_page__WEBPACK_IMPORTED_MODULE_3__["CerrarPage"]
    }];

    var CerrarPageRoutingModule = function CerrarPageRoutingModule() {
      _classCallCheck(this, CerrarPageRoutingModule);
    };

    CerrarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CerrarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/cerrar/cerrar.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/cerrar/cerrar.module.ts ***!
    \*****************************************************/

  /*! exports provided: CerrarPageModule */

  /***/
  function srcAppComponentesCerrarCerrarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CerrarPageModule", function () {
      return CerrarPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cerrar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cerrar-routing.module */
    "./src/app/componentes/cerrar/cerrar-routing.module.ts");
    /* harmony import */


    var _cerrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cerrar.page */
    "./src/app/componentes/cerrar/cerrar.page.ts");

    var CerrarPageModule = function CerrarPageModule() {
      _classCallCheck(this, CerrarPageModule);
    };

    CerrarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cerrar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CerrarPageRoutingModule"]],
      declarations: [_cerrar_page__WEBPACK_IMPORTED_MODULE_6__["CerrarPage"]]
    })], CerrarPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/cerrar/cerrar.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/cerrar/cerrar.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesCerrarCerrarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NlcnJhci9jZXJyYXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/componentes/cerrar/cerrar.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/componentes/cerrar/cerrar.page.ts ***!
    \***************************************************/

  /*! exports provided: CerrarPage */

  /***/
  function srcAppComponentesCerrarCerrarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CerrarPage", function () {
      return CerrarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/servicios/auth.service */
    "./src/app/shared/servicios/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CerrarPage = /*#__PURE__*/function () {
      function CerrarPage(authservice, alertCtrl) {
        _classCallCheck(this, CerrarPage);

        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
      }

      _createClass(CerrarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //metodo
        //onLogout(){
        // this.authservice.logout();
        //}

      }, {
        key: "onLogout",
        value: function onLogout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: '¿Está seguro de que quiere cerrar sesión?',
                      buttons: [{
                        text: 'Cancelar',
                        handler: function handler(blah) {
                          console.log('Confirm Cncek: blah');
                        }
                      }, {
                        text: 'Aceptar',
                        handler: function handler() {
                          console.log('confirmOkey');

                          _this.authservice.logout();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    _context.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    result = _context.sent;
                    console.log(result);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CerrarPage;
    }();

    CerrarPage.ctorParameters = function () {
      return [{
        type: src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    CerrarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cerrar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cerrar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cerrar/cerrar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cerrar.page.scss */
      "./src/app/componentes/cerrar/cerrar.page.scss"))["default"]]
    })], CerrarPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-cerrar-cerrar-module-es5.js.map