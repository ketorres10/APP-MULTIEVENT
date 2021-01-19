function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\" >\n    <ion-title>Inicio de sesión</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n  <ion-content padding >\n    <ion-card-content >\n      <ion-card-content class=\"card\">\n        <img class=\"logo\" src=\"assets/icon/logo.png\" alt=\"\">\n        <div class=\"field\" ion-icon=\"person-circle\">\n          <ion-item>\n            <ion-icon name=\"person-circle\" position= \"floating\"></ion-icon>\n            <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"Email\" placeholder=\" Correo electrónico\"></ion-input>\n          </ion-item>\n        </div>\n        <br>\n        <div class=\"field\">\n          <ion-item>\n            <ion-icon name=\"lock-closed\"></ion-icon>\n            <ion-input [(ngModel)]=\"password\" [type]=\"showPassword ? 'text': 'password'\" name=\" Password\" placeholder=\" Contraseña\"></ion-input>\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon\" (click)=\"togglePassword()\"></ion-icon>\n          </ion-item>\n        </div>\n      </ion-card-content>\n      <ion-button class=\"boton-entrar\" (click)=\"onSubmitLogin()\" style=\"background-color: #DC7633;\" color=\"#DC7633\" expand=\"full\">Entrar</ion-button>\n      <ion-button style=\"text-align: center;\" routerLink=\"/registro\" style=\"background-color: #2D6082;\" color=\"#DC7633\" expand=\"full\"><ion-icon name=\"person-add\" style=\"color: white;\"></ion-icon>&nbsp;&nbsp;Crear cuenta</ion-button>\n    </ion-card-content>\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/componentes/login/login-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/componentes/login/login-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppComponentesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/componentes/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/login/login.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/componentes/login/login.module.ts ***!
    \***************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppComponentesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/componentes/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/componentes/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/login/login.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/componentes/login/login.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\n  margin-top: 5em;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 5em;\n}\n\n.card {\n  background-color: r;\n}\n\n.boton-entrar {\n  justify-content: center;\n  text-align: center;\n  margin-top: 1.5em;\n  display: flex;\n  color: white;\n}\n\nion-icon {\n  color: #2D6082;\n}\n\np {\n  font-size: small;\n}\n\n.field {\n  width: 100%;\n}\n\n.field .fie {\n  margin-top: 20px;\n}\n\nion-item {\n  font-size: 13px;\n  border-radius: 2em;\n  border: 2px solid #edbb99;\n  box-shadow: 10px 10px 17px -15px #000b00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vQzpcXFVzZXJzXFxrYXJlZVxcRGVza3RvcFxcQVBQLU1VTFRJRVZFTlRcXGFwcFVzZXIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEREE7RUFDQSxnQkFBQTtBQ0lBOztBREZBO0VBQ0UsV0FBQTtBQ0tGOztBREpFO0VBQ0ksZ0JBQUE7QUNNTjs7QURIQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nb3tcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDVlbTtcclxufVxyXG4uY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByO1xyXG59XHJcbi5ib3Rvbi1lbnRyYXJ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gIGNvbG9yOiAjMkQ2MDgyO1xyXG59XHJcbnB7XHJcbmZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLmZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5maWV7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcbmlvbi1pdGVte1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNywgMTg3LCAxNTMpO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxN3B4IC0xNXB4IHJnYigwIDExIDApO1xyXG59XHJcbiIsIi5sb2dvIHtcbiAgbWFyZ2luLXRvcDogNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHI7XG59XG5cbi5ib3Rvbi1lbnRyYXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjMkQ2MDgyO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmllbGQgLmZpZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZGJiOTk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxN3B4IC0xNXB4ICMwMDBiMDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/login/login.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/componentes/login/login.page.ts ***!
    \*************************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppComponentesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginPage = /*#__PURE__*/function () {
      //en ves de authservice
      function LoginPage(authService, router, alertCtrl, navController) {
        _classCallCheck(this, LoginPage);

        this.authService = authService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.showPassword = false;
        this.passwordToggleIcon = "eye";
      }

      _createClass(LoginPage, [{
        key: "togglePassword",
        value: function togglePassword() {
          this.showPassword = !this.showPassword;

          if (this.passwordToggleIcon == 'eye') {
            this.passwordToggleIcon = 'eye-off';
          } else {
            this.passwordToggleIcon = 'eye';
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }, {
        key: "onSubmitLogin",
        value: function onSubmitLogin() {
          var _this = this;

          //referencia del AuthService que se inyecto en la clase
          this.authService.login(this.email, this.password).then(function (res) {
            _this.router.navigate(['../eventos/']);
          })["catch"](function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Datos incorrectos o usuario inexistente',
                        buttons: [{
                          text: 'Aceptar',
                          handler: function handler() {
                            _this2.navController.navigateForward(['login']);
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
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/componentes/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-login-login-module-es5.js.map