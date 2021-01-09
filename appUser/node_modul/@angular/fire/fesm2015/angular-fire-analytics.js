import { __awaiter } from 'tslib';
import { InjectionToken, Injectable, Inject, Optional, PLATFORM_ID, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModuleFactory, ComponentFactoryResolver, Injector, INJECTOR, NgModule } from '@angular/core';
import { of, empty, Observable, from } from 'rxjs';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { observeOn, switchMap, map, tap, shareReplay, filter, withLatestFrom, groupBy, mergeMap, startWith, pairwise } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵfirebaseAppFactory, ɵlazySDKProxy, FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import { ActivationEnd, NavigationEnd, ROUTES, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Config() { }
;
/** @type {?} */
const COLLECTION_ENABLED = new InjectionToken('angularfire2.analytics.analyticsCollectionEnabled');
/** @type {?} */
const APP_VERSION = new InjectionToken('angularfire2.analytics.appVersion');
/** @type {?} */
const APP_NAME = new InjectionToken('angularfire2.analytics.appName');
/** @type {?} */
const DEBUG_MODE = new InjectionToken('angularfire2.analytics.debugMode');
/** @type {?} */
const CONFIG = new InjectionToken('angularfire2.analytics.config');
/** @type {?} */
const APP_NAME_KEY = 'app_name';
/** @type {?} */
const APP_VERSION_KEY = 'app_version';
/** @type {?} */
const DEBUG_MODE_KEY = 'debug_mode';
/** @type {?} */
const ANALYTICS_ID_FIELD = 'measurementId';
/** @type {?} */
const GTAG_CONFIG_COMMAND = 'config';
/** @type {?} */
const GTAG_FUNCTION_NAME = 'gtag';
/** @type {?} */
const DATA_LAYER_NAME = 'dataLayer';
// WARNING: interface has both a type and a value, skipping emit
;
/** @type {?} */
let gtag;
/** @type {?} */
let analyticsInitialized;
/** @type {?} */
const analyticsInstanceCache = {};
class AngularFireAnalytics {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} analyticsCollectionEnabled
     * @param {?} providedAppVersion
     * @param {?} providedAppName
     * @param {?} debugModeEnabled
     * @param {?} providedConfig
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, analyticsCollectionEnabled, providedAppVersion, providedAppName, debugModeEnabled, providedConfig, platformId, zone) {
        this.options = options;
        if (!analyticsInitialized) {
            if (isPlatformBrowser(platformId)) {
                gtag = window[GTAG_FUNCTION_NAME] || (/**
                 * @return {?}
                 */
                function () { window[DATA_LAYER_NAME].push(arguments); });
                window[DATA_LAYER_NAME] = window[DATA_LAYER_NAME] || [];
                analyticsInitialized = zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => new Promise((/**
                 * @param {?} resolve
                 * @return {?}
                 */
                resolve => {
                    window[GTAG_FUNCTION_NAME] = (/**
                     * @param {...?} args
                     * @return {?}
                     */
                    (...args) => {
                        if (args[0] == 'js') {
                            resolve();
                        }
                        gtag(...args);
                    });
                }))));
            }
            else {
                gtag = (/**
                 * @return {?}
                 */
                () => { });
                analyticsInitialized = Promise.resolve();
            }
        }
        /** @type {?} */
        let analytics = analyticsInstanceCache[options[ANALYTICS_ID_FIELD]];
        if (!analytics) {
            analytics = of(undefined).pipe(observeOn(new ɵAngularFireSchedulers(zone).outsideAngular), switchMap((/**
             * @return {?}
             */
            () => isPlatformBrowser(platformId) ? import('firebase/analytics') : empty())), map((/**
             * @return {?}
             */
            () => ɵfirebaseAppFactory(options, zone, nameOrConfig))), map((/**
             * @param {?} app
             * @return {?}
             */
            app => app.analytics())), tap((/**
             * @param {?} analytics
             * @return {?}
             */
            analytics => {
                if (analyticsCollectionEnabled === false) {
                    analytics.setAnalyticsCollectionEnabled(false);
                }
            })), shareReplay({ bufferSize: 1, refCount: false }));
            analyticsInstanceCache[options[ANALYTICS_ID_FIELD]] = analytics;
        }
        if (providedConfig) {
            this.updateConfig(providedConfig);
        }
        if (providedAppName) {
            this.updateConfig({ [APP_NAME_KEY]: providedAppName });
        }
        if (providedAppVersion) {
            this.updateConfig({ [APP_VERSION_KEY]: providedAppVersion });
        }
        if (debugModeEnabled) {
            this.updateConfig({ [DEBUG_MODE_KEY]: 1 });
        }
        return ɵlazySDKProxy(this, analytics, zone);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    updateConfig(config) {
        return __awaiter(this, void 0, void 0, function* () {
            yield analyticsInitialized;
            gtag(GTAG_CONFIG_COMMAND, this.options[ANALYTICS_ID_FIELD], Object.assign(Object.assign({}, config), { update: true }));
        });
    }
    ;
}
AngularFireAnalytics.decorators = [
    { type: Injectable, args: [{
                providedIn: 'any'
            },] }
];
/** @nocollapse */
AngularFireAnalytics.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [COLLECTION_ENABLED,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [APP_VERSION,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [APP_NAME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DEBUG_MODE,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONFIG,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ AngularFireAnalytics.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireAnalytics_Factory() { return new AngularFireAnalytics(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(COLLECTION_ENABLED, 8), ɵɵinject(APP_VERSION, 8), ɵɵinject(APP_NAME, 8), ɵɵinject(DEBUG_MODE, 8), ɵɵinject(CONFIG, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); }, token: AngularFireAnalytics, providedIn: "any" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularFireAnalytics.prototype.options;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FIREBASE_EVENT_ORIGIN_KEY = 'firebase_event_origin';
/** @type {?} */
const FIREBASE_PREVIOUS_SCREEN_CLASS_KEY = 'firebase_previous_class';
/** @type {?} */
const FIREBASE_PREVIOUS_SCREEN_INSTANCE_ID_KEY = 'firebase_previous_id';
/** @type {?} */
const FIREBASE_PREVIOUS_SCREEN_NAME_KEY = 'firebase_previous_screen';
/** @type {?} */
const FIREBASE_SCREEN_CLASS_KEY = 'firebase_screen_class';
/** @type {?} */
const FIREBASE_SCREEN_INSTANCE_ID_KEY = 'firebase_screen_id';
/** @type {?} */
const FIREBASE_SCREEN_NAME_KEY = 'firebase_screen';
/** @type {?} */
const OUTLET_KEY = 'outlet';
/** @type {?} */
const PAGE_PATH_KEY = 'page_path';
/** @type {?} */
const PAGE_TITLE_KEY = 'page_title';
/** @type {?} */
const SCREEN_CLASS_KEY = 'screen_class';
/** @type {?} */
const SCREEN_NAME_KEY = 'screen_name';
/** @type {?} */
const SCREEN_VIEW_EVENT = 'screen_view';
/** @type {?} */
const EVENT_ORIGIN_AUTO = 'auto';
/** @type {?} */
const DEFAULT_SCREEN_CLASS = '???';
/** @type {?} */
const NG_PRIMARY_OUTLET = 'primary';
/** @type {?} */
const SCREEN_INSTANCE_DELIMITER = '#';
/** @type {?} */
const ANNOTATIONS = '__annotations__';
class ScreenTrackingService {
    /**
     * @param {?} analytics
     * @param {?} router
     * @param {?} title
     * @param {?} componentFactoryResolver
     * @param {?} platformId
     * @param {?} debugModeEnabled
     * @param {?} zone
     * @param {?} injector
     */
    constructor(analytics, router, title, componentFactoryResolver, platformId, debugModeEnabled, zone, injector) {
        if (!router || !isPlatformBrowser(platformId)) {
            return this;
        }
        zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const activationEndEvents = router.events.pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof ActivationEnd)));
            /** @type {?} */
            const navigationEndEvents = router.events.pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd)));
            this.disposable = navigationEndEvents.pipe(withLatestFrom(activationEndEvents), switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            ([navigationEnd, activationEnd]) => {
                // SEMVER: start using optional chains and nullish coalescing once we support newer typescript
                /** @type {?} */
                const page_path = navigationEnd.url;
                /** @type {?} */
                const screen_name = activationEnd.snapshot.routeConfig && activationEnd.snapshot.routeConfig.path || page_path;
                /** @type {?} */
                const params = {
                    [SCREEN_NAME_KEY]: screen_name,
                    [PAGE_PATH_KEY]: page_path,
                    [FIREBASE_EVENT_ORIGIN_KEY]: EVENT_ORIGIN_AUTO,
                    [FIREBASE_SCREEN_NAME_KEY]: screen_name,
                    [OUTLET_KEY]: activationEnd.snapshot.outlet
                };
                if (title) {
                    params[PAGE_TITLE_KEY] = title.getTitle();
                }
                /** @type {?} */
                const component = activationEnd.snapshot.component;
                /** @type {?} */
                const routeConfig = activationEnd.snapshot.routeConfig;
                /** @type {?} */
                const loadChildren = routeConfig && routeConfig.loadChildren;
                // TODO figure out how to handle minification
                if (typeof loadChildren === "string") {
                    // SEMVER: this is the older lazy load style "./path#ClassName", drop this when we drop old ng
                    // TODO is it worth seeing if I can look up the component factory selector from the module name?
                    // it's lazy so it's not registered with componentFactoryResolver yet... seems a pain for a depreciated style
                    return of(Object.assign(Object.assign({}, params), { [SCREEN_CLASS_KEY]: loadChildren.split('#')[1] }));
                }
                else if (typeof component === 'string') {
                    return of(Object.assign(Object.assign({}, params), { [SCREEN_CLASS_KEY]: component }));
                }
                else if (component) {
                    /** @type {?} */
                    const componentFactory = componentFactoryResolver.resolveComponentFactory(component);
                    return of(Object.assign(Object.assign({}, params), { [SCREEN_CLASS_KEY]: componentFactory.selector }));
                }
                else if (loadChildren) {
                    /** @type {?} */
                    const loadedChildren = loadChildren();
                    /** @type {?} */
                    var loadedChildren$ = (loadedChildren instanceof Observable) ? loadedChildren : from(Promise.resolve(loadedChildren));
                    return loadedChildren$.pipe(map((/**
                     * @param {?} lazyModule
                     * @return {?}
                     */
                    lazyModule => {
                        if (lazyModule instanceof NgModuleFactory) {
                            // AOT create an injector
                            /** @type {?} */
                            const moduleRef = lazyModule.create(injector);
                            // INVESTIGATE is this the right way to get at the matching route?
                            /** @type {?} */
                            const routes = moduleRef.injector.get(ROUTES);
                            /** @type {?} */
                            const component = routes[0][0].component;
                            try {
                                /** @type {?} */
                                const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (component)));
                                return Object.assign(Object.assign({}, params), { [SCREEN_CLASS_KEY]: componentFactory.selector });
                            }
                            catch (_) {
                                return Object.assign(Object.assign({}, params), { [SCREEN_CLASS_KEY]: DEFAULT_SCREEN_CLASS });
                            }
                        }
                        else {
                            // JIT look at the annotations
                            // INVESTIGATE are there public APIs for this stuff?
                            /** @type {?} */
                            const declarations = [].concat.apply([], (lazyModule[ANNOTATIONS] || []).map((/**
                             * @param {?} f
                             * @return {?}
                             */
                            (f) => f.declarations)));
                            /** @type {?} */
                            const selectors = [].concat.apply([], declarations.map((/**
                             * @param {?} c
                             * @return {?}
                             */
                            (c) => (c[ANNOTATIONS] || []).map((/**
                             * @param {?} f
                             * @return {?}
                             */
                            (f) => f.selector)))));
                            // should I just be grabbing the selector like this or should i match against the route component?
                            //   const routerModule = lazyModule.ngInjectorDef.imports.find(i => i.ngModule && ....);
                            //   const route = routerModule.providers[0].find(p => p.provide == ROUTES).useValue[0];
                            return Object.assign(Object.assign({}, params), { [SCREEN_CLASS_KEY]: selectors[0] || DEFAULT_SCREEN_CLASS });
                        }
                    })));
                }
                else {
                    return of(Object.assign(Object.assign({}, params), { [SCREEN_CLASS_KEY]: DEFAULT_SCREEN_CLASS }));
                }
            })), map((/**
             * @param {?} params
             * @return {?}
             */
            params => (Object.assign({ [FIREBASE_SCREEN_CLASS_KEY]: params[SCREEN_CLASS_KEY], [FIREBASE_SCREEN_INSTANCE_ID_KEY]: getScreenInstanceID(params) }, params)))), tap((/**
             * @param {?} params
             * @return {?}
             */
            params => {
                // TODO perhaps I can be smarter about this, bubble events up to the nearest outlet?
                if (params[OUTLET_KEY] == NG_PRIMARY_OUTLET) {
                    analytics.setCurrentScreen(params[SCREEN_NAME_KEY]);
                    analytics.updateConfig({
                        [PAGE_PATH_KEY]: params[PAGE_PATH_KEY],
                        [SCREEN_CLASS_KEY]: params[SCREEN_CLASS_KEY]
                    });
                    if (title) {
                        analytics.updateConfig({ [PAGE_TITLE_KEY]: params[PAGE_TITLE_KEY] });
                    }
                }
            })), groupBy((/**
             * @param {?} params
             * @return {?}
             */
            params => params[OUTLET_KEY])), mergeMap((/**
             * @param {?} group
             * @return {?}
             */
            group => group.pipe(startWith(undefined), pairwise()))), map((/**
             * @param {?} __0
             * @return {?}
             */
            ([prior, current]) => prior ? Object.assign({ [FIREBASE_PREVIOUS_SCREEN_CLASS_KEY]: prior[SCREEN_CLASS_KEY], [FIREBASE_PREVIOUS_SCREEN_NAME_KEY]: prior[SCREEN_NAME_KEY], [FIREBASE_PREVIOUS_SCREEN_INSTANCE_ID_KEY]: prior[FIREBASE_SCREEN_INSTANCE_ID_KEY] }, (/** @type {?} */ (current))) : (/** @type {?} */ (current)))), tap((/**
             * @param {?} params
             * @return {?}
             */
            params => debugModeEnabled && console.info(SCREEN_VIEW_EVENT, params))), tap((/**
             * @param {?} params
             * @return {?}
             */
            params => zone.runOutsideAngular((/**
             * @return {?}
             */
            () => analytics.logEvent(SCREEN_VIEW_EVENT, params)))))).subscribe();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.disposable) {
            this.disposable.unsubscribe();
        }
    }
}
ScreenTrackingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'any'
            },] }
];
/** @nocollapse */
ScreenTrackingService.ctorParameters = () => [
    { type: AngularFireAnalytics },
    { type: Router, decorators: [{ type: Optional }] },
    { type: Title, decorators: [{ type: Optional }] },
    { type: ComponentFactoryResolver },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DEBUG_MODE,] }] },
    { type: NgZone },
    { type: Injector }
];
/** @nocollapse */ ScreenTrackingService.ɵprov = ɵɵdefineInjectable({ factory: function ScreenTrackingService_Factory() { return new ScreenTrackingService(ɵɵinject(AngularFireAnalytics), ɵɵinject(Router, 8), ɵɵinject(Title, 8), ɵɵinject(ComponentFactoryResolver), ɵɵinject(PLATFORM_ID), ɵɵinject(DEBUG_MODE, 8), ɵɵinject(NgZone), ɵɵinject(INJECTOR)); }, token: ScreenTrackingService, providedIn: "any" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScreenTrackingService.prototype.disposable;
}
class UserTrackingService {
    // TODO a user properties injector
    /**
     * @param {?} analytics
     * @param {?} zone
     * @param {?} platformId
     */
    constructor(analytics, zone, platformId) {
        /** @type {?} */
        const schedulers = new ɵAngularFireSchedulers(zone);
        if (!isPlatformServer(platformId)) {
            zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // @ts-ignore zap the import in the UMD
                this.disposable = from(import('firebase/auth')).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
                 * @return {?}
                 */
                () => analytics.app)), map((/**
                 * @param {?} app
                 * @return {?}
                 */
                app => app.auth())), switchMap((/**
                 * @param {?} auth
                 * @return {?}
                 */
                auth => new Observable(auth.onAuthStateChanged.bind(auth)))), switchMap((/**
                 * @param {?} user
                 * @return {?}
                 */
                user => analytics.setUserId(user ? user.uid : (/** @type {?} */ (null)))))).subscribe();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.disposable) {
            this.disposable.unsubscribe();
        }
    }
}
UserTrackingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'any'
            },] }
];
/** @nocollapse */
UserTrackingService.ctorParameters = () => [
    { type: AngularFireAnalytics },
    { type: NgZone },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ UserTrackingService.ɵprov = ɵɵdefineInjectable({ factory: function UserTrackingService_Factory() { return new UserTrackingService(ɵɵinject(AngularFireAnalytics), ɵɵinject(NgZone), ɵɵinject(PLATFORM_ID)); }, token: UserTrackingService, providedIn: "any" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserTrackingService.prototype.disposable;
}
// this is an INT64 in iOS/Android but use INT32 cause javascript
/** @type {?} */
let nextScreenInstanceID = Math.floor(Math.random() * (Math.pow(2, 32) - 1)) - Math.pow(2, 31);
/** @type {?} */
const knownScreenInstanceIDs = {};
/** @type {?} */
const getScreenInstanceID = (/**
 * @param {?} params
 * @return {?}
 */
(params) => {
    // unique the screen class against the outlet name
    /** @type {?} */
    const screenInstanceKey = [
        params[SCREEN_CLASS_KEY],
        params[OUTLET_KEY]
    ].join(SCREEN_INSTANCE_DELIMITER);
    if (knownScreenInstanceIDs.hasOwnProperty(screenInstanceKey)) {
        return knownScreenInstanceIDs[screenInstanceKey];
    }
    else {
        /** @type {?} */
        const ret = nextScreenInstanceID++;
        knownScreenInstanceIDs[screenInstanceKey] = ret;
        return ret;
    }
});
const ɵ0 = getScreenInstanceID;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireAnalyticsModule {
    /**
     * @param {?} analytics
     * @param {?} screenTracking
     * @param {?} userTracking
     */
    constructor(analytics, screenTracking, userTracking) {
        // calling anything on analytics will eagerly load the SDK
        analytics.app;
    }
}
AngularFireAnalyticsModule.decorators = [
    { type: NgModule, args: [{
                providers: [AngularFireAnalytics]
            },] }
];
/** @nocollapse */
AngularFireAnalyticsModule.ctorParameters = () => [
    { type: AngularFireAnalytics },
    { type: ScreenTrackingService, decorators: [{ type: Optional }] },
    { type: UserTrackingService, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { APP_NAME, APP_VERSION, AngularFireAnalytics, AngularFireAnalyticsModule, COLLECTION_ENABLED, CONFIG, DEBUG_MODE, ScreenTrackingService, UserTrackingService };
//# sourceMappingURL=angular-fire-analytics.js.map
