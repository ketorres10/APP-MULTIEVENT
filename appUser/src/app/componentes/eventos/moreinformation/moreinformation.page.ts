import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventosPage } from '../eventos.page';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { EventosService } from 'src/app/shared/servicios/evento.service';
import { Observable, Subscription } from 'rxjs';
import { EventI } from 'src/app/shared/models/events.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BeaconI } from 'src/app/shared/models/beacon.interface';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/auth";
import { BeaconService } from 'src/app/shared/servicios/beacon.service';
import { element } from 'protractor';

@Component({
  selector: 'app-moreinformation',
  templateUrl: './moreinformation.page.html',
  styleUrls: ['./moreinformation.page.scss'],
})
export class MoreinformationPage implements OnInit {


  public event$: Observable<EventI>;
  mostrar = true;
  public iduser: string;
  //public subids: Array<string>;
  public subevent$: Observable<EventI>;
  public subevents$: Observable<EventI[]>;
  public subeventList: EventI[] = [];
  public beacon$: Observable<BeaconI>;
  public beacons$: Observable<BeaconI[]>;
  public subscriptionSub;
  public band: boolean = true;
  public idEvent: any;
  public idSala: any;
  public subscribeEvent: Subscription;
  router: any;
  public userdata$: Observable<firebase.User>;

  constructor(public authService: AuthService, public eventoService: EventosService, private route: ActivatedRoute, private auth: AngularFireAuth, public alertCtrl: AlertController, public beaconService: BeaconService, private navController: NavController,) {
    //obtener los datos del usuario autenticados
    this.userdata$ = auth.authState;
  }
  Onlogout() {
    this.authService.logout();
  }
  ngOnInit() {
    this.userdata$.subscribe(user => this.iduser = user.uid);
    this.idEvent = this.route.snapshot.params.id;
    this.event$ = this.eventoService.getOneEvent(this.idEvent);
    this.beacons$ = this.beaconService.getAllBeacons();
    this.event$.subscribe(event => {
      if (event.idUsers) {
        //console.log("user", this.iduser);
        event.idUsers.forEach(element => {
          if (element == this.iduser) {
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
      //console.log('hola', event);
      if (typeof event.idSubevents === 'undefined' || event.idSubevents == 0) {
        console.log('no hay subeventos');
      } else {
        event.id = this.idEvent;
        event.idSubevents.forEach(element => {
          //console.log(element, "elemento");
          this.subevent$ = this.eventoService.getOneSubEvent(element);
          const subscripSub = this.subevent$.subscribe(subevent => {
            //console.log('sala id antes de beacon: ', subevent.sala)
            this.beacon$ = this.eventoService.getBeacon(element.sala);
            const subscription = this.beacon$.subscribe(res => {
              // console.log('subevento: ', subevent);
              const subeventObj = {
                id: subevent.id,
                title: subevent.title,
                siglas: subevent.siglas,
                descrip: subevent.descrip,
                topics: subevent.topics,
                date: subevent.date,
                finishdate: subevent.finishdate,
                time: subevent.time,
                sala: subevent.sala
              };
              this.subeventList.push(subeventObj as EventI);
              //

            })
            
          })
        });
      }
      //this.subscribeEvent.unsubscribe();
    })
  }
  async registerEvent() {
    const alert = await this.alertCtrl.create({
      header: '¿Está seguro de agregar el evento a su agenda?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            console.log('Confirma Cancelar');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('confirmOkey');
            this.eventoService.registerUserOnEvent(this.idEvent);
          }
        }

      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  }
}