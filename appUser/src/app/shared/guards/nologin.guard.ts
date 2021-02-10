import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//se va a saber si el usuario esta autenticado
import { AngularFireAuth } from "@angular/fire/auth"
import { map } from 'rxjs/operators';
//router
import { Router } from "@angular/router"
import { isNull, isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  
  constructor(private AFauth: AngularFireAuth,
    private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AFauth.authState.pipe(map( auth => {
        //si el estado de autenticacion
        if (isNullOrUndefined(auth)){
          //si no esta autenticado retorna true
          return true;
        }else{
          //redireccion al router
          this.router.navigate(['/eventos']);
          //si esta autenticado
          return false;
        }
        //console.log(auth);
        //return false;

      }))
  }
  
}
