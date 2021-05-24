import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { EventosService } from "src/app/shared/servicios/evento.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EventI } from 'src/app/shared/models/events.interface';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  public eventos$: Observable<EventI[]>;
  public listEvents: EventI[] = [];
  public idSala: any;
  constructor(public authService: AuthService, public eventoService: EventosService,private router: Router) { }

  Onlogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.eventos$ = this.eventoService.getAllEvents();
    const subs_events = this.eventos$.subscribe(eventos => {
        eventos.forEach(element => {
          console.log(element);
          this.listEvents.push(element as EventI);
        })
      subs_events.unsubscribe();
    })
  }

}
