'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib = require('tslib');
var firebase = _interopDefault(require('@firebase/app'));
var logger = require('@firebase/logger');
require('@firebase/util');
var component = require('@firebase/component');
var crypto = require('crypto');
var util$1 = require('util');
var grpcJs = require('@grpc/grpc-js');
var package_json = require('@grpc/grpc-js/package.json');
var protoLoader = require('@grpc/proto-loader');
var path = require('path');
require('protobufjs');

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
/** The semver (www.semver.org) version of the SDK. */
var SDK_VERSION = firebase.SDK_VERSION;
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */
var PlatformSupport = /** @class */ (function () {
    function PlatformSupport() {
    }
    PlatformSupport.setPlatform = function (platform) {
        if (PlatformSupport.platform) {
            fail('Platform already defined');
        }
        PlatformSupport.platform = platform;
    };
    PlatformSupport.getPlatform = function () {
        if (!PlatformSupport.platform) {
            fail('Platform not set');
        }
        return PlatformSupport.platform;
    };
    return PlatformSupport;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var logClient = new logger.Logger('@firebase/firestore');
// Helper methods are needed because variables can't be exported as read/write
function getLogLevel() {
    return logClient.logLevel;
}
function setLogLevel(newLevel) {
    logClient.logLevel = newLevel;
}
function logDebug(msg) {
    var obj = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        obj[_i - 1] = arguments[_i];
    }
    if (logClient.logLevel <= logger.LogLevel.DEBUG) {
        var args = obj.map(argToString);
        logClient.debug.apply(logClient, tslib.__spreadArrays(["Firestore (" + SDK_VERSION + "): " + msg], args));
    }
}
function logError(msg) {
    var obj = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        obj[_i - 1] = arguments[_i];
    }
    if (logClient.logLevel <= logger.LogLevel.ERROR) {
        var args = obj.map(argToString);
        logClient.error.apply(logClient, tslib.__spreadArrays(["Firestore (" + SDK_VERSION + "): " + msg], args));
    }
}
/**
 * Converts an additional log parameter to a string representation.
 */
function argToString(obj) {
    if (typeof obj === 'string') {
        return obj;
    }
    else {
        var platform = PlatformSupport.getPlatform();
        try {
            return platform.formatJSON(obj);
        }
        catch (e) {
            // Converting to JSON failed, just log the object directly
            return obj;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */
function fail(failure) {
    if (failure === void 0) { failure = 'Unexpected state'; }
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    var message = "FIRESTORE (" + SDK_VERSION + ") INTERNAL ASSERTION FAILED: " + failure;
    logError(message);
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw new Error(message);
}
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */
function hardAssert(assertion, message) {
    if (!assertion) {
        fail(message);
    }
}
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * The code of callsites invoking this function are stripped out in production
 * builds. Any side-effects of code within the debugAssert() invocation will not
 * happen in this case.
 */
function debugAssert(assertion, message) {
    if (!assertion) {
        fail(message);
    }
}
/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */
function debugCast(obj, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
constructor) {
    debugAssert(obj instanceof constructor, "Expected type '" + constructor.name + "', but was '" + obj.constructor.name + "'");
    return obj;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var AutoId = /** @class */ (function () {
    function AutoId() {
    }
    AutoId.newId = function () {
        // Alphanumeric characters
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // The largest byte value that is a multiple of `char.length`.
        var maxMultiple = Math.floor(256 / chars.length) * chars.length;
        debugAssert(0 < maxMultiple && maxMultiple < 256, "Expect maxMultiple to be (0, 256), but got " + maxMultiple);
        var autoId = '';
        var targetLength = 20;
        while (autoId.length < targetLength) {
            var bytes = PlatformSupport.getPlatform().randomBytes(40);
            for (var i = 0; i < bytes.length; ++i) {
                // Only accept values that are [0, maxMultiple), this ensures they can
                // be evenly mapped to indices of `chars` via a modulo operation.
                if (autoId.length < targetLength && bytes[i] < maxMultiple) {
                    autoId += chars.charAt(bytes[i] % chars.length);
                }
            }
        }
        debugAssert(autoId.length === targetLength, 'Invalid auto ID: ' + autoId);
        return autoId;
    };
    return AutoId;
}());
function primitiveComparator(left, right) {
    if (left < right) {
        return -1;
    }
    if (left > right) {
        return 1;
    }
    return 0;
}
/** Helper to compare arrays using isEqual(). */
function arrayEquals(left, right, comparator) {
    if (left.length !== right.length) {
        return false;
    }
    return left.every(function (value, index) { return comparator(value, right[index]); });
}
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
var DatabaseInfo = /** @class */ (function () {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
    function DatabaseInfo(databaseId, persistenceKey, host, ssl, forceLongPolling) {
        this.databaseId = databaseId;
        this.persistenceKey = persistenceKey;
        this.host = host;
        this.ssl = ssl;
        this.forceLongPolling = forceLongPolling;
    }
    return DatabaseInfo;
}());
/** The default database name for a project. */
var DEFAULT_DATABASE_NAME = '(default)';
/** Represents the database ID a Firestore client is associated with. */
var DatabaseId = /** @class */ (function () {
    function DatabaseId(projectId, database) {
        this.projectId = projectId;
        this.database = database ? database : DEFAULT_DATABASE_NAME;
    }
    Object.defineProperty(DatabaseId.prototype, "isDefaultDatabase", {
        get: function () {
            return this.database === DEFAULT_DATABASE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    DatabaseId.prototype.isEqual = function (other) {
        return (other instanceof DatabaseId &&
            other.projectId === this.projectId &&
            other.database === this.database);
    };
    DatabaseId.prototype.compareTo = function (other) {
        return (primitiveComparator(this.projectId, other.projectId) ||
            primitiveComparator(this.database, other.database));
    };
    return DatabaseId;
}());
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
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
var User = /** @class */ (function () {
    function User(uid) {
        this.uid = uid;
    }
    User.prototype.isAuthenticated = function () {
        return this.uid != null;
    };
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    User.prototype.toKey = function () {
        if (this.isAuthenticated()) {
            return 'uid:' + this.uid;
        }
        else {
            return 'anonymous-user';
        }
    };
    User.prototype.isEqual = function (otherUser) {
        return otherUser.uid === this.uid;
    };
    return User;
}());
/** A user with a null UID. */
User.UNAUTHENTICATED = new User(null);
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
User.GOOGLE_CREDENTIALS = new User('google-credentials-uid');
User.FIRST_PARTY = new User('first-party-uid');
/**
 * @license
 * Copyright 2018 Google Inc.
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
/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */
var ListenSequence = /** @class */ (function () {
    function ListenSequence(previousValue, sequenceNumberSyncer) {
        var _this = this;
        this.previousValue = previousValue;
        if (sequenceNumberSyncer) {
            sequenceNumberSyncer.sequenceNumberHandler = function (sequenceNumber) { return _this.setPreviousValue(sequenceNumber); };
            this.writeNewSequenceNumber = function (sequenceNumber) { return sequenceNumberSyncer.writeSequenceNumber(sequenceNumber); };
        }
    }
    ListenSequence.prototype.setPreviousValue = function (externalPreviousValue) {
        this.previousValue = Math.max(externalPreviousValue, this.previousValue);
        return this.previousValue;
    };
    ListenSequence.prototype.next = function () {
        var nextValue = ++this.previousValue;
        if (this.writeNewSequenceNumber) {
            this.writeNewSequenceNumber(nextValue);
        }
        return nextValue;
    };
    return ListenSequence;
}());
ListenSequence.INVALID = -1;
/**
 * @license
 * Copyright 2017 Google LLC
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
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var SortedMap = /** @class */ (function () {
    function SortedMap(comparator, root) {
        this.comparator = comparator;
        this.root = root ? root : LLRBNode.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    SortedMap.prototype.insert = function (key, value) {
        return new SortedMap(this.comparator, this.root
            .insert(key, value, this.comparator)
            .copy(null, null, LLRBNode.BLACK, null, null));
    };
    // Returns a copy of the map, with the specified key removed.
    SortedMap.prototype.remove = function (key) {
        return new SortedMap(this.comparator, this.root
            .remove(key, this.comparator)
            .copy(null, null, LLRBNode.BLACK, null, null));
    };
    // Returns the value of the node with the given key, or null.
    SortedMap.prototype.get = function (key) {
        var node = this.root;
        while (!node.isEmpty()) {
            var cmp = this.comparator(key, node.key);
            if (cmp === 0) {
                return node.value;
            }
            else if (cmp < 0) {
                node = node.left;
            }
            else if (cmp > 0) {
                node = node.right;
            }
        }
        return null;
    };
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    SortedMap.prototype.indexOf = function (key) {
        // Number of nodes that were pruned when descending right
        var prunedNodes = 0;
        var node = this.root;
        while (!node.isEmpty()) {
            var cmp = this.comparator(key, node.key);
            if (cmp === 0) {
                return prunedNodes + node.left.size;
            }
            else if (cmp < 0) {
                node = node.left;
            }
            else {
                // Count all nodes left of the node plus the node itself
                prunedNodes += node.left.size + 1;
                node = node.right;
            }
        }
        // Node not found
        return -1;
    };
    SortedMap.prototype.isEmpty = function () {
        return this.root.isEmpty();
    };
    Object.defineProperty(SortedMap.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function () {
            return this.root.size;
        },
        enumerable: true,
        configurable: true
    });
    // Returns the minimum key in the map.
    SortedMap.prototype.minKey = function () {
        return this.root.minKey();
    };
    // Returns the maximum key in the map.
    SortedMap.prototype.maxKey = function () {
        return this.root.maxKey();
    };
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    SortedMap.prototype.inorderTraversal = function (action) {
        return this.root.inorderTraversal(action);
    };
    SortedMap.prototype.forEach = function (fn) {
        this.inorderTraversal(function (k, v) {
            fn(k, v);
            return false;
        });
    };
    SortedMap.prototype.toString = function () {
        var descriptions = [];
        this.inorderTraversal(function (k, v) {
            descriptions.push(k + ":" + v);
            return false;
        });
        return "{" + descriptions.join(', ') + "}";
    };
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    SortedMap.prototype.reverseTraversal = function (action) {
        return this.root.reverseTraversal(action);
    };
    // Returns an iterator over the SortedMap.
    SortedMap.prototype.getIterator = function () {
        return new SortedMapIterator(this.root, null, this.comparator, false);
    };
    SortedMap.prototype.getIteratorFrom = function (key) {
        return new SortedMapIterator(this.root, key, this.comparator, false);
    };
    SortedMap.prototype.getReverseIterator = function () {
        return new SortedMapIterator(this.root, null, this.comparator, true);
    };
    SortedMap.prototype.getReverseIteratorFrom = function (key) {
        return new SortedMapIterator(this.root, key, this.comparator, true);
    };
    return SortedMap;
}()); // end SortedMap
// An iterator over an LLRBNode.
var SortedMapIterator = /** @class */ (function () {
    function SortedMapIterator(node, startKey, comparator, isReverse) {
        this.isReverse = isReverse;
        this.nodeStack = [];
        var cmp = 1;
        while (!node.isEmpty()) {
            cmp = startKey ? comparator(node.key, startKey) : 1;
            // flip the comparison if we're going in reverse
            if (isReverse) {
                cmp *= -1;
            }
            if (cmp < 0) {
                // This node is less than our start key. ignore it
                if (this.isReverse) {
                    node = node.left;
                }
                else {
                    node = node.right;
                }
            }
            else if (cmp === 0) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.nodeStack.push(node);
                break;
            }
            else {
                // This node is greater than our start key, add it to the stack and move
                // to the next one
                this.nodeStack.push(node);
                if (this.isReverse) {
                    node = node.right;
                }
                else {
                    node = node.left;
                }
            }
        }
    }
    SortedMapIterator.prototype.getNext = function () {
        debugAssert(this.nodeStack.length > 0, 'getNext() called on iterator when hasNext() is false.');
        var node = this.nodeStack.pop();
        var result = { key: node.key, value: node.value };
        if (this.isReverse) {
            node = node.left;
            while (!node.isEmpty()) {
                this.nodeStack.push(node);
                node = node.right;
            }
        }
        else {
            node = node.right;
            while (!node.isEmpty()) {
                this.nodeStack.push(node);
                node = node.left;
            }
        }
        return result;
    };
    SortedMapIterator.prototype.hasNext = function () {
        return this.nodeStack.length > 0;
    };
    SortedMapIterator.prototype.peek = function () {
        if (this.nodeStack.length === 0) {
            return null;
        }
        var node = this.nodeStack[this.nodeStack.length - 1];
        return { key: node.key, value: node.value };
    };
    return SortedMapIterator;
}()); // end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
var LLRBNode = /** @class */ (function () {
    function LLRBNode(key, value, color, left, right) {
        this.key = key;
        this.value = value;
        this.color = color != null ? color : LLRBNode.RED;
        this.left = left != null ? left : LLRBNode.EMPTY;
        this.right = right != null ? right : LLRBNode.EMPTY;
        this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    LLRBNode.prototype.copy = function (key, value, color, left, right) {
        return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
    };
    LLRBNode.prototype.isEmpty = function () {
        return false;
    };
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    LLRBNode.prototype.inorderTraversal = function (action) {
        return (this.left.inorderTraversal(action) ||
            action(this.key, this.value) ||
            this.right.inorderTraversal(action));
    };
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    LLRBNode.prototype.reverseTraversal = function (action) {
        return (this.right.reverseTraversal(action) ||
            action(this.key, this.value) ||
            this.left.reverseTraversal(action));
    };
    // Returns the minimum node in the tree.
    LLRBNode.prototype.min = function () {
        if (this.left.isEmpty()) {
            return this;
        }
        else {
            return this.left.min();
        }
    };
    // Returns the maximum key in the tree.
    LLRBNode.prototype.minKey = function () {
        return this.min().key;
    };
    // Returns the maximum key in the tree.
    LLRBNode.prototype.maxKey = function () {
        if (this.right.isEmpty()) {
            return this.key;
        }
        else {
            return this.right.maxKey();
        }
    };
    // Returns new tree, with the key/value added.
    LLRBNode.prototype.insert = function (key, value, comparator) {
        var n = this;
        var cmp = comparator(key, n.key);
        if (cmp < 0) {
            n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
        }
        else if (cmp === 0) {
            n = n.copy(null, value, null, null, null);
        }
        else {
            n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
        }
        return n.fixUp();
    };
    LLRBNode.prototype.removeMin = function () {
        if (this.left.isEmpty()) {
            return LLRBNode.EMPTY;
        }
        var n = this;
        if (!n.left.isRed() && !n.left.left.isRed()) {
            n = n.moveRedLeft();
        }
        n = n.copy(null, null, null, n.left.removeMin(), null);
        return n.fixUp();
    };
    // Returns new tree, with the specified item removed.
    LLRBNode.prototype.remove = function (key, comparator) {
        var smallest;
        var n = this;
        if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed() && !n.left.left.isRed()) {
                n = n.moveRedLeft();
            }
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
        }
        else {
            if (n.left.isRed()) {
                n = n.rotateRight();
            }
            if (!n.right.isEmpty() && !n.right.isRed() && !n.right.left.isRed()) {
                n = n.moveRedRight();
            }
            if (comparator(key, n.key) === 0) {
                if (n.right.isEmpty()) {
                    return LLRBNode.EMPTY;
                }
                else {
                    smallest = n.right.min();
                    n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin());
                }
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
        }
        return n.fixUp();
    };
    LLRBNode.prototype.isRed = function () {
        return this.color;
    };
    // Returns new tree after performing any needed rotations.
    LLRBNode.prototype.fixUp = function () {
        var n = this;
        if (n.right.isRed() && !n.left.isRed()) {
            n = n.rotateLeft();
        }
        if (n.left.isRed() && n.left.left.isRed()) {
            n = n.rotateRight();
        }
        if (n.left.isRed() && n.right.isRed()) {
            n = n.colorFlip();
        }
        return n;
    };
    LLRBNode.prototype.moveRedLeft = function () {
        var n = this.colorFlip();
        if (n.right.left.isRed()) {
            n = n.copy(null, null, null, null, n.right.rotateRight());
            n = n.rotateLeft();
            n = n.colorFlip();
        }
        return n;
    };
    LLRBNode.prototype.moveRedRight = function () {
        var n = this.colorFlip();
        if (n.left.left.isRed()) {
            n = n.rotateRight();
            n = n.colorFlip();
        }
        return n;
    };
    LLRBNode.prototype.rotateLeft = function () {
        var nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, nl, null);
    };
    LLRBNode.prototype.rotateRight = function () {
        var nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, nr);
    };
    LLRBNode.prototype.colorFlip = function () {
        var left = this.left.copy(null, null, !this.left.color, null, null);
        var right = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, left, right);
    };
    // For testing.
    LLRBNode.prototype.checkMaxDepth = function () {
        var blackDepth = this.check();
        if (Math.pow(2.0, blackDepth) <= this.size + 1) {
            return true;
        }
        else {
            return false;
        }
    };
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    LLRBNode.prototype.check = function () {
        if (this.isRed() && this.left.isRed()) {
            throw fail('Red node has red child(' + this.key + ',' + this.value + ')');
        }
        if (this.right.isRed()) {
            throw fail('Right child of (' + this.key + ',' + this.value + ') is red');
        }
        var blackDepth = this.left.check();
        if (blackDepth !== this.right.check()) {
            throw fail('Black depths differ');
        }
        else {
            return blackDepth + (this.isRed() ? 0 : 1);
        }
    };
    return LLRBNode;
}()); // end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
LLRBNode.EMPTY = null;
LLRBNode.RED = true;
LLRBNode.BLACK = false;
// Represents an empty node (a leaf node in the Red-Black Tree).
var LLRBEmptyNode = /** @class */ (function () {
    function LLRBEmptyNode() {
        this.size = 0;
    }
    Object.defineProperty(LLRBEmptyNode.prototype, "key", {
        get: function () {
            throw fail('LLRBEmptyNode has no key.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LLRBEmptyNode.prototype, "value", {
        get: function () {
            throw fail('LLRBEmptyNode has no value.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LLRBEmptyNode.prototype, "color", {
        get: function () {
            throw fail('LLRBEmptyNode has no color.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LLRBEmptyNode.prototype, "left", {
        get: function () {
            throw fail('LLRBEmptyNode has no left child.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LLRBEmptyNode.prototype, "right", {
        get: function () {
            throw fail('LLRBEmptyNode has no right child.');
        },
        enumerable: true,
        configurable: true
    });
    // Returns a copy of the current node.
    LLRBEmptyNode.prototype.copy = function (key, value, color, left, right) {
        return this;
    };
    // Returns a copy of the tree, with the specified key/value added.
    LLRBEmptyNode.prototype.insert = function (key, value, comparator) {
        return new LLRBNode(key, value);
    };
    // Returns a copy of the tree, with the specified key removed.
    LLRBEmptyNode.prototype.remove = function (key, comparator) {
        return this;
    };
    LLRBEmptyNode.prototype.isEmpty = function () {
        return true;
    };
    LLRBEmptyNode.prototype.inorderTraversal = function (action) {
        return false;
    };
    LLRBEmptyNode.prototype.reverseTraversal = function (action) {
        return false;
    };
    LLRBEmptyNode.prototype.minKey = function () {
        return null;
    };
    LLRBEmptyNode.prototype.maxKey = function () {
        return null;
    };
    LLRBEmptyNode.prototype.isRed = function () {
        return false;
    };
    // For testing.
    LLRBEmptyNode.prototype.checkMaxDepth = function () {
        return true;
    };
    LLRBEmptyNode.prototype.check = function () {
        return 0;
    };
    return LLRBEmptyNode;
}()); // end LLRBEmptyNode
LLRBNode.EMPTY = new LLRBEmptyNode();
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var SortedSet = /** @class */ (function () {
    function SortedSet(comparator) {
        this.comparator = comparator;
        this.data = new SortedMap(this.comparator);
    }
    SortedSet.prototype.has = function (elem) {
        return this.data.get(elem) !== null;
    };
    SortedSet.prototype.first = function () {
        return this.data.minKey();
    };
    SortedSet.prototype.last = function () {
        return this.data.maxKey();
    };
    Object.defineProperty(SortedSet.prototype, "size", {
        get: function () {
            return this.data.size;
        },
        enumerable: true,
        configurable: true
    });
    SortedSet.prototype.indexOf = function (elem) {
        return this.data.indexOf(elem);
    };
    /** Iterates elements in order defined by "comparator" */
    SortedSet.prototype.forEach = function (cb) {
        this.data.inorderTraversal(function (k, v) {
            cb(k);
            return false;
        });
    };
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
    SortedSet.prototype.forEachInRange = function (range, cb) {
        var iter = this.data.getIteratorFrom(range[0]);
        while (iter.hasNext()) {
            var elem = iter.getNext();
            if (this.comparator(elem.key, range[1]) >= 0) {
                return;
            }
            cb(elem.key);
        }
    };
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    SortedSet.prototype.forEachWhile = function (cb, start) {
        var iter;
        if (start !== undefined) {
            iter = this.data.getIteratorFrom(start);
        }
        else {
            iter = this.data.getIterator();
        }
        while (iter.hasNext()) {
            var elem = iter.getNext();
            var result = cb(elem.key);
            if (!result) {
                return;
            }
        }
    };
    /** Finds the least element greater than or equal to `elem`. */
    SortedSet.prototype.firstAfterOrEqual = function (elem) {
        var iter = this.data.getIteratorFrom(elem);
        return iter.hasNext() ? iter.getNext().key : null;
    };
    SortedSet.prototype.getIterator = function () {
        return new SortedSetIterator(this.data.getIterator());
    };
    SortedSet.prototype.getIteratorFrom = function (key) {
        return new SortedSetIterator(this.data.getIteratorFrom(key));
    };
    /** Inserts or updates an element */
    SortedSet.prototype.add = function (elem) {
        return this.copy(this.data.remove(elem).insert(elem, true));
    };
    /** Deletes an element */
    SortedSet.prototype.delete = function (elem) {
        if (!this.has(elem)) {
            return this;
        }
        return this.copy(this.data.remove(elem));
    };
    SortedSet.prototype.isEmpty = function () {
        return this.data.isEmpty();
    };
    SortedSet.prototype.unionWith = function (other) {
        var result = this;
        // Make sure `result` always refers to the larger one of the two sets.
        if (result.size < other.size) {
            result = other;
            other = this;
        }
        other.forEach(function (elem) {
            result = result.add(elem);
        });
        return result;
    };
    SortedSet.prototype.isEqual = function (other) {
        if (!(other instanceof SortedSet)) {
            return false;
        }
        if (this.size !== other.size) {
            return false;
        }
        var thisIt = this.data.getIterator();
        var otherIt = other.data.getIterator();
        while (thisIt.hasNext()) {
            var thisElem = thisIt.getNext().key;
            var otherElem = otherIt.getNext().key;
            if (this.comparator(thisElem, otherElem) !== 0) {
                return false;
            }
        }
        return true;
    };
    SortedSet.prototype.toArray = function () {
        var res = [];
        this.forEach(function (targetId) {
            res.push(targetId);
        });
        return res;
    };
    SortedSet.prototype.toString = function () {
        var result = [];
        this.forEach(function (elem) { return result.push(elem); });
        return 'SortedSet(' + result.toString() + ')';
    };
    SortedSet.prototype.copy = function (data) {
        var result = new SortedSet(this.comparator);
        result.data = data;
        return result;
    };
    return SortedSet;
}());
var SortedSetIterator = /** @class */ (function () {
    function SortedSetIterator(iter) {
        this.iter = iter;
    }
    SortedSetIterator.prototype.getNext = function () {
        return this.iter.getNext().key;
    };
    SortedSetIterator.prototype.hasNext = function () {
        return this.iter.hasNext();
    };
    return SortedSetIterator;
}());
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
var Code = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: 'ok',
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: 'cancelled',
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: 'unknown',
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: 'invalid-argument',
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: 'deadline-exceeded',
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: 'not-found',
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: 'already-exists',
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: 'permission-denied',
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: 'unauthenticated',
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: 'resource-exhausted',
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: 'failed-precondition',
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: 'aborted',
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: 'out-of-range',
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: 'unimplemented',
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: 'internal',
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: 'unavailable',
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: 'data-loss'
};
/**
 * An error class used for Firestore-generated errors. Ideally we should be
 * using FirebaseError, but integrating with it is overly arduous at the moment,
 * so we define our own compatible error class (with a `name` of 'FirebaseError'
 * and compatible `code` and `message` fields.)
 */
var FirestoreError = /** @class */ (function (_super) {
    tslib.__extends(FirestoreError, _super);
    function FirestoreError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.message = message;
        _this.name = 'FirebaseError';
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        _this.toString = function () { return _this.name + ": [code=" + _this.code + "]: " + _this.message; };
        return _this;
    }
    return FirestoreError;
}(Error));
/**
 * @license
 * Copyright 2017 Google LLC
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
var DOCUMENT_KEY_NAME = '__name__';
/**
 * Path represents an ordered sequence of string segments.
 */
var BasePath = /** @class */ (function () {
    function BasePath(segments, offset, length) {
        if (offset === undefined) {
            offset = 0;
        }
        else if (offset > segments.length) {
            fail('offset ' + offset + ' out of range ' + segments.length);
        }
        if (length === undefined) {
            length = segments.length - offset;
        }
        else if (length > segments.length - offset) {
            fail('length ' + length + ' out of range ' + (segments.length - offset));
        }
        this.segments = segments;
        this.offset = offset;
        this.len = length;
    }
    Object.defineProperty(BasePath.prototype, "length", {
        get: function () {
            return this.len;
        },
        enumerable: true,
        configurable: true
    });
    BasePath.prototype.isEqual = function (other) {
        return BasePath.comparator(this, other) === 0;
    };
    BasePath.prototype.child = function (nameOrPath) {
        var segments = this.segments.slice(this.offset, this.limit());
        if (nameOrPath instanceof BasePath) {
            nameOrPath.forEach(function (segment) {
                segments.push(segment);
            });
        }
        else {
            segments.push(nameOrPath);
        }
        return this.construct(segments);
    };
    /** The index of one past the last segment of the path. */
    BasePath.prototype.limit = function () {
        return this.offset + this.length;
    };
    BasePath.prototype.popFirst = function (size) {
        size = size === undefined ? 1 : size;
        debugAssert(this.length >= size, "Can't call popFirst() with less segments");
        return this.construct(this.segments, this.offset + size, this.length - size);
    };
    BasePath.prototype.popLast = function () {
        debugAssert(!this.isEmpty(), "Can't call popLast() on empty path");
        return this.construct(this.segments, this.offset, this.length - 1);
    };
    BasePath.prototype.firstSegment = function () {
        debugAssert(!this.isEmpty(), "Can't call firstSegment() on empty path");
        return this.segments[this.offset];
    };
    BasePath.prototype.lastSegment = function () {
        return this.get(this.length - 1);
    };
    BasePath.prototype.get = function (index) {
        debugAssert(index < this.length, 'Index out of range');
        return this.segments[this.offset + index];
    };
    BasePath.prototype.isEmpty = function () {
        return this.length === 0;
    };
    BasePath.prototype.isPrefixOf = function (other) {
        if (other.length < this.length) {
            return false;
        }
        for (var i = 0; i < this.length; i++) {
            if (this.get(i) !== other.get(i)) {
                return false;
            }
        }
        return true;
    };
    BasePath.prototype.isImmediateParentOf = function (potentialChild) {
        if (this.length + 1 !== potentialChild.length) {
            return false;
        }
        for (var i = 0; i < this.length; i++) {
            if (this.get(i) !== potentialChild.get(i)) {
                return false;
            }
        }
        return true;
    };
    BasePath.prototype.forEach = function (fn) {
        for (var i = this.offset, end = this.limit(); i < end; i++) {
            fn(this.segments[i]);
        }
    };
    BasePath.prototype.toArray = function () {
        return this.segments.slice(this.offset, this.limit());
    };
    BasePath.comparator = function (p1, p2) {
        var len = Math.min(p1.length, p2.length);
        for (var i = 0; i < len; i++) {
            var left = p1.get(i);
            var right = p2.get(i);
            if (left < right) {
                return -1;
            }
            if (left > right) {
                return 1;
            }
        }
        if (p1.length < p2.length) {
            return -1;
        }
        if (p1.length > p2.length) {
            return 1;
        }
        return 0;
    };
    return BasePath;
}());
/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */
var ResourcePath = /** @class */ (function (_super) {
    tslib.__extends(ResourcePath, _super);
    function ResourcePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourcePath.prototype.construct = function (segments, offset, length) {
        return new ResourcePath(segments, offset, length);
    };
    ResourcePath.prototype.canonicalString = function () {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.toArray().join('/');
    };
    ResourcePath.prototype.toString = function () {
        return this.canonicalString();
    };
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    ResourcePath.fromString = function (path) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (path.indexOf('//') >= 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid path (" + path + "). Paths must not contain // in them.");
        }
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
        var segments = path.split('/').filter(function (segment) { return segment.length > 0; });
        return new ResourcePath(segments);
    };
    return ResourcePath;
}(BasePath));
ResourcePath.EMPTY_PATH = new ResourcePath([]);
var identifierRegExp = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/** A dot-separated path for navigating sub-objects within a document. */
var FieldPath = /** @class */ (function (_super) {
    tslib.__extends(FieldPath, _super);
    function FieldPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldPath.prototype.construct = function (segments, offset, length) {
        return new FieldPath(segments, offset, length);
    };
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    FieldPath.isValidIdentifier = function (segment) {
        return identifierRegExp.test(segment);
    };
    FieldPath.prototype.canonicalString = function () {
        return this.toArray()
            .map(function (str) {
            str = str.replace('\\', '\\\\').replace('`', '\\`');
            if (!FieldPath.isValidIdentifier(str)) {
                str = '`' + str + '`';
            }
            return str;
        })
            .join('.');
    };
    FieldPath.prototype.toString = function () {
        return this.canonicalString();
    };
    /**
     * Returns true if this field references the key of a document.
     */
    FieldPath.prototype.isKeyField = function () {
        return this.length === 1 && this.get(0) === DOCUMENT_KEY_NAME;
    };
    /**
     * The field designating the key of a document.
     */
    FieldPath.keyField = function () {
        return new FieldPath([DOCUMENT_KEY_NAME]);
    };
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    FieldPath.fromServerFormat = function (path) {
        var segments = [];
        var current = '';
        var i = 0;
        var addCurrentSegment = function () {
            if (current.length === 0) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + path + "). Paths must not be empty, begin " +
                    "with '.', end with '.', or contain '..'");
            }
            segments.push(current);
            current = '';
        };
        var inBackticks = false;
        while (i < path.length) {
            var c = path[i];
            if (c === '\\') {
                if (i + 1 === path.length) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Path has trailing escape character: ' + path);
                }
                var next = path[i + 1];
                if (!(next === '\\' || next === '.' || next === '`')) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Path has invalid escape sequence: ' + path);
                }
                current += next;
                i += 2;
            }
            else if (c === '`') {
                inBackticks = !inBackticks;
                i++;
            }
            else if (c === '.' && !inBackticks) {
                addCurrentSegment();
                i++;
            }
            else {
                current += c;
                i++;
            }
        }
        addCurrentSegment();
        if (inBackticks) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Unterminated ` in path: ' + path);
        }
        return new FieldPath(segments);
    };
    return FieldPath;
}(BasePath));
FieldPath.EMPTY_PATH = new FieldPath([]);
/**
 * @license
 * Copyright 2017 Google LLC
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
var DocumentKey = /** @class */ (function () {
    function DocumentKey(path) {
        this.path = path;
        debugAssert(DocumentKey.isDocumentKey(path), 'Invalid DocumentKey with an odd number of segments: ' +
            path.toArray().join('/'));
    }
    DocumentKey.fromName = function (name) {
        return new DocumentKey(ResourcePath.fromString(name).popFirst(5));
    };
    /** Returns true if the document is in the specified collectionId. */
    DocumentKey.prototype.hasCollectionId = function (collectionId) {
        return (this.path.length >= 2 &&
            this.path.get(this.path.length - 2) === collectionId);
    };
    DocumentKey.prototype.isEqual = function (other) {
        return (other !== null && ResourcePath.comparator(this.path, other.path) === 0);
    };
    DocumentKey.prototype.toString = function () {
        return this.path.toString();
    };
    DocumentKey.comparator = function (k1, k2) {
        return ResourcePath.comparator(k1.path, k2.path);
    };
    DocumentKey.isDocumentKey = function (path) {
        return path.length % 2 === 0;
    };
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    DocumentKey.fromSegments = function (segments) {
        return new DocumentKey(new ResourcePath(segments.slice()));
    };
    return DocumentKey;
}());
DocumentKey.EMPTY = new DocumentKey(new ResourcePath([]));
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
var EMPTY_MAYBE_DOCUMENT_MAP = new SortedMap(DocumentKey.comparator);
function maybeDocumentMap() {
    return EMPTY_MAYBE_DOCUMENT_MAP;
}
function nullableMaybeDocumentMap() {
    return maybeDocumentMap();
}
var EMPTY_DOCUMENT_MAP = new SortedMap(DocumentKey.comparator);
function documentMap() {
    return EMPTY_DOCUMENT_MAP;
}
var EMPTY_DOCUMENT_VERSION_MAP = new SortedMap(DocumentKey.comparator);
function documentVersionMap() {
    return EMPTY_DOCUMENT_VERSION_MAP;
}
var EMPTY_DOCUMENT_KEY_SET = new SortedSet(DocumentKey.comparator);
function documentKeySet() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    var set = EMPTY_DOCUMENT_KEY_SET;
    for (var _c = 0, keys_1 = keys; _c < keys_1.length; _c++) {
        var key = keys_1[_c];
        set = set.add(key);
    }
    return set;
}
var EMPTY_TARGET_ID_SET = new SortedSet(primitiveComparator);
function targetIdSet() {
    return EMPTY_TARGET_ID_SET;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Returns whether a variable is either undefined or null.
 */
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/** Returns whether the value represents -0. */
function isNegativeZero(value) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return value === -0 && 1 / value === 1 / -0;
}
/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */
function isSafeInteger(value) {
    return (typeof value === 'number' &&
        Number.isInteger(value) &&
        !isNegativeZero(value) &&
        value <= Number.MAX_SAFE_INTEGER &&
        value >= Number.MIN_SAFE_INTEGER);
}
/**
 * @license
 * Copyright 2018 Google LLC
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
/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */
// Visible for testing.
var LocalClientState = /** @class */ (function () {
    function LocalClientState() {
        this.activeTargetIds = targetIdSet();
    }
    LocalClientState.prototype.addQueryTarget = function (targetId) {
        this.activeTargetIds = this.activeTargetIds.add(targetId);
    };
    LocalClientState.prototype.removeQueryTarget = function (targetId) {
        this.activeTargetIds = this.activeTargetIds.delete(targetId);
    };
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    LocalClientState.prototype.toWebStorageJSON = function () {
        var data = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now() // Modify the existing value to trigger update.
        };
        return JSON.stringify(data);
    };
    return LocalClientState;
}());
/**
 * `MemorySharedClientState` is a simple implementation of SharedClientState for
 * clients using memory persistence. The state in this class remains fully
 * isolated and no synchronization is performed.
 */
var MemorySharedClientState = /** @class */ (function () {
    function MemorySharedClientState() {
        this.localState = new LocalClientState();
        this.queryState = {};
        this.syncEngine = null;
        this.onlineStateHandler = null;
        this.sequenceNumberHandler = null;
    }
    MemorySharedClientState.prototype.addPendingMutation = function (batchId) {
        // No op.
    };
    MemorySharedClientState.prototype.updateMutationState = function (batchId, state, error) {
        // No op.
    };
    MemorySharedClientState.prototype.addLocalQueryTarget = function (targetId) {
        this.localState.addQueryTarget(targetId);
        return this.queryState[targetId] || 'not-current';
    };
    MemorySharedClientState.prototype.updateQueryState = function (targetId, state, error) {
        this.queryState[targetId] = state;
    };
    MemorySharedClientState.prototype.removeLocalQueryTarget = function (targetId) {
        this.localState.removeQueryTarget(targetId);
    };
    MemorySharedClientState.prototype.isLocalQueryTarget = function (targetId) {
        return this.localState.activeTargetIds.has(targetId);
    };
    MemorySharedClientState.prototype.clearQueryState = function (targetId) {
        delete this.queryState[targetId];
    };
    MemorySharedClientState.prototype.getAllActiveQueryTargets = function () {
        return this.localState.activeTargetIds;
    };
    MemorySharedClientState.prototype.isActiveQueryTarget = function (targetId) {
        return this.localState.activeTargetIds.has(targetId);
    };
    MemorySharedClientState.prototype.start = function () {
        this.localState = new LocalClientState();
        return Promise.resolve();
    };
    MemorySharedClientState.prototype.handleUserChange = function (user, removedBatchIds, addedBatchIds) {
        // No op.
    };
    MemorySharedClientState.prototype.setOnlineState = function (onlineState) {
        // No op.
    };
    MemorySharedClientState.prototype.shutdown = function () { };
    MemorySharedClientState.prototype.writeSequenceNumber = function (sequenceNumber) { };
    return MemorySharedClientState;
}());
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
// The earlist date supported by Firestore timestamps (0001-01-01T00:00:00Z).
var MIN_SECONDS = -62135596800;
var Timestamp = /** @class */ (function () {
    function Timestamp(seconds, nanoseconds) {
        this.seconds = seconds;
        this.nanoseconds = nanoseconds;
        if (nanoseconds < 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + nanoseconds);
        }
        if (nanoseconds >= 1e9) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + nanoseconds);
        }
        if (seconds < MIN_SECONDS) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + seconds);
        }
        // This will break in the year 10,000.
        if (seconds >= 253402300800) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + seconds);
        }
    }
    Timestamp.now = function () {
        return Timestamp.fromMillis(Date.now());
    };
    Timestamp.fromDate = function (date) {
        return Timestamp.fromMillis(date.getTime());
    };
    Timestamp.fromMillis = function (milliseconds) {
        var seconds = Math.floor(milliseconds / 1000);
        var nanos = (milliseconds - seconds * 1000) * 1e6;
        return new Timestamp(seconds, nanos);
    };
    Timestamp.prototype.toDate = function () {
        return new Date(this.toMillis());
    };
    Timestamp.prototype.toMillis = function () {
        return this.seconds * 1000 + this.nanoseconds / 1e6;
    };
    Timestamp.prototype._compareTo = function (other) {
        if (this.seconds === other.seconds) {
            return primitiveComparator(this.nanoseconds, other.nanoseconds);
        }
        return primitiveComparator(this.seconds, other.seconds);
    };
    Timestamp.prototype.isEqual = function (other) {
        return (other.seconds === this.seconds && other.nanoseconds === this.nanoseconds);
    };
    Timestamp.prototype.toString = function () {
        return ('Timestamp(seconds=' +
            this.seconds +
            ', nanoseconds=' +
            this.nanoseconds +
            ')');
    };
    Timestamp.prototype.valueOf = function () {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var adjustedSeconds = this.seconds - MIN_SECONDS;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
        var formattedSeconds = String(adjustedSeconds).padStart(12, '0');
        var formattedNanoseconds = String(this.nanoseconds).padStart(9, '0');
        return formattedSeconds + '.' + formattedNanoseconds;
    };
    return Timestamp;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */
var SnapshotVersion = /** @class */ (function () {
    function SnapshotVersion(timestamp) {
        this.timestamp = timestamp;
    }
    SnapshotVersion.fromTimestamp = function (value) {
        return new SnapshotVersion(value);
    };
    SnapshotVersion.min = function () {
        return new SnapshotVersion(new Timestamp(0, 0));
    };
    SnapshotVersion.prototype.compareTo = function (other) {
        return this.timestamp._compareTo(other.timestamp);
    };
    SnapshotVersion.prototype.isEqual = function (other) {
        return this.timestamp.isEqual(other.timestamp);
    };
    /** Returns a number representation of the version for use in spec tests. */
    SnapshotVersion.prototype.toMicroseconds = function () {
        // Convert to microseconds.
        return this.timestamp.seconds * 1e6 + this.timestamp.nanoseconds / 1000;
    };
    SnapshotVersion.prototype.toString = function () {
        return 'SnapshotVersion(' + this.timestamp.toString() + ')';
    };
    SnapshotVersion.prototype.toTimestamp = function () {
        return this.timestamp;
    };
    return SnapshotVersion;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
function objectSize(obj) {
    var count = 0;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            count++;
        }
    }
    return count;
}
function forEach(obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn(key, obj[key]);
        }
    }
}
function isEmpty(obj) {
    debugAssert(obj != null && typeof obj === 'object', 'isEmpty() expects object parameter.');
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */
var ByteString = /** @class */ (function () {
    function ByteString(binaryString) {
        this.binaryString = binaryString;
    }
    ByteString.fromBase64String = function (base64) {
        var binaryString = PlatformSupport.getPlatform().atob(base64);
        return new ByteString(binaryString);
    };
    ByteString.fromUint8Array = function (array) {
        var binaryString = binaryStringFromUint8Array(array);
        return new ByteString(binaryString);
    };
    ByteString.prototype.toBase64 = function () {
        return PlatformSupport.getPlatform().btoa(this.binaryString);
    };
    ByteString.prototype.toUint8Array = function () {
        return uint8ArrayFromBinaryString(this.binaryString);
    };
    ByteString.prototype.approximateByteSize = function () {
        return this.binaryString.length * 2;
    };
    ByteString.prototype.compareTo = function (other) {
        return primitiveComparator(this.binaryString, other.binaryString);
    };
    ByteString.prototype.isEqual = function (other) {
        return this.binaryString === other.binaryString;
    };
    return ByteString;
}());
ByteString.EMPTY_BYTE_STRING = new ByteString('');
/**
 * Helper function to convert an Uint8array to a binary string.
 */
function binaryStringFromUint8Array(array) {
    var binaryString = '';
    for (var i = 0; i < array.length; ++i) {
        binaryString += String.fromCharCode(array[i]);
    }
    return binaryString;
}
/**
 * Helper function to convert a binary string to an Uint8Array.
 */
function uint8ArrayFromBinaryString(binaryString) {
    var buffer = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        buffer[i] = binaryString.charCodeAt(i);
    }
    return buffer;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */
var SERVER_TIMESTAMP_SENTINEL = 'server_timestamp';
var TYPE_KEY = '__type__';
var PREVIOUS_VALUE_KEY = '__previous_value__';
var LOCAL_WRITE_TIME_KEY = '__local_write_time__';
function isServerTimestamp(value) {
    var _a, _b;
    var type = (_b = (((_a = value === null || value === void 0 ? void 0 : value.mapValue) === null || _a === void 0 ? void 0 : _a.fields) || {})[TYPE_KEY]) === null || _b === void 0 ? void 0 : _b.stringValue;
    return type === SERVER_TIMESTAMP_SENTINEL;
}
/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
function serverTimestamp(localWriteTime, previousValue) {
    var _c;
    var mapValue = {
        fields: (_c = {},
            _c[TYPE_KEY] = {
                stringValue: SERVER_TIMESTAMP_SENTINEL
            },
            _c[LOCAL_WRITE_TIME_KEY] = {
                timestampValue: {
                    seconds: localWriteTime.seconds,
                    nanos: localWriteTime.nanoseconds
                }
            },
            _c)
    };
    if (previousValue) {
        mapValue.fields[PREVIOUS_VALUE_KEY] = previousValue;
    }
    return { mapValue: mapValue };
}
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */
function getPreviousValue(value) {
    var previousValue = value.mapValue.fields[PREVIOUS_VALUE_KEY];
    if (isServerTimestamp(previousValue)) {
        return getPreviousValue(previousValue);
    }
    return previousValue;
}
/**
 * Returns the local time at which this timestamp was first set.
 */
function getLocalWriteTime(value) {
    var localWriteTime = normalizeTimestamp(value.mapValue.fields[LOCAL_WRITE_TIME_KEY].timestampValue);
    return new Timestamp(localWriteTime.seconds, localWriteTime.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
var ISO_TIMESTAMP_REG_EXP = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/** Extracts the backend's type order for the provided value. */
function typeOrder(value) {
    if ('nullValue' in value) {
        return 0 /* NullValue */;
    }
    else if ('booleanValue' in value) {
        return 1 /* BooleanValue */;
    }
    else if ('integerValue' in value || 'doubleValue' in value) {
        return 2 /* NumberValue */;
    }
    else if ('timestampValue' in value) {
        return 3 /* TimestampValue */;
    }
    else if ('stringValue' in value) {
        return 5 /* StringValue */;
    }
    else if ('bytesValue' in value) {
        return 6 /* BlobValue */;
    }
    else if ('referenceValue' in value) {
        return 7 /* RefValue */;
    }
    else if ('geoPointValue' in value) {
        return 8 /* GeoPointValue */;
    }
    else if ('arrayValue' in value) {
        return 9 /* ArrayValue */;
    }
    else if ('mapValue' in value) {
        if (isServerTimestamp(value)) {
            return 4 /* ServerTimestampValue */;
        }
        return 10 /* ObjectValue */;
    }
    else {
        return fail('Invalid value type: ' + JSON.stringify(value));
    }
}
/** Tests `left` and `right` for equality based on the backend semantics. */
function valueEquals(left, right) {
    var leftType = typeOrder(left);
    var rightType = typeOrder(right);
    if (leftType !== rightType) {
        return false;
    }
    switch (leftType) {
        case 0 /* NullValue */:
            return true;
        case 1 /* BooleanValue */:
            return left.booleanValue === right.booleanValue;
        case 4 /* ServerTimestampValue */:
            return getLocalWriteTime(left).isEqual(getLocalWriteTime(right));
        case 3 /* TimestampValue */:
            return timestampEquals(left, right);
        case 5 /* StringValue */:
            return left.stringValue === right.stringValue;
        case 6 /* BlobValue */:
            return blobEquals(left, right);
        case 7 /* RefValue */:
            return left.referenceValue === right.referenceValue;
        case 8 /* GeoPointValue */:
            return geoPointEquals(left, right);
        case 2 /* NumberValue */:
            return numberEquals(left, right);
        case 9 /* ArrayValue */:
            return arrayEquals(left.arrayValue.values || [], right.arrayValue.values || [], valueEquals);
        case 10 /* ObjectValue */:
            return objectEquals(left, right);
        default:
            return fail('Unexpected value type: ' + JSON.stringify(left));
    }
}
function timestampEquals(left, right) {
    if (typeof left.timestampValue === 'string' &&
        typeof right.timestampValue === 'string' &&
        left.timestampValue.length === right.timestampValue.length) {
        // Use string equality for ISO 8601 timestamps
        return left.timestampValue === right.timestampValue;
    }
    var leftTimestamp = normalizeTimestamp(left.timestampValue);
    var rightTimestamp = normalizeTimestamp(right.timestampValue);
    return (leftTimestamp.seconds === rightTimestamp.seconds &&
        leftTimestamp.nanos === rightTimestamp.nanos);
}
function geoPointEquals(left, right) {
    return (normalizeNumber(left.geoPointValue.latitude) ===
        normalizeNumber(right.geoPointValue.latitude) &&
        normalizeNumber(left.geoPointValue.longitude) ===
            normalizeNumber(right.geoPointValue.longitude));
}
function blobEquals(left, right) {
    return normalizeByteString(left.bytesValue).isEqual(normalizeByteString(right.bytesValue));
}
function numberEquals(left, right) {
    if ('integerValue' in left && 'integerValue' in right) {
        return (normalizeNumber(left.integerValue) === normalizeNumber(right.integerValue));
    }
    else if ('doubleValue' in left && 'doubleValue' in right) {
        var n1 = normalizeNumber(left.doubleValue);
        var n2 = normalizeNumber(right.doubleValue);
        if (n1 === n2) {
            return isNegativeZero(n1) === isNegativeZero(n2);
        }
        else {
            return isNaN(n1) && isNaN(n2);
        }
    }
    return false;
}
function objectEquals(left, right) {
    var leftMap = left.mapValue.fields || {};
    var rightMap = right.mapValue.fields || {};
    if (objectSize(leftMap) !== objectSize(rightMap)) {
        return false;
    }
    for (var key in leftMap) {
        if (leftMap.hasOwnProperty(key)) {
            if (rightMap[key] === undefined ||
                !valueEquals(leftMap[key], rightMap[key])) {
                return false;
            }
        }
    }
    return true;
}
/** Returns true if the ArrayValue contains the specified element. */
function arrayValueContains(haystack, needle) {
    return ((haystack.values || []).find(function (v) { return valueEquals(v, needle); }) !== undefined);
}
function valueCompare(left, right) {
    var leftType = typeOrder(left);
    var rightType = typeOrder(right);
    if (leftType !== rightType) {
        return primitiveComparator(leftType, rightType);
    }
    switch (leftType) {
        case 0 /* NullValue */:
            return 0;
        case 1 /* BooleanValue */:
            return primitiveComparator(left.booleanValue, right.booleanValue);
        case 2 /* NumberValue */:
            return compareNumbers(left, right);
        case 3 /* TimestampValue */:
            return compareTimestamps(left.timestampValue, right.timestampValue);
        case 4 /* ServerTimestampValue */:
            return compareTimestamps(getLocalWriteTime(left), getLocalWriteTime(right));
        case 5 /* StringValue */:
            return primitiveComparator(left.stringValue, right.stringValue);
        case 6 /* BlobValue */:
            return compareBlobs(left.bytesValue, right.bytesValue);
        case 7 /* RefValue */:
            return compareReferences(left.referenceValue, right.referenceValue);
        case 8 /* GeoPointValue */:
            return compareGeoPoints(left.geoPointValue, right.geoPointValue);
        case 9 /* ArrayValue */:
            return compareArrays(left.arrayValue, right.arrayValue);
        case 10 /* ObjectValue */:
            return compareMaps(left.mapValue, right.mapValue);
        default:
            throw fail('Invalid value type: ' + leftType);
    }
}
function compareNumbers(left, right) {
    var leftNumber = normalizeNumber(left.integerValue || left.doubleValue);
    var rightNumber = normalizeNumber(right.integerValue || right.doubleValue);
    if (leftNumber < rightNumber) {
        return -1;
    }
    else if (leftNumber > rightNumber) {
        return 1;
    }
    else if (leftNumber === rightNumber) {
        return 0;
    }
    else {
        // one or both are NaN.
        if (isNaN(leftNumber)) {
            return isNaN(rightNumber) ? 0 : -1;
        }
        else {
            return 1;
        }
    }
}
function compareTimestamps(left, right) {
    if (typeof left === 'string' &&
        typeof right === 'string' &&
        left.length === right.length) {
        return primitiveComparator(left, right);
    }
    var leftTimestamp = normalizeTimestamp(left);
    var rightTimestamp = normalizeTimestamp(right);
    var comparison = primitiveComparator(leftTimestamp.seconds, rightTimestamp.seconds);
    if (comparison !== 0) {
        return comparison;
    }
    return primitiveComparator(leftTimestamp.nanos, rightTimestamp.nanos);
}
function compareReferences(leftPath, rightPath) {
    var leftSegments = leftPath.split('/');
    var rightSegments = rightPath.split('/');
    for (var i = 0; i < leftSegments.length && i < rightSegments.length; i++) {
        var comparison = primitiveComparator(leftSegments[i], rightSegments[i]);
        if (comparison !== 0) {
            return comparison;
        }
    }
    return primitiveComparator(leftSegments.length, rightSegments.length);
}
function compareGeoPoints(left, right) {
    var comparison = primitiveComparator(normalizeNumber(left.latitude), normalizeNumber(right.latitude));
    if (comparison !== 0) {
        return comparison;
    }
    return primitiveComparator(normalizeNumber(left.longitude), normalizeNumber(right.longitude));
}
function compareBlobs(left, right) {
    var leftBytes = normalizeByteString(left);
    var rightBytes = normalizeByteString(right);
    return leftBytes.compareTo(rightBytes);
}
function compareArrays(left, right) {
    var leftArray = left.values || [];
    var rightArray = right.values || [];
    for (var i = 0; i < leftArray.length && i < rightArray.length; ++i) {
        var compare = valueCompare(leftArray[i], rightArray[i]);
        if (compare) {
            return compare;
        }
    }
    return primitiveComparator(leftArray.length, rightArray.length);
}
function compareMaps(left, right) {
    var leftMap = left.fields || {};
    var leftKeys = Object.keys(leftMap);
    var rightMap = right.fields || {};
    var rightKeys = Object.keys(rightMap);
    // Even though MapValues are likely sorted correctly based on their insertion
    // order (e.g. when received from the backend), local modifications can bring
    // elements out of order. We need to re-sort the elements to ensure that
    // canonical IDs are independent of insertion order.
    leftKeys.sort();
    rightKeys.sort();
    for (var i = 0; i < leftKeys.length && i < rightKeys.length; ++i) {
        var keyCompare = primitiveComparator(leftKeys[i], rightKeys[i]);
        if (keyCompare !== 0) {
            return keyCompare;
        }
        var compare = valueCompare(leftMap[leftKeys[i]], rightMap[rightKeys[i]]);
        if (compare !== 0) {
            return compare;
        }
    }
    return primitiveComparator(leftKeys.length, rightKeys.length);
}
/**
 * Generates the canonical ID for the provided field value (as used in Target
 * serialization).
 */
function canonicalId(value) {
    return canonifyValue(value);
}
function canonifyValue(value) {
    if ('nullValue' in value) {
        return 'null';
    }
    else if ('booleanValue' in value) {
        return '' + value.booleanValue;
    }
    else if ('integerValue' in value) {
        return '' + value.integerValue;
    }
    else if ('doubleValue' in value) {
        return '' + value.doubleValue;
    }
    else if ('timestampValue' in value) {
        return canonifyTimestamp(value.timestampValue);
    }
    else if ('stringValue' in value) {
        return value.stringValue;
    }
    else if ('bytesValue' in value) {
        return canonifyByteString(value.bytesValue);
    }
    else if ('referenceValue' in value) {
        return canonifyReference(value.referenceValue);
    }
    else if ('geoPointValue' in value) {
        return canonifyGeoPoint(value.geoPointValue);
    }
    else if ('arrayValue' in value) {
        return canonifyArray(value.arrayValue);
    }
    else if ('mapValue' in value) {
        return canonifyMap(value.mapValue);
    }
    else {
        return fail('Invalid value type: ' + JSON.stringify(value));
    }
}
function canonifyByteString(byteString) {
    return normalizeByteString(byteString).toBase64();
}
function canonifyTimestamp(timestamp) {
    var normalizedTimestamp = normalizeTimestamp(timestamp);
    return "time(" + normalizedTimestamp.seconds + "," + normalizedTimestamp.nanos + ")";
}
function canonifyGeoPoint(geoPoint) {
    return "geo(" + geoPoint.latitude + "," + geoPoint.longitude + ")";
}
function canonifyReference(referenceValue) {
    return DocumentKey.fromName(referenceValue).toString();
}
function canonifyMap(mapValue) {
    // Iteration order in JavaScript is not guaranteed. To ensure that we generate
    // matching canonical IDs for identical maps, we need to sort the keys.
    var sortedKeys = Object.keys(mapValue.fields || {}).sort();
    var result = '{';
    var first = true;
    for (var _i = 0, sortedKeys_1 = sortedKeys; _i < sortedKeys_1.length; _i++) {
        var key = sortedKeys_1[_i];
        if (!first) {
            result += ',';
        }
        else {
            first = false;
        }
        result += key + ":" + canonifyValue(mapValue.fields[key]);
    }
    return result + '}';
}
function canonifyArray(arrayValue) {
    var result = '[';
    var first = true;
    for (var _i = 0, _c = arrayValue.values || []; _i < _c.length; _i++) {
        var value = _c[_i];
        if (!first) {
            result += ',';
        }
        else {
            first = false;
        }
        result += canonifyValue(value);
    }
    return result + ']';
}
/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */
function normalizeTimestamp(date) {
    hardAssert(!!date, 'Cannot normalize null or undefined timestamp.');
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (typeof date === 'string') {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var nanos = 0;
        var fraction = ISO_TIMESTAMP_REG_EXP.exec(date);
        hardAssert(!!fraction, 'invalid timestamp: ' + date);
        if (fraction[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var nanoStr = fraction[1];
            nanoStr = (nanoStr + '000000000').substr(0, 9);
            nanos = Number(nanoStr);
        }
        // Parse the date to get the seconds.
        var parsedDate = new Date(date);
        var seconds = Math.floor(parsedDate.getTime() / 1000);
        return { seconds: seconds, nanos: nanos };
    }
    else {
        // TODO(b/37282237): Use strings for Proto3 timestamps
        // assert(!this.options.useProto3Json,
        //   'The timestamp instance format requires Proto JS.');
        var seconds = normalizeNumber(date.seconds);
        var nanos = normalizeNumber(date.nanos);
        return { seconds: seconds, nanos: nanos };
    }
}
/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */
function normalizeNumber(value) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        return 0;
    }
}
/** Converts the possible Proto types for Blobs into a ByteString. */
function normalizeByteString(blob) {
    if (typeof blob === 'string') {
        return ByteString.fromBase64String(blob);
    }
    else {
        return ByteString.fromUint8Array(blob);
    }
}
/** Returns a reference value for the provided database and key. */
function refValue(databaseId, key) {
    return {
        referenceValue: "projects/" + databaseId.projectId + "/databases/" + databaseId.database + "/documents/" + key.path.canonicalString()
    };
}
/** Returns true if `value` is an IntegerValue . */
function isInteger(value) {
    return !!value && 'integerValue' in value;
}
/** Returns true if `value` is a DoubleValue. */
function isDouble(value) {
    return !!value && 'doubleValue' in value;
}
/** Returns true if `value` is either an IntegerValue or a DoubleValue. */
function isNumber(value) {
    return isInteger(value) || isDouble(value);
}
/** Returns true if `value` is an ArrayValue. */
function isArray(value) {
    return !!value && 'arrayValue' in value;
}
/** Returns true if `value` is a ReferenceValue. */
function isReferenceValue(value) {
    return !!value && 'referenceValue' in value;
}
/** Returns true if `value` is a NullValue. */
function isNullValue(value) {
    return !!value && 'nullValue' in value;
}
/** Returns true if `value` is NaN. */
function isNanValue(value) {
    return !!value && 'doubleValue' in value && isNaN(Number(value.doubleValue));
}
/** Returns true if `value` is a MapValue. */
function isMapValue(value) {
    return !!value && 'mapValue' in value;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */
var MaybeDocument = /** @class */ (function () {
    function MaybeDocument(key, version) {
        this.key = key;
        this.version = version;
    }
    return MaybeDocument;
}());
/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
var Document = /** @class */ (function (_super) {
    tslib.__extends(Document, _super);
    function Document(key, version, objectValue, options) {
        var _this = _super.call(this, key, version) || this;
        _this.objectValue = objectValue;
        _this.hasLocalMutations = !!options.hasLocalMutations;
        _this.hasCommittedMutations = !!options.hasCommittedMutations;
        return _this;
    }
    Document.prototype.field = function (path) {
        return this.objectValue.field(path);
    };
    Document.prototype.data = function () {
        return this.objectValue;
    };
    Document.prototype.toProto = function () {
        return this.objectValue.proto;
    };
    Document.prototype.isEqual = function (other) {
        return (other instanceof Document &&
            this.key.isEqual(other.key) &&
            this.version.isEqual(other.version) &&
            this.hasLocalMutations === other.hasLocalMutations &&
            this.hasCommittedMutations === other.hasCommittedMutations &&
            this.objectValue.isEqual(other.objectValue));
    };
    Document.prototype.toString = function () {
        return ("Document(" + this.key + ", " + this.version + ", " + this.objectValue.toString() + ", " +
            ("{hasLocalMutations: " + this.hasLocalMutations + "}), ") +
            ("{hasCommittedMutations: " + this.hasCommittedMutations + "})"));
    };
    Object.defineProperty(Document.prototype, "hasPendingWrites", {
        get: function () {
            return this.hasLocalMutations || this.hasCommittedMutations;
        },
        enumerable: true,
        configurable: true
    });
    return Document;
}(MaybeDocument));
/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */
function compareDocumentsByField(field, d1, d2) {
    var v1 = d1.field(field);
    var v2 = d2.field(field);
    if (v1 !== null && v2 !== null) {
        return valueCompare(v1, v2);
    }
    else {
        return fail("Trying to compare documents on fields that don't exist");
    }
}
/**
 * A class representing a deleted document.
 * Version is set to 0 if we don't point to any specific time, otherwise it
 * denotes time we know it didn't exist at.
 */
var NoDocument = /** @class */ (function (_super) {
    tslib.__extends(NoDocument, _super);
    function NoDocument(key, version, options) {
        var _this = _super.call(this, key, version) || this;
        _this.hasCommittedMutations = !!(options && options.hasCommittedMutations);
        return _this;
    }
    NoDocument.prototype.toString = function () {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    };
    Object.defineProperty(NoDocument.prototype, "hasPendingWrites", {
        get: function () {
            return this.hasCommittedMutations;
        },
        enumerable: true,
        configurable: true
    });
    NoDocument.prototype.isEqual = function (other) {
        return (other instanceof NoDocument &&
            other.hasCommittedMutations === this.hasCommittedMutations &&
            other.version.isEqual(this.version) &&
            other.key.isEqual(this.key));
    };
    return NoDocument;
}(MaybeDocument));
/**
 * A class representing an existing document whose data is unknown (e.g. a
 * document that was updated without a known base document).
 */
var UnknownDocument = /** @class */ (function (_super) {
    tslib.__extends(UnknownDocument, _super);
    function UnknownDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnknownDocument.prototype.toString = function () {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    };
    Object.defineProperty(UnknownDocument.prototype, "hasPendingWrites", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    UnknownDocument.prototype.isEqual = function (other) {
        return (other instanceof UnknownDocument &&
            other.version.isEqual(this.version) &&
            other.key.isEqual(this.key));
    };
    return UnknownDocument;
}(MaybeDocument));
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */
var ObjectValue = /** @class */ (function () {
    function ObjectValue(proto) {
        this.proto = proto;
        debugAssert(!isServerTimestamp(proto), 'ServerTimestamps should be converted to ServerTimestampValue');
    }
    ObjectValue.empty = function () {
        return new ObjectValue({ mapValue: {} });
    };
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    ObjectValue.prototype.field = function (path) {
        if (path.isEmpty()) {
            return this.proto;
        }
        else {
            var value = this.proto;
            for (var i = 0; i < path.length - 1; ++i) {
                if (!value.mapValue.fields) {
                    return null;
                }
                value = value.mapValue.fields[path.get(i)];
                if (!isMapValue(value)) {
                    return null;
                }
            }
            value = (value.mapValue.fields || {})[path.lastSegment()];
            return value || null;
        }
    };
    ObjectValue.prototype.isEqual = function (other) {
        return valueEquals(this.proto, other.proto);
    };
    return ObjectValue;
}());
/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */
var ObjectValueBuilder = /** @class */ (function () {
    /**
     * @param baseObject The object to mutate.
     */
    function ObjectValueBuilder(baseObject) {
        if (baseObject === void 0) { baseObject = ObjectValue.empty(); }
        this.baseObject = baseObject;
        /** A map that contains the accumulated changes in this builder. */
        this.overlayMap = new Map();
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */
    ObjectValueBuilder.prototype.set = function (path, value) {
        debugAssert(!path.isEmpty(), 'Cannot set field for empty path on ObjectValue');
        this.setOverlay(path, value);
        return this;
    };
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    ObjectValueBuilder.prototype.delete = function (path) {
        debugAssert(!path.isEmpty(), 'Cannot delete field for empty path on ObjectValue');
        this.setOverlay(path, null);
        return this;
    };
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    ObjectValueBuilder.prototype.setOverlay = function (path, value) {
        var currentLevel = this.overlayMap;
        for (var i = 0; i < path.length - 1; ++i) {
            var currentSegment = path.get(i);
            var currentValue = currentLevel.get(currentSegment);
            if (currentValue instanceof Map) {
                // Re-use a previously created map
                currentLevel = currentValue;
            }
            else if (currentValue &&
                typeOrder(currentValue) === 10 /* ObjectValue */) {
                // Convert the existing Protobuf MapValue into a map
                currentValue = new Map(Object.entries(currentValue.mapValue.fields || {}));
                currentLevel.set(currentSegment, currentValue);
                currentLevel = currentValue;
            }
            else {
                // Create an empty map to represent the current nesting level
                currentValue = new Map();
                currentLevel.set(currentSegment, currentValue);
                currentLevel = currentValue;
            }
        }
        currentLevel.set(path.lastSegment(), value);
    };
    /** Returns an ObjectValue with all mutations applied. */
    ObjectValueBuilder.prototype.build = function () {
        var mergedResult = this.applyOverlay(FieldPath.EMPTY_PATH, this.overlayMap);
        if (mergedResult != null) {
            return new ObjectValue(mergedResult);
        }
        else {
            return this.baseObject;
        }
    };
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.EMPTY_PATH to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    ObjectValueBuilder.prototype.applyOverlay = function (currentPath, currentOverlays) {
        var _this = this;
        var modified = false;
        var existingValue = this.baseObject.field(currentPath);
        var resultAtPath = isMapValue(existingValue)
            ? // If there is already data at the current path, base our
                Object.assign({}, existingValue.mapValue.fields) : {};
        currentOverlays.forEach(function (value, pathSegment) {
            if (value instanceof Map) {
                var nested = _this.applyOverlay(currentPath.child(pathSegment), value);
                if (nested != null) {
                    resultAtPath[pathSegment] = nested;
                    modified = true;
                }
            }
            else if (value !== null) {
                resultAtPath[pathSegment] = value;
                modified = true;
            }
            else if (resultAtPath.hasOwnProperty(pathSegment)) {
                delete resultAtPath[pathSegment];
                modified = true;
            }
        });
        return modified ? { mapValue: { fields: resultAtPath } } : null;
    };
    return ObjectValueBuilder;
}());
/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function extractFieldMask(value) {
    var fields = [];
    forEach(value.fields || {}, function (key, value) {
        var currentPath = new FieldPath([key]);
        if (isMapValue(value)) {
            var nestedMask = extractFieldMask(value.mapValue);
            var nestedFields = nestedMask.fields;
            if (nestedFields.length === 0) {
                // Preserve the empty map by adding it to the FieldMask.
                fields.push(currentPath);
            }
            else {
                // For nested and non-empty ObjectValues, add the FieldPath of the
                // leaf nodes.
                for (var _i = 0, nestedFields_1 = nestedFields; _i < nestedFields_1.length; _i++) {
                    var nestedPath = nestedFields_1[_i];
                    fields.push(currentPath.child(nestedPath));
                }
            }
        }
        else {
            // For nested and non-empty ObjectValues, add the FieldPath of the leaf
            // nodes.
            fields.push(currentPath);
        }
    });
    return new FieldMask(fields);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */
var FieldMask = /** @class */ (function () {
    function FieldMask(fields) {
        this.fields = fields;
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        fields.sort(FieldPath.comparator);
        debugAssert(!fields.some(function (v, i) { return i !== 0 && v.isEqual(fields[i - 1]); }), 'FieldMask contains field that is not unique: ' +
            fields.find(function (v, i) { return i !== 0 && v.isEqual(fields[i - 1]); }));
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */
    FieldMask.prototype.covers = function (fieldPath) {
        for (var _i = 0, _c = this.fields; _i < _c.length; _i++) {
            var fieldMaskPath = _c[_i];
            if (fieldMaskPath.isPrefixOf(fieldPath)) {
                return true;
            }
        }
        return false;
    };
    FieldMask.prototype.isEqual = function (other) {
        return arrayEquals(this.fields, other.fields, function (l, r) { return l.isEqual(r); });
    };
    return FieldMask;
}());
/** A field path and the TransformOperation to perform upon it. */
var FieldTransform = /** @class */ (function () {
    function FieldTransform(field, transform) {
        this.field = field;
        this.transform = transform;
    }
    FieldTransform.prototype.isEqual = function (other) {
        return (this.field.isEqual(other.field) && this.transform.isEqual(other.transform));
    };
    return FieldTransform;
}());
/** The result of successfully applying a mutation to the backend. */
var MutationResult = /** @class */ (function () {
    function MutationResult(
    /**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
    version, 
    /**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
    transformResults) {
        this.version = version;
        this.transformResults = transformResults;
    }
    return MutationResult;
}());
/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
var Precondition = /** @class */ (function () {
    function Precondition(updateTime, exists) {
        this.updateTime = updateTime;
        this.exists = exists;
        debugAssert(updateTime === undefined || exists === undefined, 'Precondition can specify "exists" or "updateTime" but not both');
    }
    /** Creates a new empty Precondition. */
    Precondition.none = function () {
        return new Precondition();
    };
    /** Creates a new Precondition with an exists flag. */
    Precondition.exists = function (exists) {
        return new Precondition(undefined, exists);
    };
    /** Creates a new Precondition based on a version a document exists at. */
    Precondition.updateTime = function (version) {
        return new Precondition(version);
    };
    Object.defineProperty(Precondition.prototype, "isNone", {
        /** Returns whether this Precondition is empty. */
        get: function () {
            return this.updateTime === undefined && this.exists === undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    Precondition.prototype.isValidFor = function (maybeDoc) {
        if (this.updateTime !== undefined) {
            return (maybeDoc instanceof Document &&
                maybeDoc.version.isEqual(this.updateTime));
        }
        else if (this.exists !== undefined) {
            return this.exists === maybeDoc instanceof Document;
        }
        else {
            debugAssert(this.isNone, 'Precondition should be empty');
            return true;
        }
    };
    Precondition.prototype.isEqual = function (other) {
        return (this.exists === other.exists &&
            (this.updateTime
                ? !!other.updateTime && this.updateTime.isEqual(other.updateTime)
                : !other.updateTime));
    };
    return Precondition;
}());
/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */
var Mutation = /** @class */ (function () {
    function Mutation() {
    }
    Mutation.prototype.verifyKeyMatches = function (maybeDoc) {
        if (maybeDoc != null) {
            debugAssert(maybeDoc.key.isEqual(this.key), 'Can only apply a mutation to a document with the same key');
        }
    };
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.min().
     */
    Mutation.getPostMutationVersion = function (maybeDoc) {
        if (maybeDoc instanceof Document) {
            return maybeDoc.version;
        }
        else {
            return SnapshotVersion.min();
        }
    };
    return Mutation;
}());
/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */
var SetMutation = /** @class */ (function (_super) {
    tslib.__extends(SetMutation, _super);
    function SetMutation(key, value, precondition) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.value = value;
        _this.precondition = precondition;
        _this.type = 0 /* Set */;
        return _this;
    }
    SetMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        this.verifyKeyMatches(maybeDoc);
        debugAssert(mutationResult.transformResults == null, 'Transform results received by SetMutation.');
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var version = mutationResult.version;
        return new Document(this.key, version, this.value, {
            hasCommittedMutations: true
        });
    };
    SetMutation.prototype.applyToLocalView = function (maybeDoc, baseDoc, localWriteTime) {
        this.verifyKeyMatches(maybeDoc);
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        var version = Mutation.getPostMutationVersion(maybeDoc);
        return new Document(this.key, version, this.value, {
            hasLocalMutations: true
        });
    };
    SetMutation.prototype.extractBaseValue = function (maybeDoc) {
        return null;
    };
    SetMutation.prototype.isEqual = function (other) {
        return (other instanceof SetMutation &&
            this.key.isEqual(other.key) &&
            this.value.isEqual(other.value) &&
            this.precondition.isEqual(other.precondition));
    };
    return SetMutation;
}(Mutation));
/**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 *  * When a field is in both the mask and the values, the corresponding field
 *    is updated.
 *  * When a field is in neither the mask nor the values, the corresponding
 *    field is unmodified.
 *  * When a field is in the mask but not in the values, the corresponding field
 *    is deleted.
 *  * When a field is not in the mask but is in the values, the values map is
 *    ignored.
 */
var PatchMutation = /** @class */ (function (_super) {
    tslib.__extends(PatchMutation, _super);
    function PatchMutation(key, data, fieldMask, precondition) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.data = data;
        _this.fieldMask = fieldMask;
        _this.precondition = precondition;
        _this.type = 1 /* Patch */;
        return _this;
    }
    PatchMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        this.verifyKeyMatches(maybeDoc);
        debugAssert(mutationResult.transformResults == null, 'Transform results received by PatchMutation.');
        if (!this.precondition.isValidFor(maybeDoc)) {
            // Since the mutation was not rejected, we know that the  precondition
            // matched on the backend. We therefore must not have the expected version
            // of the document in our cache and return an UnknownDocument with the
            // known updateTime.
            return new UnknownDocument(this.key, mutationResult.version);
        }
        var newData = this.patchDocument(maybeDoc);
        return new Document(this.key, mutationResult.version, newData, {
            hasCommittedMutations: true
        });
    };
    PatchMutation.prototype.applyToLocalView = function (maybeDoc, baseDoc, localWriteTime) {
        this.verifyKeyMatches(maybeDoc);
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        var version = Mutation.getPostMutationVersion(maybeDoc);
        var newData = this.patchDocument(maybeDoc);
        return new Document(this.key, version, newData, {
            hasLocalMutations: true
        });
    };
    PatchMutation.prototype.extractBaseValue = function (maybeDoc) {
        return null;
    };
    PatchMutation.prototype.isEqual = function (other) {
        return (other instanceof PatchMutation &&
            this.key.isEqual(other.key) &&
            this.fieldMask.isEqual(other.fieldMask) &&
            this.precondition.isEqual(other.precondition));
    };
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    PatchMutation.prototype.patchDocument = function (maybeDoc) {
        var data;
        if (maybeDoc instanceof Document) {
            data = maybeDoc.data();
        }
        else {
            data = ObjectValue.empty();
        }
        return this.patchObject(data);
    };
    PatchMutation.prototype.patchObject = function (data) {
        var _this = this;
        var builder = new ObjectValueBuilder(data);
        this.fieldMask.fields.forEach(function (fieldPath) {
            if (!fieldPath.isEmpty()) {
                var newValue = _this.data.field(fieldPath);
                if (newValue !== null) {
                    builder.set(fieldPath, newValue);
                }
                else {
                    builder.delete(fieldPath);
                }
            }
        });
        return builder.build();
    };
    return PatchMutation;
}(Mutation));
/**
 * A mutation that modifies specific fields of the document with transform
 * operations. Currently the only supported transform is a server timestamp, but
 * IP Address, increment(n), etc. could be supported in the future.
 *
 * It is somewhat similar to a PatchMutation in that it patches specific fields
 * and has no effect when applied to a null or NoDocument (see comment on
 * Mutation for rationale).
 */
var TransformMutation = /** @class */ (function (_super) {
    tslib.__extends(TransformMutation, _super);
    function TransformMutation(key, fieldTransforms) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.fieldTransforms = fieldTransforms;
        _this.type = 2 /* Transform */;
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        _this.precondition = Precondition.exists(true);
        return _this;
    }
    TransformMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        this.verifyKeyMatches(maybeDoc);
        hardAssert(mutationResult.transformResults != null, 'Transform results missing for TransformMutation.');
        if (!this.precondition.isValidFor(maybeDoc)) {
            // Since the mutation was not rejected, we know that the  precondition
            // matched on the backend. We therefore must not have the expected version
            // of the document in our cache and return an UnknownDocument with the
            // known updateTime.
            return new UnknownDocument(this.key, mutationResult.version);
        }
        var doc = this.requireDocument(maybeDoc);
        var transformResults = this.serverTransformResults(maybeDoc, mutationResult.transformResults);
        var version = mutationResult.version;
        var newData = this.transformObject(doc.data(), transformResults);
        return new Document(this.key, version, newData, {
            hasCommittedMutations: true
        });
    };
    TransformMutation.prototype.applyToLocalView = function (maybeDoc, baseDoc, localWriteTime) {
        this.verifyKeyMatches(maybeDoc);
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        var doc = this.requireDocument(maybeDoc);
        var transformResults = this.localTransformResults(localWriteTime, maybeDoc, baseDoc);
        var newData = this.transformObject(doc.data(), transformResults);
        return new Document(this.key, doc.version, newData, {
            hasLocalMutations: true
        });
    };
    TransformMutation.prototype.extractBaseValue = function (maybeDoc) {
        var baseObject = null;
        for (var _i = 0, _c = this.fieldTransforms; _i < _c.length; _i++) {
            var fieldTransform = _c[_i];
            var existingValue = maybeDoc instanceof Document
                ? maybeDoc.field(fieldTransform.field)
                : undefined;
            var coercedValue = fieldTransform.transform.computeBaseValue(existingValue || null);
            if (coercedValue != null) {
                if (baseObject == null) {
                    baseObject = new ObjectValueBuilder().set(fieldTransform.field, coercedValue);
                }
                else {
                    baseObject = baseObject.set(fieldTransform.field, coercedValue);
                }
            }
        }
        return baseObject ? baseObject.build() : null;
    };
    TransformMutation.prototype.isEqual = function (other) {
        return (other instanceof TransformMutation &&
            this.key.isEqual(other.key) &&
            arrayEquals(this.fieldTransforms, other.fieldTransforms, function (l, r) { return l.isEqual(r); }) &&
            this.precondition.isEqual(other.precondition));
    };
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    TransformMutation.prototype.requireDocument = function (maybeDoc) {
        debugAssert(maybeDoc instanceof Document, 'Unknown MaybeDocument type ' + maybeDoc);
        debugAssert(maybeDoc.key.isEqual(this.key), 'Can only transform a document with the same key');
        return maybeDoc;
    };
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param baseDoc The document prior to applying this mutation batch.
     * @param serverTransformResults The transform results received by the server.
     * @return The transform results list.
     */
    TransformMutation.prototype.serverTransformResults = function (baseDoc, serverTransformResults) {
        var transformResults = [];
        hardAssert(this.fieldTransforms.length === serverTransformResults.length, "server transform result count (" + serverTransformResults.length + ") " +
            ("should match field transform count (" + this.fieldTransforms.length + ")"));
        for (var i = 0; i < serverTransformResults.length; i++) {
            var fieldTransform = this.fieldTransforms[i];
            var transform = fieldTransform.transform;
            var previousValue = null;
            if (baseDoc instanceof Document) {
                previousValue = baseDoc.field(fieldTransform.field);
            }
            transformResults.push(transform.applyToRemoteDocument(previousValue, serverTransformResults[i]));
        }
        return transformResults;
    };
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @param maybeDoc The current state of the document after applying all
     *     previous mutations.
     * @param baseDoc The document prior to applying this mutation batch.
     * @return The transform results list.
     */
    TransformMutation.prototype.localTransformResults = function (localWriteTime, maybeDoc, baseDoc) {
        var transformResults = [];
        for (var _i = 0, _c = this.fieldTransforms; _i < _c.length; _i++) {
            var fieldTransform = _c[_i];
            var transform = fieldTransform.transform;
            var previousValue = null;
            if (maybeDoc instanceof Document) {
                previousValue = maybeDoc.field(fieldTransform.field);
            }
            if (previousValue === null && baseDoc instanceof Document) {
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                previousValue = baseDoc.field(fieldTransform.field);
            }
            transformResults.push(transform.applyToLocalView(previousValue, localWriteTime));
        }
        return transformResults;
    };
    TransformMutation.prototype.transformObject = function (data, transformResults) {
        debugAssert(transformResults.length === this.fieldTransforms.length, 'TransformResults length mismatch.');
        var builder = new ObjectValueBuilder(data);
        for (var i = 0; i < this.fieldTransforms.length; i++) {
            var fieldTransform = this.fieldTransforms[i];
            var fieldPath = fieldTransform.field;
            builder.set(fieldPath, transformResults[i]);
        }
        return builder.build();
    };
    return TransformMutation;
}(Mutation));
/** A mutation that deletes the document at the given key. */
var DeleteMutation = /** @class */ (function (_super) {
    tslib.__extends(DeleteMutation, _super);
    function DeleteMutation(key, precondition) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.precondition = precondition;
        _this.type = 3 /* Delete */;
        return _this;
    }
    DeleteMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        this.verifyKeyMatches(maybeDoc);
        debugAssert(mutationResult.transformResults == null, 'Transform results received by DeleteMutation.');
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new NoDocument(this.key, mutationResult.version, {
            hasCommittedMutations: true
        });
    };
    DeleteMutation.prototype.applyToLocalView = function (maybeDoc, baseDoc, localWriteTime) {
        this.verifyKeyMatches(maybeDoc);
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        if (maybeDoc) {
            debugAssert(maybeDoc.key.isEqual(this.key), 'Can only apply mutation to document with same key');
        }
        return new NoDocument(this.key, SnapshotVersion.min());
    };
    DeleteMutation.prototype.extractBaseValue = function (maybeDoc) {
        return null;
    };
    DeleteMutation.prototype.isEqual = function (other) {
        return (other instanceof DeleteMutation &&
            this.key.isEqual(other.key) &&
            this.precondition.isEqual(other.precondition));
    };
    return DeleteMutation;
}(Mutation));
/**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */
var VerifyMutation = /** @class */ (function (_super) {
    tslib.__extends(VerifyMutation, _super);
    function VerifyMutation(key, precondition) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.precondition = precondition;
        _this.type = 4 /* Verify */;
        return _this;
    }
    VerifyMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        fail('VerifyMutation should only be used in Transactions.');
    };
    VerifyMutation.prototype.applyToLocalView = function (maybeDoc, baseDoc, localWriteTime) {
        fail('VerifyMutation should only be used in Transactions.');
    };
    VerifyMutation.prototype.extractBaseValue = function (maybeDoc) {
        fail('VerifyMutation should only be used in Transactions.');
    };
    VerifyMutation.prototype.isEqual = function (other) {
        return (other instanceof VerifyMutation &&
            this.key.isEqual(other.key) &&
            this.precondition.isEqual(other.precondition));
    };
    return VerifyMutation;
}(Mutation));
/**
 * @license
 * Copyright 2017 Google LLC
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
var BATCHID_UNKNOWN = -1;
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */
var MutationBatch = /** @class */ (function () {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function MutationBatch(batchId, localWriteTime, baseMutations, mutations) {
        this.batchId = batchId;
        this.localWriteTime = localWriteTime;
        this.baseMutations = baseMutations;
        this.mutations = mutations;
        debugAssert(mutations.length > 0, 'Cannot create an empty mutation batch');
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */
    MutationBatch.prototype.applyToRemoteDocument = function (docKey, maybeDoc, batchResult) {
        if (maybeDoc) {
            debugAssert(maybeDoc.key.isEqual(docKey), "applyToRemoteDocument: key " + docKey + " should match maybeDoc key\n        " + maybeDoc.key);
        }
        var mutationResults = batchResult.mutationResults;
        debugAssert(mutationResults.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + mutationResults.length + ").");
        for (var i = 0; i < this.mutations.length; i++) {
            var mutation = this.mutations[i];
            if (mutation.key.isEqual(docKey)) {
                var mutationResult = mutationResults[i];
                maybeDoc = mutation.applyToRemoteDocument(maybeDoc, mutationResult);
            }
        }
        return maybeDoc;
    };
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    MutationBatch.prototype.applyToLocalView = function (docKey, maybeDoc) {
        if (maybeDoc) {
            debugAssert(maybeDoc.key.isEqual(docKey), "applyToLocalDocument: key " + docKey + " should match maybeDoc key\n        " + maybeDoc.key);
        }
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var _i = 0, _c = this.baseMutations; _i < _c.length; _i++) {
            var mutation = _c[_i];
            if (mutation.key.isEqual(docKey)) {
                maybeDoc = mutation.applyToLocalView(maybeDoc, maybeDoc, this.localWriteTime);
            }
        }
        var baseDoc = maybeDoc;
        // Second, apply all user-provided mutations.
        for (var _d = 0, _e = this.mutations; _d < _e.length; _d++) {
            var mutation = _e[_d];
            if (mutation.key.isEqual(docKey)) {
                maybeDoc = mutation.applyToLocalView(maybeDoc, baseDoc, this.localWriteTime);
            }
        }
        return maybeDoc;
    };
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    MutationBatch.prototype.applyToLocalDocumentSet = function (maybeDocs) {
        var _this = this;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
        var mutatedDocuments = maybeDocs;
        this.mutations.forEach(function (m) {
            var mutatedDocument = _this.applyToLocalView(m.key, maybeDocs.get(m.key));
            if (mutatedDocument) {
                mutatedDocuments = mutatedDocuments.insert(m.key, mutatedDocument);
            }
        });
        return mutatedDocuments;
    };
    MutationBatch.prototype.keys = function () {
        return this.mutations.reduce(function (keys, m) { return keys.add(m.key); }, documentKeySet());
    };
    MutationBatch.prototype.isEqual = function (other) {
        return (this.batchId === other.batchId &&
            arrayEquals(this.mutations, other.mutations, function (l, r) { return l.isEqual(r); }) &&
            arrayEquals(this.baseMutations, other.baseMutations, function (l, r) { return l.isEqual(r); }));
    };
    return MutationBatch;
}());
/** The result of applying a mutation batch to the backend. */
var MutationBatchResult = /** @class */ (function () {
    function MutationBatchResult(batch, commitVersion, mutationResults, streamToken, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    docVersions) {
        this.batch = batch;
        this.commitVersion = commitVersion;
        this.mutationResults = mutationResults;
        this.streamToken = streamToken;
        this.docVersions = docVersions;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */
    MutationBatchResult.from = function (batch, commitVersion, results, streamToken) {
        hardAssert(batch.mutations.length === results.length, 'Mutations sent ' +
            batch.mutations.length +
            ' must equal results received ' +
            results.length);
        var versionMap = documentVersionMap();
        var mutations = batch.mutations;
        for (var i = 0; i < mutations.length; i++) {
            versionMap = versionMap.insert(mutations[i].key, results[i].version);
        }
        return new MutationBatchResult(batch, commitVersion, results, streamToken, versionMap);
    };
    return MutationBatchResult;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * A map implementation that uses objects as keys. Objects must implement the
 * Equatable interface and must be immutable. Entries in the map are stored
 * together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */
var ObjectMap = /** @class */ (function () {
    function ObjectMap(mapKeyFn) {
        this.mapKeyFn = mapKeyFn;
        /**
         * The inner map for a key -> value pair. Due to the possibility of
         * collisions we keep a list of entries that we do a linear search through
         * to find an actual match. Note that collisions should be rare, so we still
         * expect near constant time lookups in practice.
         */
        this.inner = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */
    ObjectMap.prototype.get = function (key) {
        var id = this.mapKeyFn(key);
        var matches = this.inner[id];
        if (matches === undefined) {
            return undefined;
        }
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var _c = matches_1[_i], otherKey = _c[0], value = _c[1];
            if (otherKey.isEqual(key)) {
                return value;
            }
        }
        return undefined;
    };
    ObjectMap.prototype.has = function (key) {
        return this.get(key) !== undefined;
    };
    /** Put this key and value in the map. */
    ObjectMap.prototype.set = function (key, value) {
        var id = this.mapKeyFn(key);
        var matches = this.inner[id];
        if (matches === undefined) {
            this.inner[id] = [[key, value]];
            return;
        }
        for (var i = 0; i < matches.length; i++) {
            if (matches[i][0].isEqual(key)) {
                matches[i] = [key, value];
                return;
            }
        }
        matches.push([key, value]);
    };
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    ObjectMap.prototype.delete = function (key) {
        var id = this.mapKeyFn(key);
        var matches = this.inner[id];
        if (matches === undefined) {
            return false;
        }
        for (var i = 0; i < matches.length; i++) {
            if (matches[i][0].isEqual(key)) {
                if (matches.length === 1) {
                    delete this.inner[id];
                }
                else {
                    matches.splice(i, 1);
                }
                return true;
            }
        }
        return false;
    };
    ObjectMap.prototype.forEach = function (fn) {
        forEach(this.inner, function (_, entries) {
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _c = entries_1[_i], k = _c[0], v = _c[1];
                fn(k, v);
            }
        });
    };
    ObjectMap.prototype.isEmpty = function () {
        return isEmpty(this.inner);
    };
    return ObjectMap;
}());
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
/**
 * PersistencePromise<> is essentially a re-implementation of Promise<> except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise<> implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */
var PersistencePromise = /** @class */ (function () {
    function PersistencePromise(callback) {
        var _this = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
        this.nextCallback = null;
        this.catchCallback = null;
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = undefined;
        this.error = undefined;
        this.isDone = false;
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.callbackAttached = false;
        callback(function (value) {
            _this.isDone = true;
            _this.result = value;
            if (_this.nextCallback) {
                // value should be defined unless T is Void, but we can't express
                // that in the type system.
                _this.nextCallback(value);
            }
        }, function (error) {
            _this.isDone = true;
            _this.error = error;
            if (_this.catchCallback) {
                _this.catchCallback(error);
            }
        });
    }
    PersistencePromise.prototype.catch = function (fn) {
        return this.next(undefined, fn);
    };
    PersistencePromise.prototype.next = function (nextFn, catchFn) {
        var _this = this;
        if (this.callbackAttached) {
            fail('Called next() or catch() twice for PersistencePromise');
        }
        this.callbackAttached = true;
        if (this.isDone) {
            if (!this.error) {
                return this.wrapSuccess(nextFn, this.result);
            }
            else {
                return this.wrapFailure(catchFn, this.error);
            }
        }
        else {
            return new PersistencePromise(function (resolve, reject) {
                _this.nextCallback = function (value) {
                    _this.wrapSuccess(nextFn, value).next(resolve, reject);
                };
                _this.catchCallback = function (error) {
                    _this.wrapFailure(catchFn, error).next(resolve, reject);
                };
            });
        }
    };
    PersistencePromise.prototype.toPromise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.next(resolve, reject);
        });
    };
    PersistencePromise.prototype.wrapUserFunction = function (fn) {
        try {
            var result = fn();
            if (result instanceof PersistencePromise) {
                return result;
            }
            else {
                return PersistencePromise.resolve(result);
            }
        }
        catch (e) {
            return PersistencePromise.reject(e);
        }
    };
    PersistencePromise.prototype.wrapSuccess = function (nextFn, value) {
        if (nextFn) {
            return this.wrapUserFunction(function () { return nextFn(value); });
        }
        else {
            // If there's no nextFn, then R must be the same as T
            return PersistencePromise.resolve(value);
        }
    };
    PersistencePromise.prototype.wrapFailure = function (catchFn, error) {
        if (catchFn) {
            return this.wrapUserFunction(function () { return catchFn(error); });
        }
        else {
            return PersistencePromise.reject(error);
        }
    };
    PersistencePromise.resolve = function (result) {
        return new PersistencePromise(function (resolve, reject) {
            resolve(result);
        });
    };
    PersistencePromise.reject = function (error) {
        return new PersistencePromise(function (resolve, reject) {
            reject(error);
        });
    };
    PersistencePromise.waitFor = function (
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    all) {
        return new PersistencePromise(function (resolve, reject) {
            var expectedCount = 0;
            var resolvedCount = 0;
            var done = false;
            all.forEach(function (element) {
                ++expectedCount;
                element.next(function () {
                    ++resolvedCount;
                    if (done && resolvedCount === expectedCount) {
                        resolve();
                    }
                }, function (err) { return reject(err); });
            });
            done = true;
            if (resolvedCount === expectedCount) {
                resolve();
            }
        });
    };
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    PersistencePromise.or = function (predicates) {
        var p = PersistencePromise.resolve(false);
        var _loop_1 = function (predicate) {
            p = p.next(function (isTrue) {
                if (isTrue) {
                    return PersistencePromise.resolve(isTrue);
                }
                else {
                    return predicate();
                }
            });
        };
        for (var _i = 0, predicates_1 = predicates; _i < predicates_1.length; _i++) {
            var predicate = predicates_1[_i];
            _loop_1(predicate);
        }
        return p;
    };
    PersistencePromise.forEach = function (collection, f) {
        var _this = this;
        var promises = [];
        collection.forEach(function (r, s) {
            promises.push(f.call(_this, r, s));
        });
        return this.waitFor(promises);
    };
    return PersistencePromise;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */
var LocalDocumentsView = /** @class */ (function () {
    function LocalDocumentsView(remoteDocumentCache, mutationQueue, indexManager) {
        this.remoteDocumentCache = remoteDocumentCache;
        this.mutationQueue = mutationQueue;
        this.indexManager = indexManager;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */
    LocalDocumentsView.prototype.getDocument = function (transaction, key) {
        var _this = this;
        return this.mutationQueue
            .getAllMutationBatchesAffectingDocumentKey(transaction, key)
            .next(function (batches) { return _this.getDocumentInternal(transaction, key, batches); });
    };
    /** Internal version of `getDocument` that allows reusing batches. */
    LocalDocumentsView.prototype.getDocumentInternal = function (transaction, key, inBatches) {
        return this.remoteDocumentCache.getEntry(transaction, key).next(function (doc) {
            for (var _i = 0, inBatches_1 = inBatches; _i < inBatches_1.length; _i++) {
                var batch = inBatches_1[_i];
                doc = batch.applyToLocalView(key, doc);
            }
            return doc;
        });
    };
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    LocalDocumentsView.prototype.applyLocalMutationsToDocuments = function (transaction, docs, batches) {
        var results = nullableMaybeDocumentMap();
        docs.forEach(function (key, localView) {
            for (var _i = 0, batches_1 = batches; _i < batches_1.length; _i++) {
                var batch = batches_1[_i];
                localView = batch.applyToLocalView(key, localView);
            }
            results = results.insert(key, localView);
        });
        return results;
    };
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    LocalDocumentsView.prototype.getDocuments = function (transaction, keys) {
        var _this = this;
        return this.remoteDocumentCache
            .getEntries(transaction, keys)
            .next(function (docs) { return _this.getLocalViewOfDocuments(transaction, docs); });
    };
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    LocalDocumentsView.prototype.getLocalViewOfDocuments = function (transaction, baseDocs) {
        var _this = this;
        return this.mutationQueue
            .getAllMutationBatchesAffectingDocumentKeys(transaction, baseDocs)
            .next(function (batches) {
            var docs = _this.applyLocalMutationsToDocuments(transaction, baseDocs, batches);
            var results = maybeDocumentMap();
            docs.forEach(function (key, maybeDoc) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                if (!maybeDoc) {
                    maybeDoc = new NoDocument(key, SnapshotVersion.min());
                }
                results = results.insert(key, maybeDoc);
            });
            return results;
        });
    };
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    LocalDocumentsView.prototype.getDocumentsMatchingQuery = function (transaction, query, sinceReadTime) {
        if (query.isDocumentQuery()) {
            return this.getDocumentsMatchingDocumentQuery(transaction, query.path);
        }
        else if (query.isCollectionGroupQuery()) {
            return this.getDocumentsMatchingCollectionGroupQuery(transaction, query, sinceReadTime);
        }
        else {
            return this.getDocumentsMatchingCollectionQuery(transaction, query, sinceReadTime);
        }
    };
    LocalDocumentsView.prototype.getDocumentsMatchingDocumentQuery = function (transaction, docPath) {
        // Just do a simple document lookup.
        return this.getDocument(transaction, new DocumentKey(docPath)).next(function (maybeDoc) {
            var result = documentMap();
            if (maybeDoc instanceof Document) {
                result = result.insert(maybeDoc.key, maybeDoc);
            }
            return result;
        });
    };
    LocalDocumentsView.prototype.getDocumentsMatchingCollectionGroupQuery = function (transaction, query, sinceReadTime) {
        var _this = this;
        debugAssert(query.path.isEmpty(), 'Currently we only support collection group queries at the root.');
        var collectionId = query.collectionGroup;
        var results = documentMap();
        return this.indexManager
            .getCollectionParents(transaction, collectionId)
            .next(function (parents) {
            // Perform a collection query against each parent that contains the
            // collectionId and aggregate the results.
            return PersistencePromise.forEach(parents, function (parent) {
                var collectionQuery = query.asCollectionQueryAtPath(parent.child(collectionId));
                return _this.getDocumentsMatchingCollectionQuery(transaction, collectionQuery, sinceReadTime).next(function (r) {
                    r.forEach(function (key, doc) {
                        results = results.insert(key, doc);
                    });
                });
            }).next(function () { return results; });
        });
    };
    LocalDocumentsView.prototype.getDocumentsMatchingCollectionQuery = function (transaction, query, sinceReadTime) {
        var _this = this;
        // Query the remote documents and overlay mutations.
        var results;
        var mutationBatches;
        return this.remoteDocumentCache
            .getDocumentsMatchingQuery(transaction, query, sinceReadTime)
            .next(function (queryResults) {
            results = queryResults;
            return _this.mutationQueue.getAllMutationBatchesAffectingQuery(transaction, query);
        })
            .next(function (matchingMutationBatches) {
            mutationBatches = matchingMutationBatches;
            // It is possible that a PatchMutation can make a document match a query, even if
            // the version in the RemoteDocumentCache is not a match yet (waiting for server
            // to ack). To handle this, we find all document keys affected by the PatchMutations
            // that are not in `result` yet, and back fill them via `remoteDocumentCache.getEntries`,
            // otherwise those `PatchMutations` will be ignored because no base document can be found,
            // and lead to missing result for the query.
            return _this.addMissingBaseDocuments(transaction, mutationBatches, results).next(function (mergedDocuments) {
                results = mergedDocuments;
                for (var _i = 0, mutationBatches_1 = mutationBatches; _i < mutationBatches_1.length; _i++) {
                    var batch = mutationBatches_1[_i];
                    for (var _c = 0, _d = batch.mutations; _c < _d.length; _c++) {
                        var mutation = _d[_c];
                        var key = mutation.key;
                        var baseDoc = results.get(key);
                        var mutatedDoc = mutation.applyToLocalView(baseDoc, baseDoc, batch.localWriteTime);
                        if (mutatedDoc instanceof Document) {
                            results = results.insert(key, mutatedDoc);
                        }
                        else {
                            results = results.remove(key);
                        }
                    }
                }
            });
        })
            .next(function () {
            // Finally, filter out any documents that don't actually match
            // the query.
            results.forEach(function (key, doc) {
                if (!query.matches(doc)) {
                    results = results.remove(key);
                }
            });
            return results;
        });
    };
    LocalDocumentsView.prototype.addMissingBaseDocuments = function (transaction, matchingMutationBatches, existingDocuments) {
        var missingBaseDocEntriesForPatching = documentKeySet();
        for (var _i = 0, matchingMutationBatches_1 = matchingMutationBatches; _i < matchingMutationBatches_1.length; _i++) {
            var batch = matchingMutationBatches_1[_i];
            for (var _c = 0, _d = batch.mutations; _c < _d.length; _c++) {
                var mutation = _d[_c];
                if (mutation instanceof PatchMutation &&
                    existingDocuments.get(mutation.key) === null) {
                    missingBaseDocEntriesForPatching = missingBaseDocEntriesForPatching.add(mutation.key);
                }
            }
        }
        var mergedDocuments = existingDocuments;
        return this.remoteDocumentCache
            .getEntries(transaction, missingBaseDocEntriesForPatching)
            .next(function (missingBaseDocs) {
            missingBaseDocs.forEach(function (key, doc) {
                if (doc !== null && doc instanceof Document) {
                    mergedDocuments = mergedDocuments.insert(key, doc);
                }
            });
            return mergedDocuments;
        });
    };
    return LocalDocumentsView;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var PRIMARY_LEASE_LOST_ERROR_MSG = 'The current tab is not in the required state to perform this operation. ' +
    'It might be necessary to refresh the browser tab.';
/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */
var PersistenceTransaction = /** @class */ (function () {
    function PersistenceTransaction() {
        this.onCommittedListeners = [];
    }
    PersistenceTransaction.prototype.addOnCommittedListener = function (listener) {
        this.onCommittedListeners.push(listener);
    };
    PersistenceTransaction.prototype.raiseOnCommittedEvent = function () {
        this.onCommittedListeners.forEach(function (listener) { return listener(); });
    };
    return PersistenceTransaction;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * An immutable set of metadata that the local store tracks for each target.
 */
var TargetData = /** @class */ (function () {
    function TargetData(
    /** The target being listened to. */
    target, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    targetId, 
    /** The purpose of the target. */
    purpose, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    sequenceNumber, 
    /** The latest snapshot version seen for this target. */
    snapshotVersion, 
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */
    lastLimboFreeSnapshotVersion, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    resumeToken) {
        if (snapshotVersion === void 0) { snapshotVersion = SnapshotVersion.min(); }
        if (lastLimboFreeSnapshotVersion === void 0) { lastLimboFreeSnapshotVersion = SnapshotVersion.min(); }
        if (resumeToken === void 0) { resumeToken = ByteString.EMPTY_BYTE_STRING; }
        this.target = target;
        this.targetId = targetId;
        this.purpose = purpose;
        this.sequenceNumber = sequenceNumber;
        this.snapshotVersion = snapshotVersion;
        this.lastLimboFreeSnapshotVersion = lastLimboFreeSnapshotVersion;
        this.resumeToken = resumeToken;
    }
    /** Creates a new target data instance with an updated sequence number. */
    TargetData.prototype.withSequenceNumber = function (sequenceNumber) {
        return new TargetData(this.target, this.targetId, this.purpose, sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    };
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    TargetData.prototype.withResumeToken = function (resumeToken, snapshotVersion) {
        return new TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, snapshotVersion, this.lastLimboFreeSnapshotVersion, resumeToken);
    };
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    TargetData.prototype.withLastLimboFreeSnapshotVersion = function (lastLimboFreeSnapshotVersion) {
        return new TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, lastLimboFreeSnapshotVersion, this.resumeToken);
    };
    return TargetData;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG = 'LocalStore';
/**
 * Local storage in the Firestore client. Coordinates persistence components
 * like the mutation queue and remote document cache to present a
 * latency-compensated view of stored data.
 *
 * The LocalStore is responsible for accepting mutations from the Sync Engine.
 * Writes from the client are put into a queue as provisional Mutations until
 * they are processed by the RemoteStore and confirmed as having been written
 * to the server.
 *
 * The local store provides the local version of documents that have been
 * modified locally. It maintains the constraint:
 *
 *   LocalDocument = RemoteDocument + Active(LocalMutations)
 *
 * (Active mutations are those that are enqueued and have not been previously
 * acknowledged or rejected).
 *
 * The RemoteDocument ("ground truth") state is provided via the
 * applyChangeBatch method. It will be some version of a server-provided
 * document OR will be a server-provided document PLUS acknowledged mutations:
 *
 *   RemoteDocument' = RemoteDocument + Acknowledged(LocalMutations)
 *
 * Note that this "dirty" version of a RemoteDocument will not be identical to a
 * server base version, since it has LocalMutations added to it pending getting
 * an authoritative copy from the server.
 *
 * Since LocalMutations can be rejected by the server, we have to be able to
 * revert a LocalMutation that has already been applied to the LocalDocument
 * (typically done by replaying all remaining LocalMutations to the
 * RemoteDocument to re-apply).
 *
 * The LocalStore is responsible for the garbage collection of the documents it
 * contains. For now, it every doc referenced by a view, the mutation queue, or
 * the RemoteStore.
 *
 * It also maintains the persistence of mapping queries to resume tokens and
 * target ids. It needs to know this data about queries to properly know what
 * docs it would be allowed to garbage collect.
 *
 * The LocalStore must be able to efficiently execute queries against its local
 * cache of the documents, to provide the initial set of results before any
 * remote changes have been received.
 *
 * Note: In TypeScript, most methods return Promises since the implementation
 * may rely on fetching data from IndexedDB which is async.
 * These Promises will only be rejected on an I/O error or other internal
 * (unexpected) failure (e.g. failed assert) and always represent an
 * unrecoverable error (should be caught / reported by the async_queue).
 */
var LocalStore = /** @class */ (function () {
    function LocalStore(
    /** Manages our in-memory or durable persistence. */
    persistence, queryEngine, initialUser) {
        this.persistence = persistence;
        this.queryEngine = queryEngine;
        /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.targetDataByTarget = new SortedMap(primitiveComparator);
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.targetIdByTarget = new ObjectMap(function (t) { return t.canonicalId(); });
        /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.lastDocumentChangeReadTime = SnapshotVersion.min();
        debugAssert(persistence.started, 'LocalStore was passed an unstarted persistence implementation');
        this.mutationQueue = persistence.getMutationQueue(initialUser);
        this.remoteDocuments = persistence.getRemoteDocumentCache();
        this.targetCache = persistence.getTargetCache();
        this.localDocuments = new LocalDocumentsView(this.remoteDocuments, this.mutationQueue, this.persistence.getIndexManager());
        this.queryEngine.setLocalDocumentsView(this.localDocuments);
    }
    /** Starts the LocalStore. */
    LocalStore.prototype.start = function () {
        return Promise.resolve();
    };
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    LocalStore.prototype.handleUserChange = function (user) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var newMutationQueue, newLocalDocuments, result;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        newMutationQueue = this.mutationQueue;
                        newLocalDocuments = this.localDocuments;
                        return [4 /*yield*/, this.persistence.runTransaction('Handle user change', 'readonly', function (txn) {
                                // Swap out the mutation queue, grabbing the pending mutation batches
                                // before and after.
                                var oldBatches;
                                return _this.mutationQueue
                                    .getAllMutationBatches(txn)
                                    .next(function (promisedOldBatches) {
                                    oldBatches = promisedOldBatches;
                                    newMutationQueue = _this.persistence.getMutationQueue(user);
                                    // Recreate our LocalDocumentsView using the new
                                    // MutationQueue.
                                    newLocalDocuments = new LocalDocumentsView(_this.remoteDocuments, newMutationQueue, _this.persistence.getIndexManager());
                                    return newMutationQueue.getAllMutationBatches(txn);
                                })
                                    .next(function (newBatches) {
                                    var removedBatchIds = [];
                                    var addedBatchIds = [];
                                    // Union the old/new changed keys.
                                    var changedKeys = documentKeySet();
                                    for (var _i = 0, oldBatches_1 = oldBatches; _i < oldBatches_1.length; _i++) {
                                        var batch = oldBatches_1[_i];
                                        removedBatchIds.push(batch.batchId);
                                        for (var _c = 0, _d = batch.mutations; _c < _d.length; _c++) {
                                            var mutation = _d[_c];
                                            changedKeys = changedKeys.add(mutation.key);
                                        }
                                    }
                                    for (var _e = 0, newBatches_1 = newBatches; _e < newBatches_1.length; _e++) {
                                        var batch = newBatches_1[_e];
                                        addedBatchIds.push(batch.batchId);
                                        for (var _f = 0, _g = batch.mutations; _f < _g.length; _f++) {
                                            var mutation = _g[_f];
                                            changedKeys = changedKeys.add(mutation.key);
                                        }
                                    }
                                    // Return the set of all (potentially) changed documents and the list
                                    // of mutation batch IDs that were affected by change.
                                    return newLocalDocuments
                                        .getDocuments(txn, changedKeys)
                                        .next(function (affectedDocuments) {
                                        return {
                                            affectedDocuments: affectedDocuments,
                                            removedBatchIds: removedBatchIds,
                                            addedBatchIds: addedBatchIds
                                        };
                                    });
                                });
                            })];
                    case 1:
                        result = _c.sent();
                        this.mutationQueue = newMutationQueue;
                        this.localDocuments = newLocalDocuments;
                        this.queryEngine.setLocalDocumentsView(this.localDocuments);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /* Accept locally generated Mutations and commit them to storage. */
    LocalStore.prototype.localWrite = function (mutations) {
        var _this = this;
        var localWriteTime = Timestamp.now();
        var keys = mutations.reduce(function (keys, m) { return keys.add(m.key); }, documentKeySet());
        var existingDocs;
        return this.persistence
            .runTransaction('Locally write mutations', 'readwrite', function (txn) {
            // Load and apply all existing mutations. This lets us compute the
            // current base state for all non-idempotent transforms before applying
            // any additional user-provided writes.
            return _this.localDocuments.getDocuments(txn, keys).next(function (docs) {
                existingDocs = docs;
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var baseMutations = [];
                for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                    var mutation = mutations_1[_i];
                    var baseValue = mutation.extractBaseValue(existingDocs.get(mutation.key));
                    if (baseValue != null) {
                        // NOTE: The base state should only be applied if there's some
                        // existing document to override, so use a Precondition of
                        // exists=true
                        baseMutations.push(new PatchMutation(mutation.key, baseValue, extractFieldMask(baseValue.proto.mapValue), Precondition.exists(true)));
                    }
                }
                return _this.mutationQueue.addMutationBatch(txn, localWriteTime, baseMutations, mutations);
            });
        })
            .then(function (batch) {
            var changes = batch.applyToLocalDocumentSet(existingDocs);
            return { batchId: batch.batchId, changes: changes };
        });
    };
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    LocalStore.prototype.acknowledgeBatch = function (batchResult) {
        var _this = this;
        return this.persistence.runTransaction('Acknowledge batch', 'readwrite-primary', function (txn) {
            var affected = batchResult.batch.keys();
            var documentBuffer = _this.remoteDocuments.newChangeBuffer({
                trackRemovals: true // Make sure document removals show up in `getNewDocumentChanges()`
            });
            return _this.mutationQueue
                .acknowledgeBatch(txn, batchResult.batch, batchResult.streamToken)
                .next(function () { return _this.applyWriteToRemoteDocuments(txn, batchResult, documentBuffer); })
                .next(function () { return documentBuffer.apply(txn); })
                .next(function () { return _this.mutationQueue.performConsistencyCheck(txn); })
                .next(function () { return _this.localDocuments.getDocuments(txn, affected); });
        });
    };
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    LocalStore.prototype.rejectBatch = function (batchId) {
        var _this = this;
        return this.persistence.runTransaction('Reject batch', 'readwrite-primary', function (txn) {
            var affectedKeys;
            return _this.mutationQueue
                .lookupMutationBatch(txn, batchId)
                .next(function (batch) {
                hardAssert(batch !== null, 'Attempt to reject nonexistent batch!');
                affectedKeys = batch.keys();
                return _this.mutationQueue.removeMutationBatch(txn, batch);
            })
                .next(function () {
                return _this.mutationQueue.performConsistencyCheck(txn);
            })
                .next(function () {
                return _this.localDocuments.getDocuments(txn, affectedKeys);
            });
        });
    };
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending server response.
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    LocalStore.prototype.getHighestUnacknowledgedBatchId = function () {
        var _this = this;
        return this.persistence.runTransaction('Get highest unacknowledged batch id', 'readonly', function (txn) {
            return _this.mutationQueue.getHighestUnacknowledgedBatchId(txn);
        });
    };
    /** Returns the last recorded stream token for the current user. */
    LocalStore.prototype.getLastStreamToken = function () {
        var _this = this;
        return this.persistence.runTransaction('Get last stream token', 'readonly', function (txn) {
            return _this.mutationQueue.getLastStreamToken(txn);
        });
    };
    /**
     * Sets the stream token for the current user without acknowledging any
     * mutation batch. This is usually only useful after a stream handshake or in
     * response to an error that requires clearing the stream token.
     */
    LocalStore.prototype.setLastStreamToken = function (streamToken) {
        var _this = this;
        return this.persistence.runTransaction('Set last stream token', 'readwrite-primary', function (txn) {
            return _this.mutationQueue.setLastStreamToken(txn, streamToken);
        });
    };
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    LocalStore.prototype.getLastRemoteSnapshotVersion = function () {
        var _this = this;
        return this.persistence.runTransaction('Get last remote snapshot version', 'readonly', function (txn) { return _this.targetCache.getLastRemoteSnapshotVersion(txn); });
    };
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    LocalStore.prototype.applyRemoteEvent = function (remoteEvent) {
        var _this = this;
        var remoteVersion = remoteEvent.snapshotVersion;
        var newTargetDataByTargetMap = this.targetDataByTarget;
        return this.persistence
            .runTransaction('Apply remote event', 'readwrite-primary', function (txn) {
            var documentBuffer = _this.remoteDocuments.newChangeBuffer({
                trackRemovals: true // Make sure document removals show up in `getNewDocumentChanges()`
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
            newTargetDataByTargetMap = _this.targetDataByTarget;
            var promises = [];
            remoteEvent.targetChanges.forEach(function (change, targetId) {
                var oldTargetData = newTargetDataByTargetMap.get(targetId);
                if (!oldTargetData) {
                    return;
                }
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                promises.push(_this.targetCache
                    .removeMatchingKeys(txn, change.removedDocuments, targetId)
                    .next(function () {
                    return _this.targetCache.addMatchingKeys(txn, change.addedDocuments, targetId);
                }));
                var resumeToken = change.resumeToken;
                // Update the resume token if the change includes one.
                if (resumeToken.approximateByteSize() > 0) {
                    var newTargetData = oldTargetData
                        .withResumeToken(resumeToken, remoteVersion)
                        .withSequenceNumber(txn.currentSequenceNumber);
                    newTargetDataByTargetMap = newTargetDataByTargetMap.insert(targetId, newTargetData);
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    if (LocalStore.shouldPersistTargetData(oldTargetData, newTargetData, change)) {
                        promises.push(_this.targetCache.updateTargetData(txn, newTargetData));
                    }
                }
            });
            var changedDocs = maybeDocumentMap();
            var updatedKeys = documentKeySet();
            remoteEvent.documentUpdates.forEach(function (key, doc) {
                updatedKeys = updatedKeys.add(key);
            });
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            promises.push(documentBuffer.getEntries(txn, updatedKeys).next(function (existingDocs) {
                remoteEvent.documentUpdates.forEach(function (key, doc) {
                    var existingDoc = existingDocs.get(key);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                    if (doc instanceof NoDocument &&
                        doc.version.isEqual(SnapshotVersion.min())) {
                        // NoDocuments with SnapshotVersion.min() are used in manufactured
                        // events. We remove these documents from cache since we lost
                        // access.
                        documentBuffer.removeEntry(key, remoteVersion);
                        changedDocs = changedDocs.insert(key, doc);
                    }
                    else if (existingDoc == null ||
                        doc.version.compareTo(existingDoc.version) > 0 ||
                        (doc.version.compareTo(existingDoc.version) === 0 &&
                            existingDoc.hasPendingWrites)) {
                        debugAssert(!SnapshotVersion.min().isEqual(remoteVersion), 'Cannot add a document when the remote version is zero');
                        documentBuffer.addEntry(doc, remoteVersion);
                        changedDocs = changedDocs.insert(key, doc);
                    }
                    else {
                        logDebug(LOG_TAG, 'Ignoring outdated watch update for ', key, '. Current version:', existingDoc.version, ' Watch version:', doc.version);
                    }
                    if (remoteEvent.resolvedLimboDocuments.has(key)) {
                        promises.push(_this.persistence.referenceDelegate.updateLimboDocument(txn, key));
                    }
                });
            }));
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
            if (!remoteVersion.isEqual(SnapshotVersion.min())) {
                var updateRemoteVersion = _this.targetCache
                    .getLastRemoteSnapshotVersion(txn)
                    .next(function (lastRemoteSnapshotVersion) {
                    debugAssert(remoteVersion.compareTo(lastRemoteSnapshotVersion) >= 0, 'Watch stream reverted to previous snapshot?? ' +
                        remoteVersion +
                        ' < ' +
                        lastRemoteSnapshotVersion);
                    return _this.targetCache.setTargetsMetadata(txn, txn.currentSequenceNumber, remoteVersion);
                });
                promises.push(updateRemoteVersion);
            }
            return PersistencePromise.waitFor(promises)
                .next(function () { return documentBuffer.apply(txn); })
                .next(function () {
                return _this.localDocuments.getLocalViewOfDocuments(txn, changedDocs);
            });
        })
            .then(function (changedDocs) {
            _this.targetDataByTarget = newTargetDataByTargetMap;
            return changedDocs;
        });
    };
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    LocalStore.shouldPersistTargetData = function (oldTargetData, newTargetData, change) {
        hardAssert(newTargetData.resumeToken.approximateByteSize() > 0, 'Attempted to persist target data with no resume token');
        // Always persist target data if we don't already have a resume token.
        if (oldTargetData.resumeToken.approximateByteSize() === 0) {
            return true;
        }
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        var timeDelta = newTargetData.snapshotVersion.toMicroseconds() -
            oldTargetData.snapshotVersion.toMicroseconds();
        if (timeDelta >= this.RESUME_TOKEN_MAX_AGE_MICROS) {
            return true;
        }
        // Otherwise if the only thing that has changed about a target is its resume
        // token it's not worth persisting. Note that the RemoteStore keeps an
        // in-memory view of the currently active targets which includes the current
        // resume token, so stream failure or user changes will still use an
        // up-to-date resume token regardless of what we do here.
        var changes = change.addedDocuments.size +
            change.modifiedDocuments.size +
            change.removedDocuments.size;
        return changes > 0;
    };
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    LocalStore.prototype.notifyLocalViewChanges = function (viewChanges) {
        var _this = this;
        return this.persistence
            .runTransaction('notifyLocalViewChanges', 'readwrite', function (txn) {
            return PersistencePromise.forEach(viewChanges, function (viewChange) {
                return PersistencePromise.forEach(viewChange.addedKeys, function (key) { return _this.persistence.referenceDelegate.addReference(txn, viewChange.targetId, key); }).next(function () { return PersistencePromise.forEach(viewChange.removedKeys, function (key) { return _this.persistence.referenceDelegate.removeReference(txn, viewChange.targetId, key); }); });
            });
        })
            .then(function () {
            for (var _i = 0, viewChanges_1 = viewChanges; _i < viewChanges_1.length; _i++) {
                var viewChange = viewChanges_1[_i];
                var targetId = viewChange.targetId;
                if (!viewChange.fromCache) {
                    var targetData = _this.targetDataByTarget.get(targetId);
                    debugAssert(targetData !== null, "Can't set limbo-free snapshot version for unknown target: " + targetId);
                    // Advance the last limbo free snapshot version
                    var lastLimboFreeSnapshotVersion = targetData.snapshotVersion;
                    var updatedTargetData = targetData.withLastLimboFreeSnapshotVersion(lastLimboFreeSnapshotVersion);
                    _this.targetDataByTarget = _this.targetDataByTarget.insert(targetId, updatedTargetData);
                }
            }
        });
    };
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    LocalStore.prototype.nextMutationBatch = function (afterBatchId) {
        var _this = this;
        return this.persistence.runTransaction('Get next mutation batch', 'readonly', function (txn) {
            if (afterBatchId === undefined) {
                afterBatchId = BATCHID_UNKNOWN;
            }
            return _this.mutationQueue.getNextMutationBatchAfterBatchId(txn, afterBatchId);
        });
    };
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    LocalStore.prototype.readDocument = function (key) {
        var _this = this;
        return this.persistence.runTransaction('read document', 'readonly', function (txn) {
            return _this.localDocuments.getDocument(txn, key);
        });
    };
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    LocalStore.prototype.allocateTarget = function (target) {
        var _this = this;
        return this.persistence
            .runTransaction('Allocate target', 'readwrite', function (txn) {
            var targetData;
            return _this.targetCache
                .getTargetData(txn, target)
                .next(function (cached) {
                if (cached) {
                    // This target has been listened to previously, so reuse the
                    // previous targetID.
                    // TODO(mcg): freshen last accessed date?
                    targetData = cached;
                    return PersistencePromise.resolve(targetData);
                }
                else {
                    return _this.targetCache.allocateTargetId(txn).next(function (targetId) {
                        targetData = new TargetData(target, targetId, 0 /* Listen */, txn.currentSequenceNumber);
                        return _this.targetCache
                            .addTargetData(txn, targetData)
                            .next(function () { return targetData; });
                    });
                }
            });
        })
            .then(function (targetData) {
            if (_this.targetDataByTarget.get(targetData.targetId) === null) {
                _this.targetDataByTarget = _this.targetDataByTarget.insert(targetData.targetId, targetData);
                _this.targetIdByTarget.set(target, targetData.targetId);
            }
            return targetData;
        });
    };
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    LocalStore.prototype.getTargetData = function (transaction, target) {
        var targetId = this.targetIdByTarget.get(target);
        if (targetId !== undefined) {
            return PersistencePromise.resolve(this.targetDataByTarget.get(targetId));
        }
        else {
            return this.targetCache.getTargetData(transaction, target);
        }
    };
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    LocalStore.prototype.releaseTarget = function (targetId, keepPersistedTargetData) {
        var _this = this;
        var targetData = this.targetDataByTarget.get(targetId);
        debugAssert(targetData !== null, "Tried to release nonexistent target: " + targetId);
        var mode = keepPersistedTargetData ? 'readwrite' : 'readwrite-primary';
        return this.persistence
            .runTransaction('Release target', mode, function (txn) {
            if (!keepPersistedTargetData) {
                return _this.persistence.referenceDelegate.removeTarget(txn, targetData);
            }
            else {
                return PersistencePromise.resolve();
            }
        })
            .then(function () {
            _this.targetDataByTarget = _this.targetDataByTarget.remove(targetId);
            _this.targetIdByTarget.delete(targetData.target);
        });
    };
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    LocalStore.prototype.executeQuery = function (query, usePreviousResults) {
        var _this = this;
        var lastLimboFreeSnapshotVersion = SnapshotVersion.min();
        var remoteKeys = documentKeySet();
        return this.persistence.runTransaction('Execute query', 'readonly', function (txn) {
            return _this.getTargetData(txn, query.toTarget())
                .next(function (targetData) {
                if (targetData) {
                    lastLimboFreeSnapshotVersion =
                        targetData.lastLimboFreeSnapshotVersion;
                    return _this.targetCache
                        .getMatchingKeysForTargetId(txn, targetData.targetId)
                        .next(function (result) {
                        remoteKeys = result;
                    });
                }
            })
                .next(function () { return _this.queryEngine.getDocumentsMatchingQuery(txn, query, usePreviousResults
                ? lastLimboFreeSnapshotVersion
                : SnapshotVersion.min(), usePreviousResults ? remoteKeys : documentKeySet()); })
                .next(function (documents) {
                return { documents: documents, remoteKeys: remoteKeys };
            });
        });
    };
    LocalStore.prototype.applyWriteToRemoteDocuments = function (txn, batchResult, documentBuffer) {
        var _this = this;
        var batch = batchResult.batch;
        var docKeys = batch.keys();
        var promiseChain = PersistencePromise.resolve();
        docKeys.forEach(function (docKey) {
            promiseChain = promiseChain
                .next(function () {
                return documentBuffer.getEntry(txn, docKey);
            })
                .next(function (remoteDoc) {
                var doc = remoteDoc;
                var ackVersion = batchResult.docVersions.get(docKey);
                hardAssert(ackVersion !== null, 'ackVersions should contain every doc in the write.');
                if (!doc || doc.version.compareTo(ackVersion) < 0) {
                    doc = batch.applyToRemoteDocument(docKey, doc, batchResult);
                    if (!doc) {
                        debugAssert(!remoteDoc, 'Mutation batch ' +
                            batch +
                            ' applied to document ' +
                            remoteDoc +
                            ' resulted in null');
                    }
                    else {
                        // We use the commitVersion as the readTime rather than the
                        // document's updateTime since the updateTime is not advanced
                        // for updates that do not modify the underlying document.
                        documentBuffer.addEntry(doc, batchResult.commitVersion);
                    }
                }
            });
        });
        return promiseChain.next(function () { return _this.mutationQueue.removeMutationBatch(txn, batch); });
    };
    LocalStore.prototype.collectGarbage = function (garbageCollector) {
        var _this = this;
        return this.persistence.runTransaction('Collect garbage', 'readwrite-primary', function (txn) { return garbageCollector.collect(txn, _this.targetDataByTarget); });
    };
    return LocalStore;
}());
/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */
LocalStore.RESUME_TOKEN_MAX_AGE_MICROS = 5 * 60 * 1e6;
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */
function ignoreIfPrimaryLeaseLoss(err) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        return tslib.__generator(this, function (_c) {
            if (err.code === Code.FAILED_PRECONDITION &&
                err.message === PRIMARY_LEASE_LOST_ERROR_MSG) {
                logDebug(LOG_TAG, 'Unexpectedly lost primary lease');
            }
            else {
                throw err;
            }
            return [2 /*return*/];
        });
    });
}
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
/**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */
var LocalViewChanges = /** @class */ (function () {
    function LocalViewChanges(targetId, fromCache, addedKeys, removedKeys) {
        this.targetId = targetId;
        this.fromCache = fromCache;
        this.addedKeys = addedKeys;
        this.removedKeys = removedKeys;
    }
    LocalViewChanges.fromSnapshot = function (targetId, viewSnapshot) {
        var addedKeys = documentKeySet();
        var removedKeys = documentKeySet();
        for (var _i = 0, _c = viewSnapshot.docChanges; _i < _c.length; _i++) {
            var docChange = _c[_i];
            switch (docChange.type) {
                case 0 /* Added */:
                    addedKeys = addedKeys.add(docChange.doc.key);
                    break;
                case 1 /* Removed */:
                    removedKeys = removedKeys.add(docChange.doc.key);
                    break;
                // do nothing
            }
        }
        return new LocalViewChanges(targetId, viewSnapshot.fromCache, addedKeys, removedKeys);
    };
    return LocalViewChanges;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */
var ReferenceSet = /** @class */ (function () {
    function ReferenceSet() {
        // A set of outstanding references to a document sorted by key.
        this.refsByKey = new SortedSet(DocReference.compareByKey);
        // A set of outstanding references to a document sorted by target id.
        this.refsByTarget = new SortedSet(DocReference.compareByTargetId);
    }
    /** Returns true if the reference set contains no references. */
    ReferenceSet.prototype.isEmpty = function () {
        return this.refsByKey.isEmpty();
    };
    /** Adds a reference to the given document key for the given ID. */
    ReferenceSet.prototype.addReference = function (key, id) {
        var ref = new DocReference(key, id);
        this.refsByKey = this.refsByKey.add(ref);
        this.refsByTarget = this.refsByTarget.add(ref);
    };
    /** Add references to the given document keys for the given ID. */
    ReferenceSet.prototype.addReferences = function (keys, id) {
        var _this = this;
        keys.forEach(function (key) { return _this.addReference(key, id); });
    };
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    ReferenceSet.prototype.removeReference = function (key, id) {
        this.removeRef(new DocReference(key, id));
    };
    ReferenceSet.prototype.removeReferences = function (keys, id) {
        var _this = this;
        keys.forEach(function (key) { return _this.removeReference(key, id); });
    };
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    ReferenceSet.prototype.removeReferencesForId = function (id) {
        var _this = this;
        var emptyKey = DocumentKey.EMPTY;
        var startRef = new DocReference(emptyKey, id);
        var endRef = new DocReference(emptyKey, id + 1);
        var keys = [];
        this.refsByTarget.forEachInRange([startRef, endRef], function (ref) {
            _this.removeRef(ref);
            keys.push(ref.key);
        });
        return keys;
    };
    ReferenceSet.prototype.removeAllReferences = function () {
        var _this = this;
        this.refsByKey.forEach(function (ref) { return _this.removeRef(ref); });
    };
    ReferenceSet.prototype.removeRef = function (ref) {
        this.refsByKey = this.refsByKey.delete(ref);
        this.refsByTarget = this.refsByTarget.delete(ref);
    };
    ReferenceSet.prototype.referencesForId = function (id) {
        var emptyKey = DocumentKey.EMPTY;
        var startRef = new DocReference(emptyKey, id);
        var endRef = new DocReference(emptyKey, id + 1);
        var keys = documentKeySet();
        this.refsByTarget.forEachInRange([startRef, endRef], function (ref) {
            keys = keys.add(ref.key);
        });
        return keys;
    };
    ReferenceSet.prototype.containsKey = function (key) {
        var ref = new DocReference(key, 0);
        var firstRef = this.refsByKey.firstAfterOrEqual(ref);
        return firstRef !== null && key.isEqual(firstRef.key);
    };
    return ReferenceSet;
}());
var DocReference = /** @class */ (function () {
    function DocReference(key, targetOrBatchId) {
        this.key = key;
        this.targetOrBatchId = targetOrBatchId;
    }
    /** Compare by key then by ID */
    DocReference.compareByKey = function (left, right) {
        return (DocumentKey.comparator(left.key, right.key) ||
            primitiveComparator(left.targetOrBatchId, right.targetOrBatchId));
    };
    /** Compare by ID then by key */
    DocReference.compareByTargetId = function (left, right) {
        return (primitiveComparator(left.targetOrBatchId, right.targetOrBatchId) ||
            DocumentKey.comparator(left.key, right.key));
    };
    return DocReference;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */
var RemoteEvent = /** @class */ (function () {
    function RemoteEvent(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    snapshotVersion, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    targetChanges, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    targetMismatches, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    documentUpdates, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    resolvedLimboDocuments) {
        this.snapshotVersion = snapshotVersion;
        this.targetChanges = targetChanges;
        this.targetMismatches = targetMismatches;
        this.documentUpdates = documentUpdates;
        this.resolvedLimboDocuments = resolvedLimboDocuments;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
    RemoteEvent.createSynthesizedRemoteEventForCurrentChange = function (targetId, current) {
        var targetChanges = new Map();
        targetChanges.set(targetId, TargetChange.createSynthesizedTargetChangeForCurrentChange(targetId, current));
        return new RemoteEvent(SnapshotVersion.min(), targetChanges, targetIdSet(), maybeDocumentMap(), documentKeySet());
    };
    return RemoteEvent;
}());
/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */
var TargetChange = /** @class */ (function () {
    function TargetChange(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    resumeToken, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    current, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    addedDocuments, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    modifiedDocuments, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    removedDocuments) {
        this.resumeToken = resumeToken;
        this.current = current;
        this.addedDocuments = addedDocuments;
        this.modifiedDocuments = modifiedDocuments;
        this.removedDocuments = removedDocuments;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */
    TargetChange.createSynthesizedTargetChangeForCurrentChange = function (targetId, current) {
        return new TargetChange(ByteString.EMPTY_BYTE_STRING, current, documentKeySet(), documentKeySet(), documentKeySet());
    };
    return TargetChange;
}());
/**
 * @license
 * Copyright 2019 Google LLC
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
/**
 * A Target represents the WatchTarget representation of a Query, which is used
 * by the LocalStore and the RemoteStore to keep track of and to execute
 * backend queries. While a Query can represent multiple Targets, each Targets
 * maps to a single WatchTarget in RemoteStore and a single TargetData entry
 * in persistence.
 */
var Target = /** @class */ (function () {
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this constructor, because `Query` provides an implicit `orderBy`
     * property.
     */
    function Target(path, collectionGroup, orderBy, filters, limit, startAt, endAt) {
        if (collectionGroup === void 0) { collectionGroup = null; }
        if (orderBy === void 0) { orderBy = []; }
        if (filters === void 0) { filters = []; }
        if (limit === void 0) { limit = null; }
        if (startAt === void 0) { startAt = null; }
        if (endAt === void 0) { endAt = null; }
        this.path = path;
        this.collectionGroup = collectionGroup;
        this.orderBy = orderBy;
        this.filters = filters;
        this.limit = limit;
        this.startAt = startAt;
        this.endAt = endAt;
        this.memoizedCanonicalId = null;
    }
    Target.prototype.canonicalId = function () {
        if (this.memoizedCanonicalId === null) {
            var canonicalId_1 = this.path.canonicalString();
            if (this.collectionGroup !== null) {
                canonicalId_1 += '|cg:' + this.collectionGroup;
            }
            canonicalId_1 += '|f:';
            canonicalId_1 += this.filters.map(function (f) { return f.canonicalId(); }).join(',');
            canonicalId_1 += '|ob:';
            canonicalId_1 += this.orderBy.map(function (o) { return o.canonicalId(); }).join(',');
            if (!isNullOrUndefined(this.limit)) {
                canonicalId_1 += '|l:';
                canonicalId_1 += this.limit;
            }
            if (this.startAt) {
                canonicalId_1 += '|lb:';
                canonicalId_1 += this.startAt.canonicalId();
            }
            if (this.endAt) {
                canonicalId_1 += '|ub:';
                canonicalId_1 += this.endAt.canonicalId();
            }
            this.memoizedCanonicalId = canonicalId_1;
        }
        return this.memoizedCanonicalId;
    };
    Target.prototype.toString = function () {
        var str = this.path.canonicalString();
        if (this.collectionGroup !== null) {
            str += ' collectionGroup=' + this.collectionGroup;
        }
        if (this.filters.length > 0) {
            str += ", filters: [" + this.filters.join(', ') + "]";
        }
        if (!isNullOrUndefined(this.limit)) {
            str += ', limit: ' + this.limit;
        }
        if (this.orderBy.length > 0) {
            str += ", orderBy: [" + this.orderBy.join(', ') + "]";
        }
        if (this.startAt) {
            str += ', startAt: ' + this.startAt.canonicalId();
        }
        if (this.endAt) {
            str += ', endAt: ' + this.endAt.canonicalId();
        }
        return "Target(" + str + ")";
    };
    Target.prototype.isEqual = function (other) {
        if (this.limit !== other.limit) {
            return false;
        }
        if (this.orderBy.length !== other.orderBy.length) {
            return false;
        }
        for (var i = 0; i < this.orderBy.length; i++) {
            if (!this.orderBy[i].isEqual(other.orderBy[i])) {
                return false;
            }
        }
        if (this.filters.length !== other.filters.length) {
            return false;
        }
        for (var i = 0; i < this.filters.length; i++) {
            if (!this.filters[i].isEqual(other.filters[i])) {
                return false;
            }
        }
        if (this.collectionGroup !== other.collectionGroup) {
            return false;
        }
        if (!this.path.isEqual(other.path)) {
            return false;
        }
        if (this.startAt !== null
            ? !this.startAt.isEqual(other.startAt)
            : other.startAt !== null) {
            return false;
        }
        return this.endAt !== null
            ? this.endAt.isEqual(other.endAt)
            : other.endAt === null;
    };
    Target.prototype.isDocumentQuery = function () {
        return (DocumentKey.isDocumentKey(this.path) &&
            this.collectionGroup === null &&
            this.filters.length === 0);
    };
    return Target;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 */
var Query = /** @class */ (function () {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function Query(path, collectionGroup, explicitOrderBy, filters, limit, limitType /* First */, startAt, endAt) {
        if (collectionGroup === void 0) { collectionGroup = null; }
        if (explicitOrderBy === void 0) { explicitOrderBy = []; }
        if (filters === void 0) { filters = []; }
        if (limit === void 0) { limit = null; }
        if (limitType === void 0) { limitType = "F"; }
        if (startAt === void 0) { startAt = null; }
        if (endAt === void 0) { endAt = null; }
        this.path = path;
        this.collectionGroup = collectionGroup;
        this.explicitOrderBy = explicitOrderBy;
        this.filters = filters;
        this.limit = limit;
        this.limitType = limitType;
        this.startAt = startAt;
        this.endAt = endAt;
        this.memoizedOrderBy = null;
        // The corresponding `Target` of this `Query` instance.
        this.memoizedTarget = null;
        if (this.startAt) {
            this.assertValidBound(this.startAt);
        }
        if (this.endAt) {
            this.assertValidBound(this.endAt);
        }
    }
    Query.atPath = function (path) {
        return new Query(path);
    };
    Object.defineProperty(Query.prototype, "orderBy", {
        get: function () {
            if (this.memoizedOrderBy === null) {
                this.memoizedOrderBy = [];
                var inequalityField = this.getInequalityFilterField();
                var firstOrderByField = this.getFirstOrderByField();
                if (inequalityField !== null && firstOrderByField === null) {
                    // In order to implicitly add key ordering, we must also add the
                    // inequality filter field for it to be a valid query.
                    // Note that the default inequality field and key ordering is ascending.
                    if (!inequalityField.isKeyField()) {
                        this.memoizedOrderBy.push(new OrderBy(inequalityField));
                    }
                    this.memoizedOrderBy.push(new OrderBy(FieldPath.keyField(), "asc" /* ASCENDING */));
                }
                else {
                    debugAssert(inequalityField === null ||
                        (firstOrderByField !== null &&
                            inequalityField.isEqual(firstOrderByField)), 'First orderBy should match inequality field.');
                    var foundKeyOrdering = false;
                    for (var _i = 0, _c = this.explicitOrderBy; _i < _c.length; _i++) {
                        var orderBy = _c[_i];
                        this.memoizedOrderBy.push(orderBy);
                        if (orderBy.field.isKeyField()) {
                            foundKeyOrdering = true;
                        }
                    }
                    if (!foundKeyOrdering) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var lastDirection = this.explicitOrderBy.length > 0
                            ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir
                            : "asc" /* ASCENDING */;
                        this.memoizedOrderBy.push(new OrderBy(FieldPath.keyField(), lastDirection));
                    }
                }
            }
            return this.memoizedOrderBy;
        },
        enumerable: true,
        configurable: true
    });
    Query.prototype.addFilter = function (filter) {
        debugAssert(this.getInequalityFilterField() == null ||
            !(filter instanceof FieldFilter) ||
            !filter.isInequality() ||
            filter.field.isEqual(this.getInequalityFilterField()), 'Query must only have one inequality field.');
        debugAssert(!this.isDocumentQuery(), 'No filtering allowed for document query');
        var newFilters = this.filters.concat([filter]);
        return new Query(this.path, this.collectionGroup, this.explicitOrderBy.slice(), newFilters, this.limit, this.limitType, this.startAt, this.endAt);
    };
    Query.prototype.addOrderBy = function (orderBy) {
        debugAssert(!this.startAt && !this.endAt, 'Bounds must be set after orderBy');
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var newOrderBy = this.explicitOrderBy.concat([orderBy]);
        return new Query(this.path, this.collectionGroup, newOrderBy, this.filters.slice(), this.limit, this.limitType, this.startAt, this.endAt);
    };
    Query.prototype.withLimitToFirst = function (limit) {
        return new Query(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), limit, "F" /* First */, this.startAt, this.endAt);
    };
    Query.prototype.withLimitToLast = function (limit) {
        return new Query(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), limit, "L" /* Last */, this.startAt, this.endAt);
    };
    Query.prototype.withStartAt = function (bound) {
        return new Query(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.limitType, bound, this.endAt);
    };
    Query.prototype.withEndAt = function (bound) {
        return new Query(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.limitType, this.startAt, bound);
    };
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    Query.prototype.asCollectionQueryAtPath = function (path) {
        return new Query(path, 
        /*collectionGroup=*/ null, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.limitType, this.startAt, this.endAt);
    };
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    Query.prototype.matchesAllDocuments = function () {
        return (this.filters.length === 0 &&
            this.limit === null &&
            this.startAt == null &&
            this.endAt == null &&
            (this.explicitOrderBy.length === 0 ||
                (this.explicitOrderBy.length === 1 &&
                    this.explicitOrderBy[0].field.isKeyField())));
    };
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    Query.prototype.canonicalId = function () {
        return this.toTarget().canonicalId() + "|lt:" + this.limitType;
    };
    Query.prototype.toString = function () {
        return "Query(target=" + this.toTarget().toString() + "; limitType=" + this.limitType + ")";
    };
    Query.prototype.isEqual = function (other) {
        return (this.toTarget().isEqual(other.toTarget()) &&
            this.limitType === other.limitType);
    };
    Query.prototype.docComparator = function (d1, d2) {
        var comparedOnKeyField = false;
        for (var _i = 0, _c = this.orderBy; _i < _c.length; _i++) {
            var orderBy = _c[_i];
            var comp = orderBy.compare(d1, d2);
            if (comp !== 0) {
                return comp;
            }
            comparedOnKeyField = comparedOnKeyField || orderBy.field.isKeyField();
        }
        // Assert that we actually compared by key
        debugAssert(comparedOnKeyField, "orderBy used that doesn't compare on key field");
        return 0;
    };
    Query.prototype.matches = function (doc) {
        return (this.matchesPathAndCollectionGroup(doc) &&
            this.matchesOrderBy(doc) &&
            this.matchesFilters(doc) &&
            this.matchesBounds(doc));
    };
    Query.prototype.hasLimitToFirst = function () {
        return !isNullOrUndefined(this.limit) && this.limitType === "F" /* First */;
    };
    Query.prototype.hasLimitToLast = function () {
        return !isNullOrUndefined(this.limit) && this.limitType === "L" /* Last */;
    };
    Query.prototype.getFirstOrderByField = function () {
        return this.explicitOrderBy.length > 0
            ? this.explicitOrderBy[0].field
            : null;
    };
    Query.prototype.getInequalityFilterField = function () {
        for (var _i = 0, _c = this.filters; _i < _c.length; _i++) {
            var filter = _c[_i];
            if (filter instanceof FieldFilter && filter.isInequality()) {
                return filter.field;
            }
        }
        return null;
    };
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    Query.prototype.findFilterOperator = function (operators) {
        for (var _i = 0, _c = this.filters; _i < _c.length; _i++) {
            var filter = _c[_i];
            if (filter instanceof FieldFilter) {
                if (operators.indexOf(filter.op) >= 0) {
                    return filter.op;
                }
            }
        }
        return null;
    };
    Query.prototype.isDocumentQuery = function () {
        return this.toTarget().isDocumentQuery();
    };
    Query.prototype.isCollectionGroupQuery = function () {
        return this.collectionGroup !== null;
    };
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    Query.prototype.toTarget = function () {
        if (!this.memoizedTarget) {
            if (this.limitType === "F" /* First */) {
                this.memoizedTarget = new Target(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt);
            }
            else {
                // Flip the orderBy directions since we want the last results
                var orderBys = [];
                for (var _i = 0, _c = this.orderBy; _i < _c.length; _i++) {
                    var orderBy = _c[_i];
                    var dir = orderBy.dir === "desc" /* DESCENDING */
                        ? "asc" /* ASCENDING */
                        : "desc" /* DESCENDING */;
                    orderBys.push(new OrderBy(orderBy.field, dir));
                }
                // We need to swap the cursors to match the now-flipped query ordering.
                var startAt = this.endAt
                    ? new Bound(this.endAt.position, !this.endAt.before)
                    : null;
                var endAt = this.startAt
                    ? new Bound(this.startAt.position, !this.startAt.before)
                    : null;
                // Now return as a LimitType.First query.
                this.memoizedTarget = new Target(this.path, this.collectionGroup, orderBys, this.filters, this.limit, startAt, endAt);
            }
        }
        return this.memoizedTarget;
    };
    Query.prototype.matchesPathAndCollectionGroup = function (doc) {
        var docPath = doc.key.path;
        if (this.collectionGroup !== null) {
            // NOTE: this.path is currently always empty since we don't expose Collection
            // Group queries rooted at a document path yet.
            return (doc.key.hasCollectionId(this.collectionGroup) &&
                this.path.isPrefixOf(docPath));
        }
        else if (DocumentKey.isDocumentKey(this.path)) {
            // exact match for document queries
            return this.path.isEqual(docPath);
        }
        else {
            // shallow ancestor queries by default
            return this.path.isImmediateParentOf(docPath);
        }
    };
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    Query.prototype.matchesOrderBy = function (doc) {
        for (var _i = 0, _c = this.explicitOrderBy; _i < _c.length; _i++) {
            var orderBy = _c[_i];
            // order by key always matches
            if (!orderBy.field.isKeyField() && doc.field(orderBy.field) === null) {
                return false;
            }
        }
        return true;
    };
    Query.prototype.matchesFilters = function (doc) {
        for (var _i = 0, _c = this.filters; _i < _c.length; _i++) {
            var filter = _c[_i];
            if (!filter.matches(doc)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    Query.prototype.matchesBounds = function (doc) {
        if (this.startAt && !this.startAt.sortsBeforeDocument(this.orderBy, doc)) {
            return false;
        }
        if (this.endAt && this.endAt.sortsBeforeDocument(this.orderBy, doc)) {
            return false;
        }
        return true;
    };
    Query.prototype.assertValidBound = function (bound) {
        debugAssert(bound.position.length <= this.orderBy.length, 'Bound is longer than orderBy');
    };
    return Query;
}());
var Filter = /** @class */ (function () {
    function Filter() {
    }
    return Filter;
}());
var FieldFilter = /** @class */ (function (_super) {
    tslib.__extends(FieldFilter, _super);
    function FieldFilter(field, op, value) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.op = op;
        _this.value = value;
        return _this;
    }
    /**
     * Creates a filter based on the provided arguments.
     */
    FieldFilter.create = function (field, op, value) {
        if (field.isKeyField()) {
            if (op === "in" /* IN */) {
                debugAssert(isArray(value), 'Comparing on key with IN, but filter value not an ArrayValue');
                debugAssert((value.arrayValue.values || []).every(function (elem) { return isReferenceValue(elem); }), 'Comparing on key with IN, but an array value was not a RefValue');
                return new KeyFieldInFilter(field, value);
            }
            else {
                debugAssert(isReferenceValue(value), 'Comparing on key, but filter value not a RefValue');
                debugAssert(op !== "array-contains" /* ARRAY_CONTAINS */ && op !== "array-contains-any" /* ARRAY_CONTAINS_ANY */, "'" + op.toString() + "' queries don't make sense on document keys.");
                return new KeyFieldFilter(field, op, value);
            }
        }
        else if (isNullValue(value)) {
            if (op !== "==" /* EQUAL */) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. Null supports only equality comparisons.');
            }
            return new FieldFilter(field, op, value);
        }
        else if (isNanValue(value)) {
            if (op !== "==" /* EQUAL */) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. NaN supports only equality comparisons.');
            }
            return new FieldFilter(field, op, value);
        }
        else if (op === "array-contains" /* ARRAY_CONTAINS */) {
            return new ArrayContainsFilter(field, value);
        }
        else if (op === "in" /* IN */) {
            debugAssert(isArray(value), 'IN filter has invalid value: ' + value.toString());
            return new InFilter(field, value);
        }
        else if (op === "array-contains-any" /* ARRAY_CONTAINS_ANY */) {
            debugAssert(isArray(value), 'ARRAY_CONTAINS_ANY filter has invalid value: ' + value.toString());
            return new ArrayContainsAnyFilter(field, value);
        }
        else {
            return new FieldFilter(field, op, value);
        }
    };
    FieldFilter.prototype.matches = function (doc) {
        var other = doc.field(this.field);
        // Only compare types with matching backend order (such as double and int).
        return (other !== null &&
            typeOrder(this.value) === typeOrder(other) &&
            this.matchesComparison(valueCompare(other, this.value)));
    };
    FieldFilter.prototype.matchesComparison = function (comparison) {
        switch (this.op) {
            case "<" /* LESS_THAN */:
                return comparison < 0;
            case "<=" /* LESS_THAN_OR_EQUAL */:
                return comparison <= 0;
            case "==" /* EQUAL */:
                return comparison === 0;
            case ">" /* GREATER_THAN */:
                return comparison > 0;
            case ">=" /* GREATER_THAN_OR_EQUAL */:
                return comparison >= 0;
            default:
                return fail('Unknown FieldFilter operator: ' + this.op);
        }
    };
    FieldFilter.prototype.isInequality = function () {
        return ([
            "<" /* LESS_THAN */,
            "<=" /* LESS_THAN_OR_EQUAL */,
            ">" /* GREATER_THAN */,
            ">=" /* GREATER_THAN_OR_EQUAL */
        ].indexOf(this.op) >= 0);
    };
    FieldFilter.prototype.canonicalId = function () {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return (this.field.canonicalString() +
            this.op.toString() +
            canonicalId(this.value));
    };
    FieldFilter.prototype.isEqual = function (other) {
        if (other instanceof FieldFilter) {
            return (this.op === other.op &&
                this.field.isEqual(other.field) &&
                valueEquals(this.value, other.value));
        }
        else {
            return false;
        }
    };
    FieldFilter.prototype.toString = function () {
        return this.field.canonicalString() + " " + this.op + " " + canonicalId(this.value);
    };
    return FieldFilter;
}(Filter));
/** Filter that matches on key fields (i.e. '__name__'). */
var KeyFieldFilter = /** @class */ (function (_super) {
    tslib.__extends(KeyFieldFilter, _super);
    function KeyFieldFilter(field, op, value) {
        var _this = _super.call(this, field, op, value) || this;
        debugAssert(isReferenceValue(value), 'KeyFieldFilter expects a ReferenceValue');
        _this.key = DocumentKey.fromName(value.referenceValue);
        return _this;
    }
    KeyFieldFilter.prototype.matches = function (doc) {
        var comparison = DocumentKey.comparator(doc.key, this.key);
        return this.matchesComparison(comparison);
    };
    return KeyFieldFilter;
}(FieldFilter));
/** Filter that matches on key fields within an array. */
var KeyFieldInFilter = /** @class */ (function (_super) {
    tslib.__extends(KeyFieldInFilter, _super);
    function KeyFieldInFilter(field, value) {
        var _this = _super.call(this, field, "in" /* IN */, value) || this;
        debugAssert(isArray(value), 'KeyFieldInFilter expects an ArrayValue');
        _this.keys = (value.arrayValue.values || []).map(function (v) {
            debugAssert(isReferenceValue(v), 'Comparing on key with IN, but an array value was not a ReferenceValue');
            return DocumentKey.fromName(v.referenceValue);
        });
        return _this;
    }
    KeyFieldInFilter.prototype.matches = function (doc) {
        return this.keys.some(function (key) { return key.isEqual(doc.key); });
    };
    return KeyFieldInFilter;
}(FieldFilter));
/** A Filter that implements the array-contains operator. */
var ArrayContainsFilter = /** @class */ (function (_super) {
    tslib.__extends(ArrayContainsFilter, _super);
    function ArrayContainsFilter(field, value) {
        return _super.call(this, field, "array-contains" /* ARRAY_CONTAINS */, value) || this;
    }
    ArrayContainsFilter.prototype.matches = function (doc) {
        var other = doc.field(this.field);
        return isArray(other) && arrayValueContains(other.arrayValue, this.value);
    };
    return ArrayContainsFilter;
}(FieldFilter));
/** A Filter that implements the IN operator. */
var InFilter = /** @class */ (function (_super) {
    tslib.__extends(InFilter, _super);
    function InFilter(field, value) {
        var _this = _super.call(this, field, "in" /* IN */, value) || this;
        debugAssert(isArray(value), 'InFilter expects an ArrayValue');
        return _this;
    }
    InFilter.prototype.matches = function (doc) {
        var other = doc.field(this.field);
        return other !== null && arrayValueContains(this.value.arrayValue, other);
    };
    return InFilter;
}(FieldFilter));
/** A Filter that implements the array-contains-any operator. */
var ArrayContainsAnyFilter = /** @class */ (function (_super) {
    tslib.__extends(ArrayContainsAnyFilter, _super);
    function ArrayContainsAnyFilter(field, value) {
        var _this = _super.call(this, field, "array-contains-any" /* ARRAY_CONTAINS_ANY */, value) || this;
        debugAssert(isArray(value), 'ArrayContainsAnyFilter expects an ArrayValue');
        return _this;
    }
    ArrayContainsAnyFilter.prototype.matches = function (doc) {
        var _this = this;
        var other = doc.field(this.field);
        if (!isArray(other) || !other.arrayValue.values) {
            return false;
        }
        return other.arrayValue.values.some(function (val) { return arrayValueContains(_this.value.arrayValue, val); });
    };
    return ArrayContainsAnyFilter;
}(FieldFilter));
/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */
var Bound = /** @class */ (function () {
    function Bound(position, before) {
        this.position = position;
        this.before = before;
    }
    Bound.prototype.canonicalId = function () {
        // TODO(b/29183165): Make this collision robust.
        return (this.before ? 'b' : 'a') + ":" + this.position
            .map(function (p) { return canonicalId(p); })
            .join(',');
    };
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    Bound.prototype.sortsBeforeDocument = function (orderBy, doc) {
        debugAssert(this.position.length <= orderBy.length, "Bound has more components than query's orderBy");
        var comparison = 0;
        for (var i = 0; i < this.position.length; i++) {
            var orderByComponent = orderBy[i];
            var component = this.position[i];
            if (orderByComponent.field.isKeyField()) {
                debugAssert(isReferenceValue(component), 'Bound has a non-key value where the key path is being used.');
                comparison = DocumentKey.comparator(DocumentKey.fromName(component.referenceValue), doc.key);
            }
            else {
                var docValue = doc.field(orderByComponent.field);
                debugAssert(docValue !== null, 'Field should exist since document matched the orderBy already.');
                comparison = valueCompare(component, docValue);
            }
            if (orderByComponent.dir === "desc" /* DESCENDING */) {
                comparison = comparison * -1;
            }
            if (comparison !== 0) {
                break;
            }
        }
        return this.before ? comparison <= 0 : comparison < 0;
    };
    Bound.prototype.isEqual = function (other) {
        if (other === null) {
            return false;
        }
        if (this.before !== other.before ||
            this.position.length !== other.position.length) {
            return false;
        }
        for (var i = 0; i < this.position.length; i++) {
            var thisPosition = this.position[i];
            var otherPosition = other.position[i];
            if (!valueEquals(thisPosition, otherPosition)) {
                return false;
            }
        }
        return true;
    };
    return Bound;
}());
/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */
var OrderBy = /** @class */ (function () {
    function OrderBy(field, dir) {
        this.field = field;
        if (dir === undefined) {
            dir = "asc" /* ASCENDING */;
        }
        this.dir = dir;
        this.isKeyOrderBy = field.isKeyField();
    }
    OrderBy.prototype.compare = function (d1, d2) {
        var comparison = this.isKeyOrderBy
            ? DocumentKey.comparator(d1.key, d2.key)
            : compareDocumentsByField(this.field, d1, d2);
        switch (this.dir) {
            case "asc" /* ASCENDING */:
                return comparison;
            case "desc" /* DESCENDING */:
                return -1 * comparison;
            default:
                return fail('Unknown direction: ' + this.dir);
        }
    };
    OrderBy.prototype.canonicalId = function () {
        // TODO(b/29183165): Make this collision robust.
        return this.field.canonicalString() + this.dir.toString();
    };
    OrderBy.prototype.toString = function () {
        return this.field.canonicalString() + " (" + this.dir + ")";
    };
    OrderBy.prototype.isEqual = function (other) {
        return this.dir === other.dir && this.field.isEqual(other.field);
    };
    return OrderBy;
}());
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
/** Offset to ensure non-overlapping target ids. */
var OFFSET = 2;
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */
var TargetIdGenerator = /** @class */ (function () {
    function TargetIdGenerator(lastId) {
        this.lastId = lastId;
    }
    TargetIdGenerator.prototype.next = function () {
        this.lastId += OFFSET;
        return this.lastId;
    };
    TargetIdGenerator.forTargetCache = function () {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new TargetIdGenerator(2 - OFFSET);
    };
    TargetIdGenerator.forSyncEngine = function () {
        // Sync engine assigns target IDs for limbo document detection.
        return new TargetIdGenerator(1 - OFFSET);
    };
    return TargetIdGenerator;
}());
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
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */
var DocumentSet = /** @class */ (function () {
    /** The default ordering is by key if the comparator is omitted */
    function DocumentSet(comp) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        if (comp) {
            this.comparator = function (d1, d2) { return comp(d1, d2) || DocumentKey.comparator(d1.key, d2.key); };
        }
        else {
            this.comparator = function (d1, d2) { return DocumentKey.comparator(d1.key, d2.key); };
        }
        this.keyedMap = documentMap();
        this.sortedSet = new SortedMap(this.comparator);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */
    DocumentSet.emptySet = function (oldSet) {
        return new DocumentSet(oldSet.comparator);
    };
    DocumentSet.prototype.has = function (key) {
        return this.keyedMap.get(key) != null;
    };
    DocumentSet.prototype.get = function (key) {
        return this.keyedMap.get(key);
    };
    DocumentSet.prototype.first = function () {
        return this.sortedSet.minKey();
    };
    DocumentSet.prototype.last = function () {
        return this.sortedSet.maxKey();
    };
    DocumentSet.prototype.isEmpty = function () {
        return this.sortedSet.isEmpty();
    };
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    DocumentSet.prototype.indexOf = function (key) {
        var doc = this.keyedMap.get(key);
        return doc ? this.sortedSet.indexOf(doc) : -1;
    };
    Object.defineProperty(DocumentSet.prototype, "size", {
        get: function () {
            return this.sortedSet.size;
        },
        enumerable: true,
        configurable: true
    });
    /** Iterates documents in order defined by "comparator" */
    DocumentSet.prototype.forEach = function (cb) {
        this.sortedSet.inorderTraversal(function (k, v) {
            cb(k);
            return false;
        });
    };
    /** Inserts or updates a document with the same key */
    DocumentSet.prototype.add = function (doc) {
        // First remove the element if we have it.
        var set = this.delete(doc.key);
        return set.copy(set.keyedMap.insert(doc.key, doc), set.sortedSet.insert(doc, null));
    };
    /** Deletes a document with a given key */
    DocumentSet.prototype.delete = function (key) {
        var doc = this.get(key);
        if (!doc) {
            return this;
        }
        return this.copy(this.keyedMap.remove(key), this.sortedSet.remove(doc));
    };
    DocumentSet.prototype.isEqual = function (other) {
        if (!(other instanceof DocumentSet)) {
            return false;
        }
        if (this.size !== other.size) {
            return false;
        }
        var thisIt = this.sortedSet.getIterator();
        var otherIt = other.sortedSet.getIterator();
        while (thisIt.hasNext()) {
            var thisDoc = thisIt.getNext().key;
            var otherDoc = otherIt.getNext().key;
            if (!thisDoc.isEqual(otherDoc)) {
                return false;
            }
        }
        return true;
    };
    DocumentSet.prototype.toString = function () {
        var docStrings = [];
        this.forEach(function (doc) {
            docStrings.push(doc.toString());
        });
        if (docStrings.length === 0) {
            return 'DocumentSet ()';
        }
        else {
            return 'DocumentSet (\n  ' + docStrings.join('  \n') + '\n)';
        }
    };
    DocumentSet.prototype.copy = function (keyedMap, sortedSet) {
        var newSet = new DocumentSet();
        newSet.comparator = this.comparator;
        newSet.keyedMap = keyedMap;
        newSet.sortedSet = sortedSet;
        return newSet;
    };
    return DocumentSet;
}());
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
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */
var DocumentChangeSet = /** @class */ (function () {
    function DocumentChangeSet() {
        this.changeMap = new SortedMap(DocumentKey.comparator);
    }
    DocumentChangeSet.prototype.track = function (change) {
        var key = change.doc.key;
        var oldChange = this.changeMap.get(key);
        if (!oldChange) {
            this.changeMap = this.changeMap.insert(key, change);
            return;
        }
        // Merge the new change with the existing change.
        if (change.type !== 0 /* Added */ &&
            oldChange.type === 3 /* Metadata */) {
            this.changeMap = this.changeMap.insert(key, change);
        }
        else if (change.type === 3 /* Metadata */ &&
            oldChange.type !== 1 /* Removed */) {
            this.changeMap = this.changeMap.insert(key, {
                type: oldChange.type,
                doc: change.doc
            });
        }
        else if (change.type === 2 /* Modified */ &&
            oldChange.type === 2 /* Modified */) {
            this.changeMap = this.changeMap.insert(key, {
                type: 2 /* Modified */,
                doc: change.doc
            });
        }
        else if (change.type === 2 /* Modified */ &&
            oldChange.type === 0 /* Added */) {
            this.changeMap = this.changeMap.insert(key, {
                type: 0 /* Added */,
                doc: change.doc
            });
        }
        else if (change.type === 1 /* Removed */ &&
            oldChange.type === 0 /* Added */) {
            this.changeMap = this.changeMap.remove(key);
        }
        else if (change.type === 1 /* Removed */ &&
            oldChange.type === 2 /* Modified */) {
            this.changeMap = this.changeMap.insert(key, {
                type: 1 /* Removed */,
                doc: oldChange.doc
            });
        }
        else if (change.type === 0 /* Added */ &&
            oldChange.type === 1 /* Removed */) {
            this.changeMap = this.changeMap.insert(key, {
                type: 2 /* Modified */,
                doc: change.doc
            });
        }
        else {
            // This includes these cases, which don't make sense:
            // Added->Added
            // Removed->Removed
            // Modified->Added
            // Removed->Modified
            // Metadata->Added
            // Removed->Metadata
            fail('unsupported combination of changes: ' +
                JSON.stringify(change) +
                ' after ' +
                JSON.stringify(oldChange));
        }
    };
    DocumentChangeSet.prototype.getChanges = function () {
        var changes = [];
        this.changeMap.inorderTraversal(function (key, change) {
            changes.push(change);
        });
        return changes;
    };
    return DocumentChangeSet;
}());
var ViewSnapshot = /** @class */ (function () {
    function ViewSnapshot(query, docs, oldDocs, docChanges, mutatedKeys, fromCache, syncStateChanged, excludesMetadataChanges) {
        this.query = query;
        this.docs = docs;
        this.oldDocs = oldDocs;
        this.docChanges = docChanges;
        this.mutatedKeys = mutatedKeys;
        this.fromCache = fromCache;
        this.syncStateChanged = syncStateChanged;
        this.excludesMetadataChanges = excludesMetadataChanges;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */
    ViewSnapshot.fromInitialDocuments = function (query, documents, mutatedKeys, fromCache) {
        var changes = [];
        documents.forEach(function (doc) {
            changes.push({ type: 0 /* Added */, doc: doc });
        });
        return new ViewSnapshot(query, documents, DocumentSet.emptySet(documents), changes, mutatedKeys, fromCache, 
        /* syncStateChanged= */ true, 
        /* excludesMetadataChanges= */ false);
    };
    Object.defineProperty(ViewSnapshot.prototype, "hasPendingWrites", {
        get: function () {
            return !this.mutatedKeys.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    ViewSnapshot.prototype.isEqual = function (other) {
        if (this.fromCache !== other.fromCache ||
            this.syncStateChanged !== other.syncStateChanged ||
            !this.mutatedKeys.isEqual(other.mutatedKeys) ||
            !this.query.isEqual(other.query) ||
            !this.docs.isEqual(other.docs) ||
            !this.oldDocs.isEqual(other.oldDocs)) {
            return false;
        }
        var changes = this.docChanges;
        var otherChanges = other.docChanges;
        if (changes.length !== otherChanges.length) {
            return false;
        }
        for (var i = 0; i < changes.length; i++) {
            if (changes[i].type !== otherChanges[i].type ||
                !changes[i].doc.isEqual(otherChanges[i].doc)) {
                return false;
            }
        }
        return true;
    };
    return ViewSnapshot;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var AddedLimboDocument = /** @class */ (function () {
    function AddedLimboDocument(key) {
        this.key = key;
    }
    return AddedLimboDocument;
}());
var RemovedLimboDocument = /** @class */ (function () {
    function RemovedLimboDocument(key) {
        this.key = key;
    }
    return RemovedLimboDocument;
}());
/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */
var View = /** @class */ (function () {
    function View(query, 
    /** Documents included in the remote target */
    _syncedDocuments) {
        this.query = query;
        this._syncedDocuments = _syncedDocuments;
        this.syncState = null;
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this.current = false;
        /** Documents in the view but not in the remote target */
        this.limboDocuments = documentKeySet();
        /** Document Keys that have local changes */
        this.mutatedKeys = documentKeySet();
        this.documentSet = new DocumentSet(query.docComparator.bind(query));
    }
    Object.defineProperty(View.prototype, "syncedDocuments", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function () {
            return this._syncedDocuments;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    View.prototype.computeDocChanges = function (docChanges, previousChanges) {
        var _this = this;
        var changeSet = previousChanges
            ? previousChanges.changeSet
            : new DocumentChangeSet();
        var oldDocumentSet = previousChanges
            ? previousChanges.documentSet
            : this.documentSet;
        var newMutatedKeys = previousChanges
            ? previousChanges.mutatedKeys
            : this.mutatedKeys;
        var newDocumentSet = oldDocumentSet;
        var needsRefill = false;
        // Track the last doc in a (full) limit. This is necessary, because some
        // update (a delete, or an update moving a doc past the old limit) might
        // mean there is some other document in the local cache that either should
        // come (1) between the old last limit doc and the new last document, in the
        // case of updates, or (2) after the new last document, in the case of
        // deletes. So we keep this doc at the old limit to compare the updates to.
        //
        // Note that this should never get used in a refill (when previousChanges is
        // set), because there will only be adds -- no deletes or updates.
        var lastDocInLimit = this.query.hasLimitToFirst() && oldDocumentSet.size === this.query.limit
            ? oldDocumentSet.last()
            : null;
        var firstDocInLimit = this.query.hasLimitToLast() && oldDocumentSet.size === this.query.limit
            ? oldDocumentSet.first()
            : null;
        docChanges.inorderTraversal(function (key, newMaybeDoc) {
            var oldDoc = oldDocumentSet.get(key);
            var newDoc = newMaybeDoc instanceof Document ? newMaybeDoc : null;
            if (newDoc) {
                debugAssert(key.isEqual(newDoc.key), 'Mismatching keys found in document changes: ' +
                    key +
                    ' != ' +
                    newDoc.key);
                newDoc = _this.query.matches(newDoc) ? newDoc : null;
            }
            var oldDocHadPendingMutations = oldDoc
                ? _this.mutatedKeys.has(oldDoc.key)
                : false;
            var newDocHasPendingMutations = newDoc
                ? newDoc.hasLocalMutations ||
                    // We only consider committed mutations for documents that were
                    // mutated during the lifetime of the view.
                    (_this.mutatedKeys.has(newDoc.key) && newDoc.hasCommittedMutations)
                : false;
            var changeApplied = false;
            // Calculate change
            if (oldDoc && newDoc) {
                var docsEqual = oldDoc.data().isEqual(newDoc.data());
                if (!docsEqual) {
                    if (!_this.shouldWaitForSyncedDocument(oldDoc, newDoc)) {
                        changeSet.track({
                            type: 2 /* Modified */,
                            doc: newDoc
                        });
                        changeApplied = true;
                        if ((lastDocInLimit &&
                            _this.query.docComparator(newDoc, lastDocInLimit) > 0) ||
                            (firstDocInLimit &&
                                _this.query.docComparator(newDoc, firstDocInLimit) < 0)) {
                            // This doc moved from inside the limit to outside the limit.
                            // That means there may be some other doc in the local cache
                            // that should be included instead.
                            needsRefill = true;
                        }
                    }
                }
                else if (oldDocHadPendingMutations !== newDocHasPendingMutations) {
                    changeSet.track({ type: 3 /* Metadata */, doc: newDoc });
                    changeApplied = true;
                }
            }
            else if (!oldDoc && newDoc) {
                changeSet.track({ type: 0 /* Added */, doc: newDoc });
                changeApplied = true;
            }
            else if (oldDoc && !newDoc) {
                changeSet.track({ type: 1 /* Removed */, doc: oldDoc });
                changeApplied = true;
                if (lastDocInLimit || firstDocInLimit) {
                    // A doc was removed from a full limit query. We'll need to
                    // requery from the local cache to see if we know about some other
                    // doc that should be in the results.
                    needsRefill = true;
                }
            }
            if (changeApplied) {
                if (newDoc) {
                    newDocumentSet = newDocumentSet.add(newDoc);
                    if (newDocHasPendingMutations) {
                        newMutatedKeys = newMutatedKeys.add(key);
                    }
                    else {
                        newMutatedKeys = newMutatedKeys.delete(key);
                    }
                }
                else {
                    newDocumentSet = newDocumentSet.delete(key);
                    newMutatedKeys = newMutatedKeys.delete(key);
                }
            }
        });
        // Drop documents out to meet limit/limitToLast requirement.
        if (this.query.hasLimitToFirst() || this.query.hasLimitToLast()) {
            while (newDocumentSet.size > this.query.limit) {
                var oldDoc = this.query.hasLimitToFirst()
                    ? newDocumentSet.last()
                    : newDocumentSet.first();
                newDocumentSet = newDocumentSet.delete(oldDoc.key);
                newMutatedKeys = newMutatedKeys.delete(oldDoc.key);
                changeSet.track({ type: 1 /* Removed */, doc: oldDoc });
            }
        }
        debugAssert(!needsRefill || !previousChanges, 'View was refilled using docs that themselves needed refilling.');
        return {
            documentSet: newDocumentSet,
            changeSet: changeSet,
            needsRefill: needsRefill,
            mutatedKeys: newMutatedKeys
        };
    };
    View.prototype.shouldWaitForSyncedDocument = function (oldDoc, newDoc) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return (oldDoc.hasLocalMutations &&
            newDoc.hasCommittedMutations &&
            !newDoc.hasLocalMutations);
    };
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    View.prototype.applyChanges = function (docChanges, updateLimboDocuments, targetChange) {
        var _this = this;
        debugAssert(!docChanges.needsRefill, 'Cannot apply changes that need a refill');
        var oldDocs = this.documentSet;
        this.documentSet = docChanges.documentSet;
        this.mutatedKeys = docChanges.mutatedKeys;
        // Sort changes based on type and query comparator
        var changes = docChanges.changeSet.getChanges();
        changes.sort(function (c1, c2) {
            return (compareChangeType(c1.type, c2.type) ||
                _this.query.docComparator(c1.doc, c2.doc));
        });
        this.applyTargetChange(targetChange);
        var limboChanges = updateLimboDocuments
            ? this.updateLimboDocuments()
            : [];
        var synced = this.limboDocuments.size === 0 && this.current;
        var newSyncState = synced ? 1 /* Synced */ : 0 /* Local */;
        var syncStateChanged = newSyncState !== this.syncState;
        this.syncState = newSyncState;
        if (changes.length === 0 && !syncStateChanged) {
            // no changes
            return { limboChanges: limboChanges };
        }
        else {
            var snap = new ViewSnapshot(this.query, docChanges.documentSet, oldDocs, changes, docChanges.mutatedKeys, newSyncState === 0 /* Local */, syncStateChanged, 
            /* excludesMetadataChanges= */ false);
            return {
                snapshot: snap,
                limboChanges: limboChanges
            };
        }
    };
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    View.prototype.applyOnlineStateChange = function (onlineState) {
        if (this.current && onlineState === "Offline" /* Offline */) {
            // If we're offline, set `current` to false and then call applyChanges()
            // to refresh our syncState and generate a ViewChange as appropriate. We
            // are guaranteed to get a new TargetChange that sets `current` back to
            // true once the client is back online.
            this.current = false;
            return this.applyChanges({
                documentSet: this.documentSet,
                changeSet: new DocumentChangeSet(),
                mutatedKeys: this.mutatedKeys,
                needsRefill: false
            }, 
            /* updateLimboDocuments= */ false);
        }
        else {
            // No effect, just return a no-op ViewChange.
            return { limboChanges: [] };
        }
    };
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    View.prototype.shouldBeInLimbo = function (key) {
        // If the remote end says it's part of this query, it's not in limbo.
        if (this._syncedDocuments.has(key)) {
            return false;
        }
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        if (!this.documentSet.has(key)) {
            return false;
        }
        // If there are local changes to the doc, they might explain why the server
        // doesn't know that it's part of the query. So don't put it in limbo.
        // TODO(klimt): Ideally, we would only consider changes that might actually
        // affect this specific query.
        if (this.documentSet.get(key).hasLocalMutations) {
            return false;
        }
        // Everything else is in limbo.
        return true;
    };
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    View.prototype.applyTargetChange = function (targetChange) {
        var _this = this;
        if (targetChange) {
            targetChange.addedDocuments.forEach(function (key) { return (_this._syncedDocuments = _this._syncedDocuments.add(key)); });
            targetChange.modifiedDocuments.forEach(function (key) {
                debugAssert(_this._syncedDocuments.has(key), "Modified document " + key + " not found in view.");
            });
            targetChange.removedDocuments.forEach(function (key) { return (_this._syncedDocuments = _this._syncedDocuments.delete(key)); });
            this.current = targetChange.current;
        }
    };
    View.prototype.updateLimboDocuments = function () {
        var _this = this;
        // We can only determine limbo documents when we're in-sync with the server.
        if (!this.current) {
            return [];
        }
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
        var oldLimboDocuments = this.limboDocuments;
        this.limboDocuments = documentKeySet();
        this.documentSet.forEach(function (doc) {
            if (_this.shouldBeInLimbo(doc.key)) {
                _this.limboDocuments = _this.limboDocuments.add(doc.key);
            }
        });
        // Diff the new limbo docs with the old limbo docs.
        var changes = [];
        oldLimboDocuments.forEach(function (key) {
            if (!_this.limboDocuments.has(key)) {
                changes.push(new RemovedLimboDocument(key));
            }
        });
        this.limboDocuments.forEach(function (key) {
            if (!oldLimboDocuments.has(key)) {
                changes.push(new AddedLimboDocument(key));
            }
        });
        return changes;
    };
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    View.prototype.synchronizeWithPersistedState = function (queryResult) {
        this._syncedDocuments = queryResult.remoteKeys;
        this.limboDocuments = documentKeySet();
        var docChanges = this.computeDocChanges(queryResult.documents);
        return this.applyChanges(docChanges, /*updateLimboDocuments=*/ true);
    };
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    View.prototype.computeInitialSnapshot = function () {
        return ViewSnapshot.fromInitialDocuments(this.query, this.documentSet, this.mutatedKeys, this.syncState === 0 /* Local */);
    };
    return View;
}());
function compareChangeType(c1, c2) {
    var order = function (change) {
        switch (change) {
            case 0 /* Added */:
                return 1;
            case 2 /* Modified */:
                return 2;
            case 3 /* Metadata */:
                // A metadata change is converted to a modified change at the public
                // api layer.  Since we sort by document key and then change type,
                // metadata and modified changes must be sorted equivalently.
                return 2;
            case 1 /* Removed */:
                return 0;
            default:
                return fail('Unknown ChangeType: ' + change);
        }
    };
    return order(c1) - order(c2);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG$1 = 'ExponentialBackoff';
/**
 * Initial backoff time in milliseconds after an error.
 * Set to 1s according to https://cloud.google.com/apis/design/errors.
 */
var DEFAULT_BACKOFF_INITIAL_DELAY_MS = 1000;
var DEFAULT_BACKOFF_FACTOR = 1.5;
/** Maximum backoff time in milliseconds */
var DEFAULT_BACKOFF_MAX_DELAY_MS = 60 * 1000;
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
var ExponentialBackoff = /** @class */ (function () {
    function ExponentialBackoff(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    queue, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    timerId, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    initialDelayMs, 
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */
    backoffFactor, 
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */
    maxDelayMs) {
        if (initialDelayMs === void 0) { initialDelayMs = DEFAULT_BACKOFF_INITIAL_DELAY_MS; }
        if (backoffFactor === void 0) { backoffFactor = DEFAULT_BACKOFF_FACTOR; }
        if (maxDelayMs === void 0) { maxDelayMs = DEFAULT_BACKOFF_MAX_DELAY_MS; }
        this.queue = queue;
        this.timerId = timerId;
        this.initialDelayMs = initialDelayMs;
        this.backoffFactor = backoffFactor;
        this.maxDelayMs = maxDelayMs;
        this.currentBaseMs = 0;
        this.timerPromise = null;
        /** The last backoff attempt, as epoch milliseconds. */
        this.lastAttemptTime = Date.now();
        this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */
    ExponentialBackoff.prototype.reset = function () {
        this.currentBaseMs = 0;
    };
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    ExponentialBackoff.prototype.resetToMax = function () {
        this.currentBaseMs = this.maxDelayMs;
    };
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    ExponentialBackoff.prototype.backoffAndRun = function (op) {
        var _this = this;
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var desiredDelayWithJitterMs = Math.floor(this.currentBaseMs + this.jitterDelayMs());
        // Guard against lastAttemptTime being in the future due to a clock change.
        var delaySoFarMs = Math.max(0, Date.now() - this.lastAttemptTime);
        // Guard against the backoff delay already being past.
        var remainingDelayMs = Math.max(0, desiredDelayWithJitterMs - delaySoFarMs);
        if (remainingDelayMs > 0) {
            logDebug(LOG_TAG$1, "Backing off for " + remainingDelayMs + " ms " +
                ("(base delay: " + this.currentBaseMs + " ms, ") +
                ("delay with jitter: " + desiredDelayWithJitterMs + " ms, ") +
                ("last attempt: " + delaySoFarMs + " ms ago)"));
        }
        this.timerPromise = this.queue.enqueueAfterDelay(this.timerId, remainingDelayMs, function () {
            _this.lastAttemptTime = Date.now();
            return op();
        });
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.currentBaseMs *= this.backoffFactor;
        if (this.currentBaseMs < this.initialDelayMs) {
            this.currentBaseMs = this.initialDelayMs;
        }
        if (this.currentBaseMs > this.maxDelayMs) {
            this.currentBaseMs = this.maxDelayMs;
        }
    };
    ExponentialBackoff.prototype.cancel = function () {
        if (this.timerPromise !== null) {
            this.timerPromise.cancel();
            this.timerPromise = null;
        }
    };
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
    ExponentialBackoff.prototype.jitterDelayMs = function () {
        return (Math.random() - 0.5) * this.currentBaseMs;
    };
    return ExponentialBackoff;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers or change this into a const enum.
 */
var RpcCode;
(function (RpcCode) {
    RpcCode[RpcCode["OK"] = 0] = "OK";
    RpcCode[RpcCode["CANCELLED"] = 1] = "CANCELLED";
    RpcCode[RpcCode["UNKNOWN"] = 2] = "UNKNOWN";
    RpcCode[RpcCode["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
    RpcCode[RpcCode["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
    RpcCode[RpcCode["NOT_FOUND"] = 5] = "NOT_FOUND";
    RpcCode[RpcCode["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
    RpcCode[RpcCode["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
    RpcCode[RpcCode["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
    RpcCode[RpcCode["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
    RpcCode[RpcCode["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
    RpcCode[RpcCode["ABORTED"] = 10] = "ABORTED";
    RpcCode[RpcCode["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
    RpcCode[RpcCode["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
    RpcCode[RpcCode["INTERNAL"] = 13] = "INTERNAL";
    RpcCode[RpcCode["UNAVAILABLE"] = 14] = "UNAVAILABLE";
    RpcCode[RpcCode["DATA_LOSS"] = 15] = "DATA_LOSS";
})(RpcCode || (RpcCode = {}));
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function isPermanentError(code) {
    switch (code) {
        case Code.OK:
            return fail('Treated status OK as error');
        case Code.CANCELLED:
        case Code.UNKNOWN:
        case Code.DEADLINE_EXCEEDED:
        case Code.RESOURCE_EXHAUSTED:
        case Code.INTERNAL:
        case Code.UNAVAILABLE:
        // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
        case Code.UNAUTHENTICATED:
            return false;
        case Code.INVALID_ARGUMENT:
        case Code.NOT_FOUND:
        case Code.ALREADY_EXISTS:
        case Code.PERMISSION_DENIED:
        case Code.FAILED_PRECONDITION:
        // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
        case Code.ABORTED:
        case Code.OUT_OF_RANGE:
        case Code.UNIMPLEMENTED:
        case Code.DATA_LOSS:
            return true;
        default:
            return fail('Unknown status code: ' + code);
    }
}
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
function isPermanentWriteError(code) {
    return isPermanentError(code) && code !== Code.ABORTED;
}
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */
function mapCodeFromRpcCode(code) {
    if (code === undefined) {
        // This shouldn't normally happen, but in certain error cases (like trying
        // to send invalid proto messages) we may get an error with no GRPC code.
        logError('GRPC error has no .code');
        return Code.UNKNOWN;
    }
    switch (code) {
        case RpcCode.OK:
            return Code.OK;
        case RpcCode.CANCELLED:
            return Code.CANCELLED;
        case RpcCode.UNKNOWN:
            return Code.UNKNOWN;
        case RpcCode.DEADLINE_EXCEEDED:
            return Code.DEADLINE_EXCEEDED;
        case RpcCode.RESOURCE_EXHAUSTED:
            return Code.RESOURCE_EXHAUSTED;
        case RpcCode.INTERNAL:
            return Code.INTERNAL;
        case RpcCode.UNAVAILABLE:
            return Code.UNAVAILABLE;
        case RpcCode.UNAUTHENTICATED:
            return Code.UNAUTHENTICATED;
        case RpcCode.INVALID_ARGUMENT:
            return Code.INVALID_ARGUMENT;
        case RpcCode.NOT_FOUND:
            return Code.NOT_FOUND;
        case RpcCode.ALREADY_EXISTS:
            return Code.ALREADY_EXISTS;
        case RpcCode.PERMISSION_DENIED:
            return Code.PERMISSION_DENIED;
        case RpcCode.FAILED_PRECONDITION:
            return Code.FAILED_PRECONDITION;
        case RpcCode.ABORTED:
            return Code.ABORTED;
        case RpcCode.OUT_OF_RANGE:
            return Code.OUT_OF_RANGE;
        case RpcCode.UNIMPLEMENTED:
            return Code.UNIMPLEMENTED;
        case RpcCode.DATA_LOSS:
            return Code.DATA_LOSS;
        default:
            return fail('Unknown status code: ' + code);
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
var RETRY_COUNT = 5;
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
var TransactionRunner = /** @class */ (function () {
    function TransactionRunner(asyncQueue, remoteStore, updateFunction, deferred) {
        this.asyncQueue = asyncQueue;
        this.remoteStore = remoteStore;
        this.updateFunction = updateFunction;
        this.deferred = deferred;
        this.retries = RETRY_COUNT;
        this.backoff = new ExponentialBackoff(this.asyncQueue, "transaction_retry" /* TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */
    TransactionRunner.prototype.run = function () {
        this.runWithBackOff();
    };
    TransactionRunner.prototype.runWithBackOff = function () {
        var _this = this;
        this.backoff.backoffAndRun(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
            var transaction, userPromise;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                transaction = this.remoteStore.createTransaction();
                userPromise = this.tryRunUpdateFunction(transaction);
                if (userPromise) {
                    userPromise
                        .then(function (result) {
                        _this.asyncQueue.enqueueAndForget(function () {
                            return transaction
                                .commit()
                                .then(function () {
                                _this.deferred.resolve(result);
                            })
                                .catch(function (commitError) {
                                _this.handleTransactionError(commitError);
                            });
                        });
                    })
                        .catch(function (userPromiseError) {
                        _this.handleTransactionError(userPromiseError);
                    });
                }
                return [2 /*return*/];
            });
        }); });
    };
    TransactionRunner.prototype.tryRunUpdateFunction = function (transaction) {
        try {
            var userPromise = this.updateFunction(transaction);
            if (isNullOrUndefined(userPromise) ||
                !userPromise.catch ||
                !userPromise.then) {
                this.deferred.reject(Error('Transaction callback must return a Promise'));
                return null;
            }
            return userPromise;
        }
        catch (error) {
            // Do not retry errors thrown by user provided updateFunction.
            this.deferred.reject(error);
            return null;
        }
    };
    TransactionRunner.prototype.handleTransactionError = function (error) {
        var _this = this;
        if (this.retries > 0 && this.isRetryableTransactionError(error)) {
            this.retries -= 1;
            this.asyncQueue.enqueueAndForget(function () {
                _this.runWithBackOff();
                return Promise.resolve();
            });
        }
        else {
            this.deferred.reject(error);
        }
    };
    TransactionRunner.prototype.isRetryableTransactionError = function (error) {
        if (error.name === 'FirebaseError') {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var code = error.code;
            return (code === 'aborted' ||
                code === 'failed-precondition' ||
                !isPermanentError(code));
        }
        return false;
    };
    return TransactionRunner;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG$2 = 'SyncEngine';
/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */
var QueryView = /** @class */ (function () {
    function QueryView(
    /**
     * The query itself.
     */
    query, 
    /**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
    targetId, 
    /**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
    view) {
        this.query = query;
        this.targetId = targetId;
        this.view = view;
    }
    return QueryView;
}());
/** Tracks a limbo resolution. */
var LimboResolution = /** @class */ (function () {
    function LimboResolution(key) {
        this.key = key;
        /**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */
        this.receivedDocument = false;
    }
    return LimboResolution;
}());
/**
 * SyncEngine is the central controller in the client SDK architecture. It is
 * the glue code between the EventManager, LocalStore, and RemoteStore. Some of
 * SyncEngine's responsibilities include:
 * 1. Coordinating client requests and remote events between the EventManager
 *    and the local and remote data stores.
 * 2. Managing a View object for each query, providing the unified view between
 *    the local and remote data stores.
 * 3. Notifying the RemoteStore when the LocalStore has new mutations in its
 *    queue that need sending to the backend.
 *
 * The SyncEngine’s methods should only ever be called by methods running in the
 * global async queue.
 */
var SyncEngine = /** @class */ (function () {
    function SyncEngine(localStore, remoteStore, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    sharedClientState, currentUser, maxConcurrentLimboResolutions) {
        this.localStore = localStore;
        this.remoteStore = remoteStore;
        this.sharedClientState = sharedClientState;
        this.currentUser = currentUser;
        this.maxConcurrentLimboResolutions = maxConcurrentLimboResolutions;
        this.syncEngineListener = null;
        this.queryViewsByQuery = new ObjectMap(function (q) { return q.canonicalId(); });
        this.queriesByTarget = new Map();
        /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query.
         */
        this.enqueuedLimboResolutions = [];
        /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
        this.activeLimboTargetsByKey = new SortedMap(DocumentKey.comparator);
        /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
        this.activeLimboResolutionsByTarget = new Map();
        this.limboDocumentRefs = new ReferenceSet();
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.mutationUserCallbacks = {};
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.pendingWritesCallbacks = new Map();
        this.limboTargetIdGenerator = TargetIdGenerator.forSyncEngine();
        this.onlineState = "Unknown" /* Unknown */;
    }
    Object.defineProperty(SyncEngine.prototype, "isPrimaryClient", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */
    SyncEngine.prototype.subscribe = function (syncEngineListener) {
        debugAssert(syncEngineListener !== null, 'SyncEngine listener cannot be null');
        debugAssert(this.syncEngineListener === null, 'SyncEngine already has a subscriber.');
        this.syncEngineListener = syncEngineListener;
    };
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the initial snapshot.
     */
    SyncEngine.prototype.listen = function (query) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var targetId, viewSnapshot, queryView, targetData, status_1;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.assertSubscribed('listen()');
                        queryView = this.queryViewsByQuery.get(query);
                        if (!queryView) return [3 /*break*/, 1];
                        // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                        // already exists when EventManager calls us for the first time. This
                        // happens when the primary tab is already listening to this query on
                        // behalf of another tab and the user of the primary also starts listening
                        // to the query. EventManager will not have an assigned target ID in this
                        // case and calls `listen` to obtain this ID.
                        targetId = queryView.targetId;
                        this.sharedClientState.addLocalQueryTarget(targetId);
                        viewSnapshot = queryView.view.computeInitialSnapshot();
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.localStore.allocateTarget(query.toTarget())];
                    case 2:
                        targetData = _c.sent();
                        status_1 = this.sharedClientState.addLocalQueryTarget(targetData.targetId);
                        targetId = targetData.targetId;
                        return [4 /*yield*/, this.initializeViewAndComputeSnapshot(query, targetId, status_1 === 'current')];
                    case 3:
                        viewSnapshot = _c.sent();
                        if (this.isPrimaryClient) {
                            this.remoteStore.listen(targetData);
                        }
                        _c.label = 4;
                    case 4: return [2 /*return*/, viewSnapshot];
                }
            });
        });
    };
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    SyncEngine.prototype.initializeViewAndComputeSnapshot = function (query, targetId, current) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var queryResult, view, viewDocChanges, synthesizedTargetChange, viewChange, data;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.localStore.executeQuery(query, 
                        /* usePreviousResults= */ true)];
                    case 1:
                        queryResult = _c.sent();
                        view = new View(query, queryResult.remoteKeys);
                        viewDocChanges = view.computeDocChanges(queryResult.documents);
                        synthesizedTargetChange = TargetChange.createSynthesizedTargetChangeForCurrentChange(targetId, current && this.onlineState !== "Offline" /* Offline */);
                        viewChange = view.applyChanges(viewDocChanges, 
                        /* updateLimboDocuments= */ this.isPrimaryClient, synthesizedTargetChange);
                        this.updateTrackedLimbos(targetId, viewChange.limboChanges);
                        debugAssert(!!viewChange.snapshot, 'applyChanges for new view should always return a snapshot');
                        data = new QueryView(query, targetId, view);
                        this.queryViewsByQuery.set(query, data);
                        if (this.queriesByTarget.has(targetId)) {
                            this.queriesByTarget.get(targetId).push(query);
                        }
                        else {
                            this.queriesByTarget.set(targetId, [query]);
                        }
                        return [2 /*return*/, viewChange.snapshot];
                }
            });
        });
    };
    /** Stops listening to the query. */
    SyncEngine.prototype.unlisten = function (query) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var queryView, queries, targetRemainsActive;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.assertSubscribed('unlisten()');
                        queryView = this.queryViewsByQuery.get(query);
                        debugAssert(!!queryView, 'Trying to unlisten on query not found:' + query);
                        queries = this.queriesByTarget.get(queryView.targetId);
                        if (queries.length > 1) {
                            this.queriesByTarget.set(queryView.targetId, queries.filter(function (q) { return !q.isEqual(query); }));
                            this.queryViewsByQuery.delete(query);
                            return [2 /*return*/];
                        }
                        if (!this.isPrimaryClient) return [3 /*break*/, 3];
                        // We need to remove the local query target first to allow us to verify
                        // whether any other client is still interested in this target.
                        this.sharedClientState.removeLocalQueryTarget(queryView.targetId);
                        targetRemainsActive = this.sharedClientState.isActiveQueryTarget(queryView.targetId);
                        if (!!targetRemainsActive) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.localStore
                                .releaseTarget(queryView.targetId, /*keepPersistedTargetData=*/ false)
                                .then(function () {
                                _this.sharedClientState.clearQueryState(queryView.targetId);
                                _this.remoteStore.unlisten(queryView.targetId);
                                _this.removeAndCleanupTarget(queryView.targetId);
                            })
                                .catch(ignoreIfPrimaryLeaseLoss)];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [3 /*break*/, 5];
                    case 3:
                        this.removeAndCleanupTarget(queryView.targetId);
                        return [4 /*yield*/, this.localStore.releaseTarget(queryView.targetId, 
                            /*keepPersistedTargetData=*/ true)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    SyncEngine.prototype.write = function (batch, userCallback) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.assertSubscribed('write()');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.localStore.localWrite(batch)];
                    case 2:
                        result = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        if (e_1.name === 'IndexedDbTransactionError') {
                            // If we can't persist the mutation, we reject the user callback and
                            // don't send the mutation. The user can then retry the write.
                            logError(LOG_TAG$2, 'Dropping write that cannot be persisted: ' + e_1);
                            userCallback.reject(new FirestoreError(Code.UNAVAILABLE, 'Failed to persist write: ' + e_1));
                            return [2 /*return*/];
                        }
                        else {
                            throw e_1;
                        }
                    case 4:
                        this.sharedClientState.addPendingMutation(result.batchId);
                        this.addMutationCallback(result.batchId, userCallback);
                        return [4 /*yield*/, this.emitNewSnapsAndNotifyLocalStore(result.changes)];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, this.remoteStore.fillWritePipeline()];
                    case 6:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    SyncEngine.prototype.runTransaction = function (asyncQueue, updateFunction, deferred) {
        new TransactionRunner(asyncQueue, this.remoteStore, updateFunction, deferred).run();
    };
    SyncEngine.prototype.applyRemoteEvent = function (remoteEvent) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var changes, error_1;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.assertSubscribed('applyRemoteEvent()');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 6]);
                        return [4 /*yield*/, this.localStore.applyRemoteEvent(remoteEvent)];
                    case 2:
                        changes = _c.sent();
                        // Update `receivedDocument` as appropriate for any limbo targets.
                        remoteEvent.targetChanges.forEach(function (targetChange, targetId) {
                            var limboResolution = _this.activeLimboResolutionsByTarget.get(targetId);
                            if (limboResolution) {
                                // Since this is a limbo resolution lookup, it's for a single document
                                // and it could be added, modified, or removed, but not a combination.
                                hardAssert(targetChange.addedDocuments.size +
                                    targetChange.modifiedDocuments.size +
                                    targetChange.removedDocuments.size <=
                                    1, 'Limbo resolution for single document contains multiple changes.');
                                if (targetChange.addedDocuments.size > 0) {
                                    limboResolution.receivedDocument = true;
                                }
                                else if (targetChange.modifiedDocuments.size > 0) {
                                    hardAssert(limboResolution.receivedDocument, 'Received change for limbo target document without add.');
                                }
                                else if (targetChange.removedDocuments.size > 0) {
                                    hardAssert(limboResolution.receivedDocument, 'Received remove for limbo target document without add.');
                                    limboResolution.receivedDocument = false;
                                }
                            }
                        });
                        return [4 /*yield*/, this.emitNewSnapsAndNotifyLocalStore(changes, remoteEvent)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _c.sent();
                        return [4 /*yield*/, ignoreIfPrimaryLeaseLoss(error_1)];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    SyncEngine.prototype.applyOnlineStateChange = function (onlineState, source) {
        this.assertSubscribed('applyOnlineStateChange()');
        var newViewSnapshots = [];
        this.queryViewsByQuery.forEach(function (query, queryView) {
            var viewChange = queryView.view.applyOnlineStateChange(onlineState);
            debugAssert(viewChange.limboChanges.length === 0, 'OnlineState should not affect limbo documents.');
            if (viewChange.snapshot) {
                newViewSnapshots.push(viewChange.snapshot);
            }
        });
        this.syncEngineListener.onOnlineStateChange(onlineState);
        this.syncEngineListener.onWatchChange(newViewSnapshots);
        this.onlineState = onlineState;
    };
    SyncEngine.prototype.rejectListen = function (targetId, err) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var limboResolution, limboKey, documentUpdates, resolvedLimboDocuments, event_1;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.assertSubscribed('rejectListens()');
                        // PORTING NOTE: Multi-tab only.
                        this.sharedClientState.updateQueryState(targetId, 'rejected', err);
                        limboResolution = this.activeLimboResolutionsByTarget.get(targetId);
                        limboKey = limboResolution && limboResolution.key;
                        if (!limboKey) return [3 /*break*/, 1];
                        // Since this query failed, we won't want to manually unlisten to it.
                        // So go ahead and remove it from bookkeeping.
                        this.activeLimboTargetsByKey = this.activeLimboTargetsByKey.remove(limboKey);
                        this.activeLimboResolutionsByTarget.delete(targetId);
                        this.pumpEnqueuedLimboResolutions();
                        documentUpdates = new SortedMap(DocumentKey.comparator);
                        documentUpdates = documentUpdates.insert(limboKey, new NoDocument(limboKey, SnapshotVersion.min()));
                        resolvedLimboDocuments = documentKeySet().add(limboKey);
                        event_1 = new RemoteEvent(SnapshotVersion.min(), 
                        /* targetChanges= */ new Map(), 
                        /* targetMismatches= */ new SortedSet(primitiveComparator), documentUpdates, resolvedLimboDocuments);
                        return [2 /*return*/, this.applyRemoteEvent(event_1)];
                    case 1: return [4 /*yield*/, this.localStore
                            .releaseTarget(targetId, /* keepPersistedTargetData */ false)
                            .then(function () { return _this.removeAndCleanupTarget(targetId, err); })
                            .catch(ignoreIfPrimaryLeaseLoss)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncEngine.prototype.applySuccessfulWrite = function (mutationBatchResult) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var batchId, changes, error_2;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.assertSubscribed('applySuccessfulWrite()');
                        batchId = mutationBatchResult.batch.batchId;
                        // The local store may or may not be able to apply the write result and
                        // raise events immediately (depending on whether the watcher is caught
                        // up), so we raise user callbacks first so that they consistently happen
                        // before listen events.
                        this.processUserCallback(batchId, /*error=*/ null);
                        this.triggerPendingWritesCallbacks(batchId);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 6]);
                        return [4 /*yield*/, this.localStore.acknowledgeBatch(mutationBatchResult)];
                    case 2:
                        changes = _c.sent();
                        this.sharedClientState.updateMutationState(batchId, 'acknowledged');
                        return [4 /*yield*/, this.emitNewSnapsAndNotifyLocalStore(changes)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _c.sent();
                        return [4 /*yield*/, ignoreIfPrimaryLeaseLoss(error_2)];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SyncEngine.prototype.rejectFailedWrite = function (batchId, error) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var changes, error_3;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.assertSubscribed('rejectFailedWrite()');
                        // The local store may or may not be able to apply the write result and
                        // raise events immediately (depending on whether the watcher is caught up),
                        // so we raise user callbacks first so that they consistently happen before
                        // listen events.
                        this.processUserCallback(batchId, error);
                        this.triggerPendingWritesCallbacks(batchId);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 6]);
                        return [4 /*yield*/, this.localStore.rejectBatch(batchId)];
                    case 2:
                        changes = _c.sent();
                        this.sharedClientState.updateMutationState(batchId, 'rejected', error);
                        return [4 /*yield*/, this.emitNewSnapsAndNotifyLocalStore(changes)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_3 = _c.sent();
                        return [4 /*yield*/, ignoreIfPrimaryLeaseLoss(error_3)];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    SyncEngine.prototype.registerPendingWritesCallback = function (callback) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var highestBatchId, callbacks;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.remoteStore.canUseNetwork()) {
                            logDebug(LOG_TAG$2, 'The network is disabled. The task returned by ' +
                                "'awaitPendingWrites()' will not complete until the network is enabled.");
                        }
                        return [4 /*yield*/, this.localStore.getHighestUnacknowledgedBatchId()];
                    case 1:
                        highestBatchId = _c.sent();
                        if (highestBatchId === BATCHID_UNKNOWN) {
                            // Trigger the callback right away if there is no pending writes at the moment.
                            callback.resolve();
                            return [2 /*return*/];
                        }
                        callbacks = this.pendingWritesCallbacks.get(highestBatchId) || [];
                        callbacks.push(callback);
                        this.pendingWritesCallbacks.set(highestBatchId, callbacks);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    SyncEngine.prototype.triggerPendingWritesCallbacks = function (batchId) {
        (this.pendingWritesCallbacks.get(batchId) || []).forEach(function (callback) {
            callback.resolve();
        });
        this.pendingWritesCallbacks.delete(batchId);
    };
    /** Reject all outstanding callbacks waiting for pending writes to complete. */
    SyncEngine.prototype.rejectOutstandingPendingWritesCallbacks = function (errorMessage) {
        this.pendingWritesCallbacks.forEach(function (callbacks) {
            callbacks.forEach(function (callback) {
                callback.reject(new FirestoreError(Code.CANCELLED, errorMessage));
            });
        });
        this.pendingWritesCallbacks.clear();
    };
    SyncEngine.prototype.addMutationCallback = function (batchId, callback) {
        var newCallbacks = this.mutationUserCallbacks[this.currentUser.toKey()];
        if (!newCallbacks) {
            newCallbacks = new SortedMap(primitiveComparator);
        }
        newCallbacks = newCallbacks.insert(batchId, callback);
        this.mutationUserCallbacks[this.currentUser.toKey()] = newCallbacks;
    };
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    SyncEngine.prototype.processUserCallback = function (batchId, error) {
        var newCallbacks = this.mutationUserCallbacks[this.currentUser.toKey()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
        if (newCallbacks) {
            var callback = newCallbacks.get(batchId);
            if (callback) {
                debugAssert(batchId === newCallbacks.minKey(), 'Mutation callbacks processed out-of-order?');
                if (error) {
                    callback.reject(error);
                }
                else {
                    callback.resolve();
                }
                newCallbacks = newCallbacks.remove(batchId);
            }
            this.mutationUserCallbacks[this.currentUser.toKey()] = newCallbacks;
        }
    };
    SyncEngine.prototype.removeAndCleanupTarget = function (targetId, error) {
        var _this = this;
        if (error === void 0) { error = null; }
        this.sharedClientState.removeLocalQueryTarget(targetId);
        debugAssert(this.queriesByTarget.has(targetId) &&
            this.queriesByTarget.get(targetId).length !== 0, "There are no queries mapped to target id " + targetId);
        for (var _i = 0, _c = this.queriesByTarget.get(targetId); _i < _c.length; _i++) {
            var query = _c[_i];
            this.queryViewsByQuery.delete(query);
            if (error) {
                this.syncEngineListener.onWatchError(query, error);
            }
        }
        this.queriesByTarget.delete(targetId);
        if (this.isPrimaryClient) {
            var limboKeys = this.limboDocumentRefs.removeReferencesForId(targetId);
            limboKeys.forEach(function (limboKey) {
                var isReferenced = _this.limboDocumentRefs.containsKey(limboKey);
                if (!isReferenced) {
                    // We removed the last reference for this key
                    _this.removeLimboTarget(limboKey);
                }
            });
        }
    };
    SyncEngine.prototype.removeLimboTarget = function (key) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var limboTargetId = this.activeLimboTargetsByKey.get(key);
        if (limboTargetId === null) {
            // This target already got removed, because the query failed.
            return;
        }
        this.remoteStore.unlisten(limboTargetId);
        this.activeLimboTargetsByKey = this.activeLimboTargetsByKey.remove(key);
        this.activeLimboResolutionsByTarget.delete(limboTargetId);
        this.pumpEnqueuedLimboResolutions();
    };
    SyncEngine.prototype.updateTrackedLimbos = function (targetId, limboChanges) {
        for (var _i = 0, limboChanges_1 = limboChanges; _i < limboChanges_1.length; _i++) {
            var limboChange = limboChanges_1[_i];
            if (limboChange instanceof AddedLimboDocument) {
                this.limboDocumentRefs.addReference(limboChange.key, targetId);
                this.trackLimboChange(limboChange);
            }
            else if (limboChange instanceof RemovedLimboDocument) {
                logDebug(LOG_TAG$2, 'Document no longer in limbo: ' + limboChange.key);
                this.limboDocumentRefs.removeReference(limboChange.key, targetId);
                var isReferenced = this.limboDocumentRefs.containsKey(limboChange.key);
                if (!isReferenced) {
                    // We removed the last reference for this key
                    this.removeLimboTarget(limboChange.key);
                }
            }
            else {
                fail('Unknown limbo change: ' + JSON.stringify(limboChange));
            }
        }
    };
    SyncEngine.prototype.trackLimboChange = function (limboChange) {
        var key = limboChange.key;
        if (!this.activeLimboTargetsByKey.get(key)) {
            logDebug(LOG_TAG$2, 'New document in limbo: ' + key);
            this.enqueuedLimboResolutions.push(key);
            this.pumpEnqueuedLimboResolutions();
        }
    };
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    SyncEngine.prototype.pumpEnqueuedLimboResolutions = function () {
        while (this.enqueuedLimboResolutions.length > 0 &&
            this.activeLimboTargetsByKey.size < this.maxConcurrentLimboResolutions) {
            var key = this.enqueuedLimboResolutions.shift();
            var limboTargetId = this.limboTargetIdGenerator.next();
            this.activeLimboResolutionsByTarget.set(limboTargetId, new LimboResolution(key));
            this.activeLimboTargetsByKey = this.activeLimboTargetsByKey.insert(key, limboTargetId);
            this.remoteStore.listen(new TargetData(Query.atPath(key.path).toTarget(), limboTargetId, 2 /* LimboResolution */, ListenSequence.INVALID));
        }
    };
    // Visible for testing
    SyncEngine.prototype.activeLimboDocumentResolutions = function () {
        return this.activeLimboTargetsByKey;
    };
    // Visible for testing
    SyncEngine.prototype.enqueuedLimboDocumentResolutions = function () {
        return this.enqueuedLimboResolutions;
    };
    SyncEngine.prototype.emitNewSnapsAndNotifyLocalStore = function (changes, remoteEvent) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var newSnaps, docChangesInAllViews, queriesProcessed;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        newSnaps = [];
                        docChangesInAllViews = [];
                        queriesProcessed = [];
                        this.queryViewsByQuery.forEach(function (_, queryView) {
                            queriesProcessed.push(Promise.resolve()
                                .then(function () {
                                var viewDocChanges = queryView.view.computeDocChanges(changes);
                                if (!viewDocChanges.needsRefill) {
                                    return viewDocChanges;
                                }
                                // The query has a limit and some docs were removed, so we need
                                // to re-run the query against the local store to make sure we
                                // didn't lose any good docs that had been past the limit.
                                return _this.localStore
                                    .executeQuery(queryView.query, /* usePreviousResults= */ false)
                                    .then(function (_c) {
                                    var documents = _c.documents;
                                    return queryView.view.computeDocChanges(documents, viewDocChanges);
                                });
                            })
                                .then(function (viewDocChanges) {
                                var targetChange = remoteEvent && remoteEvent.targetChanges.get(queryView.targetId);
                                var viewChange = queryView.view.applyChanges(viewDocChanges, 
                                /* updateLimboDocuments= */ _this.isPrimaryClient, targetChange);
                                _this.updateTrackedLimbos(queryView.targetId, viewChange.limboChanges);
                                if (viewChange.snapshot) {
                                    if (_this.isPrimaryClient) {
                                        _this.sharedClientState.updateQueryState(queryView.targetId, viewChange.snapshot.fromCache ? 'not-current' : 'current');
                                    }
                                    newSnaps.push(viewChange.snapshot);
                                    var docChanges = LocalViewChanges.fromSnapshot(queryView.targetId, viewChange.snapshot);
                                    docChangesInAllViews.push(docChanges);
                                }
                            }));
                        });
                        return [4 /*yield*/, Promise.all(queriesProcessed)];
                    case 1:
                        _c.sent();
                        this.syncEngineListener.onWatchChange(newSnaps);
                        return [4 /*yield*/, this.localStore.notifyLocalViewChanges(docChangesInAllViews)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncEngine.prototype.assertSubscribed = function (fnName) {
        debugAssert(this.syncEngineListener !== null, 'Trying to call ' + fnName + ' before calling subscribe().');
    };
    SyncEngine.prototype.handleCredentialChange = function (user) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var userChanged, result;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        userChanged = !this.currentUser.isEqual(user);
                        this.currentUser = user;
                        if (!userChanged) return [3 /*break*/, 3];
                        // Fails tasks waiting for pending writes requested by previous user.
                        this.rejectOutstandingPendingWritesCallbacks("'waitForPendingWrites' promise is rejected due to a user change.");
                        return [4 /*yield*/, this.localStore.handleUserChange(user)];
                    case 1:
                        result = _c.sent();
                        // TODO(b/114226417): Consider calling this only in the primary tab.
                        this.sharedClientState.handleUserChange(user, result.removedBatchIds, result.addedBatchIds);
                        return [4 /*yield*/, this.emitNewSnapsAndNotifyLocalStore(result.affectedDocuments)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, this.remoteStore.handleCredentialChange()];
                    case 4:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncEngine.prototype.enableNetwork = function () {
        return this.remoteStore.enableNetwork();
    };
    SyncEngine.prototype.disableNetwork = function () {
        return this.remoteStore.disableNetwork();
    };
    SyncEngine.prototype.getRemoteKeysForTarget = function (targetId) {
        var limboResolution = this.activeLimboResolutionsByTarget.get(targetId);
        if (limboResolution && limboResolution.receivedDocument) {
            return documentKeySet().add(limboResolution.key);
        }
        else {
            var keySet = documentKeySet();
            var queries = this.queriesByTarget.get(targetId);
            if (!queries) {
                return keySet;
            }
            for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
                var query = queries_1[_i];
                var queryView = this.queryViewsByQuery.get(query);
                debugAssert(!!queryView, "No query view found for " + query);
                keySet = keySet.unionWith(queryView.view.syncedDocuments);
            }
            return keySet;
        }
    };
    return SyncEngine;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG$3 = 'PersistentStream';
/** The time a stream stays open after it is marked idle. */
var IDLE_TIMEOUT_MS = 60 * 1000;
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
var PersistentStream = /** @class */ (function () {
    function PersistentStream(queue, connectionTimerId, idleTimerId, connection, credentialsProvider, listener) {
        this.queue = queue;
        this.idleTimerId = idleTimerId;
        this.connection = connection;
        this.credentialsProvider = credentialsProvider;
        this.listener = listener;
        this.state = 0 /* Initial */;
        /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
        this.closeCount = 0;
        this.idleTimer = null;
        this.stream = null;
        this.backoff = new ExponentialBackoff(queue, connectionTimerId);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */
    PersistentStream.prototype.isStarted = function () {
        return (this.state === 1 /* Starting */ ||
            this.state === 2 /* Open */ ||
            this.state === 4 /* Backoff */);
    };
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    PersistentStream.prototype.isOpen = function () {
        return this.state === 2 /* Open */;
    };
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    PersistentStream.prototype.start = function () {
        if (this.state === 3 /* Error */) {
            this.performBackoff();
            return;
        }
        debugAssert(this.state === 0 /* Initial */, 'Already started');
        this.auth();
    };
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    PersistentStream.prototype.stop = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.isStarted()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.close(0 /* Initial */)];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    PersistentStream.prototype.inhibitBackoff = function () {
        debugAssert(!this.isStarted(), 'Can only inhibit backoff in a stopped state');
        this.state = 0 /* Initial */;
        this.backoff.reset();
    };
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    PersistentStream.prototype.markIdle = function () {
        var _this = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
        if (this.isOpen() && this.idleTimer === null) {
            this.idleTimer = this.queue.enqueueAfterDelay(this.idleTimerId, IDLE_TIMEOUT_MS, function () { return _this.handleIdleCloseTimer(); });
        }
    };
    /** Sends a message to the underlying stream. */
    PersistentStream.prototype.sendRequest = function (msg) {
        this.cancelIdleCheck();
        this.stream.send(msg);
    };
    /** Called by the idle timer when the stream should close due to inactivity. */
    PersistentStream.prototype.handleIdleCloseTimer = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                if (this.isOpen()) {
                    // When timing out an idle stream there's no reason to force the stream into backoff when
                    // it restarts so set the stream state to Initial instead of Error.
                    return [2 /*return*/, this.close(0 /* Initial */)];
                }
                return [2 /*return*/];
            });
        });
    };
    /** Marks the stream as active again. */
    PersistentStream.prototype.cancelIdleCheck = function () {
        if (this.idleTimer) {
            this.idleTimer.cancel();
            this.idleTimer = null;
        }
    };
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    PersistentStream.prototype.close = function (finalState, error) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        debugAssert(this.isStarted(), 'Only started streams should be closed.');
                        debugAssert(finalState === 3 /* Error */ || isNullOrUndefined(error), "Can't provide an error when not in an error state.");
                        // Cancel any outstanding timers (they're guaranteed not to execute).
                        this.cancelIdleCheck();
                        this.backoff.cancel();
                        // Invalidates any stream-related callbacks (e.g. from auth or the
                        // underlying stream), guaranteeing they won't execute.
                        this.closeCount++;
                        if (finalState !== 3 /* Error */) {
                            // If this is an intentional close ensure we don't delay our next connection attempt.
                            this.backoff.reset();
                        }
                        else if (error && error.code === Code.RESOURCE_EXHAUSTED) {
                            // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                            logError(error.toString());
                            logError('Using maximum backoff delay to prevent overloading the backend.');
                            this.backoff.resetToMax();
                        }
                        else if (error && error.code === Code.UNAUTHENTICATED) {
                            // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                            // just expired.
                            this.credentialsProvider.invalidateToken();
                        }
                        // Clean up the underlying stream because we are no longer interested in events.
                        if (this.stream !== null) {
                            this.tearDown();
                            this.stream.close();
                            this.stream = null;
                        }
                        // This state must be assigned before calling onClose() to allow the callback to
                        // inhibit backoff or otherwise manipulate the state in its non-started state.
                        this.state = finalState;
                        // Notify the listener that the stream closed.
                        return [4 /*yield*/, this.listener.onClose(error)];
                    case 1:
                        // Notify the listener that the stream closed.
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    PersistentStream.prototype.tearDown = function () { };
    PersistentStream.prototype.auth = function () {
        var _this = this;
        debugAssert(this.state === 0 /* Initial */, 'Must be in initial state to auth');
        this.state = 1 /* Starting */;
        var dispatchIfNotClosed = this.getCloseGuardedDispatcher(this.closeCount);
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
        var closeCount = this.closeCount;
        this.credentialsProvider.getToken().then(function (token) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            if (_this.closeCount === closeCount) {
                // Normally we'd have to schedule the callback on the AsyncQueue.
                // However, the following calls are safe to be called outside the
                // AsyncQueue since they don't chain asynchronous calls
                _this.startStream(token);
            }
        }, function (error) {
            dispatchIfNotClosed(function () {
                var rpcError = new FirestoreError(Code.UNKNOWN, 'Fetching auth token failed: ' + error.message);
                return _this.handleStreamClose(rpcError);
            });
        });
    };
    PersistentStream.prototype.startStream = function (token) {
        var _this = this;
        debugAssert(this.state === 1 /* Starting */, 'Trying to start stream in a non-starting state');
        var dispatchIfNotClosed = this.getCloseGuardedDispatcher(this.closeCount);
        this.stream = this.startRpc(token);
        this.stream.onOpen(function () {
            dispatchIfNotClosed(function () {
                debugAssert(_this.state === 1 /* Starting */, 'Expected stream to be in state Starting, but was ' + _this.state);
                _this.state = 2 /* Open */;
                return _this.listener.onOpen();
            });
        });
        this.stream.onClose(function (error) {
            dispatchIfNotClosed(function () {
                return _this.handleStreamClose(error);
            });
        });
        this.stream.onMessage(function (msg) {
            dispatchIfNotClosed(function () {
                return _this.onMessage(msg);
            });
        });
    };
    PersistentStream.prototype.performBackoff = function () {
        var _this = this;
        debugAssert(this.state === 3 /* Error */, 'Should only perform backoff when in Error state');
        this.state = 4 /* Backoff */;
        this.backoff.backoffAndRun(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                debugAssert(this.state === 4 /* Backoff */, 'Backoff elapsed but state is now: ' + this.state);
                this.state = 0 /* Initial */;
                this.start();
                debugAssert(this.isStarted(), 'PersistentStream should have started');
                return [2 /*return*/];
            });
        }); });
    };
    // Visible for tests
    PersistentStream.prototype.handleStreamClose = function (error) {
        debugAssert(this.isStarted(), "Can't handle server close on non-started stream");
        logDebug(LOG_TAG$3, "close with error: " + error);
        this.stream = null;
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return this.close(3 /* Error */, error);
    };
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    PersistentStream.prototype.getCloseGuardedDispatcher = function (startCloseCount) {
        var _this = this;
        return function (fn) {
            _this.queue.enqueueAndForget(function () {
                if (_this.closeCount === startCloseCount) {
                    return fn();
                }
                else {
                    logDebug(LOG_TAG$3, 'stream callback skipped by getCloseGuardedDispatcher.');
                    return Promise.resolve();
                }
            });
        };
    };
    return PersistentStream;
}());
/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */
var PersistentListenStream = /** @class */ (function (_super) {
    tslib.__extends(PersistentListenStream, _super);
    function PersistentListenStream(queue, connection, credentials, serializer, listener) {
        var _this = _super.call(this, queue, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */, "listen_stream_idle" /* ListenStreamIdle */, connection, credentials, listener) || this;
        _this.serializer = serializer;
        return _this;
    }
    PersistentListenStream.prototype.startRpc = function (token) {
        return this.connection.openStream('Listen', token);
    };
    PersistentListenStream.prototype.onMessage = function (watchChangeProto) {
        // A successful response means the stream is healthy
        this.backoff.reset();
        var watchChange = this.serializer.fromWatchChange(watchChangeProto);
        var snapshot = this.serializer.versionFromListenResponse(watchChangeProto);
        return this.listener.onWatchChange(watchChange, snapshot);
    };
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    PersistentListenStream.prototype.watch = function (targetData) {
        var request = {};
        request.database = this.serializer.encodedDatabaseId;
        request.addTarget = this.serializer.toTarget(targetData);
        var labels = this.serializer.toListenRequestLabels(targetData);
        if (labels) {
            request.labels = labels;
        }
        this.sendRequest(request);
    };
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    PersistentListenStream.prototype.unwatch = function (targetId) {
        var request = {};
        request.database = this.serializer.encodedDatabaseId;
        request.removeTarget = targetId;
        this.sendRequest(request);
    };
    return PersistentListenStream;
}(PersistentStream));
/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */
var PersistentWriteStream = /** @class */ (function (_super) {
    tslib.__extends(PersistentWriteStream, _super);
    function PersistentWriteStream(queue, connection, credentials, serializer, listener) {
        var _this = _super.call(this, queue, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */, "write_stream_idle" /* WriteStreamIdle */, connection, credentials, listener) || this;
        _this.serializer = serializer;
        _this.handshakeComplete_ = false;
        /**
         * The last received stream token from the server, used to acknowledge which
         * responses the client has processed. Stream tokens are opaque checkpoint
         * markers whose only real value is their inclusion in the next request.
         *
         * PersistentWriteStream manages propagating this value from responses to the
         * next request.
         */
        _this.lastStreamToken = ByteString.EMPTY_BYTE_STRING;
        return _this;
    }
    Object.defineProperty(PersistentWriteStream.prototype, "handshakeComplete", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function () {
            return this.handshakeComplete_;
        },
        enumerable: true,
        configurable: true
    });
    // Override of PersistentStream.start
    PersistentWriteStream.prototype.start = function () {
        this.handshakeComplete_ = false;
        _super.prototype.start.call(this);
    };
    PersistentWriteStream.prototype.tearDown = function () {
        if (this.handshakeComplete_) {
            this.writeMutations([]);
        }
    };
    PersistentWriteStream.prototype.startRpc = function (token) {
        return this.connection.openStream('Write', token);
    };
    PersistentWriteStream.prototype.onMessage = function (responseProto) {
        // Always capture the last stream token.
        hardAssert(!!responseProto.streamToken, 'Got a write response without a stream token');
        this.lastStreamToken = this.serializer.fromBytes(responseProto.streamToken);
        if (!this.handshakeComplete_) {
            // The first response is always the handshake response
            hardAssert(!responseProto.writeResults || responseProto.writeResults.length === 0, 'Got mutation results for handshake');
            this.handshakeComplete_ = true;
            return this.listener.onHandshakeComplete();
        }
        else {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.backoff.reset();
            var results = this.serializer.fromWriteResults(responseProto.writeResults, responseProto.commitTime);
            var commitVersion = this.serializer.fromVersion(responseProto.commitTime);
            return this.listener.onMutationResult(commitVersion, results);
        }
    };
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    PersistentWriteStream.prototype.writeHandshake = function () {
        debugAssert(this.isOpen(), 'Writing handshake requires an opened stream');
        debugAssert(!this.handshakeComplete_, 'Handshake already completed');
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var request = {};
        request.database = this.serializer.encodedDatabaseId;
        this.sendRequest(request);
    };
    /** Sends a group of mutations to the Firestore backend to apply. */
    PersistentWriteStream.prototype.writeMutations = function (mutations) {
        var _this = this;
        debugAssert(this.isOpen(), 'Writing mutations requires an opened stream');
        debugAssert(this.handshakeComplete_, 'Handshake must be complete before writing mutations');
        debugAssert(this.lastStreamToken.approximateByteSize() > 0, 'Trying to write mutation without a token');
        var request = {
            streamToken: this.serializer.toBytes(this.lastStreamToken),
            writes: mutations.map(function (mutation) { return _this.serializer.toMutation(mutation); })
        };
        this.sendRequest(request);
    };
    return PersistentWriteStream;
}(PersistentStream));
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
var Datastore = /** @class */ (function () {
    function Datastore() {
        // Make sure that the structural type of `Datastore` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this._ = undefined;
    }
    return Datastore;
}());
/**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */
var DatastoreImpl = /** @class */ (function (_super) {
    tslib.__extends(DatastoreImpl, _super);
    function DatastoreImpl(connection, credentials, serializer) {
        var _this = _super.call(this) || this;
        _this.connection = connection;
        _this.credentials = credentials;
        _this.serializer = serializer;
        return _this;
    }
    /** Gets an auth token and invokes the provided RPC. */
    DatastoreImpl.prototype.invokeRPC = function (rpcName, request) {
        var _this = this;
        return this.credentials
            .getToken()
            .then(function (token) {
            return _this.connection.invokeRPC(rpcName, request, token);
        })
            .catch(function (error) {
            if (error.code === Code.UNAUTHENTICATED) {
                _this.credentials.invalidateToken();
            }
            throw error;
        });
    };
    /** Gets an auth token and invokes the provided RPC with streamed results. */
    DatastoreImpl.prototype.invokeStreamingRPC = function (rpcName, request) {
        var _this = this;
        return this.credentials
            .getToken()
            .then(function (token) {
            return _this.connection.invokeStreamingRPC(rpcName, request, token);
        })
            .catch(function (error) {
            if (error.code === Code.UNAUTHENTICATED) {
                _this.credentials.invalidateToken();
            }
            throw error;
        });
    };
    return DatastoreImpl;
}(Datastore));
function newDatastore(connection, credentials, serializer) {
    return new DatastoreImpl(connection, credentials, serializer);
}
function invokeCommitRpc(datastore, mutations) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var datastoreImpl, params, response;
        return tslib.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    datastoreImpl = debugCast(datastore, DatastoreImpl);
                    params = {
                        database: datastoreImpl.serializer.encodedDatabaseId,
                        writes: mutations.map(function (m) { return datastoreImpl.serializer.toMutation(m); })
                    };
                    return [4 /*yield*/, datastoreImpl.invokeRPC('Commit', params)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, datastoreImpl.serializer.fromWriteResults(response.writeResults, response.commitTime)];
            }
        });
    });
}
function invokeBatchGetDocumentsRpc(datastore, keys) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var datastoreImpl, params, response, docs, result;
        return tslib.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    datastoreImpl = debugCast(datastore, DatastoreImpl);
                    params = {
                        database: datastoreImpl.serializer.encodedDatabaseId,
                        documents: keys.map(function (k) { return datastoreImpl.serializer.toName(k); })
                    };
                    return [4 /*yield*/, datastoreImpl.invokeStreamingRPC('BatchGetDocuments', params)];
                case 1:
                    response = _c.sent();
                    docs = new Map();
                    response.forEach(function (proto) {
                        var doc = datastoreImpl.serializer.fromMaybeDocument(proto);
                        docs.set(doc.key.toString(), doc);
                    });
                    result = [];
                    keys.forEach(function (key) {
                        var doc = docs.get(key.toString());
                        hardAssert(!!doc, 'Missing entity in write response for ' + key);
                        result.push(doc);
                    });
                    return [2 /*return*/, result];
            }
        });
    });
}
function newPersistentWriteStream(datastore, queue, listener) {
    var datastoreImpl = debugCast(datastore, DatastoreImpl);
    return new PersistentWriteStream(queue, datastoreImpl.connection, datastoreImpl.credentials, datastoreImpl.serializer, listener);
}
function newPersistentWatchStream(datastore, queue, listener) {
    var datastoreImpl = debugCast(datastore, DatastoreImpl);
    return new PersistentListenStream(queue, datastoreImpl.connection, datastoreImpl.credentials, datastoreImpl.serializer, listener);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */
var Transaction = /** @class */ (function () {
    function Transaction(datastore) {
        this.datastore = datastore;
        // The version of each document that was read during this transaction.
        this.readVersions = documentVersionMap();
        this.mutations = [];
        this.committed = false;
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.lastWriteError = null;
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.writtenDocs = new Set();
    }
    Transaction.prototype.lookup = function (keys) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var docs;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.ensureCommitNotCalled();
                        if (this.mutations.length > 0) {
                            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Firestore transactions require all reads to be executed before all writes.');
                        }
                        return [4 /*yield*/, invokeBatchGetDocumentsRpc(this.datastore, keys)];
                    case 1:
                        docs = _c.sent();
                        docs.forEach(function (doc) {
                            if (doc instanceof NoDocument || doc instanceof Document) {
                                _this.recordVersion(doc);
                            }
                            else {
                                fail('Document in a transaction was a ' + doc.constructor.name);
                            }
                        });
                        return [2 /*return*/, docs];
                }
            });
        });
    };
    Transaction.prototype.set = function (key, data) {
        this.write(data.toMutations(key, this.precondition(key)));
        this.writtenDocs.add(key);
    };
    Transaction.prototype.update = function (key, data) {
        try {
            this.write(data.toMutations(key, this.preconditionForUpdate(key)));
        }
        catch (e) {
            this.lastWriteError = e;
        }
        this.writtenDocs.add(key);
    };
    Transaction.prototype.delete = function (key) {
        this.write([new DeleteMutation(key, this.precondition(key))]);
        this.writtenDocs.add(key);
    };
    Transaction.prototype.commit = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var unwritten;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.ensureCommitNotCalled();
                        if (this.lastWriteError) {
                            throw this.lastWriteError;
                        }
                        unwritten = this.readVersions;
                        // For each mutation, note that the doc was written.
                        this.mutations.forEach(function (mutation) {
                            unwritten = unwritten.remove(mutation.key);
                        });
                        // For each document that was read but not written to, we want to perform
                        // a `verify` operation.
                        unwritten.forEach(function (key, _version) {
                            _this.mutations.push(new VerifyMutation(key, _this.precondition(key)));
                        });
                        return [4 /*yield*/, invokeCommitRpc(this.datastore, this.mutations)];
                    case 1:
                        _c.sent();
                        this.committed = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Transaction.prototype.recordVersion = function (doc) {
        var docVersion;
        if (doc instanceof Document) {
            docVersion = doc.version;
        }
        else if (doc instanceof NoDocument) {
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            docVersion = SnapshotVersion.min();
        }
        else {
            throw fail('Document in a transaction was a ' + doc.constructor.name);
        }
        var existingVersion = this.readVersions.get(doc.key);
        if (existingVersion !== null) {
            if (!docVersion.isEqual(existingVersion)) {
                // This transaction will fail no matter what.
                throw new FirestoreError(Code.ABORTED, 'Document version changed between two reads.');
            }
        }
        else {
            this.readVersions = this.readVersions.insert(doc.key, docVersion);
        }
    };
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    Transaction.prototype.precondition = function (key) {
        var version = this.readVersions.get(key);
        if (!this.writtenDocs.has(key) && version) {
            return Precondition.updateTime(version);
        }
        else {
            return Precondition.none();
        }
    };
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    Transaction.prototype.preconditionForUpdate = function (key) {
        var version = this.readVersions.get(key);
        // The first time a document is written, we want to take into account the
        // read time and existence
        if (!this.writtenDocs.has(key) && version) {
            if (version.isEqual(SnapshotVersion.min())) {
                // The document doesn't exist, so fail the transaction.
                // This has to be validated locally because you can't send a
                // precondition that a document does not exist without changing the
                // semantics of the backend write to be an insert. This is the reverse
                // of what we want, since we want to assert that the document doesn't
                // exist but then send the update and have it fail. Since we can't
                // express that to the backend, we have to validate locally.
                // Note: this can change once we can send separate verify writes in the
                // transaction.
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            }
            // Document exists, base precondition on document update time.
            return Precondition.updateTime(version);
        }
        else {
            // Document was not read, so we just use the preconditions for a blind
            // update.
            return Precondition.exists(true);
        }
    };
    Transaction.prototype.write = function (mutations) {
        this.ensureCommitNotCalled();
        this.mutations = this.mutations.concat(mutations);
    };
    Transaction.prototype.ensureCommitNotCalled = function () {
        debugAssert(!this.committed, 'A transaction object cannot be used after its update callback has been invoked.');
    };
    return Transaction;
}());
/**
 * @license
 * Copyright 2018 Google LLC
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
var LOG_TAG$4 = 'OnlineStateTracker';
// To deal with transient failures, we allow multiple stream attempts before
// giving up and transitioning from OnlineState.Unknown to Offline.
// TODO(mikelehen): This used to be set to 2 as a mitigation for b/66228394.
// @jdimond thinks that bug is sufficiently fixed so that we can set this back
// to 1. If that works okay, we could potentially remove this logic entirely.
var MAX_WATCH_STREAM_FAILURES = 1;
// To deal with stream attempts that don't succeed or fail in a timely manner,
// we have a timeout for OnlineState to reach Online or Offline.
// If the timeout is reached, we transition to Offline rather than waiting
// indefinitely.
var ONLINE_STATE_TIMEOUT_MS = 10 * 1000;
/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */
var OnlineStateTracker = /** @class */ (function () {
    function OnlineStateTracker(asyncQueue, onlineStateHandler) {
        this.asyncQueue = asyncQueue;
        this.onlineStateHandler = onlineStateHandler;
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */;
        /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.watchStreamFailures = 0;
        /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.onlineStateTimer = null;
        /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.shouldWarnClientIsOffline = true;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */
    OnlineStateTracker.prototype.handleWatchStreamStart = function () {
        var _this = this;
        if (this.watchStreamFailures === 0) {
            this.setAndBroadcast("Unknown" /* Unknown */);
            debugAssert(this.onlineStateTimer === null, "onlineStateTimer shouldn't be started yet");
            this.onlineStateTimer = this.asyncQueue.enqueueAfterDelay("online_state_timeout" /* OnlineStateTimeout */, ONLINE_STATE_TIMEOUT_MS, function () {
                _this.onlineStateTimer = null;
                debugAssert(_this.state === "Unknown" /* Unknown */, 'Timer should be canceled if we transitioned to a different state.');
                _this.logClientOfflineWarningIfNecessary("Backend didn't respond within " + ONLINE_STATE_TIMEOUT_MS / 1000 + " " +
                    "seconds.");
                _this.setAndBroadcast("Offline" /* Offline */);
                // NOTE: handleWatchStreamFailure() will continue to increment
                // watchStreamFailures even though we are already marked Offline,
                // but this is non-harmful.
                return Promise.resolve();
            });
        }
    };
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    OnlineStateTracker.prototype.handleWatchStreamFailure = function (error) {
        if (this.state === "Online" /* Online */) {
            this.setAndBroadcast("Unknown" /* Unknown */);
            // To get to OnlineState.Online, set() must have been called which would
            // have reset our heuristics.
            debugAssert(this.watchStreamFailures === 0, 'watchStreamFailures must be 0');
            debugAssert(this.onlineStateTimer === null, 'onlineStateTimer must be null');
        }
        else {
            this.watchStreamFailures++;
            if (this.watchStreamFailures >= MAX_WATCH_STREAM_FAILURES) {
                this.clearOnlineStateTimer();
                this.logClientOfflineWarningIfNecessary("Connection failed " + MAX_WATCH_STREAM_FAILURES + " " +
                    ("times. Most recent error: " + error.toString()));
                this.setAndBroadcast("Offline" /* Offline */);
            }
        }
    };
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    OnlineStateTracker.prototype.set = function (newState) {
        this.clearOnlineStateTimer();
        this.watchStreamFailures = 0;
        if (newState === "Online" /* Online */) {
            // We've connected to watch at least once. Don't warn the developer
            // about being offline going forward.
            this.shouldWarnClientIsOffline = false;
        }
        this.setAndBroadcast(newState);
    };
    OnlineStateTracker.prototype.setAndBroadcast = function (newState) {
        if (newState !== this.state) {
            this.state = newState;
            this.onlineStateHandler(newState);
        }
    };
    OnlineStateTracker.prototype.logClientOfflineWarningIfNecessary = function (details) {
        var message = "Could not reach Cloud Firestore backend. " + details + "\n" +
            "This typically indicates that your device does not have a healthy " +
            "Internet connection at the moment. The client will operate in offline " +
            "mode until it is able to successfully connect to the backend.";
        if (this.shouldWarnClientIsOffline) {
            logError(message);
            this.shouldWarnClientIsOffline = false;
        }
        else {
            logDebug(LOG_TAG$4, message);
        }
    };
    OnlineStateTracker.prototype.clearOnlineStateTimer = function () {
        if (this.onlineStateTimer !== null) {
            this.onlineStateTimer.cancel();
            this.onlineStateTimer = null;
        }
    };
    return OnlineStateTracker;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */
var DocumentWatchChange = /** @class */ (function () {
    function DocumentWatchChange(
    /** The new document applies to all of these targets. */
    updatedTargetIds, 
    /** The new document is removed from all of these targets. */
    removedTargetIds, 
    /** The key of the document for this change. */
    key, 
    /**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
    newDoc) {
        this.updatedTargetIds = updatedTargetIds;
        this.removedTargetIds = removedTargetIds;
        this.key = key;
        this.newDoc = newDoc;
    }
    return DocumentWatchChange;
}());
var ExistenceFilterChange = /** @class */ (function () {
    function ExistenceFilterChange(targetId, existenceFilter) {
        this.targetId = targetId;
        this.existenceFilter = existenceFilter;
    }
    return ExistenceFilterChange;
}());
var WatchTargetChange = /** @class */ (function () {
    function WatchTargetChange(
    /** What kind of change occurred to the watch target. */
    state, 
    /** The target IDs that were added/removed/set. */
    targetIds, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    resumeToken, 
    /** An RPC error indicating why the watch failed. */
    cause) {
        if (resumeToken === void 0) { resumeToken = ByteString.EMPTY_BYTE_STRING; }
        if (cause === void 0) { cause = null; }
        this.state = state;
        this.targetIds = targetIds;
        this.resumeToken = resumeToken;
        this.cause = cause;
    }
    return WatchTargetChange;
}());
/** Tracks the internal state of a Watch target. */
var TargetState = /** @class */ (function () {
    function TargetState() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.pendingResponses = 0;
        /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
        this.documentChanges = snapshotChangesMap();
        /** See public getters for explanations of these fields. */
        this._resumeToken = ByteString.EMPTY_BYTE_STRING;
        this._current = false;
        /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
        this._hasPendingChanges = true;
    }
    Object.defineProperty(TargetState.prototype, "current", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetState.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */
        get: function () {
            return this._resumeToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetState.prototype, "isPending", {
        /** Whether this target has pending target adds or target removes. */
        get: function () {
            return this.pendingResponses !== 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetState.prototype, "hasPendingChanges", {
        /** Whether we have modified any state that should trigger a snapshot. */
        get: function () {
            return this._hasPendingChanges;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    TargetState.prototype.updateResumeToken = function (resumeToken) {
        if (resumeToken.approximateByteSize() > 0) {
            this._hasPendingChanges = true;
            this._resumeToken = resumeToken;
        }
    };
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    TargetState.prototype.toTargetChange = function () {
        var addedDocuments = documentKeySet();
        var modifiedDocuments = documentKeySet();
        var removedDocuments = documentKeySet();
        this.documentChanges.forEach(function (key, changeType) {
            switch (changeType) {
                case 0 /* Added */:
                    addedDocuments = addedDocuments.add(key);
                    break;
                case 2 /* Modified */:
                    modifiedDocuments = modifiedDocuments.add(key);
                    break;
                case 1 /* Removed */:
                    removedDocuments = removedDocuments.add(key);
                    break;
                default:
                    fail('Encountered invalid change type: ' + changeType);
            }
        });
        return new TargetChange(this._resumeToken, this._current, addedDocuments, modifiedDocuments, removedDocuments);
    };
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    TargetState.prototype.clearPendingChanges = function () {
        this._hasPendingChanges = false;
        this.documentChanges = snapshotChangesMap();
    };
    TargetState.prototype.addDocumentChange = function (key, changeType) {
        this._hasPendingChanges = true;
        this.documentChanges = this.documentChanges.insert(key, changeType);
    };
    TargetState.prototype.removeDocumentChange = function (key) {
        this._hasPendingChanges = true;
        this.documentChanges = this.documentChanges.remove(key);
    };
    TargetState.prototype.recordPendingTargetRequest = function () {
        this.pendingResponses += 1;
    };
    TargetState.prototype.recordTargetResponse = function () {
        this.pendingResponses -= 1;
    };
    TargetState.prototype.markCurrent = function () {
        this._hasPendingChanges = true;
        this._current = true;
    };
    return TargetState;
}());
var LOG_TAG$5 = 'WatchChangeAggregator';
/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */
var WatchChangeAggregator = /** @class */ (function () {
    function WatchChangeAggregator(metadataProvider) {
        this.metadataProvider = metadataProvider;
        /** The internal state of all tracked targets. */
        this.targetStates = new Map();
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.pendingDocumentUpdates = maybeDocumentMap();
        /** A mapping of document keys to their set of target IDs. */
        this.pendingDocumentTargetMapping = documentTargetMap();
        /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
        this.pendingTargetResets = new SortedSet(primitiveComparator);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */
    WatchChangeAggregator.prototype.handleDocumentChange = function (docChange) {
        for (var _i = 0, _c = docChange.updatedTargetIds; _i < _c.length; _i++) {
            var targetId = _c[_i];
            if (docChange.newDoc instanceof Document) {
                this.addDocumentToTarget(targetId, docChange.newDoc);
            }
            else if (docChange.newDoc instanceof NoDocument) {
                this.removeDocumentFromTarget(targetId, docChange.key, docChange.newDoc);
            }
        }
        for (var _d = 0, _e = docChange.removedTargetIds; _d < _e.length; _d++) {
            var targetId = _e[_d];
            this.removeDocumentFromTarget(targetId, docChange.key, docChange.newDoc);
        }
    };
    /** Processes and adds the WatchTargetChange to the current set of changes. */
    WatchChangeAggregator.prototype.handleTargetChange = function (targetChange) {
        var _this = this;
        this.forEachTarget(targetChange, function (targetId) {
            var targetState = _this.ensureTargetState(targetId);
            switch (targetChange.state) {
                case 0 /* NoChange */:
                    if (_this.isActiveTarget(targetId)) {
                        targetState.updateResumeToken(targetChange.resumeToken);
                    }
                    break;
                case 1 /* Added */:
                    // We need to decrement the number of pending acks needed from watch
                    // for this targetId.
                    targetState.recordTargetResponse();
                    if (!targetState.isPending) {
                        // We have a freshly added target, so we need to reset any state
                        // that we had previously. This can happen e.g. when remove and add
                        // back a target for existence filter mismatches.
                        targetState.clearPendingChanges();
                    }
                    targetState.updateResumeToken(targetChange.resumeToken);
                    break;
                case 2 /* Removed */:
                    // We need to keep track of removed targets to we can post-filter and
                    // remove any target changes.
                    // We need to decrement the number of pending acks needed from watch
                    // for this targetId.
                    targetState.recordTargetResponse();
                    if (!targetState.isPending) {
                        _this.removeTarget(targetId);
                    }
                    debugAssert(!targetChange.cause, 'WatchChangeAggregator does not handle errored targets');
                    break;
                case 3 /* Current */:
                    if (_this.isActiveTarget(targetId)) {
                        targetState.markCurrent();
                        targetState.updateResumeToken(targetChange.resumeToken);
                    }
                    break;
                case 4 /* Reset */:
                    if (_this.isActiveTarget(targetId)) {
                        // Reset the target and synthesizes removes for all existing
                        // documents. The backend will re-add any documents that still
                        // match the target before it sends the next global snapshot.
                        _this.resetTarget(targetId);
                        targetState.updateResumeToken(targetChange.resumeToken);
                    }
                    break;
                default:
                    fail('Unknown target watch change state: ' + targetChange.state);
            }
        });
    };
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    WatchChangeAggregator.prototype.forEachTarget = function (targetChange, fn) {
        var _this = this;
        if (targetChange.targetIds.length > 0) {
            targetChange.targetIds.forEach(fn);
        }
        else {
            this.targetStates.forEach(function (_, targetId) {
                if (_this.isActiveTarget(targetId)) {
                    fn(targetId);
                }
            });
        }
    };
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    WatchChangeAggregator.prototype.handleExistenceFilter = function (watchChange) {
        var targetId = watchChange.targetId;
        var expectedCount = watchChange.existenceFilter.count;
        var targetData = this.targetDataForActiveTarget(targetId);
        if (targetData) {
            var target = targetData.target;
            if (target.isDocumentQuery()) {
                if (expectedCount === 0) {
                    // The existence filter told us the document does not exist. We deduce
                    // that this document does not exist and apply a deleted document to
                    // our updates. Without applying this deleted document there might be
                    // another query that will raise this document as part of a snapshot
                    // until it is resolved, essentially exposing inconsistency between
                    // queries.
                    var key = new DocumentKey(target.path);
                    this.removeDocumentFromTarget(targetId, key, new NoDocument(key, SnapshotVersion.min()));
                }
                else {
                    hardAssert(expectedCount === 1, 'Single document existence filter with count: ' + expectedCount);
                }
            }
            else {
                var currentSize = this.getCurrentDocumentCountForTarget(targetId);
                if (currentSize !== expectedCount) {
                    // Existence filter mismatch: We reset the mapping and raise a new
                    // snapshot with `isFromCache:true`.
                    this.resetTarget(targetId);
                    this.pendingTargetResets = this.pendingTargetResets.add(targetId);
                }
            }
        }
    };
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    WatchChangeAggregator.prototype.createRemoteEvent = function (snapshotVersion) {
        var _this = this;
        var targetChanges = new Map();
        this.targetStates.forEach(function (targetState, targetId) {
            var targetData = _this.targetDataForActiveTarget(targetId);
            if (targetData) {
                if (targetState.current && targetData.target.isDocumentQuery()) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    //
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var key = new DocumentKey(targetData.target.path);
                    if (_this.pendingDocumentUpdates.get(key) === null &&
                        !_this.targetContainsDocument(targetId, key)) {
                        _this.removeDocumentFromTarget(targetId, key, new NoDocument(key, snapshotVersion));
                    }
                }
                if (targetState.hasPendingChanges) {
                    targetChanges.set(targetId, targetState.toTargetChange());
                    targetState.clearPendingChanges();
                }
            }
        });
        var resolvedLimboDocuments = documentKeySet();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        //
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
        this.pendingDocumentTargetMapping.forEach(function (key, targets) {
            var isOnlyLimboTarget = true;
            targets.forEachWhile(function (targetId) {
                var targetData = _this.targetDataForActiveTarget(targetId);
                if (targetData &&
                    targetData.purpose !== 2 /* LimboResolution */) {
                    isOnlyLimboTarget = false;
                    return false;
                }
                return true;
            });
            if (isOnlyLimboTarget) {
                resolvedLimboDocuments = resolvedLimboDocuments.add(key);
            }
        });
        var remoteEvent = new RemoteEvent(snapshotVersion, targetChanges, this.pendingTargetResets, this.pendingDocumentUpdates, resolvedLimboDocuments);
        this.pendingDocumentUpdates = maybeDocumentMap();
        this.pendingDocumentTargetMapping = documentTargetMap();
        this.pendingTargetResets = new SortedSet(primitiveComparator);
        return remoteEvent;
    };
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    WatchChangeAggregator.prototype.addDocumentToTarget = function (targetId, document) {
        if (!this.isActiveTarget(targetId)) {
            return;
        }
        var changeType = this.targetContainsDocument(targetId, document.key)
            ? 2 /* Modified */
            : 0 /* Added */;
        var targetState = this.ensureTargetState(targetId);
        targetState.addDocumentChange(document.key, changeType);
        this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(document.key, document);
        this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(document.key, this.ensureDocumentTargetMapping(document.key).add(targetId));
    };
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    WatchChangeAggregator.prototype.removeDocumentFromTarget = function (targetId, key, updatedDocument) {
        if (!this.isActiveTarget(targetId)) {
            return;
        }
        var targetState = this.ensureTargetState(targetId);
        if (this.targetContainsDocument(targetId, key)) {
            targetState.addDocumentChange(key, 1 /* Removed */);
        }
        else {
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            targetState.removeDocumentChange(key);
        }
        this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(key, this.ensureDocumentTargetMapping(key).delete(targetId));
        if (updatedDocument) {
            this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(key, updatedDocument);
        }
    };
    WatchChangeAggregator.prototype.removeTarget = function (targetId) {
        this.targetStates.delete(targetId);
    };
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    WatchChangeAggregator.prototype.getCurrentDocumentCountForTarget = function (targetId) {
        var targetState = this.ensureTargetState(targetId);
        var targetChange = targetState.toTargetChange();
        return (this.metadataProvider.getRemoteKeysForTarget(targetId).size +
            targetChange.addedDocuments.size -
            targetChange.removedDocuments.size);
    };
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    WatchChangeAggregator.prototype.recordPendingTargetRequest = function (targetId) {
        // For each request we get we need to record we need a response for it.
        var targetState = this.ensureTargetState(targetId);
        targetState.recordPendingTargetRequest();
    };
    WatchChangeAggregator.prototype.ensureTargetState = function (targetId) {
        var result = this.targetStates.get(targetId);
        if (!result) {
            result = new TargetState();
            this.targetStates.set(targetId, result);
        }
        return result;
    };
    WatchChangeAggregator.prototype.ensureDocumentTargetMapping = function (key) {
        var targetMapping = this.pendingDocumentTargetMapping.get(key);
        if (!targetMapping) {
            targetMapping = new SortedSet(primitiveComparator);
            this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(key, targetMapping);
        }
        return targetMapping;
    };
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    WatchChangeAggregator.prototype.isActiveTarget = function (targetId) {
        var targetActive = this.targetDataForActiveTarget(targetId) !== null;
        if (!targetActive) {
            logDebug(LOG_TAG$5, 'Detected inactive target', targetId);
        }
        return targetActive;
    };
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    WatchChangeAggregator.prototype.targetDataForActiveTarget = function (targetId) {
        var targetState = this.targetStates.get(targetId);
        return targetState && targetState.isPending
            ? null
            : this.metadataProvider.getTargetDataForTarget(targetId);
    };
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    WatchChangeAggregator.prototype.resetTarget = function (targetId) {
        var _this = this;
        debugAssert(!this.targetStates.get(targetId).isPending, 'Should only reset active targets');
        this.targetStates.set(targetId, new TargetState());
        // Trigger removal for any documents currently mapped to this target.
        // These removals will be part of the initial snapshot if Watch does not
        // resend these documents.
        var existingKeys = this.metadataProvider.getRemoteKeysForTarget(targetId);
        existingKeys.forEach(function (key) {
            _this.removeDocumentFromTarget(targetId, key, /*updatedDocument=*/ null);
        });
    };
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    WatchChangeAggregator.prototype.targetContainsDocument = function (targetId, key) {
        var existingKeys = this.metadataProvider.getRemoteKeysForTarget(targetId);
        return existingKeys.has(key);
    };
    return WatchChangeAggregator;
}());
function documentTargetMap() {
    return new SortedMap(DocumentKey.comparator);
}
function snapshotChangesMap() {
    return new SortedMap(DocumentKey.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG$6 = 'RemoteStore';
// TODO(b/35853402): Negotiate this with the stream.
var MAX_PENDING_WRITES = 10;
/**
 * RemoteStore - An interface to remotely stored data, basically providing a
 * wrapper around the Datastore that is more reliable for the rest of the
 * system.
 *
 * RemoteStore is responsible for maintaining the connection to the server.
 * - maintaining a list of active listens.
 * - reconnecting when the connection is dropped.
 * - resuming all the active listens on reconnect.
 *
 * RemoteStore handles all incoming events from the Datastore.
 * - listening to the watch stream and repackaging the events as RemoteEvents
 * - notifying SyncEngine of any changes to the active listens.
 *
 * RemoteStore takes writes from other components and handles them reliably.
 * - pulling pending mutations from LocalStore and sending them to Datastore.
 * - retrying mutations that failed because of network problems.
 * - acking mutations to the SyncEngine once they are accepted or rejected.
 */
var RemoteStore = /** @class */ (function () {
    function RemoteStore(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    localStore, 
    /** The client-side proxy for interacting with the backend. */
    datastore, asyncQueue, onlineStateHandler, connectivityMonitor) {
        var _this = this;
        this.localStore = localStore;
        this.datastore = datastore;
        this.asyncQueue = asyncQueue;
        /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
        this.writePipeline = [];
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.listenTargets = new Map();
        this.watchChangeAggregator = null;
        /**
         * Set to true by enableNetwork() and false by disableNetwork() and indicates
         * the user-preferred network state.
         */
        this.networkEnabled = false;
        this.isPrimary = false;
        /**
         * When set to `true`, the network was taken offline due to an IndexedDB
         * failure. The state is flipped to `false` when access becomes available
         * again.
         */
        this.indexedDbFailed = false;
        this.connectivityMonitor = connectivityMonitor;
        this.connectivityMonitor.addCallback(function (status) {
            asyncQueue.enqueueAndForget(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
                return tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!this.canUseNetwork()) return [3 /*break*/, 2];
                            logDebug(LOG_TAG$6, 'Restarting streams for network reachability change.');
                            return [4 /*yield*/, this.restartNetwork()];
                        case 1:
                            _c.sent();
                            _c.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        });
        this.onlineStateTracker = new OnlineStateTracker(asyncQueue, onlineStateHandler);
        // Create streams (but note they're not started yet).
        this.watchStream = newPersistentWatchStream(this.datastore, asyncQueue, {
            onOpen: this.onWatchStreamOpen.bind(this),
            onClose: this.onWatchStreamClose.bind(this),
            onWatchChange: this.onWatchStreamChange.bind(this)
        });
        this.writeStream = newPersistentWriteStream(this.datastore, asyncQueue, {
            onOpen: this.onWriteStreamOpen.bind(this),
            onClose: this.onWriteStreamClose.bind(this),
            onHandshakeComplete: this.onWriteHandshakeComplete.bind(this),
            onMutationResult: this.onMutationResult.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */
    RemoteStore.prototype.start = function () {
        return this.enableNetwork();
    };
    /** Re-enables the network. Idempotent. */
    RemoteStore.prototype.enableNetwork = function () {
        this.networkEnabled = true;
        return this.enableNetworkInternal();
    };
    RemoteStore.prototype.enableNetworkInternal = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _c;
            return tslib.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.canUseNetwork()) return [3 /*break*/, 3];
                        _c = this.writeStream;
                        return [4 /*yield*/, this.localStore.getLastStreamToken()];
                    case 1:
                        _c.lastStreamToken = _d.sent();
                        if (this.shouldStartWatchStream()) {
                            this.startWatchStream();
                        }
                        else {
                            this.onlineStateTracker.set("Unknown" /* Unknown */);
                        }
                        // This will start the write stream if necessary.
                        return [4 /*yield*/, this.fillWritePipeline()];
                    case 2:
                        // This will start the write stream if necessary.
                        _d.sent();
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    RemoteStore.prototype.disableNetwork = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.networkEnabled = false;
                        return [4 /*yield*/, this.disableNetworkInternal()];
                    case 1:
                        _c.sent();
                        // Set the OnlineState to Offline so get()s return from cache, etc.
                        this.onlineStateTracker.set("Offline" /* Offline */);
                        return [2 /*return*/];
                }
            });
        });
    };
    RemoteStore.prototype.disableNetworkInternal = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.writeStream.stop()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.watchStream.stop()];
                    case 2:
                        _c.sent();
                        if (this.writePipeline.length > 0) {
                            logDebug(LOG_TAG$6, "Stopping write stream with " + this.writePipeline.length + " pending writes");
                            this.writePipeline = [];
                        }
                        this.cleanUpWatchStreamState();
                        return [2 /*return*/];
                }
            });
        });
    };
    RemoteStore.prototype.shutdown = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        logDebug(LOG_TAG$6, 'RemoteStore shutting down.');
                        this.networkEnabled = false;
                        return [4 /*yield*/, this.disableNetworkInternal()];
                    case 1:
                        _c.sent();
                        this.connectivityMonitor.shutdown();
                        // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                        // triggering spurious listener events with cached data, etc.
                        this.onlineStateTracker.set("Unknown" /* Unknown */);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    RemoteStore.prototype.listen = function (targetData) {
        if (this.listenTargets.has(targetData.targetId)) {
            return;
        }
        // Mark this as something the client is currently listening for.
        this.listenTargets.set(targetData.targetId, targetData);
        if (this.shouldStartWatchStream()) {
            // The listen will be sent in onWatchStreamOpen
            this.startWatchStream();
        }
        else if (this.watchStream.isOpen()) {
            this.sendWatchRequest(targetData);
        }
    };
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    RemoteStore.prototype.unlisten = function (targetId) {
        debugAssert(this.listenTargets.has(targetId), "unlisten called on target no currently watched: " + targetId);
        this.listenTargets.delete(targetId);
        if (this.watchStream.isOpen()) {
            this.sendUnwatchRequest(targetId);
        }
        if (this.listenTargets.size === 0) {
            if (this.watchStream.isOpen()) {
                this.watchStream.markIdle();
            }
            else if (this.canUseNetwork()) {
                // Revert to OnlineState.Unknown if the watch stream is not open and we
                // have no listeners, since without any listens to send we cannot
                // confirm if the stream is healthy and upgrade to OnlineState.Online.
                this.onlineStateTracker.set("Unknown" /* Unknown */);
            }
        }
    };
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */
    RemoteStore.prototype.getTargetDataForTarget = function (targetId) {
        return this.listenTargets.get(targetId) || null;
    };
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */
    RemoteStore.prototype.getRemoteKeysForTarget = function (targetId) {
        return this.syncEngine.getRemoteKeysForTarget(targetId);
    };
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    RemoteStore.prototype.sendWatchRequest = function (targetData) {
        this.watchChangeAggregator.recordPendingTargetRequest(targetData.targetId);
        this.watchStream.watch(targetData);
    };
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    RemoteStore.prototype.sendUnwatchRequest = function (targetId) {
        this.watchChangeAggregator.recordPendingTargetRequest(targetId);
        this.watchStream.unwatch(targetId);
    };
    RemoteStore.prototype.startWatchStream = function () {
        debugAssert(this.shouldStartWatchStream(), 'startWatchStream() called when shouldStartWatchStream() is false.');
        this.watchChangeAggregator = new WatchChangeAggregator(this);
        this.watchStream.start();
        this.onlineStateTracker.handleWatchStreamStart();
    };
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    RemoteStore.prototype.shouldStartWatchStream = function () {
        return (this.canUseNetwork() &&
            !this.watchStream.isStarted() &&
            this.listenTargets.size > 0);
    };
    RemoteStore.prototype.canUseNetwork = function () {
        return !this.indexedDbFailed && this.isPrimary && this.networkEnabled;
    };
    RemoteStore.prototype.cleanUpWatchStreamState = function () {
        this.watchChangeAggregator = null;
    };
    RemoteStore.prototype.onWatchStreamOpen = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib.__generator(this, function (_c) {
                this.listenTargets.forEach(function (targetData, targetId) {
                    _this.sendWatchRequest(targetData);
                });
                return [2 /*return*/];
            });
        });
    };
    RemoteStore.prototype.onWatchStreamClose = function (error) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                if (error === undefined) {
                    // Graceful stop (due to stop() or idle timeout). Make sure that's
                    // desirable.
                    debugAssert(!this.shouldStartWatchStream(), 'Watch stream was stopped gracefully while still needed.');
                }
                this.cleanUpWatchStreamState();
                // If we still need the watch stream, retry the connection.
                if (this.shouldStartWatchStream()) {
                    this.onlineStateTracker.handleWatchStreamFailure(error);
                    this.startWatchStream();
                }
                else {
                    // No need to restart watch stream because there are no active targets.
                    // The online state is set to unknown because there is no active attempt
                    // at establishing a connection
                    this.onlineStateTracker.set("Unknown" /* Unknown */);
                }
                return [2 /*return*/];
            });
        });
    };
    RemoteStore.prototype.onWatchStreamChange = function (watchChange, snapshotVersion) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var e_2, lastRemoteSnapshotVersion, e_3;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // Mark the client as online since we got a message from the server
                        this.onlineStateTracker.set("Online" /* Online */);
                        if (!(watchChange instanceof WatchTargetChange &&
                            watchChange.state === 2 /* Removed */ &&
                            watchChange.cause)) return [3 /*break*/, 6];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.handleTargetError(watchChange)];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_2 = _c.sent();
                        logDebug(LOG_TAG$6, 'Failed to remove targets %s: %s ', watchChange.targetIds.join(','), e_2);
                        return [4 /*yield*/, this.disableNetworkUntilRecovery(e_2)];
                    case 4:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                    case 6:
                        if (watchChange instanceof DocumentWatchChange) {
                            this.watchChangeAggregator.handleDocumentChange(watchChange);
                        }
                        else if (watchChange instanceof ExistenceFilterChange) {
                            this.watchChangeAggregator.handleExistenceFilter(watchChange);
                        }
                        else {
                            debugAssert(watchChange instanceof WatchTargetChange, 'Expected watchChange to be an instance of WatchTargetChange');
                            this.watchChangeAggregator.handleTargetChange(watchChange);
                        }
                        if (!!snapshotVersion.isEqual(SnapshotVersion.min())) return [3 /*break*/, 13];
                        _c.label = 7;
                    case 7:
                        _c.trys.push([7, 11, , 13]);
                        return [4 /*yield*/, this.localStore.getLastRemoteSnapshotVersion()];
                    case 8:
                        lastRemoteSnapshotVersion = _c.sent();
                        if (!(snapshotVersion.compareTo(lastRemoteSnapshotVersion) >= 0)) return [3 /*break*/, 10];
                        // We have received a target change with a global snapshot if the snapshot
                        // version is not equal to SnapshotVersion.min().
                        return [4 /*yield*/, this.raiseWatchSnapshot(snapshotVersion)];
                    case 9:
                        // We have received a target change with a global snapshot if the snapshot
                        // version is not equal to SnapshotVersion.min().
                        _c.sent();
                        _c.label = 10;
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_3 = _c.sent();
                        logDebug(LOG_TAG$6, 'Failed to raise snapshot:', e_3);
                        return [4 /*yield*/, this.disableNetworkUntilRecovery(e_3)];
                    case 12:
                        _c.sent();
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Recovery logic for IndexedDB errors that takes the network offline until
     * IndexedDb probing succeeds. Retries are scheduled with backoff using
     * `enqueueRetryable()`.
     */
    RemoteStore.prototype.disableNetworkUntilRecovery = function (e) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(e.name === 'IndexedDbTransactionError')) return [3 /*break*/, 2];
                        debugAssert(!this.indexedDbFailed, 'Unexpected network event when IndexedDB was marked failed.');
                        this.indexedDbFailed = true;
                        // Disable network and raise offline snapshots
                        return [4 /*yield*/, this.disableNetworkInternal()];
                    case 1:
                        // Disable network and raise offline snapshots
                        _c.sent();
                        this.onlineStateTracker.set("Offline" /* Offline */);
                        // Probe IndexedDB periodically and re-enable network
                        this.asyncQueue.enqueueRetryable(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
                            return tslib.__generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        logDebug(LOG_TAG$6, 'Retrying IndexedDB access');
                                        // Issue a simple read operation to determine if IndexedDB recovered.
                                        // Ideally, we would expose a health check directly on SimpleDb, but
                                        // RemoteStore only has access to persistence through LocalStore.
                                        return [4 /*yield*/, this.localStore.getLastRemoteSnapshotVersion()];
                                    case 1:
                                        // Issue a simple read operation to determine if IndexedDB recovered.
                                        // Ideally, we would expose a health check directly on SimpleDb, but
                                        // RemoteStore only has access to persistence through LocalStore.
                                        _c.sent();
                                        this.indexedDbFailed = false;
                                        return [4 /*yield*/, this.enableNetworkInternal()];
                                    case 2:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 2: throw e;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    RemoteStore.prototype.raiseWatchSnapshot = function (snapshotVersion) {
        var _this = this;
        debugAssert(!snapshotVersion.isEqual(SnapshotVersion.min()), "Can't raise event for unknown SnapshotVersion");
        var remoteEvent = this.watchChangeAggregator.createRemoteEvent(snapshotVersion);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        remoteEvent.targetChanges.forEach(function (change, targetId) {
            if (change.resumeToken.approximateByteSize() > 0) {
                var targetData = _this.listenTargets.get(targetId);
                // A watched target might have been removed already.
                if (targetData) {
                    _this.listenTargets.set(targetId, targetData.withResumeToken(change.resumeToken, snapshotVersion));
                }
            }
        });
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        remoteEvent.targetMismatches.forEach(function (targetId) {
            var targetData = _this.listenTargets.get(targetId);
            if (!targetData) {
                // A watched target might have been removed already.
                return;
            }
            // Clear the resume token for the target, since we're in a known mismatch
            // state.
            _this.listenTargets.set(targetId, targetData.withResumeToken(ByteString.EMPTY_BYTE_STRING, targetData.snapshotVersion));
            // Cause a hard reset by unwatching and rewatching immediately, but
            // deliberately don't send a resume token so that we get a full update.
            _this.sendUnwatchRequest(targetId);
            // Mark the target we send as being on behalf of an existence filter
            // mismatch, but don't actually retain that in listenTargets. This ensures
            // that we flag the first re-listen this way without impacting future
            // listens of this target (that might happen e.g. on reconnect).
            var requestTargetData = new TargetData(targetData.target, targetId, 1 /* ExistenceFilterMismatch */, targetData.sequenceNumber);
            _this.sendWatchRequest(requestTargetData);
        });
        // Finally raise remote event
        return this.syncEngine.applyRemoteEvent(remoteEvent);
    };
    /** Handles an error on a target */
    RemoteStore.prototype.handleTargetError = function (watchChange) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var error, _i, _c, targetId;
            return tslib.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        debugAssert(!!watchChange.cause, 'Handling target error without a cause');
                        error = watchChange.cause;
                        _i = 0, _c = watchChange.targetIds;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _c.length)) return [3 /*break*/, 4];
                        targetId = _c[_i];
                        if (!this.listenTargets.has(targetId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.syncEngine.rejectListen(targetId, error)];
                    case 2:
                        _d.sent();
                        this.listenTargets.delete(targetId);
                        this.watchChangeAggregator.removeTarget(targetId);
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    RemoteStore.prototype.fillWritePipeline = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var lastBatchIdRetrieved, batch;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.canAddToWritePipeline()) return [3 /*break*/, 4];
                        lastBatchIdRetrieved = this.writePipeline.length > 0
                            ? this.writePipeline[this.writePipeline.length - 1].batchId
                            : BATCHID_UNKNOWN;
                        return [4 /*yield*/, this.localStore.nextMutationBatch(lastBatchIdRetrieved)];
                    case 1:
                        batch = _c.sent();
                        if (!(batch === null)) return [3 /*break*/, 2];
                        if (this.writePipeline.length === 0) {
                            this.writeStream.markIdle();
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        this.addToWritePipeline(batch);
                        return [4 /*yield*/, this.fillWritePipeline()];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        if (this.shouldStartWriteStream()) {
                            this.startWriteStream();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    RemoteStore.prototype.canAddToWritePipeline = function () {
        return (this.canUseNetwork() && this.writePipeline.length < MAX_PENDING_WRITES);
    };
    // For testing
    RemoteStore.prototype.outstandingWrites = function () {
        return this.writePipeline.length;
    };
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    RemoteStore.prototype.addToWritePipeline = function (batch) {
        debugAssert(this.canAddToWritePipeline(), 'addToWritePipeline called when pipeline is full');
        this.writePipeline.push(batch);
        if (this.writeStream.isOpen() && this.writeStream.handshakeComplete) {
            this.writeStream.writeMutations(batch.mutations);
        }
    };
    RemoteStore.prototype.shouldStartWriteStream = function () {
        return (this.canUseNetwork() &&
            !this.writeStream.isStarted() &&
            this.writePipeline.length > 0);
    };
    RemoteStore.prototype.startWriteStream = function () {
        debugAssert(this.shouldStartWriteStream(), 'startWriteStream() called when shouldStartWriteStream() is false.');
        this.writeStream.start();
    };
    RemoteStore.prototype.onWriteStreamOpen = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                this.writeStream.writeHandshake();
                return [2 /*return*/];
            });
        });
    };
    RemoteStore.prototype.onWriteHandshakeComplete = function () {
        var _this = this;
        // Record the stream token.
        return this.localStore
            .setLastStreamToken(this.writeStream.lastStreamToken)
            .then(function () {
            // Send the write pipeline now that the stream is established.
            for (var _i = 0, _c = _this.writePipeline; _i < _c.length; _i++) {
                var batch = _c[_i];
                _this.writeStream.writeMutations(batch.mutations);
            }
        })
            .catch(ignoreIfPrimaryLeaseLoss);
    };
    RemoteStore.prototype.onMutationResult = function (commitVersion, results) {
        var _this = this;
        // This is a response to a write containing mutations and should be
        // correlated to the first write in our write pipeline.
        debugAssert(this.writePipeline.length > 0, 'Got result for empty write pipeline');
        var batch = this.writePipeline.shift();
        var success = MutationBatchResult.from(batch, commitVersion, results, this.writeStream.lastStreamToken);
        return this.syncEngine.applySuccessfulWrite(success).then(function () {
            // It's possible that with the completion of this mutation another
            // slot has freed up.
            return _this.fillWritePipeline();
        });
    };
    RemoteStore.prototype.onWriteStreamClose = function (error) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (error === undefined) {
                            // Graceful stop (due to stop() or idle timeout). Make sure that's
                            // desirable.
                            debugAssert(!this.shouldStartWriteStream(), 'Write stream was stopped gracefully while still needed.');
                        }
                        if (!(error && this.writePipeline.length > 0)) return [3 /*break*/, 5];
                        if (!this.writeStream.handshakeComplete) return [3 /*break*/, 2];
                        // This error affects the actual write.
                        return [4 /*yield*/, this.handleWriteError(error)];
                    case 1:
                        // This error affects the actual write.
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 2: 
                    // If there was an error before the handshake has finished, it's
                    // possible that the server is unable to process the stream token
                    // we're sending. (Perhaps it's too old?)
                    return [4 /*yield*/, this.handleHandshakeError(error)];
                    case 3:
                        // If there was an error before the handshake has finished, it's
                        // possible that the server is unable to process the stream token
                        // we're sending. (Perhaps it's too old?)
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        // The write stream might have been started by refilling the write
                        // pipeline for failed writes
                        if (this.shouldStartWriteStream()) {
                            this.startWriteStream();
                        }
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RemoteStore.prototype.handleHandshakeError = function (error) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                // Reset the token if it's a permanent error, signaling the write stream is
                // no longer valid. Note that the handshake does not count as a write: see
                // comments on isPermanentWriteError for details.
                if (isPermanentError(error.code)) {
                    logDebug(LOG_TAG$6, 'RemoteStore error before completed handshake; resetting stream token: ', this.writeStream.lastStreamToken);
                    this.writeStream.lastStreamToken = ByteString.EMPTY_BYTE_STRING;
                    return [2 /*return*/, this.localStore
                            .setLastStreamToken(ByteString.EMPTY_BYTE_STRING)
                            .catch(ignoreIfPrimaryLeaseLoss)];
                }
                return [2 /*return*/];
            });
        });
    };
    RemoteStore.prototype.handleWriteError = function (error) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var batch;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                // Only handle permanent errors here. If it's transient, just let the retry
                // logic kick in.
                if (isPermanentWriteError(error.code)) {
                    batch = this.writePipeline.shift();
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    this.writeStream.inhibitBackoff();
                    return [2 /*return*/, this.syncEngine
                            .rejectFailedWrite(batch.batchId, error)
                            .then(function () {
                            // It's possible that with the completion of this mutation
                            // another slot has freed up.
                            return _this.fillWritePipeline();
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    RemoteStore.prototype.createTransaction = function () {
        return new Transaction(this.datastore);
    };
    RemoteStore.prototype.restartNetwork = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.networkEnabled = false;
                        return [4 /*yield*/, this.disableNetworkInternal()];
                    case 1:
                        _c.sent();
                        this.onlineStateTracker.set("Unknown" /* Unknown */);
                        return [4 /*yield*/, this.enableNetwork()];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RemoteStore.prototype.handleCredentialChange = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.canUseNetwork()) return [3 /*break*/, 2];
                        // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                        // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                        // (since mutations are per-user).
                        logDebug(LOG_TAG$6, 'RemoteStore restarting streams for new credential');
                        return [4 /*yield*/, this.restartNetwork()];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    RemoteStore.prototype.applyPrimaryState = function (isPrimary) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isPrimary = isPrimary;
                        if (!(isPrimary && this.networkEnabled)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.enableNetwork()];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!!isPrimary) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.disableNetworkInternal()];
                    case 3:
                        _c.sent();
                        this.onlineStateTracker.set("Unknown" /* Unknown */);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return RemoteStore;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG$7 = 'EventManager';
/**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */
var QueryListenersInfo = /** @class */ (function () {
    function QueryListenersInfo() {
        this.viewSnap = undefined;
        this.listeners = [];
    }
    return QueryListenersInfo;
}());
/**
 * EventManager is responsible for mapping queries to query event emitters.
 * It handles "fan-out". -- Identical queries will re-use the same watch on the
 * backend.
 */
var EventManager = /** @class */ (function () {
    function EventManager(syncEngine) {
        this.syncEngine = syncEngine;
        this.queries = new ObjectMap(function (q) { return q.canonicalId(); });
        this.onlineState = "Unknown" /* Unknown */;
        this.snapshotsInSyncListeners = new Set();
        this.syncEngine.subscribe(this);
    }
    EventManager.prototype.listen = function (listener) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var query, firstListen, queryInfo, _c, e_4, msg, raisedEvent, raisedEvent_1;
            return tslib.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        query = listener.query;
                        firstListen = false;
                        queryInfo = this.queries.get(query);
                        if (!queryInfo) {
                            firstListen = true;
                            queryInfo = new QueryListenersInfo();
                        }
                        if (!firstListen) return [3 /*break*/, 4];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        _c = queryInfo;
                        return [4 /*yield*/, this.syncEngine.listen(query)];
                    case 2:
                        _c.viewSnap = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _d.sent();
                        msg = "Initialization of query '" + query + "' failed: " + e_4;
                        logError(LOG_TAG$7, msg);
                        if (e_4.name === 'IndexedDbTransactionError') {
                            listener.onError(new FirestoreError(Code.UNAVAILABLE, msg));
                        }
                        else {
                            throw e_4;
                        }
                        return [2 /*return*/];
                    case 4:
                        this.queries.set(query, queryInfo);
                        queryInfo.listeners.push(listener);
                        raisedEvent = listener.applyOnlineStateChange(this.onlineState);
                        debugAssert(!raisedEvent, "applyOnlineStateChange() shouldn't raise an event for brand-new listeners.");
                        if (queryInfo.viewSnap) {
                            raisedEvent_1 = listener.onViewSnapshot(queryInfo.viewSnap);
                            if (raisedEvent_1) {
                                this.raiseSnapshotsInSyncEvent();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EventManager.prototype.unlisten = function (listener) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var query, lastListen, queryInfo, i;
            return tslib.__generator(this, function (_c) {
                query = listener.query;
                lastListen = false;
                queryInfo = this.queries.get(query);
                if (queryInfo) {
                    i = queryInfo.listeners.indexOf(listener);
                    if (i >= 0) {
                        queryInfo.listeners.splice(i, 1);
                        lastListen = queryInfo.listeners.length === 0;
                    }
                }
                if (lastListen) {
                    this.queries.delete(query);
                    return [2 /*return*/, this.syncEngine.unlisten(query)];
                }
                return [2 /*return*/];
            });
        });
    };
    EventManager.prototype.onWatchChange = function (viewSnaps) {
        var raisedEvent = false;
        for (var _i = 0, viewSnaps_1 = viewSnaps; _i < viewSnaps_1.length; _i++) {
            var viewSnap = viewSnaps_1[_i];
            var query = viewSnap.query;
            var queryInfo = this.queries.get(query);
            if (queryInfo) {
                for (var _c = 0, _d = queryInfo.listeners; _c < _d.length; _c++) {
                    var listener = _d[_c];
                    if (listener.onViewSnapshot(viewSnap)) {
                        raisedEvent = true;
                    }
                }
                queryInfo.viewSnap = viewSnap;
            }
        }
        if (raisedEvent) {
            this.raiseSnapshotsInSyncEvent();
        }
    };
    EventManager.prototype.onWatchError = function (query, error) {
        var queryInfo = this.queries.get(query);
        if (queryInfo) {
            for (var _i = 0, _c = queryInfo.listeners; _i < _c.length; _i++) {
                var listener = _c[_i];
                listener.onError(error);
            }
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
        this.queries.delete(query);
    };
    EventManager.prototype.onOnlineStateChange = function (onlineState) {
        this.onlineState = onlineState;
        var raisedEvent = false;
        this.queries.forEach(function (_, queryInfo) {
            for (var _i = 0, _c = queryInfo.listeners; _i < _c.length; _i++) {
                var listener = _c[_i];
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                if (listener.applyOnlineStateChange(onlineState)) {
                    raisedEvent = true;
                }
            }
        });
        if (raisedEvent) {
            this.raiseSnapshotsInSyncEvent();
        }
    };
    EventManager.prototype.addSnapshotsInSyncListener = function (observer) {
        this.snapshotsInSyncListeners.add(observer);
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        observer.next();
    };
    EventManager.prototype.removeSnapshotsInSyncListener = function (observer) {
        this.snapshotsInSyncListeners.delete(observer);
    };
    // Call all global snapshot listeners that have been set.
    EventManager.prototype.raiseSnapshotsInSyncEvent = function () {
        this.snapshotsInSyncListeners.forEach(function (observer) {
            observer.next();
        });
    };
    return EventManager;
}());
/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */
var QueryListener = /** @class */ (function () {
    function QueryListener(query, queryObserver, options) {
        this.query = query;
        this.queryObserver = queryObserver;
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.raisedInitialEvent = false;
        this.snap = null;
        this.onlineState = "Unknown" /* Unknown */;
        this.options = options || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */
    QueryListener.prototype.onViewSnapshot = function (snap) {
        debugAssert(snap.docChanges.length > 0 || snap.syncStateChanged, 'We got a new snapshot with no changes?');
        if (!this.options.includeMetadataChanges) {
            // Remove the metadata only changes.
            var docChanges = [];
            for (var _i = 0, _c = snap.docChanges; _i < _c.length; _i++) {
                var docChange = _c[_i];
                if (docChange.type !== 3 /* Metadata */) {
                    docChanges.push(docChange);
                }
            }
            snap = new ViewSnapshot(snap.query, snap.docs, snap.oldDocs, docChanges, snap.mutatedKeys, snap.fromCache, snap.syncStateChanged, 
            /* excludesMetadataChanges= */ true);
        }
        var raisedEvent = false;
        if (!this.raisedInitialEvent) {
            if (this.shouldRaiseInitialEvent(snap, this.onlineState)) {
                this.raiseInitialEvent(snap);
                raisedEvent = true;
            }
        }
        else if (this.shouldRaiseEvent(snap)) {
            this.queryObserver.next(snap);
            raisedEvent = true;
        }
        this.snap = snap;
        return raisedEvent;
    };
    QueryListener.prototype.onError = function (error) {
        this.queryObserver.error(error);
    };
    /** Returns whether a snapshot was raised. */
    QueryListener.prototype.applyOnlineStateChange = function (onlineState) {
        this.onlineState = onlineState;
        var raisedEvent = false;
        if (this.snap &&
            !this.raisedInitialEvent &&
            this.shouldRaiseInitialEvent(this.snap, onlineState)) {
            this.raiseInitialEvent(this.snap);
            raisedEvent = true;
        }
        return raisedEvent;
    };
    QueryListener.prototype.shouldRaiseInitialEvent = function (snap, onlineState) {
        debugAssert(!this.raisedInitialEvent, 'Determining whether to raise first event but already had first event');
        // Always raise the first event when we're synced
        if (!snap.fromCache) {
            return true;
        }
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
        var maybeOnline = onlineState !== "Offline" /* Offline */;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
        if (this.options.waitForSyncWhenOnline && maybeOnline) {
            debugAssert(snap.fromCache, 'Waiting for sync, but snapshot is not from cache');
            return false;
        }
        // Raise data from cache if we have any documents or we are offline
        return !snap.docs.isEmpty() || onlineState === "Offline" /* Offline */;
    };
    QueryListener.prototype.shouldRaiseEvent = function (snap) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (snap.docChanges.length > 0) {
            return true;
        }
        var hasPendingWritesChanged = this.snap && this.snap.hasPendingWrites !== snap.hasPendingWrites;
        if (snap.syncStateChanged || hasPendingWritesChanged) {
            return this.options.includeMetadataChanges === true;
        }
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        return false;
    };
    QueryListener.prototype.raiseInitialEvent = function (snap) {
        debugAssert(!this.raisedInitialEvent, 'Trying to raise initial events for second time');
        snap = ViewSnapshot.fromInitialDocuments(snap.query, snap.docs, snap.mutatedKeys, snap.fromCache);
        this.raisedInitialEvent = true;
        this.queryObserver.next(snap);
    };
    return QueryListener;
}());
/**
 * @license
 * Copyright 2018 Google LLC
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
var LruParams = /** @class */ (function () {
    function LruParams(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    cacheSizeCollectionThreshold, 
    // The percentage of sequence numbers that we will attempt to collect
    percentileToCollect, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    maximumSequenceNumbersToCollect) {
        this.cacheSizeCollectionThreshold = cacheSizeCollectionThreshold;
        this.percentileToCollect = percentileToCollect;
        this.maximumSequenceNumbersToCollect = maximumSequenceNumbersToCollect;
    }
    LruParams.withCacheSize = function (cacheSize) {
        return new LruParams(cacheSize, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
    };
    return LruParams;
}());
LruParams.COLLECTION_DISABLED = -1;
LruParams.MINIMUM_CACHE_SIZE_BYTES = 1 * 1024 * 1024;
LruParams.DEFAULT_CACHE_SIZE_BYTES = 40 * 1024 * 1024;
LruParams.DEFAULT_COLLECTION_PERCENTILE = 10;
LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1000;
LruParams.DEFAULT = new LruParams(LruParams.DEFAULT_CACHE_SIZE_BYTES, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
LruParams.DISABLED = new LruParams(LruParams.COLLECTION_DISABLED, 0, 0);
/**
 * @license
 * Copyright 2019 Google LLC
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
// TOOD(b/140938512): Drop SimpleQueryEngine and rename IndexFreeQueryEngine.
/**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. The IndexFreeQueryEngine optimizes query execution by only
 * reading the documents that previously matched a query plus any documents that were
 * edited after the query was last listened to.
 *
 * There are some cases where Index-Free queries are not guaranteed to produce
 * the same results as full collection scans. In these cases, the
 * IndexFreeQueryEngine falls back to full query processing. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of Limbo documents.
 */
var IndexFreeQueryEngine = /** @class */ (function () {
    function IndexFreeQueryEngine() {
    }
    IndexFreeQueryEngine.prototype.setLocalDocumentsView = function (localDocuments) {
        this.localDocumentsView = localDocuments;
    };
    IndexFreeQueryEngine.prototype.getDocumentsMatchingQuery = function (transaction, query, lastLimboFreeSnapshotVersion, remoteKeys) {
        var _this = this;
        debugAssert(this.localDocumentsView !== undefined, 'setLocalDocumentsView() not called');
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
        if (query.matchesAllDocuments()) {
            return this.executeFullCollectionScan(transaction, query);
        }
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        if (lastLimboFreeSnapshotVersion.isEqual(SnapshotVersion.min())) {
            return this.executeFullCollectionScan(transaction, query);
        }
        return this.localDocumentsView.getDocuments(transaction, remoteKeys).next(function (documents) {
            var previousResults = _this.applyQuery(query, documents);
            if ((query.hasLimitToFirst() || query.hasLimitToLast()) &&
                _this.needsRefill(query.limitType, previousResults, remoteKeys, lastLimboFreeSnapshotVersion)) {
                return _this.executeFullCollectionScan(transaction, query);
            }
            if (getLogLevel() <= logger.LogLevel.DEBUG) {
                logDebug('IndexFreeQueryEngine', 'Re-using previous result from %s to execute query: %s', lastLimboFreeSnapshotVersion.toString(), query.toString());
            }
            // Retrieve all results for documents that were updated since the last
            // limbo-document free remote snapshot.
            return _this.localDocumentsView.getDocumentsMatchingQuery(transaction, query, lastLimboFreeSnapshotVersion).next(function (updatedResults) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                previousResults.forEach(function (doc) {
                    updatedResults = updatedResults.insert(doc.key, doc);
                });
                return updatedResults;
            });
        });
    };
    /** Applies the query filter and sorting to the provided documents.  */
    IndexFreeQueryEngine.prototype.applyQuery = function (query, documents) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var queryResults = new SortedSet(function (d1, d2) { return query.docComparator(d1, d2); });
        documents.forEach(function (_, maybeDoc) {
            if (maybeDoc instanceof Document && query.matches(maybeDoc)) {
                queryResults = queryResults.add(maybeDoc);
            }
        });
        return queryResults;
    };
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    IndexFreeQueryEngine.prototype.needsRefill = function (limitType, sortedPreviousResults, remoteKeys, limboFreeSnapshotVersion) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (remoteKeys.size !== sortedPreviousResults.size) {
            return true;
        }
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
        var docAtLimitEdge = limitType === "F" /* First */
            ? sortedPreviousResults.last()
            : sortedPreviousResults.first();
        if (!docAtLimitEdge) {
            // We don't need to refill the query if there were already no documents.
            return false;
        }
        return (docAtLimitEdge.hasPendingWrites ||
            docAtLimitEdge.version.compareTo(limboFreeSnapshotVersion) > 0);
    };
    IndexFreeQueryEngine.prototype.executeFullCollectionScan = function (transaction, query) {
        if (getLogLevel() <= logger.LogLevel.DEBUG) {
            logDebug('IndexFreeQueryEngine', 'Using full collection scan to execute query: %s', query.toString());
        }
        return this.localDocumentsView.getDocumentsMatchingQuery(transaction, query, SnapshotVersion.min());
    };
    return IndexFreeQueryEngine;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */
var RemoteDocumentChangeBuffer = /** @class */ (function () {
    function RemoteDocumentChangeBuffer() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.changes = new ObjectMap(function (key) { return key.toString(); });
        this.changesApplied = false;
    }
    Object.defineProperty(RemoteDocumentChangeBuffer.prototype, "readTime", {
        get: function () {
            debugAssert(this._readTime !== undefined, 'Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used.');
            return this._readTime;
        },
        set: function (value) {
            // Right now (for simplicity) we just track a single readTime for all the
            // added entries since we expect them to all be the same, but we could
            // rework to store per-entry readTimes if necessary.
            debugAssert(this._readTime === undefined || this._readTime.isEqual(value), 'All changes in a RemoteDocumentChangeBuffer must have the same read time');
            this._readTime = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    RemoteDocumentChangeBuffer.prototype.addEntry = function (maybeDocument, readTime) {
        this.assertNotApplied();
        this.readTime = readTime;
        this.changes.set(maybeDocument.key, maybeDocument);
    };
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    RemoteDocumentChangeBuffer.prototype.removeEntry = function (key, readTime) {
        this.assertNotApplied();
        if (readTime) {
            this.readTime = readTime;
        }
        this.changes.set(key, null);
    };
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    RemoteDocumentChangeBuffer.prototype.getEntry = function (transaction, documentKey) {
        this.assertNotApplied();
        var bufferedEntry = this.changes.get(documentKey);
        if (bufferedEntry !== undefined) {
            return PersistencePromise.resolve(bufferedEntry);
        }
        else {
            return this.getFromCache(transaction, documentKey);
        }
    };
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    RemoteDocumentChangeBuffer.prototype.getEntries = function (transaction, documentKeys) {
        return this.getAllFromCache(transaction, documentKeys);
    };
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    RemoteDocumentChangeBuffer.prototype.apply = function (transaction) {
        this.assertNotApplied();
        this.changesApplied = true;
        return this.applyChanges(transaction);
    };
    /** Helper to assert this.changes is not null  */
    RemoteDocumentChangeBuffer.prototype.assertNotApplied = function () {
        debugAssert(!this.changesApplied, 'Changes have already been applied.');
    };
    return RemoteDocumentChangeBuffer;
}());
/**
 * @license
 * Copyright 2019 Google LLC
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
/**
 * An in-memory implementation of IndexManager.
 */
var MemoryIndexManager = /** @class */ (function () {
    function MemoryIndexManager() {
        this.collectionParentIndex = new MemoryCollectionParentIndex();
    }
    MemoryIndexManager.prototype.addToCollectionParentIndex = function (transaction, collectionPath) {
        this.collectionParentIndex.add(collectionPath);
        return PersistencePromise.resolve();
    };
    MemoryIndexManager.prototype.getCollectionParents = function (transaction, collectionId) {
        return PersistencePromise.resolve(this.collectionParentIndex.getEntries(collectionId));
    };
    return MemoryIndexManager;
}());
/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
var MemoryCollectionParentIndex = /** @class */ (function () {
    function MemoryCollectionParentIndex() {
        this.index = {};
    }
    // Returns false if the entry already existed.
    MemoryCollectionParentIndex.prototype.add = function (collectionPath) {
        debugAssert(collectionPath.length % 2 === 1, 'Expected a collection path.');
        var collectionId = collectionPath.lastSegment();
        var parentPath = collectionPath.popLast();
        var existingParents = this.index[collectionId] ||
            new SortedSet(ResourcePath.comparator);
        var added = !existingParents.has(parentPath);
        this.index[collectionId] = existingParents.add(parentPath);
        return added;
    };
    MemoryCollectionParentIndex.prototype.has = function (collectionPath) {
        var collectionId = collectionPath.lastSegment();
        var parentPath = collectionPath.popLast();
        var existingParents = this.index[collectionId];
        return existingParents && existingParents.has(parentPath);
    };
    MemoryCollectionParentIndex.prototype.getEntries = function (collectionId) {
        var parentPaths = this.index[collectionId] ||
            new SortedSet(ResourcePath.comparator);
        return parentPaths.toArray();
    };
    return MemoryCollectionParentIndex;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var MemoryMutationQueue = /** @class */ (function () {
    function MemoryMutationQueue(indexManager, referenceDelegate) {
        this.indexManager = indexManager;
        this.referenceDelegate = referenceDelegate;
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this.mutationQueue = [];
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.nextBatchId = 1;
        /** The last received stream token from the server, used to acknowledge which
         * responses the client has processed. Stream tokens are opaque checkpoint
         * markers whose only real value is their inclusion in the next request.
         */
        this.lastStreamToken = ByteString.EMPTY_BYTE_STRING;
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.batchesByDocumentKey = new SortedSet(DocReference.compareByKey);
    }
    MemoryMutationQueue.prototype.checkEmpty = function (transaction) {
        return PersistencePromise.resolve(this.mutationQueue.length === 0);
    };
    MemoryMutationQueue.prototype.acknowledgeBatch = function (transaction, batch, streamToken) {
        var batchId = batch.batchId;
        var batchIndex = this.indexOfExistingBatchId(batchId, 'acknowledged');
        hardAssert(batchIndex === 0, 'Can only acknowledge the first batch in the mutation queue');
        // Verify that the batch in the queue is the one to be acknowledged.
        var check = this.mutationQueue[batchIndex];
        debugAssert(batchId === check.batchId, 'Queue ordering failure: expected batch ' +
            batchId +
            ', got batch ' +
            check.batchId);
        this.lastStreamToken = streamToken;
        return PersistencePromise.resolve();
    };
    MemoryMutationQueue.prototype.getLastStreamToken = function (transaction) {
        return PersistencePromise.resolve(this.lastStreamToken);
    };
    MemoryMutationQueue.prototype.setLastStreamToken = function (transaction, streamToken) {
        this.lastStreamToken = streamToken;
        return PersistencePromise.resolve();
    };
    MemoryMutationQueue.prototype.addMutationBatch = function (transaction, localWriteTime, baseMutations, mutations) {
        debugAssert(mutations.length !== 0, 'Mutation batches should not be empty');
        var batchId = this.nextBatchId;
        this.nextBatchId++;
        if (this.mutationQueue.length > 0) {
            var prior = this.mutationQueue[this.mutationQueue.length - 1];
            debugAssert(prior.batchId < batchId, 'Mutation batchIDs must be monotonically increasing order');
        }
        var batch = new MutationBatch(batchId, localWriteTime, baseMutations, mutations);
        this.mutationQueue.push(batch);
        // Track references by document key and index collection parents.
        for (var _i = 0, mutations_2 = mutations; _i < mutations_2.length; _i++) {
            var mutation = mutations_2[_i];
            this.batchesByDocumentKey = this.batchesByDocumentKey.add(new DocReference(mutation.key, batchId));
            this.indexManager.addToCollectionParentIndex(transaction, mutation.key.path.popLast());
        }
        return PersistencePromise.resolve(batch);
    };
    MemoryMutationQueue.prototype.lookupMutationBatch = function (transaction, batchId) {
        return PersistencePromise.resolve(this.findMutationBatch(batchId));
    };
    MemoryMutationQueue.prototype.getNextMutationBatchAfterBatchId = function (transaction, batchId) {
        var nextBatchId = batchId + 1;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
        var rawIndex = this.indexOfBatchId(nextBatchId);
        var index = rawIndex < 0 ? 0 : rawIndex;
        return PersistencePromise.resolve(this.mutationQueue.length > index ? this.mutationQueue[index] : null);
    };
    MemoryMutationQueue.prototype.getHighestUnacknowledgedBatchId = function () {
        return PersistencePromise.resolve(this.mutationQueue.length === 0 ? BATCHID_UNKNOWN : this.nextBatchId - 1);
    };
    MemoryMutationQueue.prototype.getAllMutationBatches = function (transaction) {
        return PersistencePromise.resolve(this.mutationQueue.slice());
    };
    MemoryMutationQueue.prototype.getAllMutationBatchesAffectingDocumentKey = function (transaction, documentKey) {
        var _this = this;
        var start = new DocReference(documentKey, 0);
        var end = new DocReference(documentKey, Number.POSITIVE_INFINITY);
        var result = [];
        this.batchesByDocumentKey.forEachInRange([start, end], function (ref) {
            debugAssert(documentKey.isEqual(ref.key), "Should only iterate over a single key's batches");
            var batch = _this.findMutationBatch(ref.targetOrBatchId);
            debugAssert(batch !== null, 'Batches in the index must exist in the main table');
            result.push(batch);
        });
        return PersistencePromise.resolve(result);
    };
    MemoryMutationQueue.prototype.getAllMutationBatchesAffectingDocumentKeys = function (transaction, documentKeys) {
        var _this = this;
        var uniqueBatchIDs = new SortedSet(primitiveComparator);
        documentKeys.forEach(function (documentKey) {
            var start = new DocReference(documentKey, 0);
            var end = new DocReference(documentKey, Number.POSITIVE_INFINITY);
            _this.batchesByDocumentKey.forEachInRange([start, end], function (ref) {
                debugAssert(documentKey.isEqual(ref.key), "For each key, should only iterate over a single key's batches");
                uniqueBatchIDs = uniqueBatchIDs.add(ref.targetOrBatchId);
            });
        });
        return PersistencePromise.resolve(this.findMutationBatches(uniqueBatchIDs));
    };
    MemoryMutationQueue.prototype.getAllMutationBatchesAffectingQuery = function (transaction, query) {
        debugAssert(!query.isCollectionGroupQuery(), 'CollectionGroup queries should be handled in LocalDocumentsView');
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var prefix = query.path;
        var immediateChildrenPathLength = prefix.length + 1;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
        var startPath = prefix;
        if (!DocumentKey.isDocumentKey(startPath)) {
            startPath = startPath.child('');
        }
        var start = new DocReference(new DocumentKey(startPath), 0);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
        var uniqueBatchIDs = new SortedSet(primitiveComparator);
        this.batchesByDocumentKey.forEachWhile(function (ref) {
            var rowKeyPath = ref.key.path;
            if (!prefix.isPrefixOf(rowKeyPath)) {
                return false;
            }
            else {
                // Rows with document keys more than one segment longer than the query
                // path can't be matches. For example, a query on 'rooms' can't match
                // the document /rooms/abc/messages/xyx.
                // TODO(mcg): we'll need a different scanner when we implement
                // ancestor queries.
                if (rowKeyPath.length === immediateChildrenPathLength) {
                    uniqueBatchIDs = uniqueBatchIDs.add(ref.targetOrBatchId);
                }
                return true;
            }
        }, start);
        return PersistencePromise.resolve(this.findMutationBatches(uniqueBatchIDs));
    };
    MemoryMutationQueue.prototype.findMutationBatches = function (batchIDs) {
        var _this = this;
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
        var result = [];
        batchIDs.forEach(function (batchId) {
            var batch = _this.findMutationBatch(batchId);
            if (batch !== null) {
                result.push(batch);
            }
        });
        return result;
    };
    MemoryMutationQueue.prototype.removeMutationBatch = function (transaction, batch) {
        var _this = this;
        // Find the position of the first batch for removal.
        var batchIndex = this.indexOfExistingBatchId(batch.batchId, 'removed');
        hardAssert(batchIndex === 0, 'Can only remove the first entry of the mutation queue');
        this.mutationQueue.shift();
        var references = this.batchesByDocumentKey;
        return PersistencePromise.forEach(batch.mutations, function (mutation) {
            var ref = new DocReference(mutation.key, batch.batchId);
            references = references.delete(ref);
            return _this.referenceDelegate.markPotentiallyOrphaned(transaction, mutation.key);
        }).next(function () {
            _this.batchesByDocumentKey = references;
        });
    };
    MemoryMutationQueue.prototype.removeCachedMutationKeys = function (batchId) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    };
    MemoryMutationQueue.prototype.containsKey = function (txn, key) {
        var ref = new DocReference(key, 0);
        var firstRef = this.batchesByDocumentKey.firstAfterOrEqual(ref);
        return PersistencePromise.resolve(key.isEqual(firstRef && firstRef.key));
    };
    MemoryMutationQueue.prototype.performConsistencyCheck = function (txn) {
        if (this.mutationQueue.length === 0) {
            debugAssert(this.batchesByDocumentKey.isEmpty(), 'Document leak -- detected dangling mutation references when queue is empty.');
        }
        return PersistencePromise.resolve();
    };
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    MemoryMutationQueue.prototype.indexOfExistingBatchId = function (batchId, action) {
        var index = this.indexOfBatchId(batchId);
        debugAssert(index >= 0 && index < this.mutationQueue.length, 'Batches must exist to be ' + action);
        return index;
    };
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    MemoryMutationQueue.prototype.indexOfBatchId = function (batchId) {
        if (this.mutationQueue.length === 0) {
            // As an index this is past the end of the queue
            return 0;
        }
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        var firstBatchId = this.mutationQueue[0].batchId;
        return batchId - firstBatchId;
    };
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    MemoryMutationQueue.prototype.findMutationBatch = function (batchId) {
        var index = this.indexOfBatchId(batchId);
        if (index < 0 || index >= this.mutationQueue.length) {
            return null;
        }
        var batch = this.mutationQueue[index];
        debugAssert(batch.batchId === batchId, 'If found batch must match');
        return batch;
    };
    return MemoryMutationQueue;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
function documentEntryMap() {
    return new SortedMap(DocumentKey.comparator);
}
var MemoryRemoteDocumentCache = /** @class */ (function () {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function MemoryRemoteDocumentCache(indexManager, sizer) {
        this.indexManager = indexManager;
        this.sizer = sizer;
        /** Underlying cache of documents and their read times. */
        this.docs = documentEntryMap();
        /** Size of all cached documents. */
        this.size = 0;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    MemoryRemoteDocumentCache.prototype.addEntry = function (transaction, doc, readTime) {
        debugAssert(!readTime.isEqual(SnapshotVersion.min()), 'Cannot add a document with a read time of zero');
        var key = doc.key;
        var entry = this.docs.get(key);
        var previousSize = entry ? entry.size : 0;
        var currentSize = this.sizer(doc);
        this.docs = this.docs.insert(key, {
            maybeDocument: doc,
            size: currentSize,
            readTime: readTime
        });
        this.size += currentSize - previousSize;
        return this.indexManager.addToCollectionParentIndex(transaction, key.path.popLast());
    };
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    MemoryRemoteDocumentCache.prototype.removeEntry = function (documentKey) {
        var entry = this.docs.get(documentKey);
        if (entry) {
            this.docs = this.docs.remove(documentKey);
            this.size -= entry.size;
        }
    };
    MemoryRemoteDocumentCache.prototype.getEntry = function (transaction, documentKey) {
        var entry = this.docs.get(documentKey);
        return PersistencePromise.resolve(entry ? entry.maybeDocument : null);
    };
    MemoryRemoteDocumentCache.prototype.getEntries = function (transaction, documentKeys) {
        var _this = this;
        var results = nullableMaybeDocumentMap();
        documentKeys.forEach(function (documentKey) {
            var entry = _this.docs.get(documentKey);
            results = results.insert(documentKey, entry ? entry.maybeDocument : null);
        });
        return PersistencePromise.resolve(results);
    };
    MemoryRemoteDocumentCache.prototype.getDocumentsMatchingQuery = function (transaction, query, sinceReadTime) {
        debugAssert(!query.isCollectionGroupQuery(), 'CollectionGroup queries should be handled in LocalDocumentsView');
        var results = documentMap();
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        var prefix = new DocumentKey(query.path.child(''));
        var iterator = this.docs.getIteratorFrom(prefix);
        while (iterator.hasNext()) {
            var _c = iterator.getNext(), key = _c.key, _d = _c.value, maybeDocument = _d.maybeDocument, readTime = _d.readTime;
            if (!query.path.isPrefixOf(key.path)) {
                break;
            }
            if (readTime.compareTo(sinceReadTime) <= 0) {
                continue;
            }
            if (maybeDocument instanceof Document && query.matches(maybeDocument)) {
                results = results.insert(maybeDocument.key, maybeDocument);
            }
        }
        return PersistencePromise.resolve(results);
    };
    MemoryRemoteDocumentCache.prototype.forEachDocumentKey = function (transaction, f) {
        return PersistencePromise.forEach(this.docs, function (key) { return f(key); });
    };
    MemoryRemoteDocumentCache.prototype.newChangeBuffer = function (options) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new MemoryRemoteDocumentCache.RemoteDocumentChangeBuffer(this);
    };
    MemoryRemoteDocumentCache.prototype.getSize = function (txn) {
        return PersistencePromise.resolve(this.size);
    };
    return MemoryRemoteDocumentCache;
}());
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
MemoryRemoteDocumentCache.RemoteDocumentChangeBuffer = /** @class */ (function (_super) {
    tslib.__extends(RemoteDocumentChangeBuffer, _super);
    function RemoteDocumentChangeBuffer(documentCache) {
        var _this = _super.call(this) || this;
        _this.documentCache = documentCache;
        return _this;
    }
    RemoteDocumentChangeBuffer.prototype.applyChanges = function (transaction) {
        var _this = this;
        var promises = [];
        this.changes.forEach(function (key, doc) {
            if (doc) {
                promises.push(_this.documentCache.addEntry(transaction, doc, _this.readTime));
            }
            else {
                _this.documentCache.removeEntry(key);
            }
        });
        return PersistencePromise.waitFor(promises);
    };
    RemoteDocumentChangeBuffer.prototype.getFromCache = function (transaction, documentKey) {
        return this.documentCache.getEntry(transaction, documentKey);
    };
    RemoteDocumentChangeBuffer.prototype.getAllFromCache = function (transaction, documentKeys) {
        return this.documentCache.getEntries(transaction, documentKeys);
    };
    return RemoteDocumentChangeBuffer;
}(RemoteDocumentChangeBuffer));
/**
 * @license
 * Copyright 2017 Google LLC
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
var MemoryTargetCache = /** @class */ (function () {
    function MemoryTargetCache(persistence) {
        this.persistence = persistence;
        /**
         * Maps a target to the data about that target
         */
        this.targets = new ObjectMap(function (t) { return t.canonicalId(); });
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = SnapshotVersion.min();
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0;
        /** The highest sequence number encountered. */
        this.highestSequenceNumber = 0;
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this.references = new ReferenceSet();
        this.targetCount = 0;
        this.targetIdGenerator = TargetIdGenerator.forTargetCache();
    }
    MemoryTargetCache.prototype.forEachTarget = function (txn, f) {
        this.targets.forEach(function (_, targetData) { return f(targetData); });
        return PersistencePromise.resolve();
    };
    MemoryTargetCache.prototype.getLastRemoteSnapshotVersion = function (transaction) {
        return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
    };
    MemoryTargetCache.prototype.getHighestSequenceNumber = function (transaction) {
        return PersistencePromise.resolve(this.highestSequenceNumber);
    };
    MemoryTargetCache.prototype.allocateTargetId = function (transaction) {
        this.highestTargetId = this.targetIdGenerator.next();
        return PersistencePromise.resolve(this.highestTargetId);
    };
    MemoryTargetCache.prototype.setTargetsMetadata = function (transaction, highestListenSequenceNumber, lastRemoteSnapshotVersion) {
        if (lastRemoteSnapshotVersion) {
            this.lastRemoteSnapshotVersion = lastRemoteSnapshotVersion;
        }
        if (highestListenSequenceNumber > this.highestSequenceNumber) {
            this.highestSequenceNumber = highestListenSequenceNumber;
        }
        return PersistencePromise.resolve();
    };
    MemoryTargetCache.prototype.saveTargetData = function (targetData) {
        this.targets.set(targetData.target, targetData);
        var targetId = targetData.targetId;
        if (targetId > this.highestTargetId) {
            this.targetIdGenerator = new TargetIdGenerator(targetId);
            this.highestTargetId = targetId;
        }
        if (targetData.sequenceNumber > this.highestSequenceNumber) {
            this.highestSequenceNumber = targetData.sequenceNumber;
        }
    };
    MemoryTargetCache.prototype.addTargetData = function (transaction, targetData) {
        debugAssert(!this.targets.has(targetData.target), 'Adding a target that already exists');
        this.saveTargetData(targetData);
        this.targetCount += 1;
        return PersistencePromise.resolve();
    };
    MemoryTargetCache.prototype.updateTargetData = function (transaction, targetData) {
        debugAssert(this.targets.has(targetData.target), 'Updating a non-existent target');
        this.saveTargetData(targetData);
        return PersistencePromise.resolve();
    };
    MemoryTargetCache.prototype.removeTargetData = function (transaction, targetData) {
        debugAssert(this.targetCount > 0, 'Removing a target from an empty cache');
        debugAssert(this.targets.has(targetData.target), 'Removing a non-existent target from the cache');
        this.targets.delete(targetData.target);
        this.references.removeReferencesForId(targetData.targetId);
        this.targetCount -= 1;
        return PersistencePromise.resolve();
    };
    MemoryTargetCache.prototype.removeTargets = function (transaction, upperBound, activeTargetIds) {
        var _this = this;
        var count = 0;
        var removals = [];
        this.targets.forEach(function (key, targetData) {
            if (targetData.sequenceNumber <= upperBound &&
                activeTargetIds.get(targetData.targetId) === null) {
                _this.targets.delete(key);
                removals.push(_this.removeMatchingKeysForTargetId(transaction, targetData.targetId));
                count++;
            }
        });
        return PersistencePromise.waitFor(removals).next(function () { return count; });
    };
    MemoryTargetCache.prototype.getTargetCount = function (transaction) {
        return PersistencePromise.resolve(this.targetCount);
    };
    MemoryTargetCache.prototype.getTargetData = function (transaction, target) {
        var targetData = this.targets.get(target) || null;
        return PersistencePromise.resolve(targetData);
    };
    MemoryTargetCache.prototype.addMatchingKeys = function (txn, keys, targetId) {
        this.references.addReferences(keys, targetId);
        return PersistencePromise.resolve();
    };
    MemoryTargetCache.prototype.removeMatchingKeys = function (txn, keys, targetId) {
        this.references.removeReferences(keys, targetId);
        var referenceDelegate = this.persistence.referenceDelegate;
        var promises = [];
        if (referenceDelegate) {
            keys.forEach(function (key) {
                promises.push(referenceDelegate.markPotentiallyOrphaned(txn, key));
            });
        }
        return PersistencePromise.waitFor(promises);
    };
    MemoryTargetCache.prototype.removeMatchingKeysForTargetId = function (txn, targetId) {
        this.references.removeReferencesForId(targetId);
        return PersistencePromise.resolve();
    };
    MemoryTargetCache.prototype.getMatchingKeysForTargetId = function (txn, targetId) {
        var matchingKeys = this.references.referencesForId(targetId);
        return PersistencePromise.resolve(matchingKeys);
    };
    MemoryTargetCache.prototype.containsKey = function (txn, key) {
        return PersistencePromise.resolve(this.references.containsKey(key));
    };
    return MemoryTargetCache;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG$8 = 'MemoryPersistence';
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
var MemoryPersistence = /** @class */ (function () {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function MemoryPersistence(referenceDelegateFactory) {
        var _this = this;
        this.mutationQueues = {};
        this.listenSequence = new ListenSequence(0);
        this._started = false;
        this._started = true;
        this.referenceDelegate = referenceDelegateFactory(this);
        this.targetCache = new MemoryTargetCache(this);
        var sizer = function (doc) { return _this.referenceDelegate.documentSize(doc); };
        this.indexManager = new MemoryIndexManager();
        this.remoteDocumentCache = new MemoryRemoteDocumentCache(this.indexManager, sizer);
    }
    MemoryPersistence.prototype.start = function () {
        return Promise.resolve();
    };
    MemoryPersistence.prototype.shutdown = function () {
        // No durable state to ensure is closed on shutdown.
        this._started = false;
        return Promise.resolve();
    };
    Object.defineProperty(MemoryPersistence.prototype, "started", {
        get: function () {
            return this._started;
        },
        enumerable: true,
        configurable: true
    });
    MemoryPersistence.prototype.setDatabaseDeletedListener = function () {
        // No op.
    };
    MemoryPersistence.prototype.getIndexManager = function () {
        return this.indexManager;
    };
    MemoryPersistence.prototype.getMutationQueue = function (user) {
        var queue = this.mutationQueues[user.toKey()];
        if (!queue) {
            queue = new MemoryMutationQueue(this.indexManager, this.referenceDelegate);
            this.mutationQueues[user.toKey()] = queue;
        }
        return queue;
    };
    MemoryPersistence.prototype.getTargetCache = function () {
        return this.targetCache;
    };
    MemoryPersistence.prototype.getRemoteDocumentCache = function () {
        return this.remoteDocumentCache;
    };
    MemoryPersistence.prototype.runTransaction = function (action, mode, transactionOperation) {
        var _this = this;
        logDebug(LOG_TAG$8, 'Starting transaction:', action);
        var txn = new MemoryTransaction(this.listenSequence.next());
        this.referenceDelegate.onTransactionStarted();
        return transactionOperation(txn)
            .next(function (result) {
            return _this.referenceDelegate
                .onTransactionCommitted(txn)
                .next(function () { return result; });
        })
            .toPromise()
            .then(function (result) {
            txn.raiseOnCommittedEvent();
            return result;
        });
    };
    MemoryPersistence.prototype.mutationQueuesContainKey = function (transaction, key) {
        return PersistencePromise.or(Object.values(this.mutationQueues).map(function (queue) { return function () { return queue.containsKey(transaction, key); }; }));
    };
    return MemoryPersistence;
}());
/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */
var MemoryTransaction = /** @class */ (function (_super) {
    tslib.__extends(MemoryTransaction, _super);
    function MemoryTransaction(currentSequenceNumber) {
        var _this = _super.call(this) || this;
        _this.currentSequenceNumber = currentSequenceNumber;
        return _this;
    }
    return MemoryTransaction;
}(PersistenceTransaction));
var MemoryEagerDelegate = /** @class */ (function () {
    function MemoryEagerDelegate(persistence) {
        this.persistence = persistence;
        /** Tracks all documents that are active in Query views. */
        this.localViewReferences = new ReferenceSet();
        /** The list of documents that are potentially GCed after each transaction. */
        this._orphanedDocuments = null;
    }
    MemoryEagerDelegate.factory = function (persistence) {
        return new MemoryEagerDelegate(persistence);
    };
    Object.defineProperty(MemoryEagerDelegate.prototype, "orphanedDocuments", {
        get: function () {
            if (!this._orphanedDocuments) {
                throw fail('orphanedDocuments is only valid during a transaction.');
            }
            else {
                return this._orphanedDocuments;
            }
        },
        enumerable: true,
        configurable: true
    });
    MemoryEagerDelegate.prototype.addReference = function (txn, targetId, key) {
        this.localViewReferences.addReference(key, targetId);
        this.orphanedDocuments.delete(key);
        return PersistencePromise.resolve();
    };
    MemoryEagerDelegate.prototype.removeReference = function (txn, targetId, key) {
        this.localViewReferences.removeReference(key, targetId);
        this.orphanedDocuments.add(key);
        return PersistencePromise.resolve();
    };
    MemoryEagerDelegate.prototype.markPotentiallyOrphaned = function (txn, key) {
        this.orphanedDocuments.add(key);
        return PersistencePromise.resolve();
    };
    MemoryEagerDelegate.prototype.removeTarget = function (txn, targetData) {
        var _this = this;
        var orphaned = this.localViewReferences.removeReferencesForId(targetData.targetId);
        orphaned.forEach(function (key) { return _this.orphanedDocuments.add(key); });
        var cache = this.persistence.getTargetCache();
        return cache
            .getMatchingKeysForTargetId(txn, targetData.targetId)
            .next(function (keys) {
            keys.forEach(function (key) { return _this.orphanedDocuments.add(key); });
        })
            .next(function () { return cache.removeTargetData(txn, targetData); });
    };
    MemoryEagerDelegate.prototype.onTransactionStarted = function () {
        this._orphanedDocuments = new Set();
    };
    MemoryEagerDelegate.prototype.onTransactionCommitted = function (txn) {
        var _this = this;
        // Remove newly orphaned documents.
        var cache = this.persistence.getRemoteDocumentCache();
        var changeBuffer = cache.newChangeBuffer();
        return PersistencePromise.forEach(this.orphanedDocuments, function (key) {
            return _this.isReferenced(txn, key).next(function (isReferenced) {
                if (!isReferenced) {
                    changeBuffer.removeEntry(key);
                }
            });
        }).next(function () {
            _this._orphanedDocuments = null;
            return changeBuffer.apply(txn);
        });
    };
    MemoryEagerDelegate.prototype.updateLimboDocument = function (txn, key) {
        var _this = this;
        return this.isReferenced(txn, key).next(function (isReferenced) {
            if (isReferenced) {
                _this.orphanedDocuments.delete(key);
            }
            else {
                _this.orphanedDocuments.add(key);
            }
        });
    };
    MemoryEagerDelegate.prototype.documentSize = function (doc) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    };
    MemoryEagerDelegate.prototype.isReferenced = function (txn, key) {
        var _this = this;
        return PersistencePromise.or([
            function () { return PersistencePromise.resolve(_this.localViewReferences.containsKey(key)); },
            function () { return _this.persistence.getTargetCache().containsKey(txn, key); },
            function () { return _this.persistence.mutationQueuesContainKey(txn, key); }
        ]);
    };
    return MemoryEagerDelegate;
}());
/**
 * @license
 * Copyright 2020 Google LLC
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
var MEMORY_ONLY_PERSISTENCE_ERROR_MESSAGE = 'You are using the memory-only build of Firestore. Persistence support is ' +
    'only available via the @firebase/firestore bundle or the ' +
    'firebase-firestore.js build.';
/**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */
var MemoryComponentProvider = /** @class */ (function () {
    function MemoryComponentProvider() {
    }
    MemoryComponentProvider.prototype.initialize = function (cfg) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.sharedClientState = this.createSharedClientState(cfg);
                        this.persistence = this.createPersistence(cfg);
                        return [4 /*yield*/, this.persistence.start()];
                    case 1:
                        _c.sent();
                        this.gcScheduler = this.createGarbageCollectionScheduler(cfg);
                        this.localStore = this.createLocalStore(cfg);
                        this.remoteStore = this.createRemoteStore(cfg);
                        this.syncEngine = this.createSyncEngine(cfg);
                        this.eventManager = this.createEventManager(cfg);
                        this.sharedClientState.onlineStateHandler = function (onlineState) { return _this.syncEngine.applyOnlineStateChange(onlineState, 1 /* SharedClientState */); };
                        this.remoteStore.syncEngine = this.syncEngine;
                        return [4 /*yield*/, this.localStore.start()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.sharedClientState.start()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.remoteStore.start()];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.remoteStore.applyPrimaryState(this.syncEngine.isPrimaryClient)];
                    case 5:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MemoryComponentProvider.prototype.createEventManager = function (cfg) {
        return new EventManager(this.syncEngine);
    };
    MemoryComponentProvider.prototype.createGarbageCollectionScheduler = function (cfg) {
        return null;
    };
    MemoryComponentProvider.prototype.createLocalStore = function (cfg) {
        return new LocalStore(this.persistence, new IndexFreeQueryEngine(), cfg.initialUser);
    };
    MemoryComponentProvider.prototype.createPersistence = function (cfg) {
        debugAssert(!cfg.persistenceSettings.durable, 'Can only start memory persistence');
        return new MemoryPersistence(MemoryEagerDelegate.factory);
    };
    MemoryComponentProvider.prototype.createRemoteStore = function (cfg) {
        var _this = this;
        return new RemoteStore(this.localStore, cfg.datastore, cfg.asyncQueue, function (onlineState) { return _this.syncEngine.applyOnlineStateChange(onlineState, 0 /* RemoteStore */); }, cfg.platform.newConnectivityMonitor());
    };
    MemoryComponentProvider.prototype.createSharedClientState = function (cfg) {
        return new MemorySharedClientState();
    };
    MemoryComponentProvider.prototype.createSyncEngine = function (cfg) {
        return new SyncEngine(this.localStore, this.remoteStore, this.sharedClientState, cfg.initialUser, cfg.maxConcurrentLimboResolutions);
    };
    MemoryComponentProvider.prototype.clearPersistence = function (databaseInfo) {
        throw new FirestoreError(Code.FAILED_PRECONDITION, MEMORY_ONLY_PERSISTENCE_ERROR_MESSAGE);
    };
    return MemoryComponentProvider;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG$9 = 'FirestoreClient';
var MAX_CONCURRENT_LIMBO_RESOLUTIONS = 100;
/** DOMException error code constants. */
var DOM_EXCEPTION_INVALID_STATE = 11;
var DOM_EXCEPTION_ABORTED = 20;
var DOM_EXCEPTION_QUOTA_EXCEEDED = 22;
/**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */
var FirestoreClient = /** @class */ (function () {
    function FirestoreClient(platform, databaseInfo, credentials, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    asyncQueue) {
        this.platform = platform;
        this.databaseInfo = databaseInfo;
        this.credentials = credentials;
        this.asyncQueue = asyncQueue;
        this.clientId = AutoId.newId();
    }
    /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param componentProvider Provider that returns all core components.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */
    FirestoreClient.prototype.start = function (componentProvider, persistenceSettings) {
        var _this = this;
        this.verifyNotTerminated();
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        //
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var initializationDone = new Deferred();
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        //
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
        var persistenceResult = new Deferred();
        var initialized = false;
        this.credentials.setChangeListener(function (user) {
            if (!initialized) {
                initialized = true;
                logDebug(LOG_TAG$9, 'Initializing. user=', user.uid);
                return _this.initializeComponents(componentProvider, persistenceSettings, user, persistenceResult).then(initializationDone.resolve, initializationDone.reject);
            }
            else {
                _this.asyncQueue.enqueueAndForget(function () {
                    return _this.handleCredentialChange(user);
                });
            }
        });
        // Block the async queue until initialization is done
        this.asyncQueue.enqueueAndForget(function () {
            return initializationDone.promise;
        });
        // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return persistenceResult.promise;
    };
    /** Enables the network connection and requeues all pending operations. */
    FirestoreClient.prototype.enableNetwork = function () {
        var _this = this;
        this.verifyNotTerminated();
        return this.asyncQueue.enqueue(function () {
            return _this.syncEngine.enableNetwork();
        });
    };
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param componentProvider The provider that provides all core componennts
     *     for IndexedDB or memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    FirestoreClient.prototype.initializeComponents = function (componentProvider, persistenceSettings, user, persistenceResult) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var connection, serializer, datastore, error_4;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.platform.loadConnection(this.databaseInfo)];
                    case 1:
                        connection = _c.sent();
                        serializer = this.platform.newSerializer(this.databaseInfo.databaseId);
                        datastore = newDatastore(connection, this.credentials, serializer);
                        return [4 /*yield*/, componentProvider.initialize({
                                asyncQueue: this.asyncQueue,
                                databaseInfo: this.databaseInfo,
                                platform: this.platform,
                                datastore: datastore,
                                clientId: this.clientId,
                                initialUser: user,
                                maxConcurrentLimboResolutions: MAX_CONCURRENT_LIMBO_RESOLUTIONS,
                                persistenceSettings: persistenceSettings
                            })];
                    case 2:
                        _c.sent();
                        this.persistence = componentProvider.persistence;
                        this.sharedClientState = componentProvider.sharedClientState;
                        this.localStore = componentProvider.localStore;
                        this.remoteStore = componentProvider.remoteStore;
                        this.syncEngine = componentProvider.syncEngine;
                        this.gcScheduler = componentProvider.gcScheduler;
                        this.eventMgr = componentProvider.eventManager;
                        // When a user calls clearPersistence() in one client, all other clients
                        // need to be terminated to allow the delete to succeed.
                        this.persistence.setDatabaseDeletedListener(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
                            return tslib.__generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, this.terminate()];
                                    case 1:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        persistenceResult.resolve();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _c.sent();
                        // Regardless of whether or not the retry succeeds, from an user
                        // perspective, offline persistence has failed.
                        persistenceResult.reject(error_4);
                        // An unknown failure on the first stage shuts everything down.
                        if (!this.canFallback(error_4)) {
                            throw error_4;
                        }
                        console.warn('Error enabling offline persistence. Falling back to' +
                            ' persistence disabled: ' +
                            error_4);
                        return [2 /*return*/, this.initializeComponents(new MemoryComponentProvider(), { durable: false }, user, persistenceResult)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    FirestoreClient.prototype.canFallback = function (error) {
        if (error.name === 'FirebaseError') {
            return (error.code === Code.FAILED_PRECONDITION ||
                error.code === Code.UNIMPLEMENTED);
        }
        else if (typeof DOMException !== 'undefined' &&
            error instanceof DOMException) {
            // There are a few known circumstances where we can open IndexedDb but
            // trying to read/write will fail (e.g. quota exceeded). For
            // well-understood cases, we attempt to detect these and then gracefully
            // fall back to memory persistence.
            // NOTE: Rather than continue to add to this list, we could decide to
            // always fall back, with the risk that we might accidentally hide errors
            // representing actual SDK bugs.
            return (
            // When the browser is out of quota we could get either quota exceeded
            // or an aborted error depending on whether the error happened during
            // schema migration.
            error.code === DOM_EXCEPTION_QUOTA_EXCEEDED ||
                error.code === DOM_EXCEPTION_ABORTED ||
                // Firefox Private Browsing mode disables IndexedDb and returns
                // INVALID_STATE for any usage.
                error.code === DOM_EXCEPTION_INVALID_STATE);
        }
        return true;
    };
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    FirestoreClient.prototype.verifyNotTerminated = function () {
        if (this.asyncQueue.isShuttingDown) {
            throw new FirestoreError(Code.FAILED_PRECONDITION, 'The client has already been terminated.');
        }
    };
    FirestoreClient.prototype.handleCredentialChange = function (user) {
        this.asyncQueue.verifyOperationInProgress();
        logDebug(LOG_TAG$9, 'Credential Changed. Current user: ' + user.uid);
        return this.syncEngine.handleCredentialChange(user);
    };
    /** Disables the network connection. Pending operations will not complete. */
    FirestoreClient.prototype.disableNetwork = function () {
        var _this = this;
        this.verifyNotTerminated();
        return this.asyncQueue.enqueue(function () {
            return _this.syncEngine.disableNetwork();
        });
    };
    FirestoreClient.prototype.terminate = function () {
        var _this = this;
        return this.asyncQueue.enqueueAndInitiateShutdown(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        if (this.gcScheduler) {
                            this.gcScheduler.stop();
                        }
                        return [4 /*yield*/, this.remoteStore.shutdown()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.sharedClientState.shutdown()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.persistence.shutdown()];
                    case 3:
                        _c.sent();
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.removeChangeListener();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    FirestoreClient.prototype.waitForPendingWrites = function () {
        var _this = this;
        this.verifyNotTerminated();
        var deferred = new Deferred();
        this.asyncQueue.enqueueAndForget(function () {
            return _this.syncEngine.registerPendingWritesCallback(deferred);
        });
        return deferred.promise;
    };
    FirestoreClient.prototype.listen = function (query, observer, options) {
        var _this = this;
        this.verifyNotTerminated();
        var listener = new QueryListener(query, observer, options);
        this.asyncQueue.enqueueAndForget(function () { return _this.eventMgr.listen(listener); });
        return listener;
    };
    FirestoreClient.prototype.unlisten = function (listener) {
        var _this = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
        if (this.clientTerminated) {
            return;
        }
        this.asyncQueue.enqueueAndForget(function () {
            return _this.eventMgr.unlisten(listener);
        });
    };
    FirestoreClient.prototype.getDocumentFromLocalCache = function (docKey) {
        var _this = this;
        this.verifyNotTerminated();
        return this.asyncQueue
            .enqueue(function () {
            return _this.localStore.readDocument(docKey);
        })
            .then(function (maybeDoc) {
            if (maybeDoc instanceof Document) {
                return maybeDoc;
            }
            else if (maybeDoc instanceof NoDocument) {
                return null;
            }
            else {
                throw new FirestoreError(Code.UNAVAILABLE, 'Failed to get document from cache. (However, this document may ' +
                    "exist on the server. Run again without setting 'source' in " +
                    'the GetOptions to attempt to retrieve the document from the ' +
                    'server.)');
            }
        });
    };
    FirestoreClient.prototype.getDocumentsFromLocalCache = function (query) {
        var _this = this;
        this.verifyNotTerminated();
        return this.asyncQueue.enqueue(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
            var queryResult, view, viewDocChanges;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.localStore.executeQuery(query, 
                        /* usePreviousResults= */ true)];
                    case 1:
                        queryResult = _c.sent();
                        view = new View(query, queryResult.remoteKeys);
                        viewDocChanges = view.computeDocChanges(queryResult.documents);
                        return [2 /*return*/, view.applyChanges(viewDocChanges, 
                            /* updateLimboDocuments= */ false).snapshot];
                }
            });
        }); });
    };
    FirestoreClient.prototype.write = function (mutations) {
        var _this = this;
        this.verifyNotTerminated();
        var deferred = new Deferred();
        this.asyncQueue.enqueueAndForget(function () { return _this.syncEngine.write(mutations, deferred); });
        return deferred.promise;
    };
    FirestoreClient.prototype.databaseId = function () {
        return this.databaseInfo.databaseId;
    };
    FirestoreClient.prototype.addSnapshotsInSyncListener = function (observer) {
        var _this = this;
        this.verifyNotTerminated();
        this.asyncQueue.enqueueAndForget(function () {
            _this.eventMgr.addSnapshotsInSyncListener(observer);
            return Promise.resolve();
        });
    };
    FirestoreClient.prototype.removeSnapshotsInSyncListener = function (observer) {
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
        if (this.clientTerminated) {
            return;
        }
        this.eventMgr.removeSnapshotsInSyncListener(observer);
    };
    Object.defineProperty(FirestoreClient.prototype, "clientTerminated", {
        get: function () {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.asyncQueue.isShuttingDown;
        },
        enumerable: true,
        configurable: true
    });
    FirestoreClient.prototype.transaction = function (updateFunction) {
        var _this = this;
        this.verifyNotTerminated();
        var deferred = new Deferred();
        this.asyncQueue.enqueueAndForget(function () {
            _this.syncEngine.runTransaction(_this.asyncQueue, updateFunction, deferred);
            return Promise.resolve();
        });
        return deferred.promise;
    };
    return FirestoreClient;
}());
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
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */
var AsyncObserver = /** @class */ (function () {
    function AsyncObserver(observer) {
        this.observer = observer;
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = false;
    }
    AsyncObserver.prototype.next = function (value) {
        this.scheduleEvent(this.observer.next, value);
    };
    AsyncObserver.prototype.error = function (error) {
        this.scheduleEvent(this.observer.error, error);
    };
    AsyncObserver.prototype.mute = function () {
        this.muted = true;
    };
    AsyncObserver.prototype.scheduleEvent = function (eventHandler, event) {
        var _this = this;
        if (!this.muted) {
            setTimeout(function () {
                if (!_this.muted) {
                    eventHandler(event);
                }
            }, 0);
        }
    };
    return AsyncObserver;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var LOG_TAG$a = 'AsyncQueue';
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 */
var DelayedOperation = /** @class */ (function () {
    function DelayedOperation(asyncQueue, timerId, targetTimeMs, op, removalCallback) {
        this.asyncQueue = asyncQueue;
        this.timerId = timerId;
        this.targetTimeMs = targetTimeMs;
        this.op = op;
        this.removalCallback = removalCallback;
        this.deferred = new Deferred();
        this.then = this.deferred.promise.then.bind(this.deferred.promise);
        this.catch = this.deferred.promise.catch.bind(this.deferred.promise);
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.deferred.promise.catch(function (err) { });
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */
    DelayedOperation.createAndSchedule = function (asyncQueue, timerId, delayMs, op, removalCallback) {
        var targetTime = Date.now() + delayMs;
        var delayedOp = new DelayedOperation(asyncQueue, timerId, targetTime, op, removalCallback);
        delayedOp.start(delayMs);
        return delayedOp;
    };
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    DelayedOperation.prototype.start = function (delayMs) {
        var _this = this;
        this.timerHandle = setTimeout(function () { return _this.handleDelayElapsed(); }, delayMs);
    };
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    DelayedOperation.prototype.skipDelay = function () {
        return this.handleDelayElapsed();
    };
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    DelayedOperation.prototype.cancel = function (reason) {
        if (this.timerHandle !== null) {
            this.clearTimeout();
            this.deferred.reject(new FirestoreError(Code.CANCELLED, 'Operation cancelled' + (reason ? ': ' + reason : '')));
        }
    };
    DelayedOperation.prototype.handleDelayElapsed = function () {
        var _this = this;
        this.asyncQueue.enqueueAndForget(function () {
            if (_this.timerHandle !== null) {
                _this.clearTimeout();
                return _this.op().then(function (result) {
                    return _this.deferred.resolve(result);
                });
            }
            else {
                return Promise.resolve();
            }
        });
    };
    DelayedOperation.prototype.clearTimeout = function () {
        if (this.timerHandle !== null) {
            this.removalCallback(this);
            clearTimeout(this.timerHandle);
            this.timerHandle = null;
        }
    };
    return DelayedOperation;
}());
var AsyncQueue = /** @class */ (function () {
    function AsyncQueue() {
        var _this = this;
        // The last promise in the queue.
        this.tail = Promise.resolve();
        // The last retryable operation. Retryable operation are run in order and
        // retried with backoff.
        this.retryableTail = Promise.resolve();
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this._isShuttingDown = false;
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.delayedOperations = [];
        // visible for testing
        this.failure = null;
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.operationInProgress = false;
        // List of TimerIds to fast-forward delays for.
        this.timerIdsToSkip = [];
        // Backoff timer used to schedule retries for retryable operations
        this.backoff = new ExponentialBackoff(this, "async_queue_retry" /* AsyncQueueRetry */);
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.visibilityHandler = function () {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            _this.runDelayedOperationsEarly("async_queue_retry" /* AsyncQueueRetry */);
        };
        var window = PlatformSupport.getPlatform().window;
        if (window && typeof window.addEventListener === 'function') {
            window.addEventListener('visibilitychange', this.visibilityHandler);
        }
    }
    Object.defineProperty(AsyncQueue.prototype, "isShuttingDown", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function () {
            return this._isShuttingDown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    AsyncQueue.prototype.enqueueAndForget = function (op) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(op);
    };
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    AsyncQueue.prototype.enqueueAndForgetEvenAfterShutdown = function (op) {
        this.verifyNotFailed();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueueInternal(op);
    };
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    AsyncQueue.prototype.enqueueEvenAfterShutdown = function (op) {
        this.verifyNotFailed();
        return this.enqueueInternal(op);
    };
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    AsyncQueue.prototype.enqueueAndInitiateShutdown = function (op) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var window_1;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.verifyNotFailed();
                        if (!!this._isShuttingDown) return [3 /*break*/, 2];
                        this._isShuttingDown = true;
                        window_1 = PlatformSupport.getPlatform().window;
                        if (window_1) {
                            window_1.removeEventListener('visibilitychange', this.visibilityHandler);
                        }
                        return [4 /*yield*/, this.enqueueEvenAfterShutdown(op)];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    AsyncQueue.prototype.enqueue = function (op) {
        this.verifyNotFailed();
        if (this._isShuttingDown) {
            // Return a Promise which never resolves.
            return new Promise(function (resolve) { });
        }
        return this.enqueueInternal(op);
    };
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    AsyncQueue.prototype.enqueueRetryable = function (op) {
        var _this = this;
        this.verifyNotFailed();
        if (this._isShuttingDown) {
            return;
        }
        this.retryableTail = this.retryableTail.then(function () {
            var deferred = new Deferred();
            var retryingOp = function () { return tslib.__awaiter(_this, void 0, void 0, function () {
                var e_5;
                return tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, op()];
                        case 1:
                            _c.sent();
                            deferred.resolve();
                            this.backoff.reset();
                            return [3 /*break*/, 3];
                        case 2:
                            e_5 = _c.sent();
                            if (e_5.name === 'IndexedDbTransactionError') {
                                logDebug(LOG_TAG$a, 'Operation failed with retryable error: ' + e_5);
                                this.backoff.backoffAndRun(retryingOp);
                            }
                            else {
                                deferred.resolve();
                                throw e_5; // Failure will be handled by AsyncQueue
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            _this.enqueueAndForget(retryingOp);
            return deferred.promise;
        });
    };
    AsyncQueue.prototype.enqueueInternal = function (op) {
        var _this = this;
        var newTail = this.tail.then(function () {
            _this.operationInProgress = true;
            return op()
                .catch(function (error) {
                _this.failure = error;
                _this.operationInProgress = false;
                var message = error.stack || error.message || '';
                logError('INTERNAL UNHANDLED ERROR: ', message);
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw error;
            })
                .then(function (result) {
                _this.operationInProgress = false;
                return result;
            });
        });
        this.tail = newTail;
        return newTail;
    };
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned CancelablePromise can be used to cancel
     * the operation prior to its running.
     */
    AsyncQueue.prototype.enqueueAfterDelay = function (timerId, delayMs, op) {
        var _this = this;
        this.verifyNotFailed();
        debugAssert(delayMs >= 0, "Attempted to schedule an operation with a negative delay of " + delayMs);
        // Fast-forward delays for timerIds that have been overriden.
        if (this.timerIdsToSkip.indexOf(timerId) > -1) {
            delayMs = 0;
        }
        var delayedOp = DelayedOperation.createAndSchedule(this, timerId, delayMs, op, function (removedOp) { return _this.removeDelayedOperation(removedOp); });
        this.delayedOperations.push(delayedOp);
        return delayedOp;
    };
    AsyncQueue.prototype.verifyNotFailed = function () {
        if (this.failure) {
            fail('AsyncQueue is already failed: ' +
                (this.failure.stack || this.failure.message));
        }
    };
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    AsyncQueue.prototype.verifyOperationInProgress = function () {
        debugAssert(this.operationInProgress, 'verifyOpInProgress() called when no op in progress on this queue.');
    };
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    AsyncQueue.prototype.drain = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var currentTail;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        currentTail = this.tail;
                        return [4 /*yield*/, currentTail];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        if (currentTail !== this.tail) return [3 /*break*/, 0];
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    AsyncQueue.prototype.containsDelayedOperation = function (timerId) {
        for (var _i = 0, _c = this.delayedOperations; _i < _c.length; _i++) {
            var op = _c[_i];
            if (op.timerId === timerId) {
                return true;
            }
        }
        return false;
    };
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Throws if no such operation exists. Pass TimerId.All to run
     *  all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    AsyncQueue.prototype.runDelayedOperationsEarly = function (lastTimerId) {
        var _this = this;
        // Note that draining may generate more delayed ops, so we do that first.
        return this.drain().then(function () {
            // Run ops in the same order they'd run if they ran naturally.
            _this.delayedOperations.sort(function (a, b) { return a.targetTimeMs - b.targetTimeMs; });
            for (var _i = 0, _c = _this.delayedOperations; _i < _c.length; _i++) {
                var op = _c[_i];
                op.skipDelay();
                if (lastTimerId !== "all" /* All */ && op.timerId === lastTimerId) {
                    break;
                }
            }
            return _this.drain();
        });
    };
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    AsyncQueue.prototype.skipDelaysForTimerId = function (timerId) {
        this.timerIdsToSkip.push(timerId);
    };
    /** Called once a DelayedOperation is run or canceled. */
    AsyncQueue.prototype.removeDelayedOperation = function (op) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var index = this.delayedOperations.indexOf(op);
        debugAssert(index >= 0, 'Delayed operation not found.');
        this.delayedOperations.splice(index, 1);
    };
    return AsyncQueue;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */
function validateNoArgs(functionName, args) {
    if (args.length !== 0) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() does not support arguments, " +
            'but was called with ' +
            formatPlural(args.length, 'argument') +
            '.');
    }
}
/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */
function validateExactNumberOfArgs(functionName, args, numberOfArgs) {
    if (args.length !== numberOfArgs) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires " +
            formatPlural(numberOfArgs, 'argument') +
            ', but was called with ' +
            formatPlural(args.length, 'argument') +
            '.');
    }
}
/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */
function validateAtLeastNumberOfArgs(functionName, args, minNumberOfArgs) {
    if (args.length < minNumberOfArgs) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires at least " +
            formatPlural(minNumberOfArgs, 'argument') +
            ', but was called with ' +
            formatPlural(args.length, 'argument') +
            '.');
    }
}
/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */
function validateBetweenNumberOfArgs(functionName, args, minNumberOfArgs, maxNumberOfArgs) {
    if (args.length < minNumberOfArgs || args.length > maxNumberOfArgs) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires between " + minNumberOfArgs + " and " +
            (maxNumberOfArgs + " arguments, but was called with ") +
            formatPlural(args.length, 'argument') +
            '.');
    }
}
/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
function validateNamedArrayAtLeastNumberOfElements(functionName, value, name, minNumberOfElements) {
    if (!(value instanceof Array) || value.length < minNumberOfElements) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires its " + name + " argument to be an " +
            'array with at least ' +
            (formatPlural(minNumberOfElements, 'element') + "."));
    }
}
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */
function validateArgType(functionName, type, position, argument) {
    validateType(functionName, type, ordinal(position) + " argument", argument);
}
/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */
function validateOptionalArgType(functionName, type, position, argument) {
    if (argument !== undefined) {
        validateArgType(functionName, type, position, argument);
    }
}
/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */
function validateNamedType(functionName, type, optionName, argument) {
    validateType(functionName, type, optionName + " option", argument);
}
/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */
function validateNamedOptionalType(functionName, type, optionName, argument) {
    if (argument !== undefined) {
        validateNamedType(functionName, type, optionName, argument);
    }
}
function validateArrayElements(functionName, optionName, typeDescription, argument, validator) {
    if (!(argument instanceof Array)) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires its " + optionName + " " +
            ("option to be an array, but it was: " + valueDescription(argument)));
    }
    for (var i = 0; i < argument.length; ++i) {
        if (!validator(argument[i])) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires all " + optionName + " " +
                ("elements to be " + typeDescription + ", but the value at index " + i + " ") +
                ("was: " + valueDescription(argument[i])));
        }
    }
}
function validateOptionalArrayElements(functionName, optionName, typeDescription, argument, validator) {
    if (argument !== undefined) {
        validateArrayElements(functionName, optionName, typeDescription, argument, validator);
    }
}
/**
 * Validates that the provided named option equals one of the expected values.
 */
function validateNamedPropertyEquals(functionName, inputName, optionName, input, expected) {
    var expectedDescription = [];
    for (var _i = 0, expected_1 = expected; _i < expected_1.length; _i++) {
        var val = expected_1[_i];
        if (val === input) {
            return;
        }
        expectedDescription.push(valueDescription(val));
    }
    var actualDescription = valueDescription(input);
    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid value " + actualDescription + " provided to function " + functionName + "() for option " +
        ("\"" + optionName + "\". Acceptable values: " + expectedDescription.join(', ')));
}
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function validateNamedOptionalPropertyEquals(functionName, inputName, optionName, input, expected) {
    if (input !== undefined) {
        validateNamedPropertyEquals(functionName, inputName, optionName, input, expected);
    }
}
/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */
function validateStringEnum(functionName, enums, position, argument) {
    if (!enums.some(function (element) { return element === argument; })) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid value " + valueDescription(argument) + " provided to function " +
            (functionName + "() for its " + ordinal(position) + " argument. Acceptable ") +
            ("values: " + enums.join(', ')));
    }
    return argument;
}
/** Helper to validate the type of a provided input. */
function validateType(functionName, type, inputName, input) {
    var valid = false;
    if (type === 'object') {
        valid = isPlainObject(input);
    }
    else if (type === 'non-empty string') {
        valid = typeof input === 'string' && input !== '';
    }
    else {
        valid = typeof input === type;
    }
    if (!valid) {
        var description = valueDescription(input);
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires its " + inputName + " " +
            ("to be of type " + type + ", but it was: " + description));
    }
}
/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
function isPlainObject(input) {
    return (typeof input === 'object' &&
        input !== null &&
        (Object.getPrototypeOf(input) === Object.prototype ||
            Object.getPrototypeOf(input) === null));
}
/** Returns a string describing the type / value of the provided input. */
function valueDescription(input) {
    if (input === undefined) {
        return 'undefined';
    }
    else if (input === null) {
        return 'null';
    }
    else if (typeof input === 'string') {
        if (input.length > 20) {
            input = input.substring(0, 20) + "...";
        }
        return JSON.stringify(input);
    }
    else if (typeof input === 'number' || typeof input === 'boolean') {
        return '' + input;
    }
    else if (typeof input === 'object') {
        if (input instanceof Array) {
            return 'an array';
        }
        else {
            var customObjectName = tryGetCustomObjectType(input);
            if (customObjectName) {
                return "a custom " + customObjectName + " object";
            }
            else {
                return 'an object';
            }
        }
    }
    else if (typeof input === 'function') {
        return 'a function';
    }
    else {
        return fail('Unknown wrong type: ' + typeof input);
    }
}
/** Hacky method to try to get the constructor name for an object. */
function tryGetCustomObjectType(input) {
    if (input.constructor) {
        var funcNameRegex = /function\s+([^\s(]+)\s*\(/;
        var results = funcNameRegex.exec(input.constructor.toString());
        if (results && results.length > 1) {
            return results[1];
        }
    }
    return null;
}
/** Validates the provided argument is defined. */
function validateDefined(functionName, position, argument) {
    if (argument === undefined) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires a valid " + ordinal(position) + " " +
            "argument, but it was undefined.");
    }
}
/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */
function validateOptionNames(functionName, options, optionNames) {
    forEach(options, function (key, _) {
        if (optionNames.indexOf(key) < 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Unknown option '" + key + "' passed to function " + functionName + "(). " +
                'Available options: ' +
                optionNames.join(', '));
        }
    });
}
/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */
function invalidClassError(functionName, type, position, argument) {
    var description = valueDescription(argument);
    return new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires its " + ordinal(position) + " " +
        ("argument to be a " + type + ", but it was: " + description));
}
function validatePositiveNumber(functionName, position, n) {
    if (n <= 0) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function \"" + functionName + "()\" requires its " + ordinal(position) + " argument to be a positive number, but it was: " + n + ".");
    }
}
/** Converts a number to its english word representation */
function ordinal(num) {
    switch (num) {
        case 1:
            return 'first';
        case 2:
            return 'second';
        case 3:
            return 'third';
        default:
            return num + 'th';
    }
}
/**
 * Formats the given word as plural conditionally given the preceding number.
 */
function formatPlural(num, str) {
    return num + " " + str + (num === 1 ? '' : 's');
}
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
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A FieldPath refers to a field in a document. The path may consist of a single
 * field name (referring to a top-level field in the document), or a list of
 * field names (referring to a nested field in the document).
 */
var FieldPath$1 = /** @class */ (function () {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function FieldPath$1() {
        var fieldNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fieldNames[_i] = arguments[_i];
        }
        validateNamedArrayAtLeastNumberOfElements('FieldPath', fieldNames, 'fieldNames', 1);
        for (var i = 0; i < fieldNames.length; ++i) {
            validateArgType('FieldPath', 'string', i, fieldNames[i]);
            if (fieldNames[i].length === 0) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). " +
                    'Field names must not be empty.');
            }
        }
        this._internalPath = new FieldPath(fieldNames);
    }
    FieldPath$1.documentId = function () {
        return FieldPath$1._DOCUMENT_ID;
    };
    FieldPath$1.prototype.isEqual = function (other) {
        if (!(other instanceof FieldPath$1)) {
            throw invalidClassError('isEqual', 'FieldPath', 1, other);
        }
        return this._internalPath.isEqual(other._internalPath);
    };
    return FieldPath$1;
}());
/**
 * Internal Note: The backend doesn't technically support querying by
 * document ID. Instead it queries by the entire document name (full path
 * included), but in the cases we currently support documentId(), the net
 * effect is the same.
 */
FieldPath$1._DOCUMENT_ID = new FieldPath$1(FieldPath.keyField().canonicalString());
/**
 * Matches any characters in a field path string that are reserved.
 */
var RESERVED = new RegExp('[~\\*/\\[\\]]');
/**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
function fromDotSeparatedString(path) {
    var found = path.search(RESERVED);
    if (found >= 0) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + path + "). Paths must not contain " +
            "'~', '*', '/', '[', or ']'");
    }
    try {
        return new (FieldPath$1.bind.apply(FieldPath$1, tslib.__spreadArrays([void 0], path.split('.'))))();
    }
    catch (e) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + path + "). Paths must not be empty, " +
            "begin with '.', end with '.', or contain '..'");
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var OAuthToken = /** @class */ (function () {
    function OAuthToken(value, user) {
        this.user = user;
        this.type = 'OAuth';
        this.authHeaders = {};
        // Set the headers using Object Literal notation to avoid minification
        this.authHeaders['Authorization'] = "Bearer " + value;
    }
    return OAuthToken;
}());
/** A CredentialsProvider that always yields an empty token. */
var EmptyCredentialsProvider = /** @class */ (function () {
    function EmptyCredentialsProvider() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.changeListener = null;
    }
    EmptyCredentialsProvider.prototype.getToken = function () {
        return Promise.resolve(null);
    };
    EmptyCredentialsProvider.prototype.invalidateToken = function () { };
    EmptyCredentialsProvider.prototype.setChangeListener = function (changeListener) {
        debugAssert(!this.changeListener, 'Can only call setChangeListener() once.');
        this.changeListener = changeListener;
        // Fire with initial user.
        changeListener(User.UNAUTHENTICATED);
    };
    EmptyCredentialsProvider.prototype.removeChangeListener = function () {
        debugAssert(this.changeListener !== null, 'removeChangeListener() when no listener registered');
        this.changeListener = null;
    };
    return EmptyCredentialsProvider;
}());
var FirebaseCredentialsProvider = /** @class */ (function () {
    function FirebaseCredentialsProvider(authProvider) {
        var _this = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */
        this.tokenListener = null;
        /** Tracks the current User. */
        this.currentUser = User.UNAUTHENTICATED;
        this.receivedInitialUser = false;
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.tokenCounter = 0;
        /** The listener registered with setChangeListener(). */
        this.changeListener = null;
        this.forceRefresh = false;
        this.tokenListener = function () {
            _this.tokenCounter++;
            _this.currentUser = _this.getUser();
            _this.receivedInitialUser = true;
            if (_this.changeListener) {
                _this.changeListener(_this.currentUser);
            }
        };
        this.tokenCounter = 0;
        this.auth = authProvider.getImmediate({ optional: true });
        if (this.auth) {
            this.auth.addAuthTokenListener(this.tokenListener);
        }
        else {
            // if auth is not available, invoke tokenListener once with null token
            this.tokenListener(null);
            authProvider.get().then(function (auth) {
                _this.auth = auth;
                if (_this.tokenListener) {
                    // tokenListener can be removed by removeChangeListener()
                    _this.auth.addAuthTokenListener(_this.tokenListener);
                }
            }, function () {
                /* this.authProvider.get() never rejects */
            });
        }
    }
    FirebaseCredentialsProvider.prototype.getToken = function () {
        var _this = this;
        debugAssert(this.tokenListener != null, 'getToken cannot be called after listener removed.');
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        var initialTokenCounter = this.tokenCounter;
        var forceRefresh = this.forceRefresh;
        this.forceRefresh = false;
        if (!this.auth) {
            return Promise.resolve(null);
        }
        return this.auth.getToken(forceRefresh).then(function (tokenData) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            if (_this.tokenCounter !== initialTokenCounter) {
                throw new FirestoreError(Code.ABORTED, 'getToken aborted due to token change.');
            }
            else {
                if (tokenData) {
                    hardAssert(typeof tokenData.accessToken === 'string', 'Invalid tokenData returned from getToken():' + tokenData);
                    return new OAuthToken(tokenData.accessToken, _this.currentUser);
                }
                else {
                    return null;
                }
            }
        });
    };
    FirebaseCredentialsProvider.prototype.invalidateToken = function () {
        this.forceRefresh = true;
    };
    FirebaseCredentialsProvider.prototype.setChangeListener = function (changeListener) {
        debugAssert(!this.changeListener, 'Can only call setChangeListener() once.');
        this.changeListener = changeListener;
        // Fire the initial event
        if (this.receivedInitialUser) {
            changeListener(this.currentUser);
        }
    };
    FirebaseCredentialsProvider.prototype.removeChangeListener = function () {
        debugAssert(this.tokenListener != null, 'removeChangeListener() called twice');
        debugAssert(this.changeListener !== null, 'removeChangeListener() called when no listener registered');
        if (this.auth) {
            this.auth.removeAuthTokenListener(this.tokenListener);
        }
        this.tokenListener = null;
        this.changeListener = null;
    };
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    FirebaseCredentialsProvider.prototype.getUser = function () {
        var currentUid = this.auth && this.auth.getUid();
        hardAssert(currentUid === null || typeof currentUid === 'string', 'Received invalid UID: ' + currentUid);
        return new User(currentUid);
    };
    return FirebaseCredentialsProvider;
}());
/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */
var FirstPartyToken = /** @class */ (function () {
    function FirstPartyToken(gapi, sessionIndex) {
        this.gapi = gapi;
        this.sessionIndex = sessionIndex;
        this.type = 'FirstParty';
        this.user = User.FIRST_PARTY;
    }
    Object.defineProperty(FirstPartyToken.prototype, "authHeaders", {
        get: function () {
            var headers = {
                'X-Goog-AuthUser': this.sessionIndex
            };
            var authHeader = this.gapi.auth.getAuthHeaderValueForFirstParty([]);
            if (authHeader) {
                headers['Authorization'] = authHeader;
            }
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    return FirstPartyToken;
}());
/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */
var FirstPartyCredentialsProvider = /** @class */ (function () {
    function FirstPartyCredentialsProvider(gapi, sessionIndex) {
        this.gapi = gapi;
        this.sessionIndex = sessionIndex;
    }
    FirstPartyCredentialsProvider.prototype.getToken = function () {
        return Promise.resolve(new FirstPartyToken(this.gapi, this.sessionIndex));
    };
    FirstPartyCredentialsProvider.prototype.setChangeListener = function (changeListener) {
        // Fire with initial uid.
        changeListener(User.FIRST_PARTY);
    };
    FirstPartyCredentialsProvider.prototype.removeChangeListener = function () { };
    FirstPartyCredentialsProvider.prototype.invalidateToken = function () { };
    return FirstPartyCredentialsProvider;
}());
/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
function makeCredentialsProvider(credentials) {
    if (!credentials) {
        return new EmptyCredentialsProvider();
    }
    switch (credentials.type) {
        case 'gapi':
            var client = credentials.client;
            // Make sure this really is a Gapi client.
            hardAssert(!!(typeof client === 'object' &&
                client !== null &&
                client['auth'] &&
                client['auth']['getAuthHeaderValueForFirstParty']), 'unexpected gapi interface');
            return new FirstPartyCredentialsProvider(client, credentials.sessionIndex || '0');
        case 'provider':
            return credentials.client;
        default:
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'makeCredentialsProvider failed due to invalid credential type');
    }
}
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
function isPartialObserver(obj) {
    return implementsAnyMethods(obj, ['next', 'error', 'complete']);
}
/**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    var object = obj;
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in object && typeof object[method] === 'function') {
            return true;
        }
    }
    return false;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/** Helper function to assert Uint8Array is available at runtime. */
function assertUint8ArrayAvailable() {
    if (typeof Uint8Array === 'undefined') {
        throw new FirestoreError(Code.UNIMPLEMENTED, 'Uint8Arrays are not available in this environment.');
    }
}
/** Helper function to assert Base64 functions are available at runtime. */
function assertBase64Available() {
    if (!PlatformSupport.getPlatform().base64Available) {
        throw new FirestoreError(Code.UNIMPLEMENTED, 'Blobs are unavailable in Firestore in this environment.');
    }
}
/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */
var Blob = /** @class */ (function () {
    function Blob(byteString) {
        assertBase64Available();
        this._byteString = byteString;
    }
    Blob.fromBase64String = function (base64) {
        validateExactNumberOfArgs('Blob.fromBase64String', arguments, 1);
        validateArgType('Blob.fromBase64String', 'string', 1, base64);
        assertBase64Available();
        try {
            return new Blob(ByteString.fromBase64String(base64));
        }
        catch (e) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Failed to construct Blob from Base64 string: ' + e);
        }
    };
    Blob.fromUint8Array = function (array) {
        validateExactNumberOfArgs('Blob.fromUint8Array', arguments, 1);
        assertUint8ArrayAvailable();
        if (!(array instanceof Uint8Array)) {
            throw invalidClassError('Blob.fromUint8Array', 'Uint8Array', 1, array);
        }
        return new Blob(ByteString.fromUint8Array(array));
    };
    Blob.prototype.toBase64 = function () {
        validateExactNumberOfArgs('Blob.toBase64', arguments, 0);
        assertBase64Available();
        return this._byteString.toBase64();
    };
    Blob.prototype.toUint8Array = function () {
        validateExactNumberOfArgs('Blob.toUint8Array', arguments, 0);
        assertUint8ArrayAvailable();
        return this._byteString.toUint8Array();
    };
    Blob.prototype.toString = function () {
        return 'Blob(base64: ' + this.toBase64() + ')';
    };
    Blob.prototype.isEqual = function (other) {
        return this._byteString.isEqual(other._byteString);
    };
    return Blob;
}());
/**
 * @license
 * Copyright 2018 Google LLC
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
/** Transforms a value into a server-generated timestamp. */
var ServerTimestampTransform = /** @class */ (function () {
    function ServerTimestampTransform() {
    }
    ServerTimestampTransform.prototype.applyToLocalView = function (previousValue, localWriteTime) {
        return serverTimestamp(localWriteTime, previousValue);
    };
    ServerTimestampTransform.prototype.applyToRemoteDocument = function (previousValue, transformResult) {
        return transformResult;
    };
    ServerTimestampTransform.prototype.computeBaseValue = function (previousValue) {
        return null; // Server timestamps are idempotent and don't require a base value.
    };
    ServerTimestampTransform.prototype.isEqual = function (other) {
        return other instanceof ServerTimestampTransform;
    };
    return ServerTimestampTransform;
}());
ServerTimestampTransform.instance = new ServerTimestampTransform();
/** Transforms an array value via a union operation. */
var ArrayUnionTransformOperation = /** @class */ (function () {
    function ArrayUnionTransformOperation(elements) {
        this.elements = elements;
    }
    ArrayUnionTransformOperation.prototype.applyToLocalView = function (previousValue, localWriteTime) {
        return this.apply(previousValue);
    };
    ArrayUnionTransformOperation.prototype.applyToRemoteDocument = function (previousValue, transformResult) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(previousValue);
    };
    ArrayUnionTransformOperation.prototype.apply = function (previousValue) {
        var values = coercedFieldValuesArray(previousValue);
        var _loop_2 = function (toUnion) {
            if (!values.some(function (element) { return valueEquals(element, toUnion); })) {
                values.push(toUnion);
            }
        };
        for (var _i = 0, _c = this.elements; _i < _c.length; _i++) {
            var toUnion = _c[_i];
            _loop_2(toUnion);
        }
        return { arrayValue: { values: values } };
    };
    ArrayUnionTransformOperation.prototype.computeBaseValue = function (previousValue) {
        return null; // Array transforms are idempotent and don't require a base value.
    };
    ArrayUnionTransformOperation.prototype.isEqual = function (other) {
        return (other instanceof ArrayUnionTransformOperation &&
            arrayEquals(this.elements, other.elements, valueEquals));
    };
    return ArrayUnionTransformOperation;
}());
/** Transforms an array value via a remove operation. */
var ArrayRemoveTransformOperation = /** @class */ (function () {
    function ArrayRemoveTransformOperation(elements) {
        this.elements = elements;
    }
    ArrayRemoveTransformOperation.prototype.applyToLocalView = function (previousValue, localWriteTime) {
        return this.apply(previousValue);
    };
    ArrayRemoveTransformOperation.prototype.applyToRemoteDocument = function (previousValue, transformResult) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(previousValue);
    };
    ArrayRemoveTransformOperation.prototype.apply = function (previousValue) {
        var values = coercedFieldValuesArray(previousValue);
        var _loop_3 = function (toRemove) {
            values = values.filter(function (element) { return !valueEquals(element, toRemove); });
        };
        for (var _i = 0, _c = this.elements; _i < _c.length; _i++) {
            var toRemove = _c[_i];
            _loop_3(toRemove);
        }
        return { arrayValue: { values: values } };
    };
    ArrayRemoveTransformOperation.prototype.computeBaseValue = function (previousValue) {
        return null; // Array transforms are idempotent and don't require a base value.
    };
    ArrayRemoveTransformOperation.prototype.isEqual = function (other) {
        return (other instanceof ArrayRemoveTransformOperation &&
            arrayEquals(this.elements, other.elements, valueEquals));
    };
    return ArrayRemoveTransformOperation;
}());
/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */
var NumericIncrementTransformOperation = /** @class */ (function () {
    function NumericIncrementTransformOperation(serializer, operand) {
        this.serializer = serializer;
        this.operand = operand;
        debugAssert(isNumber(operand), 'NumericIncrementTransform transform requires a NumberValue');
    }
    NumericIncrementTransformOperation.prototype.applyToLocalView = function (previousValue, localWriteTime) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var baseValue = this.computeBaseValue(previousValue);
        var sum = this.asNumber(baseValue) + this.asNumber(this.operand);
        if (isInteger(baseValue) && isInteger(this.operand)) {
            return this.serializer.toInteger(sum);
        }
        else {
            return this.serializer.toDouble(sum);
        }
    };
    NumericIncrementTransformOperation.prototype.applyToRemoteDocument = function (previousValue, transformResult) {
        debugAssert(transformResult !== null, "Didn't receive transformResult for NUMERIC_ADD transform");
        return transformResult;
    };
    /**
     * Inspects the provided value, returning the provided value if it is already
     * a NumberValue, otherwise returning a coerced value of 0.
     */
    NumericIncrementTransformOperation.prototype.computeBaseValue = function (previousValue) {
        return isNumber(previousValue) ? previousValue : { integerValue: 0 };
    };
    NumericIncrementTransformOperation.prototype.isEqual = function (other) {
        return (other instanceof NumericIncrementTransformOperation &&
            valueEquals(this.operand, other.operand));
    };
    NumericIncrementTransformOperation.prototype.asNumber = function (value) {
        return normalizeNumber(value.integerValue || value.doubleValue);
    };
    return NumericIncrementTransformOperation;
}());
function coercedFieldValuesArray(value) {
    return isArray(value) && value.arrayValue.values
        ? value.arrayValue.values.slice()
        : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */
var FieldValueImpl = /** @class */ (function () {
    function FieldValueImpl(_methodName) {
        this._methodName = _methodName;
    }
    return FieldValueImpl;
}());
var DeleteFieldValueImpl = /** @class */ (function (_super) {
    tslib.__extends(DeleteFieldValueImpl, _super);
    function DeleteFieldValueImpl() {
        return _super.call(this, 'FieldValue.delete') || this;
    }
    DeleteFieldValueImpl.prototype.toFieldTransform = function (context) {
        if (context.dataSource === 2 /* MergeSet */) {
            // No transform to add for a delete, but we need to add it to our
            // fieldMask so it gets deleted.
            context.fieldMask.push(context.path);
        }
        else if (context.dataSource === 1 /* Update */) {
            debugAssert(context.path.length > 0, 'FieldValue.delete() at the top level should have already' +
                ' been handled.');
            throw context.createError('FieldValue.delete() can only appear at the top level ' +
                'of your update data');
        }
        else {
            // We shouldn't encounter delete sentinels for queries or non-merge set() calls.
            throw context.createError('FieldValue.delete() cannot be used with set() unless you pass ' +
                '{merge:true}');
        }
        return null;
    };
    DeleteFieldValueImpl.prototype.isEqual = function (other) {
        return other instanceof DeleteFieldValueImpl;
    };
    return DeleteFieldValueImpl;
}(FieldValueImpl));
var ServerTimestampFieldValueImpl = /** @class */ (function (_super) {
    tslib.__extends(ServerTimestampFieldValueImpl, _super);
    function ServerTimestampFieldValueImpl() {
        return _super.call(this, 'FieldValue.serverTimestamp') || this;
    }
    ServerTimestampFieldValueImpl.prototype.toFieldTransform = function (context) {
        return new FieldTransform(context.path, ServerTimestampTransform.instance);
    };
    ServerTimestampFieldValueImpl.prototype.isEqual = function (other) {
        return other instanceof ServerTimestampFieldValueImpl;
    };
    return ServerTimestampFieldValueImpl;
}(FieldValueImpl));
var ArrayUnionFieldValueImpl = /** @class */ (function (_super) {
    tslib.__extends(ArrayUnionFieldValueImpl, _super);
    function ArrayUnionFieldValueImpl(_elements) {
        var _this = _super.call(this, 'FieldValue.arrayUnion') || this;
        _this._elements = _elements;
        return _this;
    }
    ArrayUnionFieldValueImpl.prototype.toFieldTransform = function (context) {
        // Although array transforms are used with writes, the actual elements
        // being uniomed or removed are not considered writes since they cannot
        // contain any FieldValue sentinels, etc.
        var parseContext = new ParseContext({
            dataSource: 3 /* Argument */,
            methodName: this._methodName,
            arrayElement: true
        }, context.databaseId, context.serializer);
        var parsedElements = this._elements.map(function (element) { return parseData(element, parseContext); });
        var arrayUnion = new ArrayUnionTransformOperation(parsedElements);
        return new FieldTransform(context.path, arrayUnion);
    };
    ArrayUnionFieldValueImpl.prototype.isEqual = function (other) {
        // TODO(mrschmidt): Implement isEquals
        return this === other;
    };
    return ArrayUnionFieldValueImpl;
}(FieldValueImpl));
var ArrayRemoveFieldValueImpl = /** @class */ (function (_super) {
    tslib.__extends(ArrayRemoveFieldValueImpl, _super);
    function ArrayRemoveFieldValueImpl(_elements) {
        var _this = _super.call(this, 'FieldValue.arrayRemove') || this;
        _this._elements = _elements;
        return _this;
    }
    ArrayRemoveFieldValueImpl.prototype.toFieldTransform = function (context) {
        // Although array transforms are used with writes, the actual elements
        // being unioned or removed are not considered writes since they cannot
        // contain any FieldValue sentinels, etc.
        var parseContext = new ParseContext({
            dataSource: 3 /* Argument */,
            methodName: this._methodName,
            arrayElement: true
        }, context.databaseId, context.serializer);
        var parsedElements = this._elements.map(function (element) { return parseData(element, parseContext); });
        var arrayUnion = new ArrayRemoveTransformOperation(parsedElements);
        return new FieldTransform(context.path, arrayUnion);
    };
    ArrayRemoveFieldValueImpl.prototype.isEqual = function (other) {
        // TODO(mrschmidt): Implement isEquals
        return this === other;
    };
    return ArrayRemoveFieldValueImpl;
}(FieldValueImpl));
var NumericIncrementFieldValueImpl = /** @class */ (function (_super) {
    tslib.__extends(NumericIncrementFieldValueImpl, _super);
    function NumericIncrementFieldValueImpl(_operand) {
        var _this = _super.call(this, 'FieldValue.increment') || this;
        _this._operand = _operand;
        return _this;
    }
    NumericIncrementFieldValueImpl.prototype.toFieldTransform = function (context) {
        var parseContext = new ParseContext({
            dataSource: 3 /* Argument */,
            methodName: this._methodName
        }, context.databaseId, context.serializer);
        var operand = parseData(this._operand, parseContext);
        var numericIncrement = new NumericIncrementTransformOperation(context.serializer, operand);
        return new FieldTransform(context.path, numericIncrement);
    };
    NumericIncrementFieldValueImpl.prototype.isEqual = function (other) {
        // TODO(mrschmidt): Implement isEquals
        return this === other;
    };
    return NumericIncrementFieldValueImpl;
}(FieldValueImpl));
var FieldValue = /** @class */ (function () {
    function FieldValue() {
    }
    FieldValue.delete = function () {
        validateNoArgs('FieldValue.delete', arguments);
        return new DeleteFieldValueImpl();
    };
    FieldValue.serverTimestamp = function () {
        validateNoArgs('FieldValue.serverTimestamp', arguments);
        return new ServerTimestampFieldValueImpl();
    };
    FieldValue.arrayUnion = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('FieldValue.arrayUnion', arguments, 1);
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
        return new ArrayUnionFieldValueImpl(elements);
    };
    FieldValue.arrayRemove = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('FieldValue.arrayRemove', arguments, 1);
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
        return new ArrayRemoveFieldValueImpl(elements);
    };
    FieldValue.increment = function (n) {
        validateArgType('FieldValue.increment', 'number', 1, n);
        validateExactNumberOfArgs('FieldValue.increment', arguments, 1);
        return new NumericIncrementFieldValueImpl(n);
    };
    FieldValue.prototype.isEqual = function (other) {
        return this === other;
    };
    return FieldValue;
}());
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
/**
 * Immutable class representing a geo point as latitude-longitude pair.
 * This class is directly exposed in the public API, including its constructor.
 */
var GeoPoint = /** @class */ (function () {
    function GeoPoint(latitude, longitude) {
        validateExactNumberOfArgs('GeoPoint', arguments, 2);
        validateArgType('GeoPoint', 'number', 1, latitude);
        validateArgType('GeoPoint', 'number', 2, longitude);
        if (!isFinite(latitude) || latitude < -90 || latitude > 90) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Latitude must be a number between -90 and 90, but was: ' + latitude);
        }
        if (!isFinite(longitude) || longitude < -180 || longitude > 180) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Longitude must be a number between -180 and 180, but was: ' + longitude);
        }
        this._lat = latitude;
        this._long = longitude;
    }
    Object.defineProperty(GeoPoint.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function () {
            return this._lat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoPoint.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function () {
            return this._long;
        },
        enumerable: true,
        configurable: true
    });
    GeoPoint.prototype.isEqual = function (other) {
        return this._lat === other._lat && this._long === other._long;
    };
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    GeoPoint.prototype._compareTo = function (other) {
        return (primitiveComparator(this._lat, other._lat) ||
            primitiveComparator(this._long, other._long));
    };
    return GeoPoint;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var RESERVED_FIELD_REGEX = /^__.*__$/;
/** The result of parsing document data (e.g. for a setData call). */
var ParsedSetData = /** @class */ (function () {
    function ParsedSetData(data, fieldMask, fieldTransforms) {
        this.data = data;
        this.fieldMask = fieldMask;
        this.fieldTransforms = fieldTransforms;
    }
    ParsedSetData.prototype.toMutations = function (key, precondition) {
        var mutations = [];
        if (this.fieldMask !== null) {
            mutations.push(new PatchMutation(key, this.data, this.fieldMask, precondition));
        }
        else {
            mutations.push(new SetMutation(key, this.data, precondition));
        }
        if (this.fieldTransforms.length > 0) {
            mutations.push(new TransformMutation(key, this.fieldTransforms));
        }
        return mutations;
    };
    return ParsedSetData;
}());
/** The result of parsing "update" data (i.e. for an updateData call). */
var ParsedUpdateData = /** @class */ (function () {
    function ParsedUpdateData(data, fieldMask, fieldTransforms) {
        this.data = data;
        this.fieldMask = fieldMask;
        this.fieldTransforms = fieldTransforms;
    }
    ParsedUpdateData.prototype.toMutations = function (key, precondition) {
        var mutations = [
            new PatchMutation(key, this.data, this.fieldMask, precondition)
        ];
        if (this.fieldTransforms.length > 0) {
            mutations.push(new TransformMutation(key, this.fieldTransforms));
        }
        return mutations;
    };
    return ParsedUpdateData;
}());
function isWrite(dataSource) {
    switch (dataSource) {
        case 0 /* Set */: // fall through
        case 2 /* MergeSet */: // fall through
        case 1 /* Update */:
            return true;
        case 3 /* Argument */:
        case 4 /* ArrayArgument */:
            return false;
        default:
            throw fail("Unexpected case for UserDataSource: " + dataSource);
    }
}
/** A "context" object passed around while parsing user data. */
var ParseContext = /** @class */ (function () {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings The settings for the parser.
     * @param databaseId The database ID of the Firestore instance.
     * @param serializer The serializer to use to generate the Value proto.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function ParseContext(settings, databaseId, serializer, fieldTransforms, fieldMask) {
        this.settings = settings;
        this.databaseId = databaseId;
        this.serializer = serializer;
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        if (fieldTransforms === undefined) {
            this.validatePath();
        }
        this.fieldTransforms = fieldTransforms || [];
        this.fieldMask = fieldMask || [];
    }
    Object.defineProperty(ParseContext.prototype, "path", {
        get: function () {
            return this.settings.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseContext.prototype, "dataSource", {
        get: function () {
            return this.settings.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    /** Returns a new context with the specified settings overwritten. */
    ParseContext.prototype.contextWith = function (configuration) {
        return new ParseContext(Object.assign(Object.assign({}, this.settings), configuration), this.databaseId, this.serializer, this.fieldTransforms, this.fieldMask);
    };
    ParseContext.prototype.childContextForField = function (field) {
        var _a;
        var childPath = (_a = this.path) === null || _a === void 0 ? void 0 : _a.child(field);
        var context = this.contextWith({ path: childPath, arrayElement: false });
        context.validatePathSegment(field);
        return context;
    };
    ParseContext.prototype.childContextForFieldPath = function (field) {
        var _a;
        var childPath = (_a = this.path) === null || _a === void 0 ? void 0 : _a.child(field);
        var context = this.contextWith({ path: childPath, arrayElement: false });
        context.validatePath();
        return context;
    };
    ParseContext.prototype.childContextForArray = function (index) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.contextWith({ path: undefined, arrayElement: true });
    };
    ParseContext.prototype.createError = function (reason) {
        var fieldDescription = !this.path || this.path.isEmpty()
            ? ''
            : " (found in field " + this.path.toString() + ")";
        return new FirestoreError(Code.INVALID_ARGUMENT, "Function " + this.settings.methodName + "() called with invalid data. " +
            reason +
            fieldDescription);
    };
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
    ParseContext.prototype.contains = function (fieldPath) {
        return (this.fieldMask.find(function (field) { return fieldPath.isPrefixOf(field); }) !== undefined ||
            this.fieldTransforms.find(function (transform) { return fieldPath.isPrefixOf(transform.field); }) !== undefined);
    };
    ParseContext.prototype.validatePath = function () {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (!this.path) {
            return;
        }
        for (var i = 0; i < this.path.length; i++) {
            this.validatePathSegment(this.path.get(i));
        }
    };
    ParseContext.prototype.validatePathSegment = function (segment) {
        if (segment.length === 0) {
            throw this.createError('Document fields must not be empty');
        }
        if (isWrite(this.dataSource) && RESERVED_FIELD_REGEX.test(segment)) {
            throw this.createError('Document fields cannot begin and end with "__"');
        }
    };
    return ParseContext;
}());
/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
var UserDataReader = /** @class */ (function () {
    function UserDataReader(databaseId, serializer) {
        this.databaseId = databaseId;
        this.serializer =
            serializer || PlatformSupport.getPlatform().newSerializer(databaseId);
    }
    /** Parse document data from a non-merge set() call. */
    UserDataReader.prototype.parseSetData = function (methodName, input) {
        var context = this.createContext(0 /* Set */, methodName);
        validatePlainObject('Data must be an object, but it was:', context, input);
        var updateData = parseObject(input, context);
        return new ParsedSetData(new ObjectValue(updateData), 
        /* fieldMask= */ null, context.fieldTransforms);
    };
    /** Parse document data from a set() call with '{merge:true}'. */
    UserDataReader.prototype.parseMergeData = function (methodName, input, fieldPaths) {
        var context = this.createContext(2 /* MergeSet */, methodName);
        validatePlainObject('Data must be an object, but it was:', context, input);
        var updateData = parseObject(input, context);
        var fieldMask;
        var fieldTransforms;
        if (!fieldPaths) {
            fieldMask = new FieldMask(context.fieldMask);
            fieldTransforms = context.fieldTransforms;
        }
        else {
            var validatedFieldPaths = [];
            for (var _i = 0, fieldPaths_1 = fieldPaths; _i < fieldPaths_1.length; _i++) {
                var stringOrFieldPath = fieldPaths_1[_i];
                var fieldPath = void 0;
                if (stringOrFieldPath instanceof FieldPath$1) {
                    fieldPath = stringOrFieldPath._internalPath;
                }
                else if (typeof stringOrFieldPath === 'string') {
                    fieldPath = fieldPathFromDotSeparatedString(methodName, stringOrFieldPath);
                }
                else {
                    throw fail('Expected stringOrFieldPath to be a string or a FieldPath');
                }
                if (!context.contains(fieldPath)) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Field '" + fieldPath + "' is specified in your field mask but missing from your input data.");
                }
                if (!fieldMaskContains(validatedFieldPaths, fieldPath)) {
                    validatedFieldPaths.push(fieldPath);
                }
            }
            fieldMask = new FieldMask(validatedFieldPaths);
            fieldTransforms = context.fieldTransforms.filter(function (transform) { return fieldMask.covers(transform.field); });
        }
        return new ParsedSetData(new ObjectValue(updateData), fieldMask, fieldTransforms);
    };
    /** Parse update data from an update() call. */
    UserDataReader.prototype.parseUpdateData = function (methodName, input) {
        var context = this.createContext(1 /* Update */, methodName);
        validatePlainObject('Data must be an object, but it was:', context, input);
        var fieldMaskPaths = [];
        var updateData = new ObjectValueBuilder();
        forEach(input, function (key, value) {
            var path = fieldPathFromDotSeparatedString(methodName, key);
            var childContext = context.childContextForFieldPath(path);
            if (value instanceof DeleteFieldValueImpl) {
                // Add it to the field mask, but don't add anything to updateData.
                fieldMaskPaths.push(path);
            }
            else {
                var parsedValue = parseData(value, childContext);
                if (parsedValue != null) {
                    fieldMaskPaths.push(path);
                    updateData.set(path, parsedValue);
                }
            }
        });
        var mask = new FieldMask(fieldMaskPaths);
        return new ParsedUpdateData(updateData.build(), mask, context.fieldTransforms);
    };
    /** Parse update data from a list of field/value arguments. */
    UserDataReader.prototype.parseUpdateVarargs = function (methodName, field, value, moreFieldsAndValues) {
        var context = this.createContext(1 /* Update */, methodName);
        var keys = [fieldPathFromArgument(methodName, field)];
        var values = [value];
        if (moreFieldsAndValues.length % 2 !== 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + methodName + "() needs to be called with an even number " +
                'of arguments that alternate between field names and values.');
        }
        for (var i = 0; i < moreFieldsAndValues.length; i += 2) {
            keys.push(fieldPathFromArgument(methodName, moreFieldsAndValues[i]));
            values.push(moreFieldsAndValues[i + 1]);
        }
        var fieldMaskPaths = [];
        var updateData = new ObjectValueBuilder();
        // We iterate in reverse order to pick the last value for a field if the
        // user specified the field multiple times.
        for (var i = keys.length - 1; i >= 0; --i) {
            if (!fieldMaskContains(fieldMaskPaths, keys[i])) {
                var path = keys[i];
                var value_1 = values[i];
                var childContext = context.childContextForFieldPath(path);
                if (value_1 instanceof DeleteFieldValueImpl) {
                    // Add it to the field mask, but don't add anything to updateData.
                    fieldMaskPaths.push(path);
                }
                else {
                    var parsedValue = parseData(value_1, childContext);
                    if (parsedValue != null) {
                        fieldMaskPaths.push(path);
                        updateData.set(path, parsedValue);
                    }
                }
            }
        }
        var mask = new FieldMask(fieldMaskPaths);
        return new ParsedUpdateData(updateData.build(), mask, context.fieldTransforms);
    };
    /** Creates a new top-level parse context. */
    UserDataReader.prototype.createContext = function (dataSource, methodName) {
        return new ParseContext({
            dataSource: dataSource,
            methodName: methodName,
            path: FieldPath.EMPTY_PATH,
            arrayElement: false
        }, this.databaseId, this.serializer);
    };
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */
    UserDataReader.prototype.parseQueryValue = function (methodName, input, allowArrays) {
        if (allowArrays === void 0) { allowArrays = false; }
        var context = this.createContext(allowArrays ? 4 /* ArrayArgument */ : 3 /* Argument */, methodName);
        var parsed = parseData(input, context);
        debugAssert(parsed != null, 'Parsed data should not be null.');
        debugAssert(context.fieldTransforms.length === 0, 'Field transforms should have been disallowed.');
        return parsed;
    };
    return UserDataReader;
}());
/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */
function parseData(input, context) {
    if (looksLikeJsonObject(input)) {
        validatePlainObject('Unsupported field value:', context, input);
        return parseObject(input, context);
    }
    else if (input instanceof FieldValueImpl) {
        // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.
        parseSentinelFieldValue(input, context);
        return null;
    }
    else {
        // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        if (context.path) {
            context.fieldMask.push(context.path);
        }
        if (input instanceof Array) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            // In the case of IN queries, the parsed data is an array (representing
            // the set of values to be included for the IN query) that may directly
            // contain additional arrays (each representing an individual field
            // value), so we disable this validation.
            if (context.settings.arrayElement &&
                context.dataSource !== 4 /* ArrayArgument */) {
                throw context.createError('Nested arrays are not supported');
            }
            return parseArray(input, context);
        }
        else {
            return parseScalarValue(input, context);
        }
    }
}
function parseObject(obj, context) {
    var fields = {};
    if (isEmpty(obj)) {
        // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        if (context.path && context.path.length > 0) {
            context.fieldMask.push(context.path);
        }
    }
    else {
        forEach(obj, function (key, val) {
            var parsedValue = parseData(val, context.childContextForField(key));
            if (parsedValue != null) {
                fields[key] = parsedValue;
            }
        });
    }
    return { mapValue: { fields: fields } };
}
function parseArray(array, context) {
    var values = [];
    var entryIndex = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var entry = array_1[_i];
        var parsedEntry = parseData(entry, context.childContextForArray(entryIndex));
        if (parsedEntry == null) {
            // Just include nulls in the array for fields being replaced with a
            // sentinel.
            parsedEntry = { nullValue: 'NULL_VALUE' };
        }
        values.push(parsedEntry);
        entryIndex++;
    }
    return { arrayValue: { values: values } };
}
/**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
function parseSentinelFieldValue(value, context) {
    // Sentinels are only supported with writes, and not within arrays.
    if (!isWrite(context.dataSource)) {
        throw context.createError(value._methodName + "() can only be used with update() and set()");
    }
    if (context.path === null) {
        throw context.createError(value._methodName + "() is not currently supported inside arrays");
    }
    var fieldTransform = value.toFieldTransform(context);
    if (fieldTransform) {
        context.fieldTransforms.push(fieldTransform);
    }
}
/**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @return The parsed value
 */
function parseScalarValue(value, context) {
    if (value === null) {
        return { nullValue: 'NULL_VALUE' };
    }
    else if (typeof value === 'number') {
        return context.serializer.toNumber(value);
    }
    else if (typeof value === 'boolean') {
        return { booleanValue: value };
    }
    else if (typeof value === 'string') {
        return { stringValue: value };
    }
    else if (value instanceof Date) {
        var timestamp = Timestamp.fromDate(value);
        return { timestampValue: context.serializer.toTimestamp(timestamp) };
    }
    else if (value instanceof Timestamp) {
        // Firestore backend truncates precision down to microseconds. To ensure
        // offline mode works the same with regards to truncation, perform the
        // truncation immediately without waiting for the backend to do that.
        var timestamp = new Timestamp(value.seconds, Math.floor(value.nanoseconds / 1000) * 1000);
        return { timestampValue: context.serializer.toTimestamp(timestamp) };
    }
    else if (value instanceof GeoPoint) {
        return {
            geoPointValue: {
                latitude: value.latitude,
                longitude: value.longitude
            }
        };
    }
    else if (value instanceof Blob) {
        return { bytesValue: context.serializer.toBytes(value) };
    }
    else if (value instanceof DocumentReference) {
        var thisDb = context.databaseId;
        var otherDb = value.firestore._databaseId;
        if (!otherDb.isEqual(thisDb)) {
            throw context.createError('Document reference is for database ' +
                (otherDb.projectId + "/" + otherDb.database + " but should be ") +
                ("for database " + thisDb.projectId + "/" + thisDb.database));
        }
        return {
            referenceValue: context.serializer.toResourceName(value._key.path, value.firestore._databaseId)
        };
    }
    else {
        throw context.createError("Unsupported field value: " + valueDescription(value));
    }
}
/**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */
function looksLikeJsonObject(input) {
    return (typeof input === 'object' &&
        input !== null &&
        !(input instanceof Array) &&
        !(input instanceof Date) &&
        !(input instanceof Timestamp) &&
        !(input instanceof GeoPoint) &&
        !(input instanceof Blob) &&
        !(input instanceof DocumentReference) &&
        !(input instanceof FieldValueImpl));
}
function validatePlainObject(message, context, input) {
    if (!looksLikeJsonObject(input) || !isPlainObject(input)) {
        var description = valueDescription(input);
        if (description === 'an object') {
            // Massage the error if it was an object.
            throw context.createError(message + ' a custom object');
        }
        else {
            throw context.createError(message + ' ' + description);
        }
    }
}
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */
function fieldPathFromArgument(methodName, path) {
    if (path instanceof FieldPath$1) {
        return path._internalPath;
    }
    else if (typeof path === 'string') {
        return fieldPathFromDotSeparatedString(methodName, path);
    }
    else {
        var message = 'Field path arguments must be of type string or FieldPath.';
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + methodName + "() called with invalid data. " + message);
    }
}
/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */
function fieldPathFromDotSeparatedString(methodName, path) {
    try {
        return fromDotSeparatedString(path)._internalPath;
    }
    catch (e) {
        var message = errorMessage(e);
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + methodName + "() called with invalid data. " + message);
    }
}
/**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */
function errorMessage(error) {
    return error instanceof Error ? error.message : error.toString();
}
/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */
function fieldMaskContains(haystack, needle) {
    return haystack.some(function (v) { return v.isEqual(needle); });
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var ExistenceFilter = /** @class */ (function () {
    // TODO(b/33078163): just use simplest form of existence filter for now
    function ExistenceFilter(count) {
        this.count = count;
    }
    return ExistenceFilter;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var DIRECTIONS = (function () {
    var dirs = {};
    dirs["asc" /* ASCENDING */] = 'ASCENDING';
    dirs["desc" /* DESCENDING */] = 'DESCENDING';
    return dirs;
})();
var OPERATORS = (function () {
    var ops = {};
    ops["<" /* LESS_THAN */] = 'LESS_THAN';
    ops["<=" /* LESS_THAN_OR_EQUAL */] = 'LESS_THAN_OR_EQUAL';
    ops[">" /* GREATER_THAN */] = 'GREATER_THAN';
    ops[">=" /* GREATER_THAN_OR_EQUAL */] = 'GREATER_THAN_OR_EQUAL';
    ops["==" /* EQUAL */] = 'EQUAL';
    ops["array-contains" /* ARRAY_CONTAINS */] = 'ARRAY_CONTAINS';
    ops["in" /* IN */] = 'IN';
    ops["array-contains-any" /* ARRAY_CONTAINS_ANY */] = 'ARRAY_CONTAINS_ANY';
    return ops;
})();
function assertPresent(value, description) {
    debugAssert(!isNullOrUndefined(value), description + ' is missing');
}
/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
var JsonProtoSerializer = /** @class */ (function () {
    function JsonProtoSerializer(databaseId, options) {
        this.databaseId = databaseId;
        this.options = options;
    }
    JsonProtoSerializer.prototype.fromRpcStatus = function (status) {
        var code = status.code === undefined
            ? Code.UNKNOWN
            : mapCodeFromRpcCode(status.code);
        return new FirestoreError(code, status.message || '');
    };
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    JsonProtoSerializer.prototype.toInt32Proto = function (val) {
        if (this.options.useProto3Json || isNullOrUndefined(val)) {
            return val;
        }
        else {
            return { value: val };
        }
    };
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     */
    JsonProtoSerializer.prototype.fromInt32Proto = function (val) {
        var result;
        if (typeof val === 'object') {
            result = val.value;
        }
        else {
            result = val;
        }
        return isNullOrUndefined(result) ? null : result;
    };
    /**
     * Returns an IntegerValue for `value`.
     */
    JsonProtoSerializer.prototype.toInteger = function (value) {
        return { integerValue: '' + value };
    };
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */
    JsonProtoSerializer.prototype.toDouble = function (value) {
        if (this.options.useProto3Json) {
            if (isNaN(value)) {
                return { doubleValue: 'NaN' };
            }
            else if (value === Infinity) {
                return { doubleValue: 'Infinity' };
            }
            else if (value === -Infinity) {
                return { doubleValue: '-Infinity' };
            }
        }
        return { doubleValue: isNegativeZero(value) ? '-0' : value };
    };
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */
    JsonProtoSerializer.prototype.toNumber = function (value) {
        return isSafeInteger(value) ? this.toInteger(value) : this.toDouble(value);
    };
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */
    JsonProtoSerializer.prototype.toTimestamp = function (timestamp) {
        if (this.options.useProto3Json) {
            // Serialize to ISO-8601 date format, but with full nano resolution.
            // Since JS Date has only millis, let's only use it for the seconds and
            // then manually add the fractions to the end.
            var jsDateStr = new Date(timestamp.seconds * 1000).toISOString();
            // Remove .xxx frac part and Z in the end.
            var strUntilSeconds = jsDateStr.replace(/\.\d*/, '').replace('Z', '');
            // Pad the fraction out to 9 digits (nanos).
            var nanoStr = ('000000000' + timestamp.nanoseconds).slice(-9);
            return strUntilSeconds + "." + nanoStr + "Z";
        }
        else {
            return {
                seconds: '' + timestamp.seconds,
                nanos: timestamp.nanoseconds
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            };
        }
    };
    JsonProtoSerializer.prototype.fromTimestamp = function (date) {
        var timestamp = normalizeTimestamp(date);
        return new Timestamp(timestamp.seconds, timestamp.nanos);
    };
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */
    JsonProtoSerializer.prototype.toBytes = function (bytes) {
        if (this.options.useProto3Json) {
            return bytes.toBase64();
        }
        else {
            return bytes.toUint8Array();
        }
    };
    /**
     * Returns a ByteString based on the proto string value.
     */
    JsonProtoSerializer.prototype.fromBytes = function (value) {
        if (this.options.useProto3Json) {
            hardAssert(value === undefined || typeof value === 'string', 'value must be undefined or a string when using proto3 Json');
            return ByteString.fromBase64String(value ? value : '');
        }
        else {
            hardAssert(value === undefined || value instanceof Uint8Array, 'value must be undefined or Uint8Array');
            return ByteString.fromUint8Array(value ? value : new Uint8Array());
        }
    };
    JsonProtoSerializer.prototype.toVersion = function (version) {
        return this.toTimestamp(version.toTimestamp());
    };
    JsonProtoSerializer.prototype.fromVersion = function (version) {
        hardAssert(!!version, "Trying to deserialize version that isn't set");
        return SnapshotVersion.fromTimestamp(this.fromTimestamp(version));
    };
    JsonProtoSerializer.prototype.toResourceName = function (path, databaseId) {
        return this.fullyQualifiedPrefixPath(databaseId || this.databaseId)
            .child('documents')
            .child(path)
            .canonicalString();
    };
    JsonProtoSerializer.prototype.fromResourceName = function (name) {
        var resource = ResourcePath.fromString(name);
        hardAssert(isValidResourceName(resource), 'Tried to deserialize invalid key ' + resource.toString());
        return resource;
    };
    JsonProtoSerializer.prototype.toName = function (key) {
        return this.toResourceName(key.path);
    };
    JsonProtoSerializer.prototype.fromName = function (name) {
        var resource = this.fromResourceName(name);
        hardAssert(resource.get(1) === this.databaseId.projectId, 'Tried to deserialize key from different project: ' +
            resource.get(1) +
            ' vs ' +
            this.databaseId.projectId);
        hardAssert((!resource.get(3) && !this.databaseId.database) ||
            resource.get(3) === this.databaseId.database, 'Tried to deserialize key from different database: ' +
            resource.get(3) +
            ' vs ' +
            this.databaseId.database);
        return new DocumentKey(this.extractLocalPathFromResourceName(resource));
    };
    JsonProtoSerializer.prototype.toQueryPath = function (path) {
        return this.toResourceName(path);
    };
    JsonProtoSerializer.prototype.fromQueryPath = function (name) {
        var resourceName = this.fromResourceName(name);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
        if (resourceName.length === 4) {
            return ResourcePath.EMPTY_PATH;
        }
        return this.extractLocalPathFromResourceName(resourceName);
    };
    Object.defineProperty(JsonProtoSerializer.prototype, "encodedDatabaseId", {
        get: function () {
            var path = new ResourcePath([
                'projects',
                this.databaseId.projectId,
                'databases',
                this.databaseId.database
            ]);
            return path.canonicalString();
        },
        enumerable: true,
        configurable: true
    });
    JsonProtoSerializer.prototype.fullyQualifiedPrefixPath = function (databaseId) {
        return new ResourcePath([
            'projects',
            databaseId.projectId,
            'databases',
            databaseId.database
        ]);
    };
    JsonProtoSerializer.prototype.extractLocalPathFromResourceName = function (resourceName) {
        hardAssert(resourceName.length > 4 && resourceName.get(4) === 'documents', 'tried to deserialize invalid key ' + resourceName.toString());
        return resourceName.popFirst(5);
    };
    /** Creates an api.Document from key and fields (but no create/update time) */
    JsonProtoSerializer.prototype.toMutationDocument = function (key, fields) {
        return {
            name: this.toName(key),
            fields: fields.proto.mapValue.fields
        };
    };
    JsonProtoSerializer.prototype.toDocument = function (document) {
        debugAssert(!document.hasLocalMutations, "Can't serialize documents with mutations.");
        return {
            name: this.toName(document.key),
            fields: document.toProto().mapValue.fields,
            updateTime: this.toTimestamp(document.version.toTimestamp())
        };
    };
    JsonProtoSerializer.prototype.fromDocument = function (document, hasCommittedMutations) {
        var key = this.fromName(document.name);
        var version = this.fromVersion(document.updateTime);
        var data = new ObjectValue({ mapValue: { fields: document.fields } });
        return new Document(key, version, data, {
            hasCommittedMutations: !!hasCommittedMutations
        });
    };
    JsonProtoSerializer.prototype.fromFound = function (doc) {
        hardAssert(!!doc.found, 'Tried to deserialize a found document from a missing document.');
        assertPresent(doc.found.name, 'doc.found.name');
        assertPresent(doc.found.updateTime, 'doc.found.updateTime');
        var key = this.fromName(doc.found.name);
        var version = this.fromVersion(doc.found.updateTime);
        var data = new ObjectValue({ mapValue: { fields: doc.found.fields } });
        return new Document(key, version, data, {});
    };
    JsonProtoSerializer.prototype.fromMissing = function (result) {
        hardAssert(!!result.missing, 'Tried to deserialize a missing document from a found document.');
        hardAssert(!!result.readTime, 'Tried to deserialize a missing document without a read time.');
        var key = this.fromName(result.missing);
        var version = this.fromVersion(result.readTime);
        return new NoDocument(key, version);
    };
    JsonProtoSerializer.prototype.fromMaybeDocument = function (result) {
        if ('found' in result) {
            return this.fromFound(result);
        }
        else if ('missing' in result) {
            return this.fromMissing(result);
        }
        return fail('invalid batch get response: ' + JSON.stringify(result));
    };
    JsonProtoSerializer.prototype.fromWatchChange = function (change) {
        var watchChange;
        if ('targetChange' in change) {
            assertPresent(change.targetChange, 'targetChange');
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var state = this.fromWatchTargetChangeState(change.targetChange.targetChangeType || 'NO_CHANGE');
            var targetIds = change.targetChange.targetIds || [];
            var resumeToken = this.fromBytes(change.targetChange.resumeToken);
            var causeProto = change.targetChange.cause;
            var cause = causeProto && this.fromRpcStatus(causeProto);
            watchChange = new WatchTargetChange(state, targetIds, resumeToken, cause || null);
        }
        else if ('documentChange' in change) {
            assertPresent(change.documentChange, 'documentChange');
            var entityChange = change.documentChange;
            assertPresent(entityChange.document, 'documentChange.name');
            assertPresent(entityChange.document.name, 'documentChange.document.name');
            assertPresent(entityChange.document.updateTime, 'documentChange.document.updateTime');
            var key = this.fromName(entityChange.document.name);
            var version_1 = this.fromVersion(entityChange.document.updateTime);
            var data = new ObjectValue({
                mapValue: { fields: entityChange.document.fields }
            });
            var doc = new Document(key, version_1, data, {});
            var updatedTargetIds = entityChange.targetIds || [];
            var removedTargetIds = entityChange.removedTargetIds || [];
            watchChange = new DocumentWatchChange(updatedTargetIds, removedTargetIds, doc.key, doc);
        }
        else if ('documentDelete' in change) {
            assertPresent(change.documentDelete, 'documentDelete');
            var docDelete = change.documentDelete;
            assertPresent(docDelete.document, 'documentDelete.document');
            var key = this.fromName(docDelete.document);
            var version_2 = docDelete.readTime
                ? this.fromVersion(docDelete.readTime)
                : SnapshotVersion.min();
            var doc = new NoDocument(key, version_2);
            var removedTargetIds = docDelete.removedTargetIds || [];
            watchChange = new DocumentWatchChange([], removedTargetIds, doc.key, doc);
        }
        else if ('documentRemove' in change) {
            assertPresent(change.documentRemove, 'documentRemove');
            var docRemove = change.documentRemove;
            assertPresent(docRemove.document, 'documentRemove');
            var key = this.fromName(docRemove.document);
            var removedTargetIds = docRemove.removedTargetIds || [];
            watchChange = new DocumentWatchChange([], removedTargetIds, key, null);
        }
        else if ('filter' in change) {
            // TODO(dimond): implement existence filter parsing with strategy.
            assertPresent(change.filter, 'filter');
            var filter = change.filter;
            assertPresent(filter.targetId, 'filter.targetId');
            var count = filter.count || 0;
            var existenceFilter = new ExistenceFilter(count);
            var targetId = filter.targetId;
            watchChange = new ExistenceFilterChange(targetId, existenceFilter);
        }
        else {
            return fail('Unknown change type ' + JSON.stringify(change));
        }
        return watchChange;
    };
    JsonProtoSerializer.prototype.fromWatchTargetChangeState = function (state) {
        if (state === 'NO_CHANGE') {
            return 0 /* NoChange */;
        }
        else if (state === 'ADD') {
            return 1 /* Added */;
        }
        else if (state === 'REMOVE') {
            return 2 /* Removed */;
        }
        else if (state === 'CURRENT') {
            return 3 /* Current */;
        }
        else if (state === 'RESET') {
            return 4 /* Reset */;
        }
        else {
            return fail('Got unexpected TargetChange.state: ' + state);
        }
    };
    JsonProtoSerializer.prototype.versionFromListenResponse = function (change) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!('targetChange' in change)) {
            return SnapshotVersion.min();
        }
        var targetChange = change.targetChange;
        if (targetChange.targetIds && targetChange.targetIds.length) {
            return SnapshotVersion.min();
        }
        if (!targetChange.readTime) {
            return SnapshotVersion.min();
        }
        return this.fromVersion(targetChange.readTime);
    };
    JsonProtoSerializer.prototype.toMutation = function (mutation) {
        var _this = this;
        var result;
        if (mutation instanceof SetMutation) {
            result = {
                update: this.toMutationDocument(mutation.key, mutation.value)
            };
        }
        else if (mutation instanceof DeleteMutation) {
            result = { delete: this.toName(mutation.key) };
        }
        else if (mutation instanceof PatchMutation) {
            result = {
                update: this.toMutationDocument(mutation.key, mutation.data),
                updateMask: this.toDocumentMask(mutation.fieldMask)
            };
        }
        else if (mutation instanceof TransformMutation) {
            result = {
                transform: {
                    document: this.toName(mutation.key),
                    fieldTransforms: mutation.fieldTransforms.map(function (transform) { return _this.toFieldTransform(transform); })
                }
            };
        }
        else if (mutation instanceof VerifyMutation) {
            result = {
                verify: this.toName(mutation.key)
            };
        }
        else {
            return fail('Unknown mutation type ' + mutation.type);
        }
        if (!mutation.precondition.isNone) {
            result.currentDocument = this.toPrecondition(mutation.precondition);
        }
        return result;
    };
    JsonProtoSerializer.prototype.fromMutation = function (proto) {
        var _this = this;
        var precondition = proto.currentDocument
            ? this.fromPrecondition(proto.currentDocument)
            : Precondition.none();
        if (proto.update) {
            assertPresent(proto.update.name, 'name');
            var key = this.fromName(proto.update.name);
            var value = new ObjectValue({
                mapValue: { fields: proto.update.fields }
            });
            if (proto.updateMask) {
                var fieldMask = this.fromDocumentMask(proto.updateMask);
                return new PatchMutation(key, value, fieldMask, precondition);
            }
            else {
                return new SetMutation(key, value, precondition);
            }
        }
        else if (proto.delete) {
            var key = this.fromName(proto.delete);
            return new DeleteMutation(key, precondition);
        }
        else if (proto.transform) {
            var key = this.fromName(proto.transform.document);
            var fieldTransforms = proto.transform.fieldTransforms.map(function (transform) { return _this.fromFieldTransform(transform); });
            hardAssert(precondition.exists === true, 'Transforms only support precondition "exists == true"');
            return new TransformMutation(key, fieldTransforms);
        }
        else if (proto.verify) {
            var key = this.fromName(proto.verify);
            return new VerifyMutation(key, precondition);
        }
        else {
            return fail('unknown mutation proto: ' + JSON.stringify(proto));
        }
    };
    JsonProtoSerializer.prototype.toPrecondition = function (precondition) {
        debugAssert(!precondition.isNone, "Can't serialize an empty precondition");
        if (precondition.updateTime !== undefined) {
            return {
                updateTime: this.toVersion(precondition.updateTime)
            };
        }
        else if (precondition.exists !== undefined) {
            return { exists: precondition.exists };
        }
        else {
            return fail('Unknown precondition');
        }
    };
    JsonProtoSerializer.prototype.fromPrecondition = function (precondition) {
        if (precondition.updateTime !== undefined) {
            return Precondition.updateTime(this.fromVersion(precondition.updateTime));
        }
        else if (precondition.exists !== undefined) {
            return Precondition.exists(precondition.exists);
        }
        else {
            return Precondition.none();
        }
    };
    JsonProtoSerializer.prototype.fromWriteResult = function (proto, commitTime) {
        // NOTE: Deletes don't have an updateTime.
        var version = proto.updateTime
            ? this.fromVersion(proto.updateTime)
            : this.fromVersion(commitTime);
        if (version.isEqual(SnapshotVersion.min())) {
            // The Firestore Emulator currently returns an update time of 0 for
            // deletes of non-existing documents (rather than null). This breaks the
            // test "get deleted doc while offline with source=cache" as NoDocuments
            // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
            // TODO(#2149): Remove this when Emulator is fixed
            version = this.fromVersion(commitTime);
        }
        var transformResults = null;
        if (proto.transformResults && proto.transformResults.length > 0) {
            transformResults = proto.transformResults;
        }
        return new MutationResult(version, transformResults);
    };
    JsonProtoSerializer.prototype.fromWriteResults = function (protos, commitTime) {
        var _this = this;
        if (protos && protos.length > 0) {
            hardAssert(commitTime !== undefined, 'Received a write result without a commit time');
            return protos.map(function (proto) { return _this.fromWriteResult(proto, commitTime); });
        }
        else {
            return [];
        }
    };
    JsonProtoSerializer.prototype.toFieldTransform = function (fieldTransform) {
        var transform = fieldTransform.transform;
        if (transform instanceof ServerTimestampTransform) {
            return {
                fieldPath: fieldTransform.field.canonicalString(),
                setToServerValue: 'REQUEST_TIME'
            };
        }
        else if (transform instanceof ArrayUnionTransformOperation) {
            return {
                fieldPath: fieldTransform.field.canonicalString(),
                appendMissingElements: {
                    values: transform.elements
                }
            };
        }
        else if (transform instanceof ArrayRemoveTransformOperation) {
            return {
                fieldPath: fieldTransform.field.canonicalString(),
                removeAllFromArray: {
                    values: transform.elements
                }
            };
        }
        else if (transform instanceof NumericIncrementTransformOperation) {
            return {
                fieldPath: fieldTransform.field.canonicalString(),
                increment: transform.operand
            };
        }
        else {
            throw fail('Unknown transform: ' + fieldTransform.transform);
        }
    };
    JsonProtoSerializer.prototype.fromFieldTransform = function (proto) {
        var transform = null;
        if ('setToServerValue' in proto) {
            hardAssert(proto.setToServerValue === 'REQUEST_TIME', 'Unknown server value transform proto: ' + JSON.stringify(proto));
            transform = ServerTimestampTransform.instance;
        }
        else if ('appendMissingElements' in proto) {
            var values = proto.appendMissingElements.values || [];
            transform = new ArrayUnionTransformOperation(values);
        }
        else if ('removeAllFromArray' in proto) {
            var values = proto.removeAllFromArray.values || [];
            transform = new ArrayRemoveTransformOperation(values);
        }
        else if ('increment' in proto) {
            transform = new NumericIncrementTransformOperation(this, proto.increment);
        }
        else {
            fail('Unknown transform proto: ' + JSON.stringify(proto));
        }
        var fieldPath = FieldPath.fromServerFormat(proto.fieldPath);
        return new FieldTransform(fieldPath, transform);
    };
    JsonProtoSerializer.prototype.toDocumentsTarget = function (target) {
        return { documents: [this.toQueryPath(target.path)] };
    };
    JsonProtoSerializer.prototype.fromDocumentsTarget = function (documentsTarget) {
        var count = documentsTarget.documents.length;
        hardAssert(count === 1, 'DocumentsTarget contained other than 1 document: ' + count);
        var name = documentsTarget.documents[0];
        return Query.atPath(this.fromQueryPath(name)).toTarget();
    };
    JsonProtoSerializer.prototype.toQueryTarget = function (target) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var result = { structuredQuery: {} };
        var path = target.path;
        if (target.collectionGroup !== null) {
            debugAssert(path.length % 2 === 0, 'Collection Group queries should be within a document path or root.');
            result.parent = this.toQueryPath(path);
            result.structuredQuery.from = [
                {
                    collectionId: target.collectionGroup,
                    allDescendants: true
                }
            ];
        }
        else {
            debugAssert(path.length % 2 !== 0, 'Document queries with filters are not supported.');
            result.parent = this.toQueryPath(path.popLast());
            result.structuredQuery.from = [{ collectionId: path.lastSegment() }];
        }
        var where = this.toFilter(target.filters);
        if (where) {
            result.structuredQuery.where = where;
        }
        var orderBy = this.toOrder(target.orderBy);
        if (orderBy) {
            result.structuredQuery.orderBy = orderBy;
        }
        var limit = this.toInt32Proto(target.limit);
        if (limit !== null) {
            result.structuredQuery.limit = limit;
        }
        if (target.startAt) {
            result.structuredQuery.startAt = this.toCursor(target.startAt);
        }
        if (target.endAt) {
            result.structuredQuery.endAt = this.toCursor(target.endAt);
        }
        return result;
    };
    JsonProtoSerializer.prototype.fromQueryTarget = function (target) {
        var path = this.fromQueryPath(target.parent);
        var query = target.structuredQuery;
        var fromCount = query.from ? query.from.length : 0;
        var collectionGroup = null;
        if (fromCount > 0) {
            hardAssert(fromCount === 1, 'StructuredQuery.from with more than one collection is not supported.');
            var from = query.from[0];
            if (from.allDescendants) {
                collectionGroup = from.collectionId;
            }
            else {
                path = path.child(from.collectionId);
            }
        }
        var filterBy = [];
        if (query.where) {
            filterBy = this.fromFilter(query.where);
        }
        var orderBy = [];
        if (query.orderBy) {
            orderBy = this.fromOrder(query.orderBy);
        }
        var limit = null;
        if (query.limit) {
            limit = this.fromInt32Proto(query.limit);
        }
        var startAt = null;
        if (query.startAt) {
            startAt = this.fromCursor(query.startAt);
        }
        var endAt = null;
        if (query.endAt) {
            endAt = this.fromCursor(query.endAt);
        }
        return new Query(path, collectionGroup, orderBy, filterBy, limit, "F" /* First */, startAt, endAt).toTarget();
    };
    JsonProtoSerializer.prototype.toListenRequestLabels = function (targetData) {
        var value = this.toLabel(targetData.purpose);
        if (value == null) {
            return null;
        }
        else {
            return {
                'goog-listen-tags': value
            };
        }
    };
    JsonProtoSerializer.prototype.toLabel = function (purpose) {
        switch (purpose) {
            case 0 /* Listen */:
                return null;
            case 1 /* ExistenceFilterMismatch */:
                return 'existence-filter-mismatch';
            case 2 /* LimboResolution */:
                return 'limbo-document';
            default:
                return fail('Unrecognized query purpose: ' + purpose);
        }
    };
    JsonProtoSerializer.prototype.toTarget = function (targetData) {
        var result;
        var target = targetData.target;
        if (target.isDocumentQuery()) {
            result = { documents: this.toDocumentsTarget(target) };
        }
        else {
            result = { query: this.toQueryTarget(target) };
        }
        result.targetId = targetData.targetId;
        if (targetData.resumeToken.approximateByteSize() > 0) {
            result.resumeToken = this.toBytes(targetData.resumeToken);
        }
        return result;
    };
    JsonProtoSerializer.prototype.toFilter = function (filters) {
        var _this = this;
        if (filters.length === 0) {
            return;
        }
        var protos = filters.map(function (filter) {
            if (filter instanceof FieldFilter) {
                return _this.toUnaryOrFieldFilter(filter);
            }
            else {
                return fail('Unrecognized filter: ' + JSON.stringify(filter));
            }
        });
        if (protos.length === 1) {
            return protos[0];
        }
        return { compositeFilter: { op: 'AND', filters: protos } };
    };
    JsonProtoSerializer.prototype.fromFilter = function (filter) {
        var _this = this;
        if (!filter) {
            return [];
        }
        else if (filter.unaryFilter !== undefined) {
            return [this.fromUnaryFilter(filter)];
        }
        else if (filter.fieldFilter !== undefined) {
            return [this.fromFieldFilter(filter)];
        }
        else if (filter.compositeFilter !== undefined) {
            return filter.compositeFilter
                .filters.map(function (f) { return _this.fromFilter(f); })
                .reduce(function (accum, current) { return accum.concat(current); });
        }
        else {
            return fail('Unknown filter: ' + JSON.stringify(filter));
        }
    };
    JsonProtoSerializer.prototype.toOrder = function (orderBys) {
        var _this = this;
        if (orderBys.length === 0) {
            return;
        }
        return orderBys.map(function (order) { return _this.toPropertyOrder(order); });
    };
    JsonProtoSerializer.prototype.fromOrder = function (orderBys) {
        var _this = this;
        return orderBys.map(function (order) { return _this.fromPropertyOrder(order); });
    };
    JsonProtoSerializer.prototype.toCursor = function (cursor) {
        return {
            before: cursor.before,
            values: cursor.position
        };
    };
    JsonProtoSerializer.prototype.fromCursor = function (cursor) {
        var before = !!cursor.before;
        var position = cursor.values || [];
        return new Bound(position, before);
    };
    // visible for testing
    JsonProtoSerializer.prototype.toDirection = function (dir) {
        return DIRECTIONS[dir];
    };
    // visible for testing
    JsonProtoSerializer.prototype.fromDirection = function (dir) {
        switch (dir) {
            case 'ASCENDING':
                return "asc" /* ASCENDING */;
            case 'DESCENDING':
                return "desc" /* DESCENDING */;
            default:
                return undefined;
        }
    };
    // visible for testing
    JsonProtoSerializer.prototype.toOperatorName = function (op) {
        return OPERATORS[op];
    };
    JsonProtoSerializer.prototype.fromOperatorName = function (op) {
        switch (op) {
            case 'EQUAL':
                return "==" /* EQUAL */;
            case 'GREATER_THAN':
                return ">" /* GREATER_THAN */;
            case 'GREATER_THAN_OR_EQUAL':
                return ">=" /* GREATER_THAN_OR_EQUAL */;
            case 'LESS_THAN':
                return "<" /* LESS_THAN */;
            case 'LESS_THAN_OR_EQUAL':
                return "<=" /* LESS_THAN_OR_EQUAL */;
            case 'ARRAY_CONTAINS':
                return "array-contains" /* ARRAY_CONTAINS */;
            case 'IN':
                return "in" /* IN */;
            case 'ARRAY_CONTAINS_ANY':
                return "array-contains-any" /* ARRAY_CONTAINS_ANY */;
            case 'OPERATOR_UNSPECIFIED':
                return fail('Unspecified operator');
            default:
                return fail('Unknown operator');
        }
    };
    JsonProtoSerializer.prototype.toFieldPathReference = function (path) {
        return { fieldPath: path.canonicalString() };
    };
    JsonProtoSerializer.prototype.fromFieldPathReference = function (fieldReference) {
        return FieldPath.fromServerFormat(fieldReference.fieldPath);
    };
    // visible for testing
    JsonProtoSerializer.prototype.toPropertyOrder = function (orderBy) {
        return {
            field: this.toFieldPathReference(orderBy.field),
            direction: this.toDirection(orderBy.dir)
        };
    };
    JsonProtoSerializer.prototype.fromPropertyOrder = function (orderBy) {
        return new OrderBy(this.fromFieldPathReference(orderBy.field), this.fromDirection(orderBy.direction));
    };
    JsonProtoSerializer.prototype.fromFieldFilter = function (filter) {
        return FieldFilter.create(this.fromFieldPathReference(filter.fieldFilter.field), this.fromOperatorName(filter.fieldFilter.op), filter.fieldFilter.value);
    };
    // visible for testing
    JsonProtoSerializer.prototype.toUnaryOrFieldFilter = function (filter) {
        if (filter.op === "==" /* EQUAL */) {
            if (isNanValue(filter.value)) {
                return {
                    unaryFilter: {
                        field: this.toFieldPathReference(filter.field),
                        op: 'IS_NAN'
                    }
                };
            }
            else if (isNullValue(filter.value)) {
                return {
                    unaryFilter: {
                        field: this.toFieldPathReference(filter.field),
                        op: 'IS_NULL'
                    }
                };
            }
        }
        return {
            fieldFilter: {
                field: this.toFieldPathReference(filter.field),
                op: this.toOperatorName(filter.op),
                value: filter.value
            }
        };
    };
    JsonProtoSerializer.prototype.fromUnaryFilter = function (filter) {
        switch (filter.unaryFilter.op) {
            case 'IS_NAN':
                var nanField = this.fromFieldPathReference(filter.unaryFilter.field);
                return FieldFilter.create(nanField, "==" /* EQUAL */, {
                    doubleValue: NaN
                });
            case 'IS_NULL':
                var nullField = this.fromFieldPathReference(filter.unaryFilter.field);
                return FieldFilter.create(nullField, "==" /* EQUAL */, {
                    nullValue: 'NULL_VALUE'
                });
            case 'OPERATOR_UNSPECIFIED':
                return fail('Unspecified filter');
            default:
                return fail('Unknown filter');
        }
    };
    JsonProtoSerializer.prototype.toDocumentMask = function (fieldMask) {
        var canonicalFields = [];
        fieldMask.fields.forEach(function (field) { return canonicalFields.push(field.canonicalString()); });
        return {
            fieldPaths: canonicalFields
        };
    };
    JsonProtoSerializer.prototype.fromDocumentMask = function (proto) {
        var paths = proto.fieldPaths || [];
        return new FieldMask(paths.map(function (path) { return FieldPath.fromServerFormat(path); }));
    };
    return JsonProtoSerializer;
}());
function isValidResourceName(path) {
    // Resource names have at least 4 components (project ID, database ID)
    return (path.length >= 4 &&
        path.get(0) === 'projects' &&
        path.get(2) === 'databases');
}
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 */
var UserDataWriter = /** @class */ (function () {
    function UserDataWriter(firestore, timestampsInSnapshots, serverTimestampBehavior, converter) {
        this.firestore = firestore;
        this.timestampsInSnapshots = timestampsInSnapshots;
        this.serverTimestampBehavior = serverTimestampBehavior;
        this.converter = converter;
    }
    UserDataWriter.prototype.convertValue = function (value) {
        switch (typeOrder(value)) {
            case 0 /* NullValue */:
                return null;
            case 1 /* BooleanValue */:
                return value.booleanValue;
            case 2 /* NumberValue */:
                return normalizeNumber(value.integerValue || value.doubleValue);
            case 3 /* TimestampValue */:
                return this.convertTimestamp(value.timestampValue);
            case 4 /* ServerTimestampValue */:
                return this.convertServerTimestamp(value);
            case 5 /* StringValue */:
                return value.stringValue;
            case 6 /* BlobValue */:
                return new Blob(normalizeByteString(value.bytesValue));
            case 7 /* RefValue */:
                return this.convertReference(value.referenceValue);
            case 8 /* GeoPointValue */:
                return this.convertGeoPoint(value.geoPointValue);
            case 9 /* ArrayValue */:
                return this.convertArray(value.arrayValue);
            case 10 /* ObjectValue */:
                return this.convertObject(value.mapValue);
            default:
                throw fail('Invalid value type: ' + JSON.stringify(value));
        }
    };
    UserDataWriter.prototype.convertObject = function (mapValue) {
        var _this = this;
        var result = {};
        forEach(mapValue.fields || {}, function (key, value) {
            result[key] = _this.convertValue(value);
        });
        return result;
    };
    UserDataWriter.prototype.convertGeoPoint = function (value) {
        return new GeoPoint(normalizeNumber(value.latitude), normalizeNumber(value.longitude));
    };
    UserDataWriter.prototype.convertArray = function (arrayValue) {
        var _this = this;
        return (arrayValue.values || []).map(function (value) { return _this.convertValue(value); });
    };
    UserDataWriter.prototype.convertServerTimestamp = function (value) {
        switch (this.serverTimestampBehavior) {
            case 'previous':
                var previousValue = getPreviousValue(value);
                if (previousValue == null) {
                    return null;
                }
                return this.convertValue(previousValue);
            case 'estimate':
                return this.convertTimestamp(getLocalWriteTime(value));
            default:
                return null;
        }
    };
    UserDataWriter.prototype.convertTimestamp = function (value) {
        var normalizedValue = normalizeTimestamp(value);
        var timestamp = new Timestamp(normalizedValue.seconds, normalizedValue.nanos);
        if (this.timestampsInSnapshots) {
            return timestamp;
        }
        else {
            return timestamp.toDate();
        }
    };
    UserDataWriter.prototype.convertReference = function (name) {
        var resourcePath = ResourcePath.fromString(name);
        hardAssert(isValidResourceName(resourcePath), 'ReferenceValue is not valid ' + name);
        var databaseId = new DatabaseId(resourcePath.get(1), resourcePath.get(3));
        var key = new DocumentKey(resourcePath.popFirst(5));
        if (!databaseId.isEqual(this.firestore._databaseId)) {
            // TODO(b/64130202): Somehow support foreign references.
            logError("Document " + key + " contains a document " +
                "reference within a different database (" +
                (databaseId.projectId + "/" + databaseId.database + ") which is not ") +
                "supported. It will be treated as a reference in the current " +
                ("database (" + this.firestore._databaseId.projectId + "/" + this.firestore._databaseId.database + ") ") +
                "instead.");
        }
        return new DocumentReference(key, this.firestore, this.converter);
    };
    return UserDataWriter;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
// settings() defaults:
var DEFAULT_HOST = 'firestore.googleapis.com';
var DEFAULT_SSL = true;
var DEFAULT_TIMESTAMPS_IN_SNAPSHOTS = true;
var DEFAULT_FORCE_LONG_POLLING = false;
/**
 * Constant used to indicate the LRU garbage collection should be disabled.
 * Set this value as the `cacheSizeBytes` on the settings passed to the
 * `Firestore` instance.
 */
var CACHE_SIZE_UNLIMITED = LruParams.COLLECTION_DISABLED;
// enablePersistence() defaults:
var DEFAULT_SYNCHRONIZE_TABS = false;
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
var FirestoreSettings = /** @class */ (function () {
    function FirestoreSettings(settings) {
        var _a, _b;
        if (settings.host === undefined) {
            if (settings.ssl !== undefined) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            }
            this.host = DEFAULT_HOST;
            this.ssl = DEFAULT_SSL;
        }
        else {
            validateNamedType('settings', 'non-empty string', 'host', settings.host);
            this.host = settings.host;
            validateNamedOptionalType('settings', 'boolean', 'ssl', settings.ssl);
            this.ssl = (_a = settings.ssl) !== null && _a !== void 0 ? _a : DEFAULT_SSL;
        }
        validateOptionNames('settings', settings, [
            'host',
            'ssl',
            'credentials',
            'timestampsInSnapshots',
            'cacheSizeBytes',
            'experimentalForceLongPolling'
        ]);
        validateNamedOptionalType('settings', 'object', 'credentials', settings.credentials);
        this.credentials = settings.credentials;
        validateNamedOptionalType('settings', 'boolean', 'timestampsInSnapshots', settings.timestampsInSnapshots);
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        if (settings.timestampsInSnapshots === true) {
            logError("The setting 'timestampsInSnapshots: true' is no longer required " +
                'and should be removed.');
        }
        else if (settings.timestampsInSnapshots === false) {
            logError("Support for 'timestampsInSnapshots: false' will be removed soon. " +
                'You must update your code to handle Timestamp objects.');
        }
        this.timestampsInSnapshots = (_b = settings.timestampsInSnapshots) !== null && _b !== void 0 ? _b : DEFAULT_TIMESTAMPS_IN_SNAPSHOTS;
        validateNamedOptionalType('settings', 'number', 'cacheSizeBytes', settings.cacheSizeBytes);
        if (settings.cacheSizeBytes === undefined) {
            this.cacheSizeBytes = LruParams.DEFAULT_CACHE_SIZE_BYTES;
        }
        else {
            if (settings.cacheSizeBytes !== CACHE_SIZE_UNLIMITED &&
                settings.cacheSizeBytes < LruParams.MINIMUM_CACHE_SIZE_BYTES) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + LruParams.MINIMUM_CACHE_SIZE_BYTES);
            }
            else {
                this.cacheSizeBytes = settings.cacheSizeBytes;
            }
        }
        validateNamedOptionalType('settings', 'boolean', 'experimentalForceLongPolling', settings.experimentalForceLongPolling);
        this.forceLongPolling =
            settings.experimentalForceLongPolling === undefined
                ? DEFAULT_FORCE_LONG_POLLING
                : settings.experimentalForceLongPolling;
    }
    FirestoreSettings.prototype.isEqual = function (other) {
        return (this.host === other.host &&
            this.ssl === other.ssl &&
            this.timestampsInSnapshots === other.timestampsInSnapshots &&
            this.credentials === other.credentials &&
            this.cacheSizeBytes === other.cacheSizeBytes &&
            this.forceLongPolling === other.forceLongPolling);
    };
    return FirestoreSettings;
}());
/**
 * The root reference to the database.
 */
var Firestore = /** @class */ (function () {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function Firestore(databaseIdOrApp, authProvider, componentProvider) {
        var _this = this;
        if (componentProvider === void 0) { componentProvider = new MemoryComponentProvider(); }
        this._firebaseApp = null;
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this._queue = new AsyncQueue();
        this.INTERNAL = {
            delete: function () { return tslib.__awaiter(_this, void 0, void 0, function () {
                return tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            this.ensureClientConfigured();
                            return [4 /*yield*/, this._firestoreClient.terminate()];
                        case 1:
                            _c.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        };
        if (typeof databaseIdOrApp.options === 'object') {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var app = databaseIdOrApp;
            this._firebaseApp = app;
            this._databaseId = Firestore.databaseIdFromApp(app);
            this._persistenceKey = app.name;
            this._credentials = new FirebaseCredentialsProvider(authProvider);
        }
        else {
            var external_1 = databaseIdOrApp;
            if (!external_1.projectId) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'Must provide projectId');
            }
            this._databaseId = new DatabaseId(external_1.projectId, external_1.database);
            // Use a default persistenceKey that lines up with FirebaseApp.
            this._persistenceKey = '[DEFAULT]';
            this._credentials = new EmptyCredentialsProvider();
        }
        this._componentProvider = componentProvider;
        this._settings = new FirestoreSettings({});
        this._dataReader = new UserDataReader(this._databaseId);
    }
    Firestore.prototype.settings = function (settingsLiteral) {
        validateExactNumberOfArgs('Firestore.settings', arguments, 1);
        validateArgType('Firestore.settings', 'object', 1, settingsLiteral);
        var newSettings = new FirestoreSettings(settingsLiteral);
        if (this._firestoreClient && !this._settings.isEqual(newSettings)) {
            throw new FirestoreError(Code.FAILED_PRECONDITION, 'Firestore has already been started and its settings can no longer ' +
                'be changed. You can only call settings() before calling any other ' +
                'methods on a Firestore object.');
        }
        this._settings = newSettings;
        if (newSettings.credentials !== undefined) {
            this._credentials = makeCredentialsProvider(newSettings.credentials);
        }
    };
    Firestore.prototype.enableNetwork = function () {
        this.ensureClientConfigured();
        return this._firestoreClient.enableNetwork();
    };
    Firestore.prototype.disableNetwork = function () {
        this.ensureClientConfigured();
        return this._firestoreClient.disableNetwork();
    };
    Firestore.prototype.enablePersistence = function (settings) {
        var _a, _b;
        if (this._firestoreClient) {
            throw new FirestoreError(Code.FAILED_PRECONDITION, 'Firestore has already been started and persistence can no longer ' +
                'be enabled. You can only call enablePersistence() before calling ' +
                'any other methods on a Firestore object.');
        }
        var synchronizeTabs = false;
        if (settings) {
            if (settings.experimentalTabSynchronization !== undefined) {
                logError("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead.");
            }
            synchronizeTabs = (_b = (_a = settings.synchronizeTabs) !== null && _a !== void 0 ? _a : settings.experimentalTabSynchronization) !== null && _b !== void 0 ? _b : DEFAULT_SYNCHRONIZE_TABS;
        }
        return this.configureClient(this._componentProvider, {
            durable: true,
            cacheSizeBytes: this._settings.cacheSizeBytes,
            synchronizeTabs: synchronizeTabs
        });
    };
    Firestore.prototype.clearPersistence = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var deferred;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                if (this._firestoreClient !== undefined &&
                    !this._firestoreClient.clientTerminated) {
                    throw new FirestoreError(Code.FAILED_PRECONDITION, 'Persistence cannot be cleared after this Firestore instance is initialized.');
                }
                deferred = new Deferred();
                this._queue.enqueueAndForgetEvenAfterShutdown(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
                    var databaseInfo, e_6;
                    return tslib.__generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _c.trys.push([0, 2, , 3]);
                                databaseInfo = this.makeDatabaseInfo();
                                return [4 /*yield*/, this._componentProvider.clearPersistence(databaseInfo)];
                            case 1:
                                _c.sent();
                                deferred.resolve();
                                return [3 /*break*/, 3];
                            case 2:
                                e_6 = _c.sent();
                                deferred.reject(e_6);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, deferred.promise];
            });
        });
    };
    Firestore.prototype.terminate = function () {
        this.app._removeServiceInstance('firestore');
        return this.INTERNAL.delete();
    };
    Object.defineProperty(Firestore.prototype, "_isTerminated", {
        get: function () {
            this.ensureClientConfigured();
            return this._firestoreClient.clientTerminated;
        },
        enumerable: true,
        configurable: true
    });
    Firestore.prototype.waitForPendingWrites = function () {
        this.ensureClientConfigured();
        return this._firestoreClient.waitForPendingWrites();
    };
    Firestore.prototype.onSnapshotsInSync = function (arg) {
        this.ensureClientConfigured();
        if (isPartialObserver(arg)) {
            return this.onSnapshotsInSyncInternal(arg);
        }
        else {
            validateArgType('Firestore.onSnapshotsInSync', 'function', 1, arg);
            var observer = {
                next: arg
            };
            return this.onSnapshotsInSyncInternal(observer);
        }
    };
    Firestore.prototype.onSnapshotsInSyncInternal = function (observer) {
        var _this = this;
        var errHandler = function (err) {
            throw fail('Uncaught Error in onSnapshotsInSync');
        };
        var asyncObserver = new AsyncObserver({
            next: function () {
                if (observer.next) {
                    observer.next();
                }
            },
            error: errHandler
        });
        this._firestoreClient.addSnapshotsInSyncListener(asyncObserver);
        return function () {
            asyncObserver.mute();
            _this._firestoreClient.removeSnapshotsInSyncListener(asyncObserver);
        };
    };
    Firestore.prototype.ensureClientConfigured = function () {
        if (!this._firestoreClient) {
            // Kick off starting the client but don't actually wait for it.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.configureClient(new MemoryComponentProvider(), {
                durable: false
            });
        }
        return this._firestoreClient;
    };
    Firestore.prototype.makeDatabaseInfo = function () {
        return new DatabaseInfo(this._databaseId, this._persistenceKey, this._settings.host, this._settings.ssl, this._settings.forceLongPolling);
    };
    Firestore.prototype.configureClient = function (componentProvider, persistenceSettings) {
        debugAssert(!!this._settings.host, 'FirestoreSettings.host is not set');
        debugAssert(!this._firestoreClient, 'configureClient() called multiple times');
        var databaseInfo = this.makeDatabaseInfo();
        this._firestoreClient = new FirestoreClient(PlatformSupport.getPlatform(), databaseInfo, this._credentials, this._queue);
        return this._firestoreClient.start(componentProvider, persistenceSettings);
    };
    Firestore.databaseIdFromApp = function (app) {
        if (!contains(app.options, 'projectId')) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        }
        var projectId = app.options.projectId;
        if (!projectId || typeof projectId !== 'string') {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'projectId must be a string in FirebaseApp.options');
        }
        return new DatabaseId(projectId);
    };
    Object.defineProperty(Firestore.prototype, "app", {
        get: function () {
            if (!this._firebaseApp) {
                throw new FirestoreError(Code.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is " +
                    'not available');
            }
            return this._firebaseApp;
        },
        enumerable: true,
        configurable: true
    });
    Firestore.prototype.collection = function (pathString) {
        validateExactNumberOfArgs('Firestore.collection', arguments, 1);
        validateArgType('Firestore.collection', 'non-empty string', 1, pathString);
        this.ensureClientConfigured();
        return new CollectionReference(ResourcePath.fromString(pathString), this);
    };
    Firestore.prototype.doc = function (pathString) {
        validateExactNumberOfArgs('Firestore.doc', arguments, 1);
        validateArgType('Firestore.doc', 'non-empty string', 1, pathString);
        this.ensureClientConfigured();
        return DocumentReference.forPath(ResourcePath.fromString(pathString), this);
    };
    Firestore.prototype.collectionGroup = function (collectionId) {
        validateExactNumberOfArgs('Firestore.collectionGroup', arguments, 1);
        validateArgType('Firestore.collectionGroup', 'non-empty string', 1, collectionId);
        if (collectionId.indexOf('/') >= 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid collection ID '" + collectionId + "' passed to function " +
                "Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        }
        this.ensureClientConfigured();
        return new Query$1(new Query(ResourcePath.EMPTY_PATH, collectionId), this);
    };
    Firestore.prototype.runTransaction = function (updateFunction) {
        var _this = this;
        validateExactNumberOfArgs('Firestore.runTransaction', arguments, 1);
        validateArgType('Firestore.runTransaction', 'function', 1, updateFunction);
        return this.ensureClientConfigured().transaction(function (transaction) {
            return updateFunction(new Transaction$1(_this, transaction));
        });
    };
    Firestore.prototype.batch = function () {
        this.ensureClientConfigured();
        return new WriteBatch(this);
    };
    Object.defineProperty(Firestore, "logLevel", {
        get: function () {
            switch (getLogLevel()) {
                case logger.LogLevel.DEBUG:
                    return 'debug';
                case logger.LogLevel.SILENT:
                    return 'silent';
                default:
                    // The default log level is error
                    return 'error';
            }
        },
        enumerable: true,
        configurable: true
    });
    Firestore.setLogLevel = function (level) {
        validateExactNumberOfArgs('Firestore.setLogLevel', arguments, 1);
        validateArgType('Firestore.setLogLevel', 'non-empty string', 1, level);
        switch (level) {
            case 'debug':
                setLogLevel(logger.LogLevel.DEBUG);
                break;
            case 'error':
                setLogLevel(logger.LogLevel.ERROR);
                break;
            case 'silent':
                setLogLevel(logger.LogLevel.SILENT);
                break;
            default:
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid log level: ' + level);
        }
    };
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    Firestore.prototype._areTimestampsInSnapshotsEnabled = function () {
        return this._settings.timestampsInSnapshots;
    };
    return Firestore;
}());
/**
 * A reference to a transaction.
 */
var Transaction$1 = /** @class */ (function () {
    function Transaction$1(_firestore, _transaction) {
        this._firestore = _firestore;
        this._transaction = _transaction;
    }
    Transaction$1.prototype.get = function (documentRef) {
        var _this = this;
        validateExactNumberOfArgs('Transaction.get', arguments, 1);
        var ref = validateReference('Transaction.get', documentRef, this._firestore);
        return this._transaction
            .lookup([ref._key])
            .then(function (docs) {
            if (!docs || docs.length !== 1) {
                return fail('Mismatch in docs returned from document lookup.');
            }
            var doc = docs[0];
            if (doc instanceof NoDocument) {
                return new DocumentSnapshot(_this._firestore, ref._key, null, 
                /* fromCache= */ false, 
                /* hasPendingWrites= */ false, ref._converter);
            }
            else if (doc instanceof Document) {
                return new DocumentSnapshot(_this._firestore, ref._key, doc, 
                /* fromCache= */ false, 
                /* hasPendingWrites= */ false, ref._converter);
            }
            else {
                throw fail("BatchGetDocumentsRequest returned unexpected document type: " + doc.constructor.name);
            }
        });
    };
    Transaction$1.prototype.set = function (documentRef, value, options) {
        validateBetweenNumberOfArgs('Transaction.set', arguments, 2, 3);
        var ref = validateReference('Transaction.set', documentRef, this._firestore);
        options = validateSetOptions('Transaction.set', options);
        var _c = applyFirestoreDataConverter(ref._converter, value, 'Transaction.set'), convertedValue = _c[0], functionName = _c[1];
        var parsed = options.merge || options.mergeFields
            ? this._firestore._dataReader.parseMergeData(functionName, convertedValue, options.mergeFields)
            : this._firestore._dataReader.parseSetData(functionName, convertedValue);
        this._transaction.set(ref._key, parsed);
        return this;
    };
    Transaction$1.prototype.update = function (documentRef, fieldOrUpdateData, value) {
        var moreFieldsAndValues = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            moreFieldsAndValues[_i - 3] = arguments[_i];
        }
        var ref;
        var parsed;
        if (typeof fieldOrUpdateData === 'string' ||
            fieldOrUpdateData instanceof FieldPath$1) {
            validateAtLeastNumberOfArgs('Transaction.update', arguments, 3);
            ref = validateReference('Transaction.update', documentRef, this._firestore);
            parsed = this._firestore._dataReader.parseUpdateVarargs('Transaction.update', fieldOrUpdateData, value, moreFieldsAndValues);
        }
        else {
            validateExactNumberOfArgs('Transaction.update', arguments, 2);
            ref = validateReference('Transaction.update', documentRef, this._firestore);
            parsed = this._firestore._dataReader.parseUpdateData('Transaction.update', fieldOrUpdateData);
        }
        this._transaction.update(ref._key, parsed);
        return this;
    };
    Transaction$1.prototype.delete = function (documentRef) {
        validateExactNumberOfArgs('Transaction.delete', arguments, 1);
        var ref = validateReference('Transaction.delete', documentRef, this._firestore);
        this._transaction.delete(ref._key);
        return this;
    };
    return Transaction$1;
}());
var WriteBatch = /** @class */ (function () {
    function WriteBatch(_firestore) {
        this._firestore = _firestore;
        this._mutations = [];
        this._committed = false;
    }
    WriteBatch.prototype.set = function (documentRef, value, options) {
        validateBetweenNumberOfArgs('WriteBatch.set', arguments, 2, 3);
        this.verifyNotCommitted();
        var ref = validateReference('WriteBatch.set', documentRef, this._firestore);
        options = validateSetOptions('WriteBatch.set', options);
        var _c = applyFirestoreDataConverter(ref._converter, value, 'WriteBatch.set'), convertedValue = _c[0], functionName = _c[1];
        var parsed = options.merge || options.mergeFields
            ? this._firestore._dataReader.parseMergeData(functionName, convertedValue, options.mergeFields)
            : this._firestore._dataReader.parseSetData(functionName, convertedValue);
        this._mutations = this._mutations.concat(parsed.toMutations(ref._key, Precondition.none()));
        return this;
    };
    WriteBatch.prototype.update = function (documentRef, fieldOrUpdateData, value) {
        var moreFieldsAndValues = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            moreFieldsAndValues[_i - 3] = arguments[_i];
        }
        this.verifyNotCommitted();
        var ref;
        var parsed;
        if (typeof fieldOrUpdateData === 'string' ||
            fieldOrUpdateData instanceof FieldPath$1) {
            validateAtLeastNumberOfArgs('WriteBatch.update', arguments, 3);
            ref = validateReference('WriteBatch.update', documentRef, this._firestore);
            parsed = this._firestore._dataReader.parseUpdateVarargs('WriteBatch.update', fieldOrUpdateData, value, moreFieldsAndValues);
        }
        else {
            validateExactNumberOfArgs('WriteBatch.update', arguments, 2);
            ref = validateReference('WriteBatch.update', documentRef, this._firestore);
            parsed = this._firestore._dataReader.parseUpdateData('WriteBatch.update', fieldOrUpdateData);
        }
        this._mutations = this._mutations.concat(parsed.toMutations(ref._key, Precondition.exists(true)));
        return this;
    };
    WriteBatch.prototype.delete = function (documentRef) {
        validateExactNumberOfArgs('WriteBatch.delete', arguments, 1);
        this.verifyNotCommitted();
        var ref = validateReference('WriteBatch.delete', documentRef, this._firestore);
        this._mutations = this._mutations.concat(new DeleteMutation(ref._key, Precondition.none()));
        return this;
    };
    WriteBatch.prototype.commit = function () {
        this.verifyNotCommitted();
        this._committed = true;
        if (this._mutations.length > 0) {
            return this._firestore.ensureClientConfigured().write(this._mutations);
        }
        return Promise.resolve();
    };
    WriteBatch.prototype.verifyNotCommitted = function () {
        if (this._committed) {
            throw new FirestoreError(Code.FAILED_PRECONDITION, 'A write batch can no longer be used after commit() ' +
                'has been called.');
        }
    };
    return WriteBatch;
}());
/**
 * A reference to a particular document in a collection in the database.
 */
var DocumentReference = /** @class */ (function () {
    function DocumentReference(_key, firestore, _converter) {
        this._key = _key;
        this.firestore = firestore;
        this._converter = _converter;
        this._firestoreClient = this.firestore.ensureClientConfigured();
    }
    DocumentReference.forPath = function (path, firestore, converter) {
        if (path.length % 2 !== 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid document reference. Document ' +
                'references must have an even number of segments, but ' +
                (path.canonicalString() + " has " + path.length));
        }
        return new DocumentReference(new DocumentKey(path), firestore, converter);
    };
    Object.defineProperty(DocumentReference.prototype, "id", {
        get: function () {
            return this._key.path.lastSegment();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentReference.prototype, "parent", {
        get: function () {
            return new CollectionReference(this._key.path.popLast(), this.firestore, this._converter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentReference.prototype, "path", {
        get: function () {
            return this._key.path.canonicalString();
        },
        enumerable: true,
        configurable: true
    });
    DocumentReference.prototype.collection = function (pathString) {
        validateExactNumberOfArgs('DocumentReference.collection', arguments, 1);
        validateArgType('DocumentReference.collection', 'non-empty string', 1, pathString);
        if (!pathString) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Must provide a non-empty collection name to collection()');
        }
        var path = ResourcePath.fromString(pathString);
        return new CollectionReference(this._key.path.child(path), this.firestore);
    };
    DocumentReference.prototype.isEqual = function (other) {
        if (!(other instanceof DocumentReference)) {
            throw invalidClassError('isEqual', 'DocumentReference', 1, other);
        }
        return (this.firestore === other.firestore &&
            this._key.isEqual(other._key) &&
            this._converter === other._converter);
    };
    DocumentReference.prototype.set = function (value, options) {
        validateBetweenNumberOfArgs('DocumentReference.set', arguments, 1, 2);
        options = validateSetOptions('DocumentReference.set', options);
        var _c = applyFirestoreDataConverter(this._converter, value, 'DocumentReference.set'), convertedValue = _c[0], functionName = _c[1];
        var parsed = options.merge || options.mergeFields
            ? this.firestore._dataReader.parseMergeData(functionName, convertedValue, options.mergeFields)
            : this.firestore._dataReader.parseSetData(functionName, convertedValue);
        return this._firestoreClient.write(parsed.toMutations(this._key, Precondition.none()));
    };
    DocumentReference.prototype.update = function (fieldOrUpdateData, value) {
        var moreFieldsAndValues = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            moreFieldsAndValues[_i - 2] = arguments[_i];
        }
        var parsed;
        if (typeof fieldOrUpdateData === 'string' ||
            fieldOrUpdateData instanceof FieldPath$1) {
            validateAtLeastNumberOfArgs('DocumentReference.update', arguments, 2);
            parsed = this.firestore._dataReader.parseUpdateVarargs('DocumentReference.update', fieldOrUpdateData, value, moreFieldsAndValues);
        }
        else {
            validateExactNumberOfArgs('DocumentReference.update', arguments, 1);
            parsed = this.firestore._dataReader.parseUpdateData('DocumentReference.update', fieldOrUpdateData);
        }
        return this._firestoreClient.write(parsed.toMutations(this._key, Precondition.exists(true)));
    };
    DocumentReference.prototype.delete = function () {
        validateExactNumberOfArgs('DocumentReference.delete', arguments, 0);
        return this._firestoreClient.write([
            new DeleteMutation(this._key, Precondition.none())
        ]);
    };
    DocumentReference.prototype.onSnapshot = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        validateBetweenNumberOfArgs('DocumentReference.onSnapshot', arguments, 1, 4);
        var options = {
            includeMetadataChanges: false
        };
        var observer;
        var currArg = 0;
        if (typeof args[currArg] === 'object' &&
            !isPartialObserver(args[currArg])) {
            options = args[currArg];
            validateOptionNames('DocumentReference.onSnapshot', options, [
                'includeMetadataChanges'
            ]);
            validateNamedOptionalType('DocumentReference.onSnapshot', 'boolean', 'includeMetadataChanges', options.includeMetadataChanges);
            currArg++;
        }
        var internalOptions = {
            includeMetadataChanges: options.includeMetadataChanges
        };
        if (isPartialObserver(args[currArg])) {
            observer = args[currArg];
        }
        else {
            validateArgType('DocumentReference.onSnapshot', 'function', currArg, args[currArg]);
            validateOptionalArgType('DocumentReference.onSnapshot', 'function', currArg + 1, args[currArg + 1]);
            validateOptionalArgType('DocumentReference.onSnapshot', 'function', currArg + 2, args[currArg + 2]);
            observer = {
                next: args[currArg],
                error: args[currArg + 1],
                complete: args[currArg + 2]
            };
        }
        return this.onSnapshotInternal(internalOptions, observer);
    };
    DocumentReference.prototype.onSnapshotInternal = function (options, observer) {
        var _this = this;
        var errHandler = function (err) {
            console.error('Uncaught Error in onSnapshot:', err);
        };
        if (observer.error) {
            errHandler = observer.error.bind(observer);
        }
        var asyncObserver = new AsyncObserver({
            next: function (snapshot) {
                if (observer.next) {
                    debugAssert(snapshot.docs.size <= 1, 'Too many documents returned on a document query');
                    var doc = snapshot.docs.get(_this._key);
                    observer.next(new DocumentSnapshot(_this.firestore, _this._key, doc, snapshot.fromCache, snapshot.hasPendingWrites, _this._converter));
                }
            },
            error: errHandler
        });
        var internalListener = this._firestoreClient.listen(Query.atPath(this._key.path), asyncObserver, options);
        return function () {
            asyncObserver.mute();
            _this._firestoreClient.unlisten(internalListener);
        };
    };
    DocumentReference.prototype.get = function (options) {
        var _this = this;
        validateBetweenNumberOfArgs('DocumentReference.get', arguments, 0, 1);
        validateGetOptions('DocumentReference.get', options);
        return new Promise(function (resolve, reject) {
            if (options && options.source === 'cache') {
                _this.firestore
                    .ensureClientConfigured()
                    .getDocumentFromLocalCache(_this._key)
                    .then(function (doc) {
                    resolve(new DocumentSnapshot(_this.firestore, _this._key, doc, 
                    /*fromCache=*/ true, doc instanceof Document ? doc.hasLocalMutations : false, _this._converter));
                }, reject);
            }
            else {
                _this.getViaSnapshotListener(resolve, reject, options);
            }
        });
    };
    DocumentReference.prototype.getViaSnapshotListener = function (resolve, reject, options) {
        var unlisten = this.onSnapshotInternal({
            includeMetadataChanges: true,
            waitForSyncWhenOnline: true
        }, {
            next: function (snap) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                unlisten();
                if (!snap.exists && snap.metadata.fromCache) {
                    // TODO(dimond): If we're online and the document doesn't
                    // exist then we resolve with a doc.exists set to false. If
                    // we're offline however, we reject the Promise in this
                    // case. Two options: 1) Cache the negative response from
                    // the server so we can deliver that even when you're
                    // offline 2) Actually reject the Promise in the online case
                    // if the document doesn't exist.
                    reject(new FirestoreError(Code.UNAVAILABLE, 'Failed to get document because the client is ' + 'offline.'));
                }
                else if (snap.exists &&
                    snap.metadata.fromCache &&
                    options &&
                    options.source === 'server') {
                    reject(new FirestoreError(Code.UNAVAILABLE, 'Failed to get document from server. (However, this ' +
                        'document does exist in the local cache. Run again ' +
                        'without setting source to "server" to ' +
                        'retrieve the cached document.)'));
                }
                else {
                    resolve(snap);
                }
            },
            error: reject
        });
    };
    DocumentReference.prototype.withConverter = function (converter) {
        return new DocumentReference(this._key, this.firestore, converter);
    };
    return DocumentReference;
}());
var SnapshotMetadata = /** @class */ (function () {
    function SnapshotMetadata(hasPendingWrites, fromCache) {
        this.hasPendingWrites = hasPendingWrites;
        this.fromCache = fromCache;
    }
    SnapshotMetadata.prototype.isEqual = function (other) {
        return (this.hasPendingWrites === other.hasPendingWrites &&
            this.fromCache === other.fromCache);
    };
    return SnapshotMetadata;
}());
var DocumentSnapshot = /** @class */ (function () {
    function DocumentSnapshot(_firestore, _key, _document, _fromCache, _hasPendingWrites, _converter) {
        this._firestore = _firestore;
        this._key = _key;
        this._document = _document;
        this._fromCache = _fromCache;
        this._hasPendingWrites = _hasPendingWrites;
        this._converter = _converter;
    }
    DocumentSnapshot.prototype.data = function (options) {
        validateBetweenNumberOfArgs('DocumentSnapshot.data', arguments, 0, 1);
        options = validateSnapshotOptions('DocumentSnapshot.data', options);
        if (!this._document) {
            return undefined;
        }
        else {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this._converter) {
                var snapshot = new QueryDocumentSnapshot(this._firestore, this._key, this._document, this._fromCache, this._hasPendingWrites);
                return this._converter.fromFirestore(snapshot, options);
            }
            else {
                var userDataWriter = new UserDataWriter(this._firestore, this._firestore._areTimestampsInSnapshotsEnabled(), options.serverTimestamps, 
                /* converter= */ undefined);
                return userDataWriter.convertValue(this._document.toProto());
            }
        }
    };
    DocumentSnapshot.prototype.get = function (fieldPath, options) {
        validateBetweenNumberOfArgs('DocumentSnapshot.get', arguments, 1, 2);
        options = validateSnapshotOptions('DocumentSnapshot.get', options);
        if (this._document) {
            var value = this._document
                .data()
                .field(fieldPathFromArgument('DocumentSnapshot.get', fieldPath));
            if (value !== null) {
                var userDataWriter = new UserDataWriter(this._firestore, this._firestore._areTimestampsInSnapshotsEnabled(), options.serverTimestamps, this._converter);
                return userDataWriter.convertValue(value);
            }
        }
        return undefined;
    };
    Object.defineProperty(DocumentSnapshot.prototype, "id", {
        get: function () {
            return this._key.path.lastSegment();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentSnapshot.prototype, "ref", {
        get: function () {
            return new DocumentReference(this._key, this._firestore, this._converter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentSnapshot.prototype, "exists", {
        get: function () {
            return this._document !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentSnapshot.prototype, "metadata", {
        get: function () {
            return new SnapshotMetadata(this._hasPendingWrites, this._fromCache);
        },
        enumerable: true,
        configurable: true
    });
    DocumentSnapshot.prototype.isEqual = function (other) {
        if (!(other instanceof DocumentSnapshot)) {
            throw invalidClassError('isEqual', 'DocumentSnapshot', 1, other);
        }
        return (this._firestore === other._firestore &&
            this._fromCache === other._fromCache &&
            this._key.isEqual(other._key) &&
            (this._document === null
                ? other._document === null
                : this._document.isEqual(other._document)) &&
            this._converter === other._converter);
    };
    return DocumentSnapshot;
}());
var QueryDocumentSnapshot = /** @class */ (function (_super) {
    tslib.__extends(QueryDocumentSnapshot, _super);
    function QueryDocumentSnapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryDocumentSnapshot.prototype.data = function (options) {
        var data = _super.prototype.data.call(this, options);
        debugAssert(data !== undefined, 'Document in a QueryDocumentSnapshot should exist');
        return data;
    };
    return QueryDocumentSnapshot;
}(DocumentSnapshot));
var Query$1 = /** @class */ (function () {
    function Query$1(_query, firestore, _converter) {
        this._query = _query;
        this.firestore = firestore;
        this._converter = _converter;
    }
    Query$1.prototype.where = function (field, opStr, value) {
        validateExactNumberOfArgs('Query.where', arguments, 3);
        validateDefined('Query.where', 3, value);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        var whereFilterOpEnums = [
            "<" /* LESS_THAN */,
            "<=" /* LESS_THAN_OR_EQUAL */,
            "==" /* EQUAL */,
            ">=" /* GREATER_THAN_OR_EQUAL */,
            ">" /* GREATER_THAN */,
            "array-contains" /* ARRAY_CONTAINS */,
            "in" /* IN */,
            "array-contains-any" /* ARRAY_CONTAINS_ANY */
        ];
        var op = validateStringEnum('Query.where', whereFilterOpEnums, 2, opStr);
        var fieldValue;
        var fieldPath = fieldPathFromArgument('Query.where', field);
        if (fieldPath.isKeyField()) {
            if (op === "array-contains" /* ARRAY_CONTAINS */ ||
                op === "array-contains-any" /* ARRAY_CONTAINS_ANY */) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + op + "' " +
                    'queries on FieldPath.documentId().');
            }
            else if (op === "in" /* IN */) {
                this.validateDisjunctiveFilterElements(value, op);
                var referenceList = [];
                for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                    var arrayValue = value_2[_i];
                    referenceList.push(this.parseDocumentIdValue(arrayValue));
                }
                fieldValue = { arrayValue: { values: referenceList } };
            }
            else {
                fieldValue = this.parseDocumentIdValue(value);
            }
        }
        else {
            if (op === "in" /* IN */ || op === "array-contains-any" /* ARRAY_CONTAINS_ANY */) {
                this.validateDisjunctiveFilterElements(value, op);
            }
            fieldValue = this.firestore._dataReader.parseQueryValue('Query.where', value, 
            // We only allow nested arrays for IN queries.
            /** allowArrays = */ op === "in" /* IN */);
        }
        var filter = FieldFilter.create(fieldPath, op, fieldValue);
        this.validateNewFilter(filter);
        return new Query$1(this._query.addFilter(filter), this.firestore, this._converter);
    };
    Query$1.prototype.orderBy = function (field, directionStr) {
        validateBetweenNumberOfArgs('Query.orderBy', arguments, 1, 2);
        validateOptionalArgType('Query.orderBy', 'non-empty string', 2, directionStr);
        var direction;
        if (directionStr === undefined || directionStr === 'asc') {
            direction = "asc" /* ASCENDING */;
        }
        else if (directionStr === 'desc') {
            direction = "desc" /* DESCENDING */;
        }
        else {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + directionStr + "', " +
                "expected 'asc' or 'desc'.");
        }
        if (this._query.startAt !== null) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. You must not call Query.startAt() or ' +
                'Query.startAfter() before calling Query.orderBy().');
        }
        if (this._query.endAt !== null) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. You must not call Query.endAt() or ' +
                'Query.endBefore() before calling Query.orderBy().');
        }
        var fieldPath = fieldPathFromArgument('Query.orderBy', field);
        var orderBy = new OrderBy(fieldPath, direction);
        this.validateNewOrderBy(orderBy);
        return new Query$1(this._query.addOrderBy(orderBy), this.firestore, this._converter);
    };
    Query$1.prototype.limit = function (n) {
        validateExactNumberOfArgs('Query.limit', arguments, 1);
        validateArgType('Query.limit', 'number', 1, n);
        validatePositiveNumber('Query.limit', 1, n);
        return new Query$1(this._query.withLimitToFirst(n), this.firestore, this._converter);
    };
    Query$1.prototype.limitToLast = function (n) {
        validateExactNumberOfArgs('Query.limitToLast', arguments, 1);
        validateArgType('Query.limitToLast', 'number', 1, n);
        validatePositiveNumber('Query.limitToLast', 1, n);
        return new Query$1(this._query.withLimitToLast(n), this.firestore, this._converter);
    };
    Query$1.prototype.startAt = function (docOrField) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('Query.startAt', arguments, 1);
        var bound = this.boundFromDocOrFields('Query.startAt', docOrField, fields, 
        /*before=*/ true);
        return new Query$1(this._query.withStartAt(bound), this.firestore, this._converter);
    };
    Query$1.prototype.startAfter = function (docOrField) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('Query.startAfter', arguments, 1);
        var bound = this.boundFromDocOrFields('Query.startAfter', docOrField, fields, 
        /*before=*/ false);
        return new Query$1(this._query.withStartAt(bound), this.firestore, this._converter);
    };
    Query$1.prototype.endBefore = function (docOrField) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('Query.endBefore', arguments, 1);
        var bound = this.boundFromDocOrFields('Query.endBefore', docOrField, fields, 
        /*before=*/ true);
        return new Query$1(this._query.withEndAt(bound), this.firestore, this._converter);
    };
    Query$1.prototype.endAt = function (docOrField) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('Query.endAt', arguments, 1);
        var bound = this.boundFromDocOrFields('Query.endAt', docOrField, fields, 
        /*before=*/ false);
        return new Query$1(this._query.withEndAt(bound), this.firestore, this._converter);
    };
    Query$1.prototype.isEqual = function (other) {
        if (!(other instanceof Query$1)) {
            throw invalidClassError('isEqual', 'Query', 1, other);
        }
        return (this.firestore === other.firestore && this._query.isEqual(other._query));
    };
    Query$1.prototype.withConverter = function (converter) {
        return new Query$1(this._query, this.firestore, converter);
    };
    /** Helper function to create a bound from a document or fields */
    Query$1.prototype.boundFromDocOrFields = function (methodName, docOrField, fields, before) {
        validateDefined(methodName, 1, docOrField);
        if (docOrField instanceof DocumentSnapshot) {
            if (fields.length > 0) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Too many arguments provided to " + methodName + "().");
            }
            var snap = docOrField;
            if (!snap.exists) {
                throw new FirestoreError(Code.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " +
                    (methodName + "()."));
            }
            return this.boundFromDocument(snap._document, before);
        }
        else {
            var allFields = [docOrField].concat(fields);
            return this.boundFromFields(methodName, allFields, before);
        }
    };
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    Query$1.prototype.boundFromDocument = function (doc, before) {
        var components = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var _i = 0, _c = this._query.orderBy; _i < _c.length; _i++) {
            var orderBy = _c[_i];
            if (orderBy.field.isKeyField()) {
                components.push(refValue(this.firestore._databaseId, doc.key));
            }
            else {
                var value = doc.field(orderBy.field);
                if (isServerTimestamp(value)) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a ' +
                        'document for which the field "' +
                        orderBy.field +
                        '" is an uncommitted server timestamp. (Since the value of ' +
                        'this field is unknown, you cannot start/end a query with it.)');
                }
                else if (value !== null) {
                    components.push(value);
                }
                else {
                    var field = orderBy.field.canonicalString();
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a " +
                        ("document for which the field '" + field + "' (used as the ") +
                        "orderBy) does not exist.");
                }
            }
        }
        return new Bound(components, before);
    };
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    Query$1.prototype.boundFromFields = function (methodName, values, before) {
        // Use explicit order by's because it has to match the query the user made
        var orderBy = this._query.explicitOrderBy;
        if (values.length > orderBy.length) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Too many arguments provided to " + methodName + "(). " +
                "The number of arguments must be less than or equal to the " +
                "number of Query.orderBy() clauses");
        }
        var components = [];
        for (var i = 0; i < values.length; i++) {
            var rawValue = values[i];
            var orderByComponent = orderBy[i];
            if (orderByComponent.field.isKeyField()) {
                if (typeof rawValue !== 'string') {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " +
                        (methodName + "(), but got a " + typeof rawValue));
                }
                if (!this._query.isCollectionGroupQuery() &&
                    rawValue.indexOf('/') !== -1) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), " +
                        ("the value passed to " + methodName + "() must be a plain document ID, but ") +
                        ("'" + rawValue + "' contains a slash."));
                }
                var path = this._query.path.child(ResourcePath.fromString(rawValue));
                if (!DocumentKey.isDocumentKey(path)) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by " +
                        ("FieldPath.documentId(), the value passed to " + methodName + "() must result in a ") +
                        ("valid document path, but '" + path + "' is not because it contains an odd number ") +
                        "of segments.");
                }
                var key = new DocumentKey(path);
                components.push(refValue(this.firestore._databaseId, key));
            }
            else {
                var wrapped = this.firestore._dataReader.parseQueryValue(methodName, rawValue);
                components.push(wrapped);
            }
        }
        return new Bound(components, before);
    };
    Query$1.prototype.onSnapshot = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        validateBetweenNumberOfArgs('Query.onSnapshot', arguments, 1, 4);
        var options = {};
        var observer;
        var currArg = 0;
        if (typeof args[currArg] === 'object' &&
            !isPartialObserver(args[currArg])) {
            options = args[currArg];
            validateOptionNames('Query.onSnapshot', options, [
                'includeMetadataChanges'
            ]);
            validateNamedOptionalType('Query.onSnapshot', 'boolean', 'includeMetadataChanges', options.includeMetadataChanges);
            currArg++;
        }
        if (isPartialObserver(args[currArg])) {
            observer = args[currArg];
        }
        else {
            validateArgType('Query.onSnapshot', 'function', currArg, args[currArg]);
            validateOptionalArgType('Query.onSnapshot', 'function', currArg + 1, args[currArg + 1]);
            validateOptionalArgType('Query.onSnapshot', 'function', currArg + 2, args[currArg + 2]);
            observer = {
                next: args[currArg],
                error: args[currArg + 1],
                complete: args[currArg + 2]
            };
        }
        this.validateHasExplicitOrderByForLimitToLast(this._query);
        return this.onSnapshotInternal(options, observer);
    };
    Query$1.prototype.onSnapshotInternal = function (options, observer) {
        var _this = this;
        var errHandler = function (err) {
            console.error('Uncaught Error in onSnapshot:', err);
        };
        if (observer.error) {
            errHandler = observer.error.bind(observer);
        }
        var asyncObserver = new AsyncObserver({
            next: function (result) {
                if (observer.next) {
                    observer.next(new QuerySnapshot(_this.firestore, _this._query, result, _this._converter));
                }
            },
            error: errHandler
        });
        var firestoreClient = this.firestore.ensureClientConfigured();
        var internalListener = firestoreClient.listen(this._query, asyncObserver, options);
        return function () {
            asyncObserver.mute();
            firestoreClient.unlisten(internalListener);
        };
    };
    Query$1.prototype.validateHasExplicitOrderByForLimitToLast = function (query) {
        if (query.hasLimitToLast() && query.explicitOrderBy.length === 0) {
            throw new FirestoreError(Code.UNIMPLEMENTED, 'limitToLast() queries require specifying at least one orderBy() clause');
        }
    };
    Query$1.prototype.get = function (options) {
        var _this = this;
        validateBetweenNumberOfArgs('Query.get', arguments, 0, 1);
        validateGetOptions('Query.get', options);
        this.validateHasExplicitOrderByForLimitToLast(this._query);
        return new Promise(function (resolve, reject) {
            if (options && options.source === 'cache') {
                _this.firestore
                    .ensureClientConfigured()
                    .getDocumentsFromLocalCache(_this._query)
                    .then(function (viewSnap) {
                    resolve(new QuerySnapshot(_this.firestore, _this._query, viewSnap, _this._converter));
                }, reject);
            }
            else {
                _this.getViaSnapshotListener(resolve, reject, options);
            }
        });
    };
    Query$1.prototype.getViaSnapshotListener = function (resolve, reject, options) {
        var unlisten = this.onSnapshotInternal({
            includeMetadataChanges: true,
            waitForSyncWhenOnline: true
        }, {
            next: function (result) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                unlisten();
                if (result.metadata.fromCache &&
                    options &&
                    options.source === 'server') {
                    reject(new FirestoreError(Code.UNAVAILABLE, 'Failed to get documents from server. (However, these ' +
                        'documents may exist in the local cache. Run again ' +
                        'without setting source to "server" to ' +
                        'retrieve the cached documents.)'));
                }
                else {
                    resolve(result);
                }
            },
            error: reject
        });
    };
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    Query$1.prototype.parseDocumentIdValue = function (documentIdValue) {
        if (typeof documentIdValue === 'string') {
            if (documentIdValue === '') {
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. When querying with FieldPath.documentId(), you ' +
                    'must provide a valid document ID, but it was an empty string.');
            }
            if (!this._query.isCollectionGroupQuery() &&
                documentIdValue.indexOf('/') !== -1) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. When querying a collection by " +
                    "FieldPath.documentId(), you must provide a plain document ID, but " +
                    ("'" + documentIdValue + "' contains a '/' character."));
            }
            var path = this._query.path.child(ResourcePath.fromString(documentIdValue));
            if (!DocumentKey.isDocumentKey(path)) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. When querying a collection group by " +
                    "FieldPath.documentId(), the value provided must result in a valid document path, " +
                    ("but '" + path + "' is not because it has an odd number of segments (" + path.length + ")."));
            }
            return refValue(this.firestore._databaseId, new DocumentKey(path));
        }
        else if (documentIdValue instanceof DocumentReference) {
            var ref = documentIdValue;
            return refValue(this.firestore._databaseId, ref._key);
        }
        else {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid " +
                "string or a DocumentReference, but it was: " +
                (valueDescription(documentIdValue) + "."));
        }
    };
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    Query$1.prototype.validateDisjunctiveFilterElements = function (value, operator) {
        if (!Array.isArray(value) || value.length === 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid Query. A non-empty array is required for ' +
                ("'" + operator.toString() + "' filters."));
        }
        if (value.length > 10) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid Query. '" + operator.toString() + "' filters support a " +
                'maximum of 10 elements in the value array.');
        }
        if (value.indexOf(null) >= 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid Query. '" + operator.toString() + "' filters cannot contain 'null' " +
                'in the value array.');
        }
        if (value.filter(function (element) { return Number.isNaN(element); }).length > 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid Query. '" + operator.toString() + "' filters cannot contain 'NaN' " +
                'in the value array.');
        }
    };
    Query$1.prototype.validateNewFilter = function (filter) {
        if (filter instanceof FieldFilter) {
            var arrayOps = ["array-contains" /* ARRAY_CONTAINS */, "array-contains-any" /* ARRAY_CONTAINS_ANY */];
            var disjunctiveOps = ["in" /* IN */, "array-contains-any" /* ARRAY_CONTAINS_ANY */];
            var isArrayOp = arrayOps.indexOf(filter.op) >= 0;
            var isDisjunctiveOp = disjunctiveOps.indexOf(filter.op) >= 0;
            if (filter.isInequality()) {
                var existingField = this._query.getInequalityFilterField();
                if (existingField !== null && !existingField.isEqual(filter.field)) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. All where filters with an inequality' +
                        ' (<, <=, >, or >=) must be on the same field. But you have' +
                        (" inequality filters on '" + existingField.toString() + "'") +
                        (" and '" + filter.field.toString() + "'"));
                }
                var firstOrderByField = this._query.getFirstOrderByField();
                if (firstOrderByField !== null) {
                    this.validateOrderByAndInequalityMatch(filter.field, firstOrderByField);
                }
            }
            else if (isDisjunctiveOp || isArrayOp) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var conflictingOp = null;
                if (isDisjunctiveOp) {
                    conflictingOp = this._query.findFilterOperator(disjunctiveOps);
                }
                if (conflictingOp === null && isArrayOp) {
                    conflictingOp = this._query.findFilterOperator(arrayOps);
                }
                if (conflictingOp != null) {
                    // We special case when it's a duplicate op to give a slightly clearer error message.
                    if (conflictingOp === filter.op) {
                        throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. You cannot use more than one ' +
                            ("'" + filter.op.toString() + "' filter."));
                    }
                    else {
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You cannot use '" + filter.op.toString() + "' filters " +
                            ("with '" + conflictingOp.toString() + "' filters."));
                    }
                }
            }
        }
    };
    Query$1.prototype.validateNewOrderBy = function (orderBy) {
        if (this._query.getFirstOrderByField() === null) {
            // This is the first order by. It must match any inequality.
            var inequalityField = this._query.getInequalityFilterField();
            if (inequalityField !== null) {
                this.validateOrderByAndInequalityMatch(inequalityField, orderBy.field);
            }
        }
    };
    Query$1.prototype.validateOrderByAndInequalityMatch = function (inequality, orderBy) {
        if (!orderBy.isEqual(inequality)) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality " +
                ("(<, <=, >, or >=) on field '" + inequality.toString() + "' ") +
                ("and so you must also use '" + inequality.toString() + "' ") +
                "as your first Query.orderBy(), but your first Query.orderBy() " +
                ("is on field '" + orderBy.toString() + "' instead."));
        }
    };
    return Query$1;
}());
var QuerySnapshot = /** @class */ (function () {
    function QuerySnapshot(_firestore, _originalQuery, _snapshot, _converter) {
        this._firestore = _firestore;
        this._originalQuery = _originalQuery;
        this._snapshot = _snapshot;
        this._converter = _converter;
        this._cachedChanges = null;
        this._cachedChangesIncludeMetadataChanges = null;
        this.metadata = new SnapshotMetadata(_snapshot.hasPendingWrites, _snapshot.fromCache);
    }
    Object.defineProperty(QuerySnapshot.prototype, "docs", {
        get: function () {
            var result = [];
            this.forEach(function (doc) { return result.push(doc); });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySnapshot.prototype, "empty", {
        get: function () {
            return this._snapshot.docs.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySnapshot.prototype, "size", {
        get: function () {
            return this._snapshot.docs.size;
        },
        enumerable: true,
        configurable: true
    });
    QuerySnapshot.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        validateBetweenNumberOfArgs('QuerySnapshot.forEach', arguments, 1, 2);
        validateArgType('QuerySnapshot.forEach', 'function', 1, callback);
        this._snapshot.docs.forEach(function (doc) {
            callback.call(thisArg, _this.convertToDocumentImpl(doc));
        });
    };
    Object.defineProperty(QuerySnapshot.prototype, "query", {
        get: function () {
            return new Query$1(this._originalQuery, this._firestore, this._converter);
        },
        enumerable: true,
        configurable: true
    });
    QuerySnapshot.prototype.docChanges = function (options) {
        if (options) {
            validateOptionNames('QuerySnapshot.docChanges', options, [
                'includeMetadataChanges'
            ]);
            validateNamedOptionalType('QuerySnapshot.docChanges', 'boolean', 'includeMetadataChanges', options.includeMetadataChanges);
        }
        var includeMetadataChanges = !!(options && options.includeMetadataChanges);
        if (includeMetadataChanges && this._snapshot.excludesMetadataChanges) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'To include metadata changes with your document changes, you must ' +
                'also pass { includeMetadataChanges:true } to onSnapshot().');
        }
        if (!this._cachedChanges ||
            this._cachedChangesIncludeMetadataChanges !== includeMetadataChanges) {
            this._cachedChanges = changesFromSnapshot(this._firestore, includeMetadataChanges, this._snapshot, this._converter);
            this._cachedChangesIncludeMetadataChanges = includeMetadataChanges;
        }
        return this._cachedChanges;
    };
    /** Check the equality. The call can be very expensive. */
    QuerySnapshot.prototype.isEqual = function (other) {
        if (!(other instanceof QuerySnapshot)) {
            throw invalidClassError('isEqual', 'QuerySnapshot', 1, other);
        }
        return (this._firestore === other._firestore &&
            this._originalQuery.isEqual(other._originalQuery) &&
            this._snapshot.isEqual(other._snapshot) &&
            this._converter === other._converter);
    };
    QuerySnapshot.prototype.convertToDocumentImpl = function (doc) {
        return new QueryDocumentSnapshot(this._firestore, doc.key, doc, this.metadata.fromCache, this._snapshot.mutatedKeys.has(doc.key), this._converter);
    };
    return QuerySnapshot;
}());
var CollectionReference = /** @class */ (function (_super) {
    tslib.__extends(CollectionReference, _super);
    function CollectionReference(_path, firestore, _converter) {
        var _this = _super.call(this, Query.atPath(_path), firestore, _converter) || this;
        _this._path = _path;
        if (_path.length % 2 !== 1) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid collection reference. Collection ' +
                'references must have an odd number of segments, but ' +
                (_path.canonicalString() + " has " + _path.length));
        }
        return _this;
    }
    Object.defineProperty(CollectionReference.prototype, "id", {
        get: function () {
            return this._query.path.lastSegment();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionReference.prototype, "parent", {
        get: function () {
            var parentPath = this._query.path.popLast();
            if (parentPath.isEmpty()) {
                return null;
            }
            else {
                return new DocumentReference(new DocumentKey(parentPath), this.firestore);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionReference.prototype, "path", {
        get: function () {
            return this._query.path.canonicalString();
        },
        enumerable: true,
        configurable: true
    });
    CollectionReference.prototype.doc = function (pathString) {
        validateBetweenNumberOfArgs('CollectionReference.doc', arguments, 0, 1);
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        if (arguments.length === 0) {
            pathString = AutoId.newId();
        }
        validateArgType('CollectionReference.doc', 'non-empty string', 1, pathString);
        if (pathString === '') {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Document path must be a non-empty string');
        }
        var path = ResourcePath.fromString(pathString);
        return DocumentReference.forPath(this._query.path.child(path), this.firestore, this._converter);
    };
    CollectionReference.prototype.add = function (value) {
        validateExactNumberOfArgs('CollectionReference.add', arguments, 1);
        var convertedValue = this._converter
            ? this._converter.toFirestore(value)
            : value;
        validateArgType('CollectionReference.add', 'object', 1, convertedValue);
        var docRef = this.doc();
        return docRef.set(value).then(function () { return docRef; });
    };
    CollectionReference.prototype.withConverter = function (converter) {
        return new CollectionReference(this._path, this.firestore, converter);
    };
    return CollectionReference;
}(Query$1));
function validateSetOptions(methodName, options) {
    if (options === undefined) {
        return {
            merge: false
        };
    }
    validateOptionNames(methodName, options, ['merge', 'mergeFields']);
    validateNamedOptionalType(methodName, 'boolean', 'merge', options.merge);
    validateOptionalArrayElements(methodName, 'mergeFields', 'a string or a FieldPath', options.mergeFields, function (element) { return typeof element === 'string' || element instanceof FieldPath$1; });
    if (options.mergeFields !== undefined && options.merge !== undefined) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid options passed to function " + methodName + "(): You cannot specify both \"merge\" " +
            "and \"mergeFields\".");
    }
    return options;
}
function validateSnapshotOptions(methodName, options) {
    if (options === undefined) {
        return {};
    }
    validateOptionNames(methodName, options, ['serverTimestamps']);
    validateNamedOptionalPropertyEquals(methodName, 'options', 'serverTimestamps', options.serverTimestamps, ['estimate', 'previous', 'none']);
    return options;
}
function validateGetOptions(methodName, options) {
    validateOptionalArgType(methodName, 'object', 1, options);
    if (options) {
        validateOptionNames(methodName, options, ['source']);
        validateNamedOptionalPropertyEquals(methodName, 'options', 'source', options.source, ['default', 'server', 'cache']);
    }
}
function validateReference(methodName, documentRef, firestore) {
    if (!(documentRef instanceof DocumentReference)) {
        throw invalidClassError(methodName, 'DocumentReference', 1, documentRef);
    }
    else if (documentRef.firestore !== firestore) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, 'Provided document reference is from a different Firestore instance.');
    }
    else {
        return documentRef;
    }
}
/**
 * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
 *
 * Exported for testing.
 */
function changesFromSnapshot(firestore, includeMetadataChanges, snapshot, converter) {
    if (snapshot.oldDocs.isEmpty()) {
        // Special case the first snapshot because index calculation is easy and
        // fast
        var lastDoc_1;
        var index_1 = 0;
        return snapshot.docChanges.map(function (change) {
            var doc = new QueryDocumentSnapshot(firestore, change.doc.key, change.doc, snapshot.fromCache, snapshot.mutatedKeys.has(change.doc.key), converter);
            debugAssert(change.type === 0 /* Added */, 'Invalid event type for first snapshot');
            debugAssert(!lastDoc_1 || snapshot.query.docComparator(lastDoc_1, change.doc) < 0, 'Got added events in wrong order');
            lastDoc_1 = change.doc;
            return {
                type: 'added',
                doc: doc,
                oldIndex: -1,
                newIndex: index_1++
            };
        });
    }
    else {
        // A DocumentSet that is updated incrementally as changes are applied to use
        // to lookup the index of a document.
        var indexTracker_1 = snapshot.oldDocs;
        return snapshot.docChanges
            .filter(function (change) { return includeMetadataChanges || change.type !== 3; } /* Metadata */)
            .map(function (change) {
            var doc = new QueryDocumentSnapshot(firestore, change.doc.key, change.doc, snapshot.fromCache, snapshot.mutatedKeys.has(change.doc.key), converter);
            var oldIndex = -1;
            var newIndex = -1;
            if (change.type !== 0 /* Added */) {
                oldIndex = indexTracker_1.indexOf(change.doc.key);
                debugAssert(oldIndex >= 0, 'Index for document not found');
                indexTracker_1 = indexTracker_1.delete(change.doc.key);
            }
            if (change.type !== 1 /* Removed */) {
                indexTracker_1 = indexTracker_1.add(change.doc);
                newIndex = indexTracker_1.indexOf(change.doc.key);
            }
            return { type: resultChangeType(change.type), doc: doc, oldIndex: oldIndex, newIndex: newIndex };
        });
    }
}
function resultChangeType(type) {
    switch (type) {
        case 0 /* Added */:
            return 'added';
        case 2 /* Modified */:
        case 3 /* Metadata */:
            return 'modified';
        case 1 /* Removed */:
            return 'removed';
        default:
            return fail('Unknown change type: ' + type);
    }
}
/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */
function applyFirestoreDataConverter(converter, value, functionName) {
    var convertedValue;
    if (converter) {
        convertedValue = converter.toFirestore(value);
        functionName = 'toFirestore() in ' + functionName;
    }
    else {
        convertedValue = value;
    }
    return [convertedValue, functionName];
}
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
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
/**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */
function makeConstructorPrivate(cls, optionalMessage) {
    function PublicConstructor() {
        var error = 'This constructor is private.';
        if (optionalMessage) {
            error += ' ';
            error += optionalMessage;
        }
        throw new FirestoreError(Code.INVALID_ARGUMENT, error);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
    PublicConstructor.prototype = cls.prototype;
    // Copy any static methods/members
    Object.assign(PublicConstructor, cls);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return PublicConstructor;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
// Public instance that disallows construction at runtime. Note that this still
// allows instanceof checks.
var PublicFirestore = makeConstructorPrivate(Firestore, 'Use firebase.firestore() instead.');
var PublicTransaction = makeConstructorPrivate(Transaction$1, 'Use firebase.firestore().runTransaction() instead.');
var PublicWriteBatch = makeConstructorPrivate(WriteBatch, 'Use firebase.firestore().batch() instead.');
var PublicDocumentReference = makeConstructorPrivate(DocumentReference, 'Use firebase.firestore().doc() instead.');
var PublicDocumentSnapshot = makeConstructorPrivate(DocumentSnapshot);
var PublicQueryDocumentSnapshot = makeConstructorPrivate(QueryDocumentSnapshot);
var PublicQuery = makeConstructorPrivate(Query$1);
var PublicQuerySnapshot = makeConstructorPrivate(QuerySnapshot);
var PublicCollectionReference = makeConstructorPrivate(CollectionReference, 'Use firebase.firestore().collection() instead.');
var PublicFieldValue = makeConstructorPrivate(FieldValue, 'Use FieldValue.<field>() instead.');
var PublicBlob = makeConstructorPrivate(Blob, 'Use Blob.fromUint8Array() or Blob.fromBase64String() instead.');
var firestoreNamespace = {
    Firestore: PublicFirestore,
    GeoPoint: GeoPoint,
    Timestamp: Timestamp,
    Blob: PublicBlob,
    Transaction: PublicTransaction,
    WriteBatch: PublicWriteBatch,
    DocumentReference: PublicDocumentReference,
    DocumentSnapshot: PublicDocumentSnapshot,
    Query: PublicQuery,
    QueryDocumentSnapshot: PublicQueryDocumentSnapshot,
    QuerySnapshot: PublicQuerySnapshot,
    CollectionReference: PublicCollectionReference,
    FieldPath: FieldPath$1,
    FieldValue: PublicFieldValue,
    setLogLevel: Firestore.setLogLevel,
    CACHE_SIZE_UNLIMITED: CACHE_SIZE_UNLIMITED
};
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
function configureForFirebase(firebase, firestoreFactory) {
    firebase.INTERNAL.registerComponent(new component.Component('firestore', function (container) {
        var app = container.getProvider('app').getImmediate();
        return firestoreFactory(app, container.getProvider('auth-internal'));
    }, "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, firestoreNamespace)));
}
/**
 * @license
 * Copyright 2019 Google Inc.
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
var NoopConnectivityMonitor = /** @class */ (function () {
    function NoopConnectivityMonitor() {
    }
    NoopConnectivityMonitor.prototype.addCallback = function (callback) {
        // No-op.
    };
    NoopConnectivityMonitor.prototype.shutdown = function () {
        // No-op.
    };
    return NoopConnectivityMonitor;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */
var StreamBridge = /** @class */ (function () {
    function StreamBridge(args) {
        this.sendFn = args.sendFn;
        this.closeFn = args.closeFn;
    }
    StreamBridge.prototype.onOpen = function (callback) {
        debugAssert(!this.wrappedOnOpen, 'Called onOpen on stream twice!');
        this.wrappedOnOpen = callback;
    };
    StreamBridge.prototype.onClose = function (callback) {
        debugAssert(!this.wrappedOnClose, 'Called onClose on stream twice!');
        this.wrappedOnClose = callback;
    };
    StreamBridge.prototype.onMessage = function (callback) {
        debugAssert(!this.wrappedOnMessage, 'Called onMessage on stream twice!');
        this.wrappedOnMessage = callback;
    };
    StreamBridge.prototype.close = function () {
        this.closeFn();
    };
    StreamBridge.prototype.send = function (msg) {
        this.sendFn(msg);
    };
    StreamBridge.prototype.callOnOpen = function () {
        debugAssert(this.wrappedOnOpen !== undefined, 'Cannot call onOpen because no callback was set');
        this.wrappedOnOpen();
    };
    StreamBridge.prototype.callOnClose = function (err) {
        debugAssert(this.wrappedOnClose !== undefined, 'Cannot call onClose because no callback was set');
        this.wrappedOnClose(err);
    };
    StreamBridge.prototype.callOnMessage = function (msg) {
        debugAssert(this.wrappedOnMessage !== undefined, 'Cannot call onMessage because no callback was set');
        this.wrappedOnMessage(msg);
    };
    return StreamBridge;
}());
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
/*
 * Utilities for dealing with node.js-style APIs. See nodePromise for more
 * details.
 */
/**
 * Creates a node-style callback that resolves or rejects a new Promise. The
 * callback is passed to the given action which can then use the callback as
 * a parameter to a node-style function.
 *
 * The intent is to directly bridge a node-style function (which takes a
 * callback) into a Promise without manually converting between the node-style
 * callback and the promise at each call.
 *
 * In effect it allows you to convert:
 *
 * @example
 * new Promise((resolve: (value?: fs.Stats) => void,
 *              reject: (error?: any) => void) => {
 *   fs.stat(path, (error?: any, stat?: fs.Stats) => {
 *     if (error) {
 *       reject(error);
 *     } else {
 *       resolve(stat);
 *     }
 *   });
 * });
 *
 * Into
 * @example
 * nodePromise((callback: NodeCallback<fs.Stats>) => {
 *   fs.stat(path, callback);
 * });
 *
 * @param action a function that takes a node-style callback as an argument and
 *     then uses that callback to invoke some node-style API.
 * @return a new Promise which will be rejected if the callback is given the
 *     first Error parameter or will resolve to the value given otherwise.
 */
function nodePromise(action) {
    return new Promise(function (resolve, reject) {
        action(function (error, value) {
            if (error) {
                reject(error);
            }
            else {
                resolve(value);
            }
        });
    });
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var SDK_VERSION$1 = firebase.SDK_VERSION;
var grpcVersion = package_json.version;
var LOG_TAG$b = 'Connection';
// TODO(b/38203344): The SDK_VERSION is set independently from Firebase because
// we are doing out-of-band releases. Once we release as part of Firebase, we
// should use the Firebase version instead.
var X_GOOG_API_CLIENT_VALUE = "gl-node/" + process.versions.node + " fire/" + SDK_VERSION$1 + " grpc/" + grpcVersion;
function createMetadata(databaseInfo, token) {
    hardAssert(token === null || token.type === 'OAuth', 'If provided, token must be OAuth');
    var metadata = new grpcJs.Metadata();
    if (token) {
        for (var header in token.authHeaders) {
            if (token.authHeaders.hasOwnProperty(header)) {
                metadata.set(header, token.authHeaders[header]);
            }
        }
    }
    metadata.set('x-goog-api-client', X_GOOG_API_CLIENT_VALUE);
    // This header is used to improve routing and project isolation by the
    // backend.
    metadata.set('google-cloud-resource-prefix', "projects/" + databaseInfo.databaseId.projectId + "/" +
        ("databases/" + databaseInfo.databaseId.database));
    return metadata;
}
/**
 * A Connection implemented by GRPC-Node.
 */
var GrpcConnection = /** @class */ (function () {
    function GrpcConnection(protos, databaseInfo) {
        this.databaseInfo = databaseInfo;
        // We cache stubs for the most-recently-used token.
        this.cachedStub = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.firestore = protos['google']['firestore']['v1'];
    }
    GrpcConnection.prototype.ensureActiveStub = function () {
        if (!this.cachedStub) {
            logDebug(LOG_TAG$b, 'Creating Firestore stub.');
            var credentials$1 = this.databaseInfo.ssl
                ? grpcJs.credentials.createSsl()
                : grpcJs.credentials.createInsecure();
            this.cachedStub = new this.firestore.Firestore(this.databaseInfo.host, credentials$1);
        }
        return this.cachedStub;
    };
    GrpcConnection.prototype.invokeRPC = function (rpcName, request, token) {
        var stub = this.ensureActiveStub();
        var metadata = createMetadata(this.databaseInfo, token);
        return nodePromise(function (callback) {
            logDebug(LOG_TAG$b, "RPC '" + rpcName + "' invoked with request:", request);
            return stub[rpcName](request, metadata, function (grpcError, value) {
                if (grpcError) {
                    logDebug(LOG_TAG$b, "RPC '" + rpcName + "' failed with error:", grpcError);
                    callback(new FirestoreError(mapCodeFromRpcCode(grpcError.code), grpcError.message));
                }
                else {
                    logDebug(LOG_TAG$b, "RPC '" + rpcName + "' completed with response:", value);
                    callback(undefined, value);
                }
            });
        });
    };
    GrpcConnection.prototype.invokeStreamingRPC = function (rpcName, request, token) {
        var results = [];
        var responseDeferred = new Deferred();
        logDebug(LOG_TAG$b, "RPC '" + rpcName + "' invoked (streaming) with request:", request);
        var stub = this.ensureActiveStub();
        var metadata = createMetadata(this.databaseInfo, token);
        var stream = stub[rpcName](request, metadata);
        stream.on('data', function (response) {
            logDebug(LOG_TAG$b, "RPC " + rpcName + " received result:", response);
            results.push(response);
        });
        stream.on('end', function () {
            logDebug(LOG_TAG$b, "RPC '" + rpcName + "' completed.");
            responseDeferred.resolve(results);
        });
        stream.on('error', function (grpcError) {
            logDebug(LOG_TAG$b, "RPC '" + rpcName + "' failed with error:", grpcError);
            var code = mapCodeFromRpcCode(grpcError.code);
            responseDeferred.reject(new FirestoreError(code, grpcError.message));
        });
        return responseDeferred.promise;
    };
    // TODO(mikelehen): This "method" is a monster. Should be refactored.
    GrpcConnection.prototype.openStream = function (rpcName, token) {
        var stub = this.ensureActiveStub();
        var metadata = createMetadata(this.databaseInfo, token);
        var grpcStream = stub[rpcName](metadata);
        var closed = false;
        var close = function (err) {
            if (!closed) {
                closed = true;
                stream.callOnClose(err);
                grpcStream.end();
            }
        };
        var stream = new StreamBridge({
            sendFn: function (msg) {
                if (!closed) {
                    logDebug(LOG_TAG$b, 'GRPC stream sending:', msg);
                    try {
                        grpcStream.write(msg);
                    }
                    catch (e) {
                        // This probably means we didn't conform to the proto.  Make sure to
                        // log the message we sent.
                        logError('Failure sending:', msg);
                        logError('Error:', e);
                        throw e;
                    }
                }
                else {
                    logDebug(LOG_TAG$b, 'Not sending because gRPC stream is closed:', msg);
                }
            },
            closeFn: function () {
                logDebug(LOG_TAG$b, 'GRPC stream closed locally via close().');
                close();
            }
        });
        grpcStream.on('data', function (msg) {
            if (!closed) {
                logDebug(LOG_TAG$b, 'GRPC stream received:', msg);
                stream.callOnMessage(msg);
            }
        });
        grpcStream.on('end', function () {
            logDebug(LOG_TAG$b, 'GRPC stream ended.');
            close();
        });
        grpcStream.on('error', function (grpcError) {
            logDebug(LOG_TAG$b, 'GRPC stream error. Code:', grpcError.code, 'Message:', grpcError.message);
            var code = mapCodeFromRpcCode(grpcError.code);
            close(new FirestoreError(code, grpcError.message));
        });
        logDebug(LOG_TAG$b, 'Opening GRPC stream');
        // TODO(dimond): Since grpc has no explicit open status (or does it?) we
        // simulate an onOpen in the next loop after the stream had it's listeners
        // registered
        setTimeout(function () {
            stream.callOnOpen();
        }, 0);
        return stream;
    };
    return GrpcConnection;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
/** Used by tests so we can match @grpc/proto-loader behavior. */
var protoLoaderOptions = {
    longs: String,
    enums: String,
    defaults: true,
    oneofs: false
};
/**
 * Loads the protocol buffer definitions for Firestore.
 *
 * @returns The GrpcObject representing our protos.
 */
function loadProtos() {
    var root = path.resolve(__dirname, "src/protos");
    var firestoreProtoFile = path.join(root, 'google/firestore/v1/firestore.proto');
    var packageDefinition = protoLoader.loadSync(firestoreProtoFile, Object.assign(Object.assign({}, protoLoaderOptions), { includeDirs: [root] }));
    return grpcJs.loadPackageDefinition(packageDefinition);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var NodePlatform = /** @class */ (function () {
    function NodePlatform() {
        this.base64Available = true;
        this.document = null;
    }
    Object.defineProperty(NodePlatform.prototype, "window", {
        get: function () {
            if (process.env.USE_MOCK_PERSISTENCE === 'YES') {
                // eslint-disable-next-line no-restricted-globals
                return window;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    NodePlatform.prototype.loadConnection = function (databaseInfo) {
        var protos = loadProtos();
        return Promise.resolve(new GrpcConnection(protos, databaseInfo));
    };
    NodePlatform.prototype.newConnectivityMonitor = function () {
        return new NoopConnectivityMonitor();
    };
    NodePlatform.prototype.newSerializer = function (partitionId) {
        return new JsonProtoSerializer(partitionId, { useProto3Json: false });
    };
    NodePlatform.prototype.formatJSON = function (value) {
        // util.inspect() results in much more readable output than JSON.stringify()
        return util$1.inspect(value, { depth: 100 });
    };
    NodePlatform.prototype.atob = function (encoded) {
        // Node actually doesn't validate base64 strings.
        // A quick sanity check that is not a fool-proof validation
        if (/[^-A-Za-z0-9+/=]/.test(encoded)) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Not a valid Base64 string: ' + encoded);
        }
        return new Buffer(encoded, 'base64').toString('binary');
    };
    NodePlatform.prototype.btoa = function (raw) {
        return new Buffer(raw, 'binary').toString('base64');
    };
    NodePlatform.prototype.randomBytes = function (nBytes) {
        debugAssert(nBytes >= 0, "Expecting non-negative nBytes, got: " + nBytes);
        return crypto.randomBytes(nBytes);
    };
    return NodePlatform;
}());
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
/**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */
PlatformSupport.setPlatform(new NodePlatform());
var name = "@firebase/firestore";
var version = "1.14.4";
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Registers the memory-only Firestore build for Node with the components
 * framework.
 */
function registerFirestore(instance) {
    configureForFirebase(instance, function (app, auth) { return new Firestore(app, auth, new MemoryComponentProvider()); });
    instance.registerVersion(name, version);
}
registerFirestore(firebase);

exports.registerFirestore = registerFirestore;
//# sourceMappingURL=index.memory.node.cjs.js.map
