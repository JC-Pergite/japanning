import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute }    from '@angular/router';

import { Agenda } from './agenda';
import { AgendaService } from './agenda.service';
import { AgendaDetailsComponent } from './agenda-details.component';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';


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
            <app-agenda-details [editId]="editId" 
            [listId]="listId"
            *ngFor="let agenda of agendas" [agenda]="agenda">
            </app-agenda-details>
  `,
})
export class AgendaListComponent implements OnInit {
  
  @Input() agenda: Agenda;
    @Input() listId: string;
  @Input() editId: string;
  errorMessage: string;
  agendas: Agenda[];

  constructor(private route: ActivatedRoute, private agendaService: AgendaService) { }

  ngOnInit() { this.getAgendas(); }

  getAgendas() {
      this.agendaService.getAgendas()
      .subscribe(agendas => this.agendas = agendas,
                  error => this.errorMessage = <any>error);               
  }

}