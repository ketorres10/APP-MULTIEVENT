/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Query } from '../../api/Query';
/**
 * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
 * @type {function(): number} Generated ID.
 */
export declare const LUIDGenerator: () => number;
/**
 * Sha1 hash of the input string
 * @param {!string} str The string to hash
 * @return {!string} The resulting hash
 */
export declare const sha1: (str: string) => string;
/**
 * Use this for all debug messages in Firebase.
 * @type {?function(string)}
 */
export declare let logger: ((a: string) => void) | null;
/**
 * The implementation of Firebase.enableLogging (defined here to break dependencies)
 * @param {boolean|?function(string)} logger_ A flag to turn on logging, or a custom logger
 * @param {boolean=} persistent Whether or not to persist logging settings across refreshes
 */
export declare const enableLogging: (logger_?: boolean | ((a: string) => void), persistent?: boolean) => void;
/**
 *
 * @param {...(string|Arguments)} varArgs
 */
export declare const log: (...varArgs: unknown[]) => void;
/**
 * @param {!string} prefix
 * @return {function(...[*])}
 */
export declare const logWrapper: (prefix: string) => (...varArgs: unknown[]) => void;
/**
 * @param {...string} varArgs
 */
export declare const error: (...varArgs: string[]) => void;
/**
 * @param {...string} varArgs
 */
export declare const fatal: (...varArgs: string[]) => never;
/**
 * @param {...*} varArgs
 */
export declare const warn: (...varArgs: unknown[]) => void;
/**
 * Logs a warning if the containing page uses https. Called when a call to new Firebase
 * does not use https.
 */
export declare const warnIfPageIsSecure: () => void;
/**
 * @param {!String} methodName
 */
export declare const warnAboutUnsupportedMethod: (methodName: string) => void;
/**
 * Returns true if data is NaN, or +/- Infinity.
 * @param {*} data
 * @return {boolean}
 */
export declare const isInvalidJSONNumber: (data: unknown) => boolean;
/**
 * @param {function()} fn
 */
export declare const executeWhenDOMReady: (fn: () => void) => void;
/**
 * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
 * @type {!string}
 */
export declare const MIN_NAME = "[MIN_NAME]";
/**
 * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
 * @type {!string}
 */
export declare const MAX_NAME = "[MAX_NAME]";
/**
 * Compares valid Firebase key names, plus min and max name
 * @param {!string} a
 * @param {!string} b
 * @return {!number}
 */
export declare const nameCompare: (a: string, b: string) => number;
/**
 * @param {!string} a
 * @param {!string} b
 * @return {!number} comparison result.
 */
export declare const stringCompare: (a: string, b: string) => number;
/**
 * @param {string} key
 * @param {Object} obj
 * @return {*}
 */
export declare const requireKey: (key: string, obj: {
    [k: string]: unknown;
}) => unknown;
/**
 * @param {*} obj
 * @return {string}
 */
export declare const ObjectToUniqueKey: (obj: unknown) => string;
/**
 * Splits a string into a number of smaller segments of maximum size
 * @param {!string} str The string
 * @param {!number} segsize The maximum number of chars in the string.
 * @return {Array.<string>} The string, split into appropriately-sized chunks
 */
export declare const splitStringBySize: (str: string, segsize: number) => string[];
/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj The object or array to iterate over
 * @param fn The function to apply
 */
export declare function each(obj: object, fn: (k: string, v: unknown) => void): void;
/**
 * Like goog.bind, but doesn't bother to create a closure if opt_context is null/undefined.
 * @param {function(*)} callback Callback function.
 * @param {?Object=} context Optional context to bind to.
 * @return {function(*)}
 */
export declare const bindCallback: (callback: (a: unknown) => void, context?: object) => Function;
/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param {!number} v A double
 * @return {string}
 */
export declare const doubleToIEEE754String: (v: number) => string;
/**
 * Used to detect if we're in a Chrome content script (which executes in an
 * isolated environment where long-polling doesn't work).
 * @return {boolean}
 */
export declare const isChromeExtensionContentScript: () => boolean;
/**
 * Used to detect if we're in a Windows 8 Store app.
 * @return {boolean}
 */
export declare const isWindowsStoreApp: () => boolean;
/**
 * Converts a server error code to a Javascript Error
 * @param {!string} code
 * @param {!Query} query
 * @return {Error}
 */
export declare const errorForServerCode: (code: string, query: Query) => Error;
/**
 * Used to test for integer-looking strings
 * @type {RegExp}
 * @private
 */
export declare const INTEGER_REGEXP_: RegExp;
/**
 * If the string contains a 32-bit integer, return it.  Else return null.
 * @param {!string} str
 * @return {?number}
 */
export declare const tryParseInt: (str: string) => number;
/**
 * Helper to run some code but catch any exceptions and re-throw them later.
 * Useful for preventing user callbacks from breaking internal code.
 *
 * Re-throwing the exception from a setTimeout is a little evil, but it's very
 * convenient (we don't have to try to figure out when is a safe point to
 * re-throw it), and the behavior seems reasonable:
 *
 * * If you aren't pausing on exceptions, you get an error in the console with
 *   the correct stack trace.
 * * If you're pausing on all exceptions, the debugger will pause on your
 *   exception and then again when we rethrow it.
 * * If you're only pausing on uncaught exceptions, the debugger will only pause
 *   on us re-throwing it.
 *
 * @param {!function()} fn The code to guard.
 */
export declare const exceptionGuard: (fn: () => void) => void;
/**
 * Helper function to safely call opt_callback with the specified arguments.  It:
 * 1. Turns into a no-op if opt_callback is null or undefined.
 * 2. Wraps the call inside exceptionGuard to prevent exceptions from breaking our state.
 *
 * @param {?Function=} callback Optional onComplete callback.
 * @param {...*} varArgs Arbitrary args to be passed to opt_onComplete
 */
export declare const callUserCallback: (callback?: Function, ...varArgs: unknown[]) => void;
/**
 * @return {boolean} true if we think we're currently being crawled.
 */
export declare const beingCrawled: () => boolean;
/**
 * Export a property of an object using a getter function.
 *
 * @param {!Object} object
 * @param {string} name
 * @param {!function(): *} fnGet
 */
export declare const exportPropGetter: (object: object, name: string, fnGet: () => unknown) => void;
/**
 * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
 *
 * It is removed with clearTimeout() as normal.
 *
 * @param {Function} fn Function to run.
 * @param {number} time Milliseconds to wait before running.
 * @return {number|Object} The setTimeout() return value.
 */
export declare const setTimeoutNonBlocking: (fn: Function, time: number) => number | object;
