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
          <a [routerLink]="['agenda', agenda.id]">
            {{agenda.name}}
          </a>
        </li>
      </ul>      
  	</div>	
    
  `,
})
export class AgendaListComponent implements OnInit {
  
  // @Input('agenda') agenda: Agenda;
  // @Input() listId: string;
  // @Input() editId: string;
  errorMessage: string;
  agendas: Observable<Array<any>>;

  constructor(private agendaService: AgendaService) { }

  // ngOnInit() { this.getAgendas(); }

  // getAgendas() {
  //     this.agendas = this.agendaService.getAgendas()
  //     .subscribe(agendas => this.agendas = agendas,
  //                 error => this.errorMessage = <any>error);
  // }

  ngOnInit() {
    this.agendas = this.agendaService.getAgendas()
  }

}

  