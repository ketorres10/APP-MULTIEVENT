function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-agenda-agenda-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agenda/agenda.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agenda/agenda.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesAgendaAgendaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Mi agenda</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let event of listEvents\">\n      <div class=\"cardEventos\">\n        <ion-card class=\"card-principal\">\n          <ion-card class=\"card-secundaria\">\n            <ion-card-header>\n              <p>\n                <ion-icon name=\"information-circle\"></ion-icon><strong>&nbsp;&nbsp;{{event.siglas}}</strong>\n              </p>\n              <ion-card-title>\n                <a [routerLink]=\"['/event', event.id]\" class=\"title\"> {{event.title}}</a>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-card>\n      </div>\n    </ion-item>\n    <ion-item *ngFor=\"let subevent of listSubEvents\">\n      <div class=\"cardEventos\">\n        <ion-card class=\"card-principal\">\n          <ion-card class=\"card-secundaria\">\n            <ion-card-header>\n              <p>\n                <ion-icon name=\"information-circle\"></ion-icon><strong>&nbsp;&nbsp;{{subevent.siglas}}</strong>\n              </p>\n              <ion-card-title>\n                <a [routerLink]=\"['/event', subevent.id]\" class=\"title\"> {{subevent.title}}</a>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-card>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/componentes/agenda/agenda-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/componentes/agenda/agenda-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AgendaPageRoutingModule */

  /***/
  function srcAppComponentesAgendaAgendaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaPageRoutingModule", function () {
      return AgendaPageRoutingModule;
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


    var _agenda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./agenda.page */
    "./src/app/componentes/agenda/agenda.page.ts");

    var routes = [{
      path: '',
      component: _agenda_page__WEBPACK_IMPORTED_MODULE_3__["AgendaPage"]
    }];

    var AgendaPageRoutingModule = function AgendaPageRoutingModule() {
      _classCallCheck(this, AgendaPageRoutingModule);
    };

    AgendaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AgendaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/agenda/agenda.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/agenda/agenda.module.ts ***!
    \*****************************************************/

  /*! exports provided: AgendaPageModule */

  /***/
  function srcAppComponentesAgendaAgendaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function () {
      return AgendaPageModule;
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


    var _agenda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./agenda-routing.module */
    "./src/app/componentes/agenda/agenda-routing.module.ts");
    /* harmony import */


    var _agenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./agenda.page */
    "./src/app/componentes/agenda/agenda.page.ts");

    var AgendaPageModule = function AgendaPageModule() {
      _classCallCheck(this, AgendaPageModule);
    };

    AgendaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agenda_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendaPageRoutingModule"]],
      declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_6__["AgendaPage"]]
    })], AgendaPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/agenda/agenda.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/agenda/agenda.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesAgendaAgendaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  color: white;\n  text-decoration: none;\n  font-family: \"Agency FB\";\n}\n\n.cardEventos {\n  width: 100%;\n}\n\n.button-container {\n  display: inline-block;\n  position: relative;\n}\n\nion-card-subtitle {\n  font-style: italic;\n}\n\na:hover {\n  color: lightslategrey;\n}\n\n.card-principal {\n  background-color: #73C6B6;\n  border-radius: 1%;\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px white, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n}\n\n.card-secundaria {\n  border: #F2F3F4 2px solid;\n  background-color: #E5E8E8;\n}\n\nion-card-subtitle {\n  color: #E67E22;\n}\n\n.title {\n  color: #34495E;\n}\n\nion-icon {\n  font-size: large;\n}\n\np {\n  color: #E67E22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdlbmRhL0M6XFxVc2Vyc1xca2FyZWVcXERlc2t0b3BcXEFQUC1NVUxUSUVWRU5UXFxhcHBVc2VyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcYWdlbmRhXFxhZ2VuZGEucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hZ2VuZGEvYWdlbmRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUk7RUFDSSxrQkFBQTtBQ0dSOztBRERJO0VBQ0kscUJBQUE7QUNJUjs7QURGSTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvR0FDRztBQ0lYOztBREFJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQ0dSOztBRERJO0VBQ0ksY0FBQTtBQ0lSOztBREZJO0VBQ0ksY0FBQTtBQ0tSOztBREhJO0VBQ0ksZ0JBQUE7QUNNUjs7QURKSTtFQUNJLGNBQUE7QUNPUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnZW5kYS9hZ2VuZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFnZW5jeSBGQlwiO1xyXG59XHJcbi5jYXJkRXZlbnRvc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idXR0b24tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlcntcclxuICAgICAgICBjb2xvcjogbGlnaHRzbGF0ZWdyZXk7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1wcmluY2lwYWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczQzZCNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxJTtcclxuICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgICBpbnNldCAwIC0zZW0gM2VtIHJnYmEoMCwwLDAsMC4xKSwgXHJcbiAgICAgICAgICAgICAgICAgMCAwICAwIDJweCByZ2IoMjU1LDI1NSwyNTUpLFxyXG4gICAgICAgICAgICAgICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1zZWN1bmRhcmlhe1xyXG4gICAgICAgIGJvcmRlcjogI0YyRjNGNCAycHggc29saWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RThFODtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjRTY3RTIyO1xyXG4gICAgfVxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjMzQ0OTVFO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6ICNFNjdFMjI7XHJcbiAgICB9IiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJBZ2VuY3kgRkJcIjtcbn1cblxuLmNhcmRFdmVudG9zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xufVxuXG4uY2FyZC1wcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNDNkI2O1xuICBib3JkZXItcmFkaXVzOiAxJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMCAwIDJweCB3aGl0ZSwgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmNhcmQtc2VjdW5kYXJpYSB7XG4gIGJvcmRlcjogI0YyRjNGNCAycHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU4RTg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICNFNjdFMjI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjMzQ0OTVFO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbnAge1xuICBjb2xvcjogI0U2N0UyMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/agenda/agenda.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/componentes/agenda/agenda.page.ts ***!
    \***************************************************/

  /*! exports provided: AgendaPage */

  /***/
  function srcAppComponentesAgendaAgendaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaPage", function () {
      return AgendaPage;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

    var AgendaPage = /*#__PURE__*/function () {
      function AgendaPage(eventoService, authService, auth) {
        _classCallCheck(this, AgendaPage);

        this.eventoService = eventoService;
        this.authService = authService;
        this.auth = auth;
        this.listEvents = [];
        this.listSubEvents = [];
        this.Userdata$ = auth.authState;
      }

      _createClass(AgendaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.Userdata$.subscribe(function (user) {
            _this.iduser = user.uid;
          });
          this.eventos$ = this.eventoService.getAllEvents();
          this.eventos$.subscribe(function (eventos) {
            eventos.forEach(function (evento) {
              //console.log(evento);
              if (evento.idUsers) {
                evento.idUsers.forEach(function (element) {
                  if (element == _this.iduser) {
                    _this.listEvents.push(evento);

                    console.log('se agregó: ', evento.title);
                  }
                });

                if (typeof evento.idSubevents === 'undefined' || evento.idSubevents == 0) {
                  console.log('no hay subeventos');
                  console.log('llego aqui');
                } else {
                  evento.idSubevents.forEach(function (idsub) {
                    _this.subevento$ = _this.eventoService.getOneSubEvent(idsub);

                    _this.subevento$.subscribe(function (sub) {
                      if (sub.idUsers) {
                        sub.idUsers.forEach(function (ids) {
                          if (ids == _this.iduser) {
                            _this.listSubEvents.push(sub);

                            console.log('se agregó: ', sub.title);
                            document.getElementById("butonA").disabled = true;
                          }
                        });
                      } else {
                        console.log('No hay usuarios registrados en: ', sub);
                      }
                    });
                  });
                }
              } else {
                console.log('No hay usuarios registrados en: ', evento);

                if (typeof evento.idSubevents === 'undefined' || evento.idSubevents == 0) {
                  console.log('no hay subeventos');
                } else {
                  console.log('llego aqui');
                  evento.idSubevents.forEach(function (idsub) {
                    _this.subevento$ = _this.eventoService.getOneSubEvent(idsub);

                    _this.subevento$.subscribe(function (sub) {
                      if (sub.idUsers) {
                        sub.idUsers.forEach(function (ids) {
                          if (ids == _this.iduser) {
                            _this.listSubEvents.push(sub);

                            console.log('se agregó: ', sub.title);
                          }
                        });
                      } else {
                        console.log('No hay usuarios registrados en: ', sub);
                      }
                    });
                  });
                }
              }
            });
          });
          this.listEvents.forEach(function (element) {
            console.log(element);
          });
        }
      }]);

      return AgendaPage;
    }();

    AgendaPage.ctorParameters = function () {
      return [{
        type: src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventosService"]
      }, {
        type: src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }];
    };

    AgendaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-agenda',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./agenda.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agenda/agenda.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./agenda.page.scss */
      "./src/app/componentes/agenda/agenda.page.scss"))["default"]]
    })], AgendaPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-agenda-agenda-module-es5.js.map