import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/shared/servicios/evento.service';
import { Observable } from 'rxjs';
import { EventI } from 'src/app/shared/models/events.interface';

@Component({
  selector: 'app-moreinformation-subevent',
  templateUrl: './moreinformation-subevent.component.html',
  styleUrls: ['./moreinformation-subevent.component.scss'],
})
export class MoreinformationSubeventComponent implements OnInit {

  public idSubevent: any;
  router: any;
  public subevent$: Observable<EventI>;
  constructor(public route: ActivatedRoute, public eventoService: EventosService) { }

  ngOnInit() {
    this.idSubevent= this.route.snapshot.params.id;
    this.subevent$ = this.eventoService.getOneSubEvent(this.idSubevent);  
    this.subevent$.subscribe(event=>{
      console.log(event.title, event.id);
    })
  }

}
