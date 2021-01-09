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
import '../../index';
import { Reference } from '../../src/api/Reference';
import { Query } from '../../src/api/Query';
export declare const TEST_PROJECT: any;
export declare const DATABASE_ADDRESS: any;
export declare const DATABASE_URL: any;
export declare function createTestApp(): import("@firebase/app-types").FirebaseApp;
/**
 * Gets or creates a root node to the test namespace. All calls sharing the
 * value of opt_i will share an app context.
 * @param {number=} i
 * @param {string=} ref
 * @return {Reference}
 */
export declare function getRootNode(i?: number, ref?: string): any;
/**
 * Create multiple refs to the same top level
 * push key - each on it's own Firebase.Context.
 * @param {int=} numNodes
 * @return {Reference|Array<Reference>}
 */
export declare function getRandomNode(numNodes?: any): Reference | Reference[];
export declare function getQueryValue(query: Query): Promise<unknown>;
export declare function pause(milliseconds: number): Promise<unknown>;
export declare function getPath(query: Query): string;
export declare function shuffle(arr: any, randFn?: () => number): void;
export declare function getFreshRepo(path: any): any;
export declare function getFreshRepoFromReference(ref: any): any;
export declare function getSnap(path: any): any;
export declare function getVal(path: any): any;
export declare function canCreateExtraConnections(): boolean;
export declare function buildObjFromKey(key: any): {};
export declare function testRepoInfo(url: any): import("../../src/core/RepoInfo").RepoInfo;
export declare function repoInfoForConnectionTest(): import("../../src/core/RepoInfo").RepoInfo;
