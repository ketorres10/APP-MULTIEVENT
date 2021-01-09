import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public folder: string;
  email:string;
  password: string;
 
  //en ves de authservice
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
   // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSubmitLogin(){
    //referencia del AuthService que se inyecto en la clase
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['../eventos/']);
    }).catch (err=>alert('los datos son incorrectos o no existe el usuario'))
  }

}