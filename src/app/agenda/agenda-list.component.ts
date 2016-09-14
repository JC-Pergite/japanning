import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Agenda } from './agenda';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agenda-list',
  template: `
  <h2>Hi!</h2>
  	<div>
      <ul>
        <li *ngFor="let agenda of agendas" >
  		    <a href="#" routerLink="{{'/agenda/' + agenda.id}}">
            {{agenda.name}}
          </a>
        </li>
      </ul>    
  	</div>	 
  `
})
export class AgendaListComponent implements OnInit {
  
  // agendas: Observable<Agenda[]>;
  errorMessage: string;
  agendas: Agenda[];

  constructor(private agendaService: AgendaService) { }

  ngOnInit() { this.getAgendas(); }

  getAgendas() {
      this.agendaService.getAgendas()
      .subscribe(agendas => this.agendas = agendas,
                  error => this.errorMessage = <any>error);               
  }

}
