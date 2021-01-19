(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-eventos-eventos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/eventos.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/eventos.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Eventos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let event of listEvents\">\n      <div class=\"cardEventos\">\n        <ion-card class=\"card-principal\">\n          <ion-card class=\"card-secundaria\">\n            <ion-card-header>\n              <p>\n                <ion-icon name=\"information-circle\"></ion-icon><strong>&nbsp;&nbsp;{{event.siglas}}</strong>\n              </p>\n              <ion-card-title>\n                <a [routerLink]=\"['/event', event.id]\" class=\"title\"> {{event.title}}</a>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-card>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/eventos/eventos-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentes/eventos/eventos-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EventosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageRoutingModule", function() { return EventosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventos.page */ "./src/app/componentes/eventos/eventos.page.ts");




const routes = [
    {
        path: '',
        component: _eventos_page__WEBPACK_IMPORTED_MODULE_3__["EventosPage"]
    },
    {
        path: 'moreinformation',
        loadChildren: () => __webpack_require__.e(/*! import() | moreinformation-moreinformation-module */ "moreinformation-moreinformation-module").then(__webpack_require__.bind(null, /*! ./moreinformation/moreinformation.module */ "./src/app/componentes/eventos/moreinformation/moreinformation.module.ts")).then(m => m.MoreinformationPageModule)
    },
    {
        path: 'detail-subevent',
        loadChildren: () => __webpack_require__.e(/*! import() | detail-subevent-detail-subevent-module */ "detail-subevent-detail-subevent-module").then(__webpack_require__.bind(null, /*! ./detail-subevent/detail-subevent.module */ "./src/app/componentes/eventos/detail-subevent/detail-subevent.module.ts")).then(m => m.DetailSubeventPageModule)
    }
];
let EventosPageRoutingModule = class EventosPageRoutingModule {
};
EventosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventosPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/eventos/eventos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/eventos/eventos.module.ts ***!
  \*******************************************************/
/*! exports provided: EventosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function() { return EventosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventos-routing.module */ "./src/app/componentes/eventos/eventos-routing.module.ts");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventos.page */ "./src/app/componentes/eventos/eventos.page.ts");







let EventosPageModule = class EventosPageModule {
};
EventosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventosPageRoutingModule"]
        ],
        declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]]
    })
], EventosPageModule);



/***/ }),

/***/ "./src/app/componentes/eventos/eventos.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/componentes/eventos/eventos.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: white;\n  text-decoration: none;\n  font-family: \"Agency FB\";\n}\n\n.cardEventos {\n  width: 100%;\n}\n\n.button-container {\n  display: inline-block;\n  position: relative;\n}\n\nion-card-subtitle {\n  font-style: italic;\n}\n\na:hover {\n  color: lightslategrey;\n}\n\n.card-principal {\n  background-color: #73C6B6;\n  border-radius: 1%;\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px white, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n}\n\n.card-secundaria {\n  border: #F2F3F4 2px solid;\n  background-color: #E5E8E8;\n}\n\nion-card-subtitle {\n  color: #E67E22;\n}\n\n.title {\n  color: #34495E;\n}\n\nion-icon {\n  font-size: large;\n}\n\np {\n  color: #E67E22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9DOlxcVXNlcnNcXGthcmVlXFxEZXNrdG9wXFxBUFAtTVVMVElFVkVOVFxcYXBwVXNlci9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGV2ZW50b3NcXGV2ZW50b3MucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9ldmVudG9zL2V2ZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNHQTs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9HQUNHO0FDSVA7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvZXZlbnRvcy9ldmVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogXCJBZ2VuY3kgRkJcIjtcclxufVxyXG4uY2FyZEV2ZW50b3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lcntcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5hOmhvdmVye1xyXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcbi5jYXJkLXByaW5jaXBhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3M0M2QjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcclxuICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsMCwwLDAuMSksIFxyXG4gICAgICAgICAgICAgMCAwICAwIDJweCByZ2IoMjU1LDI1NSwyNTUpLFxyXG4gICAgICAgICAgICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG4uY2FyZC1zZWN1bmRhcmlhe1xyXG4gICAgYm9yZGVyOiAjRjJGM0Y0IDJweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU4RTg7XHJcbn1cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICBjb2xvcjogI0U2N0UyMjtcclxufVxyXG4udGl0bGV7XHJcbiAgICBjb2xvcjogIzM0NDk1RTtcclxufVxyXG5pb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiAjRTY3RTIyO1xyXG59IiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJBZ2VuY3kgRkJcIjtcbn1cblxuLmNhcmRFdmVudG9zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xufVxuXG4uY2FyZC1wcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNDNkI2O1xuICBib3JkZXItcmFkaXVzOiAxJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMCAwIDJweCB3aGl0ZSwgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmNhcmQtc2VjdW5kYXJpYSB7XG4gIGJvcmRlcjogI0YyRjNGNCAycHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU4RTg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICNFNjdFMjI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjMzQ0OTVFO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbnAge1xuICBjb2xvcjogI0U2N0UyMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/eventos/eventos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/componentes/eventos/eventos.page.ts ***!
  \*****************************************************/
/*! exports provided: EventosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPage", function() { return EventosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/servicios/auth.service */ "./src/app/shared/servicios/auth.service.ts");
/* harmony import */ var src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/servicios/evento.service */ "./src/app/shared/servicios/evento.service.ts");




let EventosPage = class EventosPage {
    constructor(authService, eventoService) {
        this.authService = authService;
        this.eventoService = eventoService;
        this.listEvents = [];
    }
    Onlogout() {
        this.authService.logout();
    }
    ngOnInit() {
        this.eventos$ = this.eventoService.getAllEvents();
        this.eventos$.subscribe(eventos => {
            eventos.forEach(element => {
                console.log(element);
                this.listEvents.push(element);
            });
        });
    }
};
EventosPage.ctorParameters = () => [
    { type: src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventosService"] }
];
EventosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eventos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./eventos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eventos/eventos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./eventos.page.scss */ "./src/app/componentes/eventos/eventos.page.scss")).default]
    })
], EventosPage);



/***/ })

}]);
//# sourceMappingURL=componentes-eventos-eventos-module-es2015.js.map