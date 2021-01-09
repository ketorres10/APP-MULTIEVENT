import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/shared/servicios/evento.service';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { EventI } from 'src/app/shared/models/events.interface';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-subevent',
  templateUrl: './detail-subevent.page.html',
  styleUrls: ['./detail-subevent.page.scss'],
})
export class DetailSubeventPage implements OnInit {

  public idSubevent: any;
  router: any;
  public subevent$: Observable<EventI>;
  constructor(public route: ActivatedRoute, public eventoService: EventosService, public alertCtrl: AlertController, public authservice: AuthService,) { }

  ngOnInit() {
    this.idSubevent= this.route.snapshot.params.id;
    this.subevent$ = this.eventoService.getOneSubEvent(this.idSubevent);  
    this.subevent$.subscribe(event=>{
      console.log(event.title, event.id);
    })
  }
  //metodo
  //onLogout(){
   // this.authservice.logout();
  //}
  async onLogout(){
    const alert = await this.alertCtrl.create({
      header: '¿Está seguro de añadir el evento a tu agenda?',
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
