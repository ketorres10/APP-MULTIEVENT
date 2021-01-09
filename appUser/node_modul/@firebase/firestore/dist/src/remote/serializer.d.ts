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
import { Blob } from '../api/blob';
import { Timestamp } from '../api/timestamp';
import { DatabaseId } from '../core/database_info';
import { Direction, FieldFilter, Filter, Operator, OrderBy } from '../core/query';
import { SnapshotVersion } from '../core/snapshot_version';
import { Target } from '../core/target';
import { TargetData } from '../local/target_data';
import { Document, MaybeDocument } from '../model/document';
import { DocumentKey } from '../model/document_key';
import { ObjectValue } from '../model/object_value';
import { FieldMask, Mutation, MutationResult } from '../model/mutation';
import { FieldPath, ResourcePath } from '../model/path';
import * as api from '../protos/firestore_proto_api';
import { FirestoreError } from '../util/error';
import { ByteString } from '../util/byte_string';
import { WatchChange, WatchTargetChangeState } from './watch_change';
export interface SerializerOptions {
    /**
     * The serializer supports both Protobuf.js and Proto3 JSON formats. By
     * setting this flag to true, the serializer will use the Proto3 JSON format.
     *
     * For a description of the Proto3 JSON format check
     * https://developers.google.com/protocol-buffers/docs/proto3#json
     */
    useProto3Json: boolean;
}
/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
export declare class JsonProtoSerializer {
    private databaseId;
    private options;
    constructor(databaseId: DatabaseId, options: SerializerOptions);
    fromRpcStatus(status: api.Status): FirestoreError;
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    private toInt32Proto;
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     */
    private fromInt32Proto;
    /**
     * Returns an IntegerValue for `value`.
     */
    toInteger(value: number): api.Value;
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */
    toDouble(value: number): api.Value;
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */
    toNumber(value: number): api.Value;
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */
    toTimestamp(timestamp: Timestamp): api.Timestamp;
    private fromTimestamp;
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */
    toBytes(bytes: Blob | ByteString): string | Uint8Array;
    /**
     * Returns a ByteString based on the proto string value.
     */
    fromBytes(value: string | Uint8Array | undefined): ByteString;
    toVersion(version: SnapshotVersion): api.Timestamp;
    fromVersion(version: api.Timestamp): SnapshotVersion;
    toResourceName(path: ResourcePath, databaseId?: DatabaseId): string;
    fromResourceName(name: string): ResourcePath;
    toName(key: DocumentKey): string;
    fromName(name: string): DocumentKey;
    toQueryPath(path: ResourcePath): string;
    fromQueryPath(name: string): ResourcePath;
    get encodedDatabaseId(): string;
    private fullyQualifiedPrefixPath;
    private extractLocalPathFromResourceName;
    /** Creates an api.Document from key and fields (but no create/update time) */
    toMutationDocument(key: DocumentKey, fields: ObjectValue): api.Document;
    toDocument(document: Document): api.Document;
    fromDocument(document: api.Document, hasCommittedMutations?: boolean): Document;
    private fromFound;
    private fromMissing;
    fromMaybeDocument(result: api.BatchGetDocumentsResponse): MaybeDocument;
    fromWatchChange(change: api.ListenResponse): WatchChange;
    fromWatchTargetChangeState(state: api.TargetChangeTargetChangeType): WatchTargetChangeState;
    versionFromListenResponse(change: api.ListenResponse): SnapshotVersion;
    toMutation(mutation: Mutation): api.Write;
    fromMutation(proto: api.Write): Mutation;
    private toPrecondition;
    private fromPrecondition;
    private fromWriteResult;
    fromWriteResults(protos: api.WriteResult[] | undefined, commitTime?: api.Timestamp): MutationResult[];
    private toFieldTransform;
    private fromFieldTransform;
    toDocumentsTarget(target: Target): api.DocumentsTarget;
    fromDocumentsTarget(documentsTarget: api.DocumentsTarget): Target;
    toQueryTarget(target: Target): api.QueryTarget;
    fromQueryTarget(target: api.QueryTarget): Target;
    toListenRequestLabels(targetData: TargetData): api.ApiClientObjectMap<string> | null;
    private toLabel;
    toTarget(targetData: TargetData): api.Target;
    private toFilter;
    private fromFilter;
    private toOrder;
    private fromOrder;
    private toCursor;
    private fromCursor;
    toDirection(dir: Direction): api.OrderDirection;
    fromDirection(dir: api.OrderDirection | undefined): Direction | undefined;
    toOperatorName(op: Operator): api.FieldFilterOp;
    fromOperatorName(op: api.FieldFilterOp): Operator;
    toFieldPathReference(path: FieldPath): api.FieldReference;
    fromFieldPathReference(fieldReference: api.FieldReference): FieldPath;
    toPropertyOrder(orderBy: OrderBy): api.Order;
    fromPropertyOrder(orderBy: api.Order): OrderBy;
    fromFieldFilter(filter: api.Filter): Filter;
    toUnaryOrFieldFilter(filter: FieldFilter): api.Filter;
    fromUnaryFilter(filter: api.Filter): Filter;
    toDocumentMask(fieldMask: FieldMask): api.DocumentMask;
    fromDocumentMask(proto: api.DocumentMask): FieldMask;
}
export declare function isValidResourceName(path: ResourcePath): boolean;
