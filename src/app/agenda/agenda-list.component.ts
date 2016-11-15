import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { ActivatedRoute }    from '@angular/router';

import { Agenda } from './agenda';
import { AgendaService } from './agenda.service';
import { AgendaDetailsComponent } from './agenda-details.component';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';


@Component({
  selector: 'kore-agenda-list',
  template: `
  <h2>Hi!</h2>
  	 <div>
      <ul>
        <li *ngFor="let agenda of agendas | async">
          <a [routerLink]="['./', agenda.id]">
            {{agenda.name}}
          </a>
          <button (click)="deleteAgenda(agenda.id)">Delete</button>

        </li>
      </ul>  
  	</div>	
    
  `
})
export class AgendaListComponent implements OnInit {

  errorMessage: string;
  agendas: Observable<Array<any>>;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() { this.getAgendas(); }

  getAgendas() {

      this.agendas = this.agendaService.getAgendas();

  }

  deleteAgenda(id) {
      console.log(this.agendas)
        this.agendaService.removeAgenda(id);
    }

}