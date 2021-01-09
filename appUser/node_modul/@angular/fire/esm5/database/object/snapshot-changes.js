/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fromRef } from '../observable/fromRef';
/**
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
export function createObjectSnapshotChanges(query, scheduler) {
    return (/**
     * @return {?}
     */
    function snapshotChanges() {
        return fromRef(query, 'value', 'on', scheduler);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hcHNob3QtY2hhbmdlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyL2ZpcmUvZGF0YWJhc2UvIiwic291cmNlcyI6WyJvYmplY3Qvc25hcHNob3QtY2hhbmdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBR2hELE1BQU0sVUFBVSwyQkFBMkIsQ0FBSSxLQUFvQixFQUFFLFNBQXlCO0lBQzVGOzs7SUFBTyxTQUFTLGVBQWU7UUFDN0IsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxFQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFNjaGVkdWxlckxpa2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZyb21SZWYgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2Zyb21SZWYnO1xuaW1wb3J0IHsgRGF0YWJhc2VRdWVyeSwgU25hcHNob3RBY3Rpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdFNuYXBzaG90Q2hhbmdlczxUPihxdWVyeTogRGF0YWJhc2VRdWVyeSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gZnVuY3Rpb24gc25hcHNob3RDaGFuZ2VzKCk6IE9ic2VydmFibGU8U25hcHNob3RBY3Rpb248VD4+IHtcbiAgICByZXR1cm4gZnJvbVJlZihxdWVyeSwgJ3ZhbHVlJywgJ29uJywgc2NoZWR1bGVyKTtcbiAgfVxufVxuIl19