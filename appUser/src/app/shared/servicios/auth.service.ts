import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'dns';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { auth, User } from 'firebase';
import { UserI } from '../models/user.interface';
import { Observable } from 'rxjs';
import { FileI } from '../models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData$: Observable<firebase.User>;
  private filePath: string;
  public name: String;
  public photo: String;
  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore, private storage: AngularFireStorage) {
    this.userData$ = AFauth.authState;
  }

  //método login que recibe un email y el password
  login(email: string, password: string) {
    //acceder a todos las funciones de Angular Auth
    //respuesta del llamado
    //retornar
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
        //caso contrario error
      }).catch(err => rejected(err));
    });

  }
  logout() {
    this.AFauth.signOut().then(auth => {
      this.router.navigate(['/folder/Inicio']);
    })
  }

  //metodo para el registro, recibe los datos y guarda en la base

  register(user: UserI) {
    console.log('hola');
    return new Promise((resolve, reject) => {
      //recibe un email y un password
      //res es un objeto que es auth que nos da acceso a las propiedades del id, etc
      console.log("registro", user);
      this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(res => {
        //console.log(res.user.uid);
        const uid = res.user.uid;
        //apuntar a la base de datos
        this.db.collection('users').doc(uid).set({
          displayName: user.displayName,
          email: user.email,
          password: user.password,
          phoneNumber: user.phoneNumber,
          description: user.description,
          urlImage: user.urlImage,
          uid: uid,
        })
        resolve(res)
      }).catch(err => reject(err))
    })

  }

  preSaveProfile(user: UserI, image: string, idUser?: string): void {
    console.log(image);
    if (idUser) {
      if(image){
        this.uploadImage(user, image, idUser);
      }else{
        console.log("llego aqui");
        this.updateUserProfile(user, idUser);
      }
    } else {
      if(image){
        this.uploadImage(user, image);
      }else{
        this.register(user);
      }
      
    }
  }
  private uploadImage(user: UserI, image: string, idUser?: string): void {
    this.filePath = `images/${user.email}`;
    const fileRef = this.storage.ref(this.filePath);
    //const task = this.storage.upload(this.filePath);
    var task = fileRef.putString(image, 'data_url', { contentType: 'image/jpg' }).then(() => {
      console.log('Image uploaded');
      fileRef.getDownloadURL().subscribe(urlImage => {
        user.urlImage = urlImage;
        if(idUser){
          this.updateUserProfile(user, idUser);
        }else{
          this.register(user);
        }
      })
    });
  }

  private saveUserProfile(user: UserI, idUser?: string) {
    console.log("hola", idUser);
    this.updateUserProfile(user, idUser);
    console.log("llego a saveuser");
    this.AFauth.currentUser.then(userp => {
      console.log("llego a saveuser 2");
      userp.updateProfile({
        displayName: user.displayName,
        photoURL: user.urlImage
      })
        .then(() => console.log('updated'))
        .catch(err => console.log('Error', err));
    })
  }

  updateUserProfile(usr: UserI, id: string) {
    console.log('usuario actualizado', id);
    return this.db.collection('users').doc(id).update(usr);
  }
  public getUser(id: string): Observable<UserI> {
    // Create a query against the collection.
    return this.db.doc<UserI>(`users/${id}`).valueChanges();
  }

}
