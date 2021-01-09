/**
 * @license Angular v9.1.9
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ComponentRef } from '@angular/core';
import { DebugElement } from '@angular/core';
import { DebugNode } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { GetTestability } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { NgProbeToken } from '@angular/core';
import { NgZone } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { Predicate } from '@angular/core';
import { Provider } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { RendererType2 } from '@angular/core';
import { Sanitizer } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { Testability } from '@angular/core';
import { TestabilityRegistry } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ɵConsole } from '@angular/core';
import { ɵDomAdapter } from '@angular/common';
import { ɵgetDOM } from '@angular/common';

/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class BrowserModule {
    constructor(parentModule: BrowserModule | null);
    /**
     * Configures a browser-based app to transition from a server-rendered app, if
     * one is present on the page.
     *
     * @param params An object containing an identifier for the app to transition.
     * The ID must match between the client and server versions of the app.
     * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
     */
    static withServerTransition(params: {
        appId: string;
    }): ModuleWithProviders<BrowserModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<BrowserModule, never, never, [typeof ɵngcc1.CommonModule, typeof ɵngcc0.ApplicationModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<BrowserModule>;
}

/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */
export declare class BrowserTransferStateModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<BrowserTransferStateModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<BrowserTransferStateModule>;
}

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
export declare class By {
    /**
     * Match all nodes.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     */
    static all(): Predicate<DebugNode>;
    /**
     * Match elements by the given CSS selector.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     */
    static css(selector: string): Predicate<DebugElement>;
    /**
     * Match nodes that have the given directive present.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     */
    static directive(type: Type<any>): Predicate<DebugNode>;
}

/**
 * Disables Angular tools.
 *
 * @publicApi
 */
