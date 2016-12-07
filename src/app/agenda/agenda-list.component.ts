import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Agenda } from './agenda';
import { AgendaService } from './agenda.service';

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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgendaListComponent implements OnInit {

    errorMessage: string;
    agendas: Observable<Array<any>>;
    days: Agenda[] = [];
    id: number;

    constructor(private agendaService: AgendaService) { }

    ngOnInit() { this.getAgendas(); }

    getAgendas() {
        this.agendas = this.agendaService.getAgendas();
    }

    addPlan(name) {
        let makeNew = new Agenda(this.id, name, []);
        this.agendaService.addAgendas(makeNew)
              .subscribe(agenda => this.days.push(agenda));  
    }

    deleteAgenda(dayId) {
        console.log(this.agendas);
        this.agendaService.removeAgenda(dayId)
          .subscribe(agendas => this.days = agendas);
    }
}