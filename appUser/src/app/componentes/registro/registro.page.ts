import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../shared/servicios/auth.service";
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/models/user.interface';
import { FormGroup, FormControl,  Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public user: UserI;

  constructor( private auth: AuthService, private router: Router) { }
  newUserForm = new FormGroup({ 
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  ngOnInit() {
  }
  //metodo retorna una promesa
  onSubmitRegister(user: UserI){
    console.log("entro aqui", user);
    this.auth.register(user).then(auth =>{
      console.log(auth)
      this.router.navigate(['../eventos/']);
    }).catch(err=>console.log(err))
  }

}