export declare function disableDebugTools(): void;

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](http://g.co/ng/security).
 *
 * @publicApi
 */
export declare abstract class DomSanitizer implements Sanitizer {
    /**
     * Sanitizes a value for use in the given SecurityContext.
     *
     * If value is trusted for the context, this method will unwrap the contained safe value and use
     * it directly. Otherwise, value will be sanitized to be safe in the given context, for example
     * by replacing URLs that have an unsafe protocol part (such as `javascript:`). The implementation
     * is responsible to make sure that the value can definitely be safely used in the given context.
     */
    abstract sanitize(context: SecurityContext, value: SafeValue | string | null): string | null;
    /**
     * Bypass security and trust the given value to be safe HTML. Only use this when the bound HTML
     * is unsafe (e.g. contains `<script>` tags) and the code should be executed. The sanitizer will
     * leave safe HTML intact, so in most situations this method should not be used.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustHtml(value: string): SafeHtml;
    /**
     * Bypass security and trust the given value to be safe style value (CSS).
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustStyle(value: string): SafeStyle;
    /**
     * Bypass security and trust the given value to be safe JavaScript.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustScript(value: string): SafeScript;
    /**
     * Bypass security and trust the given value to be a safe style URL, i.e. a value that can be used
     * in hyperlinks or `<img src>`.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustUrl(value: string): SafeUrl;
    /**
     * Bypass security and trust the given value to be a safe resource URL, i.e. a location that may
     * be used to load executable code from, like `<script src>`, or `<iframe src>`.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DomSanitizer, never>;
}

/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
export declare function enableDebugTools<T>(ref: ComponentRef<T>): ComponentRef<T>;

/**
 * The injection token for the event-manager plug-in service.
 *
 * @publicApi
 */
export declare const EVENT_MANAGER_PLUGINS: InjectionToken<ɵangular_packages_platform_browser_platform_browser_g[]>;

/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
export declare class EventManager {
    private _zone;
    private _plugins;
    private _eventNameToPlugin;
    /**
     * Initializes an instance of the event-manager service.
     */
    constructor(plugins: ɵangular_packages_platform_browser_platform_browser_g[], _zone: NgZone);
    /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns  A callback function that can be used to remove the handler.
     */
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    /**
     * Registers a global handler for an event in a target view.
     *
     * @param target A target for global event notifications. One of "window", "document", or "body".
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns A callback function that can be used to remove the handler.
     */
    addGlobalEventListener(target: string, eventName: string, handler: Function): Function;
    /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
    getZone(): NgZone;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EventManager, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<EventManager>;
}

/**
 * DI token for providing [HammerJS](http://hammerjs.github.io/) support to Angular.
 * @see `HammerGestureConfig`
 *
 * @ngModule HammerModule
 * @publicApi
 */
export declare const HAMMER_GESTURE_CONFIG: InjectionToken<HammerGestureConfig>;

/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
export declare const HAMMER_LOADER: InjectionToken<HammerLoader>;

/**
 * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
export declare class HammerGestureConfig {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](http://hammerjs.github.io/).
     */
    events: string[];
    /**
     * Maps gesture event names to a set of configuration options
     * that specify overrides to the default values for specific properties.
     *
     * The key is a supported event name to be configured,
     * and the options object contains a set of properties, with override values
     * to be applied to the named recognizer event.
     * For example, to disable recognition of the rotate event, specify
     *  `{"rotate": {"enable": false}}`.
     *
     * Properties that are not present take the HammerJS default values.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](http://hammerjs.github.io/).
     *
     */
    overrides: {
        [key: string]: Object;
    };
    /**
     * Properties whose default values can be overridden for a given event.
     * Different sets of properties apply to different events.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](http://hammerjs.github.io/).
     */
    options?: {
        cssProps?: any;
        domEvents?: boolean;
        enable?: boolean | ((manager: any) => boolean);
        preset?: any[];
        touchAction?: string;
        recognizers?: any[];
        inputClass?: any;
        inputTarget?: EventTarget;
    };
    /**
     * Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    buildHammer(element: HTMLElement): HammerInstance;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HammerGestureConfig, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HammerGestureConfig>;
}

declare interface HammerInstance {
    on(eventName: string, callback?: Function): void;
    off(eventName: string, callback?: Function): void;
    destroy?(): void;
}

/**
 * Function that loads HammerJS, returning a promise that is resolved once HammerJs is loaded.
 *
 * @publicApi
 */
export declare type HammerLoader = () => Promise<void>;

/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's EventManager.
 *
 * @publicApi
 */
export declare class HammerModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HammerModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HammerModule>;
}

/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
export declare function makeStateKey<T = void>(key: string): StateKey<T>;

/**
 * A service that can be used to get and add meta tags.
 *
 * @publicApi
 */
export declare class Meta {
    private _doc;
    private _dom;
    constructor(_doc: any);
    addTag(tag: MetaDefinition, forceCreation?: boolean): HTMLMetaElement | null;
    addTags(tags: MetaDefinition[], forceCreation?: boolean): HTMLMetaElement[];
    getTag(attrSelector: string): HTMLMetaElement | null;
    getTags(attrSelector: string): HTMLMetaElement[];
    updateTag(tag: MetaDefinition, selector?: string): HTMLMetaElement | null;
    removeTag(attrSelector: string): void;
    removeTagElement(meta: HTMLMetaElement): void;
    private _getOrCreateElement;
    private _setMetaElementAttributes;
    private _parseSelector;
    private _containsAttributes;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Meta, never>;
}


/**
 * Represents a meta element.
 *
 * @publicApi
 */
export declare type MetaDefinition = {
    charset?: string;
    content?: string;
    httpEquiv?: string;
    id?: string;
    itemprop?: string;
    name?: string;
    property?: string;
    scheme?: string;
    url?: string;
} & {
    [prop: string]: string;
};

/**
 * @publicApi
 */
export declare const platformBrowser: (extraProviders?: StaticProvider[]) => PlatformRef;

/**
 * Marker interface for a value that's safe to use as HTML.
 *
 * @publicApi
 */
export declare interface SafeHtml extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use as a URL to load executable code from.
 *
 * @publicApi
 */
export declare interface SafeResourceUrl extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use as JavaScript.
 *
 * @publicApi
 */
export declare interface SafeScript extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use as style (CSS).
 *
 * @publicApi
 */
export declare interface SafeStyle extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use as a URL linking to a document.
 *
 * @publicApi
 */
export declare interface SafeUrl extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use in a particular context.
 *
 * @publicApi
 */
export declare interface SafeValue {
}

/**
 * A type-safe key to use with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
export declare type StateKey<T> = string & {
    __not_a_string: never;
};

/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
export declare class Title {
    private _doc;
    constructor(_doc: any);
    /**
     * Get the title of the current HTML document.
     */
    getTitle(): string;
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    setTitle(newTitle: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Title, never>;
}

/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
 * non-lossy manner.
 *
 * @publicApi
 */
export declare class TransferState {
    private store;
    private onSerializeCallbacks;
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    get<T>(key: StateKey<T>, defaultValue: T): T;
    /**
     * Set the value corresponding to a key.
     */
    set<T>(key: StateKey<T>, value: T): void;
    /**
     * Remove a key from the store.
     */
    remove<T>(key: StateKey<T>): void;
    /**
     * Test whether a key exists in the store.
     */
    hasKey<T>(key: StateKey<T>): boolean;
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    onSerialize<T>(key: StateKey<T>, callback: () => T): void;
    /**
     * Serialize the current state of the store to JSON.
     */
    toJson(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TransferState, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TransferState>;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

export declare function ɵangular_packages_platform_browser_platform_browser_a(): ErrorHandler;

export declare function ɵangular_packages_platform_browser_platform_browser_b(): any;

export declare const ɵangular_packages_platform_browser_platform_browser_c: StaticProvider[];

/**
 * Factory to create Meta service.
 */
export declare function ɵangular_packages_platform_browser_platform_browser_d(): Meta;


/**
 * Factory to create Title service.
 */
export declare function ɵangular_packages_platform_browser_platform_browser_e(): Title;

export declare function ɵangular_packages_platform_browser_platform_browser_f(doc: Document, appId: string): TransferState;

export declare abstract class ɵangular_packages_platform_browser_platform_browser_g {
    private _doc;
    constructor(_doc: any);
    manager: EventManager;
    abstract supports(eventName: string): boolean;
    abstract addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    addGlobalEventListener(element: string, eventName: string, handler: Function): Function;
}

/**
 * In View Engine, support for Hammer gestures is built-in by default.
 */
export declare const ɵangular_packages_platform_browser_platform_browser_h: Provider[];

export declare const ɵangular_packages_platform_browser_platform_browser_i: Provider[];

export declare function ɵangular_packages_platform_browser_platform_browser_j(injector: Injector): ɵDomSanitizerImpl;

export declare function ɵangular_packages_platform_browser_platform_browser_k(transitionId: string, document: any, injector: Injector): () => void;

export declare const ɵangular_packages_platform_browser_platform_browser_l: StaticProvider[];

export declare function ɵangular_packages_platform_browser_platform_browser_m(coreTokens: NgProbeToken[]): any;

/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
export declare const ɵangular_packages_platform_browser_platform_browser_n: Provider[];

/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare abstract class ɵangular_packages_platform_browser_platform_browser_o extends ɵDomAdapter {
    constructor();
    supportsDOMEvents(): boolean;
}

/**
 * @security Replacing built-in sanitization providers exposes the application to XSS risks.
 * Attacker-controlled data introduced by an unsanitized provider could expose your
 * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
 * @publicApi
 */
export declare const ɵBROWSER_SANITIZATION_PROVIDERS: StaticProvider[];

export declare const ɵBROWSER_SANITIZATION_PROVIDERS__POST_R3__: never[];

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare class ɵBrowserDomAdapter extends ɵangular_packages_platform_browser_platform_browser_o {
    static makeCurrent(): void;
    getProperty(el: Node, name: string): any;
    log(error: string): void;
    logGroup(error: string): void;
    logGroupEnd(): void;
    onAndCancel(el: Node, evt: any, listener: any): Function;
    dispatchEvent(el: Node, evt: any): void;
    remove(node: Node): Node;
    getValue(el: any): string;
    createElement(tagName: string, doc?: Document): HTMLElement;
    createHtmlDocument(): HTMLDocument;
    getDefaultDocument(): Document;
    isElementNode(node: Node): boolean;
    isShadowRoot(node: any): boolean;
    getGlobalEventTarget(doc: Document, target: string): EventTarget | null;
    getHistory(): History;
    getLocation(): Location;
    getBaseHref(doc: Document): string | null;
    resetBaseElement(): void;
    getUserAgent(): string;
    performanceNow(): number;
    supportsCookies(): boolean;
    getCookie(name: string): string | null;
}

export declare class ɵBrowserGetTestability implements GetTestability {
    static init(): void;
    addToWindow(registry: TestabilityRegistry): void;
    findTestabilityInTree(registry: TestabilityRegistry, elem: any, findInAncestors: boolean): Testability | null;
}

export declare class ɵDomEventsPlugin extends ɵangular_packages_platform_browser_platform_browser_g {
    constructor(doc: any);
    supports(eventName: string): boolean;
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    removeEventListener(target: any, eventName: string, callback: Function): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDomEventsPlugin, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵDomEventsPlugin>;
}

export declare class ɵDomRendererFactory2 implements RendererFactory2 {
    private eventManager;
    private sharedStylesHost;
    private appId;
    private rendererByCompId;
    private defaultRenderer;
    constructor(eventManager: EventManager, sharedStylesHost: ɵDomSharedStylesHost, appId: string);
    createRenderer(element: any, type: RendererType2 | null): Renderer2;
    begin(): void;
    end(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDomRendererFactory2, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵDomRendererFactory2>;
}

export declare class ɵDomSanitizerImpl extends DomSanitizer {
    private _doc;
    constructor(_doc: any);
    sanitize(ctx: SecurityContext, value: SafeValue | string | null): string | null;
    bypassSecurityTrustHtml(value: string): SafeHtml;
    bypassSecurityTrustStyle(value: string): SafeStyle;
    bypassSecurityTrustScript(value: string): SafeScript;
    bypassSecurityTrustUrl(value: string): SafeUrl;
    bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDomSanitizerImpl, never>;
}

export declare class ɵDomSharedStylesHost extends ɵSharedStylesHost implements OnDestroy {
    private _doc;
    private _hostNodes;
    private _styleNodes;
    constructor(_doc: any);
    private _addStylesToHost;
    addHost(hostNode: Node): void;
    removeHost(hostNode: Node): void;
    onStylesAdded(additions: Set<string>): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDomSharedStylesHost, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵDomSharedStylesHost>;
}

export declare const ɵELEMENT_PROBE_PROVIDERS: Provider[];

/**
 * In Ivy, we don't support NgProbe because we have our own set of testing utilities
 * with more robust functionality.
 *
 * We shouldn't bring in NgProbe because it prevents DebugNode and friends from
 * tree-shaking properly.
 */
export declare const ɵELEMENT_PROBE_PROVIDERS__POST_R3__: never[];


export declare function ɵescapeHtml(text: string): string;

export declare function ɵflattenStyles(compId: string, styles: Array<any | any[]>, target: string[]): string[];
export { ɵgetDOM }

/**
 * In Ivy, support for Hammer gestures is optional, so applications must
 * import the `HammerModule` at root to turn on support. This means that
 * Hammer-specific code can be tree-shaken away if not needed.
 */
export declare const ɵHAMMER_PROVIDERS__POST_R3__: never[];

/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
export declare class ɵHammerGesturesPlugin extends ɵangular_packages_platform_browser_platform_browser_g {
    private _config;
    private console;
    private loader?;
    constructor(doc: any, _config: HammerGestureConfig, console: ɵConsole, loader?: HammerLoader | null | undefined);
    supports(eventName: string): boolean;
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    isCustomEvent(eventName: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵHammerGesturesPlugin, [null, null, null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵHammerGesturesPlugin>;
}

export declare function ɵinitDomAdapter(): void;

export declare const ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS: StaticProvider[];

/**
 * @publicApi
 * A browser plug-in that provides support for handling of key events in Angular.
 */
export declare class ɵKeyEventsPlugin extends ɵangular_packages_platform_browser_platform_browser_g {
    /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
    constructor(doc: any);
    /**
     * Reports whether a named key event is supported.
     * @param eventName The event name to query.
     * @return True if the named key event is supported.
     */
    supports(eventName: string): boolean;
    /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
     */
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    static parseEventName(eventName: string): {
        [key: string]: string;
    } | null;
    static getEventFullKey(event: KeyboardEvent): string;
    /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
    static eventCallback(fullKey: any, handler: Function, zone: NgZone): Function;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵKeyEventsPlugin, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵKeyEventsPlugin>;
}

export declare const ɵNAMESPACE_URIS: {
    [ns: string]: string;
};

export declare class ɵSharedStylesHost {
    addStyles(styles: string[]): void;
    onStylesAdded(additions: Set<string>): void;
    getAllStyles(): string[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵSharedStylesHost, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵSharedStylesHost>;
}

export declare function ɵshimContentAttribute(componentShortId: string): string;

export declare function ɵshimHostAttribute(componentShortId: string): string;

/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
export declare const ɵTRANSITION_ID: InjectionToken<unknown>;

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0tYnJvd3Nlci5kLnRzIiwic291cmNlcyI6WyJwbGF0Zm9ybS1icm93c2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjkuMS45XG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWJ1Z0VsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVidWdOb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHZXRUZXN0YWJpbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nUHJvYmVUb2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJlclR5cGUyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGVzdGFiaWxpdHkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGVzdGFiaWxpdHlSZWdpc3RyeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgybVDb25zb2xlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IMm1RG9tQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IMm1Z2V0RE9NIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbi8qKlxyXG4gKiBFeHBvcnRzIHJlcXVpcmVkIGluZnJhc3RydWN0dXJlIGZvciBhbGwgQW5ndWxhciBhcHBzLlxyXG4gKiBJbmNsdWRlZCBieSBkZWZhdWx0IGluIGFsbCBBbmd1bGFyIGFwcHMgY3JlYXRlZCB3aXRoIHRoZSBDTElcclxuICogYG5ld2AgY29tbWFuZC5cclxuICogUmUtZXhwb3J0cyBgQ29tbW9uTW9kdWxlYCBhbmQgYEFwcGxpY2F0aW9uTW9kdWxlYCwgbWFraW5nIHRoZWlyXHJcbiAqIGV4cG9ydHMgYW5kIHByb3ZpZGVycyBhdmFpbGFibGUgdG8gYWxsIGFwcHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJyb3dzZXJNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50TW9kdWxlOiBCcm93c2VyTW9kdWxlIHwgbnVsbCk7XHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgYSBicm93c2VyLWJhc2VkIGFwcCB0byB0cmFuc2l0aW9uIGZyb20gYSBzZXJ2ZXItcmVuZGVyZWQgYXBwLCBpZlxyXG4gICAgICogb25lIGlzIHByZXNlbnQgb24gdGhlIHBhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBBbiBvYmplY3QgY29udGFpbmluZyBhbiBpZGVudGlmaWVyIGZvciB0aGUgYXBwIHRvIHRyYW5zaXRpb24uXHJcbiAgICAgKiBUaGUgSUQgbXVzdCBtYXRjaCBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHNlcnZlciB2ZXJzaW9ucyBvZiB0aGUgYXBwLlxyXG4gICAgICogQHJldHVybnMgVGhlIHJlY29uZmlndXJlZCBgQnJvd3Nlck1vZHVsZWAgdG8gaW1wb3J0IGludG8gdGhlIGFwcCdzIHJvb3QgYEFwcE1vZHVsZWAuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB3aXRoU2VydmVyVHJhbnNpdGlvbihwYXJhbXM6IHtcclxuICAgICAgICBhcHBJZDogc3RyaW5nO1xyXG4gICAgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QnJvd3Nlck1vZHVsZT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOZ01vZHVsZSB0byBpbnN0YWxsIG9uIHRoZSBjbGllbnQgc2lkZSB3aGlsZSB1c2luZyB0aGUgYFRyYW5zZmVyU3RhdGVgIHRvIHRyYW5zZmVyIHN0YXRlIGZyb21cclxuICogc2VydmVyIHRvIGNsaWVudC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUge1xyXG59XHJcblxyXG4vKipcclxuICogUHJlZGljYXRlcyBmb3IgdXNlIHdpdGgge0BsaW5rIERlYnVnRWxlbWVudH0ncyBxdWVyeSBmdW5jdGlvbnMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJ5IHtcclxuICAgIC8qKlxyXG4gICAgICogTWF0Y2ggYWxsIG5vZGVzLlxyXG4gICAgICpcclxuICAgICAqIEB1c2FnZU5vdGVzXHJcbiAgICAgKiAjIyMgRXhhbXBsZVxyXG4gICAgICpcclxuICAgICAqIHtAZXhhbXBsZSBwbGF0Zm9ybS1icm93c2VyL2RvbS9kZWJ1Zy90cy9ieS9ieS50cyByZWdpb249J2J5X2FsbCd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhbGwoKTogUHJlZGljYXRlPERlYnVnTm9kZT47XHJcbiAgICAvKipcclxuICAgICAqIE1hdGNoIGVsZW1lbnRzIGJ5IHRoZSBnaXZlbiBDU1Mgc2VsZWN0b3IuXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqICMjIyBFeGFtcGxlXHJcbiAgICAgKlxyXG4gICAgICoge0BleGFtcGxlIHBsYXRmb3JtLWJyb3dzZXIvZG9tL2RlYnVnL3RzL2J5L2J5LnRzIHJlZ2lvbj0nYnlfY3NzJ31cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNzcyhzZWxlY3Rvcjogc3RyaW5nKTogUHJlZGljYXRlPERlYnVnRWxlbWVudD47XHJcbiAgICAvKipcclxuICAgICAqIE1hdGNoIG5vZGVzIHRoYXQgaGF2ZSB0aGUgZ2l2ZW4gZGlyZWN0aXZlIHByZXNlbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqICMjIyBFeGFtcGxlXHJcbiAgICAgKlxyXG4gICAgICoge0BleGFtcGxlIHBsYXRmb3JtLWJyb3dzZXIvZG9tL2RlYnVnL3RzL2J5L2J5LnRzIHJlZ2lvbj0nYnlfZGlyZWN0aXZlJ31cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpcmVjdGl2ZSh0eXBlOiBUeXBlPGFueT4pOiBQcmVkaWNhdGU8RGVidWdOb2RlPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc2FibGVzIEFuZ3VsYXIgdG9vbHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGRpc2FibGVEZWJ1Z1Rvb2xzKCk6IHZvaWQ7XHJcblxyXG4vKipcclxuICogRG9tU2FuaXRpemVyIGhlbHBzIHByZXZlbnRpbmcgQ3Jvc3MgU2l0ZSBTY3JpcHRpbmcgU2VjdXJpdHkgYnVncyAoWFNTKSBieSBzYW5pdGl6aW5nXHJcbiAqIHZhbHVlcyB0byBiZSBzYWZlIHRvIHVzZSBpbiB0aGUgZGlmZmVyZW50IERPTSBjb250ZXh0cy5cclxuICpcclxuICogRm9yIGV4YW1wbGUsIHdoZW4gYmluZGluZyBhIFVSTCBpbiBhbiBgPGEgW2hyZWZdPVwic29tZVZhbHVlXCI+YCBoeXBlcmxpbmssIGBzb21lVmFsdWVgIHdpbGwgYmVcclxuICogc2FuaXRpemVkIHNvIHRoYXQgYW4gYXR0YWNrZXIgY2Fubm90IGluamVjdCBlLmcuIGEgYGphdmFzY3JpcHQ6YCBVUkwgdGhhdCB3b3VsZCBleGVjdXRlIGNvZGUgb25cclxuICogdGhlIHdlYnNpdGUuXHJcbiAqXHJcbiAqIEluIHNwZWNpZmljIHNpdHVhdGlvbnMsIGl0IG1pZ2h0IGJlIG5lY2Vzc2FyeSB0byBkaXNhYmxlIHNhbml0aXphdGlvbiwgZm9yIGV4YW1wbGUgaWYgdGhlXHJcbiAqIGFwcGxpY2F0aW9uIGdlbnVpbmVseSBuZWVkcyB0byBwcm9kdWNlIGEgYGphdmFzY3JpcHQ6YCBzdHlsZSBsaW5rIHdpdGggYSBkeW5hbWljIHZhbHVlIGluIGl0LlxyXG4gKiBVc2VycyBjYW4gYnlwYXNzIHNlY3VyaXR5IGJ5IGNvbnN0cnVjdGluZyBhIHZhbHVlIHdpdGggb25lIG9mIHRoZSBgYnlwYXNzU2VjdXJpdHlUcnVzdC4uLmBcclxuICogbWV0aG9kcywgYW5kIHRoZW4gYmluZGluZyB0byB0aGF0IHZhbHVlIGZyb20gdGhlIHRlbXBsYXRlLlxyXG4gKlxyXG4gKiBUaGVzZSBzaXR1YXRpb25zIHNob3VsZCBiZSB2ZXJ5IHJhcmUsIGFuZCBleHRyYW9yZGluYXJ5IGNhcmUgbXVzdCBiZSB0YWtlbiB0byBhdm9pZCBjcmVhdGluZyBhXHJcbiAqIENyb3NzIFNpdGUgU2NyaXB0aW5nIChYU1MpIHNlY3VyaXR5IGJ1ZyFcclxuICpcclxuICogV2hlbiB1c2luZyBgYnlwYXNzU2VjdXJpdHlUcnVzdC4uLmAsIG1ha2Ugc3VyZSB0byBjYWxsIHRoZSBtZXRob2QgYXMgZWFybHkgYXMgcG9zc2libGUgYW5kIGFzXHJcbiAqIGNsb3NlIGFzIHBvc3NpYmxlIHRvIHRoZSBzb3VyY2Ugb2YgdGhlIHZhbHVlLCB0byBtYWtlIGl0IGVhc3kgdG8gdmVyaWZ5IG5vIHNlY3VyaXR5IGJ1ZyBpc1xyXG4gKiBjcmVhdGVkIGJ5IGl0cyB1c2UuXHJcbiAqXHJcbiAqIEl0IGlzIG5vdCByZXF1aXJlZCAoYW5kIG5vdCByZWNvbW1lbmRlZCkgdG8gYnlwYXNzIHNlY3VyaXR5IGlmIHRoZSB2YWx1ZSBpcyBzYWZlLCBlLmcuIGEgVVJMIHRoYXRcclxuICogZG9lcyBub3Qgc3RhcnQgd2l0aCBhIHN1c3BpY2lvdXMgcHJvdG9jb2wsIG9yIGFuIEhUTUwgc25pcHBldCB0aGF0IGRvZXMgbm90IGNvbnRhaW4gZGFuZ2Vyb3VzXHJcbiAqIGNvZGUuIFRoZSBzYW5pdGl6ZXIgbGVhdmVzIHNhZmUgdmFsdWVzIGludGFjdC5cclxuICpcclxuICogQHNlY3VyaXR5IENhbGxpbmcgYW55IG9mIHRoZSBgYnlwYXNzU2VjdXJpdHlUcnVzdC4uLmAgQVBJcyBkaXNhYmxlcyBBbmd1bGFyJ3MgYnVpbHQtaW5cclxuICogc2FuaXRpemF0aW9uIGZvciB0aGUgdmFsdWUgcGFzc2VkIGluLiBDYXJlZnVsbHkgY2hlY2sgYW5kIGF1ZGl0IGFsbCB2YWx1ZXMgYW5kIGNvZGUgcGF0aHMgZ29pbmdcclxuICogaW50byB0aGlzIGNhbGwuIE1ha2Ugc3VyZSBhbnkgdXNlciBkYXRhIGlzIGFwcHJvcHJpYXRlbHkgZXNjYXBlZCBmb3IgdGhpcyBzZWN1cml0eSBjb250ZXh0LlxyXG4gKiBGb3IgbW9yZSBkZXRhaWwsIHNlZSB0aGUgW1NlY3VyaXR5IEd1aWRlXShodHRwOi8vZy5jby9uZy9zZWN1cml0eSkuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIERvbVNhbml0aXplciBpbXBsZW1lbnRzIFNhbml0aXplciB7XHJcbiAgICAvKipcclxuICAgICAqIFNhbml0aXplcyBhIHZhbHVlIGZvciB1c2UgaW4gdGhlIGdpdmVuIFNlY3VyaXR5Q29udGV4dC5cclxuICAgICAqXHJcbiAgICAgKiBJZiB2YWx1ZSBpcyB0cnVzdGVkIGZvciB0aGUgY29udGV4dCwgdGhpcyBtZXRob2Qgd2lsbCB1bndyYXAgdGhlIGNvbnRhaW5lZCBzYWZlIHZhbHVlIGFuZCB1c2VcclxuICAgICAqIGl0IGRpcmVjdGx5LiBPdGhlcndpc2UsIHZhbHVlIHdpbGwgYmUgc2FuaXRpemVkIHRvIGJlIHNhZmUgaW4gdGhlIGdpdmVuIGNvbnRleHQsIGZvciBleGFtcGxlXHJcbiAgICAgKiBieSByZXBsYWNpbmcgVVJMcyB0aGF0IGhhdmUgYW4gdW5zYWZlIHByb3RvY29sIHBhcnQgKHN1Y2ggYXMgYGphdmFzY3JpcHQ6YCkuIFRoZSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICogaXMgcmVzcG9uc2libGUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGNhbiBkZWZpbml0ZWx5IGJlIHNhZmVseSB1c2VkIGluIHRoZSBnaXZlbiBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBzYW5pdGl6ZShjb250ZXh0OiBTZWN1cml0eUNvbnRleHQsIHZhbHVlOiBTYWZlVmFsdWUgfCBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgc2FmZSBIVE1MLiBPbmx5IHVzZSB0aGlzIHdoZW4gdGhlIGJvdW5kIEhUTUxcclxuICAgICAqIGlzIHVuc2FmZSAoZS5nLiBjb250YWlucyBgPHNjcmlwdD5gIHRhZ3MpIGFuZCB0aGUgY29kZSBzaG91bGQgYmUgZXhlY3V0ZWQuIFRoZSBzYW5pdGl6ZXIgd2lsbFxyXG4gICAgICogbGVhdmUgc2FmZSBIVE1MIGludGFjdCwgc28gaW4gbW9zdCBzaXR1YXRpb25zIHRoaXMgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cclxuICAgICAqXHJcbiAgICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xyXG4gICAgICogc2VjdXJpdHkgcmlza3MhXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlOiBzdHJpbmcpOiBTYWZlSHRtbDtcclxuICAgIC8qKlxyXG4gICAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgc2FmZSBzdHlsZSB2YWx1ZSAoQ1NTKS5cclxuICAgICAqXHJcbiAgICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xyXG4gICAgICogc2VjdXJpdHkgcmlza3MhXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZTogc3RyaW5nKTogU2FmZVN0eWxlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCeXBhc3Mgc2VjdXJpdHkgYW5kIHRydXN0IHRoZSBnaXZlbiB2YWx1ZSB0byBiZSBzYWZlIEphdmFTY3JpcHQuXHJcbiAgICAgKlxyXG4gICAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcclxuICAgICAqIHNlY3VyaXR5IHJpc2tzIVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlOiBzdHJpbmcpOiBTYWZlU2NyaXB0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBCeXBhc3Mgc2VjdXJpdHkgYW5kIHRydXN0IHRoZSBnaXZlbiB2YWx1ZSB0byBiZSBhIHNhZmUgc3R5bGUgVVJMLCBpLmUuIGEgdmFsdWUgdGhhdCBjYW4gYmUgdXNlZFxyXG4gICAgICogaW4gaHlwZXJsaW5rcyBvciBgPGltZyBzcmM+YC5cclxuICAgICAqXHJcbiAgICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xyXG4gICAgICogc2VjdXJpdHkgcmlza3MhXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodmFsdWU6IHN0cmluZyk6IFNhZmVVcmw7XHJcbiAgICAvKipcclxuICAgICAqIEJ5cGFzcyBzZWN1cml0eSBhbmQgdHJ1c3QgdGhlIGdpdmVuIHZhbHVlIHRvIGJlIGEgc2FmZSByZXNvdXJjZSBVUkwsIGkuZS4gYSBsb2NhdGlvbiB0aGF0IG1heVxyXG4gICAgICogYmUgdXNlZCB0byBsb2FkIGV4ZWN1dGFibGUgY29kZSBmcm9tLCBsaWtlIGA8c2NyaXB0IHNyYz5gLCBvciBgPGlmcmFtZSBzcmM+YC5cclxuICAgICAqXHJcbiAgICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xyXG4gICAgICogc2VjdXJpdHkgcmlza3MhXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2YWx1ZTogc3RyaW5nKTogU2FmZVJlc291cmNlVXJsO1xyXG59XHJcblxyXG4vKipcclxuICogRW5hYmxlZCBBbmd1bGFyIGRlYnVnIHRvb2xzIHRoYXQgYXJlIGFjY2Vzc2libGUgdmlhIHlvdXIgYnJvd3NlcidzXHJcbiAqIGRldmVsb3BlciBjb25zb2xlLlxyXG4gKlxyXG4gKiBVc2FnZTpcclxuICpcclxuICogMS4gT3BlbiBkZXZlbG9wZXIgY29uc29sZSAoZS5nLiBpbiBDaHJvbWUgQ3RybCArIFNoaWZ0ICsgailcclxuICogMS4gVHlwZSBgbmcuYCAodXN1YWxseSB0aGUgY29uc29sZSB3aWxsIHNob3cgYXV0by1jb21wbGV0ZSBzdWdnZXN0aW9uKVxyXG4gKiAxLiBUcnkgdGhlIGNoYW5nZSBkZXRlY3Rpb24gcHJvZmlsZXIgYG5nLnByb2ZpbGVyLnRpbWVDaGFuZ2VEZXRlY3Rpb24oKWBcclxuICogICAgdGhlbiBoaXQgRW50ZXIuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGVuYWJsZURlYnVnVG9vbHM8VD4ocmVmOiBDb21wb25lbnRSZWY8VD4pOiBDb21wb25lbnRSZWY8VD47XHJcblxyXG4vKipcclxuICogVGhlIGluamVjdGlvbiB0b2tlbiBmb3IgdGhlIGV2ZW50LW1hbmFnZXIgcGx1Zy1pbiBzZXJ2aWNlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBFVkVOVF9NQU5BR0VSX1BMVUdJTlM6IEluamVjdGlvblRva2VuPMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfZ1tdPjtcclxuXHJcbi8qKlxyXG4gKiBBbiBpbmplY3RhYmxlIHNlcnZpY2UgdGhhdCBwcm92aWRlcyBldmVudCBtYW5hZ2VtZW50IGZvciBBbmd1bGFyXHJcbiAqIHRocm91Z2ggYSBicm93c2VyIHBsdWctaW4uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIF96b25lO1xyXG4gICAgcHJpdmF0ZSBfcGx1Z2lucztcclxuICAgIHByaXZhdGUgX2V2ZW50TmFtZVRvUGx1Z2luO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhbiBpbnN0YW5jZSBvZiB0aGUgZXZlbnQtbWFuYWdlciBzZXJ2aWNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwbHVnaW5zOiDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2dbXSwgX3pvbmU6IE5nWm9uZSk7XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgZWxlbWVudCBhbmQgZXZlbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIEhUTUwgZWxlbWVudCB0byByZWNlaXZlIGV2ZW50IG5vdGlmaWNhdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gZm9yLlxyXG4gICAgICogQHBhcmFtIGhhbmRsZXIgQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBvY2N1cnMuIFJlY2VpdmVzIHRoZVxyXG4gICAgICogZXZlbnQgb2JqZWN0IGFzIGFuIGFyZ3VtZW50LlxyXG4gICAgICogQHJldHVybnMgIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byByZW1vdmUgdGhlIGhhbmRsZXIuXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBnbG9iYWwgaGFuZGxlciBmb3IgYW4gZXZlbnQgaW4gYSB0YXJnZXQgdmlldy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IGZvciBnbG9iYWwgZXZlbnQgbm90aWZpY2F0aW9ucy4gT25lIG9mIFwid2luZG93XCIsIFwiZG9jdW1lbnRcIiwgb3IgXCJib2R5XCIuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gZm9yLlxyXG4gICAgICogQHBhcmFtIGhhbmRsZXIgQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBvY2N1cnMuIFJlY2VpdmVzIHRoZVxyXG4gICAgICogZXZlbnQgb2JqZWN0IGFzIGFuIGFyZ3VtZW50LlxyXG4gICAgICogQHJldHVybnMgQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlbW92ZSB0aGUgaGFuZGxlci5cclxuICAgICAqL1xyXG4gICAgYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcih0YXJnZXQ6IHN0cmluZywgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb247XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgY29tcGlsYXRpb24gem9uZSBpbiB3aGljaCBldmVudCBsaXN0ZW5lcnMgYXJlIHJlZ2lzdGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGdldFpvbmUoKTogTmdab25lO1xyXG59XHJcblxyXG4vKipcclxuICogREkgdG9rZW4gZm9yIHByb3ZpZGluZyBbSGFtbWVySlNdKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vKSBzdXBwb3J0IHRvIEFuZ3VsYXIuXHJcbiAqIEBzZWUgYEhhbW1lckdlc3R1cmVDb25maWdgXHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBIYW1tZXJNb2R1bGVcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgSEFNTUVSX0dFU1RVUkVfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxIYW1tZXJHZXN0dXJlQ29uZmlnPjtcclxuXHJcbi8qKlxyXG4gKiBJbmplY3Rpb24gdG9rZW4gdXNlZCB0byBwcm92aWRlIGEge0BsaW5rIEhhbW1lckxvYWRlcn0gdG8gQW5ndWxhci5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgSEFNTUVSX0xPQURFUjogSW5qZWN0aW9uVG9rZW48SGFtbWVyTG9hZGVyPjtcclxuXHJcbi8qKlxyXG4gKiBBbiBpbmplY3RhYmxlIFtIYW1tZXJKUyBNYW5hZ2VyXShodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL2FwaS8jaGFtbWVyLm1hbmFnZXIpXHJcbiAqIGZvciBnZXN0dXJlIHJlY29nbml0aW9uLiBDb25maWd1cmVzIHNwZWNpZmljIGV2ZW50IHJlY29nbml0aW9uLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBzZXQgb2Ygc3VwcG9ydGVkIGV2ZW50IG5hbWVzIGZvciBnZXN0dXJlcyB0byBiZSB1c2VkIGluIEFuZ3VsYXIuXHJcbiAgICAgKiBBbmd1bGFyIHN1cHBvcnRzIGFsbCBidWlsdC1pbiByZWNvZ25pemVycywgYXMgbGlzdGVkIGluXHJcbiAgICAgKiBbSGFtbWVySlMgZG9jdW1lbnRhdGlvbl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pLlxyXG4gICAgICovXHJcbiAgICBldmVudHM6IHN0cmluZ1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGdlc3R1cmUgZXZlbnQgbmFtZXMgdG8gYSBzZXQgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zXHJcbiAgICAgKiB0aGF0IHNwZWNpZnkgb3ZlcnJpZGVzIHRvIHRoZSBkZWZhdWx0IHZhbHVlcyBmb3Igc3BlY2lmaWMgcHJvcGVydGllcy5cclxuICAgICAqXHJcbiAgICAgKiBUaGUga2V5IGlzIGEgc3VwcG9ydGVkIGV2ZW50IG5hbWUgdG8gYmUgY29uZmlndXJlZCxcclxuICAgICAqIGFuZCB0aGUgb3B0aW9ucyBvYmplY3QgY29udGFpbnMgYSBzZXQgb2YgcHJvcGVydGllcywgd2l0aCBvdmVycmlkZSB2YWx1ZXNcclxuICAgICAqIHRvIGJlIGFwcGxpZWQgdG8gdGhlIG5hbWVkIHJlY29nbml6ZXIgZXZlbnQuXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgdG8gZGlzYWJsZSByZWNvZ25pdGlvbiBvZiB0aGUgcm90YXRlIGV2ZW50LCBzcGVjaWZ5XHJcbiAgICAgKiAgYHtcInJvdGF0ZVwiOiB7XCJlbmFibGVcIjogZmFsc2V9fWAuXHJcbiAgICAgKlxyXG4gICAgICogUHJvcGVydGllcyB0aGF0IGFyZSBub3QgcHJlc2VudCB0YWtlIHRoZSBIYW1tZXJKUyBkZWZhdWx0IHZhbHVlcy5cclxuICAgICAqIEZvciBpbmZvcm1hdGlvbiBhYm91dCB3aGljaCBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgZm9yIHdoaWNoIGV2ZW50cyxcclxuICAgICAqIGFuZCB0aGVpciBhbGxvd2VkIGFuZCBkZWZhdWx0IHZhbHVlcywgc2VlXHJcbiAgICAgKiBbSGFtbWVySlMgZG9jdW1lbnRhdGlvbl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogT2JqZWN0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUHJvcGVydGllcyB3aG9zZSBkZWZhdWx0IHZhbHVlcyBjYW4gYmUgb3ZlcnJpZGRlbiBmb3IgYSBnaXZlbiBldmVudC5cclxuICAgICAqIERpZmZlcmVudCBzZXRzIG9mIHByb3BlcnRpZXMgYXBwbHkgdG8gZGlmZmVyZW50IGV2ZW50cy5cclxuICAgICAqIEZvciBpbmZvcm1hdGlvbiBhYm91dCB3aGljaCBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgZm9yIHdoaWNoIGV2ZW50cyxcclxuICAgICAqIGFuZCB0aGVpciBhbGxvd2VkIGFuZCBkZWZhdWx0IHZhbHVlcywgc2VlXHJcbiAgICAgKiBbSGFtbWVySlMgZG9jdW1lbnRhdGlvbl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAgIGNzc1Byb3BzPzogYW55O1xyXG4gICAgICAgIGRvbUV2ZW50cz86IGJvb2xlYW47XHJcbiAgICAgICAgZW5hYmxlPzogYm9vbGVhbiB8ICgobWFuYWdlcjogYW55KSA9PiBib29sZWFuKTtcclxuICAgICAgICBwcmVzZXQ/OiBhbnlbXTtcclxuICAgICAgICB0b3VjaEFjdGlvbj86IHN0cmluZztcclxuICAgICAgICByZWNvZ25pemVycz86IGFueVtdO1xyXG4gICAgICAgIGlucHV0Q2xhc3M/OiBhbnk7XHJcbiAgICAgICAgaW5wdXRUYXJnZXQ/OiBFdmVudFRhcmdldDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBbSGFtbWVySlMgTWFuYWdlcl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9hcGkvI2hhbW1lci5tYW5hZ2VyKVxyXG4gICAgICogYW5kIGF0dGFjaGVzIGl0IHRvIGEgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIHJlY29nbml6ZSBnZXN0dXJlcy5cclxuICAgICAqIEByZXR1cm5zIEEgSGFtbWVySlMgZXZlbnQtbWFuYWdlciBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2U7XHJcbn1cclxuXHJcbmRlY2xhcmUgaW50ZXJmYWNlIEhhbW1lckluc3RhbmNlIHtcclxuICAgIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZDtcclxuICAgIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XHJcbiAgICBkZXN0cm95PygpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdGhhdCBsb2FkcyBIYW1tZXJKUywgcmV0dXJuaW5nIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIG9uY2UgSGFtbWVySnMgaXMgbG9hZGVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIEhhbW1lckxvYWRlciA9ICgpID0+IFByb21pc2U8dm9pZD47XHJcblxyXG4vKipcclxuICogQWRkcyBzdXBwb3J0IGZvciBIYW1tZXJKUy5cclxuICpcclxuICogSW1wb3J0IHRoaXMgbW9kdWxlIGF0IHRoZSByb290IG9mIHlvdXIgYXBwbGljYXRpb24gc28gdGhhdCBBbmd1bGFyIGNhbiB3b3JrIHdpdGhcclxuICogSGFtbWVySlMgdG8gZGV0ZWN0IGdlc3R1cmUgZXZlbnRzLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYXBwbGljYXRpb25zIHN0aWxsIG5lZWQgdG8gaW5jbHVkZSB0aGUgSGFtbWVySlMgc2NyaXB0IGl0c2VsZi4gVGhpcyBtb2R1bGVcclxuICogc2ltcGx5IHNldHMgdXAgdGhlIGNvb3JkaW5hdGlvbiBsYXllciBiZXR3ZWVuIEhhbW1lckpTIGFuZCBBbmd1bGFyJ3MgRXZlbnRNYW5hZ2VyLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIYW1tZXJNb2R1bGUge1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgYFN0YXRlS2V5PFQ+YCB0aGF0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIHZhbHVlIG9mIHR5cGUgVCB3aXRoIGBUcmFuc2ZlclN0YXRlYC5cclxuICpcclxuICogRXhhbXBsZTpcclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IENPVU5URVJfS0VZID0gbWFrZVN0YXRlS2V5PG51bWJlcj4oJ2NvdW50ZXInKTtcclxuICogbGV0IHZhbHVlID0gMTA7XHJcbiAqXHJcbiAqIHRyYW5zZmVyU3RhdGUuc2V0KENPVU5URVJfS0VZLCB2YWx1ZSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBtYWtlU3RhdGVLZXk8VCA9IHZvaWQ+KGtleTogc3RyaW5nKTogU3RhdGVLZXk8VD47XHJcblxyXG4vKipcclxuICogQSBzZXJ2aWNlIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGFuZCBhZGQgbWV0YSB0YWdzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNZXRhIHtcclxuICAgIHByaXZhdGUgX2RvYztcclxuICAgIHByaXZhdGUgX2RvbTtcclxuICAgIGNvbnN0cnVjdG9yKF9kb2M6IGFueSk7XHJcbiAgICBhZGRUYWcodGFnOiBNZXRhRGVmaW5pdGlvbiwgZm9yY2VDcmVhdGlvbj86IGJvb2xlYW4pOiBIVE1MTWV0YUVsZW1lbnQgfCBudWxsO1xyXG4gICAgYWRkVGFncyh0YWdzOiBNZXRhRGVmaW5pdGlvbltdLCBmb3JjZUNyZWF0aW9uPzogYm9vbGVhbik6IEhUTUxNZXRhRWxlbWVudFtdO1xyXG4gICAgZ2V0VGFnKGF0dHJTZWxlY3Rvcjogc3RyaW5nKTogSFRNTE1ldGFFbGVtZW50IHwgbnVsbDtcclxuICAgIGdldFRhZ3MoYXR0clNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MTWV0YUVsZW1lbnRbXTtcclxuICAgIHVwZGF0ZVRhZyh0YWc6IE1ldGFEZWZpbml0aW9uLCBzZWxlY3Rvcj86IHN0cmluZyk6IEhUTUxNZXRhRWxlbWVudCB8IG51bGw7XHJcbiAgICByZW1vdmVUYWcoYXR0clNlbGVjdG9yOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcmVtb3ZlVGFnRWxlbWVudChtZXRhOiBIVE1MTWV0YUVsZW1lbnQpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfZ2V0T3JDcmVhdGVFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfc2V0TWV0YUVsZW1lbnRBdHRyaWJ1dGVzO1xyXG4gICAgcHJpdmF0ZSBfcGFyc2VTZWxlY3RvcjtcclxuICAgIHByaXZhdGUgX2NvbnRhaW5zQXR0cmlidXRlcztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgbWV0YSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE1ldGFEZWZpbml0aW9uID0ge1xyXG4gICAgY2hhcnNldD86IHN0cmluZztcclxuICAgIGNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICBodHRwRXF1aXY/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGl0ZW1wcm9wPzogc3RyaW5nO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHByb3BlcnR5Pzogc3RyaW5nO1xyXG4gICAgc2NoZW1lPzogc3RyaW5nO1xyXG4gICAgdXJsPzogc3RyaW5nO1xyXG59ICYge1xyXG4gICAgW3Byb3A6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBwbGF0Zm9ybUJyb3dzZXI6IChleHRyYVByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW10pID0+IFBsYXRmb3JtUmVmO1xyXG5cclxuLyoqXHJcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIEhUTUwuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTYWZlSHRtbCBleHRlbmRzIFNhZmVWYWx1ZSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBhIFVSTCB0byBsb2FkIGV4ZWN1dGFibGUgY29kZSBmcm9tLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU2FmZVJlc291cmNlVXJsIGV4dGVuZHMgU2FmZVZhbHVlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIEphdmFTY3JpcHQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTYWZlU2NyaXB0IGV4dGVuZHMgU2FmZVZhbHVlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIHN0eWxlIChDU1MpLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU2FmZVN0eWxlIGV4dGVuZHMgU2FmZVZhbHVlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIGEgVVJMIGxpbmtpbmcgdG8gYSBkb2N1bWVudC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFNhZmVVcmwgZXh0ZW5kcyBTYWZlVmFsdWUge1xyXG59XHJcblxyXG4vKipcclxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgaW4gYSBwYXJ0aWN1bGFyIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTYWZlVmFsdWUge1xyXG59XHJcblxyXG4vKipcclxuICogQSB0eXBlLXNhZmUga2V5IHRvIHVzZSB3aXRoIGBUcmFuc2ZlclN0YXRlYC5cclxuICpcclxuICogRXhhbXBsZTpcclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IENPVU5URVJfS0VZID0gbWFrZVN0YXRlS2V5PG51bWJlcj4oJ2NvdW50ZXInKTtcclxuICogbGV0IHZhbHVlID0gMTA7XHJcbiAqXHJcbiAqIHRyYW5zZmVyU3RhdGUuc2V0KENPVU5URVJfS0VZLCB2YWx1ZSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN0YXRlS2V5PFQ+ID0gc3RyaW5nICYge1xyXG4gICAgX19ub3RfYV9zdHJpbmc6IG5ldmVyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgc2VydmljZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGdldCBhbmQgc2V0IHRoZSB0aXRsZSBvZiBhIGN1cnJlbnQgSFRNTCBkb2N1bWVudC5cclxuICpcclxuICogU2luY2UgYW4gQW5ndWxhciBhcHBsaWNhdGlvbiBjYW4ndCBiZSBib290c3RyYXBwZWQgb24gdGhlIGVudGlyZSBIVE1MIGRvY3VtZW50IChgPGh0bWw+YCB0YWcpXHJcbiAqIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBiaW5kIHRvIHRoZSBgdGV4dGAgcHJvcGVydHkgb2YgdGhlIGBIVE1MVGl0bGVFbGVtZW50YCBlbGVtZW50c1xyXG4gKiAocmVwcmVzZW50aW5nIHRoZSBgPHRpdGxlPmAgdGFnKS4gSW5zdGVhZCwgdGhpcyBzZXJ2aWNlIGNhbiBiZSB1c2VkIHRvIHNldCBhbmQgZ2V0IHRoZSBjdXJyZW50XHJcbiAqIHRpdGxlIHZhbHVlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUaXRsZSB7XHJcbiAgICBwcml2YXRlIF9kb2M7XHJcbiAgICBjb25zdHJ1Y3RvcihfZG9jOiBhbnkpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRpdGxlIG9mIHRoZSBjdXJyZW50IEhUTUwgZG9jdW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGdldFRpdGxlKCk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSB0aXRsZSBvZiB0aGUgY3VycmVudCBIVE1MIGRvY3VtZW50LlxyXG4gICAgICogQHBhcmFtIG5ld1RpdGxlXHJcbiAgICAgKi9cclxuICAgIHNldFRpdGxlKG5ld1RpdGxlOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBrZXkgdmFsdWUgc3RvcmUgdGhhdCBpcyB0cmFuc2ZlcnJlZCBmcm9tIHRoZSBhcHBsaWNhdGlvbiBvbiB0aGUgc2VydmVyIHNpZGUgdG8gdGhlIGFwcGxpY2F0aW9uXHJcbiAqIG9uIHRoZSBjbGllbnQgc2lkZS5cclxuICpcclxuICogYFRyYW5zZmVyU3RhdGVgIHdpbGwgYmUgYXZhaWxhYmxlIGFzIGFuIGluamVjdGFibGUgdG9rZW4uIFRvIHVzZSBpdCBpbXBvcnRcclxuICogYFNlcnZlclRyYW5zZmVyU3RhdGVNb2R1bGVgIG9uIHRoZSBzZXJ2ZXIgYW5kIGBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZWAgb24gdGhlIGNsaWVudC5cclxuICpcclxuICogVGhlIHZhbHVlcyBpbiB0aGUgc3RvcmUgYXJlIHNlcmlhbGl6ZWQvZGVzZXJpYWxpemVkIHVzaW5nIEpTT04uc3RyaW5naWZ5L0pTT04ucGFyc2UuIFNvIG9ubHlcclxuICogYm9vbGVhbiwgbnVtYmVyLCBzdHJpbmcsIG51bGwgYW5kIG5vbi1jbGFzcyBvYmplY3RzIHdpbGwgYmUgc2VyaWFsaXplZCBhbmQgZGVzZXJpYWx6aWVkIGluIGFcclxuICogbm9uLWxvc3N5IG1hbm5lci5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVHJhbnNmZXJTdGF0ZSB7XHJcbiAgICBwcml2YXRlIHN0b3JlO1xyXG4gICAgcHJpdmF0ZSBvblNlcmlhbGl6ZUNhbGxiYWNrcztcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIGEga2V5LiBSZXR1cm4gYGRlZmF1bHRWYWx1ZWAgaWYga2V5IGlzIG5vdCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgZ2V0PFQ+KGtleTogU3RhdGVLZXk8VD4sIGRlZmF1bHRWYWx1ZTogVCk6IFQ7XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgdmFsdWUgY29ycmVzcG9uZGluZyB0byBhIGtleS5cclxuICAgICAqL1xyXG4gICAgc2V0PFQ+KGtleTogU3RhdGVLZXk8VD4sIHZhbHVlOiBUKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEga2V5IGZyb20gdGhlIHN0b3JlLlxyXG4gICAgICovXHJcbiAgICByZW1vdmU8VD4oa2V5OiBTdGF0ZUtleTxUPik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgd2hldGhlciBhIGtleSBleGlzdHMgaW4gdGhlIHN0b3JlLlxyXG4gICAgICovXHJcbiAgICBoYXNLZXk8VD4oa2V5OiBTdGF0ZUtleTxUPik6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gcHJvdmlkZSB0aGUgdmFsdWUgZm9yIGEga2V5IHdoZW4gYHRvSnNvbmAgaXMgY2FsbGVkLlxyXG4gICAgICovXHJcbiAgICBvblNlcmlhbGl6ZTxUPihrZXk6IFN0YXRlS2V5PFQ+LCBjYWxsYmFjazogKCkgPT4gVCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZSB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc3RvcmUgdG8gSlNPTi5cclxuICAgICAqL1xyXG4gICAgdG9Kc29uKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFZFUlNJT046IFZlcnNpb247XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2EoKTogRXJyb3JIYW5kbGVyO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9iKCk6IGFueTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfYzogU3RhdGljUHJvdmlkZXJbXTtcclxuXHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGNyZWF0ZSBNZXRhIHNlcnZpY2UuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2QoKTogTWV0YTtcclxuXHJcblxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgVGl0bGUgc2VydmljZS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfZSgpOiBUaXRsZTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfZihkb2M6IERvY3VtZW50LCBhcHBJZDogc3RyaW5nKTogVHJhbnNmZXJTdGF0ZTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfZyB7XHJcbiAgICBwcml2YXRlIF9kb2M7XHJcbiAgICBjb25zdHJ1Y3RvcihfZG9jOiBhbnkpO1xyXG4gICAgbWFuYWdlcjogRXZlbnRNYW5hZ2VyO1xyXG4gICAgYWJzdHJhY3Qgc3VwcG9ydHMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb247XHJcbiAgICBhZGRHbG9iYWxFdmVudExpc3RlbmVyKGVsZW1lbnQ6IHN0cmluZywgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbiBWaWV3IEVuZ2luZSwgc3VwcG9ydCBmb3IgSGFtbWVyIGdlc3R1cmVzIGlzIGJ1aWx0LWluIGJ5IGRlZmF1bHQuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2g6IFByb3ZpZGVyW107XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2k6IFByb3ZpZGVyW107XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2ooaW5qZWN0b3I6IEluamVjdG9yKTogybVEb21TYW5pdGl6ZXJJbXBsO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9rKHRyYW5zaXRpb25JZDogc3RyaW5nLCBkb2N1bWVudDogYW55LCBpbmplY3RvcjogSW5qZWN0b3IpOiAoKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9sOiBTdGF0aWNQcm92aWRlcltdO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9tKGNvcmVUb2tlbnM6IE5nUHJvYmVUb2tlbltdKTogYW55O1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVycyB3aGljaCBzdXBwb3J0IGRlYnVnZ2luZyBBbmd1bGFyIGFwcGxpY2F0aW9ucyAoZS5nLiB2aWEgYG5nLnByb2JlYCkuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX246IFByb3ZpZGVyW107XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgRE9NIG9wZXJhdGlvbnMgaW4gYW55IGJyb3dzZXIgZW52aXJvbm1lbnQuXHJcbiAqXHJcbiAqIEBzZWN1cml0eSBUcmVhZCBjYXJlZnVsbHkhIEludGVyYWN0aW5nIHdpdGggdGhlIERPTSBkaXJlY3RseSBpcyBkYW5nZXJvdXMgYW5kXHJcbiAqIGNhbiBpbnRyb2R1Y2UgWFNTIHJpc2tzLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9vIGV4dGVuZHMgybVEb21BZGFwdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbiAgICBzdXBwb3J0c0RPTUV2ZW50cygpOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQHNlY3VyaXR5IFJlcGxhY2luZyBidWlsdC1pbiBzYW5pdGl6YXRpb24gcHJvdmlkZXJzIGV4cG9zZXMgdGhlIGFwcGxpY2F0aW9uIHRvIFhTUyByaXNrcy5cclxuICogQXR0YWNrZXItY29udHJvbGxlZCBkYXRhIGludHJvZHVjZWQgYnkgYW4gdW5zYW5pdGl6ZWQgcHJvdmlkZXIgY291bGQgZXhwb3NlIHlvdXJcclxuICogYXBwbGljYXRpb24gdG8gWFNTIHJpc2tzLiBGb3IgbW9yZSBkZXRhaWwsIHNlZSB0aGUgW1NlY3VyaXR5IEd1aWRlXShodHRwOi8vZy5jby9uZy9zZWN1cml0eSkuXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1QlJPV1NFUl9TQU5JVElaQVRJT05fUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVCUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlNfX1BPU1RfUjNfXzogbmV2ZXJbXTtcclxuXHJcbi8qKlxyXG4gKiBBIGBEb21BZGFwdGVyYCBwb3dlcmVkIGJ5IGZ1bGwgYnJvd3NlciBET00gQVBJcy5cclxuICpcclxuICogQHNlY3VyaXR5IFRyZWFkIGNhcmVmdWxseSEgSW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIGRpcmVjdGx5IGlzIGRhbmdlcm91cyBhbmRcclxuICogY2FuIGludHJvZHVjZSBYU1Mgcmlza3MuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUJyb3dzZXJEb21BZGFwdGVyIGV4dGVuZHMgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9vIHtcclxuICAgIHN0YXRpYyBtYWtlQ3VycmVudCgpOiB2b2lkO1xyXG4gICAgZ2V0UHJvcGVydHkoZWw6IE5vZGUsIG5hbWU6IHN0cmluZyk6IGFueTtcclxuICAgIGxvZyhlcnJvcjogc3RyaW5nKTogdm9pZDtcclxuICAgIGxvZ0dyb3VwKGVycm9yOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgbG9nR3JvdXBFbmQoKTogdm9pZDtcclxuICAgIG9uQW5kQ2FuY2VsKGVsOiBOb2RlLCBldnQ6IGFueSwgbGlzdGVuZXI6IGFueSk6IEZ1bmN0aW9uO1xyXG4gICAgZGlzcGF0Y2hFdmVudChlbDogTm9kZSwgZXZ0OiBhbnkpOiB2b2lkO1xyXG4gICAgcmVtb3ZlKG5vZGU6IE5vZGUpOiBOb2RlO1xyXG4gICAgZ2V0VmFsdWUoZWw6IGFueSk6IHN0cmluZztcclxuICAgIGNyZWF0ZUVsZW1lbnQodGFnTmFtZTogc3RyaW5nLCBkb2M/OiBEb2N1bWVudCk6IEhUTUxFbGVtZW50O1xyXG4gICAgY3JlYXRlSHRtbERvY3VtZW50KCk6IEhUTUxEb2N1bWVudDtcclxuICAgIGdldERlZmF1bHREb2N1bWVudCgpOiBEb2N1bWVudDtcclxuICAgIGlzRWxlbWVudE5vZGUobm9kZTogTm9kZSk6IGJvb2xlYW47XHJcbiAgICBpc1NoYWRvd1Jvb3Qobm9kZTogYW55KTogYm9vbGVhbjtcclxuICAgIGdldEdsb2JhbEV2ZW50VGFyZ2V0KGRvYzogRG9jdW1lbnQsIHRhcmdldDogc3RyaW5nKTogRXZlbnRUYXJnZXQgfCBudWxsO1xyXG4gICAgZ2V0SGlzdG9yeSgpOiBIaXN0b3J5O1xyXG4gICAgZ2V0TG9jYXRpb24oKTogTG9jYXRpb247XHJcbiAgICBnZXRCYXNlSHJlZihkb2M6IERvY3VtZW50KTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlc2V0QmFzZUVsZW1lbnQoKTogdm9pZDtcclxuICAgIGdldFVzZXJBZ2VudCgpOiBzdHJpbmc7XHJcbiAgICBwZXJmb3JtYW5jZU5vdygpOiBudW1iZXI7XHJcbiAgICBzdXBwb3J0c0Nvb2tpZXMoKTogYm9vbGVhbjtcclxuICAgIGdldENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUJyb3dzZXJHZXRUZXN0YWJpbGl0eSBpbXBsZW1lbnRzIEdldFRlc3RhYmlsaXR5IHtcclxuICAgIHN0YXRpYyBpbml0KCk6IHZvaWQ7XHJcbiAgICBhZGRUb1dpbmRvdyhyZWdpc3RyeTogVGVzdGFiaWxpdHlSZWdpc3RyeSk6IHZvaWQ7XHJcbiAgICBmaW5kVGVzdGFiaWxpdHlJblRyZWUocmVnaXN0cnk6IFRlc3RhYmlsaXR5UmVnaXN0cnksIGVsZW06IGFueSwgZmluZEluQW5jZXN0b3JzOiBib29sZWFuKTogVGVzdGFiaWxpdHkgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtURvbUV2ZW50c1BsdWdpbiBleHRlbmRzIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2M6IGFueSk7XHJcbiAgICBzdXBwb3J0cyhldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbjtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodGFyZ2V0OiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtURvbVJlbmRlcmVyRmFjdG9yeTIgaW1wbGVtZW50cyBSZW5kZXJlckZhY3RvcnkyIHtcclxuICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzaGFyZWRTdHlsZXNIb3N0O1xyXG4gICAgcHJpdmF0ZSBhcHBJZDtcclxuICAgIHByaXZhdGUgcmVuZGVyZXJCeUNvbXBJZDtcclxuICAgIHByaXZhdGUgZGVmYXVsdFJlbmRlcmVyO1xyXG4gICAgY29uc3RydWN0b3IoZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsIHNoYXJlZFN0eWxlc0hvc3Q6IMm1RG9tU2hhcmVkU3R5bGVzSG9zdCwgYXBwSWQ6IHN0cmluZyk7XHJcbiAgICBjcmVhdGVSZW5kZXJlcihlbGVtZW50OiBhbnksIHR5cGU6IFJlbmRlcmVyVHlwZTIgfCBudWxsKTogUmVuZGVyZXIyO1xyXG4gICAgYmVnaW4oKTogdm9pZDtcclxuICAgIGVuZCgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtURvbVNhbml0aXplckltcGwgZXh0ZW5kcyBEb21TYW5pdGl6ZXIge1xyXG4gICAgcHJpdmF0ZSBfZG9jO1xyXG4gICAgY29uc3RydWN0b3IoX2RvYzogYW55KTtcclxuICAgIHNhbml0aXplKGN0eDogU2VjdXJpdHlDb250ZXh0LCB2YWx1ZTogU2FmZVZhbHVlIHwgc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB8IG51bGw7XHJcbiAgICBieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZTogc3RyaW5nKTogU2FmZUh0bWw7XHJcbiAgICBieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWU6IHN0cmluZyk6IFNhZmVTdHlsZTtcclxuICAgIGJ5cGFzc1NlY3VyaXR5VHJ1c3RTY3JpcHQodmFsdWU6IHN0cmluZyk6IFNhZmVTY3JpcHQ7XHJcbiAgICBieXBhc3NTZWN1cml0eVRydXN0VXJsKHZhbHVlOiBzdHJpbmcpOiBTYWZlVXJsO1xyXG4gICAgYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlOiBzdHJpbmcpOiBTYWZlUmVzb3VyY2VVcmw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1RG9tU2hhcmVkU3R5bGVzSG9zdCBleHRlbmRzIMm1U2hhcmVkU3R5bGVzSG9zdCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIF9kb2M7XHJcbiAgICBwcml2YXRlIF9ob3N0Tm9kZXM7XHJcbiAgICBwcml2YXRlIF9zdHlsZU5vZGVzO1xyXG4gICAgY29uc3RydWN0b3IoX2RvYzogYW55KTtcclxuICAgIHByaXZhdGUgX2FkZFN0eWxlc1RvSG9zdDtcclxuICAgIGFkZEhvc3QoaG9zdE5vZGU6IE5vZGUpOiB2b2lkO1xyXG4gICAgcmVtb3ZlSG9zdChob3N0Tm9kZTogTm9kZSk6IHZvaWQ7XHJcbiAgICBvblN0eWxlc0FkZGVkKGFkZGl0aW9uczogU2V0PHN0cmluZz4pOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVFTEVNRU5UX1BST0JFX1BST1ZJREVSUzogUHJvdmlkZXJbXTtcclxuXHJcbi8qKlxyXG4gKiBJbiBJdnksIHdlIGRvbid0IHN1cHBvcnQgTmdQcm9iZSBiZWNhdXNlIHdlIGhhdmUgb3VyIG93biBzZXQgb2YgdGVzdGluZyB1dGlsaXRpZXNcclxuICogd2l0aCBtb3JlIHJvYnVzdCBmdW5jdGlvbmFsaXR5LlxyXG4gKlxyXG4gKiBXZSBzaG91bGRuJ3QgYnJpbmcgaW4gTmdQcm9iZSBiZWNhdXNlIGl0IHByZXZlbnRzIERlYnVnTm9kZSBhbmQgZnJpZW5kcyBmcm9tXHJcbiAqIHRyZWUtc2hha2luZyBwcm9wZXJseS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1RUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfX1BPU1RfUjNfXzogbmV2ZXJbXTtcclxuXHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWVzY2FwZUh0bWwodGV4dDogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVmbGF0dGVuU3R5bGVzKGNvbXBJZDogc3RyaW5nLCBzdHlsZXM6IEFycmF5PGFueSB8IGFueVtdPiwgdGFyZ2V0OiBzdHJpbmdbXSk6IHN0cmluZ1tdO1xyXG5leHBvcnQgeyDJtWdldERPTSB9XHJcblxyXG4vKipcclxuICogSW4gSXZ5LCBzdXBwb3J0IGZvciBIYW1tZXIgZ2VzdHVyZXMgaXMgb3B0aW9uYWwsIHNvIGFwcGxpY2F0aW9ucyBtdXN0XHJcbiAqIGltcG9ydCB0aGUgYEhhbW1lck1vZHVsZWAgYXQgcm9vdCB0byB0dXJuIG9uIHN1cHBvcnQuIFRoaXMgbWVhbnMgdGhhdFxyXG4gKiBIYW1tZXItc3BlY2lmaWMgY29kZSBjYW4gYmUgdHJlZS1zaGFrZW4gYXdheSBpZiBub3QgbmVlZGVkLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVIQU1NRVJfUFJPVklERVJTX19QT1NUX1IzX186IG5ldmVyW107XHJcblxyXG4vKipcclxuICogRXZlbnQgcGx1Z2luIHRoYXQgYWRkcyBIYW1tZXIgc3VwcG9ydCB0byBhbiBhcHBsaWNhdGlvbi5cclxuICpcclxuICogQG5nTW9kdWxlIEhhbW1lck1vZHVsZVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVIYW1tZXJHZXN0dXJlc1BsdWdpbiBleHRlbmRzIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfZyB7XHJcbiAgICBwcml2YXRlIF9jb25maWc7XHJcbiAgICBwcml2YXRlIGNvbnNvbGU7XHJcbiAgICBwcml2YXRlIGxvYWRlcj87XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2M6IGFueSwgX2NvbmZpZzogSGFtbWVyR2VzdHVyZUNvbmZpZywgY29uc29sZTogybVDb25zb2xlLCBsb2FkZXI/OiBIYW1tZXJMb2FkZXIgfCBudWxsIHwgdW5kZWZpbmVkKTtcclxuICAgIHN1cHBvcnRzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xyXG4gICAgaXNDdXN0b21FdmVudChldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1aW5pdERvbUFkYXB0ZXIoKTogdm9pZDtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1SU5URVJOQUxfQlJPV1NFUl9QTEFURk9STV9QUk9WSURFUlM6IFN0YXRpY1Byb3ZpZGVyW107XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBBIGJyb3dzZXIgcGx1Zy1pbiB0aGF0IHByb3ZpZGVzIHN1cHBvcnQgZm9yIGhhbmRsaW5nIG9mIGtleSBldmVudHMgaW4gQW5ndWxhci5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1S2V5RXZlbnRzUGx1Z2luIGV4dGVuZHMgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9nIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGJyb3dzZXIgcGx1Zy1pbi5cclxuICAgICAqIEBwYXJhbSBkb2MgVGhlIGRvY3VtZW50IGluIHdoaWNoIGtleSBldmVudHMgd2lsbCBiZSBkZXRlY3RlZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZG9jOiBhbnkpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIHdoZXRoZXIgYSBuYW1lZCBrZXkgZXZlbnQgaXMgc3VwcG9ydGVkLlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSBUaGUgZXZlbnQgbmFtZSB0byBxdWVyeS5cclxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgbmFtZWQga2V5IGV2ZW50IGlzIHN1cHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgc3VwcG9ydHMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGVsZW1lbnQgYW5kIGtleSBldmVudC5cclxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBIVE1MIGVsZW1lbnQgdG8gcmVjZWl2ZSBldmVudCBub3RpZmljYXRpb25zLlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUga2V5IGV2ZW50IHRvIGxpc3RlbiBmb3IuXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgbm90aWZpY2F0aW9uIG9jY3Vycy4gUmVjZWl2ZXMgdGhlXHJcbiAgICAgKiBldmVudCBvYmplY3QgYXMgYW4gYXJndW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUga2V5IGV2ZW50IHRoYXQgd2FzIHJlZ2lzdGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xyXG4gICAgc3RhdGljIHBhcnNlRXZlbnROYW1lKGV2ZW50TmFtZTogc3RyaW5nKToge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH0gfCBudWxsO1xyXG4gICAgc3RhdGljIGdldEV2ZW50RnVsbEtleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBhIGhhbmRsZXIgY2FsbGJhY2sgZm9yIGEga2V5IGV2ZW50LlxyXG4gICAgICogQHBhcmFtIGZ1bGxLZXkgVGhlIGV2ZW50IG5hbWUgdGhhdCBjb21iaW5lcyBhbGwgc2ltdWx0YW5lb3VzIGtleXN0cm9rZXMuXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBUaGUgZnVuY3Rpb24gdGhhdCByZXNwb25kcyB0byB0aGUga2V5IGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHpvbmUgVGhlIHpvbmUgaW4gd2hpY2ggdGhlIGV2ZW50IG9jY3VycmVkLlxyXG4gICAgICogQHJldHVybnMgQSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGV2ZW50Q2FsbGJhY2soZnVsbEtleTogYW55LCBoYW5kbGVyOiBGdW5jdGlvbiwgem9uZTogTmdab25lKTogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1TkFNRVNQQUNFX1VSSVM6IHtcclxuICAgIFtuczogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVTaGFyZWRTdHlsZXNIb3N0IHtcclxuICAgIGFkZFN0eWxlcyhzdHlsZXM6IHN0cmluZ1tdKTogdm9pZDtcclxuICAgIG9uU3R5bGVzQWRkZWQoYWRkaXRpb25zOiBTZXQ8c3RyaW5nPik6IHZvaWQ7XHJcbiAgICBnZXRBbGxTdHlsZXMoKTogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1c2hpbUNvbnRlbnRBdHRyaWJ1dGUoY29tcG9uZW50U2hvcnRJZDogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVzaGltSG9zdEF0dHJpYnV0ZShjb21wb25lbnRTaG9ydElkOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogQW4gaWQgdGhhdCBpZGVudGlmaWVzIGEgcGFydGljdWxhciBhcHBsaWNhdGlvbiBiZWluZyBib290c3RyYXBwZWQsIHRoYXQgc2hvdWxkXHJcbiAqIG1hdGNoIGFjcm9zcyB0aGUgY2xpZW50L3NlcnZlciBib3VuZGFyeS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1VFJBTlNJVElPTl9JRDogSW5qZWN0aW9uVG9rZW48dW5rbm93bj47XHJcblxyXG5leHBvcnQgeyB9XHJcbiJdfQ==