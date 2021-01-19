import { Component, OnInit } from '@angular/core';
import { AuthService, } from 'src/app/shared/servicios/auth.service';
import { AlertController, NavController } from '@ionic/angular';
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
  email: string;
  password: string;
  showPassword=false;
  passwordToggleIcon="eye";

  //en ves de authservice
  constructor(private authService: AuthService, public router: Router, private alertCtrl: AlertController, private navController: NavController) { }
  togglePassword():void{
    this.showPassword = !this.showPassword;
    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon= 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  }
  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSubmitLogin() {
    //referencia del AuthService que se inyecto en la clase
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['../eventos/']);
    }).catch(async err => {
      const alert = await this.alertCtrl.create({
        header: 'Datos incorrectos o usuario inexistente',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.navController.navigateForward(['login']);

            }
          }

        ]
      });
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);
    }
    );
  }

}