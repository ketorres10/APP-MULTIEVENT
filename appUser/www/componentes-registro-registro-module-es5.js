function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-registro-registro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-card-content>\n    <ion-card-content>\n      <div class=\"containerImagen\">\n        <img [src]=\"base64Image\" height=\"200\" width=\"200\" class=\"foto\" /> <br>\n        <ion-button block (click)=\"onUploadGaleria()\" style=\"background-color: #2D6082;\" color=\"white\">\n          <ion-icon name=\"image\"></ion-icon> Galeria\n        </ion-button>\n        <ion-button block (click)=\"onUploadCamera()\" style=\"background-color: #2D6082;\" color=\"white\">\n          <ion-icon name=\"image\"></ion-icon> Cámara\n        </ion-button>\n      </div>\n      <!-- (ngSubmit)=\"onSubmitRegister(newUserForm.value) -->\n      <Form [formGroup]=\"newUserForm\">\n        <ion-card-content style=\"background-color: white;\">\n          <div class=\"field\">\n            <ion-item>\n              <ion-label class=\"fie\" position=\"floating\" style=\"font-size: 1.2em;\">\n                <ion-icon name=\"pencil\"></ion-icon>Nombres\n              </ion-label>\n              <ion-input type=\"text\" formControlName=\"displayName\"></ion-input>\n            </ion-item>\n          </div>\n          <!--Correo-->\n          <div class=\"field\">\n            <ion-item>\n              <ion-label class=\"fie\" position=\"floating\" style=\"font-size: 1.2em;\">\n                <ion-icon name=\"at\"></ion-icon>Correo electrónico\n              </ion-label>\n              <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n          </div>\n          <!--Password-->\n          <div class=\"field\">\n            <ion-item>\n              <ion-label class=\"fie\" position=\"floating\" style=\"font-size: 1.2em;\">\n                <ion-icon name=\"lock-open\"> </ion-icon>Contraseña\n              </ion-label>\n              <ion-input type=\"password\" maxlength=\"8\" formControlName=\"password\"></ion-input>\n            </ion-item>\n          </div>\n          <div class=\"field\">\n            <ion-item>\n              <ion-label class=\"fie\" position=\"floating\" style=\"font-size: 1.2em;\">\n                <ion-icon name=\"call\"> </ion-icon>Telefóno\n              </ion-label>\n              <ion-input number formControlName=\"phoneNumber\" maxlength=\"10\"></ion-input>\n            </ion-item>\n          </div>\n          <div class=\"field\">\n            <ion-item>\n              <ion-label class=\"fie\" position=\"floating\" style=\"font-size: 1.2em;\">\n                <ion-icon name=\"person\"> </ion-icon>Descripción\n              </ion-label>\n              <ion-input type=\"text\" formControlName=\"description\"></ion-input>\n            </ion-item>\n          </div>\n        </ion-card-content>\n        <p style=\"text-align: center;\" routerLink=\"/registro/registroAvatar.page.html\"></p>\n\n        <ion-button class=\"boton-registro\" expand=\"full\" (click)=\"onSubmitRegister(newUserForm.value)\" color=\"secondary\"\n          shape=\"round\">Registrarme\n        </ion-button>\n        <ion-button style=\"text-align: center;\" routerLink=\"/login\" expand=\"full\" shape=\"round\">Ya tengo cuenta\n        </ion-button>\n      </Form>\n      <br>\n\n    </ion-card-content>\n  </ion-card-content>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/componentes/registro/registro-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RegistroPageRoutingModule */

  /***/
  function srcAppComponentesRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
      return RegistroPageRoutingModule;
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


    var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/componentes/registro/registro.page.ts");

    var routes = [{
      path: '',
      component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }];

    var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
      _classCallCheck(this, RegistroPageRoutingModule);
    };

    RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/registro/registro.module.ts ***!
    \*********************************************************/

  /*! exports provided: RegistroPageModule */

  /***/
  function srcAppComponentesRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
      return RegistroPageModule;
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


    var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-routing.module */
    "./src/app/componentes/registro/registro-routing.module.ts");
    /* harmony import */


    var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/componentes/registro/registro.page.ts");

    var RegistroPageModule = function RegistroPageModule() {
      _classCallCheck(this, RegistroPageModule);
    };

    RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })], RegistroPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/registro/registro.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: aliceblue;\n}\n\n.containerImagen {\n  text-align: center;\n  margin-bottom: 1em;\n}\n\n.imagen {\n  border-radius: 50%;\n  border: 3px darkcyan;\n  border-style: groove;\n  margin-top: 25px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 95%;\n  height: 30%;\n}\n\n.field {\n  margin-bottom: 1em;\n}\n\n.field .fie {\n  color: #21618C;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\nion-item {\n  font-size: 13px;\n  box-shadow: 10px 10px 30px -15px #21618c;\n}\n\n.perfil {\n  background-image: url(\"/src/assets/icon/profile.png\");\n}\n\n.boton-registro {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vQzpcXFVzZXJzXFxrYXJlZVxcRGVza3RvcFxcQVBQLU1VTFRJRVZFTlRcXGFwcFVzZXIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxyZWdpc3Ryb1xccmVnaXN0cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBREZFO0VBQ0ksY0FBQTtFQUNBLDhDQUFBO0FDSU47O0FEREE7RUFDRSxlQUFBO0VBQ0Esd0NBQUE7QUNJRjs7QURGQTtFQUNFLHFEQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7O1xyXG59XHJcbi5jb250YWluZXJJbWFnZW57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4uaW1hZ2Vue1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDNweCBkYXJrY3lhbjtcclxuICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4uZmllbGR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIC5maWV7XHJcbiAgICAgIGNvbG9yOiAjMjE2MThDO1xyXG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIH1cclxufVxyXG5pb24taXRlbXtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggLTE1cHggcmdiKDMzLCA5NywgMTQwKTtcclxufVxyXG4ucGVyZmlse1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ljb24vcHJvZmlsZS5wbmdcIik7XHJcbn1cclxuLmJvdG9uLXJlZ2lzdHJve1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLmNvbnRhaW5lckltYWdlbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uaW1hZ2VuIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBkYXJrY3lhbjtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLmZpZWxkIC5maWUge1xuICBjb2xvcjogIzIxNjE4QztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5pb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggLTE1cHggIzIxNjE4Yztcbn1cblxuLnBlcmZpbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ljb24vcHJvZmlsZS5wbmdcIik7XG59XG5cbi5ib3Rvbi1yZWdpc3RybyB7XG4gIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/registro/registro.page.ts ***!
    \*******************************************************/

  /*! exports provided: RegistroPage */

  /***/
  function srcAppComponentesRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
      return RegistroPage;
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
    /*! ../../shared/servicios/auth.service */
    "./src/app/shared/servicios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RegistroPage = /*#__PURE__*/function () {
      function RegistroPage(auth, AFauth, router, storage, camara, alertCtrl, navController, authservice) {
        _classCallCheck(this, RegistroPage);

        this.auth = auth;
        this.AFauth = AFauth;
        this.router = router;
        this.storage = storage;
        this.camara = camara;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.authservice = authservice;
        this.currentImage = 'https://www.tuplanweb.com/proyecto/Plantilla/img/user/edwin.jpg';
        this.newUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
      }

      _createClass(RegistroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onUploadGaleria",
        value: function onUploadGaleria() {
          var _this = this;

          console.log("sdsd");
          this.camara.getPicture({
            sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camara.DestinationType.DATA_URL,
            mediaType: this.camara.MediaType.PICTURE,
            allowEdit: false,
            encodingType: this.camara.EncodingType.JPEG,
            targetHeight: 1024,
            targetWidth: 1024,
            correctOrientation: true,
            saveToPhotoAlbum: true
          }).then(function (res) {
            _this.base64Image = 'data:image/png;base64,' + res;
            _this.clickedImage = res; //this.handleImage(this.clickedImage);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onUploadCamera",
        value: function onUploadCamera() {
          var _this2 = this;

          this.camara.getPicture({
            destinationType: this.camara.DestinationType.DATA_URL,
            encodingType: this.camara.EncodingType.JPEG,
            mediaType: this.camara.MediaType.PICTURE,
            allowEdit: false,
            targetHeight: 1024,
            targetWidth: 1024,
            correctOrientation: true,
            saveToPhotoAlbum: true
          }).then(function (res) {
            _this2.base64Image = 'data:image/png;base64,' + res;
            _this2.clickedImage = res; //this.handleImage(this.clickedImage);
          })["catch"](function (error) {
            console.log(error);
          });
        } //metodo retorna una promesa

      }, {
        key: "onSubmitRegister",
        value: function onSubmitRegister(user) {
          console.log('image', this.clickedImage);

          if (this.base64Image) {
            this.auth.preSaveProfile(user, this.base64Image);
          } else {
            this.auth.preSaveProfile(user);
          }
          /*     console.log("entro aqui", user);
              this.auth.register(user).then(auth => {
                console.log(user);
                this.router.navigate(['../eventos/']);
              }).catch(err => console.log(err)) */

        }
      }]);

      return RegistroPage;
    }();

    RegistroPage.ctorParameters = function () {
      return [{
        type: _shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
      }, {
        type: _shared_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro.page.scss */
      "./src/app/componentes/registro/registro.page.scss"))["default"]]
    })], RegistroPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-registro-registro-module-es5.js.map