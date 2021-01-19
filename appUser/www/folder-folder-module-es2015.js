(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let slide of slides\">\n      <div class=\"slide-img-padding\">\n        <div>\n          <img [src]=\"slide.img\" class=\"img\">\n          <h3 [innerHTML]=\"slide.titulo\"></h3>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <ion-card>\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"12\" size-lg=\"10\" size-xs=\"12\" offser=\"1\">\n          <div padding>\n            <ion-button routerLink=\"/login\" color=\"primary\" class=\"boton-entrar\" expand=\"full\" shape=\"round\">Ingresar\n            </ion-button>\n            <ion-button routerLink=\"/info\" color=\"primary\" expand=\"full\" class=\"boton-login\" shape=\"round\">\n              Acerca de\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/folder-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/folder.module.ts":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/folder/folder-routing.module.ts");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".boton-entrar {\n  font-family: \"Candara\";\n}\n\n.boton-login {\n  font-family: \"Candara\";\n}\n\n.slide-img-padding {\n  margin-top: 5em;\n}\n\nion-slide {\n  display: block;\n  color: white;\n}\n\nh3 {\n  font-family: \"Candara\";\n  font-weight: lighter;\n  margin-bottom: 2.5em;\n}\n\nion-footer {\n  border: 0;\n}\n\nion-label {\n  color: #2D6082;\n}\n\nion-content {\n  --ion-background-color: #2D6082;\n  color: #2D6082;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL0M6XFxVc2Vyc1xca2FyZWVcXERlc2t0b3BcXEFQUC1NVUxUSUVWRU5UXFxhcHBVc2VyL3NyY1xcYXBwXFxmb2xkZXJcXGZvbGRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTtFQUNFLHNCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0lGOztBRERBO0VBRUUsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxTQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0FDS0Y7O0FESEE7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdG9uLWVudHJhcntcbiAgZm9udC1mYW1pbHk6IFwiQ2FuZGFyYVwiO1xufVxuLmJvdG9uLWxvZ2lue1xuICBmb250LWZhbWlseTogXCJDYW5kYXJhXCI7XG59XG4uc2xpZGUtaW1nLXBhZGRpbmd7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cbmlvbi1zbGlkZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcblxufVxuaDN7XG5cbiAgZm9udC1mYW1pbHk6IFwiQ2FuZGFyYVwiO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5pb24tZm9vdGVye1xuICBib3JkZXI6IDA7XG59XG5pb24tbGFiZWx7XG4gIGNvbG9yOiAjMkQ2MDgyO1xufVxuaW9uLWNvbnRlbnR7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyRDYwODI7XG4gIGNvbG9yOiAjMkQ2MDgyO1xufSIsIi5ib3Rvbi1lbnRyYXIge1xuICBmb250LWZhbWlseTogXCJDYW5kYXJhXCI7XG59XG5cbi5ib3Rvbi1sb2dpbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhbmRhcmFcIjtcbn1cblxuLnNsaWRlLWltZy1wYWRkaW5nIHtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhbmRhcmFcIjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzJENjA4Mjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2MDgyO1xuICBjb2xvcjogIzJENjA4Mjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/servicios/auth.service */ "./src/app/shared/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


//importar la clase auth.service.ts
//importar el servicio

//import { ConsoleReporter } from 'jasmine';

let FolderPage = class FolderPage {
    //en ves de authservice
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.slides = [
            {
                img: 'assets/icon/slide1.png',
                titulo: 'Obtener información del evento<br>en tiempo real'
            },
            {
                img: 'assets/icon/slide2.png',
                titulo: 'Facilidad de inscrcibirte<br>en el evento'
            },
            {
                img: 'assets/icon/slide3.png',
                titulo: 'Actualización de la<br>agenda de eventos'
            }
        ];
    }
    ngOnInit() {
        // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
    onSubmitEntrar() {
        //referencia del AuthService que se inyecto en la clase
        this.router.navigate(['/login']);
    }
};
FolderPage.ctorParameters = () => [
    { type: _shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")).default]
    })
], FolderPage);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module-es2015.js.map