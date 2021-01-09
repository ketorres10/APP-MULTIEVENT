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
import * as firestore from '@firebase/firestore-types';
import { FieldTransform } from '../model/mutation';
import { ParseContext } from './user_data_reader';
/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */
export declare abstract class FieldValueImpl {
    readonly _methodName: string;
    protected constructor(_methodName: string);
    abstract toFieldTransform(context: ParseContext): FieldTransform | null;
    abstract isEqual(other: FieldValue): boolean;
}
export declare class DeleteFieldValueImpl extends FieldValueImpl {
    constructor();
    toFieldTransform(context: ParseContext): null;
    isEqual(other: FieldValue): boolean;
}
export declare class ServerTimestampFieldValueImpl extends FieldValueImpl {
    constructor();
    toFieldTransform(context: ParseContext): FieldTransform;
    isEqual(other: FieldValue): boolean;
}
export declare class ArrayUnionFieldValueImpl extends FieldValueImpl {
    private readonly _elements;
    constructor(_elements: unknown[]);
    toFieldTransform(context: ParseContext): FieldTransform;
    isEqual(other: FieldValue): boolean;
}
export declare class ArrayRemoveFieldValueImpl extends FieldValueImpl {
    readonly _elements: unknown[];
    constructor(_elements: unknown[]);
    toFieldTransform(context: ParseContext): FieldTransform;
    isEqual(other: FieldValue): boolean;
}
export declare class NumericIncrementFieldValueImpl extends FieldValueImpl {
    private readonly _operand;
    constructor(_operand: number);
    toFieldTransform(context: ParseContext): FieldTransform;
    isEqual(other: FieldValue): boolean;
}
export declare class FieldValue implements firestore.FieldValue {
    static delete(): FieldValueImpl;
    static serverTimestamp(): FieldValueImpl;
    static arrayUnion(...elements: unknown[]): FieldValueImpl;
    static arrayRemove(...elements: unknown[]): FieldValueImpl;
    static increment(n: number): FieldValueImpl;
    isEqual(other: FieldValue): boolean;
}
