import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';

@Component({
	selector: 'app-agenda-details',
	template: `
		<h1>Osaka</h1>
	`, 

})
export class AgendaDetailsComponent implements OnInit {

	agenda: Agenda;
	id: number;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		let id = Number.parseInt(this.route.snapshot.params['id'], 10);
	};

}
