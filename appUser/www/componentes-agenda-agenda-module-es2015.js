(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-agenda-agenda-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agenda/agenda.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agenda/agenda.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Mi agenda</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let event of listEvents\">\n      <div class=\"cardEventos\">\n        <ion-card class=\"card-secundaria\">\n          <ion-button style=\"width: 91%; background-color: #212F3D;\" color=\"#212F3D\" (click)=\"deleteevent(event)\">EVENTO\n            <ion-icon name=\"close-circle\" style=\"color: red; margin-left: 70%;\"></ion-icon>\n          </ion-button>\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon name=\"information-circle\"></ion-icon><strong>&nbsp;&nbsp;{{event.siglas}}</strong>\n            </ion-card-subtitle>\n            <ion-card-title>\n              <a [routerLink]=\"['/event', event.id]\" class=\"title\"> {{event.title}}</a>\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </div>\n    </ion-item>\n    <ion-item *ngFor=\"let subevent of listSubEvents\">\n      <div class=\"cardEventos\">\n        <ion-card class=\"card-secundaria\">\n          <ion-button style=\"width: 91%; background-color: #212F3D;\" color=\"#212F3D\" (click)=\"deletesub(subevent)\">SUBEVENTO\n            <ion-icon name=\"close-circle\" style=\"color: red; margin-left: 60%;\"></ion-icon>\n          </ion-button>\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon name=\"information-circle\"></ion-icon><strong>&nbsp;&nbsp;{{subevent.siglas}}</strong>\n            </ion-card-subtitle>\n            <ion-card-title>\n              <a [routerLink]=\"['/subevent', subevent.id]\" class=\"title\"> {{subevent.title}}</a>\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/agenda/agenda-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentes/agenda/agenda-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AgendaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageRoutingModule", function() { return AgendaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _agenda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agenda.page */ "./src/app/componentes/agenda/agenda.page.ts");




const routes = [
    {
        path: '',
        component: _agenda_page__WEBPACK_IMPORTED_MODULE_3__["AgendaPage"]
    }
];
let AgendaPageRoutingModule = class AgendaPageRoutingModule {
};
AgendaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgendaPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/agenda/agenda.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/componentes/agenda/agenda.module.ts ***!
  \*****************************************************/
/*! exports provided: AgendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _agenda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agenda-routing.module */ "./src/app/componentes/agenda/agenda-routing.module.ts");
/* harmony import */ var _agenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agenda.page */ "./src/app/componentes/agenda/agenda.page.ts");







let AgendaPageModule = class AgendaPageModule {
};
AgendaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agenda_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendaPageRoutingModule"]
        ],
        declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_6__["AgendaPage"]]
    })
], AgendaPageModule);



/***/ }),

/***/ "./src/app/componentes/agenda/agenda.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/componentes/agenda/agenda.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: white;\n  text-decoration: none;\n  font-family: \"Agency FB\";\n}\n\n.cardEventos {\n  width: 100%;\n}\n\n.button-container {\n  display: inline-block;\n  position: relative;\n}\n\nion-card-subtitle {\n  font-style: italic;\n}\n\n.card-principal {\n  background-color: #A9CCE3;\n}\n\n.card-secundaria {\n  background-color: #F2F3F4;\n  border: 2px solid #212F3D;\n  box-shadow: 4px 4px 1px 0px #89ade6;\n  -moz-box-shadow: 4px 4px 1px 0px #89ade6;\n  -webkit-box-shadow: 4px 4px 1px 0px #89ade6;\n}\n\nion-card-subtitle {\n  color: #E67E22;\n}\n\n.title {\n  color: #212F3D;\n}\n\np {\n  color: #E67E22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdlbmRhL0M6XFxVc2Vyc1xca2FyZWVcXERlc2t0b3BcXEFQUC1NVUxUSUVWRU5UXFxhcHBVc2VyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcYWdlbmRhXFxhZ2VuZGEucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hZ2VuZGEvYWdlbmRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBRUkseUJBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7QUNJSjs7QURGQTtFQUNJLGNBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnZW5kYS9hZ2VuZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFnZW5jeSBGQlwiO1xyXG59XHJcblxyXG4uY2FyZEV2ZW50b3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5jYXJkLXByaW5jaXBhbHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E5Q0NFMztcclxufVxyXG4uY2FyZC1zZWN1bmRhcmlhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMTJGM0Q7XHJcbiAgICBib3gtc2hhZG93OjRweCA0cHggMXB4IDBweCAjODlhZGU2O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OjRweCA0cHggMXB4IDBweCAjODlhZGU2O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OjRweCA0cHggMXB4IDBweCAjODlhZGU2O1xyXG59XHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgY29sb3I6ICNFNjdFMjI7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgY29sb3I6ICMyMTJGM0Q7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiAjRTY3RTIyO1xyXG59IiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJBZ2VuY3kgRkJcIjtcbn1cblxuLmNhcmRFdmVudG9zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY2FyZC1wcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlDQ0UzO1xufVxuXG4uY2FyZC1zZWN1bmRhcmlhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNDtcbiAgYm9yZGVyOiAycHggc29saWQgIzIxMkYzRDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxcHggMHB4ICM4OWFkZTY7XG4gIC1tb3otYm94LXNoYWRvdzogNHB4IDRweCAxcHggMHB4ICM4OWFkZTY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDRweCAxcHggMHB4ICM4OWFkZTY7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICNFNjdFMjI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjMjEyRjNEO1xufVxuXG5wIHtcbiAgY29sb3I6ICNFNjdFMjI7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/agenda/agenda.page.ts":
/*!***************************************************!*\
  !*** ./src/app/componentes/agenda/agenda.page.ts ***!
  \***************************************************/
