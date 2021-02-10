import { Injectable } from '@angular/core';
//importar Firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { EventI } from '../models/events.interface';
import { map } from 'rxjs/operators';
import { BeaconI } from '../models/beacon.interface';
import { AngularFireAuth } from "@angular/fire/auth";
import { resolve } from 'dns';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventsCollection: AngularFirestoreCollection<EventI>;
  private subeventsCollection: AngularFirestoreCollection<EventI>;
  private beaconCollection: AngularFirestoreCollection<BeaconI>;
  public userData$: Observable<firebase.User>;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {
    this.eventsCollection = db.collection<EventI>('events');
    this.subeventsCollection = db.collection<EventI>('subevents');
    this.beaconCollection = db.collection<BeaconI>('beacons');
    this.userData$ = auth.authState;

  }
  public getAllEvents(): Observable<EventI[]> {
    console.log('getallevents');
    return this.eventsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as EventI;
            const id = a.payload.doc['id'];
            return { id, ...data };
          })
        )
      )
  }
  getOneEvent(id: EventI): Observable<EventI> {
    return this.db.doc<EventI>(`events/${id}`).valueChanges();
  }

  getBeacon(id: string): Observable<BeaconI> {
    return this.db.doc<BeaconI>(`beacons/${id}`).valueChanges();
  }
  getOneSubEvent(id: string): Observable<EventI> {
    return this.db.doc<EventI>(`subevents/${id}`).valueChanges();
  }
  registerUserOnSubEvent(id: string) {
    this.userData$.subscribe(user => {
      const eventRef = this.db.collection('subevents').doc(id);
      console.log(eventRef);
      eventRef.update({
        //funcion de firestore: agg datos a un arreglo
        idUsers: firebase.firestore.FieldValue.arrayUnion(user.uid)
      });
    })
  }
  registerUserOnEvent(id: string) {
    this.userData$.subscribe(user => {
      const eventRef = this.db.collection('events').doc(id);
      console.log('aqui', id);
      eventRef.update({
        //funcion de firestore: agg datos a un arreglo
        idUsers: firebase.firestore.FieldValue.arrayUnion(user.uid)
      });
    })
  }
  deleteOnEvent(id: string, idevt: string) {
    console.log("id de evento:", idevt);
    const eventRef = this.db.collection('events').doc(idevt);
    var val = eventRef.update({
      idUsers: firebase.firestore.FieldValue.arrayRemove(id)
    });
    return val;
  }

  deleteOnSubEvent(id: string, idsub: string) {
    const eventRef = this.db.collection('subevents').doc(idsub);
    console.log(eventRef);
    eventRef.update({
      idUsers: firebase.firestore.FieldValue.arrayRemove(id)
    });
  }
}
