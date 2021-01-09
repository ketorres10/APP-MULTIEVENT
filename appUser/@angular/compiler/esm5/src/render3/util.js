/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { StaticSymbol } from '../aot/static_symbol';
import * as o from '../output/output_ast';
/**
 * Convert an object map with `Expression` values into a `LiteralMapExpr`.
 */
export function mapToMapExpression(map) {
    var result = Object.keys(map).map(function (key) { return ({
        key: key,
        // The assertion here is because really TypeScript doesn't allow us to express that if the
        // key is present, it will have a value, but this is true in reality.
        value: map[key],
        quoted: false,
    }); });
    return o.literalMap(result);
}
/**
 * Convert metadata into an `Expression` in the given `OutputContext`.
 *
 * This operation will handle arrays, references to symbols, or literal `null` or `undefined`.
 */
export function convertMetaToOutput(meta, ctx) {
    if (Array.isArray(meta)) {
        return o.literalArr(meta.map(function (entry) { return convertMetaToOutput(entry, ctx); }));
    }
    if (meta instanceof StaticSymbol) {
        return ctx.importExpr(meta);
    }
    if (meta == null) {
        return o.literal(meta);
    }
    throw new Error("Internal error: Unsupported or unknown metadata: " + meta);
}
export function typeWithParameters(type, numParams) {
    var params = null;
    if (numParams > 0) {
        params = [];
        for (var i = 0; i < numParams; i++) {
            params.push(o.DYNAMIC_TYPE);
        }
    }
    return o.expressionType(type, null, params);
}
var ANIMATE_SYMBOL_PREFIX = '@';
export function prepareSyntheticPropertyName(name) {
    return "" + ANIMATE_SYMBOL_PREFIX + name;
}
export function prepareSyntheticListenerName(name, phase) {
    return "" + ANIMATE_SYMBOL_PREFIX + name + "." + phase;
}
export function isSyntheticPropertyOrListener(name) {
    return name.charAt(0) == ANIMATE_SYMBOL_PREFIX;
}
export function getSyntheticPropertyName(name) {
    // this will strip out listener phase values...
    // @foo.start => @foo
    var i = name.indexOf('.');
    name = i > 0 ? name.substring(0, i) : name;
    if (name.charAt(0) !== ANIMATE_SYMBOL_PREFIX) {
        name = ANIMATE_SYMBOL_PREFIX + name;
    }
    return name;
}
export function prepareSyntheticListenerFunctionName(name, phase) {
    return "animation_" + name + "_" + phase;
}
export function jitOnlyGuardedExpression(expr) {
    var ngJitMode = new o.ExternalExpr({ name: 'ngJitMode', moduleName: null });
    var jitFlagNotDefined = new o.BinaryOperatorExpr(o.BinaryOperator.Identical, new o.TypeofExpr(ngJitMode), o.literal('undefined'));
    var jitFlagUndefinedOrTrue = new o.BinaryOperatorExpr(o.BinaryOperator.Or, jitFlagNotDefined, ngJitMode, /* type */ undefined, 
    /* sourceSpan */ undefined, true);
    return new o.BinaryOperatorExpr(o.BinaryOperator.And, jitFlagUndefinedOrTrue, expr);
}
export function wrapReference(value) {
    var wrapped = new o.WrappedNodeExpr(value);
    return { value: wrapped, type: wrapped };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sS0FBSyxDQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHMUM7O0dBRUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsR0FBNEM7SUFDN0UsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQy9CLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQztRQUNOLEdBQUcsS0FBQTtRQUNILDBGQUEwRjtRQUMxRixxRUFBcUU7UUFDckUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUU7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDLEVBTkssQ0FNTCxDQUFDLENBQUM7SUFDUixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBUyxFQUFFLEdBQWtCO0lBQy9ELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLG1CQUFtQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDLENBQUM7S0FDekU7SUFDRCxJQUFJLElBQUksWUFBWSxZQUFZLEVBQUU7UUFDaEMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxJQUFJ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LFVBQVUsYUFBYSxDQUFDLEtBQVU7SUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLE9BQU8sRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1N0YXRpY1N5bWJvbH0gZnJvbSAnLi4vYW90L3N0YXRpY19zeW1ib2wnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge091dHB1dENvbnRleHR9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gb2JqZWN0IG1hcCB3aXRoIGBFeHByZXNzaW9uYCB2YWx1ZXMgaW50byBhIGBMaXRlcmFsTWFwRXhwcmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb01hcEV4cHJlc3Npb24obWFwOiB7W2tleTogc3RyaW5nXTogby5FeHByZXNzaW9ufHVuZGVmaW5lZH0pOiBvLkxpdGVyYWxNYXBFeHByIHtcbiAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmtleXMobWFwKS5tYXAoXG4gICAgICBrZXkgPT4gKHtcbiAgICAgICAga2V5LFxuICAgICAgICAvLyBUaGUgYXNzZXJ0aW9uIGhlcmUgaXMgYmVjYXVzZSByZWFsbHkgVHlwZVNjcmlwdCBkb2Vzbid0IGFsbG93IHVzIHRvIGV4cHJlc3MgdGhhdCBpZiB0aGVcbiAgICAgICAgLy8ga2V5IGlzIHByZXNlbnQsIGl0IHdpbGwgaGF2ZSBhIHZhbHVlLCBidXQgdGhpcyBpcyB0cnVlIGluIHJlYWxpdHkuXG4gICAgICAgIHZhbHVlOiBtYXBba2V5XSEsXG4gICAgICAgIHF1b3RlZDogZmFsc2UsXG4gICAgICB9KSk7XG4gIHJldHVybiBvLmxpdGVyYWxNYXAocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IG1ldGFkYXRhIGludG8gYW4gYEV4cHJlc3Npb25gIGluIHRoZSBnaXZlbiBgT3V0cHV0Q29udGV4dGAuXG4gKlxuICogVGhpcyBvcGVyYXRpb24gd2lsbCBoYW5kbGUgYXJyYXlzLCByZWZlcmVuY2VzIHRvIHN5bWJvbHMsIG9yIGxpdGVyYWwgYG51bGxgIG9yIGB1bmRlZmluZWRgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE1ldGFUb091dHB1dChtZXRhOiBhbnksIGN0eDogT3V0cHV0Q29udGV4dCk6IG8uRXhwcmVzc2lvbiB7XG4gIGlmIChBcnJheS5pc0FycmF5KG1ldGEpKSB7XG4gICAgcmV0dXJuIG8ubGl0ZXJhbEFycihtZXRhLm1hcChlbnRyeSA9PiBjb252ZXJ0TWV0YVRvT3V0cHV0KGVudHJ5LCBjdHgpKSk7XG4gIH1cbiAgaWYgKG1ldGEgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICByZXR1cm4gY3R4LmltcG9ydEV4cHIobWV0YSk7XG4gIH1cbiAgaWYgKG1ldGEgPT0gbnVsbCkge1xuICAgIHJldHVybiBvLmxpdGVyYWwobWV0YSk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIGVycm9yOiBVbnN1cHBvcnRlZCBvciB1bmtub3duIG1ldGFkYXRhOiAke21ldGF9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlV2l0aFBhcmFtZXRlcnModHlwZTogby5FeHByZXNzaW9uLCBudW1QYXJhbXM6IG51bWJlcik6IG8uRXhwcmVzc2lvblR5cGUge1xuICBsZXQgcGFyYW1zOiBvLlR5cGVbXXxudWxsID0gbnVsbDtcbiAgaWYgKG51bVBhcmFtcyA+IDApIHtcbiAgICBwYXJhbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBhcmFtczsgaSsrKSB7XG4gICAgICBwYXJhbXMucHVzaChvLkRZTkFNSUNfVFlQRSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvLmV4cHJlc3Npb25UeXBlKHR5cGUsIG51bGwsIHBhcmFtcyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNSZWZlcmVuY2Uge1xuICB2YWx1ZTogby5FeHByZXNzaW9uO1xuICB0eXBlOiBvLkV4cHJlc3Npb247XG59XG5cbmNvbnN0IEFOSU1BVEVfU1lNQk9MX1BSRUZJWCA9ICdAJztcbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlU3ludGhldGljUHJvcGVydHlOYW1lKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gYCR7QU5JTUFURV9TWU1CT0xfUFJFRklYfSR7bmFtZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVN5bnRoZXRpY0xpc3RlbmVyTmFtZShuYW1lOiBzdHJpbmcsIHBoYXNlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGAke0FOSU1BVEVfU1lNQk9MX1BSRUZJWH0ke25hbWV9LiR7cGhhc2V9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ludGhldGljUHJvcGVydHlPckxpc3RlbmVyKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS5jaGFyQXQoMCkgPT0gQU5JTUFURV9TWU1CT0xfUFJFRklYO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ludGhldGljUHJvcGVydHlOYW1lKG5hbWU6IHN0cmluZykge1xuICAvLyB0aGlzIHdpbGwgc3RyaXAgb3V0IGxpc3RlbmVyIHBoYXNlIHZhbHVlcy4uLlxuICAvLyBAZm9vLnN0YXJ0ID0+IEBmb29cbiAgY29uc3QgaSA9IG5hbWUuaW5kZXhPZignLicpO1xuICBuYW1lID0gaSA+IDAgPyBuYW1lLnN1YnN0cmluZygwLCBpKSA6IG5hbWU7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPT0gQU5JTUFURV9TWU1CT0xfUFJFRklYKSB7XG4gICAgbmFtZSA9IEFOSU1BVEVfU1lNQk9MX1BSRUZJWCArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlU3ludGhldGljTGlzdGVuZXJGdW5jdGlvbk5hbWUobmFtZTogc3RyaW5nLCBwaGFzZTogc3RyaW5nKSB7XG4gIHJldHVybiBgYW5pbWF0aW9uXyR7bmFtZX1fJHtwaGFzZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaml0T25seUd1YXJkZWRFeHByZXNzaW9uKGV4cHI6IG8uRXhwcmVzc2lvbik6IG8uRXhwcmVzc2lvbiB7XG4gIGNvbnN0IG5nSml0TW9kZSA9IG5ldyBvLkV4dGVybmFsRXhwcih7bmFtZTogJ25nSml0TW9kZScsIG1vZHVsZU5hbWU6IG51bGx9KTtcbiAgY29uc3Qgaml0RmxhZ05vdERlZmluZWQgPSBuZXcgby5CaW5hcnlPcGVyYXRvckV4cHIoXG4gICAgICBvLkJpbmFyeU9wZXJhdG9yLklkZW50aWNhbCwgbmV3IG8uVHlwZW9mRXhwcihuZ0ppdE1vZGUpLCBvLmxpdGVyYWwoJ3VuZGVmaW5lZCcpKTtcbiAgY29uc3Qgaml0RmxhZ1VuZGVmaW5lZE9yVHJ1ZSA9IG5ldyBvLkJpbmFyeU9wZXJhdG9yRXhwcihcbiAgICAgIG8uQmluYXJ5T3BlcmF0b3IuT3IsIGppdEZsYWdOb3REZWZpbmVkLCBuZ0ppdE1vZGUsIC8qIHR5cGUgKi8gdW5kZWZpbmVkLFxuICAgICAgLyogc291cmNlU3BhbiAqLyB1bmRlZmluZWQsIHRydWUpO1xuICByZXR1cm4gbmV3IG8uQmluYXJ5T3BlcmF0b3JFeHByKG8uQmluYXJ5T3BlcmF0b3IuQW5kLCBqaXRGbGFnVW5kZWZpbmVkT3JUcnVlLCBleHByKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBSZWZlcmVuY2UodmFsdWU6IGFueSk6IFIzUmVmZXJlbmNlIHtcbiAgY29uc3Qgd3JhcHBlZCA9IG5ldyBvLldyYXBwZWROb2RlRXhwcih2YWx1ZSk7XG4gIHJldHVybiB7dmFsdWU6IHdyYXBwZWQsIHR5cGU6IHdyYXBwZWR9O1xufSJdfQ==