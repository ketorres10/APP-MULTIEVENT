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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" >\n  <ion-toolbar color=\"dark\">\n    <ion-title class=\"encabezado\">Inicio</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <img class=\"imagen\" src=\"assets/icon/icono.png\" alt=\"\">\n  <ion-button color=\"danger\" class=\"boton-entrar\" routerLink=\"/login\" expand=\"block\">Entrar</ion-button>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ".boton-entrar {\n  margin-top: 25px;\n  width: 50%;\n  margin-left: 25%;\n}\n\n.imagen {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL0M6XFxVc2Vyc1xca2FyZWVcXERlc2t0b3BcXFBST0pFQ1RPIElPTklDIFRUXFxnZXN0aW9uRXZlbnRvcy9zcmNcXGFwcFxcZm9sZGVyXFxmb2xkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9mb2xkZXIvZm9sZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvZm9sZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3Rvbi1lbnRyYXJ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG4uaW1hZ2Vue1xuICBjb2xvcjogcmVkO1xufSIsIi5ib3Rvbi1lbnRyYXIge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uaW1hZ2VuIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
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