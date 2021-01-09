import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/servicios/auth.service';
import { EventosService } from "src/app/shared/servicios/evento.service";
import { Observable } from 'rxjs';
import { EventI } from 'src/app/shared/models/events.interface';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
 
  public eventos$ : Observable<EventI[]>;
  public listEvents : EventI[]= [];

  constructor(public authService: AuthService, public eventoService: EventosService) { }

  Onlogout(){
    this.authService.logout();
  }
  
  ngOnInit(){
    this.eventos$=this.eventoService.getAllEvents();
    this.eventos$.subscribe(eventos=>{
      eventos.forEach(element=>{
        console.log(element);
        this.listEvents.push(element as EventI);
      })
    })
  }

}
