import { Injectable, Inject, Optional, PLATFORM_ID, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { observeOn, switchMap, map, shareReplay } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, ɵfirebaseAppFactory, ɵlazySDKProxy, FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// WARNING: interface has both a type and a value, skipping emit
import * as ɵngcc0 from '@angular/core';
;
class AngularFireAuth {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, platformId, zone) {
        /** @type {?} */
        const schedulers = new ɵAngularFireSchedulers(zone);
        /** @type {?} */
        const keepUnstableUntilFirst = ɵkeepUnstableUntilFirstFactory(schedulers, platformId);
        /** @type {?} */
        const auth = of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        () => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => import('firebase/auth'))))), map((/**
         * @return {?}
         */
        () => ɵfirebaseAppFactory(options, zone, nameOrConfig))), map((/**
         * @param {?} app
         * @return {?}
         */
        app => app.auth())), shareReplay({ bufferSize: 1, refCount: false }));
        this.authState = auth.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} auth
         * @return {?}
         */
        auth => new Observable(auth.onAuthStateChanged.bind(auth)))), keepUnstableUntilFirst);
        this.user = auth.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} auth
         * @return {?}
         */
        auth => new Observable(auth.onIdTokenChanged.bind(auth)))), keepUnstableUntilFirst);
        this.idToken = this.user.pipe(switchMap((/**
         * @param {?} user
         * @return {?}
         */
        user => user ? from(user.getIdToken()) : of(null))));
        this.idTokenResult = this.user.pipe(switchMap((/**
         * @param {?} user
         * @return {?}
         */
        user => user ? from(user.getIdTokenResult()) : of(null))));
        return ɵlazySDKProxy(this, auth, zone);
    }
}
AngularFireAuth.ɵfac = function AngularFireAuth_Factory(t) { return new (t || AngularFireAuth)(ɵngcc0.ɵɵinject(FIREBASE_OPTIONS), ɵngcc0.ɵɵinject(FIREBASE_APP_NAME, 8), ɵngcc0.ɵɵinject(PLATFORM_ID), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/** @nocollapse */
AngularFireAuth.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ AngularFireAuth.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireAuth_Factory() { return new AngularFireAuth(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); }, token: AngularFireAuth, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireAuth, [{
        type: Injectable,
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [FIREBASE_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [FIREBASE_APP_NAME]
            }] }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.NgZone }]; }, null); })();
if (false) {
    /**
     * Observable of authentication state; as of Firebase 4.0 this is only triggered via sign-in/out
     * @type {?}
     */
    AngularFireAuth.prototype.authState;
    /**
     * Observable of the currently signed-in user's JWT token used to identify the user to a Firebase service (or null).
     * @type {?}
     */
    AngularFireAuth.prototype.idToken;
    /**
     * Observable of the currently signed-in user (or null).
     * @type {?}
     */
    AngularFireAuth.prototype.user;
    /**
     * Observable of the currently signed-in user's IdTokenResult object which contains the ID token JWT string and other
     * helper properties for getting different data associated with the token as well as all the decoded payload claims
     * (or null).
     * @type {?}
     */
    AngularFireAuth.prototype.idTokenResult;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireAuthModule {
}
AngularFireAuthModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFireAuthModule });
AngularFireAuthModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFireAuthModule_Factory(t) { return new (t || AngularFireAuthModule)(); }, providers: [AngularFireAuth] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireAuthModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFireAuth]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularFireAuth, AngularFireAuthModule };

//# sourceMappingURL=angular-fire-auth.js.map