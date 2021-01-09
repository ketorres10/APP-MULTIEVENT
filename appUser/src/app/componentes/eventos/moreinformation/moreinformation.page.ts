import { Component, OnInit } from '@angular/core';
import { EventosPage } from '../eventos.page';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { EventosService } from 'src/app/shared/servicios/evento.service';
import { Observable } from 'rxjs';
import { EventI } from 'src/app/shared/models/events.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BeaconI } from 'src/app/shared/models/beacon.interface';

@Component({
  selector: 'app-moreinformation',
  templateUrl: './moreinformation.page.html',
  styleUrls: ['./moreinformation.page.scss'],
})
export class MoreinformationPage implements OnInit {


  public event$: Observable<EventI>;
  //public subids: Array<string>;
  public subevent$: Observable<EventI>;
  public subevents$: Observable<EventI[]>;
  public subeventList: EventI[] = [];
  public beacon$: Observable<BeaconI>;
  public subscriptionSub;
  public idEvent: any;
  router: any;

  constructor(public authService: AuthService, public eventoService: EventosService, private route: ActivatedRoute) { }

  Onlogout() {
    this.authService.logout();
  }
  ngOnInit() {
    const idEvent = this.route.snapshot.params.id;
    this.event$ = this.eventoService.getOneEvent(idEvent);
    this.event$
      .subscribe(event => {
        if (event.idSubevents != 0) {
          console.log(event);
          event.id = this.idEvent;
          event.idSubevents.forEach(element => {
            console.log(element, "elemento");
            this.subevent$ = this.eventoService.getOneSubEvent(element);
            const subscripSub = this.subevent$.subscribe(subevent => {
              //console.log('sala id antes de beacon: ', subevent.sala)
              var salaid = subevent.sala;
              this.beacon$ = this.eventoService.getBeacon(subevent.sala);
              const subscription = this.beacon$.subscribe(res => {
                console.log('subevento: ', subevent);
                const subeventObj = {
                  id: subevent.id,
                  title: subevent.title,
                  siglas: subevent.siglas,
                  descrip: subevent.descrip,
                  topics: subevent.topics,
                  date: subevent.date,
                  finishdate: subevent.finishdate,
                  time: subevent.time,
                  idsala: subevent.sala,
                  sala: res.sala
                };
                this.subeventList.push(subeventObj as EventI);
                //this.dataSource.data = this.subeventList;
                subscription.unsubscribe();
                subscripSub.unsubscribe();
              })
            })
          });
        } else {
          console.log("No subeventos");
        }

      })
  }
}