/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/metadata/ng_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵɵdefineInjector } from '../di/interface/defs';
import { convertInjectableProviderToFactory } from '../di/util';
import { compileNgModule as render3CompileNgModule } from '../render3/jit/module';
import { makeDecorator } from '../util/decorators';
/**
 * Represents the expansion of an `NgModule` into its scopes.
 *
 * A scope is a set of directives and pipes that are visible in a particular context. Each
 * `NgModule` has two scopes. The `compilation` scope is the set of directives and pipes that will
 * be recognized in the templates of components declared by the module. The `exported` scope is the
 * set of directives and pipes exported by a module (that is, module B's exported scope gets added
 * to module A's compilation scope when module A imports B).
 * @record
 */
export function NgModuleTransitiveScopes() { }
if (false) {
    /** @type {?} */
    NgModuleTransitiveScopes.prototype.compilation;
    /** @type {?} */
    NgModuleTransitiveScopes.prototype.exported;
    /** @type {?} */
    NgModuleTransitiveScopes.prototype.schemas;
}
/**
 * Runtime link information for NgModules.
 *
 * This is the internal data structure used by the runtime to assemble components, directives,
 * pipes, and injectors.
 *
 * NOTE: Always use `ɵɵdefineNgModule` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 * @record
 * @template T
 */
export function NgModuleDef() { }
if (false) {
    /**
     * Token representing the module. Used by DI.
     * @type {?}
     */
    NgModuleDef.prototype.type;
    /**
     * List of components to bootstrap.
     * @type {?}
     */
    NgModuleDef.prototype.bootstrap;
    /**
     * List of components, directives, and pipes declared by this module.
     * @type {?}
     */
    NgModuleDef.prototype.declarations;
    /**
     * List of modules or `ModuleWithProviders` imported by this module.
     * @type {?}
     */
    NgModuleDef.prototype.imports;
    /**
     * List of modules, `ModuleWithProviders`, components, directives, or pipes exported by this
     * module.
     * @type {?}
     */
    NgModuleDef.prototype.exports;
    /**
     * Cached value of computed `transitiveCompileScopes` for this module.
     *
     * This should never be read directly, but accessed via `transitiveScopesFor`.
     * @type {?}
     */
    NgModuleDef.prototype.transitiveCompileScopes;
    /**
     * The set of schemas that declare elements to be allowed in the NgModule.
     * @type {?}
     */
    NgModuleDef.prototype.schemas;
    /**
     * Unique ID for the module with which it should be registered.
     * @type {?}
     */
    NgModuleDef.prototype.id;
}
/**
 * A wrapper around an NgModule that associates it with the providers.
 *
 * @param T the module type. In Ivy applications, this must be explicitly
 * provided.
 *
 * Note that using ModuleWithProviders without a generic type is deprecated.
 * The generic will become required in a future version of Angular.
 *
 * \@publicApi
 * @record
 * @template T
 */
export function ModuleWithProviders() { }
if (false) {
    /** @type {?} */
    ModuleWithProviders.prototype.ngModule;
    /** @type {?|undefined} */
    ModuleWithProviders.prototype.providers;
}
/**
 * Type of the NgModule decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function NgModuleDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
const ɵ0 = /**
 * @param {?} ngModule
 * @return {?}
 */
(ngModule) => ngModule, ɵ1 = /**
 * Decorator that marks the following class as an NgModule, and supplies
 * configuration metadata for it.
 *
 * * The `declarations` and `entryComponents` options configure the compiler
 * with information about what belongs to the NgModule.
 * * The `providers` options configures the NgModule's injector to provide
 * dependencies the NgModule members.
 * * The `imports` and `exports` options bring in members from other modules, and make
 * this module's members available to others.
 * @param {?} type
 * @param {?} meta
 * @return {?}
 */
(type, meta) => SWITCH_COMPILE_NGMODULE(type, meta);
/**
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const NgModule = makeDecorator('NgModule', (ɵ0), undefined, undefined, (ɵ1));
/**
 * \@description
 * Hook for manual bootstrapping of the application instead of using bootstrap array in \@NgModule
 * annotation.
 *
 * Reference to the current application is provided as a parameter.
 *
 * See ["Bootstrapping"](guide/bootstrapping) and ["Entry components"](guide/entry-components).
 *
 * \@usageNotes
 * ```typescript
 * class AppModule implements DoBootstrap {
 *   ngDoBootstrap(appRef: ApplicationRef) {
 *     appRef.bootstrap(AppComponent); // Or some other component
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */
export function DoBootstrap() { }
if (false) {
    /**
     * @param {?} appRef
     * @return {?}
     */
    DoBootstrap.prototype.ngDoBootstrap = function (appRef) { };
}
/**
 * @param {?} moduleType
 * @param {?=} metadata
 * @return {?}
 */
