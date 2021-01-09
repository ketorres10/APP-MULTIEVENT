import { Injectable } from '@angular/core';
//importar Firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { UserI } from '../models/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    private userCollection: AngularFirestoreCollection<UserI>;
    constructor( private db: AngularFirestore) { 
      this.userCollection=db.collection<UserI>('users');
    }
    
  
}