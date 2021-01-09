import { Injectable } from '@angular/core';
//importar Firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { EventI } from '../models/events.interface';
import { map } from 'rxjs/operators';
import { BeaconI } from '../models/beacon.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventsCollection: AngularFirestoreCollection<EventI>;
  private subeventsCollection: AngularFirestoreCollection<EventI>;
  constructor(private db: AngularFirestore) {
    this.eventsCollection = db.collection<EventI>('events');
    this.subeventsCollection = db.collection<EventI>('subevents');
  }

  public getAllEvents(): Observable<EventI[]> {
    return this.eventsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as EventI;
            const id = a.payload.doc.id;
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
}
