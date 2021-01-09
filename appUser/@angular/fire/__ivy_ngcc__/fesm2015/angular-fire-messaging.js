import { Injectable, Inject, Optional, PLATFORM_ID, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { of, empty, throwError, Observable } from 'rxjs';
import { observeOn, switchMap, map, defaultIfEmpty, concat, catchError, mergeMap } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵfirebaseAppFactory, ɵlazySDKProxy, FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import { isPlatformServer } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// WARNING: interface has both a type and a value, skipping emit
import * as ɵngcc0 from '@angular/core';
;
class AngularFireMessaging {
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
        const messaging = of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        () => isPlatformServer(platformId) ? empty() : import('firebase/messaging'))), map((/**
         * @return {?}
         */
        () => ɵfirebaseAppFactory(options, zone, nameOrConfig))), map((/**
         * @param {?} app
         * @return {?}
         */
        app => app.messaging())));
        if (!isPlatformServer(platformId)) {
            this.requestPermission = messaging.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
             * @param {?} messaging
             * @return {?}
             */
            messaging => messaging.requestPermission())));
        }
        else {
            this.requestPermission = throwError('Not available on server platform.');
        }
        this.getToken = messaging.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => messaging.getToken())), defaultIfEmpty(null));
        /** @type {?} */
        const tokenChanges = messaging.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => new Observable(messaging.onTokenRefresh.bind(messaging)).pipe(switchMap((/**
         * @return {?}
         */
        () => messaging.getToken()))))));
        this.tokenChanges = messaging.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => messaging.getToken())), concat(tokenChanges));
        this.messages = messaging.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => new Observable(messaging.onMessage.bind(messaging)))));
        this.requestToken = of(undefined).pipe(switchMap((/**
         * @return {?}
         */
        () => this.requestPermission)), catchError((/**
         * @return {?}
         */
        () => of(null))), mergeMap((/**
         * @return {?}
         */
        () => this.tokenChanges)));
        this.deleteToken = (/**
         * @param {?} token
         * @return {?}
         */
        (token) => messaging.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => messaging.deleteToken(token))), defaultIfEmpty(false)));
        return ɵlazySDKProxy(this, messaging, zone);
    }
}
AngularFireMessaging.ɵfac = function AngularFireMessaging_Factory(t) { return new (t || AngularFireMessaging)(ɵngcc0.ɵɵinject(FIREBASE_OPTIONS), ɵngcc0.ɵɵinject(FIREBASE_APP_NAME, 8), ɵngcc0.ɵɵinject(PLATFORM_ID), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/** @nocollapse */
AngularFireMessaging.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ AngularFireMessaging.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireMessaging_Factory() { return new AngularFireMessaging(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); }, token: AngularFireMessaging, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireMessaging, [{
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
    /** @type {?} */
    AngularFireMessaging.prototype.requestPermission;
    /** @type {?} */
    AngularFireMessaging.prototype.getToken;
    /** @type {?} */
    AngularFireMessaging.prototype.tokenChanges;
    /** @type {?} */
    AngularFireMessaging.prototype.messages;
    /** @type {?} */
    AngularFireMessaging.prototype.requestToken;
    /** @type {?} */
    AngularFireMessaging.prototype.deleteToken;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireMessagingModule {
}
AngularFireMessagingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFireMessagingModule });
AngularFireMessagingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFireMessagingModule_Factory(t) { return new (t || AngularFireMessagingModule)(); }, providers: [AngularFireMessaging] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireMessagingModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFireMessaging]
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

export { AngularFireMessaging, AngularFireMessagingModule };

//# sourceMappingURL=angular-fire-messaging.js.map