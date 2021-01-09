function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-eventos-eventos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/eventos.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/eventos.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesEventosEventosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Eventos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-list>\n  <ion-item *ngFor=\"let event of listEvents\">\n    <div class=\"cardEventos\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>{{event.siglas}}</ion-card-subtitle>\n          <ion-card-title>\n            <a [routerLink]=\"['/event', event.id]\"> {{event.title}}</a>\n          </ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </div>\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./src/app/componentes/eventos/eventos-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/componentes/eventos/eventos-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EventosPageRoutingModule */

  /***/
  function srcAppComponentesEventosEventosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventosPageRoutingModule", function () {
      return EventosPageRoutingModule;
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


    var _eventos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./eventos.page */
    "./src/app/componentes/eventos/eventos.page.ts");

    var routes = [{
      path: '',
      component: _eventos_page__WEBPACK_IMPORTED_MODULE_3__["EventosPage"]
    }, {
      path: 'moreinformation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | moreinformation-moreinformation-module */
        "moreinformation-moreinformation-module").then(__webpack_require__.bind(null,
        /*! ./moreinformation/moreinformation.module */
        "./src/app/componentes/eventos/moreinformation/moreinformation.module.ts")).then(function (m) {
          return m.MoreinformationPageModule;
        });
      }
    }, {
      path: 'detail-subevent',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | detail-subevent-detail-subevent-module */
        "detail-subevent-detail-subevent-module").then(__webpack_require__.bind(null,
        /*! ./detail-subevent/detail-subevent.module */
        "./src/app/componentes/eventos/detail-subevent/detail-subevent.module.ts")).then(function (m) {
          return m.DetailSubeventPageModule;
        });
      }
    }];

    var EventosPageRoutingModule = function EventosPageRoutingModule() {
      _classCallCheck(this, EventosPageRoutingModule);
    };

    EventosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/eventos/eventos.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/eventos/eventos.module.ts ***!
    \*******************************************************/

  /*! exports provided: EventosPageModule */

  /***/
  function srcAppComponentesEventosEventosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventosPageModule", function () {
      return EventosPageModule;
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


    var _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./eventos-routing.module */
    "./src/app/componentes/eventos/eventos-routing.module.ts");
    /* harmony import */


    var _eventos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./eventos.page */
    "./src/app/componentes/eventos/eventos.page.ts");

    var EventosPageModule = function EventosPageModule() {
      _classCallCheck(this, EventosPageModule);
    };

    EventosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventosPageRoutingModule"]],
      declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]]
    })], EventosPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/eventos/eventos.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/eventos/eventos.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesEventosEventosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  color: blue;\n  text-decoration: none;\n}\n\n.cardEventos {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9DOlxcVXNlcnNcXGthcmVlXFxEZXNrdG9wXFxQUk9KRUNUTyBJT05JQyBUVFxcZ2VzdGlvbkV2ZW50b3Mvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxldmVudG9zXFxldmVudG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9ldmVudG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9ldmVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY2FyZEV2ZW50b3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsImEge1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FyZEV2ZW50b3Mge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/eventos/eventos.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/eventos/eventos.page.ts ***!
    \*****************************************************/

  /*! exports provided: EventosPage */

  /***/
  function srcAppComponentesEventosEventosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventosPage", function () {
      return EventosPage;
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


    var src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/servicios/evento.service */
    "./src/app/shared/servicios/evento.service.ts");

    var EventosPage = /*#__PURE__*/function () {
      function EventosPage(authService, eventoService) {
        _classCallCheck(this, EventosPage);

        this.authService = authService;
        this.eventoService = eventoService;
        this.listEvents = [];
      }

      _createClass(EventosPage, [{
        key: "Onlogout",
        value: function Onlogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.eventos$ = this.eventoService.getAllEvents();
          this.eventos$.subscribe(function (eventos) {
            eventos.forEach(function (element) {
              console.log(element);

              _this.listEvents.push(element);
            });
          });
        }
      }]);

      return EventosPage;
    }();

    EventosPage.ctorParameters = function () {
      return [{
        type: src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventosService"]
      }];
    };

    EventosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-eventos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./eventos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/eventos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./eventos.page.scss */
      "./src/app/componentes/eventos/eventos.page.scss"))["default"]]
    })], EventosPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-eventos-eventos-module-es5.js.map