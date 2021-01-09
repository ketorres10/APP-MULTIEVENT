/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional, NgZone, PLATFORM_ID } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { switchMap, map, observeOn, shareReplay } from 'rxjs/operators';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME, ɵlazySDKProxy, ɵfirebaseAppFactory, ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory } from '@angular/fire';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire";
// WARNING: interface has both a type and a value, skipping emit
;
var AngularFireAuth = /** @class */ (function () {
    function AngularFireAuth(options, nameOrConfig, platformId, zone) {
        /** @type {?} */
        var schedulers = new ɵAngularFireSchedulers(zone);
        /** @type {?} */
        var keepUnstableUntilFirst = ɵkeepUnstableUntilFirstFactory(schedulers, platformId);
        /** @type {?} */
        var auth = of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        function () { return zone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return import('firebase/auth'); })); })), map((/**
         * @return {?}
         */
        function () { return ɵfirebaseAppFactory(options, zone, nameOrConfig); })), map((/**
         * @param {?} app
         * @return {?}
         */
        function (app) { return app.auth(); })), shareReplay({ bufferSize: 1, refCount: false }));
        this.authState = auth.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} auth
         * @return {?}
         */
        function (auth) { return new Observable(auth.onAuthStateChanged.bind(auth)); })), keepUnstableUntilFirst);
        this.user = auth.pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @param {?} auth
         * @return {?}
         */
        function (auth) { return new Observable(auth.onIdTokenChanged.bind(auth)); })), keepUnstableUntilFirst);
        this.idToken = this.user.pipe(switchMap((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return user ? from(user.getIdToken()) : of(null); })));
        this.idTokenResult = this.user.pipe(switchMap((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return user ? from(user.getIdTokenResult()) : of(null); })));
        return ɵlazySDKProxy(this, auth, zone);
    }
    AngularFireAuth.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireAuth.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ AngularFireAuth.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFireAuth_Factory() { return new AngularFireAuth(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }, token: AngularFireAuth, providedIn: "any" });
    return AngularFireAuth;
}());
export { AngularFireAuth };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyL2ZpcmUvYXV0aC8iLCJzb3VyY2VzIjpbImF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFxRCxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHL0ksQ0FBQztBQUVyRTtJQTJCRSx5QkFDNEIsT0FBdUIsRUFDVixZQUFvRCxFQUN0RSxVQUFrQixFQUN2QyxJQUFZOztZQUVOLFVBQVUsR0FBRyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQzs7WUFDN0Msc0JBQXNCLEdBQUcsOEJBQThCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQzs7WUFFL0UsSUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQzdCLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQ3BDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUF2QixDQUF1QixFQUFDLEVBQXJELENBQXFELEVBQUMsRUFDdEUsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQWhELENBQWdELEVBQUMsRUFDM0QsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsRUFBQyxFQUN0QixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUNoRDtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDeEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFDcEMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxVQUFVLENBQVksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUE3RCxDQUE2RCxFQUFDLEVBQ2hGLHNCQUFzQixDQUN2QixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUNuQixTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUNwQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBWSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTNELENBQTJELEVBQUMsRUFDOUUsc0JBQXNCLENBQ3ZCLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUMzQixTQUFTOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUF6QyxDQUF5QyxFQUFDLENBQzdELENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQS9DLENBQStDLEVBQUMsQ0FDbkUsQ0FBQztRQUVGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFekMsQ0FBQzs7Z0JBbEVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsS0FBSztpQkFDbEI7Ozs7Z0RBMEJJLE1BQU0sU0FBQyxnQkFBZ0I7Z0RBQ3ZCLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCO2dCQUNKLE1BQU0sdUJBQXRDLE1BQU0sU0FBQyxXQUFXO2dCQXRDZ0IsTUFBTTs7OzBCQUE3QztDQTRFQyxBQXBFRCxJQW9FQztTQWpFWSxlQUFlOzs7Ozs7SUFLMUIsb0NBQWlEOzs7OztJQUtqRCxrQ0FBaUQ7Ozs7O0lBS2pELCtCQUE0Qzs7Ozs7OztJQU81Qyx3Q0FBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIG9ic2VydmVPbiwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGSVJFQkFTRV9PUFRJT05TLCBGSVJFQkFTRV9BUFBfTkFNRSwgRmlyZWJhc2VPcHRpb25zLCBGaXJlYmFzZUFwcENvbmZpZywgybVQcm9taXNlUHJveHksIMm1bGF6eVNES1Byb3h5LCDJtWZpcmViYXNlQXBwRmFjdG9yeSwgybVBbmd1bGFyRmlyZVNjaGVkdWxlcnMsIMm1a2VlcFVuc3RhYmxlVW50aWxGaXJzdEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmltcG9ydCB7IFVzZXIsIGF1dGggfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJGaXJlQXV0aCBleHRlbmRzIMm1UHJvbWlzZVByb3h5PGF1dGguQXV0aD4ge307XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ2FueSdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZpcmVBdXRoIHtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiBhdXRoZW50aWNhdGlvbiBzdGF0ZTsgYXMgb2YgRmlyZWJhc2UgNC4wIHRoaXMgaXMgb25seSB0cmlnZ2VyZWQgdmlhIHNpZ24taW4vb3V0XG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0aFN0YXRlOiBPYnNlcnZhYmxlPFVzZXJ8bnVsbD47XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIGN1cnJlbnRseSBzaWduZWQtaW4gdXNlcidzIEpXVCB0b2tlbiB1c2VkIHRvIGlkZW50aWZ5IHRoZSB1c2VyIHRvIGEgRmlyZWJhc2Ugc2VydmljZSAob3IgbnVsbCkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaWRUb2tlbjogT2JzZXJ2YWJsZTxzdHJpbmd8bnVsbD47XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIGN1cnJlbnRseSBzaWduZWQtaW4gdXNlciAob3IgbnVsbCkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdXNlcjogT2JzZXJ2YWJsZTxVc2VyfG51bGw+O1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIG9mIHRoZSBjdXJyZW50bHkgc2lnbmVkLWluIHVzZXIncyBJZFRva2VuUmVzdWx0IG9iamVjdCB3aGljaCBjb250YWlucyB0aGUgSUQgdG9rZW4gSldUIHN0cmluZyBhbmQgb3RoZXJcbiAgICogaGVscGVyIHByb3BlcnRpZXMgZm9yIGdldHRpbmcgZGlmZmVyZW50IGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSB0b2tlbiBhcyB3ZWxsIGFzIGFsbCB0aGUgZGVjb2RlZCBwYXlsb2FkIGNsYWltc1xuICAgKiAob3IgbnVsbCkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaWRUb2tlblJlc3VsdDogT2JzZXJ2YWJsZTxhdXRoLklkVG9rZW5SZXN1bHR8bnVsbD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChGSVJFQkFTRV9PUFRJT05TKSBvcHRpb25zOkZpcmViYXNlT3B0aW9ucyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEZJUkVCQVNFX0FQUF9OQU1FKSBuYW1lT3JDb25maWc6c3RyaW5nfEZpcmViYXNlQXBwQ29uZmlnfG51bGx8dW5kZWZpbmVkLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICB6b25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgY29uc3Qgc2NoZWR1bGVycyA9IG5ldyDJtUFuZ3VsYXJGaXJlU2NoZWR1bGVycyh6b25lKTtcbiAgICBjb25zdCBrZWVwVW5zdGFibGVVbnRpbEZpcnN0ID0gybVrZWVwVW5zdGFibGVVbnRpbEZpcnN0RmFjdG9yeShzY2hlZHVsZXJzLCBwbGF0Zm9ybUlkKTtcblxuICAgIGNvbnN0IGF1dGggPSBvZih1bmRlZmluZWQpLnBpcGUoXG4gICAgICBvYnNlcnZlT24oc2NoZWR1bGVycy5vdXRzaWRlQW5ndWxhciksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBpbXBvcnQoJ2ZpcmViYXNlL2F1dGgnKSkpLFxuICAgICAgbWFwKCgpID0+IMm1ZmlyZWJhc2VBcHBGYWN0b3J5KG9wdGlvbnMsIHpvbmUsIG5hbWVPckNvbmZpZykpLFxuICAgICAgbWFwKGFwcCA9PiBhcHAuYXV0aCgpKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IGZhbHNlIH0pLFxuICAgICk7XG5cbiAgICB0aGlzLmF1dGhTdGF0ZSA9IGF1dGgucGlwZShcbiAgICAgIG9ic2VydmVPbihzY2hlZHVsZXJzLm91dHNpZGVBbmd1bGFyKSxcbiAgICAgIHN3aXRjaE1hcChhdXRoID0+IG5ldyBPYnNlcnZhYmxlPFVzZXJ8bnVsbD4oYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQuYmluZChhdXRoKSkpLFxuICAgICAga2VlcFVuc3RhYmxlVW50aWxGaXJzdFxuICAgICk7XG5cbiAgICB0aGlzLnVzZXIgPSBhdXRoLnBpcGUoXG4gICAgICBvYnNlcnZlT24oc2NoZWR1bGVycy5vdXRzaWRlQW5ndWxhciksXG4gICAgICBzd2l0Y2hNYXAoYXV0aCA9PiBuZXcgT2JzZXJ2YWJsZTxVc2VyfG51bGw+KGF1dGgub25JZFRva2VuQ2hhbmdlZC5iaW5kKGF1dGgpKSksXG4gICAgICBrZWVwVW5zdGFibGVVbnRpbEZpcnN0XG4gICAgKTtcblxuICAgIHRoaXMuaWRUb2tlbiA9IHRoaXMudXNlci5waXBlKFxuICAgICAgc3dpdGNoTWFwKHVzZXIgPT4gdXNlciA/IGZyb20odXNlci5nZXRJZFRva2VuKCkpIDogb2YobnVsbCkpXG4gICAgKTtcblxuICAgIHRoaXMuaWRUb2tlblJlc3VsdCA9IHRoaXMudXNlci5waXBlKFxuICAgICAgc3dpdGNoTWFwKHVzZXIgPT4gdXNlciA/IGZyb20odXNlci5nZXRJZFRva2VuUmVzdWx0KCkpIDogb2YobnVsbCkpXG4gICAgKTtcblxuICAgIHJldHVybiDJtWxhenlTREtQcm94eSh0aGlzLCBhdXRoLCB6b25lKTtcblxuICB9XG5cbn1cbiJdfQ==