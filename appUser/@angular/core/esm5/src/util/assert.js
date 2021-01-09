/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// The functions in this file verify that the assumptions we are making
// about state in an instruction are correct before implementing any logic.
// They are meant only to be called in dev mode as sanity checks.
import { stringify } from './stringify';
export function assertNumber(actual, msg) {
    if (!(typeof actual === 'number')) {
        throwError(msg, typeof actual, 'number', '===');
    }
}
export function assertNumberInRange(actual, minInclusive, maxInclusive) {
    assertNumber(actual, 'Expected a number');
    assertLessThanOrEqual(actual, maxInclusive, 'Expected number to be less than or equal to');
    assertGreaterThanOrEqual(actual, minInclusive, 'Expected number to be greater than or equal to');
}
export function assertString(actual, msg) {
    if (!(typeof actual === 'string')) {
        throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
    }
}
export function assertEqual(actual, expected, msg) {
    if (!(actual == expected)) {
        throwError(msg, actual, expected, '==');
    }
}
export function assertNotEqual(actual, expected, msg) {
    if (!(actual != expected)) {
        throwError(msg, actual, expected, '!=');
    }
}
export function assertSame(actual, expected, msg) {
    if (!(actual === expected)) {
        throwError(msg, actual, expected, '===');
    }
}
export function assertNotSame(actual, expected, msg) {
    if (!(actual !== expected)) {
        throwError(msg, actual, expected, '!==');
    }
}
export function assertLessThan(actual, expected, msg) {
    if (!(actual < expected)) {
        throwError(msg, actual, expected, '<');
    }
}
export function assertLessThanOrEqual(actual, expected, msg) {
    if (!(actual <= expected)) {
        throwError(msg, actual, expected, '<=');
    }
}
export function assertGreaterThan(actual, expected, msg) {
    if (!(actual > expected)) {
        throwError(msg, actual, expected, '>');
    }
}
export function assertGreaterThanOrEqual(actual, expected, msg) {
    if (!(actual >= expected)) {
        throwError(msg, actual, expected, '>=');
    }
}
export function assertNotDefined(actual, msg) {
    if (actual != null) {
        throwError(msg, actual, null, '==');
    }
}
export function assertDefined(actual, msg) {
    if (actual == null) {
        throwError(msg, actual, null, '!=');
    }
}
export function throwError(msg, actual, expected, comparison) {
    throw new Error("ASSERTION ERROR: " + msg +
        (comparison == null ? '' : " [Expected=> " + expected + " " + comparison + " " + actual + " <=Actual]"));
}
export function assertDomNode(node) {
    // If we're in a worker, `Node` will not be defined.
    assertEqual((typeof Node !== 'undefined' && node instanceof Node) ||
        (typeof node === 'object' && node != null &&
            node.constructor.name === 'WebWorkerRenderNode'), true, "The provided value must be an instance of a DOM Node but got " + stringify(node));
}
export function assertDataInRange(arr, index) {
    var maxLen = arr ? arr.length : 0;
    assertLessThan(index, maxLen, "Index expected to be less than " + maxLen + " but got " + index);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsdUVBQXVFO0FBQ3ZFLDJFQUEyRTtBQUMzRSxpRUFBaUU7QUFFakUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUV0QyxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQVcsRUFBRSxHQUFXO0lBQ25ELElBQUksQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FDL0IsTUFBVyxFQUFFLFlBQW9CLEVBQUUsWUFBb0I7SUFDekQsWUFBWSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsNkNBQTZDLENBQUMsQ0FBQztJQUMzRix3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxDQUFDLENBQUM7QUFDbkcsQ0FBQztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBVyxFQUFFLEdBQVc7SUFDbkQsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM1RTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFJLE1BQVMsRUFBRSxR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QUFDLENBQUMsQ0FBQyxrQkFBZ0IsUUFBUSxTQUFJLFVBQVUsU0FBSSxNQUFNLGVBQVksQ0FBQyxDQUFDLENBQUM7QUFDaEcsQ0FBQztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBUztJQUNyQyxvREFBb0Q7SUFDcEQsV0FBVyxDQUNQLENBQUMsT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksWUFBWSxJQUFJLENBQUM7UUFDakQsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUk7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUMsRUFDckQsSUFBSSxFQUFFLGtFQUFnRSxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQztBQUMvRixDQUFDO0FBR0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEdBQVUsRUFBRSxLQUFhO0lBQ3pELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLG9DQUFrQyxNQUFNLGlCQUFZLEtBQU8sQ0FBQyxDQUFDO0FBQzdGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlIHZlcmlmeSB0aGF0IHRoZSBhc3N1bXB0aW9ucyB3ZSBhcmUgbWFraW5nXG4vLyBhYm91dCBzdGF0ZSBpbiBhbiBpbnN0cnVjdGlvbiBhcmUgY29ycmVjdCBiZWZvcmUgaW1wbGVtZW50aW5nIGFueSBsb2dpYy5cbi8vIFRoZXkgYXJlIG1lYW50IG9ubHkgdG8gYmUgY2FsbGVkIGluIGRldiBtb2RlIGFzIHNhbml0eSBjaGVja3MuXG5cbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuL3N0cmluZ2lmeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROdW1iZXIoYWN0dWFsOiBhbnksIG1zZzogc3RyaW5nKTogYXNzZXJ0cyBhY3R1YWwgaXMgbnVtYmVyIHtcbiAgaWYgKCEodHlwZW9mIGFjdHVhbCA9PT0gJ251bWJlcicpKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIHR5cGVvZiBhY3R1YWwsICdudW1iZXInLCAnPT09Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlckluUmFuZ2UoXG4gICAgYWN0dWFsOiBhbnksIG1pbkluY2x1c2l2ZTogbnVtYmVyLCBtYXhJbmNsdXNpdmU6IG51bWJlcik6IGFzc2VydHMgYWN0dWFsIGlzIG51bWJlciB7XG4gIGFzc2VydE51bWJlcihhY3R1YWwsICdFeHBlY3RlZCBhIG51bWJlcicpO1xuICBhc3NlcnRMZXNzVGhhbk9yRXF1YWwoYWN0dWFsLCBtYXhJbmNsdXNpdmUsICdFeHBlY3RlZCBudW1iZXIgdG8gYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvJyk7XG4gIGFzc2VydEdyZWF0ZXJUaGFuT3JFcXVhbChhY3R1YWwsIG1pbkluY2x1c2l2ZSwgJ0V4cGVjdGVkIG51bWJlciB0byBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhhY3R1YWw6IGFueSwgbXNnOiBzdHJpbmcpOiBhc3NlcnRzIGFjdHVhbCBpcyBzdHJpbmcge1xuICBpZiAoISh0eXBlb2YgYWN0dWFsID09PSAnc3RyaW5nJykpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgYWN0dWFsID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdHVhbCwgJ3N0cmluZycsICc9PT0nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RXF1YWw8VD4oYWN0dWFsOiBULCBleHBlY3RlZDogVCwgbXNnOiBzdHJpbmcpIHtcbiAgaWYgKCEoYWN0dWFsID09IGV4cGVjdGVkKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBhY3R1YWwsIGV4cGVjdGVkLCAnPT0nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm90RXF1YWw8VD4oYWN0dWFsOiBULCBleHBlY3RlZDogVCwgbXNnOiBzdHJpbmcpOiBhc3NlcnRzIGFjdHVhbCBpcyBUIHtcbiAgaWYgKCEoYWN0dWFsICE9IGV4cGVjdGVkKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBhY3R1YWwsIGV4cGVjdGVkLCAnIT0nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U2FtZTxUPihhY3R1YWw6IFQsIGV4cGVjdGVkOiBULCBtc2c6IHN0cmluZyk6IGFzc2VydHMgYWN0dWFsIGlzIFQge1xuICBpZiAoIShhY3R1YWwgPT09IGV4cGVjdGVkKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBhY3R1YWwsIGV4cGVjdGVkLCAnPT09Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE5vdFNhbWU8VD4oYWN0dWFsOiBULCBleHBlY3RlZDogVCwgbXNnOiBzdHJpbmcpIHtcbiAgaWYgKCEoYWN0dWFsICE9PSBleHBlY3RlZCkpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgYWN0dWFsLCBleHBlY3RlZCwgJyE9PScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRMZXNzVGhhbjxUPihhY3R1YWw6IFQsIGV4cGVjdGVkOiBULCBtc2c6IHN0cmluZyk6IGFzc2VydHMgYWN0dWFsIGlzIFQge1xuICBpZiAoIShhY3R1YWwgPCBleHBlY3RlZCkpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgYWN0dWFsLCBleHBlY3RlZCwgJzwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TGVzc1RoYW5PckVxdWFsPFQ+KGFjdHVhbDogVCwgZXhwZWN0ZWQ6IFQsIG1zZzogc3RyaW5nKTogYXNzZXJ0cyBhY3R1YWwgaXMgVCB7XG4gIGlmICghKGFjdHVhbCA8PSBleHBlY3RlZCkpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgYWN0dWFsLCBleHBlY3RlZCwgJzw9Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEdyZWF0ZXJUaGFuPFQ+KGFjdHVhbDogVCwgZXhwZWN0ZWQ6IFQsIG1zZzogc3RyaW5nKTogYXNzZXJ0cyBhY3R1YWwgaXMgVCB7XG4gIGlmICghKGFjdHVhbCA+IGV4cGVjdGVkKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBhY3R1YWwsIGV4cGVjdGVkLCAnPicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRHcmVhdGVyVGhhbk9yRXF1YWw8VD4oXG4gICAgYWN0dWFsOiBULCBleHBlY3RlZDogVCwgbXNnOiBzdHJpbmcpOiBhc3NlcnRzIGFjdHVhbCBpcyBUIHtcbiAgaWYgKCEoYWN0dWFsID49IGV4cGVjdGVkKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBhY3R1YWwsIGV4cGVjdGVkLCAnPj0nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm90RGVmaW5lZDxUPihhY3R1YWw6IFQsIG1zZzogc3RyaW5nKSB7XG4gIGlmIChhY3R1YWwgIT0gbnVsbCkge1xuICAgIHRocm93RXJyb3IobXNnLCBhY3R1YWwsIG51bGwsICc9PScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnREZWZpbmVkPFQ+KGFjdHVhbDogVHxudWxsfHVuZGVmaW5lZCwgbXNnOiBzdHJpbmcpOiBhc3NlcnRzIGFjdHVhbCBpcyBUIHtcbiAgaWYgKGFjdHVhbCA9PSBudWxsKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIGFjdHVhbCwgbnVsbCwgJyE9Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93RXJyb3IobXNnOiBzdHJpbmcpOiBuZXZlcjtcbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9yKG1zZzogc3RyaW5nLCBhY3R1YWw6IGFueSwgZXhwZWN0ZWQ6IGFueSwgY29tcGFyaXNvbjogc3RyaW5nKTogbmV2ZXI7XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZywgYWN0dWFsPzogYW55LCBleHBlY3RlZD86IGFueSwgY29tcGFyaXNvbj86IHN0cmluZyk6IG5ldmVyIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEFTU0VSVElPTiBFUlJPUjogJHttc2d9YCArXG4gICAgICAoY29tcGFyaXNvbiA9PSBudWxsID8gJycgOiBgIFtFeHBlY3RlZD0+ICR7ZXhwZWN0ZWR9ICR7Y29tcGFyaXNvbn0gJHthY3R1YWx9IDw9QWN0dWFsXWApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydERvbU5vZGUobm9kZTogYW55KTogYXNzZXJ0cyBub2RlIGlzIE5vZGUge1xuICAvLyBJZiB3ZSdyZSBpbiBhIHdvcmtlciwgYE5vZGVgIHdpbGwgbm90IGJlIGRlZmluZWQuXG4gIGFzc2VydEVxdWFsKFxuICAgICAgKHR5cGVvZiBOb2RlICE9PSAndW5kZWZpbmVkJyAmJiBub2RlIGluc3RhbmNlb2YgTm9kZSkgfHxcbiAgICAgICAgICAodHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIG5vZGUgIT0gbnVsbCAmJlxuICAgICAgICAgICBub2RlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdXZWJXb3JrZXJSZW5kZXJOb2RlJyksXG4gICAgICB0cnVlLCBgVGhlIHByb3ZpZGVkIHZhbHVlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBET00gTm9kZSBidXQgZ290ICR7c3RyaW5naWZ5KG5vZGUpfWApO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnREYXRhSW5SYW5nZShhcnI6IGFueVtdLCBpbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IG1heExlbiA9IGFyciA/IGFyci5sZW5ndGggOiAwO1xuICBhc3NlcnRMZXNzVGhhbihpbmRleCwgbWF4TGVuLCBgSW5kZXggZXhwZWN0ZWQgdG8gYmUgbGVzcyB0aGFuICR7bWF4TGVufSBidXQgZ290ICR7aW5kZXh9YCk7XG59XG4iXX0=