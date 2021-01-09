/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/interfaces/view.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Below are constants for LView indices to help us look up LView members
// without having to remember the specific indices.
// Uglify will inline these when minifying so there shouldn't be a cost.
/** @type {?} */
export const HOST = 0;
/** @type {?} */
export const TVIEW = 1;
/** @type {?} */
export const FLAGS = 2;
/** @type {?} */
export const PARENT = 3;
/** @type {?} */
export const NEXT = 4;
/** @type {?} */
export const TRANSPLANTED_VIEWS_TO_REFRESH = 5;
/** @type {?} */
export const T_HOST = 6;
/** @type {?} */
export const CLEANUP = 7;
/** @type {?} */
export const CONTEXT = 8;
/** @type {?} */
export const INJECTOR = 9;
/** @type {?} */
export const RENDERER_FACTORY = 10;
/** @type {?} */
export const RENDERER = 11;
/** @type {?} */
export const SANITIZER = 12;
/** @type {?} */
export const CHILD_HEAD = 13;
/** @type {?} */
export const CHILD_TAIL = 14;
/** @type {?} */
export const DECLARATION_VIEW = 15;
/** @type {?} */
export const DECLARATION_COMPONENT_VIEW = 16;
/** @type {?} */
export const DECLARATION_LCONTAINER = 17;
/** @type {?} */
export const PREORDER_HOOK_FLAGS = 18;
/** @type {?} */
export const QUERIES = 19;
/**
 * Size of LView's header. Necessary to adjust for it when setting slots.
 * @type {?}
 */
export const HEADER_OFFSET = 20;
/**
 * @record
 */
export function OpaqueViewState() { }
if (false) {
    /** @type {?} */
    OpaqueViewState.prototype.__brand__;
}
/**
 * `LView` stores all of the information needed to process the instructions as
 * they are invoked from the template. Each embedded view and component view has its
 * own `LView`. When processing a particular view, we set the `viewData` to that
 * `LView`. When that view is done processing, the `viewData` is set back to
 * whatever the original `viewData` was before (the parent `LView`).
 *
 * Keeping separate state for each view facilities view insertion / deletion, so we
 * don't have to edit the data array based on which views are present.
 * @record
 */
export function LView() { }
if (false) {
    /* Skipping unnamed member:
    [HOST]: RElement|null;*/
    /* Skipping unnamed member:
    readonly[TVIEW]: TView;*/
    /* Skipping unnamed member:
    [FLAGS]: LViewFlags;*/
    /* Skipping unnamed member:
    [PARENT]: LView|LContainer|null;*/
    /* Skipping unnamed member:
    [NEXT]: LView|LContainer|null;*/
    /* Skipping unnamed member:
    [QUERIES]: LQueries|null;*/
    /* Skipping unnamed member:
    [T_HOST]: TViewNode|TElementNode|null;*/
    /* Skipping unnamed member:
    [CLEANUP]: any[]|null;*/
    /* Skipping unnamed member:
    [CONTEXT]: {}|RootContext|null;*/
    /* Skipping unnamed member:
    readonly[INJECTOR]: Injector|null;*/
    /* Skipping unnamed member:
    [RENDERER_FACTORY]: RendererFactory3;*/
    /* Skipping unnamed member:
    [RENDERER]: Renderer3;*/
    /* Skipping unnamed member:
    [SANITIZER]: Sanitizer|null;*/
    /* Skipping unnamed member:
    [CHILD_HEAD]: LView|LContainer|null;*/
    /* Skipping unnamed member:
    [CHILD_TAIL]: LView|LContainer|null;*/
    /* Skipping unnamed member:
    [DECLARATION_VIEW]: LView|null;*/
    /* Skipping unnamed member:
    [DECLARATION_COMPONENT_VIEW]: LView;*/
    /* Skipping unnamed member:
    [DECLARATION_LCONTAINER]: LContainer|null;*/
    /* Skipping unnamed member:
    [PREORDER_HOOK_FLAGS]: PreOrderHookFlags;*/
    /* Skipping unnamed member:
    [TRANSPLANTED_VIEWS_TO_REFRESH]: number;*/
}
/** @enum {number} */
const LViewFlags = {
    /** The state of the init phase on the first 2 bits */
    InitPhaseStateIncrementer: 1,
    InitPhaseStateMask: 3,
    /**
     * Whether or not the view is in creationMode.
     *
     * This must be stored in the view rather than using `data` as a marker so that
     * we can properly support embedded views. Otherwise, when exiting a child view
     * back into the parent view, `data` will be defined and `creationMode` will be
     * improperly reported as false.
     */
    CreationMode: 4,
    /**
     * Whether or not this LView instance is on its first processing pass.
     *
     * An LView instance is considered to be on its "first pass" until it
     * has completed one creation mode run and one update mode run. At this
     * time, the flag is turned off.
     */
    FirstLViewPass: 8,
    /** Whether this view has default change detection strategy (checks always) or onPush */
    CheckAlways: 16,
    /**
     * Whether or not manual change detection is turned on for onPush components.
     *
     * This is a special mode that only marks components dirty in two cases:
     * 1) There has been a change to an @Input property
     * 2) `markDirty()` has been called manually by the user
     *
     * Note that in this mode, the firing of events does NOT mark components
     * dirty automatically.
     *
     * Manual mode is turned off by default for backwards compatibility, as events
     * automatically mark OnPush components dirty in View Engine.
     *
     * TODO: Add a public API to ChangeDetectionStrategy to turn this mode on
     */
    ManualOnPush: 32,
    /** Whether or not this view is currently dirty (needing check) */
    Dirty: 64,
    /** Whether or not this view is currently attached to change detection tree. */
    Attached: 128,
    /** Whether or not this view is destroyed. */
    Destroyed: 256,
    /** Whether or not this view is the root view */
    IsRoot: 512,
    /**
     * Whether this moved LView was needs to be refreshed at the insertion location because the
     * declaration was dirty.
     */
    RefreshTransplantedView: 1024,
    /**
     * Index of the current init phase on last 21 bits
     */
    IndexWithinInitPhaseIncrementer: 2048,
    IndexWithinInitPhaseShift: 11,
    IndexWithinInitPhaseReset: 2047,
};
export { LViewFlags };
/** @enum {number} */
const InitPhaseState = {
    OnInitHooksToBeRun: 0,
    AfterContentInitHooksToBeRun: 1,
    AfterViewInitHooksToBeRun: 2,
    InitPhaseCompleted: 3,
};
export { InitPhaseState };
/** @enum {number} */
const PreOrderHookFlags = {
    /**
       The index of the next pre-order hook to be called in the hooks array, on the first 16
       bits
     */
    IndexOfTheNextPreOrderHookMaskMask: 65535,
    /**
     * The number of init hooks that have already been called, on the last 16 bits
     */
    NumberOfInitHooksCalledIncrementer: 65536,
    NumberOfInitHooksCalledShift: 16,
    NumberOfInitHooksCalledMask: 4294901760,
};
export { PreOrderHookFlags };
/**
 * Set of instructions used to process host bindings efficiently.
 *
 * See VIEW_DATA.md for more information.
 * @record
 */
export function ExpandoInstructions() { }
/** @enum {number} */
const TViewType = {
    /**
     * Root `TView` is the used to bootstrap components into. It is used in conjunction with
     * `LView` which takes an existing DOM node not owned by Angular and wraps it in `TView`/`LView`
     * so that other components can be loaded into it.
     */
    Root: 0,
    /**
     * `TView` associated with a Component. This would be the `TView` directly associated with the
     * component view (as opposed an `Embedded` `TView` which would be a child of `Component` `TView`)
     */
    Component: 1,
    /**
     * `TView` associated with a template. Such as `*ngIf`, `<ng-template>` etc... A `Component`
     * can have zero or more `Embedede` `TView`s.
     */
    Embedded: 2,
};
export { TViewType };
/**
 * The static data for an LView (shared between all templates of a
 * given type).
 *
 * Stored on the `ComponentDef.tView`.
 * @record
 */
export function TView() { }
if (false) {
    /**
     * Type of `TView` (`Root`|`Component`|`Embedded`).
     * @type {?}
     */
    TView.prototype.type;
    /**
     * ID for inline views to determine whether a view is the same as the previous view
     * in a certain position. If it's not, we know the new view needs to be inserted
     * and the one that exists needs to be removed (e.g. if/else statements)
     *
     * If this is -1, then this is a component view or a dynamically created view.
     * @type {?}
     */
    TView.prototype.id;
    /**
     * This is a blueprint used to generate LView instances for this TView. Copying this
     * blueprint is faster than creating a new LView from scratch.
     * @type {?}
     */
    TView.prototype.blueprint;
    /**
     * The template function used to refresh the view of dynamically created views
     * and components. Will be null for inline views.
     * @type {?}
     */
    TView.prototype.template;
    /**
     * A function containing query-related instructions.
     * @type {?}
     */
    TView.prototype.viewQuery;
    /**
     * Pointer to the host `TNode` (not part of this TView).
     *
     * If this is a `TViewNode` for an `LViewNode`, this is an embedded view of a container.
     * We need this pointer to be able to efficiently find this node when inserting the view
     * into an anchor.
     *
     * If this is a `TElementNode`, this is the view of a root component. It has exactly one
     * root TNode.
     *
     * If this is null, this is the view of a component that is not at root. We do not store
     * the host TNodes for child component views because they can potentially have several
     * different host TNodes, depending on where the component is being used. These host
     * TNodes cannot be shared (due to different indices, etc).
     * @type {?}
     */
    TView.prototype.node;
    /**
     * Whether or not this template has been processed in creation mode.
     * @type {?}
     */
    TView.prototype.firstCreatePass;
    /**
     *  Whether or not this template has been processed in update mode (e.g. change detected)
     *
     * `firstUpdatePass` is used by styling to set up `TData` to contain metadata about the styling
     * instructions. (Mainly to build up a linked list of styling priority order.)
     *
     * Typically this function gets cleared after first execution. If exception is thrown then this
     * flag can remain turned un until there is first successful (no exception) pass. This means that
     * individual styling instructions keep track of if they have already been added to the linked
     * list to prevent double adding.
     * @type {?}
     */
    TView.prototype.firstUpdatePass;
    /**
     * Static data equivalent of LView.data[]. Contains TNodes, PipeDefInternal or TI18n.
     * @type {?}
     */
    TView.prototype.data;
    /**
     * The binding start index is the index at which the data array
     * starts to store bindings only. Saving this value ensures that we
     * will begin reading bindings at the correct point in the array when
     * we are in update mode.
     *
     * -1 means that it has not been initialized.
     * @type {?}
     */
    TView.prototype.bindingStartIndex;
    /**
     * The index where the "expando" section of `LView` begins. The expando
     * section contains injectors, directive instances, and host binding values.
     * Unlike the "decls" and "vars" sections of `LView`, the length of this
     * section cannot be calculated at compile-time because directives are matched
     * at runtime to preserve locality.
     *
     * We store this start index so we know where to start checking host bindings
     * in `setHostBindings`.
     * @type {?}
     */
    TView.prototype.expandoStartIndex;
    /**
     * Whether or not there are any static view queries tracked on this view.
     *
     * We store this so we know whether or not we should do a view query
     * refresh after creation mode to collect static query results.
     * @type {?}
     */
    TView.prototype.staticViewQueries;
    /**
     * Whether or not there are any static content queries tracked on this view.
     *
     * We store this so we know whether or not we should do a content query
     * refresh after creation mode to collect static query results.
     * @type {?}
     */
    TView.prototype.staticContentQueries;
    /**
     * A reference to the first child node located in the view.
     * @type {?}
     */
    TView.prototype.firstChild;
    /**
     * Set of instructions used to process host bindings efficiently.
     *
     * See VIEW_DATA.md for more information.
     * @type {?}
     */
    TView.prototype.expandoInstructions;
    /**
     * Full registry of directives and components that may be found in this view.
     *
     * It's necessary to keep a copy of the full def list on the TView so it's possible
     * to render template functions without a host component.
     * @type {?}
     */
    TView.prototype.directiveRegistry;
    /**
     * Full registry of pipes that may be found in this view.
     *
     * The property is either an array of `PipeDefs`s or a function which returns the array of
     * `PipeDefs`s. The function is necessary to be able to support forward declarations.
     *
     * It's necessary to keep a copy of the full def list on the TView so it's possible
     * to render template functions without a host component.
     * @type {?}
     */
    TView.prototype.pipeRegistry;
    /**
     * Array of ngOnInit, ngOnChanges and ngDoCheck hooks that should be executed for this view in
     * creation mode.
     *
     * Even indices: Directive index
     * Odd indices: Hook function
     * @type {?}
     */
    TView.prototype.preOrderHooks;
    /**
     * Array of ngOnChanges and ngDoCheck hooks that should be executed for this view in update mode.
     *
     * Even indices: Directive index
     * Odd indices: Hook function
     * @type {?}
     */
    TView.prototype.preOrderCheckHooks;
    /**
     * Array of ngAfterContentInit and ngAfterContentChecked hooks that should be executed
     * for this view in creation mode.
     *
     * Even indices: Directive index
     * Odd indices: Hook function
     * @type {?}
     */
    TView.prototype.contentHooks;
    /**
     * Array of ngAfterContentChecked hooks that should be executed for this view in update
     * mode.
     *
     * Even indices: Directive index
     * Odd indices: Hook function
     * @type {?}
     */
    TView.prototype.contentCheckHooks;
    /**
     * Array of ngAfterViewInit and ngAfterViewChecked hooks that should be executed for
     * this view in creation mode.
     *
     * Even indices: Directive index
     * Odd indices: Hook function
     * @type {?}
     */
    TView.prototype.viewHooks;
    /**
     * Array of ngAfterViewChecked hooks that should be executed for this view in
     * update mode.
     *
     * Even indices: Directive index
     * Odd indices: Hook function
     * @type {?}
     */
    TView.prototype.viewCheckHooks;
    /**
     * Array of ngOnDestroy hooks that should be executed when this view is destroyed.
     *
     * Even indices: Directive index
     * Odd indices: Hook function
     * @type {?}
     */
    TView.prototype.destroyHooks;
    /**
     * When a view is destroyed, listeners need to be released and outputs need to be
     * unsubscribed. This cleanup array stores both listener data (in chunks of 4)
     * and output data (in chunks of 2) for a particular view. Combining the arrays
     * saves on memory (70 bytes per array) and on a few bytes of code size (for two
     * separate for loops).
     *
     * If it's a native DOM listener or output subscription being stored:
     * 1st index is: event name  `name = tView.cleanup[i+0]`
     * 2nd index is: index of native element or a function that retrieves global target (window,
     *               document or body) reference based on the native element:
     *    `typeof idxOrTargetGetter === 'function'`: global target getter function
     *    `typeof idxOrTargetGetter === 'number'`: index of native element
     *
     * 3rd index is: index of listener function `listener = lView[CLEANUP][tView.cleanup[i+2]]`
     * 4th index is: `useCaptureOrIndx = tView.cleanup[i+3]`
     *    `typeof useCaptureOrIndx == 'boolean' : useCapture boolean
     *    `typeof useCaptureOrIndx == 'number':
     *         `useCaptureOrIndx >= 0` `removeListener = LView[CLEANUP][useCaptureOrIndx]`
     *         `useCaptureOrIndx <  0` `subscription = LView[CLEANUP][-useCaptureOrIndx]`
     *
     * If it's an output subscription or query list destroy hook:
     * 1st index is: output unsubscribe function / query list destroy function
     * 2nd index is: index of function context in LView.cleanupInstances[]
     *               `tView.cleanup[i+0].call(lView[CLEANUP][tView.cleanup[i+1]])`
     * @type {?}
     */
    TView.prototype.cleanup;
    /**
     * A list of element indices for child components that will need to be
     * refreshed when the current view has finished its check. These indices have
     * already been adjusted for the HEADER_OFFSET.
     *
     * @type {?}
     */
    TView.prototype.components;
    /**
     * A collection of queries tracked in a given view.
     * @type {?}
     */
    TView.prototype.queries;
    /**
     * An array of indices pointing to directives with content queries alongside with the
     * corresponding
     * query index. Each entry in this array is a tuple of:
     * - index of the first content query index declared by a given directive;
     * - index of a directive.
     *
     * We are storing those indexes so we can refresh content queries as part of a view refresh
     * process.
     * @type {?}
     */
    TView.prototype.contentQueries;
    /**
     * Set of schemas that declare elements to be allowed inside the view.
     * @type {?}
     */
    TView.prototype.schemas;
    /**
     * Array of constants for the view. Includes attribute arrays, local definition arrays etc.
     * Used for directive matching, attribute bindings, local definitions and more.
     * @type {?}
     */
    TView.prototype.consts;
    /**
     * Indicates that there was an error before we managed to complete the first create pass of the
     * view. This means that the view is likely corrupted and we should try to recover it.
     * @type {?}
     */
    TView.prototype.incompleteFirstPass;
}
/** @enum {number} */
const RootContextFlags = {
    Empty: 0,
    DetectChanges: 1,
    FlushPlayers: 2,
};
export { RootContextFlags };
/**
 * RootContext contains information which is shared for all components which
 * were bootstrapped with {\@link renderComponent}.
 * @record
 */
