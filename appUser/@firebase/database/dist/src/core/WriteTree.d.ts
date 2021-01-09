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
import { Path } from './util/Path';
import { ChildrenNode } from './snap/ChildrenNode';
import { NamedNode, Node } from './snap/Node';
import { CacheNode } from './view/CacheNode';
import { Index } from './snap/indexes/Index';
/**
 * Defines a single user-initiated write operation. May be the result of a set(), transaction(), or update() call. In
 * the case of a set() or transaction, snap wil be non-null.  In the case of an update(), children will be non-null.
 */
export interface WriteRecord {
    writeId: number;
    path: Path;
    snap?: Node | null;
    children?: {
        [k: string]: Node;
    } | null;
    visible: boolean;
}
/**
 * WriteTree tracks all pending user-initiated writes and has methods to calculate the result of merging them
 * with underlying server data (to create "event cache" data).  Pending writes are added with addOverwrite()
 * and addMerge(), and removed with removeWrite().
 *
 * @constructor
 */
export declare class WriteTree {
    /**
     * A tree tracking the result of applying all visible writes.  This does not include transactions with
     * applyLocally=false or writes that are completely shadowed by other writes.
     *
     * @type {!CompoundWrite}
     * @private
     */
    private visibleWrites_;
    /**
     * A list of all pending writes, regardless of visibility and shadowed-ness.  Used to calculate arbitrary
     * sets of the changed data, such as hidden writes (from transactions) or changes with certain writes excluded (also
     * used by transactions).
     *
     * @type {!Array.<!WriteRecord>}
     * @private
     */
    private allWrites_;
    private lastWriteId_;
    /**
     * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
     *
     * @param {!Path} path
     * @return {!WriteTreeRef}
     */
    childWrites(path: Path): WriteTreeRef;
    /**
     * Record a new overwrite from user code.
     *
     * @param {!Path} path
     * @param {!Node} snap
     * @param {!number} writeId
     * @param {boolean=} visible This is set to false by some transactions. It should be excluded from event caches
     */
    addOverwrite(path: Path, snap: Node, writeId: number, visible?: boolean): void;
    /**
     * Record a new merge from user code.
     *
     * @param {!Path} path
     * @param {!Object.<string, !Node>} changedChildren
     * @param {!number} writeId
     */
    addMerge(path: Path, changedChildren: {
        [k: string]: Node;
    }, writeId: number): void;
    /**
     * @param {!number} writeId
     * @return {?WriteRecord}
     */
    getWrite(writeId: number): WriteRecord | null;
    /**
     * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
     * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
     *
     * @param {!number} writeId
     * @return {boolean} true if the write may have been visible (meaning we'll need to reevaluate / raise
     * events as a result).
     */
    removeWrite(writeId: number): boolean;
    /**
     * Return a complete snapshot for the given path if there's visible write data at that path, else null.
     * No server data is considered.
     *
     * @param {!Path} path
     * @return {?Node}
     */
    getCompleteWriteData(path: Path): Node | null;
    /**
     * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
     * writes), attempt to calculate a complete snapshot for the given path
     *
     * @param {!Path} treePath
     * @param {?Node} completeServerCache
     * @param {Array.<number>=} writeIdsToExclude An optional set to be excluded
     * @param {boolean=} includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
     * @return {?Node}
     */
    calcCompleteEventCache(treePath: Path, completeServerCache: Node | null, writeIdsToExclude?: number[], includeHiddenWrites?: boolean): Node | null;
    /**
     * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
     * Used when creating new views, to pre-fill their complete event children snapshot.
     *
     * @param {!Path} treePath
     * @param {?ChildrenNode} completeServerChildren
     * @return {!ChildrenNode}
     */
    calcCompleteEventChildren(treePath: Path, completeServerChildren: ChildrenNode | null): Node;
    /**
     * Given that the underlying server data has updated, determine what, if anything, needs to be
     * applied to the event cache.
     *
     * Possibilities:
     *
     * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
     *
     * 2. Some write is completely shadowing. No events to be raised
     *
     * 3. Is partially shadowed. Events
     *
     * Either existingEventSnap or existingServerSnap must exist
     *
     * @param {!Path} treePath
     * @param {!Path} childPath
     * @param {?Node} existingEventSnap
     * @param {?Node} existingServerSnap
     * @return {?Node}
     */
    calcEventCacheAfterServerOverwrite(treePath: Path, childPath: Path, existingEventSnap: Node | null, existingServerSnap: Node | null): Node | null;
    /**
     * Returns a complete child for a given server snap after applying all user writes or null if there is no
     * complete child for this ChildKey.
     *
     * @param {!Path} treePath
     * @param {!string} childKey
     * @param {!CacheNode} existingServerSnap
     * @return {?Node}
     */
    calcCompleteChild(treePath: Path, childKey: string, existingServerSnap: CacheNode): Node | null;
    /**
     * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
     * a higher path, this will return the child of that write relative to the write and this path.
     * Returns null if there is no write at this path.
     */
    shadowingWrite(path: Path): Node | null;
    /**
     * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
     * the window, but may now be in the window.
     */
    calcIndexedSlice(treePath: Path, completeServerData: Node | null, startPost: NamedNode, count: number, reverse: boolean, index: Index): NamedNode[];
    private recordContainsPath_;
    /**
     * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
     */
    private resetTree_;
    /**
     * The default filter used when constructing the tree. Keep everything that's visible.
     */
    private static DefaultFilter_;
    /**
     * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
     * event data at that path.
     */
    private static layerTree_;
}
/**
 * A WriteTreeRef wraps a WriteTree and a path, for convenient access to a particular subtree.  All of the methods
 * just proxy to the underlying WriteTree.
 *
 * @constructor
 */
