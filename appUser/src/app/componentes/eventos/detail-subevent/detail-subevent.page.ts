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
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-detail-subevent',
  templateUrl: './detail-subevent.page.html',
  styleUrls: ['./detail-subevent.page.scss'],
})
export class DetailSubeventPage implements OnInit {

  public idSubevent: any;
  public idSala: any;
  router: any;

  public iduser: string;
  public band: boolean = true;
  public subevent$: Observable<EventI>;
  public beacons$: Observable<BeaconI[]>;
  public userData$: Observable<firebase.User>;
  constructor(public route: ActivatedRoute, public eventoService: EventosService, public alertCtrl: AlertController, public authservice: AuthService, public beaconService: BeaconService, private auth: AngularFireAuth, private navController: NavController) {
    this.userData$ = auth.authState;
   }

  ngOnInit() {
    this.userData$.subscribe(user => this.iduser = user.uid);
    this.idSubevent= this.route.snapshot.params.id;
    this.subevent$ = this.eventoService.getOneSubEvent(this.idSubevent);  
    this.beacons$ = this.beaconService.getAllBeacons();
    this.subevent$.subscribe(event=>{
      console.log(event.title, event.id, event.sala);
      if(event.idUsers){
        event.idUsers.forEach(element => {
          if(element== this.iduser){
            this.band = false;
          }
        });
      }
      this.beacons$.subscribe(salas => {
        //this.idBeacon = beacon.id;
        salas.forEach(sala => {
          if (event.sala == sala.id) {
            this.idSala = sala.sala;
          }
        });
      })
    })
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
          }
        }

      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  }


}
