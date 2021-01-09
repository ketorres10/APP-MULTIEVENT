import { Injectable } from '@angular/core';
//importar Firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BeaconI } from '../models/beacon.interface';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class BeaconService {

  private beaconCollection: AngularFirestoreCollection<BeaconI>;
  
    constructor(private db: AngularFirestore, private auth: AngularFireAuth) {
      this.beaconCollection = db.collection<BeaconI>('beacons');
    }
    public getAllBeacons(): Observable<BeaconI[]> {
      return this.beaconCollection
        .snapshotChanges()
        .pipe(
          map(actions =>
            actions.map(a => {
              const data = a.payload.doc.data() as BeaconI;
              const id = a.payload.doc.id;
              return { id, ...data };
            })
          )
        )
    }
    getBeacon(id: string): Observable<BeaconI> {
      return this.db.doc<BeaconI>(`beacons/${id}`).valueChanges();
    }
}
