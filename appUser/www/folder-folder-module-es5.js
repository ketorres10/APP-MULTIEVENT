function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let slide of slides\">\n      <div class=\"slide-img-padding\">\n        <div>\n          <img [src]=\"slide.img\" class=\"img\">\n          <h3 [innerHTML]=\"slide.titulo\"></h3>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <ion-card>\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"12\" size-lg=\"10\" size-xs=\"12\" offser=\"1\">\n          <div padding>\n            <ion-button style=\"text-align: center;\" routerLink=\"/login\" color=\"primary\" class=\"boton-entrar\" expand=\"full\" shape=\"round\">Ingresar\n            </ion-button>\n            <ion-button style=\"text-align: center;\" routerLink=\"/informacion\" color=\"primary\" expand=\"full\" class=\"boton-login\" shape=\"round\">\n              Acerca de\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/folder/folder-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/folder/folder-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FolderPageRoutingModule */

  /***/
  function srcAppFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
      return FolderPageRoutingModule;
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


    var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");

    var routes = [{
      path: '',
      component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }];

    var FolderPageRoutingModule = function FolderPageRoutingModule() {
      _classCallCheck(this, FolderPageRoutingModule);
    };

    FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FolderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.module.ts ***!
    \*****************************************/

  /*! exports provided: FolderPageModule */

  /***/
  function srcAppFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
      return FolderPageModule;
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


    var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./folder-routing.module */
    "./src/app/folder/folder-routing.module.ts");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");

    var FolderPageModule = function FolderPageModule() {
      _classCallCheck(this, FolderPageModule);
    };

    FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]],
      declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })], FolderPageModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".boton-entrar, .boton-login {\n  font-family: \"Candara\";\n}\n\n.slide-img-padding {\n  margin-top: 17%;\n}\n\nion-slide {\n  display: block;\n  color: white;\n}\n\nh3 {\n  font-family: \"Candara\";\n  font-weight: lighter;\n  margin-bottom: 20%;\n}\n\nion-footer {\n  border: 0;\n}\n\nion-label {\n  color: #2D6082;\n}\n\nion-content {\n  --ion-background-color: #2D6082;\n  color: #2D6082;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL0M6XFxVc2Vyc1xca2FyZWVcXERlc2t0b3BcXEFQUC1NVUxUSUVWRU5UXFxhcHBVc2VyL3NyY1xcYXBwXFxmb2xkZXJcXGZvbGRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLFNBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7QUNLRjs7QURIQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b24tZW50cmFyLCAuYm90b24tbG9naW57XG4gIGZvbnQtZmFtaWx5OiBcIkNhbmRhcmFcIjtcbn1cbi5zbGlkZS1pbWctcGFkZGluZ3tcbiAgbWFyZ2luLXRvcDogMTclO1xufVxuaW9uLXNsaWRle1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuXG59XG5oM3tcbiAgZm9udC1mYW1pbHk6IFwiQ2FuZGFyYVwiO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuaW9uLWZvb3RlcntcbiAgYm9yZGVyOiAwO1xufVxuaW9uLWxhYmVse1xuICBjb2xvcjogIzJENjA4Mjtcbn1cbmlvbi1jb250ZW50e1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2MDgyO1xuICBjb2xvcjogIzJENjA4Mjtcbn0iLCIuYm90b24tZW50cmFyLCAuYm90b24tbG9naW4ge1xuICBmb250LWZhbWlseTogXCJDYW5kYXJhXCI7XG59XG5cbi5zbGlkZS1pbWctcGFkZGluZyB7XG4gIG1hcmdpbi10b3A6IDE3JTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogXCJDYW5kYXJhXCI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG5cbmlvbi1mb290ZXIge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMkQ2MDgyO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyRDYwODI7XG4gIGNvbG9yOiAjMkQ2MDgyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/folder/folder.page.ts":
  /*!***************************************!*\
    !*** ./src/app/folder/folder.page.ts ***!
    \***************************************/

  /*! exports provided: FolderPage */

  /***/
  function srcAppFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
      return FolderPage;
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


    var _shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/servicios/auth.service */
    "./src/app/shared/servicios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //importar la clase auth.service.ts
    //importar el servicio
    //import { ConsoleReporter } from 'jasmine';


    var FolderPage = /*#__PURE__*/function () {
      //en ves de authservice
      function FolderPage(authService, router) {
        _classCallCheck(this, FolderPage);

        this.authService = authService;
        this.router = router;
        this.slides = [{
          img: 'assets/icon/slide1.png',
          titulo: 'Obtener información del evento<br>en tiempo real'
        }, {
          img: 'assets/icon/slide2.png',
          titulo: 'Facilidad de inscrcibirte<br>en el evento'
        }, {
          img: 'assets/icon/slide3.png',
          titulo: 'Actualización de la<br>agenda de eventos'
        }];
      }

      _createClass(FolderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }, {
        key: "onSubmitEntrar",
        value: function onSubmitEntrar() {
          //referencia del AuthService que se inyecto en la clase
          this.router.navigate(['/login']);
        }
      }]);

      return FolderPage;
    }();

    FolderPage.ctorParameters = function () {
      return [{
        type: _shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./folder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./folder.page.scss */
      "./src/app/folder/folder.page.scss"))["default"]]
    })], FolderPage);
    /***/
  }
}]);
//# sourceMappingURL=folder-folder-module-es5.js.map