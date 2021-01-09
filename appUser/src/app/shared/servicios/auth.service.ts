import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'dns';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from 'firebase';
import { UserI } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  //método login que recibe un email y el password
  login(email:string, password:string){
    //acceder a todos las funciones de Angular Auth
    //respuesta del llamado
    //retornar
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email,password).then(user =>{
        resolve(user)
        //caso contrario error
      }).catch(err => rejected(err));
    });
    
  }
  logout(){
    this.AFauth.signOut().then(auth =>{
      this.router.navigate(['/folder/Inicio']);
    })
    }
  
  //metodo para el registro, recibe los datos y guarda en la base

  register(user: UserI){

    return new Promise ((resolve, reject) => {
      //recibe un email y un password
      //res es un objeto que es auth que nos da acceso a las propiedades del id, etc
      console.log("registro", user);
    this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then (res => {
      //console.log(res.user.uid);
      const uid = res.user.uid;
      //apuntar a la base de datos
      this.db.collection('users').doc(uid).set({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        uid: uid,
      })
      resolve (res)
    }).catch (err => reject(err))
    })

  }
}
