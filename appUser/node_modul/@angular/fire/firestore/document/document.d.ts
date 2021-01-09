import { Observable } from 'rxjs';
import { DocumentReference, SetOptions, DocumentData, QueryFn, Action, DocumentSnapshot } from '../interfaces';
import { AngularFirestore } from '../firestore';
import { AngularFirestoreCollection } from '../collection/collection';
import { firestore } from 'firebase/app';
/**
 * AngularFirestoreDocument service
 *
 * This class creates a reference to a Firestore Document. A reference is provided in
 * in the constructor. The class is generic which gives you type safety for data update
 * methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
 * await fakeStock.set({ name: 'FAKE', price: 0.01 });
 * fakeStock.valueChanges().map(snap => {
 *   if(snap.exists) return snap.data();
 *   return null;
 * }).subscribe(value => console.log(value));
 * // OR! Transform using Observable.from() and the data is unwrapped for you
 * Observable.from(fakeStock).subscribe(value => console.log(value));
 */
export declare class AngularFirestoreDocument<T = DocumentData> {
    ref: DocumentReference;
    private afs;
    /**
     * The contstuctor takes in a DocumentReference to provide wrapper methods
     * for data operations, data streaming, and Symbol.observable.
     * @param ref
     */
    constructor(ref: DocumentReference, afs: AngularFirestore);
    /**
     * Create or overwrite a single document.
     * @param data
     * @param options
     */
    set(data: T, options?: SetOptions): Promise<void>;
    /**
     * Update some fields of a document without overwriting the entire document.
     * @param data
     */
    update(data: Partial<T>): Promise<void>;
    /**
     * Delete a document.
     */
    delete(): Promise<void>;
    /**
     * Create a reference to a sub-collection given a path and an optional query
     * function.
     * @param path
     * @param queryFn
     */
    collection<R = DocumentData>(path: string, queryFn?: QueryFn): AngularFirestoreCollection<R>;
    /**
     * Listen to snapshot updates from the document.
     */
    snapshotChanges(): Observable<Action<DocumentSnapshot<T>>>;
    /**
     * Listen to unwrapped snapshot updates from the document.
     */
    valueChanges(): Observable<T | undefined>;
    /**
     * Retrieve the document once.
     * @param options
     */
    get(options?: firestore.GetOptions): Observable<firestore.DocumentSnapshot<firestore.DocumentData>>;
}
