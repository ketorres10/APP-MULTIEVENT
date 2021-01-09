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
import { CredentialsProvider } from '../api/credentials';
import { MaybeDocument, Document } from '../model/document';
import { DocumentKey } from '../model/document_key';
import { Mutation, MutationResult } from '../model/mutation';
import { Connection } from './connection';
import { JsonProtoSerializer } from './serializer';
import { PersistentListenStream, PersistentWriteStream, WatchStreamListener, WriteStreamListener } from './persistent_stream';
import { AsyncQueue } from '../util/async_queue';
import { Query } from '../core/query';
/**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
export declare class Datastore {
    private _;
}
export declare function newDatastore(connection: Connection, credentials: CredentialsProvider, serializer: JsonProtoSerializer): Datastore;
export declare function invokeCommitRpc(datastore: Datastore, mutations: Mutation[]): Promise<MutationResult[]>;
export declare function invokeBatchGetDocumentsRpc(datastore: Datastore, keys: DocumentKey[]): Promise<MaybeDocument[]>;
export declare function invokeRunQueryRpc(datastore: Datastore, query: Query): Promise<Document[]>;
export declare function newPersistentWriteStream(datastore: Datastore, queue: AsyncQueue, listener: WriteStreamListener): PersistentWriteStream;
export declare function newPersistentWatchStream(datastore: Datastore, queue: AsyncQueue, listener: WatchStreamListener): PersistentListenStream;