/*! exports provided: AgendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPage", function() { return AgendaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/servicios/auth.service */ "./src/app/shared/servicios/auth.service.ts");
/* harmony import */ var src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/servicios/evento.service */ "./src/app/shared/servicios/evento.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let AgendaPage = class AgendaPage {
    constructor(eventoService, authService, auth, alertCtrl) {
        this.eventoService = eventoService;
        this.authService = authService;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.listEvents = [];
        this.listSubEvents = [];
        this.Userdata$ = auth.authState;
    }
    ngOnInit() {
        console.log("dsdscsd");
        this.listEvents = [];
        this.listSubEvents = [];
        this.Userdata$.subscribe(user => {
            this.iduser = user.uid;
        });
        console.log('entro al oninit');
        this.eventos$ = this.eventoService.getAllEvents();
        const sub1 = this.eventos$.subscribe(eventos => {
            eventos.forEach(evento => {
                console.log(evento);
                if (evento.idUsers) {
                    evento.idUsers.forEach(element => {
                        if (element == this.iduser) {
                            console.log('llego aqui');
                            this.listEvents.push(evento);
                            console.log('se agregó: ', evento.title);
                        }
                    });
                    if (typeof evento.idSubevents === 'undefined' || evento.idSubevents == 0) {
                        console.log('no hay eventos');
                    }
                    else {
                        evento.idSubevents.forEach(idsub => {
                            this.subevento$ = this.eventoService.getOneSubEvent(idsub);
                            const subs = this.subevento$.subscribe(sub => {
                                if (sub.idUsers) {
                                    sub.idUsers.forEach(ids => {
                                        if (ids == this.iduser) {
                                            this.listSubEvents.push(sub);
                                            console.log('se agregó: ', sub.title);
                                        }
                                    });
                                }
                                else {
                                    console.log('No hay usuarios registrados en: ', sub);
                                }
                                subs.unsubscribe();
                            });
                        });
                    }
                }
                else {
                    console.log('No hay usuarios registrados en: ', evento);
                    if (typeof evento.idSubevents === 'undefined' || evento.idSubevents == 0) {
                        console.log('no hay subeventos');
                    }
                    else {
                        console.log('llego aqui');
                        evento.idSubevents.forEach(idsub => {
                            this.subevento$ = this.eventoService.getOneSubEvent(idsub);
                            const subSub2 = this.subevento$.subscribe(sub => {
                                if (sub.idUsers) {
                                    sub.idUsers.forEach(ids => {
                                        if (ids == this.iduser) {
                                            this.listSubEvents.push(sub);
                                            console.log('se agregó: ', sub.title);
                                        }
                                    });
                                }
                                else {
                                    console.log('No hay usuarios registrados en: ', sub);
                                }
                                subSub2.unsubscribe();
                            });
                        });
                    }
                }
            });
            sub1.unsubscribe();
        });
    }
    deleteevent(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '¿Está seguro de eliminar el evento de tu agenda?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                            console.log('Confirma Cancelar');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Eliminado');
                            this.eventoService.deleteOnEvent(this.iduser, evt.id).then(() => {
                                this.ngOnInit();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    deletesub(subevt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '¿Está seguro de eliminar este subevento de tu agenda?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                            console.log('Confirma Cancelar');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Eliminado');
                            this.eventoService.deleteOnSubEvent(this.iduser, subevt.id).then(() => {
                                this.ngOnInit();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
};
AgendaPage.ctorParameters = () => [
    { type: src_app_shared_servicios_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventosService"] },
    { type: src_app_shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AgendaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agenda',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./agenda.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agenda/agenda.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./agenda.page.scss */ "./src/app/componentes/agenda/agenda.page.scss")).default]
    })
], AgendaPage);



/***/ })

}]);
//# sourceMappingURL=componentes-agenda-agenda-module-es2015.js.map