function preR3NgModuleCompile(moduleType, metadata) {
    /** @type {?} */
    let imports = (metadata && metadata.imports) || [];
    if (metadata && metadata.exports) {
        imports = [...imports, metadata.exports];
    }
    ((/** @type {?} */ (moduleType))).ɵinj = ɵɵdefineInjector({
        factory: convertInjectableProviderToFactory(moduleType, { useClass: moduleType }),
        providers: metadata && metadata.providers,
        imports: imports,
    });
}
/** @type {?} */
export const SWITCH_COMPILE_NGMODULE__POST_R3__ = render3CompileNgModule;
/** @type {?} */
const SWITCH_COMPILE_NGMODULE__PRE_R3__ = preR3NgModuleCompile;
/** @type {?} */
const SWITCH_COMPILE_NGMODULE = SWITCH_COMPILE_NGMODULE__PRE_R3__;
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbWV0YWRhdGEvbmdfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBZSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXBFLE9BQU8sRUFBQyxrQ0FBa0MsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUc5RCxPQUFPLEVBQUMsZUFBZSxJQUFJLHNCQUFzQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDaEYsT0FBTyxFQUFDLGFBQWEsRUFBZ0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFZaEUsOENBSUM7OztJQUhDLCtDQUFzRDs7SUFDdEQsNENBQW1EOztJQUNuRCwyQ0FBK0I7Ozs7Ozs7Ozs7Ozs7O0FBa0JqQyxpQ0ErQkM7Ozs7OztJQTdCQywyQkFBUTs7Ozs7SUFHUixnQ0FBMkM7Ozs7O0lBRzNDLG1DQUE4Qzs7Ozs7SUFHOUMsOEJBQXlDOzs7Ozs7SUFNekMsOEJBQXlDOzs7Ozs7O0lBT3pDLDhDQUF1RDs7Ozs7SUFHdkQsOEJBQStCOzs7OztJQUcvQix5QkFBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQWNsQix5Q0FJQzs7O0lBRkMsdUNBQWtCOztJQUNsQix3Q0FBdUI7Ozs7Ozs7O0FBU3pCLHVDQU1DOzs7Ozs7QUEyTWUsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7OztBQVk1QyxDQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsRUFBRSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Ozs7OztBQWI1RSxNQUFNLE9BQU8sUUFBUSxHQUFzQixhQUFhLENBQ3BELFVBQVUsUUFBb0MsU0FBUyxFQUFFLFNBQVMsT0FZTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCN0UsaUNBRUM7Ozs7OztJQURDLDREQUE0Qzs7Ozs7OztBQUc5QyxTQUFTLG9CQUFvQixDQUFDLFVBQXFCLEVBQUUsUUFBbUI7O1FBQ2xFLE9BQU8sR0FBRyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtJQUNsRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQztJQUVELENBQUMsbUJBQUEsVUFBVSxFQUFxQixDQUFDLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hELE9BQU8sRUFBRSxrQ0FBa0MsQ0FBQyxVQUFVLEVBQUUsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDL0UsU0FBUyxFQUFFLFFBQVEsSUFBSSxRQUFRLENBQUMsU0FBUztRQUN6QyxPQUFPLEVBQUUsT0FBTztLQUNqQixDQUFDLENBQUM7QUFDTCxDQUFDOztBQUdELE1BQU0sT0FBTyxrQ0FBa0MsR0FBRyxzQkFBc0I7O01BQ2xFLGlDQUFpQyxHQUFHLG9CQUFvQjs7TUFDeEQsdUJBQXVCLEdBQWtDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBcHBsaWNhdGlvblJlZn0gZnJvbSAnLi4vYXBwbGljYXRpb25fcmVmJztcbmltcG9ydCB7SW5qZWN0b3JUeXBlLCDJtcm1ZGVmaW5lSW5qZWN0b3J9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9kZWZzJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9wcm92aWRlcic7XG5pbXBvcnQge2NvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3Rvcnl9IGZyb20gJy4uL2RpL3V0aWwnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge1NjaGVtYU1ldGFkYXRhfSBmcm9tICcuLi9tZXRhZGF0YS9zY2hlbWEnO1xuaW1wb3J0IHtjb21waWxlTmdNb2R1bGUgYXMgcmVuZGVyM0NvbXBpbGVOZ01vZHVsZX0gZnJvbSAnLi4vcmVuZGVyMy9qaXQvbW9kdWxlJztcbmltcG9ydCB7bWFrZURlY29yYXRvciwgVHlwZURlY29yYXRvcn0gZnJvbSAnLi4vdXRpbC9kZWNvcmF0b3JzJztcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGV4cGFuc2lvbiBvZiBhbiBgTmdNb2R1bGVgIGludG8gaXRzIHNjb3Blcy5cbiAqXG4gKiBBIHNjb3BlIGlzIGEgc2V0IG9mIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIHRoYXQgYXJlIHZpc2libGUgaW4gYSBwYXJ0aWN1bGFyIGNvbnRleHQuIEVhY2hcbiAqIGBOZ01vZHVsZWAgaGFzIHR3byBzY29wZXMuIFRoZSBgY29tcGlsYXRpb25gIHNjb3BlIGlzIHRoZSBzZXQgb2YgZGlyZWN0aXZlcyBhbmQgcGlwZXMgdGhhdCB3aWxsXG4gKiBiZSByZWNvZ25pemVkIGluIHRoZSB0ZW1wbGF0ZXMgb2YgY29tcG9uZW50cyBkZWNsYXJlZCBieSB0aGUgbW9kdWxlLiBUaGUgYGV4cG9ydGVkYCBzY29wZSBpcyB0aGVcbiAqIHNldCBvZiBkaXJlY3RpdmVzIGFuZCBwaXBlcyBleHBvcnRlZCBieSBhIG1vZHVsZSAodGhhdCBpcywgbW9kdWxlIEIncyBleHBvcnRlZCBzY29wZSBnZXRzIGFkZGVkXG4gKiB0byBtb2R1bGUgQSdzIGNvbXBpbGF0aW9uIHNjb3BlIHdoZW4gbW9kdWxlIEEgaW1wb3J0cyBCKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZVRyYW5zaXRpdmVTY29wZXMge1xuICBjb21waWxhdGlvbjoge2RpcmVjdGl2ZXM6IFNldDxhbnk+OyBwaXBlczogU2V0PGFueT47fTtcbiAgZXhwb3J0ZWQ6IHtkaXJlY3RpdmVzOiBTZXQ8YW55PjsgcGlwZXM6IFNldDxhbnk+O307XG4gIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW118bnVsbDtcbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIMm1ybVOZ01vZHVsZURlZldpdGhNZXRhPFQsIERlY2xhcmF0aW9ucywgSW1wb3J0cywgRXhwb3J0cz4gPSBOZ01vZHVsZURlZjxUPjtcblxuLyoqXG4gKiBSdW50aW1lIGxpbmsgaW5mb3JtYXRpb24gZm9yIE5nTW9kdWxlcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZSB1c2VkIGJ5IHRoZSBydW50aW1lIHRvIGFzc2VtYmxlIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsXG4gKiBwaXBlcywgYW5kIGluamVjdG9ycy5cbiAqXG4gKiBOT1RFOiBBbHdheXMgdXNlIGDJtcm1ZGVmaW5lTmdNb2R1bGVgIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGlzIG9iamVjdCxcbiAqIG5ldmVyIGNyZWF0ZSB0aGUgb2JqZWN0IGRpcmVjdGx5IHNpbmNlIHRoZSBzaGFwZSBvZiB0aGlzIG9iamVjdFxuICogY2FuIGNoYW5nZSBiZXR3ZWVuIHZlcnNpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nTW9kdWxlRGVmPFQ+IHtcbiAgLyoqIFRva2VuIHJlcHJlc2VudGluZyB0aGUgbW9kdWxlLiBVc2VkIGJ5IERJLiAqL1xuICB0eXBlOiBUO1xuXG4gIC8qKiBMaXN0IG9mIGNvbXBvbmVudHMgdG8gYm9vdHN0cmFwLiAqL1xuICBib290c3RyYXA6IFR5cGU8YW55PltdfCgoKSA9PiBUeXBlPGFueT5bXSk7XG5cbiAgLyoqIExpc3Qgb2YgY29tcG9uZW50cywgZGlyZWN0aXZlcywgYW5kIHBpcGVzIGRlY2xhcmVkIGJ5IHRoaXMgbW9kdWxlLiAqL1xuICBkZWNsYXJhdGlvbnM6IFR5cGU8YW55PltdfCgoKSA9PiBUeXBlPGFueT5bXSk7XG5cbiAgLyoqIExpc3Qgb2YgbW9kdWxlcyBvciBgTW9kdWxlV2l0aFByb3ZpZGVyc2AgaW1wb3J0ZWQgYnkgdGhpcyBtb2R1bGUuICovXG4gIGltcG9ydHM6IFR5cGU8YW55PltdfCgoKSA9PiBUeXBlPGFueT5bXSk7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kdWxlcywgYE1vZHVsZVdpdGhQcm92aWRlcnNgLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCBvciBwaXBlcyBleHBvcnRlZCBieSB0aGlzXG4gICAqIG1vZHVsZS5cbiAgICovXG4gIGV4cG9ydHM6IFR5cGU8YW55PltdfCgoKSA9PiBUeXBlPGFueT5bXSk7XG5cbiAgLyoqXG4gICAqIENhY2hlZCB2YWx1ZSBvZiBjb21wdXRlZCBgdHJhbnNpdGl2ZUNvbXBpbGVTY29wZXNgIGZvciB0aGlzIG1vZHVsZS5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgbmV2ZXIgYmUgcmVhZCBkaXJlY3RseSwgYnV0IGFjY2Vzc2VkIHZpYSBgdHJhbnNpdGl2ZVNjb3Blc0ZvcmAuXG4gICAqL1xuICB0cmFuc2l0aXZlQ29tcGlsZVNjb3BlczogTmdNb2R1bGVUcmFuc2l0aXZlU2NvcGVzfG51bGw7XG5cbiAgLyoqIFRoZSBzZXQgb2Ygc2NoZW1hcyB0aGF0IGRlY2xhcmUgZWxlbWVudHMgdG8gYmUgYWxsb3dlZCBpbiB0aGUgTmdNb2R1bGUuICovXG4gIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW118bnVsbDtcblxuICAvKiogVW5pcXVlIElEIGZvciB0aGUgbW9kdWxlIHdpdGggd2hpY2ggaXQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQuICAqL1xuICBpZDogc3RyaW5nfG51bGw7XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhbiBOZ01vZHVsZSB0aGF0IGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgcHJvdmlkZXJzLlxuICpcbiAqIEBwYXJhbSBUIHRoZSBtb2R1bGUgdHlwZS4gSW4gSXZ5IGFwcGxpY2F0aW9ucywgdGhpcyBtdXN0IGJlIGV4cGxpY2l0bHlcbiAqIHByb3ZpZGVkLlxuICpcbiAqIE5vdGUgdGhhdCB1c2luZyBNb2R1bGVXaXRoUHJvdmlkZXJzIHdpdGhvdXQgYSBnZW5lcmljIHR5cGUgaXMgZGVwcmVjYXRlZC5cbiAqIFRoZSBnZW5lcmljIHdpbGwgYmVjb21lIHJlcXVpcmVkIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgQW5ndWxhci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlV2l0aFByb3ZpZGVyczxcbiAgICBUID0gYW55IC8qKiBUT0RPKGFseGh1Yik6IHJlbW92ZSBkZWZhdWx0IHdoZW4gY2FsbGVycyBwYXNzIGV4cGxpY2l0IHR5cGUgcGFyYW0gKi8+IHtcbiAgbmdNb2R1bGU6IFR5cGU8VD47XG4gIHByb3ZpZGVycz86IFByb3ZpZGVyW107XG59XG5cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBOZ01vZHVsZSBkZWNvcmF0b3IgLyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdNb2R1bGVEZWNvcmF0b3Ige1xuICAvKipcbiAgICogRGVjb3JhdG9yIHRoYXQgbWFya3MgYSBjbGFzcyBhcyBhbiBOZ01vZHVsZSBhbmQgc3VwcGxpZXMgY29uZmlndXJhdGlvbiBtZXRhZGF0YS5cbiAgICovXG4gIChvYmo/OiBOZ01vZHVsZSk6IFR5cGVEZWNvcmF0b3I7XG4gIG5ldyhvYmo/OiBOZ01vZHVsZSk6IE5nTW9kdWxlO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIE5nTW9kdWxlIG1ldGFkYXRhLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZSB7XG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGluamVjdGFibGUgb2JqZWN0cyB0aGF0IGFyZSBhdmFpbGFibGUgaW4gdGhlIGluamVjdG9yXG4gICAqIG9mIHRoaXMgbW9kdWxlLlxuICAgKlxuICAgKiBAc2VlIFtEZXBlbmRlbmN5IEluamVjdGlvbiBndWlkZV0oZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24pXG4gICAqIEBzZWUgW05nTW9kdWxlIGd1aWRlXShndWlkZS9wcm92aWRlcnMpXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIERlcGVuZGVuY2llcyB3aG9zZSBwcm92aWRlcnMgYXJlIGxpc3RlZCBoZXJlIGJlY29tZSBhdmFpbGFibGUgZm9yIGluamVjdGlvblxuICAgKiBpbnRvIGFueSBjb21wb25lbnQsIGRpcmVjdGl2ZSwgcGlwZSBvciBzZXJ2aWNlIHRoYXQgaXMgYSBjaGlsZCBvZiB0aGlzIGluamVjdG9yLlxuICAgKiBUaGUgTmdNb2R1bGUgdXNlZCBmb3IgYm9vdHN0cmFwcGluZyB1c2VzIHRoZSByb290IGluamVjdG9yLCBhbmQgY2FuIHByb3ZpZGUgZGVwZW5kZW5jaWVzXG4gICAqIHRvIGFueSBwYXJ0IG9mIHRoZSBhcHAuXG4gICAqXG4gICAqIEEgbGF6eS1sb2FkZWQgbW9kdWxlIGhhcyBpdHMgb3duIGluamVjdG9yLCB0eXBpY2FsbHkgYSBjaGlsZCBvZiB0aGUgYXBwIHJvb3QgaW5qZWN0b3IuXG4gICAqIExhenktbG9hZGVkIHNlcnZpY2VzIGFyZSBzY29wZWQgdG8gdGhlIGxhenktbG9hZGVkIG1vZHVsZSdzIGluamVjdG9yLlxuICAgKiBJZiBhIGxhenktbG9hZGVkIG1vZHVsZSBhbHNvIHByb3ZpZGVzIHRoZSBgVXNlclNlcnZpY2VgLCBhbnkgY29tcG9uZW50IGNyZWF0ZWRcbiAgICogd2l0aGluIHRoYXQgbW9kdWxlJ3MgY29udGV4dCAoc3VjaCBhcyBieSByb3V0ZXIgbmF2aWdhdGlvbikgZ2V0cyB0aGUgbG9jYWwgaW5zdGFuY2VcbiAgICogb2YgdGhlIHNlcnZpY2UsIG5vdCB0aGUgaW5zdGFuY2UgaW4gdGhlIHJvb3QgaW5qZWN0b3IuXG4gICAqIENvbXBvbmVudHMgaW4gZXh0ZXJuYWwgbW9kdWxlcyBjb250aW51ZSB0byByZWNlaXZlIHRoZSBpbnN0YW5jZSBwcm92aWRlZCBieSB0aGVpciBpbmplY3RvcnMuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBkZWZpbmVzIGEgY2xhc3MgdGhhdCBpcyBpbmplY3RlZCBpblxuICAgKiB0aGUgSGVsbG9Xb3JsZCBOZ01vZHVsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIGNsYXNzIEdyZWV0ZXIge1xuICAgKiAgICBncmVldChuYW1lOnN0cmluZykge1xuICAgKiAgICAgIHJldHVybiAnSGVsbG8gJyArIG5hbWUgKyAnISc7XG4gICAqICAgIH1cbiAgICogfVxuICAgKlxuICAgKiBATmdNb2R1bGUoe1xuICAgKiAgIHByb3ZpZGVyczogW1xuICAgKiAgICAgR3JlZXRlclxuICAgKiAgIF1cbiAgICogfSlcbiAgICogY2xhc3MgSGVsbG9Xb3JsZCB7XG4gICAqICAgZ3JlZXRlcjpHcmVldGVyO1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKGdyZWV0ZXI6R3JlZXRlcikge1xuICAgKiAgICAgdGhpcy5ncmVldGVyID0gZ3JlZXRlcjtcbiAgICogICB9XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBwcm92aWRlcnM/OiBQcm92aWRlcltdO1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIGFuZCBwaXBlcyAoW2RlY2xhcmFibGVzXShndWlkZS9nbG9zc2FyeSNkZWNsYXJhYmxlKSlcbiAgICogdGhhdCBiZWxvbmcgdG8gdGhpcyBtb2R1bGUuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIFRoZSBzZXQgb2Ygc2VsZWN0b3JzIHRoYXQgYXJlIGF2YWlsYWJsZSB0byBhIHRlbXBsYXRlIGluY2x1ZGUgdGhvc2UgZGVjbGFyZWQgaGVyZSwgYW5kXG4gICAqIHRob3NlIHRoYXQgYXJlIGV4cG9ydGVkIGZyb20gaW1wb3J0ZWQgTmdNb2R1bGVzLlxuICAgKlxuICAgKiBEZWNsYXJhYmxlcyBtdXN0IGJlbG9uZyB0byBleGFjdGx5IG9uZSBtb2R1bGUuXG4gICAqIFRoZSBjb21waWxlciBlbWl0cyBhbiBlcnJvciBpZiB5b3UgdHJ5IHRvIGRlY2xhcmUgdGhlIHNhbWUgY2xhc3MgaW4gbW9yZSB0aGFuIG9uZSBtb2R1bGUuXG4gICAqIEJlIGNhcmVmdWwgbm90IHRvIGRlY2xhcmUgYSBjbGFzcyB0aGF0IGlzIGltcG9ydGVkIGZyb20gYW5vdGhlciBtb2R1bGUuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBhbGxvd3MgdGhlIENvbW1vbk1vZHVsZSB0byB1c2UgdGhlIGBOZ0ZvcmBcbiAgICogZGlyZWN0aXZlLlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIEBOZ01vZHVsZSh7XG4gICAqICAgZGVjbGFyYXRpb25zOiBbTmdGb3JdXG4gICAqIH0pXG4gICAqIGNsYXNzIENvbW1vbk1vZHVsZSB7XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBkZWNsYXJhdGlvbnM/OiBBcnJheTxUeXBlPGFueT58YW55W10+O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIE5nTW9kdWxlcyB3aG9zZSBleHBvcnRlZCBbZGVjbGFyYWJsZXNdKGd1aWRlL2dsb3NzYXJ5I2RlY2xhcmFibGUpXG4gICAqIGFyZSBhdmFpbGFibGUgdG8gdGVtcGxhdGVzIGluIHRoaXMgbW9kdWxlLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKlxuICAgKiBBIHRlbXBsYXRlIGNhbiB1c2UgZXhwb3J0ZWQgZGVjbGFyYWJsZXMgZnJvbSBhbnlcbiAgICogaW1wb3J0ZWQgbW9kdWxlLCBpbmNsdWRpbmcgdGhvc2UgZnJvbSBtb2R1bGVzIHRoYXQgYXJlIGltcG9ydGVkIGluZGlyZWN0bHlcbiAgICogYW5kIHJlLWV4cG9ydGVkLlxuICAgKiBGb3IgZXhhbXBsZSwgYE1vZHVsZUFgIGltcG9ydHMgYE1vZHVsZUJgLCBhbmQgYWxzbyBleHBvcnRzXG4gICAqIGl0LCB3aGljaCBtYWtlcyB0aGUgZGVjbGFyYWJsZXMgZnJvbSBgTW9kdWxlQmAgYXZhaWxhYmxlXG4gICAqIHdoZXJldmVyIGBNb2R1bGVBYCBpcyBpbXBvcnRlZC5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGFsbG93cyBNYWluTW9kdWxlIHRvIHVzZSBhbnl0aGluZyBleHBvcnRlZCBieVxuICAgKiBgQ29tbW9uTW9kdWxlYDpcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBATmdNb2R1bGUoe1xuICAgKiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG4gICAqIH0pXG4gICAqIGNsYXNzIE1haW5Nb2R1bGUge1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKi9cbiAgaW1wb3J0cz86IEFycmF5PFR5cGU8YW55PnxNb2R1bGVXaXRoUHJvdmlkZXJzPHt9PnxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgY29tcG9uZW50cywgZGlyZWN0aXZlcywgYW5kIHBpcGVzIGRlY2xhcmVkIGluIHRoaXNcbiAgICogTmdNb2R1bGUgdGhhdCBjYW4gYmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUgb2YgYW55IGNvbXBvbmVudCB0aGF0IGlzIHBhcnQgb2YgYW5cbiAgICogTmdNb2R1bGUgdGhhdCBpbXBvcnRzIHRoaXMgTmdNb2R1bGUuIEV4cG9ydGVkIGRlY2xhcmF0aW9ucyBhcmUgdGhlIG1vZHVsZSdzIHB1YmxpYyBBUEkuXG4gICAqXG4gICAqIEEgZGVjbGFyYWJsZSBiZWxvbmdzIHRvIG9uZSBhbmQgb25seSBvbmUgTmdNb2R1bGUuXG4gICAqIEEgbW9kdWxlIGNhbiBsaXN0IGFub3RoZXIgbW9kdWxlIGFtb25nIGl0cyBleHBvcnRzLCBpbiB3aGljaCBjYXNlIGFsbCBvZiB0aGF0IG1vZHVsZSdzXG4gICAqIHB1YmxpYyBkZWNsYXJhdGlvbiBhcmUgZXhwb3J0ZWQuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIERlY2xhcmF0aW9ucyBhcmUgcHJpdmF0ZSBieSBkZWZhdWx0LlxuICAgKiBJZiB0aGlzIE1vZHVsZUEgZG9lcyBub3QgZXhwb3J0IFVzZXJDb21wb25lbnQsIHRoZW4gb25seSB0aGUgY29tcG9uZW50cyB3aXRoaW4gdGhpc1xuICAgKiBNb2R1bGVBIGNhbiB1c2UgVXNlckNvbXBvbmVudC5cbiAgICpcbiAgICogTW9kdWxlQSBjYW4gaW1wb3J0IE1vZHVsZUIgYW5kIGFsc28gZXhwb3J0IGl0LCBtYWtpbmcgZXhwb3J0cyBmcm9tIE1vZHVsZUJcbiAgICogYXZhaWxhYmxlIHRvIGFuIE5nTW9kdWxlIHRoYXQgaW1wb3J0cyBNb2R1bGVBLlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZXhwb3J0cyB0aGUgYE5nRm9yYCBkaXJlY3RpdmUgZnJvbSBDb21tb25Nb2R1bGUuXG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogQE5nTW9kdWxlKHtcbiAgICogICBleHBvcnRzOiBbTmdGb3JdXG4gICAqIH0pXG4gICAqIGNsYXNzIENvbW1vbk1vZHVsZSB7XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBleHBvcnRzPzogQXJyYXk8VHlwZTxhbnk+fGFueVtdPjtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBjb21wb25lbnRzIHRvIGNvbXBpbGUgd2hlbiB0aGlzIE5nTW9kdWxlIGlzIGRlZmluZWQsXG4gICAqIHNvIHRoYXQgdGhleSBjYW4gYmUgZHluYW1pY2FsbHkgbG9hZGVkIGludG8gdGhlIHZpZXcuXG4gICAqXG4gICAqIEZvciBlYWNoIGNvbXBvbmVudCBsaXN0ZWQgaGVyZSwgQW5ndWxhciBjcmVhdGVzIGEgYENvbXBvbmVudEZhY3RvcnlgXG4gICAqIGFuZCBzdG9yZXMgaXQgaW4gdGhlIGBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJgLlxuICAgKlxuICAgKiBBbmd1bGFyIGF1dG9tYXRpY2FsbHkgYWRkcyBjb21wb25lbnRzIGluIHRoZSBtb2R1bGUncyBib290c3RyYXBcbiAgICogYW5kIHJvdXRlIGRlZmluaXRpb25zIGludG8gdGhlIGBlbnRyeUNvbXBvbmVudHNgIGxpc3QuIFVzZSB0aGlzXG4gICAqIG9wdGlvbiB0byBhZGQgY29tcG9uZW50cyB0aGF0IGFyZSBib290c3RyYXBwZWRcbiAgICogdXNpbmcgb25lIG9mIHRoZSBpbXBlcmF0aXZlIHRlY2huaXF1ZXMsIHN1Y2ggYXMgYFZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KClgLlxuICAgKlxuICAgKiBAc2VlIFtFbnRyeSBDb21wb25lbnRzXShndWlkZS9lbnRyeS1jb21wb25lbnRzKVxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSA5LjAuMC4gV2l0aCBJdnksIHRoaXMgcHJvcGVydHkgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeS5cbiAgICovXG4gIGVudHJ5Q29tcG9uZW50cz86IEFycmF5PFR5cGU8YW55PnxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgY29tcG9uZW50cyB0aGF0IGFyZSBib290c3RyYXBwZWQgd2hlblxuICAgKiB0aGlzIG1vZHVsZSBpcyBib290c3RyYXBwZWQuIFRoZSBjb21wb25lbnRzIGxpc3RlZCBoZXJlXG4gICAqIGFyZSBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGBlbnRyeUNvbXBvbmVudHNgLlxuICAgKi9cbiAgYm9vdHN0cmFwPzogQXJyYXk8VHlwZTxhbnk+fGFueVtdPjtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBzY2hlbWFzIHRoYXQgZGVjbGFyZSBlbGVtZW50cyB0byBiZSBhbGxvd2VkIGluIHRoZSBOZ01vZHVsZS5cbiAgICogRWxlbWVudHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgbmVpdGhlciBBbmd1bGFyIGNvbXBvbmVudHMgbm9yIGRpcmVjdGl2ZXNcbiAgICogbXVzdCBiZSBkZWNsYXJlZCBpbiBhIHNjaGVtYS5cbiAgICpcbiAgICogQWxsb3dlZCB2YWx1ZSBhcmUgYE5PX0VSUk9SU19TQ0hFTUFgIGFuZCBgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQWAuXG4gICAqXG4gICAqIEBzZWN1cml0eSBXaGVuIHVzaW5nIG9uZSBvZiBgTk9fRVJST1JTX1NDSEVNQWAgb3IgYENVU1RPTV9FTEVNRU5UU19TQ0hFTUFgXG4gICAqIHlvdSBtdXN0IGVuc3VyZSB0aGF0IGFsbG93ZWQgZWxlbWVudHMgYW5kIHByb3BlcnRpZXMgc2VjdXJlbHkgZXNjYXBlIGlucHV0cy5cbiAgICovXG4gIHNjaGVtYXM/OiBBcnJheTxTY2hlbWFNZXRhZGF0YXxhbnlbXT47XG5cbiAgLyoqXG4gICAqIEEgbmFtZSBvciBwYXRoIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGlzIE5nTW9kdWxlIGluIGBnZXRNb2R1bGVGYWN0b3J5YC5cbiAgICogSWYgbGVmdCBgdW5kZWZpbmVkYCwgdGhlIE5nTW9kdWxlIGlzIG5vdCByZWdpc3RlcmVkIHdpdGhcbiAgICogYGdldE1vZHVsZUZhY3RvcnlgLlxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHRoaXMgbW9kdWxlIHdpbGwgYmUgc2tpcHBlZCBieSB0aGUgQU9UIGNvbXBpbGVyIGFuZCBzbyB3aWxsIGFsd2F5cyBiZSBjb21waWxlZFxuICAgKiB1c2luZyBKSVQuXG4gICAqXG4gICAqIFRoaXMgZXhpc3RzIHRvIHN1cHBvcnQgZnV0dXJlIEl2eSB3b3JrIGFuZCBoYXMgbm8gZWZmZWN0IGN1cnJlbnRseS5cbiAgICovXG4gIGppdD86IHRydWU7XG59XG5cbi8qKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IE5nTW9kdWxlOiBOZ01vZHVsZURlY29yYXRvciA9IG1ha2VEZWNvcmF0b3IoXG4gICAgJ05nTW9kdWxlJywgKG5nTW9kdWxlOiBOZ01vZHVsZSkgPT4gbmdNb2R1bGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLFxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciB0aGF0IG1hcmtzIHRoZSBmb2xsb3dpbmcgY2xhc3MgYXMgYW4gTmdNb2R1bGUsIGFuZCBzdXBwbGllc1xuICAgICAqIGNvbmZpZ3VyYXRpb24gbWV0YWRhdGEgZm9yIGl0LlxuICAgICAqXG4gICAgICogKiBUaGUgYGRlY2xhcmF0aW9uc2AgYW5kIGBlbnRyeUNvbXBvbmVudHNgIG9wdGlvbnMgY29uZmlndXJlIHRoZSBjb21waWxlclxuICAgICAqIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBiZWxvbmdzIHRvIHRoZSBOZ01vZHVsZS5cbiAgICAgKiAqIFRoZSBgcHJvdmlkZXJzYCBvcHRpb25zIGNvbmZpZ3VyZXMgdGhlIE5nTW9kdWxlJ3MgaW5qZWN0b3IgdG8gcHJvdmlkZVxuICAgICAqIGRlcGVuZGVuY2llcyB0aGUgTmdNb2R1bGUgbWVtYmVycy5cbiAgICAgKiAqIFRoZSBgaW1wb3J0c2AgYW5kIGBleHBvcnRzYCBvcHRpb25zIGJyaW5nIGluIG1lbWJlcnMgZnJvbSBvdGhlciBtb2R1bGVzLCBhbmQgbWFrZVxuICAgICAqIHRoaXMgbW9kdWxlJ3MgbWVtYmVycyBhdmFpbGFibGUgdG8gb3RoZXJzLlxuICAgICAqL1xuICAgICh0eXBlOiBUeXBlPGFueT4sIG1ldGE6IE5nTW9kdWxlKSA9PiBTV0lUQ0hfQ09NUElMRV9OR01PRFVMRSh0eXBlLCBtZXRhKSk7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb29rIGZvciBtYW51YWwgYm9vdHN0cmFwcGluZyBvZiB0aGUgYXBwbGljYXRpb24gaW5zdGVhZCBvZiB1c2luZyBib290c3RyYXAgYXJyYXkgaW4gQE5nTW9kdWxlXG4gKiBhbm5vdGF0aW9uLlxuICpcbiAqIFJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBpcyBwcm92aWRlZCBhcyBhIHBhcmFtZXRlci5cbiAqXG4gKiBTZWUgW1wiQm9vdHN0cmFwcGluZ1wiXShndWlkZS9ib290c3RyYXBwaW5nKSBhbmQgW1wiRW50cnkgY29tcG9uZW50c1wiXShndWlkZS9lbnRyeS1jb21wb25lbnRzKS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogYGBgdHlwZXNjcmlwdFxuICogY2xhc3MgQXBwTW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICogICBuZ0RvQm9vdHN0cmFwKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcbiAqICAgICBhcHBSZWYuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IC8vIE9yIHNvbWUgb3RoZXIgY29tcG9uZW50XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb0Jvb3RzdHJhcCB7XG4gIG5nRG9Cb290c3RyYXAoYXBwUmVmOiBBcHBsaWNhdGlvblJlZik6IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIHByZVIzTmdNb2R1bGVDb21waWxlKG1vZHVsZVR5cGU6IFR5cGU8YW55PiwgbWV0YWRhdGE/OiBOZ01vZHVsZSk6IHZvaWQge1xuICBsZXQgaW1wb3J0cyA9IChtZXRhZGF0YSAmJiBtZXRhZGF0YS5pbXBvcnRzKSB8fCBbXTtcbiAgaWYgKG1ldGFkYXRhICYmIG1ldGFkYXRhLmV4cG9ydHMpIHtcbiAgICBpbXBvcnRzID0gWy4uLmltcG9ydHMsIG1ldGFkYXRhLmV4cG9ydHNdO1xuICB9XG5cbiAgKG1vZHVsZVR5cGUgYXMgSW5qZWN0b3JUeXBlPGFueT4pLsm1aW5qID0gybXJtWRlZmluZUluamVjdG9yKHtcbiAgICBmYWN0b3J5OiBjb252ZXJ0SW5qZWN0YWJsZVByb3ZpZGVyVG9GYWN0b3J5KG1vZHVsZVR5cGUsIHt1c2VDbGFzczogbW9kdWxlVHlwZX0pLFxuICAgIHByb3ZpZGVyczogbWV0YWRhdGEgJiYgbWV0YWRhdGEucHJvdmlkZXJzLFxuICAgIGltcG9ydHM6IGltcG9ydHMsXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBjb25zdCBTV0lUQ0hfQ09NUElMRV9OR01PRFVMRV9fUE9TVF9SM19fID0gcmVuZGVyM0NvbXBpbGVOZ01vZHVsZTtcbmNvbnN0IFNXSVRDSF9DT01QSUxFX05HTU9EVUxFX19QUkVfUjNfXyA9IHByZVIzTmdNb2R1bGVDb21waWxlO1xuY29uc3QgU1dJVENIX0NPTVBJTEVfTkdNT0RVTEU6IHR5cGVvZiByZW5kZXIzQ29tcGlsZU5nTW9kdWxlID0gU1dJVENIX0NPTVBJTEVfTkdNT0RVTEVfX1BSRV9SM19fO1xuIl19