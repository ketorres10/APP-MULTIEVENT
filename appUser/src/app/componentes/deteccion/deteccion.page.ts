import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BeaconI } from 'src/app/shared/models/beacon.interface';
import { EventI } from 'src/app/shared/models/events.interface';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { EventosService } from 'src/app/shared/servicios/evento.service';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { BeaconService } from 'src/app/shared/servicios/beacon.service';
declare var evothings: any;

@Component({
  selector: 'app-deteccion',
  templateUrl: './deteccion.page.html',
  styleUrls: ['./deteccion.page.scss'],
})
export class DeteccionPage implements OnInit {

  public eventos$: Observable<EventI[]>;
  public subevento$: Observable<EventI>;
  public beacons$: Observable<BeaconI[]>;
  public idBeacon: any;
  public listEvents: EventI[] = [];
  public listSubEvents: EventI[] = [];
  public idSala: any;
  public Userdata$: Observable<firebase.User>;
  constructor(public platform: Platform, private route: ActivatedRoute, public authService: AuthService, public eventoService: EventosService, public auth: AngularFireAuth, public beaconService: BeaconService) {
    this.Userdata$ = auth.authState
  }
  startScanning() {
    this.platform.ready().then(() => {
      // @ts-ignore
      evothings.eddystone.startScan((BeaconData) => {
        // console.log('BeaconData',Object.keys(BeaconData));
        console.log('BeaconData2', JSON.stringify(BeaconData));
        var convertData = String.fromCharCode.apply(null, BeaconData.nid);
        var valor = "";
        for (var i = 0; i < convertData.length; i++) {
          var resultNumber = convertData.charCodeAt(i);   //Decimal
          var str = (+resultNumber).toString(16)
          var resultString: String = ""
          if (str.length <= 1) {
            resultString = ("0" + (+resultNumber).toString(16)).toUpperCase().substring(-2); //String
            this.beacons$ = this.beaconService.getAllBeacons();
            this.beacons$.subscribe(salas => {
              //this.idBeacon = beacon.id;
              salas.forEach(sala => {
                if (sala.beaconUID == resultString) {
                  this.idSala = sala.id;
                  console.log(this.idSala);
                }
              });
            })
            this.eventos$ = this.eventoService.getAllEvents();
            this.eventos$.subscribe(eventos => {
              eventos.forEach(evento => {
                if (evento.sala == this.idSala) {
                  console.log('Evento: ', evento);
                }
              })
            })
            this.listEvents.forEach(element => {
              console.log(element);
            });
          } else {
            resultString = ("" + (+resultNumber).toString(16)).toUpperCase().substring(-2); //String
          }
          valor = valor + resultString;
        }
        console.log("uid: ", valor);
      }, error => console.error('error: ', error)
      );
    });
  }
  stopScan() {
    evothings.eddystone.stopScan();
  }
  ngOnInit() {
  }

}
