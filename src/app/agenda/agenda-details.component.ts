import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';

@Component({
	selector: 'app-agenda-details',
	template: `
		<div>{{id}}</div>
		<br>
		<a routerLink="../list">Agenda</a>
	`, 

})
export class AgendaDetailsComponent implements OnInit {

	agenda: Agenda;
	id: number;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.id = Number.parseInt(this.route.snapshot.params['id'], 10);
	};

}
