import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/shared/servicios/evento.service';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { EventI } from 'src/app/shared/models/events.interface';
import { AlertController, NavController } from '@ionic/angular';
import { BeaconService } from 'src/app/shared/servicios/beacon.service';
import { SafeMethodCall } from '@angular/compiler';
import { BeaconI } from 'src/app/shared/models/beacon.interface';

@Component({
  selector: 'app-detail-subevent',
  templateUrl: './detail-subevent.page.html',
  styleUrls: ['./detail-subevent.page.scss'],
})
export class DetailSubeventPage implements OnInit {

  public idSubevent: any;
  public idSala: any;
  router: any;
  public subevent$: Observable<EventI>;
  public beacons$: Observable<BeaconI[]>;
  constructor(public route: ActivatedRoute, public eventoService: EventosService, public alertCtrl: AlertController, public authservice: AuthService, public beaconService: BeaconService) { }

  ngOnInit() {
    this.idSubevent= this.route.snapshot.params.id;
    this.subevent$ = this.eventoService.getOneSubEvent(this.idSubevent);  
    this.beacons$ = this.beaconService.getAllBeacons();
    this.subevent$.subscribe(event=>{
      console.log(event.title, event.id);
    })
  }
  //metodo
  onLogout(){
    this.authservice.logout();
  }
  async registerEvent() {
    const alert = await this.alertCtrl.create({
      header: '¿Está seguro de añadir el evento a tu agenda?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            console.log('Confirma Cancelar');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Registrado');
            this.eventoService.registerUserOnSubEvent(this.idSubevent);

            if (this.eventoService.registerUserOnEvent == this.idSubevent) {
              console.log("registrado");
            } else {
              console.log("error");
            }
          }
        }

      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  }

}
