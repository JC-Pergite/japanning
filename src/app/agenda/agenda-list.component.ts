import { Component, OnInit } from '@angular/core';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agenda-list',
  template: `
  	<div *ngFor="let agenda of agendas | async">
  		<a routerLink="{{'../' + agenda.id}}">{{agenda.name}}</a>
  	</div>	 
  `
})
export class AgendaListComponent implements OnInit {
  
  agendas: Agenda[] = [];

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
  	this.agendas = this.agendaService.getAgendas();
  }

}
