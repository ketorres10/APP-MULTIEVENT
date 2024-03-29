import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { EventosService } from "src/app/shared/servicios/evento.service";
import { Observable, Subscription } from 'rxjs';
import { EventI } from 'src/app/shared/models/events.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  public eventos$: Observable<EventI[]>;
  public subevento$: Observable<EventI>;
  public listEvents: EventI[] = [];
  public listSubEvents: EventI[] = [];
  public Userdata$: Observable<firebase.User>;
  public iduser: any;
  constructor(public eventoService: EventosService, public authService: AuthService, public auth: AngularFireAuth, public alertCtrl: AlertController) {
    this.Userdata$ = auth.authState;
  }
  ngOnInit() {
    console.log("dsdscsd");
    this.listEvents = [];
    this.listSubEvents =[];
    this.Userdata$.subscribe(user => {
      this.iduser = user.uid;
    })
    console.log('entro al oninit');
    this.eventos$ = this.eventoService.getAllEvents();
    const sub1 = this.eventos$.subscribe(eventos => {
      eventos.forEach(evento => {
        console.log(evento);
        if (evento.idUsers) {
          evento.idUsers.forEach(element => {
            if (element == this.iduser) {
              console.log('llego aqui');
              this.listEvents.push(evento as EventI);
              console.log('se agregó: ', evento.title);
            }
          });
          if (typeof evento.idSubevents === 'undefined' || evento.idSubevents == 0) {
            console.log('no hay eventos');
          } else {
            evento.idSubevents.forEach(idsub => {
              this.subevento$ = this.eventoService.getOneSubEvent(idsub);
              const subs = this.subevento$.subscribe(sub => {
                if (sub.idUsers) {
                  sub.idUsers.forEach(ids => {
                    if (ids == this.iduser) {
                      this.listSubEvents.push(sub as EventI);
                      console.log('se agregó: ', sub.title);
                    }
                  });
                } else {
                  console.log('No hay usuarios registrados en: ', sub);
                }
                subs.unsubscribe();
              })
            });
          }
        } else {
          console.log('No hay usuarios registrados en: ', evento);
          if (typeof evento.idSubevents === 'undefined' || evento.idSubevents == 0) {
            console.log('no hay subeventos');
          } else {
            console.log('llego aqui');
            evento.idSubevents.forEach(idsub => {
              this.subevento$ = this.eventoService.getOneSubEvent(idsub);
              const subSub2 = this.subevento$.subscribe(sub => {
                if (sub.idUsers) {
                  sub.idUsers.forEach(ids => {
                    if (ids == this.iduser) {
                      this.listSubEvents.push(sub as EventI);
                      console.log('se agregó: ', sub.title);
                    }
                  });
                } else {
                  console.log('No hay usuarios registrados en: ', sub);
                }
                subSub2.unsubscribe();
              })
            });
          }
        }
      })
      sub1.unsubscribe();
    })
  }

  async deleteevent(evt: EventI) {
    const alert = await this.alertCtrl.create({
      header: '¿Está seguro de eliminar el evento de tu agenda?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            console.log('Confirma Cancelar');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Eliminado');
            this.eventoService.deleteOnEvent(this.iduser, evt.id).then(()=>{
              this.ngOnInit();
            })
          }
        }

      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async deletesub(subevt: EventI){
    const alert = await this.alertCtrl.create({
      header: '¿Está seguro de eliminar este subevento de tu agenda?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            console.log('Confirma Cancelar');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Eliminado');
            this.eventoService.deleteOnSubEvent(this.iduser, subevt.id).then(()=>{
              this.ngOnInit();
            })
          }
        }

      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
