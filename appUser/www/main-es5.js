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
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
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


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" type=\"overlay\" contentId=\"main\" swipe-gesture=\"false\" color=\"primary\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu de opciones</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"profile-pic\">\n        <img [src]=\"currentImage\" alt=\"foto de perfil\" class=\"avatar\">\n      </div>\n      <div class=\"container-actividades\">\n        <div class=\"hover\">\n          <ion-note (click)=\"inicio()\" class=\"actividad\" expand=\"full\">\n            <ion-icon name=\"home\"></ion-icon>&nbsp;&nbsp;Inicio\n          </ion-note><br>\n        </div>\n        <ion-note (click)=\"login()\" class=\"actividad\">\n          <ion-icon name=\"people\"></ion-icon>&nbsp;&nbsp;Iniciar sesión\n        </ion-note><br>\n        <ion-note (click)=\"perfil()\" class=\"actividad\">\n          <ion-icon name=\"people\"></ion-icon>&nbsp;&nbsp;Perfil de usuario\n        </ion-note><br>\n        <ion-note (click)=\"irEventos()\" class=\"actividad\">\n          <ion-icon name=\"reader\"></ion-icon>&nbsp;&nbsp;Eventos\n        </ion-note><br>\n        <ion-note (click)=\"agenda()\" class=\"actividad\">\n          <ion-icon name=\"calendar\"></ion-icon>&nbsp;&nbsp;Agenda\n        </ion-note><br>\n        <ion-note (click)=\"deteccion()\" class=\"actividad\">\n          <ion-icon name=\"radio\"></ion-icon>&nbsp;&nbsp;Detección\n        </ion-note><br>\n        <ion-note (click)=\"cerrarSesion()\" class=\"actividad\">\n          <ion-icon name=\"log-out\"></ion-icon>&nbsp;&nbsp;Cerrar sesión\n        </ion-note>\n      </div>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/detail-subevent/detail-subevent.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/detail-subevent/detail-subevent.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesEventosDetailSubeventDetailSubeventPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Más información</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/eventos\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"subevent$ | async as subevent;\" class=\"container\">\n    <ion-card class=\"container-general\">\n      <ion-card>\n        <ion-card class=\"card-header\" style=\"background-color:  #34495E;\">\n          <ion-card-header>\n            <ion-card-subtitle style=\"color: #2ADEAB;\"><strong>{{subevent.siglas}}</strong></ion-card-subtitle>\n            <ion-card-title style=\"color: white;\">\n              {{subevent.title}}\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n        <ion-card>\n          <ion-card-content>\n            <p><strong>Fecha inicio: </strong> {{subevent.date | date:'dd/MM/yy' }}</p>\n            <p><strong>Fecha fin: </strong> {{subevent.finishdate | date:'dd/MM/yy' }}</p>\n            <p>\n              <ion-icon name=\"time\"></ion-icon><strong>&nbsp;&nbsp;Hora: </strong> {{subevent.time}}\n            </p>\n            <p>\n              <ion-icon name=\"business\"></ion-icon><strong>&nbsp;&nbsp;Sala: </strong> {{idSala}}\n            </p>\n            <br>\n            <h2><strong>Descripción del evento</strong></h2><br>\n            <p style=\"text-align: justify;\">{{subevent.descrip}}</p>\n            <br>\n            <h2><strong>Topicos de Interés</strong></h2>\n            <ion-card-content class=\"topicos\" selected *ngFor=\"let topic of subevent.topics\" [ngClass]=\"topic\">- {{topic}}\n              </ion-card-content>\n            <div style=\"text-align: center;\">\n              <ion-button (click)=\"registerEvent()\" class=\"btn-registrarme\" color=\"primary\">Registrarme</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-card>\n    </ion-card>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/moreinformation/moreinformation.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/moreinformation/moreinformation.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesEventosMoreinformationMoreinformationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Más información</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/eventos\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"event$ | async as event\" class=\"container\">\n    <ion-card class=\"container-general\">\n      <ion-card>\n        <ion-card class=\"card-header\" style=\"background-color:  #34495E;\">\n          <ion-card-header>\n            <ion-card-subtitle style=\"color: #2ADEAB;\"><strong>{{event.siglas}}</strong></ion-card-subtitle>\n            <ion-card-title style=\"color: white;\">\n              {{event.title}}\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n        <ion-card>\n          <ion-card-content>\n            <p><strong>Fecha inicio: </strong> {{event.date | date:'dd/MM/yy' }}</p>\n            <p><strong>Fecha fin: </strong> {{event.finishdate | date:'dd/MM/yy' }}</p>\n            <p>\n              <ion-icon name=\"time\"></ion-icon><strong>&nbsp;&nbsp;Hora: </strong> {{event.time}}\n            </p>\n            <p>\n              <ion-icon name=\"business\"></ion-icon><strong>&nbsp;&nbsp;Sala: </strong> {{idSala}}\n            </p>\n            <br>\n            <h2><strong>Descripción del evento</strong></h2><br>\n            <p style=\"text-align: justify;\">{{event.descrip}}</p><br>\n            <h2><strong>Topicos de Interés</strong></h2>\n            <ion-card-content class=\"topicos\" selected *ngFor=\"let topic of event.topics\" [ngClass]=\"topic\">\n              - {{topic}}\n            </ion-card-content>\n          </ion-card-content>\n        </ion-card>\n      </ion-card>\n\n      <ion-card style=\"background-color: #34495E;\" expand=\"full\">\n        <div class=\"subEventos\" *ngIf=\"subeventList.length >= 0; else noSubs\">\n          <!--<div class=\"subEventos\" > -->\n          <h3>Sub-eventos<ion-icon name=\"caret-down-outline\" style=\"margin-left: 6em;\"></ion-icon>\n          </h3>\n          <ion-list>\n            <ion-item *ngFor=\"let subevent of subeventList\">\n              <div class=\"cardEventos\">\n                <ion-card class=\"card-subeventos\">\n                  <ion-card-header>\n                    <ion-card-subtitle class=\"subtitle-subevento\" style=\"color:#E67E22\">\n                      <strong>{{event.siglas}}</strong>\n                    </ion-card-subtitle>\n                    <ion-card-title class=\"title-subevento\">\n                      <strong><a [routerLink]=\"['/subevent', subevent.id]\" style=\"color:#85929E\">\n                          {{subevent.title}}</a></strong>\n                    </ion-card-title>\n                  </ion-card-header>\n                </ion-card>\n              </div>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-card>\n    </ion-card>\n  </div>\n</ion-content>\n<ng-template #noSubs>\n  <ion-button (click)=\"registerEvent()\">Registrarme</ion-button>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>No hay subeventos</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</ng-template>";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");
    /* harmony import */


    var _shared_guards_nologin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/guards/nologin.guard */
    "./src/app/shared/guards/nologin.guard.ts");
    /* harmony import */


    var _componentes_eventos_moreinformation_moreinformation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./componentes/eventos/moreinformation/moreinformation.page */
    "./src/app/componentes/eventos/moreinformation/moreinformation.page.ts");
    /* harmony import */


    var _componentes_eventos_detail_subevent_detail_subevent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./componentes/eventos/detail-subevent/detail-subevent.page */
    "./src/app/componentes/eventos/detail-subevent/detail-subevent.page.ts");

    var routes = [{
      path: '',
      redirectTo: 'folder/Inicio',
      pathMatch: 'full'
    }, {
      path: 'folder/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | folder-folder-module */
        "folder-folder-module").then(__webpack_require__.bind(null,
        /*! ./folder/folder.module */
        "./src/app/folder/folder.module.ts")).then(function (m) {
          return m.FolderPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | componentes-login-login-module */
        "componentes-login-login-module").then(__webpack_require__.bind(null,
        /*! ./componentes/login/login.module */
        "./src/app/componentes/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      },
      canActivate: [_shared_guards_nologin_guard__WEBPACK_IMPORTED_MODULE_4__["NologinGuard"]]
    }, {
      path: 'perfil',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | componentes-perfil-perfil-module */
        "componentes-perfil-perfil-module").then(__webpack_require__.bind(null,
        /*! ./componentes/perfil/perfil.module */
        "./src/app/componentes/perfil/perfil.module.ts")).then(function (m) {
          return m.PerfilPageModule;
        });
      }
    }, {
      path: 'registro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | componentes-registro-registro-module */
        "componentes-registro-registro-module").then(__webpack_require__.bind(null,
        /*! ./componentes/registro/registro.module */
        "./src/app/componentes/registro/registro.module.ts")).then(function (m) {
          return m.RegistroPageModule;
        });
      },
      canActivate: [_shared_guards_nologin_guard__WEBPACK_IMPORTED_MODULE_4__["NologinGuard"]]
    }, {
      path: 'eventos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | componentes-eventos-eventos-module */
        "componentes-eventos-eventos-module").then(__webpack_require__.bind(null,
        /*! ./componentes/eventos/eventos.module */
        "./src/app/componentes/eventos/eventos.module.ts")).then(function (m) {
          return m.EventosPageModule;
        });
      }
    }, {
      path: 'event/:id',
      component: _componentes_eventos_moreinformation_moreinformation_page__WEBPACK_IMPORTED_MODULE_5__["MoreinformationPage"]
    }, {
      path: 'subevent/:id',
      component: _componentes_eventos_detail_subevent_detail_subevent_page__WEBPACK_IMPORTED_MODULE_6__["DetailSubeventPage"]
    }, {
      path: 'agenda',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | componentes-agenda-agenda-module */
        "componentes-agenda-agenda-module").then(__webpack_require__.bind(null,
        /*! ./componentes/agenda/agenda.module */
        "./src/app/componentes/agenda/agenda.module.ts")).then(function (m) {
          return m.AgendaPageModule;
        });
      },
      canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'deteccion',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | componentes-deteccion-deteccion-module */
        "componentes-deteccion-deteccion-module").then(__webpack_require__.bind(null,
        /*! ./componentes/deteccion/deteccion.module */
        "./src/app/componentes/deteccion/deteccion.module.ts")).then(function (m) {
          return m.DeteccionPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
        relativeLinkResolution: 'legacy'
      })],
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


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color,white));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #D4AC0D);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-#ff2121-rgb), 0.20);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: #ff2121;\n}\n\nion-menu.md ion-item ion-icon {\n  color: #030303;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-danger);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: black;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: black;\n}\n\nion-item.selected {\n  color: black;\n}\n\nion-toolbar {\n  --ion-background-color: #2D6082;\n  color: white;\n}\n\n.container-imagen {\n  background-color: #34495E;\n  height: 15em;\n  margin-bottom: 2em;\n  box-shadow: inset 0 -2em 6em #aed6f1, -2em 1em 0 2px white, 0.3em 0.3em 1em #d6eaf8;\n}\n\nion-icon {\n  color: #DC7633;\n}\n\n.container-actividades {\n  color: #DC7633;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.hover:hover {\n  background-color: #ff2121;\n}\n\n.profile-pic {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 3px darkcyan;\n  border-style: groove;\n  margin: auto;\n  box-shadow: inset 0 -2em 6em #aed6f1, -2em 1em 0 2px white, 0.3em 0.3em 1em #d6eaf8;\n}\n\n.avatar {\n  border-radius: 50%;\n  box-shadow: inset 0 -2em 6em #aed6f1, 0.3em 0.3em 1em #335166;\n  margin-left: 0.45em;\n  margin-top: 0.35em;\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxrYXJlZVxcRGVza3RvcFxcQVBQLU1VTFRJRVZFTlRcXGFwcFVzZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0FDQ0Y7O0FERUE7RUFFRSwyREFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRFFBO0VBQ0UsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLHNCQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtBQ0xGOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEU0E7RUFDRSw4QkFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNORjs7QURTQTtFQUNFLGtCQUFBO0FDTkY7O0FEU0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7QUNORjs7QURTQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURTQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRkFDSztBQ05QOztBRFVBO0VBQ0UsY0FBQTtBQ1BGOztBRFNBO0VBQ0UsY0FBQTtFQUNBLDhDQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtBQ0xGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUZBQ0E7QUNMRjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsNkRBQ0E7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcix3aGl0ZSkpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNENEFDMEQpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLSNmZjIxMjEtcmdiKSwgMC4yMCk7XG4gIFxufVxuXG4vL2ljb25vXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiAgI2ZmMjEyMTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIHJnYigzLCAzLCAzKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgXG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiAgcmdiKDAsIDAsIDApO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIGNvbG9yOiAgYmxhY2s7XG59XG5pb24tdG9vbGJhcntcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzJENjA4MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lci1pbWFnZW57XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NUU7XG4gIGhlaWdodDogMTVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBib3gtc2hhZG93OiBcbiAgICAgICBpbnNldCAwIC0yZW0gNmVtIHJnYmEoMTc0LCAyMTQsIDI0MSksIFxuICAgICAgICAgICAgIC0yZW0gMWVtICAwIDJweCByZ2IoMjU1LDI1NSwyNTUpLFxuICAgICAgICAgICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDIxNCwgMjM0LCAyNDgpO1xufVxuaW9uLWljb257XG4gIGNvbG9yOiNEQzc2MzM7XG59XG4uY29udGFpbmVyLWFjdGl2aWRhZGVze1xuICBjb2xvcjogI0RDNzYzMztcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cbi5ob3Zlcjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjEyMTtcbn1cbi5wcm9maWxlLXBpY3tcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IGRhcmtjeWFuO1xuICBib3JkZXItc3R5bGU6IGdyb292ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiBcbiAgaW5zZXQgMCAtMmVtIDZlbSByZ2JhKDE3NCwgMjE0LCAyNDEpLCBcbiAgICAgICAgLTJlbSAxZW0gIDAgMnB4IHJnYigyNTUsMjU1LDI1NSksXG4gICAgICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDIxNCwgMjM0LCAyNDgpO1xufVxuLmF2YXRhcntcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiBcbiAgaW5zZXQgMCAtMmVtIDZlbSByZ2JhKDE3NCwgMjE0LCAyNDEpLCBcbiAgICAgICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoNTEsIDgxLCAxMDIpO1xuICBtYXJnaW4tbGVmdDogMC40NWVtO1xuICBtYXJnaW4tdG9wOiAwLjM1ZW07XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Isd2hpdGUpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNENEFDMEQpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLSNmZjIxMjEtcmdiKSwgMC4yMCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZjIxMjE7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMzAzMDM7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyRDYwODI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lci1pbWFnZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVFO1xuICBoZWlnaHQ6IDE1ZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMmVtIDZlbSAjYWVkNmYxLCAtMmVtIDFlbSAwIDJweCB3aGl0ZSwgMC4zZW0gMC4zZW0gMWVtICNkNmVhZjg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICNEQzc2MzM7XG59XG5cbi5jb250YWluZXItYWN0aXZpZGFkZXMge1xuICBjb2xvcjogI0RDNzYzMztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uaG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMTIxO1xufVxuXG4ucHJvZmlsZS1waWMge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggZGFya2N5YW47XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTJlbSA2ZW0gI2FlZDZmMSwgLTJlbSAxZW0gMCAycHggd2hpdGUsIDAuM2VtIDAuM2VtIDFlbSAjZDZlYWY4O1xufVxuXG4uYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0yZW0gNmVtICNhZWQ2ZjEsIDAuM2VtIDAuM2VtIDFlbSAjMzM1MTY2O1xuICBtYXJnaW4tbGVmdDogMC40NWVtO1xuICBtYXJnaW4tdG9wOiAwLjM1ZW07XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/servicios/auth.service */
    "./src/app/shared/servicios/auth.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, menu, navController, alertCtrl, authSvc) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.authSvc = authSvc;
        this.currentImage = 'https://www.tuplanweb.com/proyecto/Plantilla/img/user/edwin.jpg';
        this.selectedIndex = 0;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authSvc.userData$.subscribe(function (user) {
            _this.user$ = _this.authSvc.getUser(user.uid);

            _this.user$.subscribe(function (us) {
              _this.initValuesForm(us);
            });

            _this.idUser = user.uid;
            _this.idUser = user.displayName;
          });
        }
      }, {
        key: "onSaveUser",
        value: function onSaveUser(user) {
          this.authSvc.preSaveProfile(user, this.image, this.idUser);
        }
      }, {
        key: "initValuesForm",
        value: function initValuesForm(user) {
          console.log(user);

          if (user.urlImage) {
            this.currentImage = user.urlImage;
          }
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.hide();
          });
        }
      }, {
        key: "inicio",
        value: function inicio() {
          this.menu.close();
          this.navController.navigateForward(['folder/Inicio']);
        }
      }, {
        key: "login",
        value: function login() {
          this.menu.close();
          this.navController.navigateForward(['login']);
        }
      }, {
        key: "perfil",
        value: function perfil() {
          this.menu.close();
          this.navController.navigateForward(['perfil']);
        }
      }, {
        key: "irEventos",
        value: function irEventos() {
          this.menu.close();
          this.navController.navigateForward(['eventos']);
        }
      }, {
        key: "agenda",
        value: function agenda() {
          this.menu.close();
          this.navController.navigateForward(['agenda']);
        }
      }, {
        key: "deteccion",
        value: function deteccion() {
          this.menu.close();
          this.navController.navigateForward(['deteccion']);
        }
      }, {
        key: "cerrarSesion",
        value: function cerrarSesion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.menu.close();
                    _context.next = 3;
                    return this.alertCtrl.create({
                      header: '¿Está seguro de que quiere cerrar sesión?',
                      buttons: [{
                        text: 'Cancelar',
                        handler: function handler(blah) {
                          console.log('Cancelar');
                        }
                      }, {
                        text: 'Aceptar',
                        handler: function handler() {
                          console.log('Okey');

                          _this3.navController.navigateForward(['folder/Inicio']);

                          _this3.authSvc.logout();
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                    _context.next = 8;
                    return alert.onDidDismiss();

                  case 8:
                    result = _context.sent;
                    console.log(result);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js"); //modulo de Firestore
    //importar en modulo de enviroments.ts/
    //importar modulos de angular
    //importar el modulo de autenticacion de firebase


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      //llamar el metodo de firebaseConfig de la clase enviroments
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["firebaseConfig"]), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/componentes/eventos/detail-subevent/detail-subevent.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/componentes/eventos/detail-subevent/detail-subevent.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesEventosDetailSubeventDetailSubeventPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-registrarme {\n  width: 93%;\n  margin-top: 3px;\n}\n\nh1, h2 {\n  text-align: center;\n  background-color: #D5DBDB;\n  color: #17A589;\n}\n\n.container-general {\n  background-color: #D5DBDB;\n}\n\np, .topicos {\n  color: #34495E;\n}\n\n.card-header {\n  background-color: #34495E;\n}\n\n.subtitle-subevento {\n  color: #34495E;\n}\n\n.title-subevento {\n  font-family: \"Candara\";\n  font-size: 1.3em;\n}\n\nion-icon {\n  color: #17A589;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9kZXRhaWwtc3ViZXZlbnQvQzpcXFVzZXJzXFxrYXJlZVxcRGVza3RvcFxcQVBQLU1VTFRJRVZFTlRcXGFwcFVzZXIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxldmVudG9zXFxkZXRhaWwtc3ViZXZlbnRcXGRldGFpbC1zdWJldmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2V2ZW50b3MvZGV0YWlsLXN1YmV2ZW50L2RldGFpbC1zdWJldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBRTtFQUNFLHlCQUFBO0FDR0o7O0FEREU7RUFDRSxjQUFBO0FDSUo7O0FERkU7RUFDRSx5QkFBQTtBQ0tKOztBREhFO0VBQ0UsY0FBQTtBQ01KOztBREpFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExFO0VBQ0UsY0FBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9kZXRhaWwtc3ViZXZlbnQvZGV0YWlsLXN1YmV2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcmVnaXN0cmFybWV7XHJcbiAgICB3aWR0aDogOTMlO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuICBoMSwgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVEQkRCOyBcclxuICAgIGNvbG9yOiAjMTdBNTg5O1xyXG4gIH1cclxuICAuY29udGFpbmVyLWdlbmVyYWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVEQkRCO1xyXG4gIH1cclxuICBwLCAudG9waWNvc3tcclxuICAgIGNvbG9yOiAjMzQ0OTVFO1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzM0NDk1RTtcclxuICB9XHJcbiAgLnN1YnRpdGxlLXN1YmV2ZW50b3tcclxuICAgIGNvbG9yOiAjMzQ0OTVFO1xyXG4gIH1cclxuICAudGl0bGUtc3ViZXZlbnRve1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYW5kYXJhJztcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG4gICAgY29sb3I6ICMxN0E1ODk7XHJcbiAgfSIsIi5idG4tcmVnaXN0cmFybWUge1xuICB3aWR0aDogOTMlO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbmgxLCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q1REJEQjtcbiAgY29sb3I6ICMxN0E1ODk7XG59XG5cbi5jb250YWluZXItZ2VuZXJhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENURCREI7XG59XG5cbnAsIC50b3BpY29zIHtcbiAgY29sb3I6ICMzNDQ5NUU7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NUU7XG59XG5cbi5zdWJ0aXRsZS1zdWJldmVudG8ge1xuICBjb2xvcjogIzM0NDk1RTtcbn1cblxuLnRpdGxlLXN1YmV2ZW50byB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhbmRhcmFcIjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzE3QTU4OTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/eventos/detail-subevent/detail-subevent.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/componentes/eventos/detail-subevent/detail-subevent.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: DetailSubeventPage */

  /***/
  function srcAppComponentesEventosDetailSubeventDetailSubeventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailSubeventPage", function () {
      return DetailSubeventPage;
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


    var src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/servicios/evento.service */
    "./src/app/shared/servicios/evento.service.ts");
    /* harmony import */


    var src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/servicios/auth.service */
    "./src/app/shared/servicios/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_servicios_beacon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/servicios/beacon.service */
    "./src/app/shared/servicios/beacon.service.ts");

    var DetailSubeventPage = /*#__PURE__*/function () {
      function DetailSubeventPage(route, eventoService, alertCtrl, authservice, beaconService) {
        _classCallCheck(this, DetailSubeventPage);

        this.route = route;
        this.eventoService = eventoService;
        this.alertCtrl = alertCtrl;
        this.authservice = authservice;
        this.beaconService = beaconService;
      }

      _createClass(DetailSubeventPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.idSubevent = this.route.snapshot.params.id;
          this.subevent$ = this.eventoService.getOneSubEvent(this.idSubevent);
          this.beacons$ = this.beaconService.getAllBeacons();
          this.subevent$.subscribe(function (event) {
            console.log(event.title, event.id);
          });
        } //metodo

      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authservice.logout();
        }
      }, {
        key: "registerEvent",
        value: function registerEvent() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: '¿Está seguro de añadir el evento a tu agenda?',
                      buttons: [{
                        text: 'Cancelar',
                        handler: function handler(blah) {
                          console.log('Confirma Cancelar');
                        }
                      }, {
                        text: 'Aceptar',
                        handler: function handler() {
                          console.log('Registrado');

                          _this4.eventoService.registerUserOnSubEvent(_this4.idSubevent);

                          if (_this4.eventoService.registerUserOnEvent == _this4.idSubevent) {
                            console.log("registrado");
                          } else {
                            console.log("error");
                          }
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                    _context2.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    result = _context2.sent;
                    console.log(result);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return DetailSubeventPage;
    }();

    DetailSubeventPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_shared_servicios_beacon_service__WEBPACK_IMPORTED_MODULE_6__["BeaconService"]
      }];
    };

    DetailSubeventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-subevent',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail-subevent.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/detail-subevent/detail-subevent.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail-subevent.page.scss */
      "./src/app/componentes/eventos/detail-subevent/detail-subevent.page.scss"))["default"]]
    })], DetailSubeventPage);
    /***/
  },

  /***/
  "./src/app/componentes/eventos/moreinformation/moreinformation.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/componentes/eventos/moreinformation/moreinformation.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesEventosMoreinformationMoreinformationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1, h2 {\n  text-align: center;\n  background-color: #D5DBDB;\n  color: #17A589;\n}\n\nh3 {\n  text-align: center;\n  color: white;\n}\n\n.container-general {\n  background-color: #D5DBDB;\n}\n\n.card-subeventos {\n  background-color: #EEEEEE;\n  border: #A3E4D7 2px solid;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.subtitle-subevento {\n  color: #34495E;\n}\n\n.title-subevento {\n  font-family: \"Candara\";\n  font-size: 1.3em;\n}\n\np, .topicos {\n  color: #34495E;\n}\n\n.card-header {\n  background-color: #34495E;\n}\n\nion-icon {\n  color: #17A589;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9tb3JlaW5mb3JtYXRpb24vQzpcXFVzZXJzXFxrYXJlZVxcRGVza3RvcFxcQVBQLU1VTFRJRVZFTlRcXGFwcFVzZXIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxldmVudG9zXFxtb3JlaW5mb3JtYXRpb25cXG1vcmVpbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2V2ZW50b3MvbW9yZWluZm9ybWF0aW9uL21vcmVpbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0FDTUo7O0FESkE7RUFDSSx5QkFBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9tb3JlaW5mb3JtYXRpb24vbW9yZWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENURCREI7IFxyXG4gICAgY29sb3I6ICMxN0E1ODk7XHJcbn1cclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lci1nZW5lcmFse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1REJEQjtcclxufVxyXG4uY2FyZC1zdWJldmVudG9ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIGJvcmRlcjogI0EzRTRENyAycHggc29saWQ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgIFxyXG59XHJcbi5zdWJ0aXRsZS1zdWJldmVudG97XHJcbiAgICBjb2xvcjogIzM0NDk1RTtcclxufVxyXG4udGl0bGUtc3ViZXZlbnRve1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYW5kYXJhJztcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxucCwgLnRvcGljb3N7XHJcbiAgICBjb2xvcjogIzM0NDk1RTtcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzM0NDk1RTtcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjMTdBNTg5O1xyXG59IiwiaDEsIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVEQkRCO1xuICBjb2xvcjogIzE3QTU4OTtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lci1nZW5lcmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q1REJEQjtcbn1cblxuLmNhcmQtc3ViZXZlbnRvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIGJvcmRlcjogI0EzRTRENyAycHggc29saWQ7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zdWJ0aXRsZS1zdWJldmVudG8ge1xuICBjb2xvcjogIzM0NDk1RTtcbn1cblxuLnRpdGxlLXN1YmV2ZW50byB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhbmRhcmFcIjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxucCwgLnRvcGljb3Mge1xuICBjb2xvcjogIzM0NDk1RTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1RTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzE3QTU4OTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/eventos/moreinformation/moreinformation.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/componentes/eventos/moreinformation/moreinformation.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: MoreinformationPage */

  /***/
  function srcAppComponentesEventosMoreinformationMoreinformationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreinformationPage", function () {
      return MoreinformationPage;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var src_app_shared_servicios_beacon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/servicios/beacon.service */
    "./src/app/shared/servicios/beacon.service.ts");

    var MoreinformationPage = /*#__PURE__*/function () {
      function MoreinformationPage(authService, eventoService, route, auth, alertCtrl, beaconService) {
        _classCallCheck(this, MoreinformationPage);

        this.authService = authService;
        this.eventoService = eventoService;
        this.route = route;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.beaconService = beaconService;
        this.subeventList = []; //obtener los datos del usuario autenticados

        this.userdata$ = auth.authState;
      }

      _createClass(MoreinformationPage, [{
        key: "Onlogout",
        value: function Onlogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.idEvent = this.route.snapshot.params.id;
          this.event$ = this.eventoService.getOneEvent(this.idEvent);
          this.event$.subscribe(function (event) {
            if (typeof event.idSubevents === 'undefined' || event.idSubevents == 0) {
              console.log('no hay subeventos');
            } else {
              event.id = _this5.idEvent;
              event.idSubevents.forEach(function (element) {
                //console.log(element, "elemento");
                _this5.subevent$ = _this5.eventoService.getOneSubEvent(element);

                var subscripSub = _this5.subevent$.subscribe(function (subevent) {
                  //console.log('sala id antes de beacon: ', subevent.sala)
                  var salaid = subevent.sala;
                  _this5.beacon$ = _this5.eventoService.getBeacon(element.sala);

                  var subscription = _this5.beacon$.subscribe(function (res) {
                    // console.log('subevento: ', subevent);
                    var subeventObj = {
                      id: subevent.id,
                      title: subevent.title,
                      siglas: subevent.siglas,
                      descrip: subevent.descrip,
                      topics: subevent.topics,
                      date: subevent.date,
                      finishdate: subevent.finishdate,
                      time: subevent.time,
                      sala: subevent.sala
                    };

                    _this5.subeventList.push(subeventObj); //this.dataSource.data = this.subeventList;


                    subscription.unsubscribe();
                  });

                  _this5.beacons$ = _this5.beaconService.getAllBeacons();

                  var sub_events = _this5.beacons$.subscribe(function (salas) {
                    //this.idBeacon = beacon.id;
                    salas.forEach(function (sala) {
                      if (event.sala == sala.id) {
                        _this5.idSala = sala.sala;
                      }

                      sub_events.unsubscribe();
                    });
                  });
                });
              });
            }
          });
        }
      }, {
        key: "registerEvent",
        value: function registerEvent() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            var alert, result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: '¿Está seguro de agregar el evento a su agenda?',
                      buttons: [{
                        text: 'Cancelar',
                        handler: function handler(blah) {
                          console.log('Confirm Cncek: blah');
                        }
                      }, {
                        text: 'Aceptar',
                        handler: function handler() {
                          console.log('confirmOkey');

                          _this6.eventoService.registerUserOnEvent(_this6.idEvent);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                    _context3.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    result = _context3.sent;
                    console.log(result);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return MoreinformationPage;
    }();

    MoreinformationPage.ctorParameters = function () {
      return [{
        type: src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: src_app_shared_servicios_beacon_service__WEBPACK_IMPORTED_MODULE_7__["BeaconService"]
      }];
    };

    MoreinformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moreinformation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./moreinformation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/moreinformation/moreinformation.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./moreinformation.page.scss */
      "./src/app/componentes/eventos/moreinformation/moreinformation.page.scss"))["default"]]
    })], MoreinformationPage);
    /***/
  },

  /***/
  "./src/app/shared/guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__); //se va a saber si el usuario esta autenticado
    //router


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(AFauth, router) {
        _classCallCheck(this, AuthGuard);

        this.AFauth = AFauth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this7 = this;

          return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) {
            //si el estado de autenticacion
            if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(auth)) {
              //crear una notificacion 
              //redireccion al router
              _this7.router.navigate(['\folder']); //si no esta autenticado retorna false


              return false;
            } else {
              //si esta autenticado
              return true;
            } //console.log(auth);
            //return false;

          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/guards/nologin.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/guards/nologin.guard.ts ***!
    \************************************************/

  /*! exports provided: NologinGuard */

  /***/
  function srcAppSharedGuardsNologinGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NologinGuard", function () {
      return NologinGuard;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__); //se va a saber si el usuario esta autenticado
    //router


    var NologinGuard = /*#__PURE__*/function () {
      function NologinGuard(AFauth, router) {
        _classCallCheck(this, NologinGuard);

        this.AFauth = AFauth;
        this.router = router;
      }

      _createClass(NologinGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this8 = this;

          return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) {
            //si el estado de autenticacion
            if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(auth)) {
              //si no esta autenticado retorna tru
              return true;
            } else {
              //redireccion al router
              _this8.router.navigate(['\eventos']); //si esta autenticado


              return false;
            } //console.log(auth);
            //return false;

          }));
        }
      }]);

      return NologinGuard;
    }();

    NologinGuard.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    NologinGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NologinGuard);
    /***/
  },

  /***/
  "./src/app/shared/servicios/auth.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/servicios/auth.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServiciosAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(AFauth, router, db, storage) {
        _classCallCheck(this, AuthService);

        this.AFauth = AFauth;
        this.router = router;
        this.db = db;
        this.storage = storage;
        this.userData$ = AFauth.authState;
      } //método login que recibe un email y el password


      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var _this9 = this;

          //acceder a todos las funciones de Angular Auth
          //respuesta del llamado
          //retornar
          return new Promise(function (resolve, rejected) {
            _this9.AFauth.signInWithEmailAndPassword(email, password).then(function (user) {
              resolve(user); //caso contrario error
            })["catch"](function (err) {
              return rejected(err);
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this10 = this;

          this.AFauth.signOut().then(function (auth) {
            _this10.router.navigate(['/folder/Inicio']);
          });
        } //metodo para el registro, recibe los datos y guarda en la base

      }, {
        key: "register",
        value: function register(user) {
          var _this11 = this;

          console.log('hola');
          return new Promise(function (resolve, reject) {
            //recibe un email y un password
            //res es un objeto que es auth que nos da acceso a las propiedades del id, etc
            console.log("registro", user);

            _this11.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(function (res) {
              //console.log(res.user.uid);
              var uid = res.user.uid; //apuntar a la base de datos

              _this11.db.collection('users').doc(uid).set({
                displayName: user.displayName,
                email: user.email,
                password: user.password,
                phoneNumber: user.phoneNumber,
                description: user.description,
                urlImage: user.urlImage,
                uid: uid
              });

              resolve(res);
            })["catch"](function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "preSaveProfile",
        value: function preSaveProfile(user, image, idUser) {
          if (image) {
            if (idUser) {
              this.uploadImage(user, image, idUser);
            } else {
              this.uploadImage(user, image);
            }
          } else {
            this.saveUserProfile(user, idUser);
          }
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(user, image, idUser) {
          var _this12 = this;

          this.filePath = "images/".concat(user.email);
          var fileRef = this.storage.ref(this.filePath); //const task = this.storage.upload(this.filePath);

          var task = fileRef.putString(image, 'data_url', {
            contentType: 'image/jpg'
          }).then(function () {
            console.log('Image uploaded');
            fileRef.getDownloadURL().subscribe(function (urlImage) {
              user.urlImage = urlImage;

              _this12.register(user);
            });
          });
          /*     task.snapshotChanges()
                .pipe(
                  finalize(() => {
                    fileRef.getDownloadURL().subscribe(urlImage => {
                      user.urlImage = urlImage;
                        this.register(user);
                    });
                  })
                ).subscribe(); */
        }
      }, {
        key: "saveUserProfile",
        value: function saveUserProfile(user, idUser) {
          console.log("hola", idUser);
          this.updateUserProfile(user, idUser);
          console.log("llego a saveuser");
          this.AFauth.currentUser.then(function (userp) {
            console.log("llego a saveuser 2");
            userp.updateProfile({
              displayName: user.displayName,
              photoURL: user.urlImage
            }).then(function () {
              return console.log('updated');
            })["catch"](function (err) {
              return console.log('Error', err);
            });
          });
        }
      }, {
        key: "updateUserProfile",
        value: function updateUserProfile(usr, id) {
          console.log('usuario actualizado', id);
          return this.db.collection('users').doc(id).update(usr);
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          // Create a query against the collection.
          return this.db.doc("users/".concat(id)).valueChanges();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/servicios/beacon.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/servicios/beacon.service.ts ***!
    \****************************************************/

  /*! exports provided: BeaconService */

  /***/
  function srcAppSharedServiciosBeaconServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeaconService", function () {
      return BeaconService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js"); //importar Firestore


    var BeaconService = /*#__PURE__*/function () {
      function BeaconService(db, auth) {
        _classCallCheck(this, BeaconService);

        this.db = db;
        this.auth = auth;
        this.beaconCollection = db.collection('beacons');
      }

      _createClass(BeaconService, [{
        key: "getAllBeacons",
        value: function getAllBeacons() {
          return this.beaconCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc['id'];
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "getBeacon",
        value: function getBeacon(id) {
          return this.db.doc("beacons/".concat(id)).valueChanges();
        }
      }]);

      return BeaconService;
    }();

    BeaconService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }];
    };

    BeaconService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BeaconService);
    /***/
  },

  /***/
  "./src/app/shared/servicios/evento.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/servicios/evento.service.ts ***!
    \****************************************************/

  /*! exports provided: EventosService */

  /***/
  function srcAppSharedServiciosEventoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventosService", function () {
      return EventosService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__); //importar Firestore


    var EventosService = /*#__PURE__*/function () {
      function EventosService(db, auth) {
        _classCallCheck(this, EventosService);

        this.db = db;
        this.auth = auth;
        this.eventsCollection = db.collection('events');
        this.subeventsCollection = db.collection('subevents');
        this.beaconCollection = db.collection('beacons');
        this.userData$ = auth.authState;
      }

      _createClass(EventosService, [{
        key: "getAllEvents",
        value: function getAllEvents() {
          return this.eventsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc['id'];
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "getOneEvent",
        value: function getOneEvent(id) {
          return this.db.doc("events/".concat(id)).valueChanges();
        }
      }, {
        key: "getBeacon",
        value: function getBeacon(id) {
          return this.db.doc("beacons/".concat(id)).valueChanges();
        }
      }, {
        key: "getOneSubEvent",
        value: function getOneSubEvent(id) {
          return this.db.doc("subevents/".concat(id)).valueChanges();
        }
      }, {
        key: "registerUserOnSubEvent",
        value: function registerUserOnSubEvent(id) {
          var _this13 = this;

          this.userData$.subscribe(function (user) {
            var eventRef = _this13.db.collection('subevents').doc(id);

            console.log(eventRef);
            eventRef.update({
              //funcion de firestore: agg datos a un arreglo
              idUsers: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion(user.uid)
            });
          });
        }
      }, {
        key: "registerUserOnEvent",
        value: function registerUserOnEvent(id) {
          var _this14 = this;

          this.userData$.subscribe(function (user) {
            var eventRef = _this14.db.collection('events').doc(id);

            console.log('aqui', id);
            eventRef.update({
              //funcion de firestore: agg datos a un arreglo
              idUsers: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion(user.uid)
            });
          });
        }
      }]);

      return EventosService;
    }();

    EventosService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }];
    };

    EventosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventosService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, firebaseConfig */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    }; //conexión con la base de datos 

    /*
    export const firebaseConfig = {
      apiKey: "AIzaSyDrVDusjdTBE0CZXYmIEJkAM7tuQNivKSk",
      authDomain: "gestion-eventos-d76e8.firebaseapp.com",
      databaseURL: "https://gestion-eventos-d76e8.firebaseio.com",
      projectId: "gestion-eventos-d76e8",
      storageBucket: "gestion-eventos-d76e8.appspot.com",
      messagingSenderId: "711086789606",
      appId: "1:711086789606:web:84ad0648a400de6e103c27",
      measurementId: "G-YMZCSQN5K9"
    };
    */

    var firebaseConfig = {
      apiKey: "AIzaSyA6KTyvOQk5kx3DPDi7hepgP3tMHdqfNyo",
      authDomain: "sge-app-cfb10.firebaseapp.com",
      databaseURL: "https://sge-app-cfb10.firebaseio.com",
      projectId: "sge-app-cfb10",
      storageBucket: "sge-app-cfb10.appspot.com",
      messagingSenderId: "542182803656",
      appId: "1:542182803656:web:c16019e34240d0b64dbdfd",
      measurementId: "G-1RQKDR7Q3T"
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
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
    /*! C:\Users\karee\Desktop\APP-MULTIEVENT\appUser\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map