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
import * as firestore from '@firebase/firestore-types';
import * as api from '../protos/firestore_proto_api';
import { Firestore } from './database';
export declare type ServerTimestampBehavior = 'estimate' | 'previous' | 'none';
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 */
export declare class UserDataWriter<T = firestore.DocumentData> {
    private readonly firestore;
    private readonly timestampsInSnapshots;
    private readonly serverTimestampBehavior?;
    private readonly converter?;
    constructor(firestore: Firestore, timestampsInSnapshots: boolean, serverTimestampBehavior?: "estimate" | "previous" | "none" | undefined, converter?: firestore.FirestoreDataConverter<T> | undefined);
    convertValue(value: api.Value): unknown;
    private convertObject;
    private convertGeoPoint;
    private convertArray;
    private convertServerTimestamp;
    private convertTimestamp;
    private convertReference;
}