export declare class WriteTreeRef {
    /**
     * The path to this particular write tree ref. Used for calling methods on writeTree_ while exposing a simpler
     * interface to callers.
     *
     * @type {!Path}
     * @private
     * @const
     */
    private readonly treePath_;
    /**
     * * A reference to the actual tree of write data. All methods are pass-through to the tree, but with the appropriate
     * path prefixed.
     *
     * This lets us make cheap references to points in the tree for sync points without having to copy and maintain all of
     * the data.
     *
     * @type {!WriteTree}
     * @private
     * @const
     */
    private readonly writeTree_;
    /**
     * @param {!Path} path
     * @param {!WriteTree} writeTree
     */
    constructor(path: Path, writeTree: WriteTree);
    /**
     * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
     * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
     * can lead to a more expensive calculation.
     *
     * @param {?Node} completeServerCache
     * @param {Array.<number>=} writeIdsToExclude Optional writes to exclude.
     * @param {boolean=} includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
     * @return {?Node}
     */
    calcCompleteEventCache(completeServerCache: Node | null, writeIdsToExclude?: number[], includeHiddenWrites?: boolean): Node | null;
    /**
     * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
     * mix of the given server data and write data.
     *
     * @param {?ChildrenNode} completeServerChildren
     * @return {!ChildrenNode}
     */
    calcCompleteEventChildren(completeServerChildren: ChildrenNode | null): ChildrenNode;
    /**
     * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
     * if anything, needs to be applied to the event cache.
     *
     * Possibilities:
     *
     * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
     *
     * 2. Some write is completely shadowing. No events to be raised
     *
     * 3. Is partially shadowed. Events should be raised
     *
     * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
     *
     * @param {!Path} path
     * @param {?Node} existingEventSnap
     * @param {?Node} existingServerSnap
     * @return {?Node}
     */
    calcEventCacheAfterServerOverwrite(path: Path, existingEventSnap: Node | null, existingServerSnap: Node | null): Node | null;
    /**
     * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
     * a higher path, this will return the child of that write relative to the write and this path.
     * Returns null if there is no write at this path.
     *
     * @param {!Path} path
     * @return {?Node}
     */
    shadowingWrite(path: Path): Node | null;
    /**
     * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
     * the window, but may now be in the window
     *
     * @param {?Node} completeServerData
     * @param {!NamedNode} startPost
     * @param {!number} count
     * @param {boolean} reverse
     * @param {!Index} index
     * @return {!Array.<!NamedNode>}
     */
    calcIndexedSlice(completeServerData: Node | null, startPost: NamedNode, count: number, reverse: boolean, index: Index): NamedNode[];
    /**
     * Returns a complete child for a given server snap after applying all user writes or null if there is no
     * complete child for this ChildKey.
     *
     * @param {!string} childKey
     * @param {!CacheNode} existingServerCache
     * @return {?Node}
     */
    calcCompleteChild(childKey: string, existingServerCache: CacheNode): Node | null;
    /**
     * Return a WriteTreeRef for a child.
     *
     * @param {string} childName
     * @return {!WriteTreeRef}
     */
    child(childName: string): WriteTreeRef;
}
