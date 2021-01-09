/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */
export { createPlatform, assertPlatform, destroyPlatform, getPlatform, PlatformRef, ApplicationRef, createPlatformFactory, NgProbeToken, enableProdMode, isDevMode, APP_ID, PACKAGE_ROOT_URL, PLATFORM_INITIALIZER, PLATFORM_ID, APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ApplicationInitStatus, DebugElement, DebugEventListener, DebugNode, asNativeElements, getDebugNode, Testability, TestabilityRegistry, setTestabilityGetter, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, DEFAULT_CURRENCY_CODE, MissingTranslationStrategy, ApplicationModule, Type, EventEmitter, ErrorHandler, SecurityContext, Sanitizer, Attribute, ANALYZE_FOR_ENTRY_COMPONENTS, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ViewEncapsulation, Version, VERSION, InjectFlags, ɵɵdefineInjectable, defineInjectable, ɵɵdefineInjector, forwardRef, resolveForwardRef, Injectable, Injector, ɵɵinject, inject, INJECTOR, ɵɵinvalidFactoryDep, ReflectiveInjector, ResolvedReflectiveFactory, ReflectiveKey, InjectionToken, Inject, Optional, Self, SkipSelf, Host, NgZone, ɵNoopNgZone, Renderer2, RendererFactory2, RendererStyleFlags2, Compiler, COMPILER_OPTIONS, CompilerFactory, ModuleWithComponentFactories, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, getModuleFactory, NgModuleFactoryLoader, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef, ChangeDetectionStrategy, ChangeDetectorRef, DefaultIterableDiffer, IterableDiffers, KeyValueDiffers, SimpleChange, WrappedValue, platformCore, ɵALLOW_MULTIPLE_PLATFORMS, ɵAPP_ID_RANDOM_PROVIDER, ɵdefaultIterableDiffers, ɵdefaultKeyValueDiffers, ɵdevModeEqual, ɵisListLikeIterable, ɵChangeDetectorStatus, ɵisDefaultChangeDetectionStrategy, ɵConsole, ɵgetDebugNodeR2, ɵsetCurrentInjector, ɵgetInjectableDef, ɵINJECTOR_SCOPE, ɵfindLocaleData, ɵgetLocaleCurrencyCode, ɵgetLocalePluralCase, ɵLocaleDataIndex, ɵregisterLocaleData, ɵunregisterLocaleData, ɵDEFAULT_LOCALE_ID, ɵivyEnabled, ɵComponentFactory, ɵCodegenComponentFactoryResolver, ɵclearResolutionOfComponentResourcesQueue, ɵresolveComponentResources, ɵReflectionCapabilities, ɵallowSanitizationBypassAndThrow, ɵgetSanitizationBypassType, ɵunwrapSafeValue, ɵ_sanitizeHtml, ɵ_sanitizeStyle, ɵ_sanitizeUrl, ɵlooseIdentical, ɵmakeDecorator, ɵglobal, ɵisObservable, ɵisPromise, ɵstringify, ɵclearOverrides, ɵinitServicesIfNeeded, ɵoverrideComponentView, ɵoverrideProvider, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵcompileNgModuleFactory__POST_R3__, ɵisBoundToModule__POST_R3__, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__, ɵgetDebugNode__POST_R3__, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__, ɵINJECTOR_IMPL__POST_R3__, ɵNG_INJ_DEF, ɵNG_PROV_DEF, ɵcreateInjector, ɵSWITCH_IVY_ENABLED__POST_R3__, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__, ɵCompiler_compileModuleAsync__POST_R3__, ɵCompiler_compileModuleSync__POST_R3__, ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__, ɵgetModuleFactory__POST_R3__, ɵregisterNgModuleType, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__, ɵSWITCH_COMPILE_COMPONENT__POST_R3__, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__, ɵSWITCH_COMPILE_PIPE__POST_R3__, ɵSWITCH_COMPILE_NGMODULE__POST_R3__, ɵSWITCH_RENDERER2_FACTORY__POST_R3__, ɵgetLContext, ɵNG_COMP_DEF, ɵNG_DIR_DEF, ɵNG_ELEMENT_ID, ɵNG_MOD_DEF, ɵNG_PIPE_DEF, ɵRender3ComponentFactory, ɵRender3ComponentRef, ɵdetectChanges, ɵgetDirectives, ɵgetHostElement, ɵLifecycleHooksFeature, ɵmarkDirty, ɵNgModuleFactory, ɵRender3NgModuleRef, ɵNO_CHANGE, ɵrenderComponent, ɵsetClassMetadata, ɵsetLocaleId, ɵstore, ɵwhenRendered, ɵɵadvance, ɵɵattribute, ɵɵattributeInterpolate1, ɵɵattributeInterpolate2, ɵɵattributeInterpolate3, ɵɵattributeInterpolate4, ɵɵattributeInterpolate5, ɵɵattributeInterpolate6, ɵɵattributeInterpolate7, ɵɵattributeInterpolate8, ɵɵattributeInterpolateV, ɵɵclassMap, ɵɵclassMapInterpolate1, ɵɵclassMapInterpolate2, ɵɵclassMapInterpolate3, ɵɵclassMapInterpolate4, ɵɵclassMapInterpolate5, ɵɵclassMapInterpolate6, ɵɵclassMapInterpolate7, ɵɵclassMapInterpolate8, ɵɵclassMapInterpolateV, ɵɵclassProp, ɵɵcomponentHostSyntheticListener, ɵɵcontentQuery, ɵɵCopyDefinitionFeature, ɵɵdefineComponent, ɵɵdefineDirective, ɵɵdefineNgModule, ɵɵdefinePipe, ɵɵdirectiveInject, ɵɵdisableBindings, ɵɵelement, ɵɵelementContainer, ɵɵelementContainerEnd, ɵɵelementContainerStart, ɵɵelementEnd, ɵɵelementStart, ɵɵenableBindings, ɵɵgetCurrentView, ɵɵgetFactoryOf, ɵɵgetInheritedFactory, ɵɵhostProperty, ɵɵi18n, ɵɵi18nApply, ɵɵi18nAttributes, ɵɵi18nEnd, ɵɵi18nExp, ɵɵi18nPostprocess, ɵɵi18nStart, ɵɵInheritDefinitionFeature, ɵɵinjectAttribute, ɵɵinjectPipeChangeDetectorRef, ɵɵinvalidFactory, ɵɵlistener, ɵɵloadQuery, ɵɵnamespaceHTML, ɵɵnamespaceMathML, ɵɵnamespaceSVG, ɵɵnextContext, ɵɵNgOnChangesFeature, ɵɵpipe, ɵɵpipeBind1, ɵɵpipeBind2, ɵɵpipeBind3, ɵɵpipeBind4, ɵɵpipeBindV, ɵɵprojection, ɵɵprojectionDef, ɵɵproperty, ɵɵpropertyInterpolate, ɵɵpropertyInterpolate1, ɵɵpropertyInterpolate2, ɵɵpropertyInterpolate3, ɵɵpropertyInterpolate4, ɵɵpropertyInterpolate5, ɵɵpropertyInterpolate6, ɵɵpropertyInterpolate7, ɵɵpropertyInterpolate8, ɵɵpropertyInterpolateV, ɵɵProvidersFeature, ɵɵpureFunction0, ɵɵpureFunction1, ɵɵpureFunction2, ɵɵpureFunction3, ɵɵpureFunction4, ɵɵpureFunction5, ɵɵpureFunction6, ɵɵpureFunction7, ɵɵpureFunction8, ɵɵpureFunctionV, ɵɵqueryRefresh, ɵɵreference, ɵɵresolveBody, ɵɵresolveDocument, ɵɵresolveWindow, ɵɵrestoreView, ɵɵselect, ɵɵsetComponentScope, ɵɵsetNgModuleScope, ɵɵstaticContentQuery, ɵɵstaticViewQuery, ɵɵstyleMap, ɵɵstyleMapInterpolate1, ɵɵstyleMapInterpolate2, ɵɵstyleMapInterpolate3, ɵɵstyleMapInterpolate4, ɵɵstyleMapInterpolate5, ɵɵstyleMapInterpolate6, ɵɵstyleMapInterpolate7, ɵɵstyleMapInterpolate8, ɵɵstyleMapInterpolateV, ɵɵstyleProp, ɵɵstylePropInterpolate1, ɵɵstylePropInterpolate2, ɵɵstylePropInterpolate3, ɵɵstylePropInterpolate4, ɵɵstylePropInterpolate5, ɵɵstylePropInterpolate6, ɵɵstylePropInterpolate7, ɵɵstylePropInterpolate8, ɵɵstylePropInterpolateV, ɵɵstyleSanitizer, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵtext, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵtextInterpolate2, ɵɵtextInterpolate3, ɵɵtextInterpolate4, ɵɵtextInterpolate5, ɵɵtextInterpolate6, ɵɵtextInterpolate7, ɵɵtextInterpolate8, ɵɵtextInterpolateV, ɵɵupdateSyntheticHostBinding, ɵɵviewQuery, ɵsetDocument, ɵcompileComponent, ɵcompileDirective, ɵresetJitOptions, ɵcompileNgModule, ɵcompileNgModuleDefs, ɵflushModuleScopingQueueAsMuchAsPossible, ɵpatchComponentDefWithScope, ɵresetCompiledComponents, ɵtransitiveScopesFor, ɵcompilePipe, ɵpublishDefaultGlobalUtils, ɵpublishGlobalUtil, ɵbypassSanitizationTrustHtml, ɵbypassSanitizationTrustResourceUrl, ɵbypassSanitizationTrustScript, ɵbypassSanitizationTrustStyle, ɵbypassSanitizationTrustUrl, ɵɵdefaultStyleSanitizer, ɵɵsanitizeHtml, ɵɵsanitizeResourceUrl, ɵɵsanitizeScript, ɵɵsanitizeStyle, ɵɵsanitizeUrl, ɵɵsanitizeUrlOrResourceUrl, ɵregisterModuleFactory, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵgetComponentViewDefinitionFactory, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpid, ɵprd, ɵpad, ɵpod, ɵppd, ɵqud, ɵted, ɵunv, ɵvid } from './src/core';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvcHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLG1wT0FBYyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIHB1YmxpYyBBUElzIG9mIHRoaXMgcGFja2FnZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZSc7XG5cbi8vIFRoaXMgZmlsZSBvbmx5IHJlZXhwb3J0cyBjb250ZW50IG9mIHRoZSBgc3JjYCBmb2xkZXIuIEtlZXAgaXQgdGhhdCB3YXkuXG4iXX0=