export function RootContext() { }
if (false) {
    /**
     * A function used for scheduling change detection in the future. Usually
     * this is `requestAnimationFrame`.
     * @type {?}
     */
    RootContext.prototype.scheduler;
    /**
     * A promise which is resolved when all components are considered clean (not dirty).
     *
     * This promise is overwritten every time a first call to {\@link markDirty} is invoked.
     * @type {?}
     */
    RootContext.prototype.clean;
    /**
     * RootComponents - The components that were instantiated by the call to
     * {\@link renderComponent}.
     * @type {?}
     */
    RootContext.prototype.components;
    /**
     * The player flushing handler to kick off all animations
     * @type {?}
     */
    RootContext.prototype.playerHandler;
    /**
     * What render-related operations to run once a scheduler has been set
     * @type {?}
     */
    RootContext.prototype.flags;
}
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
/** @type {?} */
export const unusedValueExportToPlacateAjd = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW50ZXJmYWNlcy92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsTUFBTSxPQUFPLElBQUksR0FBRyxDQUFDOztBQUNyQixNQUFNLE9BQU8sS0FBSyxHQUFHLENBQUM7O0FBQ3RCLE1BQU0sT0FBTyxLQUFLLEdBQUcsQ0FBQzs7QUFDdEIsTUFBTSxPQUFPLE1BQU0sR0FBRyxDQUFDOztBQUN2QixNQUFNLE9BQU8sSUFBSSxHQUFHLENBQUM7O0FBQ3JCLE1BQU0sT0FBTyw2QkFBNkIsR0FBRyxDQUFDOztBQUM5QyxNQUFNLE9BQU8sTUFBTSxHQUFHLENBQUM7O0FBQ3ZCLE1BQU0sT0FBTyxPQUFPLEdBQUcsQ0FBQzs7QUFDeEIsTUFBTSxPQUFPLE9BQU8sR0FBRyxDQUFDOztBQUN4QixNQUFNLE9BQU8sUUFBUSxHQUFHLENBQUM7O0FBQ3pCLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxFQUFFOztBQUNsQyxNQUFNLE9BQU8sUUFBUSxHQUFHLEVBQUU7O0FBQzFCLE1BQU0sT0FBTyxTQUFTLEdBQUcsRUFBRTs7QUFDM0IsTUFBTSxPQUFPLFVBQVUsR0FBRyxFQUFFOztBQUM1QixNQUFNLE9BQU8sVUFBVSxHQUFHLEVBQUU7O0FBQzVCLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxFQUFFOztBQUNsQyxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsRUFBRTs7QUFDNUMsTUFBTSxPQUFPLHNCQUFzQixHQUFHLEVBQUU7O0FBQ3hDLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxFQUFFOztBQUNyQyxNQUFNLE9BQU8sT0FBTyxHQUFHLEVBQUU7Ozs7O0FBRXpCLE1BQU0sT0FBTyxhQUFhLEdBQUcsRUFBRTs7OztBQU0vQixxQ0FFQzs7O0lBREMsb0NBQWlFOzs7Ozs7Ozs7Ozs7O0FBY25FLDJCQStOQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCxNQUFrQixVQUFVO0lBQzFCLHNEQUFzRDtJQUN0RCx5QkFBeUIsR0FBZ0I7SUFDekMsa0JBQWtCLEdBQWdCO0lBRWxDOzs7Ozs7O09BT0c7SUFDSCxZQUFZLEdBQWdCO0lBRTVCOzs7Ozs7T0FNRztJQUNILGNBQWMsR0FBZ0I7SUFFOUIsd0ZBQXdGO0lBQ3hGLFdBQVcsSUFBZ0I7SUFFM0I7Ozs7Ozs7Ozs7Ozs7O09BY0c7SUFDSCxZQUFZLElBQWdCO0lBRTVCLGtFQUFrRTtJQUNsRSxLQUFLLElBQWlCO0lBRXRCLCtFQUErRTtJQUMvRSxRQUFRLEtBQWlCO0lBRXpCLDZDQUE2QztJQUM3QyxTQUFTLEtBQWlCO0lBRTFCLGdEQUFnRDtJQUNoRCxNQUFNLEtBQWlCO0lBRXZCOzs7T0FHRztJQUNILHVCQUF1QixNQUFrQjtJQUV6Qzs7T0FFRztJQUNILCtCQUErQixNQUFrQjtJQUNqRCx5QkFBeUIsSUFBSztJQUM5Qix5QkFBeUIsTUFBa0I7RUFDNUM7OztBQVNELE1BQWtCLGNBQWM7SUFDOUIsa0JBQWtCLEdBQU87SUFDekIsNEJBQTRCLEdBQU87SUFDbkMseUJBQXlCLEdBQU87SUFDaEMsa0JBQWtCLEdBQU87RUFDMUI7OztBQUdELE1BQWtCLGlCQUFpQjtJQUNqQzs7O09BR0c7SUFDSCxrQ0FBa0MsT0FBc0I7SUFFeEQ7O09BRUc7SUFDSCxrQ0FBa0MsT0FBdUI7SUFDekQsNEJBQTRCLElBQUs7SUFDakMsMkJBQTJCLFlBQXFDO0VBQ2pFOzs7Ozs7OztBQU9ELHlDQUE0Rjs7QUFVNUYsTUFBa0IsU0FBUztJQUN6Qjs7OztPQUlHO0lBQ0gsSUFBSSxHQUFJO0lBRVI7OztPQUdHO0lBQ0gsU0FBUyxHQUFJO0lBRWI7OztPQUdHO0lBQ0gsUUFBUSxHQUFJO0VBQ2I7Ozs7Ozs7OztBQVFELDJCQTZRQzs7Ozs7O0lBelFDLHFCQUFnQjs7Ozs7Ozs7O0lBU2hCLG1CQUFvQjs7Ozs7O0lBTXBCLDBCQUFpQjs7Ozs7O0lBTWpCLHlCQUFxQzs7Ozs7SUFLckMsMEJBQXdDOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCeEMscUJBQWtDOzs7OztJQUdsQyxnQ0FBeUI7Ozs7Ozs7Ozs7Ozs7SUFhekIsZ0NBQXlCOzs7OztJQUd6QixxQkFBWTs7Ozs7Ozs7OztJQVVaLGtDQUEwQjs7Ozs7Ozs7Ozs7O0lBWTFCLGtDQUEwQjs7Ozs7Ozs7SUFRMUIsa0NBQTJCOzs7Ozs7OztJQVEzQixxQ0FBOEI7Ozs7O0lBSzlCLDJCQUF1Qjs7Ozs7OztJQVN2QixvQ0FBOEM7Ozs7Ozs7O0lBUTlDLGtDQUF5Qzs7Ozs7Ozs7Ozs7SUFXekMsNkJBQStCOzs7Ozs7Ozs7SUFTL0IsOEJBQTZCOzs7Ozs7OztJQVE3QixtQ0FBa0M7Ozs7Ozs7OztJQVNsQyw2QkFBNEI7Ozs7Ozs7OztJQVM1QixrQ0FBaUM7Ozs7Ozs7OztJQVNqQywwQkFBeUI7Ozs7Ozs7OztJQVN6QiwrQkFBOEI7Ozs7Ozs7O0lBUTlCLDZCQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCbkMsd0JBQW9COzs7Ozs7OztJQVFwQiwyQkFBMEI7Ozs7O0lBSzFCLHdCQUF1Qjs7Ozs7Ozs7Ozs7O0lBWXZCLCtCQUE4Qjs7Ozs7SUFLOUIsd0JBQStCOzs7Ozs7SUFNL0IsdUJBQXdCOzs7Ozs7SUFNeEIsb0NBQTZCOzs7QUFHL0IsTUFBa0IsZ0JBQWdCO0lBQ2hDLEtBQUssR0FBTztJQUNaLGFBQWEsR0FBTztJQUNwQixZQUFZLEdBQU87RUFDcEI7Ozs7Ozs7QUFPRCxpQ0E2QkM7Ozs7Ozs7SUF4QkMsZ0NBQXdDOzs7Ozs7O0lBT3hDLDRCQUFxQjs7Ozs7O0lBTXJCLGlDQUFpQjs7Ozs7SUFLakIsb0NBQWtDOzs7OztJQUtsQyw0QkFBd0I7Ozs7O0FBK0UxQixNQUFNLE9BQU8sNkJBQTZCLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnLi4vLi4vZGkvaW5qZWN0aW9uX3Rva2VuJztcbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uLy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtTY2hlbWFNZXRhZGF0YX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEnO1xuaW1wb3J0IHtTYW5pdGl6ZXJ9IGZyb20gJy4uLy4uL3Nhbml0aXphdGlvbi9zYW5pdGl6ZXInO1xuXG5pbXBvcnQge0xDb250YWluZXJ9IGZyb20gJy4vY29udGFpbmVyJztcbmltcG9ydCB7Q29tcG9uZW50RGVmLCBDb21wb25lbnRUZW1wbGF0ZSwgRGlyZWN0aXZlRGVmLCBEaXJlY3RpdmVEZWZMaXN0LCBIb3N0QmluZGluZ3NGdW5jdGlvbiwgUGlwZURlZiwgUGlwZURlZkxpc3QsIFZpZXdRdWVyaWVzRnVuY3Rpb259IGZyb20gJy4vZGVmaW5pdGlvbic7XG5pbXBvcnQge0kxOG5VcGRhdGVPcENvZGVzLCBUSTE4bn0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7VENvbnN0YW50cywgVEVsZW1lbnROb2RlLCBUTm9kZSwgVFZpZXdOb2RlfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtQbGF5ZXJIYW5kbGVyfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQge0xRdWVyaWVzLCBUUXVlcmllc30gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQge1JFbGVtZW50LCBSZW5kZXJlcjMsIFJlbmRlcmVyRmFjdG9yeTN9IGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHtUU3R5bGluZ0tleSwgVFN0eWxpbmdSYW5nZX0gZnJvbSAnLi9zdHlsaW5nJztcblxuXG5cbi8vIEJlbG93IGFyZSBjb25zdGFudHMgZm9yIExWaWV3IGluZGljZXMgdG8gaGVscCB1cyBsb29rIHVwIExWaWV3IG1lbWJlcnNcbi8vIHdpdGhvdXQgaGF2aW5nIHRvIHJlbWVtYmVyIHRoZSBzcGVjaWZpYyBpbmRpY2VzLlxuLy8gVWdsaWZ5IHdpbGwgaW5saW5lIHRoZXNlIHdoZW4gbWluaWZ5aW5nIHNvIHRoZXJlIHNob3VsZG4ndCBiZSBhIGNvc3QuXG5leHBvcnQgY29uc3QgSE9TVCA9IDA7XG5leHBvcnQgY29uc3QgVFZJRVcgPSAxO1xuZXhwb3J0IGNvbnN0IEZMQUdTID0gMjtcbmV4cG9ydCBjb25zdCBQQVJFTlQgPSAzO1xuZXhwb3J0IGNvbnN0IE5FWFQgPSA0O1xuZXhwb3J0IGNvbnN0IFRSQU5TUExBTlRFRF9WSUVXU19UT19SRUZSRVNIID0gNTtcbmV4cG9ydCBjb25zdCBUX0hPU1QgPSA2O1xuZXhwb3J0IGNvbnN0IENMRUFOVVAgPSA3O1xuZXhwb3J0IGNvbnN0IENPTlRFWFQgPSA4O1xuZXhwb3J0IGNvbnN0IElOSkVDVE9SID0gOTtcbmV4cG9ydCBjb25zdCBSRU5ERVJFUl9GQUNUT1JZID0gMTA7XG5leHBvcnQgY29uc3QgUkVOREVSRVIgPSAxMTtcbmV4cG9ydCBjb25zdCBTQU5JVElaRVIgPSAxMjtcbmV4cG9ydCBjb25zdCBDSElMRF9IRUFEID0gMTM7XG5leHBvcnQgY29uc3QgQ0hJTERfVEFJTCA9IDE0O1xuZXhwb3J0IGNvbnN0IERFQ0xBUkFUSU9OX1ZJRVcgPSAxNTtcbmV4cG9ydCBjb25zdCBERUNMQVJBVElPTl9DT01QT05FTlRfVklFVyA9IDE2O1xuZXhwb3J0IGNvbnN0IERFQ0xBUkFUSU9OX0xDT05UQUlORVIgPSAxNztcbmV4cG9ydCBjb25zdCBQUkVPUkRFUl9IT09LX0ZMQUdTID0gMTg7XG5leHBvcnQgY29uc3QgUVVFUklFUyA9IDE5O1xuLyoqIFNpemUgb2YgTFZpZXcncyBoZWFkZXIuIE5lY2Vzc2FyeSB0byBhZGp1c3QgZm9yIGl0IHdoZW4gc2V0dGluZyBzbG90cy4gICovXG5leHBvcnQgY29uc3QgSEVBREVSX09GRlNFVCA9IDIwO1xuXG5cbi8vIFRoaXMgaW50ZXJmYWNlIHJlcGxhY2VzIHRoZSByZWFsIExWaWV3IGludGVyZmFjZSBpZiBpdCBpcyBhbiBhcmcgb3IgYVxuLy8gcmV0dXJuIHZhbHVlIG9mIGEgcHVibGljIGluc3RydWN0aW9uLiBUaGlzIGVuc3VyZXMgd2UgZG9uJ3QgbmVlZCB0byBleHBvc2Vcbi8vIHRoZSBhY3R1YWwgaW50ZXJmYWNlLCB3aGljaCBzaG91bGQgYmUga2VwdCBwcml2YXRlLlxuZXhwb3J0IGludGVyZmFjZSBPcGFxdWVWaWV3U3RhdGUge1xuICAnX19icmFuZF9fJzogJ0JyYW5kIGZvciBPcGFxdWVWaWV3U3RhdGUgdGhhdCBub3RoaW5nIHdpbGwgbWF0Y2gnO1xufVxuXG5cbi8qKlxuICogYExWaWV3YCBzdG9yZXMgYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gcHJvY2VzcyB0aGUgaW5zdHJ1Y3Rpb25zIGFzXG4gKiB0aGV5IGFyZSBpbnZva2VkIGZyb20gdGhlIHRlbXBsYXRlLiBFYWNoIGVtYmVkZGVkIHZpZXcgYW5kIGNvbXBvbmVudCB2aWV3IGhhcyBpdHNcbiAqIG93biBgTFZpZXdgLiBXaGVuIHByb2Nlc3NpbmcgYSBwYXJ0aWN1bGFyIHZpZXcsIHdlIHNldCB0aGUgYHZpZXdEYXRhYCB0byB0aGF0XG4gKiBgTFZpZXdgLiBXaGVuIHRoYXQgdmlldyBpcyBkb25lIHByb2Nlc3NpbmcsIHRoZSBgdmlld0RhdGFgIGlzIHNldCBiYWNrIHRvXG4gKiB3aGF0ZXZlciB0aGUgb3JpZ2luYWwgYHZpZXdEYXRhYCB3YXMgYmVmb3JlICh0aGUgcGFyZW50IGBMVmlld2ApLlxuICpcbiAqIEtlZXBpbmcgc2VwYXJhdGUgc3RhdGUgZm9yIGVhY2ggdmlldyBmYWNpbGl0aWVzIHZpZXcgaW5zZXJ0aW9uIC8gZGVsZXRpb24sIHNvIHdlXG4gKiBkb24ndCBoYXZlIHRvIGVkaXQgdGhlIGRhdGEgYXJyYXkgYmFzZWQgb24gd2hpY2ggdmlld3MgYXJlIHByZXNlbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTFZpZXcgZXh0ZW5kcyBBcnJheTxhbnk+IHtcbiAgLyoqXG4gICAqIFRoZSBob3N0IG5vZGUgZm9yIHRoaXMgTFZpZXcgaW5zdGFuY2UsIGlmIHRoaXMgaXMgYSBjb21wb25lbnQgdmlldy5cbiAgICogSWYgdGhpcyBpcyBhbiBlbWJlZGRlZCB2aWV3LCBIT1NUIHdpbGwgYmUgbnVsbC5cbiAgICovXG4gIFtIT1NUXTogUkVsZW1lbnR8bnVsbDtcblxuICAvKipcbiAgICogVGhlIHN0YXRpYyBkYXRhIGZvciB0aGlzIHZpZXcuIFdlIG5lZWQgYSByZWZlcmVuY2UgdG8gdGhpcyBzbyB3ZSBjYW4gZWFzaWx5IHdhbGsgdXAgdGhlXG4gICAqIG5vZGUgdHJlZSBpbiBESSBhbmQgZ2V0IHRoZSBUVmlldy5kYXRhIGFycmF5IGFzc29jaWF0ZWQgd2l0aCBhIG5vZGUgKHdoZXJlIHRoZVxuICAgKiBkaXJlY3RpdmUgZGVmcyBhcmUgc3RvcmVkKS5cbiAgICovXG4gIHJlYWRvbmx5W1RWSUVXXTogVFZpZXc7XG5cbiAgLyoqIEZsYWdzIGZvciB0aGlzIHZpZXcuIFNlZSBMVmlld0ZsYWdzIGZvciBtb3JlIGluZm8uICovXG4gIFtGTEFHU106IExWaWV3RmxhZ3M7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWF5IHN0b3JlIGFuIHtAbGluayBMVmlld30gb3Ige0BsaW5rIExDb250YWluZXJ9LlxuICAgKlxuICAgKiBgTFZpZXdgIC0gVGhlIHBhcmVudCB2aWV3LiBUaGlzIGlzIG5lZWRlZCB3aGVuIHdlIGV4aXQgdGhlIHZpZXcgYW5kIG11c3QgcmVzdG9yZSB0aGUgcHJldmlvdXNcbiAgICogTFZpZXcuIFdpdGhvdXQgdGhpcywgdGhlIHJlbmRlciBtZXRob2Qgd291bGQgaGF2ZSB0byBrZWVwIGEgc3RhY2sgb2ZcbiAgICogdmlld3MgYXMgaXQgaXMgcmVjdXJzaXZlbHkgcmVuZGVyaW5nIHRlbXBsYXRlcy5cbiAgICpcbiAgICogYExDb250YWluZXJgIC0gVGhlIGN1cnJlbnQgdmlldyBpcyBwYXJ0IG9mIGEgY29udGFpbmVyLCBhbmQgaXMgYW4gZW1iZWRkZWQgdmlldy5cbiAgICovXG4gIFtQQVJFTlRdOiBMVmlld3xMQ29udGFpbmVyfG51bGw7XG5cbiAgLyoqXG4gICAqXG4gICAqIFRoZSBuZXh0IHNpYmxpbmcgTFZpZXcgb3IgTENvbnRhaW5lci5cbiAgICpcbiAgICogQWxsb3dzIHVzIHRvIHByb3BhZ2F0ZSBiZXR3ZWVuIHNpYmxpbmcgdmlldyBzdGF0ZXMgdGhhdCBhcmVuJ3QgaW4gdGhlIHNhbWVcbiAgICogY29udGFpbmVyLiBFbWJlZGRlZCB2aWV3cyBhbHJlYWR5IGhhdmUgYSBub2RlLm5leHQsIGJ1dCBpdCBpcyBvbmx5IHNldCBmb3JcbiAgICogdmlld3MgaW4gdGhlIHNhbWUgY29udGFpbmVyLiBXZSBuZWVkIGEgd2F5IHRvIGxpbmsgY29tcG9uZW50IHZpZXdzIGFuZCB2aWV3c1xuICAgKiBhY3Jvc3MgY29udGFpbmVycyBhcyB3ZWxsLlxuICAgKi9cbiAgW05FWFRdOiBMVmlld3xMQ29udGFpbmVyfG51bGw7XG5cbiAgLyoqIFF1ZXJpZXMgYWN0aXZlIGZvciB0aGlzIHZpZXcgLSBub2RlcyBmcm9tIGEgdmlldyBhcmUgcmVwb3J0ZWQgdG8gdGhvc2UgcXVlcmllcy4gKi9cbiAgW1FVRVJJRVNdOiBMUXVlcmllc3xudWxsO1xuXG4gIC8qKlxuICAgKiBQb2ludGVyIHRvIHRoZSBgVFZpZXdOb2RlYCBvciBgVEVsZW1lbnROb2RlYCB3aGljaCByZXByZXNlbnRzIHRoZSByb290IG9mIHRoZSB2aWV3LlxuICAgKlxuICAgKiBJZiBgVFZpZXdOb2RlYCwgdGhpcyBpcyBhbiBlbWJlZGRlZCB2aWV3IG9mIGEgY29udGFpbmVyLiBXZSBuZWVkIHRoaXMgdG8gYmUgYWJsZSB0b1xuICAgKiBlZmZpY2llbnRseSBmaW5kIHRoZSBgTFZpZXdOb2RlYCB3aGVuIGluc2VydGluZyB0aGUgdmlldyBpbnRvIGFuIGFuY2hvci5cbiAgICpcbiAgICogSWYgYFRFbGVtZW50Tm9kZWAsIHRoaXMgaXMgdGhlIExWaWV3IG9mIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBJZiBudWxsLCB0aGlzIGlzIHRoZSByb290IHZpZXcgb2YgYW4gYXBwbGljYXRpb24gKHJvb3QgY29tcG9uZW50IGlzIGluIHRoaXMgdmlldykuXG4gICAqL1xuICBbVF9IT1NUXTogVFZpZXdOb2RlfFRFbGVtZW50Tm9kZXxudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVuIGEgdmlldyBpcyBkZXN0cm95ZWQsIGxpc3RlbmVycyBuZWVkIHRvIGJlIHJlbGVhc2VkIGFuZCBvdXRwdXRzIG5lZWQgdG8gYmVcbiAgICogdW5zdWJzY3JpYmVkLiBUaGlzIGNvbnRleHQgYXJyYXkgc3RvcmVzIGJvdGggbGlzdGVuZXIgZnVuY3Rpb25zIHdyYXBwZWQgd2l0aFxuICAgKiB0aGVpciBjb250ZXh0IGFuZCBvdXRwdXQgc3Vic2NyaXB0aW9uIGluc3RhbmNlcyBmb3IgYSBwYXJ0aWN1bGFyIHZpZXcuXG4gICAqXG4gICAqIFRoZXNlIGNoYW5nZSBwZXIgTFZpZXcgaW5zdGFuY2UsIHNvIHRoZXkgY2Fubm90IGJlIHN0b3JlZCBvbiBUVmlldy4gSW5zdGVhZCxcbiAgICogVFZpZXcuY2xlYW51cCBzYXZlcyBhbiBpbmRleCB0byB0aGUgbmVjZXNzYXJ5IGNvbnRleHQgaW4gdGhpcyBhcnJheS5cbiAgICovXG4gIC8vIFRPRE86IGZsYXR0ZW4gaW50byBMVmlld1tdXG4gIFtDTEVBTlVQXTogYW55W118bnVsbDtcblxuICAvKipcbiAgICogLSBGb3IgZHluYW1pYyB2aWV3cywgdGhpcyBpcyB0aGUgY29udGV4dCB3aXRoIHdoaWNoIHRvIHJlbmRlciB0aGUgdGVtcGxhdGUgKGUuZy5cbiAgICogICBgTmdGb3JDb250ZXh0YCksIG9yIGB7fWAgaWYgbm90IGRlZmluZWQgZXhwbGljaXRseS5cbiAgICogLSBGb3Igcm9vdCB2aWV3IG9mIHRoZSByb290IGNvbXBvbmVudCB0aGUgY29udGV4dCBjb250YWlucyBjaGFuZ2UgZGV0ZWN0aW9uIGRhdGEuXG4gICAqIC0gRm9yIG5vbi1yb290IGNvbXBvbmVudHMsIHRoZSBjb250ZXh0IGlzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UsXG4gICAqIC0gRm9yIGlubGluZSB2aWV3cywgdGhlIGNvbnRleHQgaXMgbnVsbC5cbiAgICovXG4gIFtDT05URVhUXToge318Um9vdENvbnRleHR8bnVsbDtcblxuICAvKiogQW4gb3B0aW9uYWwgTW9kdWxlIEluamVjdG9yIHRvIGJlIHVzZWQgYXMgZmFsbCBiYWNrIGFmdGVyIEVsZW1lbnQgSW5qZWN0b3JzIGFyZSBjb25zdWx0ZWQuICovXG4gIHJlYWRvbmx5W0lOSkVDVE9SXTogSW5qZWN0b3J8bnVsbDtcblxuICAvKiogRmFjdG9yeSB0byBiZSB1c2VkIGZvciBjcmVhdGluZyBSZW5kZXJlci4gKi9cbiAgW1JFTkRFUkVSX0ZBQ1RPUlldOiBSZW5kZXJlckZhY3RvcnkzO1xuXG4gIC8qKiBSZW5kZXJlciB0byBiZSB1c2VkIGZvciB0aGlzIHZpZXcuICovXG4gIFtSRU5ERVJFUl06IFJlbmRlcmVyMztcblxuICAvKiogQW4gb3B0aW9uYWwgY3VzdG9tIHNhbml0aXplci4gKi9cbiAgW1NBTklUSVpFUl06IFNhbml0aXplcnxudWxsO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIGZpcnN0IExWaWV3IG9yIExDb250YWluZXIgYmVuZWF0aCB0aGlzIExWaWV3IGluXG4gICAqIHRoZSBoaWVyYXJjaHkuXG4gICAqXG4gICAqIE5lY2Vzc2FyeSB0byBzdG9yZSB0aGlzIHNvIHZpZXdzIGNhbiB0cmF2ZXJzZSB0aHJvdWdoIHRoZWlyIG5lc3RlZCB2aWV3c1xuICAgKiB0byByZW1vdmUgbGlzdGVuZXJzIGFuZCBjYWxsIG9uRGVzdHJveSBjYWxsYmFja3MuXG4gICAqL1xuICBbQ0hJTERfSEVBRF06IExWaWV3fExDb250YWluZXJ8bnVsbDtcblxuICAvKipcbiAgICogVGhlIGxhc3QgTFZpZXcgb3IgTENvbnRhaW5lciBiZW5lYXRoIHRoaXMgTFZpZXcgaW4gdGhlIGhpZXJhcmNoeS5cbiAgICpcbiAgICogVGhlIHRhaWwgYWxsb3dzIHVzIHRvIHF1aWNrbHkgYWRkIGEgbmV3IHN0YXRlIHRvIHRoZSBlbmQgb2YgdGhlIHZpZXcgbGlzdFxuICAgKiB3aXRob3V0IGhhdmluZyB0byBwcm9wYWdhdGUgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBbQ0hJTERfVEFJTF06IExWaWV3fExDb250YWluZXJ8bnVsbDtcblxuICAvKipcbiAgICogVmlldyB3aGVyZSB0aGlzIHZpZXcncyB0ZW1wbGF0ZSB3YXMgZGVjbGFyZWQuXG4gICAqXG4gICAqIE9ubHkgYXBwbGljYWJsZSBmb3IgZHluYW1pY2FsbHkgY3JlYXRlZCB2aWV3cy4gV2lsbCBiZSBudWxsIGZvciBpbmxpbmUvY29tcG9uZW50IHZpZXdzLlxuICAgKlxuICAgKiBUaGUgdGVtcGxhdGUgZm9yIGEgZHluYW1pY2FsbHkgY3JlYXRlZCB2aWV3IG1heSBiZSBkZWNsYXJlZCBpbiBhIGRpZmZlcmVudCB2aWV3IHRoYW5cbiAgICogaXQgaXMgaW5zZXJ0ZWQuIFdlIGFscmVhZHkgdHJhY2sgdGhlIFwiaW5zZXJ0aW9uIHZpZXdcIiAodmlldyB3aGVyZSB0aGUgdGVtcGxhdGUgd2FzXG4gICAqIGluc2VydGVkKSBpbiBMVmlld1tQQVJFTlRdLCBidXQgd2UgYWxzbyBuZWVkIGFjY2VzcyB0byB0aGUgXCJkZWNsYXJhdGlvbiB2aWV3XCJcbiAgICogKHZpZXcgd2hlcmUgdGhlIHRlbXBsYXRlIHdhcyBkZWNsYXJlZCkuIE90aGVyd2lzZSwgd2Ugd291bGRuJ3QgYmUgYWJsZSB0byBjYWxsIHRoZVxuICAgKiB2aWV3J3MgdGVtcGxhdGUgZnVuY3Rpb24gd2l0aCB0aGUgcHJvcGVyIGNvbnRleHRzLiBDb250ZXh0IHNob3VsZCBiZSBpbmhlcml0ZWQgZnJvbVxuICAgKiB0aGUgZGVjbGFyYXRpb24gdmlldyB0cmVlLCBub3QgdGhlIGluc2VydGlvbiB2aWV3IHRyZWUuXG4gICAqXG4gICAqIEV4YW1wbGUgKEFwcENvbXBvbmVudCB0ZW1wbGF0ZSk6XG4gICAqXG4gICAqIDxuZy10ZW1wbGF0ZSAjZm9vPjwvbmctdGVtcGxhdGU+ICAgICAgIDwtLSBkZWNsYXJlZCBoZXJlIC0tPlxuICAgKiA8c29tZS1jb21wIFt0cGxdPVwiZm9vXCI+PC9zb21lLWNvbXA+ICAgIDwtLSBpbnNlcnRlZCBpbnNpZGUgdGhpcyBjb21wb25lbnQgLS0+XG4gICAqXG4gICAqIFRoZSA8bmctdGVtcGxhdGU+IGFib3ZlIGlzIGRlY2xhcmVkIGluIHRoZSBBcHBDb21wb25lbnQgdGVtcGxhdGUsIGJ1dCBpdCB3aWxsIGJlIHBhc3NlZCBpbnRvXG4gICAqIFNvbWVDb21wIGFuZCBpbnNlcnRlZCB0aGVyZS4gSW4gdGhpcyBjYXNlLCB0aGUgZGVjbGFyYXRpb24gdmlldyB3b3VsZCBiZSB0aGUgQXBwQ29tcG9uZW50LFxuICAgKiBidXQgdGhlIGluc2VydGlvbiB2aWV3IHdvdWxkIGJlIFNvbWVDb21wLiBXaGVuIHdlIGFyZSByZW1vdmluZyB2aWV3cywgd2Ugd291bGQgd2FudCB0b1xuICAgKiB0cmF2ZXJzZSB0aHJvdWdoIHRoZSBpbnNlcnRpb24gdmlldyB0byBjbGVhbiB1cCBsaXN0ZW5lcnMuIFdoZW4gd2UgYXJlIGNhbGxpbmcgdGhlXG4gICAqIHRlbXBsYXRlIGZ1bmN0aW9uIGR1cmluZyBjaGFuZ2UgZGV0ZWN0aW9uLCB3ZSBuZWVkIHRoZSBkZWNsYXJhdGlvbiB2aWV3IHRvIGdldCBpbmhlcml0ZWRcbiAgICogY29udGV4dC5cbiAgICovXG4gIFtERUNMQVJBVElPTl9WSUVXXTogTFZpZXd8bnVsbDtcblxuXG4gIC8qKlxuICAgKiBQb2ludHMgdG8gdGhlIGRlY2xhcmF0aW9uIGNvbXBvbmVudCB2aWV3LCB1c2VkIHRvIHRyYWNrIHRyYW5zcGxhbnRlZCBgTFZpZXdgcy5cbiAgICpcbiAgICogU2VlOiBgREVDTEFSQVRJT05fVklFV2Agd2hpY2ggcG9pbnRzIHRvIHRoZSBhY3R1YWwgYExWaWV3YCB3aGVyZSBpdCB3YXMgZGVjbGFyZWQsIHdoZXJlYXNcbiAgICogYERFQ0xBUkFUSU9OX0NPTVBPTkVOVF9WSUVXYCBwb2ludHMgdG8gdGhlIGNvbXBvbmVudCB3aGljaCBtYXkgbm90IGJlIHNhbWUgYXNcbiAgICogYERFQ0xBUkFUSU9OX1ZJRVdgLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogPCNWSUVXICNteUNvbXA+XG4gICAqICA8ZGl2ICpuZ0lmPVwidHJ1ZVwiPlxuICAgKiAgIDxuZy10ZW1wbGF0ZSAjbXlUbXBsPi4uLjwvbmctdGVtcGxhdGU+XG4gICAqICA8L2Rpdj5cbiAgICogPC8jVklFVz5cbiAgICogYGBgXG4gICAqIEluIHRoZSBhYm92ZSBjYXNlIGBERUNMQVJBVElPTl9WSUVXYCBmb3IgYG15VG1wbGAgcG9pbnRzIHRvIHRoZSBgTFZpZXdgIG9mIGBuZ0lmYCB3aGVyZWFzXG4gICAqIGBERUNMQVJBVElPTl9DT01QT05FTlRfVklFV2AgcG9pbnRzIHRvIGBMVmlld2Agb2YgdGhlIGBteUNvbXBgIHdoaWNoIG93bnMgdGhlIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGUgcmVhc29uIGZvciB0aGlzIGlzIHRoYXQgYWxsIGVtYmVkZGVkIHZpZXdzIGFyZSBhbHdheXMgY2hlY2stYWx3YXlzIHdoZXJlYXMgdGhlIGNvbXBvbmVudFxuICAgKiB2aWV3IGNhbiBiZSBjaGVjay1hbHdheXMgb3Igb24tcHVzaC4gV2hlbiB3ZSBoYXZlIGEgdHJhbnNwbGFudGVkIHZpZXcgaXQgaXMgaW1wb3J0YW50IHRvXG4gICAqIGRldGVybWluZSBpZiB3ZSBoYXZlIHRyYW5zcGxhbnRlZCBhIHZpZXcgZnJvbSBjaGVjay1hbHdheXMgZGVjbGFyYXRpb24gdG8gb24tcHVzaCBpbnNlcnRpb25cbiAgICogcG9pbnQuIEluIHN1Y2ggYSBjYXNlIHRoZSB0cmFuc3BsYW50ZWQgdmlldyBuZWVkcyB0byBiZSBhZGRlZCB0byB0aGUgYExDb250YWluZXJgIGluIHRoZVxuICAgKiBkZWNsYXJlZCBgTFZpZXdgIGFuZCBDRCBkdXJpbmcgdGhlIGRlY2xhcmVkIHZpZXcgQ0QgKGluIGFkZGl0aW9uIHRvIHRoZSBDRCBhdCB0aGUgaW5zZXJ0aW9uXG4gICAqIHBvaW50LikgKEFueSB0cmFuc3BsYW50ZWQgdmlld3Mgd2hpY2ggYXJlIGludHJhIENvbXBvbmVudCBhcmUgb2Ygbm8gaW50ZXJlc3QgYmVjYXVzZSB0aGUgQ0RcbiAgICogc3RyYXRlZ3kgb2YgZGVjbGFyYXRpb24gYW5kIGluc2VydGlvbiB3aWxsIGFsd2F5cyBiZSB0aGUgc2FtZSwgYmVjYXVzZSBpdCBpcyB0aGUgc2FtZVxuICAgKiBjb21wb25lbnQuKVxuICAgKlxuICAgKiBRdWVyaWVzIGFscmVhZHkgdHJhY2sgbW92ZWQgdmlld3MgaW4gYExWaWV3W0RFQ0xBUkFUSU9OX0xDT05UQUlORVJdYCBhbmRcbiAgICogYExDb250YWluZXJbTU9WRURfVklFV1NdYC4gSG93ZXZlciB0aGUgcXVlcmllcyBhbHNvIHRyYWNrIGBMVmlld2BzIHdoaWNoIG1vdmVkIHdpdGhpbiB0aGUgc2FtZVxuICAgKiBjb21wb25lbnQgYExWaWV3YC4gVHJhbnNwbGFudGVkIHZpZXdzIGFyZSBhIHN1YnNldCBvZiBtb3ZlZCB2aWV3cywgYW5kIHdlIHVzZVxuICAgKiBgREVDTEFSQVRJT05fQ09NUE9ORU5UX1ZJRVdgIHRvIGRpZmZlcmVudGlhdGUgdGhlbS4gQXMgaW4gdGhpcyBleGFtcGxlLlxuICAgKlxuICAgKiBFeGFtcGxlIHNob3dpbmcgaW50cmEgY29tcG9uZW50IGBMVmlld2AgbW92ZW1lbnQuXG4gICAqIGBgYFxuICAgKiA8I1ZJRVcgI215Q29tcD5cbiAgICogICA8ZGl2ICpuZ0lmPVwiY29uZGl0aW9uOyB0aGVuIHRoZW5CbG9jayBlbHNlIGVsc2VCbG9ja1wiPjwvZGl2PlxuICAgKiAgIDxuZy10ZW1wbGF0ZSAjdGhlbkJsb2NrPkNvbnRlbnQgdG8gcmVuZGVyIHdoZW4gY29uZGl0aW9uIGlzIHRydWUuPC9uZy10ZW1wbGF0ZT5cbiAgICogICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5Db250ZW50IHRvIHJlbmRlciB3aGVuIGNvbmRpdGlvbiBpcyBmYWxzZS48L25nLXRlbXBsYXRlPlxuICAgKiA8LyNWSUVXPlxuICAgKiBgYGBcbiAgICogVGhlIGB0aGVuQmxvY2tgIGFuZCBgZWxzZUJsb2NrYCBpcyBtb3ZlZCBidXQgbm90IHRyYW5zcGxhbnRlZC5cbiAgICpcbiAgICogRXhhbXBsZSBzaG93aW5nIGludGVyIGNvbXBvbmVudCBgTFZpZXdgIG1vdmVtZW50ICh0cmFuc3BsYW50ZWQgdmlldykuXG4gICAqIGBgYFxuICAgKiA8I1ZJRVcgI215Q29tcD5cbiAgICogICA8bmctdGVtcGxhdGUgI215VG1wbD4uLi48L25nLXRlbXBsYXRlPlxuICAgKiAgIDxpbnNlcnRpb24tY29tcG9uZW50IFt0ZW1wbGF0ZV09XCJteVRtcGxcIj48L2luc2VydGlvbi1jb21wb25lbnQ+XG4gICAqIDwvI1ZJRVc+XG4gICAqIGBgYFxuICAgKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSBgbXlUbXBsYCBpcyBwYXNzZWQgaW50byBhIGRpZmZlcmVudCBjb21wb25lbnQuIElmIGBpbnNlcnRpb24tY29tcG9uZW50YFxuICAgKiBpbnN0YW50aWF0ZXMgYG15VG1wbGAgYW5kIGBpbnNlcnRpb24tY29tcG9uZW50YCBpcyBvbi1wdXNoIHRoZW4gdGhlIGBMQ29udGFpbmVyYCBuZWVkcyB0byBiZVxuICAgKiBtYXJrZWQgYXMgY29udGFpbmluZyB0cmFuc3BsYW50ZWQgdmlld3MgYW5kIHRob3NlIHZpZXdzIG5lZWQgdG8gYmUgQ0QgYXMgcGFydCBvZiB0aGVcbiAgICogZGVjbGFyYXRpb24gQ0QuXG4gICAqXG4gICAqXG4gICAqIFdoZW4gY2hhbmdlIGRldGVjdGlvbiBydW5zLCBpdCBpdGVyYXRlcyBvdmVyIGBbTU9WRURfVklFV1NdYCBhbmQgQ0RzIGFueSBjaGlsZCBgTFZpZXdgcyB3aGVyZVxuICAgKiB0aGUgYERFQ0xBUkFUSU9OX0NPTVBPTkVOVF9WSUVXYCBvZiB0aGUgY3VycmVudCBjb21wb25lbnQgYW5kIHRoZSBjaGlsZCBgTFZpZXdgIGRvZXMgbm90IG1hdGNoXG4gICAqIChpdCBoYXMgYmVlbiB0cmFuc3BsYW50ZWQgYWNyb3NzIGNvbXBvbmVudHMuKVxuICAgKlxuICAgKiBOb3RlOiBgW0RFQ0xBUkFUSU9OX0NPTVBPTkVOVF9WSUVXXWAgcG9pbnRzIHRvIGl0c2VsZiBpZiB0aGUgTFZpZXcgaXMgYSBjb21wb25lbnQgdmlldyAodGhlXG4gICAqICAgICAgIHNpbXBsZXN0IC8gbW9zdCBjb21tb24gY2FzZSkuXG4gICAqXG4gICAqIHNlZSBhbHNvOlxuICAgKiAgIC0gaHR0cHM6Ly9oYWNrbWQuaW8vQG1oZXZlcnkvckpVSnN2djlIIHdyaXRlIHVwIG9mIHRoZSBwcm9ibGVtXG4gICAqICAgLSBgTENvbnRhaW5lcltIQVNfVFJBTlNQTEFOVEVEX1ZJRVdTXWAgd2hpY2ggbWFya3Mgd2hpY2ggYExDb250YWluZXJgIGhhcyB0cmFuc3BsYW50ZWQgdmlld3MuXG4gICAqICAgLSBgTENvbnRhaW5lcltUUkFOU1BMQU5UX0hFQURdYCBhbmQgYExDb250YWluZXJbVFJBTlNQTEFOVF9UQUlMXWAgc3RvcmFnZSBmb3IgdHJhbnNwbGFudGVkXG4gICAqICAgLSBgTFZpZXdbREVDTEFSQVRJT05fTENPTlRBSU5FUl1gIHNpbWlsYXIgcHJvYmxlbSBmb3IgcXVlcmllc1xuICAgKiAgIC0gYExDb250YWluZXJbTU9WRURfVklFV1NdYCBzaW1pbGFyIHByb2JsZW0gZm9yIHF1ZXJpZXNcbiAgICovXG4gIFtERUNMQVJBVElPTl9DT01QT05FTlRfVklFV106IExWaWV3O1xuXG4gIC8qKlxuICAgKiBBIGRlY2xhcmF0aW9uIHBvaW50IG9mIGVtYmVkZGVkIHZpZXdzIChvbmVzIGluc3RhbnRpYXRlZCBiYXNlZCBvbiB0aGUgY29udGVudCBvZiBhXG4gICAqIDxuZy10ZW1wbGF0ZT4pLCBudWxsIGZvciBvdGhlciB0eXBlcyBvZiB2aWV3cy5cbiAgICpcbiAgICogV2UgbmVlZCB0byB0cmFjayBhbGwgZW1iZWRkZWQgdmlld3MgY3JlYXRlZCBmcm9tIGEgZ2l2ZW4gZGVjbGFyYXRpb24gcG9pbnQgc28gd2UgY2FuIHByZXBhcmVcbiAgICogcXVlcnkgbWF0Y2hlcyBpbiBhIHByb3BlciBvcmRlciAocXVlcnkgbWF0Y2hlcyBhcmUgb3JkZXJlZCBiYXNlZCBvbiB0aGVpciBkZWNsYXJhdGlvbiBwb2ludCBhbmRcbiAgICogX25vdF8gdGhlIGluc2VydGlvbiBwb2ludCkuXG4gICAqL1xuICBbREVDTEFSQVRJT05fTENPTlRBSU5FUl06IExDb250YWluZXJ8bnVsbDtcblxuICAvKipcbiAgICogTW9yZSBmbGFncyBmb3IgdGhpcyB2aWV3LiBTZWUgUHJlT3JkZXJIb29rRmxhZ3MgZm9yIG1vcmUgaW5mby5cbiAgICovXG4gIFtQUkVPUkRFUl9IT09LX0ZMQUdTXTogUHJlT3JkZXJIb29rRmxhZ3M7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgZGlyZWN0IHRyYW5zcGxhbnRlZCB2aWV3cyB3aGljaCBuZWVkIGEgcmVmcmVzaCBvciBoYXZlIGRlc2NlbmRhbnRzIHRoZW1zZWx2ZXNcbiAgICogdGhhdCBuZWVkIGEgcmVmcmVzaCBidXQgaGF2ZSBub3QgbWFya2VkIHRoZWlyIGFuY2VzdG9ycyBhcyBEaXJ0eS4gVGhpcyB0ZWxscyB1cyB0aGF0IGR1cmluZ1xuICAgKiBjaGFuZ2UgZGV0ZWN0aW9uIHdlIHNob3VsZCBzdGlsbCBkZXNjZW5kIHRvIGZpbmQgdGhvc2UgY2hpbGRyZW4gdG8gcmVmcmVzaCwgZXZlbiBpZiB0aGUgcGFyZW50c1xuICAgKiBhcmUgbm90IGBEaXJ0eWAvYENoZWNrQWx3YXlzYC5cbiAgICovXG4gIFtUUkFOU1BMQU5URURfVklFV1NfVE9fUkVGUkVTSF06IG51bWJlcjtcbn1cblxuLyoqIEZsYWdzIGFzc29jaWF0ZWQgd2l0aCBhbiBMVmlldyAoc2F2ZWQgaW4gTFZpZXdbRkxBR1NdKSAqL1xuZXhwb3J0IGNvbnN0IGVudW0gTFZpZXdGbGFncyB7XG4gIC8qKiBUaGUgc3RhdGUgb2YgdGhlIGluaXQgcGhhc2Ugb24gdGhlIGZpcnN0IDIgYml0cyAqL1xuICBJbml0UGhhc2VTdGF0ZUluY3JlbWVudGVyID0gMGIwMDAwMDAwMDAwMSxcbiAgSW5pdFBoYXNlU3RhdGVNYXNrID0gMGIwMDAwMDAwMDAxMSxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIHZpZXcgaXMgaW4gY3JlYXRpb25Nb2RlLlxuICAgKlxuICAgKiBUaGlzIG11c3QgYmUgc3RvcmVkIGluIHRoZSB2aWV3IHJhdGhlciB0aGFuIHVzaW5nIGBkYXRhYCBhcyBhIG1hcmtlciBzbyB0aGF0XG4gICAqIHdlIGNhbiBwcm9wZXJseSBzdXBwb3J0IGVtYmVkZGVkIHZpZXdzLiBPdGhlcndpc2UsIHdoZW4gZXhpdGluZyBhIGNoaWxkIHZpZXdcbiAgICogYmFjayBpbnRvIHRoZSBwYXJlbnQgdmlldywgYGRhdGFgIHdpbGwgYmUgZGVmaW5lZCBhbmQgYGNyZWF0aW9uTW9kZWAgd2lsbCBiZVxuICAgKiBpbXByb3Blcmx5IHJlcG9ydGVkIGFzIGZhbHNlLlxuICAgKi9cbiAgQ3JlYXRpb25Nb2RlID0gMGIwMDAwMDAwMDEwMCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhpcyBMVmlldyBpbnN0YW5jZSBpcyBvbiBpdHMgZmlyc3QgcHJvY2Vzc2luZyBwYXNzLlxuICAgKlxuICAgKiBBbiBMVmlldyBpbnN0YW5jZSBpcyBjb25zaWRlcmVkIHRvIGJlIG9uIGl0cyBcImZpcnN0IHBhc3NcIiB1bnRpbCBpdFxuICAgKiBoYXMgY29tcGxldGVkIG9uZSBjcmVhdGlvbiBtb2RlIHJ1biBhbmQgb25lIHVwZGF0ZSBtb2RlIHJ1bi4gQXQgdGhpc1xuICAgKiB0aW1lLCB0aGUgZmxhZyBpcyB0dXJuZWQgb2ZmLlxuICAgKi9cbiAgRmlyc3RMVmlld1Bhc3MgPSAwYjAwMDAwMDAxMDAwLFxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgdmlldyBoYXMgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5IChjaGVja3MgYWx3YXlzKSBvciBvblB1c2ggKi9cbiAgQ2hlY2tBbHdheXMgPSAwYjAwMDAwMDEwMDAwLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBtYW51YWwgY2hhbmdlIGRldGVjdGlvbiBpcyB0dXJuZWQgb24gZm9yIG9uUHVzaCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc3BlY2lhbCBtb2RlIHRoYXQgb25seSBtYXJrcyBjb21wb25lbnRzIGRpcnR5IGluIHR3byBjYXNlczpcbiAgICogMSkgVGhlcmUgaGFzIGJlZW4gYSBjaGFuZ2UgdG8gYW4gQElucHV0IHByb3BlcnR5XG4gICAqIDIpIGBtYXJrRGlydHkoKWAgaGFzIGJlZW4gY2FsbGVkIG1hbnVhbGx5IGJ5IHRoZSB1c2VyXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpbiB0aGlzIG1vZGUsIHRoZSBmaXJpbmcgb2YgZXZlbnRzIGRvZXMgTk9UIG1hcmsgY29tcG9uZW50c1xuICAgKiBkaXJ0eSBhdXRvbWF0aWNhbGx5LlxuICAgKlxuICAgKiBNYW51YWwgbW9kZSBpcyB0dXJuZWQgb2ZmIGJ5IGRlZmF1bHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBhcyBldmVudHNcbiAgICogYXV0b21hdGljYWxseSBtYXJrIE9uUHVzaCBjb21wb25lbnRzIGRpcnR5IGluIFZpZXcgRW5naW5lLlxuICAgKlxuICAgKiBUT0RPOiBBZGQgYSBwdWJsaWMgQVBJIHRvIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IHRvIHR1cm4gdGhpcyBtb2RlIG9uXG4gICAqL1xuICBNYW51YWxPblB1c2ggPSAwYjAwMDAwMTAwMDAwLFxuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIHZpZXcgaXMgY3VycmVudGx5IGRpcnR5IChuZWVkaW5nIGNoZWNrKSAqL1xuICBEaXJ0eSA9IDBiMDAwMDAxMDAwMDAwLFxuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIHZpZXcgaXMgY3VycmVudGx5IGF0dGFjaGVkIHRvIGNoYW5nZSBkZXRlY3Rpb24gdHJlZS4gKi9cbiAgQXR0YWNoZWQgPSAwYjAwMDAxMDAwMDAwMCxcblxuICAvKiogV2hldGhlciBvciBub3QgdGhpcyB2aWV3IGlzIGRlc3Ryb3llZC4gKi9cbiAgRGVzdHJveWVkID0gMGIwMDAxMDAwMDAwMDAsXG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgdmlldyBpcyB0aGUgcm9vdCB2aWV3ICovXG4gIElzUm9vdCA9IDBiMDAxMDAwMDAwMDAwLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgbW92ZWQgTFZpZXcgd2FzIG5lZWRzIHRvIGJlIHJlZnJlc2hlZCBhdCB0aGUgaW5zZXJ0aW9uIGxvY2F0aW9uIGJlY2F1c2UgdGhlXG4gICAqIGRlY2xhcmF0aW9uIHdhcyBkaXJ0eS5cbiAgICovXG4gIFJlZnJlc2hUcmFuc3BsYW50ZWRWaWV3ID0gMGIwMDEwMDAwMDAwMDAwLFxuXG4gIC8qKlxuICAgKiBJbmRleCBvZiB0aGUgY3VycmVudCBpbml0IHBoYXNlIG9uIGxhc3QgMjEgYml0c1xuICAgKi9cbiAgSW5kZXhXaXRoaW5Jbml0UGhhc2VJbmNyZW1lbnRlciA9IDBiMDEwMDAwMDAwMDAwMCxcbiAgSW5kZXhXaXRoaW5Jbml0UGhhc2VTaGlmdCA9IDExLFxuICBJbmRleFdpdGhpbkluaXRQaGFzZVJlc2V0ID0gMGIwMDExMTExMTExMTExLFxufVxuXG4vKipcbiAqIFBvc3NpYmxlIHN0YXRlcyBvZiB0aGUgaW5pdCBwaGFzZTpcbiAqIC0gMDA6IE9uSW5pdCBob29rcyB0byBiZSBydW4uXG4gKiAtIDAxOiBBZnRlckNvbnRlbnRJbml0IGhvb2tzIHRvIGJlIHJ1blxuICogLSAxMDogQWZ0ZXJWaWV3SW5pdCBob29rcyB0byBiZSBydW5cbiAqIC0gMTE6IEFsbCBpbml0IGhvb2tzIGhhdmUgYmVlbiBydW5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gSW5pdFBoYXNlU3RhdGUge1xuICBPbkluaXRIb29rc1RvQmVSdW4gPSAwYjAwLFxuICBBZnRlckNvbnRlbnRJbml0SG9va3NUb0JlUnVuID0gMGIwMSxcbiAgQWZ0ZXJWaWV3SW5pdEhvb2tzVG9CZVJ1biA9IDBiMTAsXG4gIEluaXRQaGFzZUNvbXBsZXRlZCA9IDBiMTEsXG59XG5cbi8qKiBNb3JlIGZsYWdzIGFzc29jaWF0ZWQgd2l0aCBhbiBMVmlldyAoc2F2ZWQgaW4gTFZpZXdbUFJFT1JERVJfSE9PS19GTEFHU10pICovXG5leHBvcnQgY29uc3QgZW51bSBQcmVPcmRlckhvb2tGbGFncyB7XG4gIC8qKlxuICAgICBUaGUgaW5kZXggb2YgdGhlIG5leHQgcHJlLW9yZGVyIGhvb2sgdG8gYmUgY2FsbGVkIGluIHRoZSBob29rcyBhcnJheSwgb24gdGhlIGZpcnN0IDE2XG4gICAgIGJpdHNcbiAgICovXG4gIEluZGV4T2ZUaGVOZXh0UHJlT3JkZXJIb29rTWFza01hc2sgPSAwYjAxMTExMTExMTExMTExMTExLFxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGluaXQgaG9va3MgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjYWxsZWQsIG9uIHRoZSBsYXN0IDE2IGJpdHNcbiAgICovXG4gIE51bWJlck9mSW5pdEhvb2tzQ2FsbGVkSW5jcmVtZW50ZXIgPSAwYjAxMDAwMDAwMDAwMDAwMDAwMCxcbiAgTnVtYmVyT2ZJbml0SG9va3NDYWxsZWRTaGlmdCA9IDE2LFxuICBOdW1iZXJPZkluaXRIb29rc0NhbGxlZE1hc2sgPSAwYjExMTExMTExMTExMTExMTEwMDAwMDAwMDAwMDAwMDAwLFxufVxuXG4vKipcbiAqIFNldCBvZiBpbnN0cnVjdGlvbnMgdXNlZCB0byBwcm9jZXNzIGhvc3QgYmluZGluZ3MgZWZmaWNpZW50bHkuXG4gKlxuICogU2VlIFZJRVdfREFUQS5tZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeHBhbmRvSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgQXJyYXk8bnVtYmVyfEhvc3RCaW5kaW5nc0Z1bmN0aW9uPGFueT58bnVsbD4ge31cblxuLyoqXG4gKiBFeHBsaWNpdGx5IG1hcmtzIGBUVmlld2AgYXMgYSBzcGVjaWZpYyB0eXBlIGluIGBuZ0Rldk1vZGVgXG4gKlxuICogSXQgaXMgdXNlZnVsIHRvIGtub3cgY29uY2VwdHVhbGx5IHdoYXQgdGltZSBvZiBgVFZpZXdgIHdlIGFyZSBkZWFsaW5nIHdpdGggd2hlblxuICogZGVidWdnaW5nIGFuIGFwcGxpY2F0aW9uIChldmVuIGlmIHRoZSBydW50aW1lIGRvZXMgbm90IG5lZWQgaXQuKSBGb3IgdGhpcyByZWFzb25cbiAqIHdlIHN0b3JlIHRoaXMgaW5mb3JtYXRpb24gaW4gdGhlIGBuZ0Rldk1vZGVgIGBUVmlld2AgYW5kIHRoYW4gdXNlIGl0IGZvclxuICogYmV0dGVyIGRlYnVnZ2luZyBleHBlcmllbmNlLlxuICovXG5leHBvcnQgY29uc3QgZW51bSBUVmlld1R5cGUge1xuICAvKipcbiAgICogUm9vdCBgVFZpZXdgIGlzIHRoZSB1c2VkIHRvIGJvb3RzdHJhcCBjb21wb25lbnRzIGludG8uIEl0IGlzIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aFxuICAgKiBgTFZpZXdgIHdoaWNoIHRha2VzIGFuIGV4aXN0aW5nIERPTSBub2RlIG5vdCBvd25lZCBieSBBbmd1bGFyIGFuZCB3cmFwcyBpdCBpbiBgVFZpZXdgL2BMVmlld2BcbiAgICogc28gdGhhdCBvdGhlciBjb21wb25lbnRzIGNhbiBiZSBsb2FkZWQgaW50byBpdC5cbiAgICovXG4gIFJvb3QgPSAwLFxuXG4gIC8qKlxuICAgKiBgVFZpZXdgIGFzc29jaWF0ZWQgd2l0aCBhIENvbXBvbmVudC4gVGhpcyB3b3VsZCBiZSB0aGUgYFRWaWV3YCBkaXJlY3RseSBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAqIGNvbXBvbmVudCB2aWV3IChhcyBvcHBvc2VkIGFuIGBFbWJlZGRlZGAgYFRWaWV3YCB3aGljaCB3b3VsZCBiZSBhIGNoaWxkIG9mIGBDb21wb25lbnRgIGBUVmlld2ApXG4gICAqL1xuICBDb21wb25lbnQgPSAxLFxuXG4gIC8qKlxuICAgKiBgVFZpZXdgIGFzc29jaWF0ZWQgd2l0aCBhIHRlbXBsYXRlLiBTdWNoIGFzIGAqbmdJZmAsIGA8bmctdGVtcGxhdGU+YCBldGMuLi4gQSBgQ29tcG9uZW50YFxuICAgKiBjYW4gaGF2ZSB6ZXJvIG9yIG1vcmUgYEVtYmVkZWRlYCBgVFZpZXdgcy5cbiAgICovXG4gIEVtYmVkZGVkID0gMixcbn1cblxuLyoqXG4gKiBUaGUgc3RhdGljIGRhdGEgZm9yIGFuIExWaWV3IChzaGFyZWQgYmV0d2VlbiBhbGwgdGVtcGxhdGVzIG9mIGFcbiAqIGdpdmVuIHR5cGUpLlxuICpcbiAqIFN0b3JlZCBvbiB0aGUgYENvbXBvbmVudERlZi50Vmlld2AuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVFZpZXcge1xuICAvKipcbiAgICogVHlwZSBvZiBgVFZpZXdgIChgUm9vdGB8YENvbXBvbmVudGB8YEVtYmVkZGVkYCkuXG4gICAqL1xuICB0eXBlOiBUVmlld1R5cGU7XG5cbiAgLyoqXG4gICAqIElEIGZvciBpbmxpbmUgdmlld3MgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSB2aWV3IGlzIHRoZSBzYW1lIGFzIHRoZSBwcmV2aW91cyB2aWV3XG4gICAqIGluIGEgY2VydGFpbiBwb3NpdGlvbi4gSWYgaXQncyBub3QsIHdlIGtub3cgdGhlIG5ldyB2aWV3IG5lZWRzIHRvIGJlIGluc2VydGVkXG4gICAqIGFuZCB0aGUgb25lIHRoYXQgZXhpc3RzIG5lZWRzIHRvIGJlIHJlbW92ZWQgKGUuZy4gaWYvZWxzZSBzdGF0ZW1lbnRzKVxuICAgKlxuICAgKiBJZiB0aGlzIGlzIC0xLCB0aGVuIHRoaXMgaXMgYSBjb21wb25lbnQgdmlldyBvciBhIGR5bmFtaWNhbGx5IGNyZWF0ZWQgdmlldy5cbiAgICovXG4gIHJlYWRvbmx5IGlkOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBibHVlcHJpbnQgdXNlZCB0byBnZW5lcmF0ZSBMVmlldyBpbnN0YW5jZXMgZm9yIHRoaXMgVFZpZXcuIENvcHlpbmcgdGhpc1xuICAgKiBibHVlcHJpbnQgaXMgZmFzdGVyIHRoYW4gY3JlYXRpbmcgYSBuZXcgTFZpZXcgZnJvbSBzY3JhdGNoLlxuICAgKi9cbiAgYmx1ZXByaW50OiBMVmlldztcblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHVzZWQgdG8gcmVmcmVzaCB0aGUgdmlldyBvZiBkeW5hbWljYWxseSBjcmVhdGVkIHZpZXdzXG4gICAqIGFuZCBjb21wb25lbnRzLiBXaWxsIGJlIG51bGwgZm9yIGlubGluZSB2aWV3cy5cbiAgICovXG4gIHRlbXBsYXRlOiBDb21wb25lbnRUZW1wbGF0ZTx7fT58bnVsbDtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBjb250YWluaW5nIHF1ZXJ5LXJlbGF0ZWQgaW5zdHJ1Y3Rpb25zLlxuICAgKi9cbiAgdmlld1F1ZXJ5OiBWaWV3UXVlcmllc0Z1bmN0aW9uPHt9PnxudWxsO1xuXG4gIC8qKlxuICAgKiBQb2ludGVyIHRvIHRoZSBob3N0IGBUTm9kZWAgKG5vdCBwYXJ0IG9mIHRoaXMgVFZpZXcpLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIGEgYFRWaWV3Tm9kZWAgZm9yIGFuIGBMVmlld05vZGVgLCB0aGlzIGlzIGFuIGVtYmVkZGVkIHZpZXcgb2YgYSBjb250YWluZXIuXG4gICAqIFdlIG5lZWQgdGhpcyBwb2ludGVyIHRvIGJlIGFibGUgdG8gZWZmaWNpZW50bHkgZmluZCB0aGlzIG5vZGUgd2hlbiBpbnNlcnRpbmcgdGhlIHZpZXdcbiAgICogaW50byBhbiBhbmNob3IuXG4gICAqXG4gICAqIElmIHRoaXMgaXMgYSBgVEVsZW1lbnROb2RlYCwgdGhpcyBpcyB0aGUgdmlldyBvZiBhIHJvb3QgY29tcG9uZW50LiBJdCBoYXMgZXhhY3RseSBvbmVcbiAgICogcm9vdCBUTm9kZS5cbiAgICpcbiAgICogSWYgdGhpcyBpcyBudWxsLCB0aGlzIGlzIHRoZSB2aWV3IG9mIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IGF0IHJvb3QuIFdlIGRvIG5vdCBzdG9yZVxuICAgKiB0aGUgaG9zdCBUTm9kZXMgZm9yIGNoaWxkIGNvbXBvbmVudCB2aWV3cyBiZWNhdXNlIHRoZXkgY2FuIHBvdGVudGlhbGx5IGhhdmUgc2V2ZXJhbFxuICAgKiBkaWZmZXJlbnQgaG9zdCBUTm9kZXMsIGRlcGVuZGluZyBvbiB3aGVyZSB0aGUgY29tcG9uZW50IGlzIGJlaW5nIHVzZWQuIFRoZXNlIGhvc3RcbiAgICogVE5vZGVzIGNhbm5vdCBiZSBzaGFyZWQgKGR1ZSB0byBkaWZmZXJlbnQgaW5kaWNlcywgZXRjKS5cbiAgICovXG4gIG5vZGU6IFRWaWV3Tm9kZXxURWxlbWVudE5vZGV8bnVsbDtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhpcyB0ZW1wbGF0ZSBoYXMgYmVlbiBwcm9jZXNzZWQgaW4gY3JlYXRpb24gbW9kZS4gKi9cbiAgZmlyc3RDcmVhdGVQYXNzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgV2hldGhlciBvciBub3QgdGhpcyB0ZW1wbGF0ZSBoYXMgYmVlbiBwcm9jZXNzZWQgaW4gdXBkYXRlIG1vZGUgKGUuZy4gY2hhbmdlIGRldGVjdGVkKVxuICAgKlxuICAgKiBgZmlyc3RVcGRhdGVQYXNzYCBpcyB1c2VkIGJ5IHN0eWxpbmcgdG8gc2V0IHVwIGBURGF0YWAgdG8gY29udGFpbiBtZXRhZGF0YSBhYm91dCB0aGUgc3R5bGluZ1xuICAgKiBpbnN0cnVjdGlvbnMuIChNYWlubHkgdG8gYnVpbGQgdXAgYSBsaW5rZWQgbGlzdCBvZiBzdHlsaW5nIHByaW9yaXR5IG9yZGVyLilcbiAgICpcbiAgICogVHlwaWNhbGx5IHRoaXMgZnVuY3Rpb24gZ2V0cyBjbGVhcmVkIGFmdGVyIGZpcnN0IGV4ZWN1dGlvbi4gSWYgZXhjZXB0aW9uIGlzIHRocm93biB0aGVuIHRoaXNcbiAgICogZmxhZyBjYW4gcmVtYWluIHR1cm5lZCB1biB1bnRpbCB0aGVyZSBpcyBmaXJzdCBzdWNjZXNzZnVsIChubyBleGNlcHRpb24pIHBhc3MuIFRoaXMgbWVhbnMgdGhhdFxuICAgKiBpbmRpdmlkdWFsIHN0eWxpbmcgaW5zdHJ1Y3Rpb25zIGtlZXAgdHJhY2sgb2YgaWYgdGhleSBoYXZlIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgbGlua2VkXG4gICAqIGxpc3QgdG8gcHJldmVudCBkb3VibGUgYWRkaW5nLlxuICAgKi9cbiAgZmlyc3RVcGRhdGVQYXNzOiBib29sZWFuO1xuXG4gIC8qKiBTdGF0aWMgZGF0YSBlcXVpdmFsZW50IG9mIExWaWV3LmRhdGFbXS4gQ29udGFpbnMgVE5vZGVzLCBQaXBlRGVmSW50ZXJuYWwgb3IgVEkxOG4uICovXG4gIGRhdGE6IFREYXRhO1xuXG4gIC8qKlxuICAgKiBUaGUgYmluZGluZyBzdGFydCBpbmRleCBpcyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGRhdGEgYXJyYXlcbiAgICogc3RhcnRzIHRvIHN0b3JlIGJpbmRpbmdzIG9ubHkuIFNhdmluZyB0aGlzIHZhbHVlIGVuc3VyZXMgdGhhdCB3ZVxuICAgKiB3aWxsIGJlZ2luIHJlYWRpbmcgYmluZGluZ3MgYXQgdGhlIGNvcnJlY3QgcG9pbnQgaW4gdGhlIGFycmF5IHdoZW5cbiAgICogd2UgYXJlIGluIHVwZGF0ZSBtb2RlLlxuICAgKlxuICAgKiAtMSBtZWFucyB0aGF0IGl0IGhhcyBub3QgYmVlbiBpbml0aWFsaXplZC5cbiAgICovXG4gIGJpbmRpbmdTdGFydEluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCB3aGVyZSB0aGUgXCJleHBhbmRvXCIgc2VjdGlvbiBvZiBgTFZpZXdgIGJlZ2lucy4gVGhlIGV4cGFuZG9cbiAgICogc2VjdGlvbiBjb250YWlucyBpbmplY3RvcnMsIGRpcmVjdGl2ZSBpbnN0YW5jZXMsIGFuZCBob3N0IGJpbmRpbmcgdmFsdWVzLlxuICAgKiBVbmxpa2UgdGhlIFwiZGVjbHNcIiBhbmQgXCJ2YXJzXCIgc2VjdGlvbnMgb2YgYExWaWV3YCwgdGhlIGxlbmd0aCBvZiB0aGlzXG4gICAqIHNlY3Rpb24gY2Fubm90IGJlIGNhbGN1bGF0ZWQgYXQgY29tcGlsZS10aW1lIGJlY2F1c2UgZGlyZWN0aXZlcyBhcmUgbWF0Y2hlZFxuICAgKiBhdCBydW50aW1lIHRvIHByZXNlcnZlIGxvY2FsaXR5LlxuICAgKlxuICAgKiBXZSBzdG9yZSB0aGlzIHN0YXJ0IGluZGV4IHNvIHdlIGtub3cgd2hlcmUgdG8gc3RhcnQgY2hlY2tpbmcgaG9zdCBiaW5kaW5nc1xuICAgKiBpbiBgc2V0SG9zdEJpbmRpbmdzYC5cbiAgICovXG4gIGV4cGFuZG9TdGFydEluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZXJlIGFyZSBhbnkgc3RhdGljIHZpZXcgcXVlcmllcyB0cmFja2VkIG9uIHRoaXMgdmlldy5cbiAgICpcbiAgICogV2Ugc3RvcmUgdGhpcyBzbyB3ZSBrbm93IHdoZXRoZXIgb3Igbm90IHdlIHNob3VsZCBkbyBhIHZpZXcgcXVlcnlcbiAgICogcmVmcmVzaCBhZnRlciBjcmVhdGlvbiBtb2RlIHRvIGNvbGxlY3Qgc3RhdGljIHF1ZXJ5IHJlc3VsdHMuXG4gICAqL1xuICBzdGF0aWNWaWV3UXVlcmllczogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlcmUgYXJlIGFueSBzdGF0aWMgY29udGVudCBxdWVyaWVzIHRyYWNrZWQgb24gdGhpcyB2aWV3LlxuICAgKlxuICAgKiBXZSBzdG9yZSB0aGlzIHNvIHdlIGtub3cgd2hldGhlciBvciBub3Qgd2Ugc2hvdWxkIGRvIGEgY29udGVudCBxdWVyeVxuICAgKiByZWZyZXNoIGFmdGVyIGNyZWF0aW9uIG1vZGUgdG8gY29sbGVjdCBzdGF0aWMgcXVlcnkgcmVzdWx0cy5cbiAgICovXG4gIHN0YXRpY0NvbnRlbnRRdWVyaWVzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZmlyc3QgY2hpbGQgbm9kZSBsb2NhdGVkIGluIHRoZSB2aWV3LlxuICAgKi9cbiAgZmlyc3RDaGlsZDogVE5vZGV8bnVsbDtcblxuICAvKipcbiAgICogU2V0IG9mIGluc3RydWN0aW9ucyB1c2VkIHRvIHByb2Nlc3MgaG9zdCBiaW5kaW5ncyBlZmZpY2llbnRseS5cbiAgICpcbiAgICogU2VlIFZJRVdfREFUQS5tZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIC8vIFRPRE8obWlza28pOiBgZXhwYW5kb0luc3RydWN0aW9uc2Agc2hvdWxkIGJlIHJlbmFtZWQgdG8gYGhvc3RCaW5kaW5nc0luc3RydWN0aW9uc2Agc2luY2UgdGhleVxuICAvLyBrZWVwIHRyYWNrIG9mIGBob3N0QmluZGluZ3NgIHdoaWNoIG5lZWQgdG8gYmUgZXhlY3V0ZWQuXG4gIGV4cGFuZG9JbnN0cnVjdGlvbnM6IEV4cGFuZG9JbnN0cnVjdGlvbnN8bnVsbDtcblxuICAvKipcbiAgICogRnVsbCByZWdpc3RyeSBvZiBkaXJlY3RpdmVzIGFuZCBjb21wb25lbnRzIHRoYXQgbWF5IGJlIGZvdW5kIGluIHRoaXMgdmlldy5cbiAgICpcbiAgICogSXQncyBuZWNlc3NhcnkgdG8ga2VlcCBhIGNvcHkgb2YgdGhlIGZ1bGwgZGVmIGxpc3Qgb24gdGhlIFRWaWV3IHNvIGl0J3MgcG9zc2libGVcbiAgICogdG8gcmVuZGVyIHRlbXBsYXRlIGZ1bmN0aW9ucyB3aXRob3V0IGEgaG9zdCBjb21wb25lbnQuXG4gICAqL1xuICBkaXJlY3RpdmVSZWdpc3RyeTogRGlyZWN0aXZlRGVmTGlzdHxudWxsO1xuXG4gIC8qKlxuICAgKiBGdWxsIHJlZ2lzdHJ5IG9mIHBpcGVzIHRoYXQgbWF5IGJlIGZvdW5kIGluIHRoaXMgdmlldy5cbiAgICpcbiAgICogVGhlIHByb3BlcnR5IGlzIGVpdGhlciBhbiBhcnJheSBvZiBgUGlwZURlZnNgcyBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgdGhlIGFycmF5IG9mXG4gICAqIGBQaXBlRGVmc2BzLiBUaGUgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5IHRvIGJlIGFibGUgdG8gc3VwcG9ydCBmb3J3YXJkIGRlY2xhcmF0aW9ucy5cbiAgICpcbiAgICogSXQncyBuZWNlc3NhcnkgdG8ga2VlcCBhIGNvcHkgb2YgdGhlIGZ1bGwgZGVmIGxpc3Qgb24gdGhlIFRWaWV3IHNvIGl0J3MgcG9zc2libGVcbiAgICogdG8gcmVuZGVyIHRlbXBsYXRlIGZ1bmN0aW9ucyB3aXRob3V0IGEgaG9zdCBjb21wb25lbnQuXG4gICAqL1xuICBwaXBlUmVnaXN0cnk6IFBpcGVEZWZMaXN0fG51bGw7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG5nT25Jbml0LCBuZ09uQ2hhbmdlcyBhbmQgbmdEb0NoZWNrIGhvb2tzIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkIGZvciB0aGlzIHZpZXcgaW5cbiAgICogY3JlYXRpb24gbW9kZS5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgaW5kZXhcbiAgICogT2RkIGluZGljZXM6IEhvb2sgZnVuY3Rpb25cbiAgICovXG4gIHByZU9yZGVySG9va3M6IEhvb2tEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG5nT25DaGFuZ2VzIGFuZCBuZ0RvQ2hlY2sgaG9va3MgdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQgZm9yIHRoaXMgdmlldyBpbiB1cGRhdGUgbW9kZS5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgaW5kZXhcbiAgICogT2RkIGluZGljZXM6IEhvb2sgZnVuY3Rpb25cbiAgICovXG4gIHByZU9yZGVyQ2hlY2tIb29rczogSG9va0RhdGF8bnVsbDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgbmdBZnRlckNvbnRlbnRJbml0IGFuZCBuZ0FmdGVyQ29udGVudENoZWNrZWQgaG9va3MgdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWRcbiAgICogZm9yIHRoaXMgdmlldyBpbiBjcmVhdGlvbiBtb2RlLlxuICAgKlxuICAgKiBFdmVuIGluZGljZXM6IERpcmVjdGl2ZSBpbmRleFxuICAgKiBPZGQgaW5kaWNlczogSG9vayBmdW5jdGlvblxuICAgKi9cbiAgY29udGVudEhvb2tzOiBIb29rRGF0YXxudWxsO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBuZ0FmdGVyQ29udGVudENoZWNrZWQgaG9va3MgdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQgZm9yIHRoaXMgdmlldyBpbiB1cGRhdGVcbiAgICogbW9kZS5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgaW5kZXhcbiAgICogT2RkIGluZGljZXM6IEhvb2sgZnVuY3Rpb25cbiAgICovXG4gIGNvbnRlbnRDaGVja0hvb2tzOiBIb29rRGF0YXxudWxsO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBuZ0FmdGVyVmlld0luaXQgYW5kIG5nQWZ0ZXJWaWV3Q2hlY2tlZCBob29rcyB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCBmb3JcbiAgICogdGhpcyB2aWV3IGluIGNyZWF0aW9uIG1vZGUuXG4gICAqXG4gICAqIEV2ZW4gaW5kaWNlczogRGlyZWN0aXZlIGluZGV4XG4gICAqIE9kZCBpbmRpY2VzOiBIb29rIGZ1bmN0aW9uXG4gICAqL1xuICB2aWV3SG9va3M6IEhvb2tEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG5nQWZ0ZXJWaWV3Q2hlY2tlZCBob29rcyB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCBmb3IgdGhpcyB2aWV3IGluXG4gICAqIHVwZGF0ZSBtb2RlLlxuICAgKlxuICAgKiBFdmVuIGluZGljZXM6IERpcmVjdGl2ZSBpbmRleFxuICAgKiBPZGQgaW5kaWNlczogSG9vayBmdW5jdGlvblxuICAgKi9cbiAgdmlld0NoZWNrSG9va3M6IEhvb2tEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG5nT25EZXN0cm95IGhvb2tzIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkIHdoZW4gdGhpcyB2aWV3IGlzIGRlc3Ryb3llZC5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgaW5kZXhcbiAgICogT2RkIGluZGljZXM6IEhvb2sgZnVuY3Rpb25cbiAgICovXG4gIGRlc3Ryb3lIb29rczogRGVzdHJveUhvb2tEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZW4gYSB2aWV3IGlzIGRlc3Ryb3llZCwgbGlzdGVuZXJzIG5lZWQgdG8gYmUgcmVsZWFzZWQgYW5kIG91dHB1dHMgbmVlZCB0byBiZVxuICAgKiB1bnN1YnNjcmliZWQuIFRoaXMgY2xlYW51cCBhcnJheSBzdG9yZXMgYm90aCBsaXN0ZW5lciBkYXRhIChpbiBjaHVua3Mgb2YgNClcbiAgICogYW5kIG91dHB1dCBkYXRhIChpbiBjaHVua3Mgb2YgMikgZm9yIGEgcGFydGljdWxhciB2aWV3LiBDb21iaW5pbmcgdGhlIGFycmF5c1xuICAgKiBzYXZlcyBvbiBtZW1vcnkgKDcwIGJ5dGVzIHBlciBhcnJheSkgYW5kIG9uIGEgZmV3IGJ5dGVzIG9mIGNvZGUgc2l6ZSAoZm9yIHR3b1xuICAgKiBzZXBhcmF0ZSBmb3IgbG9vcHMpLlxuICAgKlxuICAgKiBJZiBpdCdzIGEgbmF0aXZlIERPTSBsaXN0ZW5lciBvciBvdXRwdXQgc3Vic2NyaXB0aW9uIGJlaW5nIHN0b3JlZDpcbiAgICogMXN0IGluZGV4IGlzOiBldmVudCBuYW1lICBgbmFtZSA9IHRWaWV3LmNsZWFudXBbaSswXWBcbiAgICogMm5kIGluZGV4IGlzOiBpbmRleCBvZiBuYXRpdmUgZWxlbWVudCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0cmlldmVzIGdsb2JhbCB0YXJnZXQgKHdpbmRvdyxcbiAgICogICAgICAgICAgICAgICBkb2N1bWVudCBvciBib2R5KSByZWZlcmVuY2UgYmFzZWQgb24gdGhlIG5hdGl2ZSBlbGVtZW50OlxuICAgKiAgICBgdHlwZW9mIGlkeE9yVGFyZ2V0R2V0dGVyID09PSAnZnVuY3Rpb24nYDogZ2xvYmFsIHRhcmdldCBnZXR0ZXIgZnVuY3Rpb25cbiAgICogICAgYHR5cGVvZiBpZHhPclRhcmdldEdldHRlciA9PT0gJ251bWJlcidgOiBpbmRleCBvZiBuYXRpdmUgZWxlbWVudFxuICAgKlxuICAgKiAzcmQgaW5kZXggaXM6IGluZGV4IG9mIGxpc3RlbmVyIGZ1bmN0aW9uIGBsaXN0ZW5lciA9IGxWaWV3W0NMRUFOVVBdW3RWaWV3LmNsZWFudXBbaSsyXV1gXG4gICAqIDR0aCBpbmRleCBpczogYHVzZUNhcHR1cmVPckluZHggPSB0Vmlldy5jbGVhbnVwW2krM11gXG4gICAqICAgIGB0eXBlb2YgdXNlQ2FwdHVyZU9ySW5keCA9PSAnYm9vbGVhbicgOiB1c2VDYXB0dXJlIGJvb2xlYW5cbiAgICogICAgYHR5cGVvZiB1c2VDYXB0dXJlT3JJbmR4ID09ICdudW1iZXInOlxuICAgKiAgICAgICAgIGB1c2VDYXB0dXJlT3JJbmR4ID49IDBgIGByZW1vdmVMaXN0ZW5lciA9IExWaWV3W0NMRUFOVVBdW3VzZUNhcHR1cmVPckluZHhdYFxuICAgKiAgICAgICAgIGB1c2VDYXB0dXJlT3JJbmR4IDwgIDBgIGBzdWJzY3JpcHRpb24gPSBMVmlld1tDTEVBTlVQXVstdXNlQ2FwdHVyZU9ySW5keF1gXG4gICAqXG4gICAqIElmIGl0J3MgYW4gb3V0cHV0IHN1YnNjcmlwdGlvbiBvciBxdWVyeSBsaXN0IGRlc3Ryb3kgaG9vazpcbiAgICogMXN0IGluZGV4IGlzOiBvdXRwdXQgdW5zdWJzY3JpYmUgZnVuY3Rpb24gLyBxdWVyeSBsaXN0IGRlc3Ryb3kgZnVuY3Rpb25cbiAgICogMm5kIGluZGV4IGlzOiBpbmRleCBvZiBmdW5jdGlvbiBjb250ZXh0IGluIExWaWV3LmNsZWFudXBJbnN0YW5jZXNbXVxuICAgKiAgICAgICAgICAgICAgIGB0Vmlldy5jbGVhbnVwW2krMF0uY2FsbChsVmlld1tDTEVBTlVQXVt0Vmlldy5jbGVhbnVwW2krMV1dKWBcbiAgICovXG4gIGNsZWFudXA6IGFueVtdfG51bGw7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBlbGVtZW50IGluZGljZXMgZm9yIGNoaWxkIGNvbXBvbmVudHMgdGhhdCB3aWxsIG5lZWQgdG8gYmVcbiAgICogcmVmcmVzaGVkIHdoZW4gdGhlIGN1cnJlbnQgdmlldyBoYXMgZmluaXNoZWQgaXRzIGNoZWNrLiBUaGVzZSBpbmRpY2VzIGhhdmVcbiAgICogYWxyZWFkeSBiZWVuIGFkanVzdGVkIGZvciB0aGUgSEVBREVSX09GRlNFVC5cbiAgICpcbiAgICovXG4gIGNvbXBvbmVudHM6IG51bWJlcltdfG51bGw7XG5cbiAgLyoqXG4gICAqIEEgY29sbGVjdGlvbiBvZiBxdWVyaWVzIHRyYWNrZWQgaW4gYSBnaXZlbiB2aWV3LlxuICAgKi9cbiAgcXVlcmllczogVFF1ZXJpZXN8bnVsbDtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgaW5kaWNlcyBwb2ludGluZyB0byBkaXJlY3RpdmVzIHdpdGggY29udGVudCBxdWVyaWVzIGFsb25nc2lkZSB3aXRoIHRoZVxuICAgKiBjb3JyZXNwb25kaW5nXG4gICAqIHF1ZXJ5IGluZGV4LiBFYWNoIGVudHJ5IGluIHRoaXMgYXJyYXkgaXMgYSB0dXBsZSBvZjpcbiAgICogLSBpbmRleCBvZiB0aGUgZmlyc3QgY29udGVudCBxdWVyeSBpbmRleCBkZWNsYXJlZCBieSBhIGdpdmVuIGRpcmVjdGl2ZTtcbiAgICogLSBpbmRleCBvZiBhIGRpcmVjdGl2ZS5cbiAgICpcbiAgICogV2UgYXJlIHN0b3JpbmcgdGhvc2UgaW5kZXhlcyBzbyB3ZSBjYW4gcmVmcmVzaCBjb250ZW50IHF1ZXJpZXMgYXMgcGFydCBvZiBhIHZpZXcgcmVmcmVzaFxuICAgKiBwcm9jZXNzLlxuICAgKi9cbiAgY29udGVudFF1ZXJpZXM6IG51bWJlcltdfG51bGw7XG5cbiAgLyoqXG4gICAqIFNldCBvZiBzY2hlbWFzIHRoYXQgZGVjbGFyZSBlbGVtZW50cyB0byBiZSBhbGxvd2VkIGluc2lkZSB0aGUgdmlldy5cbiAgICovXG4gIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW118bnVsbDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgY29uc3RhbnRzIGZvciB0aGUgdmlldy4gSW5jbHVkZXMgYXR0cmlidXRlIGFycmF5cywgbG9jYWwgZGVmaW5pdGlvbiBhcnJheXMgZXRjLlxuICAgKiBVc2VkIGZvciBkaXJlY3RpdmUgbWF0Y2hpbmcsIGF0dHJpYnV0ZSBiaW5kaW5ncywgbG9jYWwgZGVmaW5pdGlvbnMgYW5kIG1vcmUuXG4gICAqL1xuICBjb25zdHM6IFRDb25zdGFudHN8bnVsbDtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlcmUgd2FzIGFuIGVycm9yIGJlZm9yZSB3ZSBtYW5hZ2VkIHRvIGNvbXBsZXRlIHRoZSBmaXJzdCBjcmVhdGUgcGFzcyBvZiB0aGVcbiAgICogdmlldy4gVGhpcyBtZWFucyB0aGF0IHRoZSB2aWV3IGlzIGxpa2VseSBjb3JydXB0ZWQgYW5kIHdlIHNob3VsZCB0cnkgdG8gcmVjb3ZlciBpdC5cbiAgICovXG4gIGluY29tcGxldGVGaXJzdFBhc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFJvb3RDb250ZXh0RmxhZ3Mge1xuICBFbXB0eSA9IDBiMDAsXG4gIERldGVjdENoYW5nZXMgPSAwYjAxLFxuICBGbHVzaFBsYXllcnMgPSAwYjEwXG59XG5cblxuLyoqXG4gKiBSb290Q29udGV4dCBjb250YWlucyBpbmZvcm1hdGlvbiB3aGljaCBpcyBzaGFyZWQgZm9yIGFsbCBjb21wb25lbnRzIHdoaWNoXG4gKiB3ZXJlIGJvb3RzdHJhcHBlZCB3aXRoIHtAbGluayByZW5kZXJDb21wb25lbnR9LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvb3RDb250ZXh0IHtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdXNlZCBmb3Igc2NoZWR1bGluZyBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZSBmdXR1cmUuIFVzdWFsbHlcbiAgICogdGhpcyBpcyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYC5cbiAgICovXG4gIHNjaGVkdWxlcjogKHdvcmtGbjogKCkgPT4gdm9pZCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQSBwcm9taXNlIHdoaWNoIGlzIHJlc29sdmVkIHdoZW4gYWxsIGNvbXBvbmVudHMgYXJlIGNvbnNpZGVyZWQgY2xlYW4gKG5vdCBkaXJ0eSkuXG4gICAqXG4gICAqIFRoaXMgcHJvbWlzZSBpcyBvdmVyd3JpdHRlbiBldmVyeSB0aW1lIGEgZmlyc3QgY2FsbCB0byB7QGxpbmsgbWFya0RpcnR5fSBpcyBpbnZva2VkLlxuICAgKi9cbiAgY2xlYW46IFByb21pc2U8bnVsbD47XG5cbiAgLyoqXG4gICAqIFJvb3RDb21wb25lbnRzIC0gVGhlIGNvbXBvbmVudHMgdGhhdCB3ZXJlIGluc3RhbnRpYXRlZCBieSB0aGUgY2FsbCB0b1xuICAgKiB7QGxpbmsgcmVuZGVyQ29tcG9uZW50fS5cbiAgICovXG4gIGNvbXBvbmVudHM6IHt9W107XG5cbiAgLyoqXG4gICAqIFRoZSBwbGF5ZXIgZmx1c2hpbmcgaGFuZGxlciB0byBraWNrIG9mZiBhbGwgYW5pbWF0aW9uc1xuICAgKi9cbiAgcGxheWVySGFuZGxlcjogUGxheWVySGFuZGxlcnxudWxsO1xuXG4gIC8qKlxuICAgKiBXaGF0IHJlbmRlci1yZWxhdGVkIG9wZXJhdGlvbnMgdG8gcnVuIG9uY2UgYSBzY2hlZHVsZXIgaGFzIGJlZW4gc2V0XG4gICAqL1xuICBmbGFnczogUm9vdENvbnRleHRGbGFncztcbn1cblxuLyoqIFNpbmdsZSBob29rIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuZXhwb3J0IHR5cGUgSG9va0ZuID0gKCkgPT4gdm9pZDtcblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gY2FsbCBhIGhvb2suIEUuZy4gdGhlIGNhbGxiYWNrIHRoYXRcbiAqIG5lZWRzIHRvIGludm9rZWQgYW5kIHRoZSBpbmRleCBhdCB3aGljaCB0byBmaW5kIGl0cyBjb250ZXh0LlxuICovXG5leHBvcnQgdHlwZSBIb29rRW50cnkgPSBudW1iZXJ8SG9va0ZuO1xuXG4vKipcbiAqIEFycmF5IG9mIGhvb2tzIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkIGZvciBhIHZpZXcgYW5kIHRoZWlyIGRpcmVjdGl2ZSBpbmRpY2VzLlxuICpcbiAqIEZvciBlYWNoIG5vZGUgb2YgdGhlIHZpZXcsIHRoZSBmb2xsb3dpbmcgZGF0YSBpcyBzdG9yZWQ6XG4gKiAxKSBOb2RlIGluZGV4IChvcHRpb25hbClcbiAqIDIpIEEgc2VyaWVzIG9mIG51bWJlci9mdW5jdGlvbiBwYWlycyB3aGVyZTpcbiAqICAtIGV2ZW4gaW5kaWNlcyBhcmUgZGlyZWN0aXZlIGluZGljZXNcbiAqICAtIG9kZCBpbmRpY2VzIGFyZSBob29rIGZ1bmN0aW9uc1xuICpcbiAqIFNwZWNpYWwgY2FzZXM6XG4gKiAgLSBhIG5lZ2F0aXZlIGRpcmVjdGl2ZSBpbmRleCBmbGFncyBhbiBpbml0IGhvb2sgKG5nT25Jbml0LCBuZ0FmdGVyQ29udGVudEluaXQsIG5nQWZ0ZXJWaWV3SW5pdClcbiAqL1xuZXhwb3J0IHR5cGUgSG9va0RhdGEgPSBIb29rRW50cnlbXTtcblxuLyoqXG4gKiBBcnJheSBvZiBkZXN0cm95IGhvb2tzIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkIGZvciBhIHZpZXcgYW5kIHRoZWlyIGRpcmVjdGl2ZSBpbmRpY2VzLlxuICpcbiAqIFRoZSBhcnJheSBpcyBzZXQgdXAgYXMgYSBzZXJpZXMgb2YgbnVtYmVyL2Z1bmN0aW9uIG9yIG51bWJlci8obnVtYmVyfGZ1bmN0aW9uKVtdOlxuICogLSBFdmVuIGluZGljZXMgcmVwcmVzZW50IHRoZSBjb250ZXh0IHdpdGggd2hpY2ggaG9va3Mgc2hvdWxkIGJlIGNhbGxlZC5cbiAqIC0gT2RkIGluZGljZXMgYXJlIHRoZSBob29rIGZ1bmN0aW9ucyB0aGVtc2VsdmVzLiBJZiBhIHZhbHVlIGF0IGFuIG9kZCBpbmRleCBpcyBhbiBhcnJheSxcbiAqICAgaXQgcmVwcmVzZW50cyB0aGUgZGVzdHJveSBob29rcyBvZiBhIGBtdWx0aWAgcHJvdmlkZXIgd2hlcmU6XG4gKiAgICAgLSBFdmVuIGluZGljZXMgcmVwcmVzZW50IHRoZSBpbmRleCBvZiB0aGUgcHJvdmlkZXIgZm9yIHdoaWNoIHdlJ3ZlIHJlZ2lzdGVyZWQgYSBkZXN0cm95IGhvb2ssXG4gKiAgICAgICBpbnNpZGUgb2YgdGhlIGBtdWx0aWAgcHJvdmlkZXIgYXJyYXkuXG4gKiAgICAgLSBPZGQgaW5kaWNlcyBhcmUgdGhlIGRlc3Ryb3kgaG9vayBmdW5jdGlvbnMuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIExWaWV3OiBgWzAsIDEsIDIsIEFTZXJ2aWNlLCA0LCBbQlNlcnZpY2UsIENTZXJ2aWNlLCBEU2VydmljZV1dYFxuICogZGVzdHJveUhvb2tzOiBgWzMsIEFTZXJ2aWNlLm5nT25EZXN0cm95LCA1LCBbMCwgQlNlcnZpY2UubmdPbkRlc3Ryb3ksIDIsIERTZXJ2aWNlLm5nT25EZXN0cm95XV1gXG4gKlxuICogSW4gdGhlIGV4YW1wbGUgYWJvdmUgYEFTZXJ2aWNlYCBpcyBhIHR5cGUgcHJvdmlkZXIgd2l0aCBhbiBgbmdPbkRlc3Ryb3lgLCB3aGVyZWFzIGBCU2VydmljZWAsXG4gKiBgQ1NlcnZpY2VgIGFuZCBgRFNlcnZpY2VgIGFyZSBwYXJ0IG9mIGEgYG11bHRpYCBwcm92aWRlciB3aGVyZSBvbmx5IGBCU2VydmljZWAgYW5kIGBEU2VydmljZWBcbiAqIGhhdmUgYW4gYG5nT25EZXN0cm95YCBob29rLlxuICovXG5leHBvcnQgdHlwZSBEZXN0cm95SG9va0RhdGEgPSAoSG9va0VudHJ5fEhvb2tEYXRhKVtdO1xuXG4vKipcbiAqIFN0YXRpYyBkYXRhIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGluc3RhbmNlLXNwZWNpZmljIGRhdGEgYXJyYXkgb24gYW4gTFZpZXcuXG4gKlxuICogRWFjaCBub2RlJ3Mgc3RhdGljIGRhdGEgaXMgc3RvcmVkIGluIHREYXRhIGF0IHRoZSBzYW1lIGluZGV4IHRoYXQgaXQncyBzdG9yZWRcbiAqIGluIHRoZSBkYXRhIGFycmF5LiAgQW55IG5vZGVzIHRoYXQgZG8gbm90IGhhdmUgc3RhdGljIGRhdGEgc3RvcmUgYSBudWxsIHZhbHVlIGluXG4gKiB0RGF0YSB0byBhdm9pZCBhIHNwYXJzZSBhcnJheS5cbiAqXG4gKiBFYWNoIHBpcGUncyBkZWZpbml0aW9uIGlzIHN0b3JlZCBoZXJlIGF0IHRoZSBzYW1lIGluZGV4IGFzIGl0cyBwaXBlIGluc3RhbmNlIGluXG4gKiB0aGUgZGF0YSBhcnJheS5cbiAqXG4gKiBFYWNoIGhvc3QgcHJvcGVydHkncyBuYW1lIGlzIHN0b3JlZCBoZXJlIGF0IHRoZSBzYW1lIGluZGV4IGFzIGl0cyB2YWx1ZSBpbiB0aGVcbiAqIGRhdGEgYXJyYXkuXG4gKlxuICogRWFjaCBwcm9wZXJ0eSBiaW5kaW5nIG5hbWUgaXMgc3RvcmVkIGhlcmUgYXQgdGhlIHNhbWUgaW5kZXggYXMgaXRzIHZhbHVlIGluXG4gKiB0aGUgZGF0YSBhcnJheS4gSWYgdGhlIGJpbmRpbmcgaXMgYW4gaW50ZXJwb2xhdGlvbiwgdGhlIHN0YXRpYyBzdHJpbmcgdmFsdWVzXG4gKiBhcmUgc3RvcmVkIHBhcmFsbGVsIHRvIHRoZSBkeW5hbWljIHZhbHVlcy4gRXhhbXBsZTpcbiAqXG4gKiBpZD1cInByZWZpeCB7eyB2MCB9fSBhIHt7IHYxIH19IGIge3sgdjIgfX0gc3VmZml4XCJcbiAqXG4gKiBMVmlldyAgICAgICB8ICAgVFZpZXcuZGF0YVxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICB2MCB2YWx1ZSAgIHwgICAnYSdcbiAqICB2MSB2YWx1ZSAgIHwgICAnYidcbiAqICB2MiB2YWx1ZSAgIHwgICBpZCDvv70gcHJlZml4IO+/vSBzdWZmaXhcbiAqXG4gKiBJbmplY3RvciBibG9vbSBmaWx0ZXJzIGFyZSBhbHNvIHN0b3JlZCBoZXJlLlxuICovXG5leHBvcnQgdHlwZSBURGF0YSA9XG4gICAgKFROb2RlfFBpcGVEZWY8YW55PnxEaXJlY3RpdmVEZWY8YW55PnxDb21wb25lbnREZWY8YW55PnxudW1iZXJ8VFN0eWxpbmdSYW5nZXxUU3R5bGluZ0tleXxcbiAgICAgVHlwZTxhbnk+fEluamVjdGlvblRva2VuPGFueT58VEkxOG58STE4blVwZGF0ZU9wQ29kZXN8bnVsbHxzdHJpbmcpW107XG5cbi8vIE5vdGU6IFRoaXMgaGFjayBpcyBuZWNlc3Nhcnkgc28gd2UgZG9uJ3QgZXJyb25lb3VzbHkgZ2V0IGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuLy8gZmFpbHVyZSBiYXNlZCBvbiB0eXBlcy5cbmV4cG9ydCBjb25zdCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCA9IDE7XG4iXX0=