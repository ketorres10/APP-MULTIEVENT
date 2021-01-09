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
import { User } from '../auth/user';
import { LocalStore, MultiTabLocalStore } from '../local/local_store';
import { ReferenceSet } from '../local/reference_set';
import { DocumentKeySet, MaybeDocumentMap } from '../model/collections';
import { DocumentKey } from '../model/document_key';
import { Mutation } from '../model/mutation';
import { MutationBatchResult } from '../model/mutation_batch';
import { RemoteEvent } from '../remote/remote_event';
import { RemoteStore } from '../remote/remote_store';
import { RemoteSyncer } from '../remote/remote_syncer';
import { FirestoreError } from '../util/error';
import { ObjectMap } from '../util/obj_map';
import { Deferred } from '../util/promise';
import { SortedMap } from '../util/sorted_map';
import { ClientId, SharedClientState } from '../local/shared_client_state';
import { QueryTargetState, SharedClientStateSyncer } from '../local/shared_client_state_syncer';
import { Query } from './query';
import { Transaction } from './transaction';
import { BatchId, MutationBatchState, OnlineState, OnlineStateSource, TargetId } from './types';
import { LimboDocumentChange, View } from './view';
import { ViewSnapshot } from './view_snapshot';
import { AsyncQueue } from '../util/async_queue';
/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */
declare class QueryView {
    /**
     * The query itself.
     */
    query: Query;
    /**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
    targetId: TargetId;
    /**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
    view: View;
    constructor(
    /**
     * The query itself.
     */
    query: Query, 
    /**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
    targetId: TargetId, 
    /**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
    view: View);
}
/** Tracks a limbo resolution. */
declare class LimboResolution {
    key: DocumentKey;
    constructor(key: DocumentKey);
    /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    receivedDocument: boolean;
}
/**
 * Interface implemented by EventManager to handle notifications from
 * SyncEngine.
 */
export interface SyncEngineListener {
    /** Handles new view snapshots. */
    onWatchChange(snapshots: ViewSnapshot[]): void;
    /** Handles the failure of a query. */
    onWatchError(query: Query, error: Error): void;
    /** Handles a change in online state. */
    onOnlineStateChange(onlineState: OnlineState): void;
}
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
export declare class SyncEngine implements RemoteSyncer {
    protected localStore: LocalStore;
    protected remoteStore: RemoteStore;
    protected sharedClientState: SharedClientState;
    private currentUser;
    private maxConcurrentLimboResolutions;
    protected syncEngineListener: SyncEngineListener | null;
    protected queryViewsByQuery: ObjectMap<Query, QueryView>;
    protected queriesByTarget: Map<number, Query[]>;
    /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query.
     */
    private enqueuedLimboResolutions;
    /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    protected activeLimboTargetsByKey: SortedMap<DocumentKey, number>;
    /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    protected activeLimboResolutionsByTarget: Map<number, LimboResolution>;
    protected limboDocumentRefs: ReferenceSet;
    /** Stores user completion handlers, indexed by User and BatchId. */
    private mutationUserCallbacks;
    /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    private pendingWritesCallbacks;
    private limboTargetIdGenerator;
    private onlineState;
    constructor(localStore: LocalStore, remoteStore: RemoteStore, sharedClientState: SharedClientState, currentUser: User, maxConcurrentLimboResolutions: number);
    get isPrimaryClient(): boolean;
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */
    subscribe(syncEngineListener: SyncEngineListener): void;
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the initial snapshot.
     */
    listen(query: Query): Promise<ViewSnapshot>;
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    protected initializeViewAndComputeSnapshot(query: Query, targetId: TargetId, current: boolean): Promise<ViewSnapshot>;
    /** Stops listening to the query. */
    unlisten(query: Query): Promise<void>;
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
    write(batch: Mutation[], userCallback: Deferred<void>): Promise<void>;
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
    runTransaction<T>(asyncQueue: AsyncQueue, updateFunction: (transaction: Transaction) => Promise<T>, deferred: Deferred<T>): void;
    applyRemoteEvent(remoteEvent: RemoteEvent): Promise<void>;
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    applyOnlineStateChange(onlineState: OnlineState, source: OnlineStateSource): void;
    rejectListen(targetId: TargetId, err: FirestoreError): Promise<void>;
    applySuccessfulWrite(mutationBatchResult: MutationBatchResult): Promise<void>;
    rejectFailedWrite(batchId: BatchId, error: FirestoreError): Promise<void>;
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    registerPendingWritesCallback(callback: Deferred<void>): Promise<void>;
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    private triggerPendingWritesCallbacks;
    /** Reject all outstanding callbacks waiting for pending writes to complete. */
    private rejectOutstandingPendingWritesCallbacks;
    private addMutationCallback;
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    protected processUserCallback(batchId: BatchId, error: Error | null): void;
    protected removeAndCleanupTarget(targetId: number, error?: Error | null): void;
    private removeLimboTarget;
    protected updateTrackedLimbos(targetId: TargetId, limboChanges: LimboDocumentChange[]): void;
    private trackLimboChange;
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    private pumpEnqueuedLimboResolutions;
    activeLimboDocumentResolutions(): SortedMap<DocumentKey, TargetId>;
    enqueuedLimboDocumentResolutions(): DocumentKey[];
    protected emitNewSnapsAndNotifyLocalStore(changes: MaybeDocumentMap, remoteEvent?: RemoteEvent): Promise<void>;
    protected assertSubscribed(fnName: string): void;
    handleCredentialChange(user: User): Promise<void>;
    enableNetwork(): Promise<void>;
    disableNetwork(): Promise<void>;
    getRemoteKeysForTarget(targetId: TargetId): DocumentKeySet;
}
/**
 * An impplementation of SyncEngine that implement SharedClientStateSyncer for
 * Multi-Tab synchronization.
 */
export declare class MultiTabSyncEngine extends SyncEngine implements SharedClientStateSyncer {
    protected localStore: MultiTabLocalStore;
    private isPrimary;
    constructor(localStore: MultiTabLocalStore, remoteStore: RemoteStore, sharedClientState: SharedClientState, currentUser: User, maxConcurrentLimboResolutions: number);
    get isPrimaryClient(): boolean;
    enableNetwork(): Promise<void>;
    disableNetwork(): Promise<void>;
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */
    private synchronizeViewAndComputeSnapshot;
    applyOnlineStateChange(onlineState: OnlineState, source: OnlineStateSource): void;
    applyBatchState(batchId: BatchId, batchState: MutationBatchState, error?: FirestoreError): Promise<void>;
    applyPrimaryState(isPrimary: boolean): Promise<void>;
    private resetLimboDocuments;
    /**
     * Reconcile the query views of the provided query targets with the state from
     * persistence. Raises snapshots for any changes that affect the local
     * client and returns the updated state of all target's query data.
     */
    private synchronizeQueryViewsAndRaiseSnapshots;
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */
    private synthesizeTargetToQuery;
    getActiveClients(): Promise<ClientId[]>;
    applyTargetState(targetId: TargetId, state: QueryTargetState, error?: FirestoreError): Promise<void>;
    applyActiveTargetsChange(added: TargetId[], removed: TargetId[]): Promise<void>;
}
export {};
