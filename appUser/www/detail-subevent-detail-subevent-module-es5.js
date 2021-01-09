function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-subevent-detail-subevent-module"], {
  /***/
  "./src/app/componentes/eventos/detail-subevent/detail-subevent-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/componentes/eventos/detail-subevent/detail-subevent-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: DetailSubeventPageRoutingModule */

  /***/
  function srcAppComponentesEventosDetailSubeventDetailSubeventRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailSubeventPageRoutingModule", function () {
      return DetailSubeventPageRoutingModule;
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


    var _detail_subevent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail-subevent.page */
    "./src/app/componentes/eventos/detail-subevent/detail-subevent.page.ts");

    var routes = [{
      path: '',
      component: _detail_subevent_page__WEBPACK_IMPORTED_MODULE_3__["DetailSubeventPage"]
    }];

    var DetailSubeventPageRoutingModule = function DetailSubeventPageRoutingModule() {
      _classCallCheck(this, DetailSubeventPageRoutingModule);
    };

    DetailSubeventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailSubeventPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/eventos/detail-subevent/detail-subevent.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/componentes/eventos/detail-subevent/detail-subevent.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: DetailSubeventPageModule */

  /***/
  function srcAppComponentesEventosDetailSubeventDetailSubeventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailSubeventPageModule", function () {
      return DetailSubeventPageModule;
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


    var _detail_subevent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-subevent-routing.module */
    "./src/app/componentes/eventos/detail-subevent/detail-subevent-routing.module.ts");
    /* harmony import */


    var _detail_subevent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail-subevent.page */
    "./src/app/componentes/eventos/detail-subevent/detail-subevent.page.ts");

    var DetailSubeventPageModule = function DetailSubeventPageModule() {
      _classCallCheck(this, DetailSubeventPageModule);
    };

    DetailSubeventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_subevent_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailSubeventPageRoutingModule"]],
      declarations: [_detail_subevent_page__WEBPACK_IMPORTED_MODULE_6__["DetailSubeventPage"]]
    })], DetailSubeventPageModule);
    /***/
  }
}]);
//# sourceMappingURL=detail-subevent-detail-subevent-module-es5.js.map