import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.page.html',
  styleUrls: ['./cerrar.page.scss'],
})
export class CerrarPage implements OnInit {

  constructor(public authservice: AuthService, public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  //metodo
  //onLogout(){
   // this.authservice.logout();
  //}
  async onLogout(){
    const alert = await this.alertCtrl.create({
      header: '¿Está seguro de que quiere cerrar sesión?',
      buttons:[
        {
          text: 'Cancelar',
          handler: (blah) =>{
            console.log('Confirm Cncek: blah');
          }
        },{
          text:'Aceptar',
          handler:() =>{
            console.log('confirmOkey');
            this.authservice.logout();
          }
        }
        
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  }
  
  

}
