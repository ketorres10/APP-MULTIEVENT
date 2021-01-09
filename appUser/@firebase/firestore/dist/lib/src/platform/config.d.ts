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
import { FirebaseApp, FirebaseNamespace } from '@firebase/app-types';
import { FirebaseAuthInternalName } from '@firebase/auth-interop-types';
import { Provider } from '@firebase/component';
import { Firestore, DocumentReference, DocumentSnapshot, QueryDocumentSnapshot, Query, QuerySnapshot, CollectionReference, Transaction, WriteBatch } from '../api/database';
import { Blob } from '../api/blob';
import { FieldValue } from '../api/field_value';
export declare const PublicFirestore: typeof Firestore;
export declare const PublicTransaction: typeof Transaction;
export declare const PublicWriteBatch: typeof WriteBatch;
export declare const PublicDocumentReference: typeof DocumentReference;
export declare const PublicDocumentSnapshot: typeof DocumentSnapshot;
export declare const PublicQueryDocumentSnapshot: typeof QueryDocumentSnapshot;
export declare const PublicQuery: typeof Query;
export declare const PublicQuerySnapshot: typeof QuerySnapshot;
export declare const PublicCollectionReference: typeof CollectionReference;
export declare const PublicFieldValue: typeof FieldValue;
export declare const PublicBlob: typeof Blob;
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
export declare function configureForFirebase(firebase: FirebaseNamespace, firestoreFactory: (app: FirebaseApp, auth: Provider<FirebaseAuthInternalName>) => Firestore): void;
